pragma solidity >= 0.6.0;
pragma AbiHeader expire;

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

	address tokenA;
	address tokenB;
	address rootA;
	address rootB;
	address writerA;
	address writerB;
	mapping(address => bool) writerTokens;
	mapping(address => uint128) balanceTokens;
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

	mapping(address => Client) clients;
	address[] clientKeys;



	modifier alwaysAccept {
			tvm.accept();
			_;
	}

	function isDEXpairToken(address arg0) public view alwaysAccept returns (bool) {
     return arg0 == tokenA || arg0 == tokenB;
  }

	// Modifier that allows public function to accept external calls only from the DEXpair tokens.
	modifier onlyDEXpairTokens {
		  require(isDEXpairToken(msg.sender), 102);
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

	// function sendTokens(ITONTokenWallet tokenAddress, address dest, uint128 tokens, uint128 grams) external view checkOwnerAndAccept  returns(bool){
	// 	// Call the remote contract function with parameter.
	// 	tokenAddress.transfer(dest, tokens, grams);
	// 	return true;
	// }

	function connectPair() public alwaysAccept override functionID(0x00000005) {
		address client = msg.sender;
		TvmCell body = tvm.encodeBody(IDEXclient(client).setPair, rootA, tokenA, rootB, tokenB);
		client.transfer({value:20000000, body:body});
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
		address transmitterA = tokenA;
		address transmitterB = tokenB;
		writerTokens[transmitterA] = false;
		writerTokens[transmitterB] = false;
		TvmCell bodyA = tvm.encodeBody(ITONTokenWallet(transmitterA).getBalance_InternalOwner, 0x00000006);
		TvmCell bodyB = tvm.encodeBody(ITONTokenWallet(transmitterB).getBalance_InternalOwner, 0x00000006);
		transmitterA.transfer({value:20000000, body:bodyA});
		transmitterB.transfer({value:20000000, body:bodyB});
	}


	function setBalanceToken(uint128 value0) public onlyDEXpairTokens override functionID(0x00000006) {
		writerTokens[msg.sender] = true;
		balanceTokens[msg.sender] = value0;
	}


	function setPair(address arg0, address arg1, address arg2, address arg3) public checkOwnerAndAccept {
		require(!(arg0 == address(0)), 106);
		require(!(arg1 == address(0)), 106);
		require(!(arg2 == address(0)), 106);
		require(!(arg3 == address(0)), 106);
		rootA = arg0;
		tokenA = arg1;
		rootB = arg2;
		tokenB = arg3;
	}

	function resetPair() public checkOwnerAndAccept {
		rootA = address(0);
		tokenA = address(0);
		rootB = address(0);
		tokenB = address(0);
	}


	function getPair() public view alwaysAccept returns (address arg0, address arg1, address arg2, address arg3) {
    arg0 = rootA;
		arg1 = tokenA;
		arg2 = rootB;
		arg3 = tokenB;
	}

	function getBalanceTokens() public view alwaysAccept returns (uint128 balance_tokenA, uint128 balance_tokenB) {
		balance_tokenA = balanceTokens[tokenA];
		balance_tokenB = balanceTokens[tokenB];
	}

	function setMsgGrams(uint128 value0) public checkOwnerAndAccept {
		msgGrams = value0;
	}

	function getMsgGrams() public view alwaysAccept returns (uint128 value0) {
		value0 = msgGrams;
	}

	function getWriters() public view alwaysAccept returns (bool param0, bool param1) {
		param0 = writerTokens[tokenA];
		param1 = writerTokens[tokenB];
	}



}
