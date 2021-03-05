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
	function setWalletBalance(uint128 value0) external functionID(0x00000004);
	function setPairDepositA(address arg0) external functionID(0x00000008);
	function setPairDepositB(address arg0) external functionID(0x00000009);
}

interface IDEXpair {
	function connect() external functionID(0x00000005);
	function setWalletBalance(uint128 value0) external functionID(0x00000006);
	function setPairDepositWallet(address value0) external functionID(0x0000000a);
	function setPairReserveWallet(address value0) external functionID(0x0000000b);
	function processLiquidity(uint128 qtyA, uint128 qtyB, address returnAddrA, address returnAddrB) external functionID(0x00000011);
	function responceClientBalanceA(uint128 value0) external functionID(0x00000016);
	function responceClientBalanceB(uint128 value0) external functionID(0x00000026);
	function processSwapA(uint128 qtyA, address returnAddrA, address returnAddrB) external functionID(0x00000012);
	function processSwapB(uint128 qtyB, address returnAddrA, address returnAddrB) external functionID(0x00000021);
	function returnDeposit(address returnAddrA, address returnAddrB) external functionID(0x00000018);
	function returnClientDepositA(uint128 value0) external functionID(0x00000036);
	function returnClientDepositB(uint128 value0) external functionID(0x00000046);
	function swapA(uint128 value0) external functionID(0x00000056);
	function swapB(uint128 value0) external functionID(0x00000066);
}

