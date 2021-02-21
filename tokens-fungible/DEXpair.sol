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
}

interface IDEXpair {
	  function connectPair() external functionID(0x00000005);
		function setBalanceToken(uint128 value0) external functionID(0x00000006);
}

contract DEXpair is IDEXpair {

	address rootA;
	address rootB;
	address walletA;
	address walletB;

	// address writerA;
	// address writerB;
	// mapping(address => bool) writerTokens;
	// mapping(address => uint128) balanceTokens;
	// uint128 balanceA;
	// uint128 balanceB;
	uint128 reserveA;
	uint128 reserveB;
	mapping(address => uint128) clientStorageA;
	mapping(address => uint128) clientStorageB;
	mapping(address => uint128) balanceProviders;
	uint128 totalSupply;
	uint128 msgGrams;

	// Client structure
  struct Client {
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

	function isDEXpairWallets(address arg0) public view alwaysAccept returns (bool) {
     return arg0 == walletA || arg0 == walletB;
  }

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairWallets {
		  require(isDEXpairWallets(msg.sender), 102);
			tvm.accept();
			_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		 require(msg.pubkey() == tvm.pubkey(), 102);
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

	function createWalletId() private pure returns (uint256) {
		rnd.shuffle();
		return rnd.getSeed();
	}

	function createDepositWallet(address rootAddr) public view checkOwnerAndAccept  returns (bool createStatus) {

		createStatus = false;
		uint256 walletId = createWalletId();
		address creator = rootAddr;
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, walletId, ownerUINT, 1000000000);
		creator.transfer({value:2000000000, bounce:false, body:body});
		createStatus = true;
	}

	function connectPair() public alwaysAccept override functionID(0x00000005) {
		address dexclient = msg.sender;
		if (!dexpairclients.exists(dexclient)){
			addDEXclientToQueueA(dexclient);
			addDEXclientToQueueB(dexclient);
			createDepositWallet(rootA);
			createDepositWallet(rootB);
      dexpairclientKeys.push(dexclient);

		}
		Client cc = dexpairclients[dexclient];

		TvmCell body = tvm.encodeBody(IDEXclient(dexclient).setPair, rootA, walletA, rootB, walletB);
		dexclient.transfer({value:20000000, body:body});
	}

	function sendTokens2(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept returns (address transmitter, address receiver) {
      transmitter = from;
			receiver = to;
			ITONTokenWallet(transmitter).transfer{value:20000000}(receiver, tokens, grams);
	}

	function sendTokens(address from, address to, uint128 tokens, uint128 grams) public checkOwnerAndAccept view returns (address transmitter, address receiver, TvmCell body) {
      transmitter = from;
			receiver = to;
			body = tvm.encodeBody(ITONTokenWallet(transmitter).transfer, receiver, tokens, grams);
			transmitter.transfer({value:20000000, body:body});
	}

	function askBalanceTokens() public checkOwnerAndAccept {
		address transmitterA = walletA;
		address transmitterB = walletB;
		writerTokens[transmitterA] = false;
		writerTokens[transmitterB] = false;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(transmitterA).getBalance_InternalOwner, 0x00000006);
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(transmitterB).getBalance_InternalOwner, 0x00000006);
		transmitterA.transfer({value:20000000, body:bodyA});
		transmitterB.transfer({value:20000000, body:bodyB});
	}


	function setBalanceToken(uint128 value0) public onlyDEXpairWallets override functionID(0x00000006) {
		writerTokens[msg.sender] = true;
		balanceTokens[msg.sender] = value0;
	}


	function getBalanceTokens() public view alwaysAccept returns (uint128 balance_walletA, uint128 balance_walletB) {
		balance_walletA = balanceTokens[walletA];
		balance_walletB = balanceTokens[walletB];
	}

	function setMsgGrams(uint128 value0) public checkOwnerAndAccept {
		msgGrams = value0;
	}

	function getMsgGrams() public view alwaysAccept returns (uint128 value0) {
		value0 = msgGrams;
	}

	function getLastQueueA() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = rootAQueue.max();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function getFirstQueueA() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = rootAQueue.min();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function getLastQueueB() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = rootBQueue.max();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function getFirstQueueB() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = rootBQueue.min();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function addDEXclientToQueueA(address dexclient) public alwaysAccept returns (bool addStatus) {
		uint128 last =  getLastQueueA();
		last ++;
		addStatus = rootAQueue.add(last, dexclient);
	}

	function addDEXclientToQueueB(address dexclient) public alwaysAccept returns (bool addStatus) {
		uint128 last =  getLastQueueB();
		last ++;
		addStatus = rootBQueue.add(last, dexclient);
	}

	function takeFirstFromQueueA() public alwaysAccept returns (address) {
		optional(uint128, address) rs = rootAQueue.delMin();
		if (rs.hasValue()) {( ,address dexclient) = rs.get();return dexclient;} else {return address(0);}
	}

	function takeFirstFromQueueB() public alwaysAccept returns (address) {
		optional(uint128, address) rs = rootBQueue.delMin();
		if (rs.hasValue()) {( ,address dexclient) = rs.get();return dexclient;} else {return address(0);}
	}

	function getLengthQueueA() public view alwaysAccept returns (uint128 length) {
		uint128 first = getFirstQueueA();
		uint128 last = getFirstQueueA();
		length = (last>=first)?last-first+1:0;
	}

	function getAllQueueA() public view checkOwnerAndAccept returns (address[] queueArr) {
		uint128 first = getFirstQueueA();
		uint128 last = getFirstQueueA();
		uint128 repeatQty = (last>=first)?last-first+1:0;
		uint128 count = first;
		repeat(repeatQty) {
			providersArr.push(rootAQueue[count]);
			count++;
		}
	}

	function getLengthQueueB() public view alwaysAccept returns (uint128 length) {
		uint128 first = getFirstQueueB();
		uint128 last = getFirstQueueB();
		length = (last>=first)?last-first+1:0;
	}

	function getAllQueueB() public view checkOwnerAndAccept returns (address[] queueArr) {
		uint128 first = getFirstQueueB();
		uint128 last = getFirstQueueB();
		uint128 repeatQty = (last>=first)?last-first+1:0;
		uint128 count = first;
		repeat(repeatQty) {
			queueArr.push(rootBQueue[count]);
			count++;
		}
	}




}
