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
	function setPair(address arg0, address arg1, address arg2, address arg3) external functionID(0x00000003);
	function setBalanceToken(uint128 value0) external functionID(0x00000004);
	function setNewEmptyWallet(address value0) external functionID(0x00000007);

}

interface IDEXpair {
	function connectPair() external functionID(0x00000005);
	function setBalanceToken(uint128 value0) external functionID(0x00000006);
}

contract DEXclient is IDEXclient {

	// Wallet structure
	struct Wallet {
		uint128 index;
		address root;
		uint128 balance;
	}

	mapping(address => Wallet) wallets;
	address[] walletKeys;

	mapping(address => address) roots;
	address[] rootKeys;

	// Pair structure
	struct Pair {
		uint128 index;
		address rootA;
		address pairWalletA;
		address depositWalletA
		uint128 allowanceA;
		address rootB;
		address pairWalletB;
		address depositWalletB
		uint128 allowanceB;
	}

	mapping(address => Pair) pairs;
	address[] pairKeys;

	uint128 tongrams1;
	uint128 tongrams2;
	
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
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).connectPair);
		pairAddr.transfer({value:20000000, body:body});
		statusConnection = true;
	}

	function setPair(address arg0, address arg1, address arg2, address arg3) public alwaysAccept override functionID(0x00000003) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		if (!pairs.exists(dexpair)){
			pairKeys.push(dexpair);
			cp.index = pairKeys.length;
		}
		cp.rootA = arg0;
		cp.pairWalletA = arg1;
		cp.allowanceA = 0;
		cp.rootB = arg2;
		cp.pairWalletB = arg3;
		cp.allowanceB = 0;
		pairs[dexpair] = cp;
	}

	function getPair(address value0) public view alwaysAccept returns (address arg0, address arg1, uint128 arg2, address arg3, address arg4, uint128 arg5) {
		Pair cp = pairs[value0];
		arg0 = cp.rootA;
		arg1 = cp.pairWalletA;
		arg2 = cp.allowanceA;
		arg3 = cp.rootB;
		arg4 = cp.pairWalletB;
		arg5 = cp.allowanceB;
		if (pairs.exists(value0)){pairKeys.push(value0);}
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

	function createPairWallets(address pairAddr) public view checkOwnerAndAccept returns (bool createStatusA, bool createStatusB) {
		createStatusA = false;
		createStatusB = false;
		Pair cp = pairs[pairAddr];
		if (!roots.exists(cp.rootA)){createNewEmptyWallet(cp.rootA);createStatusA = true;}
		if (!roots.exists(cp.rootB)){createNewEmptyWallet(cp.rootB);createStatusB = true;}
	}

	function getPairWallets(address pairAddr) public view alwaysAccept returns (address pairWalletA, address pairWalletB){
		Pair cp = pairs[pairAddr];
		pairWalletA = roots[cp.rootA];
		pairWalletB = roots[cp.rootB];
	}

	function askPairWalletsBalance(address pairAddr) public view checkOwnerAndAccept {
		Pair cp = pairs[pairAddr];
		askBalanceToken(roots[cp.rootA]);
		askBalanceToken(roots[cp.rootB]);
	}

	function getPairWalletsBalance(address pairAddr) public view alwaysAccept returns (uint128 balanceWalletA, uint128 balanceWalletB) {
		Pair cp = pairs[pairAddr];
		balanceWalletA = getWalletBalance(roots[cp.rootA]);
		balanceWalletB = getWalletBalance(roots[cp.rootB]);
	}

	function showContractAddress() public pure alwaysAccept returns (address dexclient, uint256 dexclientUINT256){
		dexclient = address(this);
		dexclientUINT256 = dexclient.value;
	}

	function step1ToPairProvider(address pairAddr, uint128 qtyA) public view checkOwnerAndAccept returns (bool status) {
		status = false;
		Pair cp = pairs[pairAddr];

	}







}