contract DEXpair is IDEXpair {
	// Pair data
	address rootA;
	address rootB;
	address reserveA;
	address reserveB;
	mapping(address => uint128) balanceReserve;
	mapping(address => uint128) balanceReserveWallet;

	// Reserve providers data
	mapping(address => uint128) reserveProviders;
	uint128 totalSupply;

	// Client structure
	struct Client {
		uint256 index;
		address walletA;
		address walletB;
		uint8 status;
		uint8 statusA;
		uint8 statusB;
		uint128 qtyA;
		uint128 valueA;
		address returnAddrA;
		uint128 qtyB;
		uint128 valueB;
		address returnAddrB;
	}

	// DEX client data
	mapping(address => Client) dexpairclients;
	address[] dexpairclientKeys;

	// Queues data
	mapping(uint128 => address) rootAQueue;
	mapping(uint128 => address) rootBQueue;

	// Process router data
	mapping(address => address) processRouter;

	// Grams constants
	uint128 constant GRAMS_CHECK_BALANCE = 22000000;
	uint128 constant GRAMS_SENDTOKENS_TRANSMITER = 500000000;
	uint128 constant GRAMS_SENDTOKENS_RECEIVER = 300000000;
	uint128 constant GRAMS_CREATE_ROOT = 35000000; // 1000000000; add Senitskiy 26000000
	uint128 constant GRAMS_CREATE_NEWWALLET = 100000; // 500000000; add Senitskiy 10000
	uint128 constant GRAMS_SETPAIR_DEXCLIENT = 5000000; // 200000000; add Senitskiy
	uint128 constant GRAMS_CREATE_RESERVE_WALLET_1 = 1000000;
	uint128 constant GRAMS_CREATE_RESERVE_WALLET_2 = 130000000;	// 110000000



	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	function isDEXpairWallet(address arg0) public view alwaysAccept returns (bool) {
		return arg0 == reserveA || arg0 == reserveB;
	}

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairWallet {
		require(isDEXpairWallet(msg.sender), 101);
		tvm.accept();
		_;
	}

	function isDEXpairRoot(address arg0) public view alwaysAccept returns (bool) {
		return arg0 == rootA || arg0 == rootB;
	}

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairRoot {
		require(isDEXpairRoot(msg.sender), 101);
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the connected DEX client.
	modifier onlyConnectedDEXclient {
		require(dexpairclients.exists(msg.sender), 103);
		tvm.accept();
		_;
	}


	// Init function.
	constructor(address root0, address root1) public {
		require(tvm.pubkey() == msg.pubkey(), 102);
		tvm.accept();
		setPairRoots(root0, root1);
	}

	// Function to transfers TONs.
	function sendTransfer(address dest, uint128 value, bool bounce) public view checkOwnerAndAccept {
		dest.transfer(value, bounce, 3);
	}

	// Function to receive TONs.
	receive() external {
	}

	// Function to create random UINT256 for create different.
	function createWalletId() private pure returns (uint256) {
		rnd.shuffle();
		return rnd.getSeed();
	}

	// Function to create empty deposit wallet for DEX client.
	function createDepositWallet(address rootAddr) public pure alwaysAccept returns (bool createStatus) {
		createStatus = false;
		uint256 walletId = createWalletId();
		address creator = rootAddr;
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x0000000a, 0, walletId, ownerUINT, GRAMS_CREATE_NEWWALLET);
		creator.transfer({value:GRAMS_CREATE_ROOT, bounce:false, body:body});
		createStatus = true;
	}

	// Function to connect DEX client to DEX pair only if DEX client not connected earlier.
	function connect() public alwaysAccept override functionID(0x00000005) {
		address dexclient = msg.sender;
		if (!dexpairclients.exists(dexclient)){
		dexpairclientKeys.push(dexclient);
		addDEXclientToQueueA(dexclient);
		addDEXclientToQueueB(dexclient);
		createDepositWallet(rootA);
		createDepositWallet(rootB);
		Client cc = dexpairclients[dexclient];
		cc.index = dexpairclientKeys.length;
		cc.walletA = address(0);
		cc.walletB = address(0);
		cc.status = 0;
		dexpairclients[dexclient] = cc;
		TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPair, rootA, reserveA, address(0), rootB, reserveB, address(0));
		dexclient.transfer({value:GRAMS_SETPAIR_DEXCLIENT, body:body});
	}


		// if (!dexpairclients.exists(dexclient)){
		// 	addDEXclientToQueueA(dexclient);
		// 	addDEXclientToQueueB(dexclient);
		// 	createDepositWallet(rootA);
		// 	createDepositWallet(rootB);
		//   dexpairclientKeys.push(dexclient);
		// 	cc.index = dexpairclientKeys.length;
		// 	cc.walletA = address(0);
		// 	cc.walletB = address(0);
		//   dexpairclients[dexclient] = cc;
		// 	TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPair, rootA, reserveA, address(0), rootB, reserveB, address(0));
		// 	dexclient.transfer({value:20000000, body:body});
		// } else if (cc.walletA == address(0) && cc.walletB == address(0)) {
		// 	addDEXclientToQueueA(dexclient);
		// 	addDEXclientToQueueB(dexclient);
		// 	createDepositWallet(rootA);
		// 	createDepositWallet(rootB);
		// } else if (cc.walletA == address(0)) {
		// 	addDEXclientToQueueA(dexclient);
		// 	createDepositWallet(rootA);
		// } else if (cc.walletB == address(0)) {
		// 	addDEXclientToQueueB(dexclient);
		// 	createDepositWallet(rootB);
		// }

	}

	// Callback function to set DEX client empty deposit wallet by Root Token.
	function setPairDepositWallet(address value0) public override alwaysAccept functionID(0x0000000a){
		address root = msg.sender;
		address wallet = value0;
		if (root == rootA){
			address dexclient = takeFirstFromQueueA();
			Client cc = dexpairclients[dexclient];
			cc.walletA = wallet;
			dexpairclients[dexclient] = cc;
			TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPairDepositA, wallet);
			dexclient.transfer({value:20000000, body:body});
		} else if (root == rootB){
			address dexclient = takeFirstFromQueueB();
			Client cc = dexpairclients[dexclient];
			cc.walletB = wallet;
			dexpairclients[dexclient] = cc;
			TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPairDepositB, wallet);
			dexclient.transfer({value:20000000, body:body});
		}
	}

	// Function to send tokens one more.
	function sendTokens2(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept returns (address transmitter, address receiver) {
		transmitter = from;
		receiver = to;
		ITONTokenWallet(transmitter).transfer{value:GRAMS_SENDTOKENS_TRANSMITER}(receiver, tokens, grams);
	}

	// Function to send tokens base.
	function sendTokens(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
		transmitter = from;
		receiver = to;
		body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
		transmitter.transfer({value:GRAMS_SENDTOKENS_TRANSMITER, body:body});
	}

	// Function to ask pair reserve wallets their balance.
	function askBalancePairWallets() public view checkOwnerAndAccept {
		address transmitterA = reserveA;
		address transmitterB = reserveB;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(transmitterA).getBalance_InternalOwner, 0x00000006);
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(transmitterB).getBalance_InternalOwner, 0x00000006);
		transmitterA.transfer({value:20000000, body:bodyA});
		transmitterB.transfer({value:20000000, body:bodyB});
	}

	// Callback function to set pair reserve wallets their balance.
	function setWalletBalance(uint128 value0) public onlyDEXpairWallet override functionID(0x00000006) {
		balanceReserveWallet[msg.sender] = value0;
	}

	// Function to get pair reserve wallets current balance.
	function getBalanceTokens() public view alwaysAccept returns (uint128 balanceReserveA, uint128 balanceReserveB) {
		balanceReserveA = balanceReserveWallet[reserveA];
		balanceReserveB = balanceReserveWallet[reserveB];
	}

	// Function to get last DEX client in queue for creating empty deposit walletA.
	function getLastQueueA() private view returns (uint128) {
		optional(uint128, address) rs = rootAQueue.max();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	// Function to get first DEX client in queue for creating empty deposit walletA.
	function getFirstQueueA() private view returns (uint128) {
		optional(uint128, address) rs = rootAQueue.min();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	// Function to get last DEX client in queue for creating empty deposit walletB.
	function getLastQueueB() private view returns (uint128) {
		optional(uint128, address) rs = rootBQueue.max();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	// Function to get first DEX client in queue for creating empty deposit walletB.
	function getFirstQueueB() private view returns (uint128) {
		optional(uint128, address) rs = rootBQueue.min();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	// Function to add DEX client at the end of queue for creating empty deposit walletA.
	function addDEXclientToQueueA(address dexclient) private returns (bool addStatus) {
		uint128 last =  getLastQueueA();
		last ++;
		addStatus = rootAQueue.add(last, dexclient);
	}

	// Function to add DEX client at the end of queue for creating empty deposit walletB.
	function addDEXclientToQueueB(address dexclient) private returns (bool addStatus) {
		uint128 last =  getLastQueueB();
		last ++;
		addStatus = rootBQueue.add(last, dexclient);
	}

	// Function to take first DEX client from the front of queue for creating empty deposit walletA.
	function takeFirstFromQueueA() private returns (address) {
		optional(uint128, address) rs = rootAQueue.delMin();
		if (rs.hasValue()) {( ,address dexclient) = rs.get();return dexclient;} else {return address(0);}
	}

	// Function to take first DEX client from the front of queue for creating empty deposit walletB.
	function takeFirstFromQueueB() private returns (address) {
		optional(uint128, address) rs = rootBQueue.delMin();
		if (rs.hasValue()) {( ,address dexclient) = rs.get();return dexclient;} else {return address(0);}
	}

	// Function to get length of DEX client queue for creating empty deposit walletA.
	function getLengthQueueA() public view alwaysAccept returns (uint128 length) {
		uint128 first = getFirstQueueA();
		uint128 last = getLastQueueA();
		length = (last>=first)?last-first+1:0;
	}

	// Function to get DEX client queue for creating empty deposit walletA as address array.
	function getAllQueueA() public view checkOwnerAndAccept returns (address[] queueArr) {
		uint128 first = getFirstQueueA();
		uint128 last = getLastQueueA();
		uint128 repeatQty = (last>=first)?last-first+1:0;
		uint128 count = first;
		repeat(repeatQty) {
			queueArr.push(rootAQueue[count]);
			count++;
		}
	}

	// Function to get length of DEX client queue for creating empty deposit walletB.
	function getLengthQueueB() public view alwaysAccept returns (uint128 length) {
		uint128 first = getFirstQueueB();
		uint128 last = getLastQueueB();
		length = (last>=first)?last-first+1:0;
	}

	// Function to get DEX client queue for creating empty deposit walletB as address array.
	function getAllQueueB() public view checkOwnerAndAccept returns (address[] queueArr) {
		uint128 first = getFirstQueueB();
		uint128 last = getLastQueueB();
		uint128 repeatQty = (last>=first)?last-first+1:0;
		uint128 count = first;
		repeat(repeatQty) {
			queueArr.push(rootBQueue[count]);
			count++;
		}
	}

	// Function to create empty reserve wallet for DEX pair.
	function createReserveWallet(address rootAddr) private pure returns (bool createStatus) {
		createStatus = false;
		address creator = rootAddr;
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x0000000b, 0, 0, ownerUINT, GRAMS_CREATE_RESERVE_WALLET_1);
		creator.transfer({value:GRAMS_CREATE_RESERVE_WALLET_2, bounce:false, body:body});
		createStatus = true;
	}

	// Function for constructor to set DEX pair.
	function setPairRoots(address root0, address root1) private  {
		rootA = root0;
		createReserveWallet(rootA);
		rootB = root1;
		createReserveWallet(rootB);
	}

	// Callback function to set pair reserve wallets address from Root Tokens.
	function setPairReserveWallet(address value0) public onlyDEXpairRoot override functionID(0x0000000b) {
		if (msg.sender == rootA){reserveA = value0;}
		if (msg.sender == rootB){reserveB = value0;}
	}

	// Function to get DEX pair information.
	function getPair() public view alwaysAccept returns (address addressRootA, address addressRootB, address addressReserveA, address addressReserveB, uint128 balanceReserveA, uint128 balanceReserveB, uint128 walletReserveA, uint128 walletReserveB) {
		addressRootA = rootA;
		addressRootB = rootB;
		addressReserveA = reserveA;
		addressReserveB = reserveB;
		balanceReserveA = balanceReserve[reserveA];
		balanceReserveB = balanceReserve[reserveB];
		walletReserveA = balanceReserveWallet[reserveA];
		walletReserveB = balanceReserveWallet[reserveB];
	}

	// Function to get DEX client info of this DEX pair.
	function getClient(address dexclient) public view alwaysAccept returns (uint256 indexDEXclient, address depositWalletA, address depositWalletB, uint8 processStatus, uint8 processStatusA, uint128 processQtyA, uint128 processValueA, address returnWalletA, 	uint8 processStatusB, uint128 processQtyB, uint128 processValueB, address returnWalletB) {
		Client cc = dexpairclients[dexclient];
		indexDEXclient = cc.index;
		depositWalletA = cc.walletA;
		depositWalletB = cc.walletB;
		processStatus = cc.status;
		processStatusA = cc.statusA;
		processQtyA = cc.qtyA;
		processValueA = cc.valueA;
		returnWalletA = cc.returnAddrA;
		processStatusB = cc.statusB;
		processQtyB = cc.qtyB;
		processValueB = cc.valueB;
		returnWalletB = cc.returnAddrB;
	}

	// Function to get DEX client info of this DEX pair.
	function getClientsArr() public view alwaysAccept returns (address[] dexclientsArr) {
		dexclientsArr = dexpairclientKeys;
	}

	// Function to get process router DEX client info of this DEX pair.
	function getProcessRouter(address clientAddr) public view alwaysAccept returns (address dexclientA, address dexclientB) {
		require(dexpairclients.exists(clientAddr), 103);
		Client cc = dexpairclients[clientAddr];
		dexclientA = processRouter[cc.walletA];
		dexclientB = processRouter[cc.walletB];
	}

	// Function to get balance each provider DEX pair reserve.
	function getShareReserveProvider(address providerAddr) public view alwaysAccept returns (uint128 balanceDEXprovider) {
		balanceDEXprovider = reserveProviders[providerAddr];
	}

	// Function to get DEX pair reserve totalSupply.
	function getTotalSupply() public view alwaysAccept returns (uint128 totalSupplyDEXpair) {
		totalSupplyDEXpair = totalSupply;
	}

	// Function to ask DEX client deposit TIP3 walletA about balance
	function requestClientBalanceA(address tip3wallet) public view onlyConnectedDEXclient {
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(tip3wallet).getBalance_InternalOwner, 0x00000016);
		tip3wallet.transfer({value:GRAMS_CHECK_BALANCE, body:bodyA});
	}

	// Function to ask DEX client deposit TIP3 walletB about balance
	function requestClientBalanceB(address tip3wallet) public view onlyConnectedDEXclient {
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(tip3wallet).getBalance_InternalOwner, 0x00000026);
		tip3wallet.transfer({value:GRAMS_CHECK_BALANCE, body:bodyB});
	}

	// Function to start process of add liquidity to DEX pair reserve
	function processLiquidity(uint128 qtyA, uint128 qtyB, address returnAddrA, address returnAddrB) public onlyConnectedDEXclient override functionID(0x00000011) {
		address dexclient = msg.sender;
		require(dexpairclients.exists(dexclient), 103);
		Client cc = dexpairclients[dexclient];
		require(cc.status == 0, 104);
		cc.status = 1;
		cc.statusA = 0;
		cc.statusB = 0;
		cc.qtyA = qtyA;
		cc.qtyB = qtyB;
		cc.valueA = 0;
		cc.valueB = 0;
		cc.returnAddrA = returnAddrA;
		cc.returnAddrB = returnAddrB;
		requestClientBalanceA(cc.walletA);
		requestClientBalanceB(cc.walletB);
		processRouter[cc.walletA] = dexclient;
		processRouter[cc.walletB] = dexclient;
		dexpairclients[dexclient] = cc;
	}

	// Function to get ReserveA
	function getReserveA() public view alwaysAccept  returns (uint128) {
		return (balanceReserve[reserveA] > 0)?balanceReserve[reserveA]:1;
	}

	// Function to get ReserveB
	function getReserveB() public view alwaysAccept returns (uint128) {
		return (balanceReserve[reserveB] > 0)?balanceReserve[reserveB]:1;
	}

	// Function to get Quotient of division reserve max and min
	function getQuotient(uint128 min, uint128 max) public pure alwaysAccept returns (uint128) {
		(uint128 quotient, ) = math.muldivmod(1, max, min);
		return quotient;
	}

	// Function to get Remainder of division reserve max and min
	function getRemainder(uint128 min, uint128 max) public pure alwaysAccept returns (uint128) {
		(, uint128 remainder) = math.muldivmod(1, max, min);
		return remainder;
	}

	// Function to send tokens private
	function processTokens(address from, address to, uint128 tokens, uint128 grams) private alwaysAccept pure returns (address transmitter, address receiver, TvmCell body) {
		transmitter = from;
		receiver = to;
		body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
		transmitter.transfer({value:GRAMS_SENDTOKENS_TRANSMITER, body:body});
	}

	// Callback function from client deposit walletA with data about current balance
	function responceClientBalanceA(uint128 value0) public alwaysAccept override functionID(0x00000016){
		address clientWalletA = msg.sender;
		address dexclient = processRouter[clientWalletA];
		Client cc = dexpairclients[dexclient];
		if (cc.status == 1){
			cc.qtyA = (cc.qtyA < value0)? cc.qtyA : value0;
			cc.status = 2;
			cc.statusA = 2;
			cc.valueA = value0;
			dexpairclients[dexclient] = cc;
		}
		if (cc.status == 2){
			cc.qtyA = (cc.qtyA < value0)? cc.qtyA : value0;
			uint128 currentReserveA = getReserveA();
			uint128 currentReserveB = getReserveB();
			uint128 qtyBforA = math.muldiv(cc.qtyA, currentReserveB, currentReserveA);
			uint128 qtyAforB = math.muldiv(cc.qtyB, currentReserveA, currentReserveB);
			uint128 floatTransferA = math.min(cc.qtyA, qtyAforB);
			uint128 floatTransferB = math.min(cc.qtyB, qtyBforA);
			if (floatTransferA < 1 || floatTransferB < 1) {
				cc.qtyA = 0;
				cc.qtyB = 0;
				cc.status == 0;
				dexpairclients[dexclient] = cc;
			}
			uint128 crmin = math.min(currentReserveA, currentReserveB);
			uint128 crmax = math.max(currentReserveA, currentReserveB);
			uint128 crquotient = getQuotient(crmin, crmax);
			uint128 crremainder = getRemainder(crmin, crmax);
			uint128 transferMin = math.min(floatTransferA,floatTransferB);
			uint128 transferOther = transferMin * crquotient + math.muldiv(transferMin,crremainder,crmin);
			uint128 transferA = (floatTransferA<floatTransferB)?transferMin:transferOther;
			uint128 transferB = (floatTransferB<floatTransferA)?transferMin:transferOther;
			uint128 unusedReturnA = cc.qtyA - transferA;
			uint128 unusedReturnB = cc.qtyB - transferB;
			processTokens(cc.walletA, reserveA, transferA, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletB, reserveB, transferB, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletA, cc.returnAddrA, unusedReturnA, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletB, cc.returnAddrB, unusedReturnB, GRAMS_SENDTOKENS_RECEIVER);
			currentReserveA = (balanceReserve[reserveA] > 0)?currentReserveA:0;
			currentReserveB = (balanceReserve[reserveB] > 0)?currentReserveB:0;
			balanceReserve[reserveA] = (currentReserveA<currentReserveB)?currentReserveA+transferMin:currentReserveA+transferOther;
			balanceReserve[reserveB] = (currentReserveB<currentReserveA)?currentReserveB+transferMin:currentReserveB+transferOther;
			reserveProviders[dexclient] += transferMin;
			totalSupply += transferMin;
			cc.status = 0;
			cc.statusA = 0;
			cc.qtyA = 0;
			cc.valueA = 0;
			cc.statusB = 0;
			cc.qtyB = 0;
			cc.valueB = 0;
			dexpairclients[dexclient] = cc;
		}
	}

	// Callback function from client deposit walletB with data about current balance
	function responceClientBalanceB(uint128 value0) public alwaysAccept override functionID(0x00000026){
		address clientWalletB = msg.sender;
		address dexclient = processRouter[clientWalletB];
		Client cc = dexpairclients[dexclient];
		if (cc.status == 1){
			cc.qtyB = (cc.qtyB < value0)? cc.qtyB : value0;
			cc.status = 2;
			cc.statusB = 2;
			cc.valueB = value0;
			dexpairclients[dexclient] = cc;
		}
		if (cc.status == 2){
			cc.qtyB = (cc.qtyB < value0)? cc.qtyB : value0;
			uint128 currentReserveA = getReserveA();
			uint128 currentReserveB = getReserveB();
			uint128 qtyBforA = math.muldiv(cc.qtyA, currentReserveB, currentReserveA);
			uint128 qtyAforB = math.muldiv(cc.qtyB, currentReserveA, currentReserveB);
			uint128 floatTransferA = math.min(cc.qtyA, qtyAforB);
			uint128 floatTransferB = math.min(cc.qtyB, qtyBforA);
			if (floatTransferA < 1 || floatTransferB < 1) {
				cc.status = 0;
				cc.statusA = 0;
				cc.qtyA = 0;
				cc.valueA = 0;
				cc.statusB = 0;
				cc.qtyB = 0;
				cc.valueB = 0;
				dexpairclients[dexclient] = cc;
			}
			uint128 crmin = math.min(currentReserveA, currentReserveB);
			uint128 crmax = math.max(currentReserveA, currentReserveB);
			uint128 crquotient = getQuotient(crmin, crmax);
			uint128 crremainder = getRemainder(crmin, crmax);
			uint128 transferMin = math.min(floatTransferA,floatTransferB);
			uint128 transferOther = transferMin * crquotient + math.muldiv(transferMin,crremainder,crmin);
			uint128 transferA = (floatTransferA<floatTransferB)?transferMin:transferOther;
			uint128 transferB = (floatTransferB<floatTransferA)?transferMin:transferOther;
			uint128 unusedReturnA = cc.qtyA - transferA;
			uint128 unusedReturnB = cc.qtyB - transferB;
			processTokens(cc.walletA, reserveA, transferA, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletB, reserveB, transferB, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletA, cc.returnAddrA, unusedReturnA, GRAMS_SENDTOKENS_RECEIVER);
			processTokens(cc.walletB, cc.returnAddrB, unusedReturnB, GRAMS_SENDTOKENS_RECEIVER);
			currentReserveA = (balanceReserve[reserveA] > 0)?currentReserveA:0;
			currentReserveB = (balanceReserve[reserveB] > 0)?currentReserveB:0;
			balanceReserve[reserveA] = (currentReserveA<currentReserveB)?currentReserveA+transferMin:currentReserveA+transferOther;
			balanceReserve[reserveB] = (currentReserveB<currentReserveA)?currentReserveB+transferMin:currentReserveB+transferOther;
			reserveProviders[dexclient] += transferMin;
			totalSupply += transferMin;
			cc.status = 0;
			cc.statusA = 0;
			cc.qtyA = 0;
			cc.valueA = 0;
			cc.statusB = 0;
			cc.qtyB = 0;
			cc.valueB = 0;
			dexpairclients[dexclient] = cc;
		}
	}

	// Function to return deposit to DEX client
	function returnDeposit(address returnAddrA, address returnAddrB) public onlyConnectedDEXclient override functionID(0x00000018) {
		address dexclient = msg.sender;
		require(dexpairclients.exists(dexclient), 103);
		Client cc = dexpairclients[dexclient];
		require(cc.status == 0, 104);
		cc.status = 1;
		cc.qtyA = 0;
		cc.qtyB = 0;
		cc.returnAddrA = returnAddrA;
		cc.returnAddrB = returnAddrB;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(cc.walletA).getBalance_InternalOwner, 0x00000036);
		cc.walletA.transfer({value:GRAMS_CHECK_BALANCE, body:bodyA});
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(cc.walletB).getBalance_InternalOwner, 0x00000046);
		cc.walletB.transfer({value:GRAMS_CHECK_BALANCE, body:bodyB});
		processRouter[cc.walletA] = dexclient;
		processRouter[cc.walletB] = dexclient;
		dexpairclients[dexclient] = cc;
	}

	// Callback function from client deposit walletA with return all current balance
	function returnClientDepositA(uint128 value0) public alwaysAccept override functionID(0x00000036){
		address clientWalletA = msg.sender;
		address dexclient = processRouter[clientWalletA];
		Client cc = dexpairclients[dexclient];
		if (cc.status == 1){
			cc.qtyA = value0;
			cc.status = 2;
			if (cc.qtyA > 0) {
				processTokens(cc.walletA, cc.returnAddrA, cc.qtyA, GRAMS_SENDTOKENS_RECEIVER);
				dexpairclients[dexclient] = cc;
			} else {
				dexpairclients[dexclient] = cc;
			}
		}
		if (cc.status == 2){
			cc.qtyA = value0;
			if (cc.qtyA > 0) {
				processTokens(cc.walletA, cc.returnAddrA, cc.qtyA, GRAMS_SENDTOKENS_RECEIVER);
				cc.qtyA = 0;
				cc.qtyB = 0;
				cc.status = 0;
				dexpairclients[dexclient] = cc;
			} else {
				cc.qtyA = 0;
				cc.qtyB = 0;
				cc.status = 0;
				dexpairclients[dexclient] = cc;
			}
		}
	}

	// Callback function from client deposit walletA to return all current balance
	function returnClientDepositB(uint128 value0) public alwaysAccept override functionID(0x00000046){
		address clientWalletB = msg.sender;
		address dexclient = processRouter[clientWalletB];
		Client cc = dexpairclients[dexclient];
		if (cc.status == 1){
			cc.qtyB = value0;
			cc.status = 2;
			if (cc.qtyB > 0) {
				processTokens(cc.walletB, cc.returnAddrB, cc.qtyB, GRAMS_SENDTOKENS_RECEIVER);
				dexpairclients[dexclient] = cc;
			} else {
				dexpairclients[dexclient] = cc;
			}
		}
		if (cc.status == 2){
			cc.qtyB = value0;
			if (cc.qtyB > 0) {
				processTokens(cc.walletB, cc.returnAddrB, cc.qtyB, GRAMS_SENDTOKENS_RECEIVER);
				cc.qtyA = 0;
				cc.qtyB = 0;
				cc.status = 0;
				dexpairclients[dexclient] = cc;
			} else {
				cc.qtyA = 0;
				cc.qtyB = 0;
				cc.status = 0;
				dexpairclients[dexclient] = cc;
			}
		}
	}

	// Function to swap A to B
	function processSwapA(uint128 qtyA, address returnAddrA, address returnAddrB) public onlyConnectedDEXclient override functionID(0x00000012) {
		address dexclient = msg.sender;
		require(dexpairclients.exists(dexclient), 103);
		Client cc = dexpairclients[dexclient];
		require(cc.status == 0, 104);
		cc.status = 1;
		cc.qtyA = qtyA;
		cc.qtyB = 0;
		cc.returnAddrA = returnAddrA;
		cc.returnAddrB = returnAddrB;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(cc.walletA).getBalance_InternalOwner, 0x00000056);
		cc.walletA.transfer({value:GRAMS_CHECK_BALANCE, body:bodyA});
		processRouter[cc.walletA] = dexclient;
		dexpairclients[dexclient] = cc;
	}

	// Callback function from client deposit walletA to swap A to B
	function swapA(uint128 value0) public alwaysAccept override functionID(0x00000056){
		address clientWalletA = msg.sender;
		address dexclient = processRouter[clientWalletA];
		Client cc = dexpairclients[dexclient];
		  cc.qtyA = (cc.qtyA < value0)?cc.qtyA:value0;
			uint128 currentReserveA = getReserveA();
			uint128 currentReserveB = getReserveB();
			uint128 maxexchangeA = math.muldiv(currentReserveA,5,1000);
			uint128 exchangeA = (cc.qtyA > maxexchangeA)?maxexchangeA:cc.qtyA;
			uint128 ramountA = exchangeA;
			uint128 providersFeeA = math.muldivr(exchangeA,3,1000);
			providersFeeA = (providersFeeA < 1)?1:providersFeeA;
			exchangeA -= providersFeeA;
			uint128 crmin = math.min(currentReserveA, currentReserveB);
			uint128 crmax = math.max(currentReserveA, currentReserveB);
			uint128 crquotient = getQuotient(crmin, crmax);
			uint128 crremainder = getRemainder(crmin, crmax);
                        uint128 exchangeB = (currentReserveA < currentReserveB)?exchangeA * crquotient + math.muldiv(exchangeA,crremainder,crmin):math.muldiv(exchangeA,crmin,crmax);
                        exchangeA = (currentReserveA < currentReserveB)?exchangeA:exchangeB * crquotient + math.muldiv(exchangeB,crremainder,crmin);
                        uint128 addReserveA = exchangeA + providersFeeA;
			uint128 unusedReturnA = ramountA - addReserveA;
			if (exchangeA > 0 && exchangeB > 0) {
				if (unusedReturnA > 0) {					
					balanceReserve[reserveA] += addReserveA;
					balanceReserve[reserveB] -= exchangeB;
					processTokens(cc.walletA, reserveA, addReserveA, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(reserveB, cc.returnAddrB, exchangeB, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(cc.walletA, cc.returnAddrA, unusedReturnA, GRAMS_SENDTOKENS_RECEIVER);
					cc.qtyA = 0;
					cc.qtyB = 0;
					cc.status = 0;
					dexpairclients[dexclient] = cc;
				} else {
				        balanceReserve[reserveA] += addReserveA;
					balanceReserve[reserveB] -= exchangeB;
					processTokens(cc.walletA, reserveA, ramountA, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(reserveB, cc.returnAddrB, exchangeB, GRAMS_SENDTOKENS_RECEIVER);					
					cc.qtyA = 0;
					cc.qtyB = 0;
					cc.status = 0;
					dexpairclients[dexclient] = cc;
				}
			}
	}

	// Function to swap B to A
	function processSwapB(uint128 qtyB, address returnAddrA, address returnAddrB) public onlyConnectedDEXclient override functionID(0x00000021) {
		address dexclient = msg.sender;
		require(dexpairclients.exists(dexclient), 103);
		Client cc = dexpairclients[dexclient];
		require(cc.status == 0, 104);
		cc.status = 1;
		cc.qtyB = qtyB;
		cc.qtyA = 0;
		cc.returnAddrA = returnAddrA;
		cc.returnAddrB = returnAddrB;
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(cc.walletB).getBalance_InternalOwner, 0x00000066);
		cc.walletB.transfer({value:GRAMS_CHECK_BALANCE, body:bodyB});
		processRouter[cc.walletB] = dexclient;
		dexpairclients[dexclient] = cc;
	}

	// Callback function from client deposit walletA to swap B to A
	function swapB(uint128 value0) public alwaysAccept override functionID(0x00000066){
		address clientWalletB = msg.sender;
		address dexclient = processRouter[clientWalletB];
		Client cc = dexpairclients[dexclient];
			cc.qtyB = (cc.qtyB < value0)?cc.qtyB:value0;
			uint128 currentReserveA = getReserveA();
			uint128 currentReserveB = getReserveB();
			uint128 maxexchangeB = math.muldiv(currentReserveB,5,1000);
			uint128 exchangeB = (cc.qtyB > maxexchangeB)?maxexchangeB:cc.qtyB;
			uint128 ramountB = exchangeB;
			uint128 providersFeeB = math.muldivr(exchangeB,3,1000);
			providersFeeB = (providersFeeB < 1)?1:providersFeeB;
			exchangeB -= providersFeeB;
			uint128 crmin = math.min(currentReserveA, currentReserveB);
			uint128 crmax = math.max(currentReserveA, currentReserveB);
			uint128 crquotient = getQuotient(crmin, crmax);
			uint128 crremainder = getRemainder(crmin, crmax);
			uint128 exchangeA = (currentReserveB < currentReserveA)?exchangeB * crquotient + math.muldiv(exchangeB,crremainder,crmin):math.muldiv(exchangeB,crmin,crmax);
			exchangeB = (currentReserveB < currentReserveA)?exchangeB:exchangeA * crquotient + math.muldiv(exchangeA,crremainder,crmin);
			uint128 addReserveB = exchangeB + providersFeeB;
			uint128 unusedReturnB = ramountB - addReserveB;
			if (exchangeA > 0 && exchangeB > 0) {
				if (unusedReturnB > 0) {					
					processTokens(cc.walletB, reserveB, addReserveB, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(reserveA, cc.returnAddrA, exchangeA, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(cc.walletB, cc.returnAddrB, unusedReturnB, GRAMS_SENDTOKENS_RECEIVER);
					balanceReserve[reserveB] += ramountB;
					balanceReserve[reserveA] -= exchangeA;
					cc.qtyA = 0;
					cc.qtyB = 0;
					cc.status = 0;
					dexpairclients[dexclient] = cc;
				} else {
					processTokens(cc.walletB, reserveB, ramountB, GRAMS_SENDTOKENS_RECEIVER);
					processTokens(reserveA, cc.returnAddrA, exchangeA, GRAMS_SENDTOKENS_RECEIVER);
					balanceReserve[reserveB] += ramountB;
					balanceReserve[reserveA] -= exchangeA;
					cc.qtyA = 0;
					cc.qtyB = 0;
					cc.status = 0;
					dexpairclients[dexclient] = cc;
				}
			}
	}













}
