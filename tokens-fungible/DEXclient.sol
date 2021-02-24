pragma solidity >= 0.6.0;
pragma AbiHeader expire;

interface IRootTokenContract {
	function deployEmptyWallet(uint32 _answer_id, int8 workchain_id, uint256 pubkey, uint256 internal_owner, uint128 grams) external functionID(0x0000000d) returns (address value0);
}

interface ITONTokenWallet {
	function transfer(address dest, uint128 tokens, uint128 grams) external functionID(0x0000000c);
	function getBalance_InternalOwner(uint32 _answer_id) external functionID(0x0000000d) returns (uint128 value0);
}

interface IDEXclient {
	function setPair(address arg0, address arg1, address arg2, address arg3, address arg4, address arg5) external functionID(0x00000003);
	function setBalanceToken(uint128 value0) external functionID(0x00000004);
	function setNewEmptyWallet(address value0) external functionID(0x00000007);
	function setPairDepositA(address arg0) external functionID(0x00000008);
	function setPairDepositB(address arg0) external functionID(0x00000009);

}

interface IDEXpair {
	function connect() external functionID(0x00000005);
	function setPairDepositWallet(address value0) external functionID(0x0000000a);
	function setWalletBalance(uint128 value0) external functionID(0x00000006);
	function setPairReserveWallet(address value0) external functionID(0x0000000b);
}

