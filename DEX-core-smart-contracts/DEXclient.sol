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
	function setWrapper(address arg0, address arg1) external functionID(0x00000089);
	function callbackUnwrapTON(uint128 value0) external functionID(0x00000024);
}

interface IDEXpair {
	function connect() external functionID(0x00000005);
	function setPairDepositWallet(address value0) external functionID(0x0000000a);
	function setWalletBalance(uint128 value0) external functionID(0x00000006);
	function setPairReserveWallet(address value0) external functionID(0x0000000b);
	function processLiquidity(uint128 qtyA, uint128 qtyB, address returnAddrA, address returnAddrB) external functionID(0x00000011);
	function processSwapA(uint128 qtyA, address returnAddrA, address returnAddrB) external functionID(0x00000012);
	function processSwapB(uint128 qtyB, address returnAddrA, address returnAddrB) external functionID(0x00000021);
	function returnDeposit(address returnAddrA, address returnAddrB) external functionID(0x00000018);
	function returnAllLiquidity() external functionID(0x00000019);
}

interface ITONWrapper {
	function wrapGrams(address destination) external functionID(0x00000025);
	function unwrapGrams() external functionID(0x00000052);
	function setDepositWallet(address value0) external functionID(0x00000125);
	function balanceDepositWallet(uint128 value0) external functionID(0x00000152);
}

