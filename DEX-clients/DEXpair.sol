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
}

contract DEXpair is IDEXpair {

	address rootA;
	address rootB;
	address reserveA;
	address reserveB;
	mapping(address => uint128) balanceReserve;

	// mapping(address => uint128) clientStorageA;
	// mapping(address => uint128) clientStorageB;
	mapping(address => uint128) balanceProviders;
	uint128 totalSupply;
	uint128 msgGrams;

	// Client structure
  struct Client {
		uint256 index;
		address walletA;
    address walletB;
  }

	mapping(address => Client) dexpairclients;
	address[] dexpairclientKeys;

	mapping(uint128 => address) rootAQueue;
	mapping(uint128 => address) rootBQueue;

	modifier alwaysAccept {
			tvm.accept();
			_;
	}

	function isDEXpairWallet(address arg0) public view alwaysAccept returns (bool) {
     return arg0 == reserveA || arg0 == reserveB;
  }

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairWallet {
		  require(isDEXpairWallet(msg.sender), 102);
			tvm.accept();
			_;
	}

	function isDEXpairRoot(address arg0) public view alwaysAccept returns (bool) {
     return arg0 == rootA || arg0 == rootB;
  }

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairRoot {
		  require(isDEXpairRoot(msg.sender), 102);
			tvm.accept();
			_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		 require(msg.pubkey() == tvm.pubkey(), 102);
		 tvm.accept();
		 _;
	}

	// Init function.
	constructor(address root0, address root1) public {
			require(tvm.pubkey() == msg.pubkey(), 100);
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
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x0000000a, 0, walletId, ownerUINT, 500000000);	//	1000000 450000000
		creator.transfer({value:1000000000, bounce:false, body:body});	//	600000000	900000000
		createStatus = true;
	}

	// Function to connect DEX client to DEX pair.
	function connect() public alwaysAccept override functionID(0x00000005) {
		address dexclient = msg.sender;
		dexpairclientKeys.push(dexclient);
		addDEXclientToQueueA(dexclient);
		addDEXclientToQueueB(dexclient);
		createDepositWallet(rootA);
		createDepositWallet(rootB);
		Client cc = dexpairclients[dexclient];
		cc.index = dexpairclientKeys.length;
		cc.walletA = address(0);
		cc.walletB = address(0);
		dexpairclients[dexclient] = cc;
		TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPair, rootA, reserveA, address(0), rootB, reserveB, address(0));
		dexclient.transfer({value:200000000, body:body});	//200000000	110000000

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
				dexclient.transfer({value:11000000, body:body});	//20000000
			} else if (root == rootB){
				address dexclient = takeFirstFromQueueB();
				Client cc = dexpairclients[dexclient];
				cc.walletB = wallet;
				dexpairclients[dexclient] = cc;
				TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPairDepositB, wallet);
				dexclient.transfer({value:12000000, body:body});	//20000000
			}
	}

	// Function to send tokens one more.
	function sendTokens2(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept returns (address transmitter, address receiver) {
      transmitter = from;
			receiver = to;
			ITONTokenWallet(transmitter).transfer{value:17000000}(receiver, tokens, grams);  //20000000
	}

	// Function to send tokens base.
	function sendTokens(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
      transmitter = from;
			receiver = to;
			body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
			transmitter.transfer({value:17500000, body:body});	//20000000
	}

	// Function to ask pair reserve wallets their balance.
	function askBalancePairWallets() public view checkOwnerAndAccept {
		address transmitterA = reserveA;
		address transmitterB = reserveB;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(transmitterA).getBalance_InternalOwner, 0x00000006);
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(transmitterB).getBalance_InternalOwner, 0x00000006);
		transmitterA.transfer({value:15000000, body:bodyA});	//20000000
		transmitterB.transfer({value:15500000, body:bodyB});	//20000000
	}

	// Callback function to set pair reserve wallets their balance.
	function setWalletBalance(uint128 value0) public onlyDEXpairWallet override functionID(0x00000006) {
		balanceReserve[msg.sender] = value0;
	}

	// Function to get pair reserve wallets current balance.
	function getBalanceTokens() public view alwaysAccept returns (uint128 balanceReserveA, uint128 balanceReserveB) {
		balanceReserveA = balanceReserve[reserveA];
		balanceReserveB = balanceReserve[reserveB];
	}

	function setMsgGrams(uint128 value0) public checkOwnerAndAccept {
		msgGrams = value0;
	}

	function getMsgGrams() public view alwaysAccept returns (uint128 value0) {
		value0 = msgGrams;
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
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x0000000b, 0, 0, ownerUINT, 1000000); //	1000000
		creator.transfer({value:110000000, bounce:false, body:body});	//	110000000
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
	function getPair() public view alwaysAccept returns (address addressRootA, address addressRootB, address addressReserveA, address addressReserveB, uint128 balanceReserveA, uint128 balanceReserveB) {
    addressRootA = rootA;
		addressRootB = rootB;
		addressReserveA = reserveA;
		addressReserveB = reserveB;
		balanceReserveA = balanceReserve[reserveA];
		balanceReserveB = balanceReserve[reserveB];
	}

	// Function to get DEX client info of this DEX pair.
	function getClient(address dexclient) public view alwaysAccept returns (uint256 indexDEXclient, address depositWalletA, address depositWalletB) {
    Client cc = dexpairclients[dexclient];
		indexDEXclient = cc.index;
		depositWalletA = cc.walletA;
		depositWalletB = cc.walletB;
	}

	// Function to get DEX client info of this DEX pair.
	function getClientsArr() public view alwaysAccept returns (address[] dexclientsArr) {
		dexclientsArr = dexpairclientKeys;
	}
}