contract DEXclient is IDEXclient {

	// Wallet structure
	struct Wallet {
		uint256 index;
		address root;
		uint128 balance;
	}

	mapping(address => Wallet) wallets;
	address[] walletKeys;

	mapping(address => address) roots;
	address[] rootKeys;

	// Pair structure
	struct Pair {
		uint256 index;
		address rootA;
		address pairWalletA;
		address depositWalletA;
		uint128 allowanceA;
		address rootB;
		address pairWalletB;
		address depositWalletB;
		uint128 allowanceB;
	}

	mapping(address => Pair) pairs;
	address[] pairKeys;

	uint128 tongrams1;
	uint128 tongrams2;

	uint128 constant PRICE_CONNECT_PAIR = 3000000000;

	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 101);
		tvm.accept();
		_;
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public view checkOwnerAndAccept {
		dest.transfer(value, bounce, 3);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function connectPair(address pairAddr) public checkOwnerAndAccept view returns (bool statusConnection) {
		statusConnection = false;
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).connect);
		pairAddr.transfer({value:PRICE_CONNECT_PAIR, body:body});
		statusConnection = true;
	}

	function setPair(address arg0, address arg1, address arg2, address arg3, address arg4, address arg5) public alwaysAccept override functionID(0x00000003) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		if (!pairs.exists(dexpair)){
			pairKeys.push(dexpair);
			cp.index = pairKeys.length;
			cp.rootA = arg0;
			cp.pairWalletA = arg1;
			cp.depositWalletA = arg2;
			cp.allowanceA = 0;
			cp.rootB = arg3;
			cp.pairWalletB = arg4;
			cp.depositWalletB = arg5;
			cp.allowanceB = 0;
			pairs[dexpair] = cp;
		}
	}

	function setPairDepositA(address arg0) public alwaysAccept override functionID(0x00000008) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		cp.depositWalletA = arg0;
		pairs[dexpair] = cp;
	}

	function setPairDepositB(address arg0) public alwaysAccept override functionID(0x00000009) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		cp.depositWalletB = arg0;
		pairs[dexpair] = cp;
	}


	function getPair(address value0) public view alwaysAccept returns (address pairRootA, address pairReserveA, address clientDepositA, uint128 clientAllowanceA, address pairRootB, address pairReserveB, address clientDepositB, uint128 clientAllowanceB) {
		Pair cp = pairs[value0];
		pairRootA = cp.rootA;
		pairReserveA = cp.pairWalletA;
		clientDepositA = cp.depositWalletA;
		clientAllowanceA = cp.allowanceA;
		pairRootB = cp.rootB;
		pairReserveB = cp.pairWalletB;
		clientDepositB = cp.depositWalletB;
		clientAllowanceB = cp.allowanceB;
	}

	function sendTokens(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
		transmitter = from;
		receiver = to;
		body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
		transmitter.transfer({value:20000000, body:body});
	}

	function sendTokens2(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept returns (address transmitter, address receiver) {
		transmitter = from;
		receiver = to;
		ITONTokenWallet(transmitter).transfer{value:20000000}(receiver, tokens, grams);
	}


	function askBalanceToken(address walletAddr) public view checkOwnerAndAccept {
		address transmitter = walletAddr;
		TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).getBalance_InternalOwner, 0x00000004);
		transmitter.transfer({value:20000000, body:body});
	}

	function askBalanceAllTokens() public view checkOwnerAndAccept {
		uint128 count = 0;
		repeat(walletKeys.length) {
			askBalanceToken(walletKeys[count]);
			count++;
		}
	}

	function setBalanceToken(uint128 value0) public alwaysAccept override functionID(0x00000004) {
		Wallet wc = wallets[msg.sender];
		wc.balance = value0;
		wallets[msg.sender] = wc;
	}

	function getWalletBalance(address walletAddr) public view alwaysAccept returns (uint128 walletBal) {
		Wallet wc = wallets[walletAddr];
		walletBal = wc.balance;
	}

	function setTongrams(uint128 msgGramPrice1, uint128 msgGramPrice2) public alwaysAccept {
		tongrams1 = msgGramPrice1;
		tongrams2 = msgGramPrice2;
	}

	function getTongrams() public view alwaysAccept returns (uint128 msgGramPrice1, uint128 msgGramPrice2){
		msgGramPrice1 = tongrams1;
		msgGramPrice2 = tongrams2;
	}

	function createNewEmptyWallet(address rootAddr) public view checkOwnerAndAccept  returns (bool createStatus) {
		createStatus = false;
		if (!roots.exists(rootAddr)){
			address creator = rootAddr;
			address owner = address(this);
			uint256 ownerUINT = owner.value;
			TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, 0, ownerUINT, 1000000000);
			creator.transfer({value:2000000000, bounce:false, body:body});
			createStatus = true;
		}
	}

	function setNewEmptyWallet(address value0) public override alwaysAccept functionID(0x00000007){
		address root = msg.sender;
		address wallet = value0;
		roots[root] = wallet;
		if (!roots.exists(root)){
			rootKeys.push(root);
			walletKeys.push(wallet);
			Wallet wc = wallets[wallet];
			wc.index = walletKeys.length;
			wc.root = root;
			wc.balance = 0;
			wallets[wallet] = wc;
		}
	}

	function createPairClientWallets(address pairAddr) public view checkOwnerAndAccept returns (bool createStatusA, bool createStatusB) {
		createStatusA = false;
		createStatusB = false;
		Pair cp = pairs[pairAddr];
		if (!roots.exists(cp.rootA)){createNewEmptyWallet(cp.rootA);createStatusA = true;}
		if (!roots.exists(cp.rootB)){createNewEmptyWallet(cp.rootB);createStatusB = true;}
	}

	function getPairClientWallets(address pairAddr) public view alwaysAccept returns (address clientWalletA, address clientWalletB){
		Pair cp = pairs[pairAddr];
		clientWalletA = roots[cp.rootA];
		clientWalletB = roots[cp.rootB];
	}

	function askPairWalletsBalance(address pairAddr) public view checkOwnerAndAccept {
		Pair cp = pairs[pairAddr];
		askBalanceToken(roots[cp.rootA]);
		askBalanceToken(roots[cp.rootB]);
	}

	function getPairWalletsBalance(address pairAddr) public view alwaysAccept returns (uint128 balanceClientWalletA, uint128 balanceClientWalletB) {
		Pair cp = pairs[pairAddr];
		balanceClientWalletA = getWalletBalance(roots[cp.rootA]);
		balanceClientWalletB = getWalletBalance(roots[cp.rootB]);
	}

	function showContractAddress() public pure alwaysAccept returns (address dexclient, uint256 dexclientUINT256){
		dexclient = address(this);
		dexclientUINT256 = dexclient.value;
	}

	// function step1ToPairProvider(address pairAddr, uint128 qtyA) public view checkOwnerAndAccept returns (bool status) {
	// 	status = false;
	// 	Pair cp = pairs[pairAddr];
	//
	// }







}