contract DEXclient is IDEXclient {

	address constant ROOT_WRAPPED_TON = address(0xbc865dc0b225ec75e158a2e3f862ce6a2398f733930de3fc626643dfdacfb798);
	address constant WRAPPER_TON = address(0xf927ff6dee96e051fb51e7183c13846a376e549aae29a7a5b699c7ec68a9d213);

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

	// Wrapper structure
	struct Wrapper {
		address root;
		address depositWallet;
	}

	mapping(address => Wrapper) wrappers;
	address[] wrappersKeys;

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

	// Grams constants
	uint128 constant GRAMS_CONNECT_PAIR = 2200000000;
	uint128 constant GRAMS_PROCESS_LIQUIDITY = 2200000000;
	uint128 constant GRAMS_PROCESS_SWAP = 1600000000;
	uint128 constant GRAMS_SENDTOKENS_TRANSMITER = 500000000;
	uint128 constant GRAMS_SENDTOKENS_RECEIVER = 300000000;
	uint128 constant GRAMS_PROCESS_RETURN = 220000000;
	uint128 constant GRAMS_ROOT_CREATE = 1000000000;
	uint128 constant GRAMS_NEW_WALLET = 500000000;
	uint128 constant GRAMS_GET_BALANCE = 220000000;
	uint128 constant GRAMS_UNWRAP = 220000000;

	// Modifier that allows public function to accept external calls always.
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

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier onlyOwnerWallets {
		require(wallets.exists(msg.sender), 107);
		tvm.accept();
		_;
	}


	// Init function.
	constructor() public {
		require(tvm.pubkey() == msg.pubkey(), 102);
		tvm.accept();
		createNewEmptyWallet(ROOT_WRAPPED_TON);
	}


	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public view checkOwnerAndAccept {
		dest.transfer(value, bounce, 3);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	// Function to connect DEXclient to new DEXpair.
	function connectPair(address pairAddr) public checkOwnerAndAccept view returns (bool statusConnection) {
		statusConnection = false;
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).connect);
		pairAddr.transfer({value:GRAMS_CONNECT_PAIR, body:body});
		statusConnection = true;
	}

	// Function private for internal create DEXclient wallet for specified TIP3 RootToken.
	function createNewEmptyWallet(address rootAddr) private view alwaysAccept  returns (bool createStatus) {
		createStatus = false;
		if (!roots.exists(rootAddr)){
			address creator = rootAddr;
			address owner = address(this);
			uint256 ownerUINT = owner.value;
			TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, 0, ownerUINT, GRAMS_NEW_WALLET);
			creator.transfer({value:GRAMS_ROOT_CREATE, bounce:false, body:body});
			createStatus = true;
		}
	}

	// Function to create DEXclient wallet for specified TIP3 RootToken.
	function createNewEmptyWalletByOwner(address rootAddr) public view checkOwnerAndAccept  returns (bool createStatus) {
		createStatus = false;
		if (!roots.exists(rootAddr)){
			address creator = rootAddr;
			address owner = address(this);
			uint256 ownerUINT = owner.value;
			TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, 0, ownerUINT, GRAMS_NEW_WALLET);
			creator.transfer({value:GRAMS_ROOT_CREATE, bounce:false, body:body});
			createStatus = true;
		}
	}

	// Callback for new deployed wallet address setting.
	function setNewEmptyWallet(address value0) public override alwaysAccept functionID(0x00000007){
		address root = msg.sender;
		address wallet = value0;
		if (!roots.exists(root)){
			roots[root] = wallet;
			rootKeys.push(root);
			walletKeys.push(wallet);
			Wallet wc = wallets[wallet];
			wc.index = walletKeys.length;
			wc.root = root;
			wc.balance = 0;
			wallets[wallet] = wc;
		}
	}

	// Function to get DEXclient wallet for specified TIP3 RootToken.
	function getWalletByRoot(address rootAddr) public view alwaysAccept returns (address wallet) {
		wallet = roots[rootAddr];
	}

	// Function to get DEXclient wallet for wrapped TON.
	function getAddressWTON() public view alwaysAccept returns (address wallet) {
		wallet = getWalletByRoot(ROOT_WRAPPED_TON);
	}

	// Callback for DEXpair to set connection data.
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
			createNewEmptyWallet(cp.rootA);
			createNewEmptyWallet(cp.rootB);
			pairs[dexpair] = cp;
		}
	}

	// Callback for DEXpair to set deposit wallet for tokenA.
	function setPairDepositA(address arg0) public alwaysAccept override functionID(0x00000008) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		cp.depositWalletA = arg0;
		pairs[dexpair] = cp;
	}

	// Callback for DEXpair to set deposit wallet for tokenB.
	function setPairDepositB(address arg0) public alwaysAccept override functionID(0x00000009) {
		address dexpair = msg.sender;
		Pair cp = pairs[dexpair];
		cp.depositWalletB = arg0;
		pairs[dexpair] = cp;
	}

	// Function to get DEXpair connection data.
	function getPair(address value0) public view alwaysAccept returns (address pairRootA, address pairReserveA, address clientDepositA, uint128 clientAllowanceA, address pairRootB, address pairReserveB, address clientDepositB, uint128 clientAllowanceB, address curPair) {
		Pair cp = pairs[value0];
		pairRootA = cp.rootA;
		pairReserveA = cp.pairWalletA;
		clientDepositA = cp.depositWalletA;
		clientAllowanceA = cp.allowanceA;
		pairRootB = cp.rootB;
		pairReserveB = cp.pairWalletB;
		clientDepositB = cp.depositWalletB;
		clientAllowanceB = cp.allowanceB;
		curPair = value0;
	}

	// Function to send tokens by DEXclient. Only owner.
	function sendTokens(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
		transmitter = from;
		receiver = to;
		body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
		transmitter.transfer({value:GRAMS_SENDTOKENS_TRANSMITER, body:body});
	}

	// Function2 to send tokens by DEXclient. Only owner.
	function sendTokens2(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept returns (address transmitter, address receiver) {
		transmitter = from;
		receiver = to;
		ITONTokenWallet(transmitter).transfer{value:GRAMS_SENDTOKENS_TRANSMITER}(receiver, tokens, grams);
	}

	// Function3 to send tokens by DEXclient. Only owner.
	function sendTokens3(address from, address to, uint128 tokens) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
		transmitter = from;
		receiver = to;
		body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, GRAMS_SENDTOKENS_RECEIVER);
		transmitter.transfer({value:GRAMS_SENDTOKENS_TRANSMITER, body:body});
	}

	// Function to ask wallet where DEXclient internal_owner for balance.
	function askBalanceToken(address walletAddr) public view checkOwnerAndAccept {
		address transmitter = walletAddr;
		TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).getBalance_InternalOwner, 0x00000004);
		transmitter.transfer({value:GRAMS_GET_BALANCE, body:body});
	}

	// Function to ask all wallets where DEXclient internal_owner for balance.
	function askBalanceAllTokens() public view checkOwnerAndAccept {
		uint128 count = 0;
		repeat(walletKeys.length) {
			askBalanceToken(walletKeys[count]);
			count++;
		}
	}

	// Callback from wallet where DEXclient internal_owner with balance value.
	function setBalanceToken(uint128 value0) public alwaysAccept override functionID(0x00000004) {
		Wallet wc = wallets[msg.sender];
		wc.balance = value0;
		wallets[msg.sender] = wc;
	}

	// Function to get wallet balance where DEXclient internal_owner after callbak came.
	function getBalanceTokenWallet(address walletAddr) public view alwaysAccept returns (uint128 walletBal) {
		Wallet wc = wallets[walletAddr];
		walletBal = wc.balance;
	}

	// Function to get DEXclient wallets from same roots as DEXpair. DEXclient internal_owner of this wallets.
	function getPairClientWallets(address pairAddr) public view alwaysAccept returns (address walletA, address walletB, address pairReturn){
		Pair cp = pairs[pairAddr];
		walletA = roots[cp.rootA];
		walletB = roots[cp.rootB];
		pairReturn = pairAddr;
	}

	// Function to ask from DEXclient balances of wallets from same roots as DEXpair. DEXclient internal_owner of this wallets.
	function askPairWalletsBalance(address pairAddr) public view checkOwnerAndAccept {
		Pair cp = pairs[pairAddr];
		askBalanceToken(roots[cp.rootA]);
		askBalanceToken(roots[cp.rootB]);
	}

	// Function to get DEXclient balances of wallets from same roots as DEXpair. First need execute askPairWalletsBalance.
	function getPairWalletsBalance(address pairAddr) public view alwaysAccept returns (uint128 balanceWalletA, uint128 balanceWalletB) {
		Pair cp = pairs[pairAddr];
		balanceWalletA = getBalanceTokenWallet(roots[cp.rootA]);
		balanceWalletB = getBalanceTokenWallet(roots[cp.rootB]);
	}

	// Function to get all connected pairs and created wallets of DEXclient.
	function getAllDataPreparation() public view alwaysAccept returns(address[] pairKeysR, address[] walletKeysR){
		pairKeysR = pairKeys;
		walletKeysR = walletKeys;
	}

	// Function to get DEXclient address.
	function showContractAddress() public pure alwaysAccept returns (address dexclient, uint256 dexclientUINT256){
		dexclient = address(this);
		dexclientUINT256 = dexclient.value;
	}

	// Function to make tokenA and tokenB deposit for DEXpair.
	function makeABdepositToPair(address pairAddr, uint128 qtyA, uint128 qtyB) public view checkOwnerAndAccept returns (bool makeDepositStatus) {
		makeDepositStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(cp.rootA != address(0) && cp.depositWalletA != address(0), 104);
		require(cp.rootB != address(0) && cp.depositWalletB != address(0), 105);
		sendTokens(roots[cp.rootA], cp.depositWalletA, qtyA, GRAMS_SENDTOKENS_RECEIVER);
		sendTokens(roots[cp.rootB], cp.depositWalletB, qtyB, GRAMS_SENDTOKENS_RECEIVER);
		makeDepositStatus = true;
	}

	// Function to make tokenA deposit for DEXpair.
	function makeAdepositToPair(address pairAddr, uint128 qtyA) public view checkOwnerAndAccept returns (bool makeDepositStatus) {
		makeDepositStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(cp.rootA != address(0) && cp.depositWalletA != address(0), 104);
		sendTokens(roots[cp.rootA], cp.depositWalletA, qtyA, GRAMS_SENDTOKENS_RECEIVER);
		makeDepositStatus = true;
	}

	// Function to make tokenB deposit for DEXpair.
	function makeBdepositToPair(address pairAddr, uint128 qtyB) public view checkOwnerAndAccept returns (bool makeDepositStatus) {
		makeDepositStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(cp.rootB != address(0) && cp.depositWalletB != address(0), 105);
		sendTokens(roots[cp.rootB], cp.depositWalletB, qtyB, GRAMS_SENDTOKENS_RECEIVER);
		makeDepositStatus = true;
	}

	// Function to return tokens from DEXpair deposits.
	function returnDepositFromPair(address pairAddr) public view checkOwnerAndAccept returns (bool returnDepositStatus) {
		returnDepositStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(roots.exists(cp.rootA) && roots.exists(cp.rootB), 103);
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).returnDeposit, roots[cp.rootA], roots[cp.rootB]);
		pairAddr.transfer({value:GRAMS_PROCESS_RETURN, body:body});
		returnDepositStatus = true;
	}

	// Function to provide liquidity to DEXpair.
	function processLiquidity(address pairAddr, uint128 qtyA, uint128 qtyB) public view checkOwnerAndAccept returns (bool processLiquidityStatus) {
		processLiquidityStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(roots.exists(cp.rootA) && roots.exists(cp.rootB), 103);
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).processLiquidity, qtyA, qtyB, roots[cp.rootA], roots[cp.rootB]);
		pairAddr.transfer({value:GRAMS_PROCESS_LIQUIDITY, body:body});
		processLiquidityStatus = true;
	}

	// Function to returm all liquidity from DEXpair.
	function returnAllLiquidity(address pairAddr) public view checkOwnerAndAccept returns (bool returnLiquidityStatus) {
		returnLiquidityStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(roots.exists(cp.rootA) && roots.exists(cp.rootB), 103);
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).returnAllLiquidity);
		pairAddr.transfer({value:GRAMS_PROCESS_LIQUIDITY, body:body});
		returnLiquidityStatus = true;
	}

	// Function to swap tokenA.
	function processSwapA(address pairAddr, uint128 qtyA) public view checkOwnerAndAccept returns (bool processSwapStatus) {
		processSwapStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(roots.exists(cp.rootA) && roots.exists(cp.rootB), 103);
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).processSwapA, qtyA, roots[cp.rootA], roots[cp.rootB]);
		pairAddr.transfer({value:GRAMS_PROCESS_SWAP, body:body});
		processSwapStatus = true;
	}

	// Function to swap tokenB.
	function processSwapB(address pairAddr, uint128 qtyB) public view checkOwnerAndAccept returns (bool processSwapStatus) {
		processSwapStatus = false;
		require(pairs.exists(pairAddr), 102);
		Pair cp = pairs[pairAddr];
		require(roots.exists(cp.rootA) && roots.exists(cp.rootB), 103);
		TvmCell body = tvm.encodeBody(IDEXpair(pairAddr).processSwapB, qtyB, roots[cp.rootA], roots[cp.rootB]);
		pairAddr.transfer({value:GRAMS_PROCESS_SWAP, body:body});
		processSwapStatus = true;
	}

	// Function to get balance TONgrams for DEXclient.
	function getBalanceTONgrams() public pure alwaysAccept returns (uint128 balanceTONgrams){
		return address(this).balance;
	}

	// Callback function for warpper.
	function setWrapper(address arg0, address arg1) public alwaysAccept override functionID(0x00000089) {
		address wrapper = msg.sender;
		if (!wrappers.exists(wrapper)){
			Wrapper cw = wrappers[wrapper];
			cw.root = arg0;
			cw.depositWallet = arg1;
			wrappers[wrapper] = cw;
			wrappersKeys.push(wrapper);
		}
	}

	// Function to wrap TON.
	function wrapTON(uint128 qtyTONgrams) public view checkOwnerAndAccept returns (bool processWrapStatus) {
		processWrapStatus = false;
		require(!(qtyTONgrams > address(this).balance), 106);
		TvmCell body = tvm.encodeBody(ITONWrapper(WRAPPER_TON).wrapGrams,roots[ROOT_WRAPPED_TON]);
		WRAPPER_TON.transfer({value:qtyTONgrams, body:body});
		processWrapStatus = true;
	}

	// Function to unwrap TON.
	function unwrapTON() public view checkOwnerAndAccept returns (bool processUnwrapStatus) {
		processUnwrapStatus = false;
		Wrapper cw = wrappers[WRAPPER_TON];
		address transmitter = roots[cw.root];
		TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).getBalance_InternalOwner, 0x00000024);
		transmitter.transfer({value:GRAMS_GET_BALANCE, body:body});
		processUnwrapStatus = true;
	}

	// Function to send tokens private
	function processTokens(address from, address to, uint128 tokens, uint128 grams) private pure inline {
		address transmitter = from;
		address receiver = to;
		TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
		transmitter.transfer({value:GRAMS_SENDTOKENS_TRANSMITER, body:body});
	}

	// Callback for unwrap TON.
	function callbackUnwrapTON(uint128 value0) public onlyOwnerWallets override functionID(0x00000024) {
		address clientWallet = msg.sender;
		Wrapper cw = wrappers[WRAPPER_TON];
		address wrapperDepositWallet = cw.depositWallet;
		processTokens(clientWallet, wrapperDepositWallet, value0, GRAMS_SENDTOKENS_RECEIVER);
		TvmCell body = tvm.encodeBody(ITONWrapper(WRAPPER_TON).unwrapGrams);
		WRAPPER_TON.transfer({value:GRAMS_UNWRAP, body:body});
	}

}
