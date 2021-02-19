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
		uint128 allowanceA;
		address rootB;
    address pairWalletB;
		uint128 allowanceB;
  }

	mapping(address => Pair) pairs;
	address[] pairKeys;

	// mapping(address => Token) tokens;


	uint128 msgGrams;
	uint128 tongrams;
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

	// function sendTokens(ITONTokenWallet tokenAddress, address dest, uint128 tokens, uint128 grams) external view checkOwnerAndAccept  returns(bool){
	// 	// Call the remote contract function with parameter.
	// 	tokenAddress.transfer(dest, tokens, grams);
	// 	return true;
	// }

	function connectPair(address arg0) public checkOwnerAndAccept view returns (bool param0) {
			TvmCell body = tvm.encodeBody(IDEXpair(arg0).connectPair);
			arg0.transfer({value:20000000, body:body});
			param0 = true;
	}

	function setPair(address arg0, address arg1, address arg2, address arg3) public alwaysAccept override functionID(0x00000003) {
		  address operator = msg.sender;
			Pair cp = pairs[operator];
			if (!pairs.exists(operator)){
				pairKeys.push(operator);
				cp.index = pairKeys.length;
			}
			cp.rootA = arg0;
	    cp.pairWalletA = arg1;
			cp.allowanceA = 0;
			cp.rootB = arg2;
	    cp.pairWalletB = arg3;
			cp.allowanceB = 0;
			pairs[operator] = cp;
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

	// function addLiquidity(address pairAddr, uint128 qtyTokenA, uint128 qtyTokenB, uint128 grams) public checkOwnerAndAccept view {
	// 		require(qtyTokenA > 0, 102);
	// 		require(qtyTokenB > 0, 103);
	// 		Wallet wcA = wallets[clientWalletA];
	// 		Wallet wcB = wallets[clientWalletB];
	// 		require(wcA.balance > qtyTokenA, 104);
	// 		require(wcB.balance > qtyTokenB, 105);
	// 		sendTokens(clientWalletA, pairWalletA, qtyTokenA, grams);
	// 		sendTokens(clientWalletB, pairWalletB, qtyTokenB, grams);
	//
	// }


	// function askBalanceTokenA() public view checkOwnerAndAccept {
	// 	address transmitter = tokenA;
	// 	TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).getBalance_InternalOwner, 0x00000004);
	// 	transmitter.transfer({value:20000000, body:body});
	// }
	//
	//
	// function askBalanceTokenB() public view checkOwnerAndAccept {
	// 	address transmitter = tokenB;
	// 	TvmCell body = tvm.encodeBody(ITONTokenWallet(transmitter).getBalance_InternalOwner, 0x00000004);
	// 	transmitter.transfer({value:20000000, body:body});
	// }

	// function addNewEmptyWallet(address arg0, address arg1) public checkOwnerAndAccept {
	// 	require(!(arg0 == address(0)), 106);
	// 	require(!(arg1 == address(0)), 107);
	// 	require(!wallets.exists(arg1), 108);
	// 	Wallet wc = wallets[arg1];
	// 	walletKeys.push(arg1);
	// 	wc.root = arg0;
	// 	wc.balance = 0;
	// 	wallets[arg1] = wc;
	// 	}



	function askBalanceToken(address arg0) public view checkOwnerAndAccept {
		address transmitter = arg0;
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


	// function setBalanceTokenA(uint128 value0) public alwaysAccept override functionID(0x00000003) {
	// 	writerA = msg.sender;
	// 	reserveA = value0;
	// }
	//
	// function setBalanceTokenB(uint128 value0) public alwaysAccept override functionID(0x00000004) {
	// 	writerB = msg.sender;
	// 	reserveB = value0;
	// }

	function setBalanceToken(uint128 value0) public alwaysAccept override functionID(0x00000004) {
	  Wallet wc = wallets[msg.sender];
		wc.balance = value0;
		wallets[msg.sender] = wc;
	}

	function getWalletBalance(address value0) public view alwaysAccept returns (uint128 value1) {
		Wallet wc = wallets[value0];
		value1 = wc.balance;
	}


	function setMsgGrams(uint128 value0) public checkOwnerAndAccept {
		msgGrams = value0;
	}

	function getMsgGrams() public view alwaysAccept returns (uint128 value0) {
		value0 = msgGrams;
	}

	function setTongrams(uint128 value0, uint128 value1) public alwaysAccept {
    tongrams = value0;
		tongrams2 = value1;
  }

  function getTongrams() public view alwaysAccept returns (uint128 value0, uint128 value1){
    value0 = tongrams;
		value1 = tongrams2;
  }

	function createNewEmptyWallet(address rootAddr) public view checkOwnerAndAccept {
		address creator = rootAddr;
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, 0, ownerUINT, 1000000000);
		creator.transfer({value:2000000000, bounce:false, body:body});
	}

	// function createNewEmptyWallet(address rootAddr) public view checkOwnerAndAccept {
	// 	address creator = rootAddr;
	// 	address owner = address(this);
	// 	uint256 ownerUINT = owner.value;
	// 	TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployWallet, 0x00000007, 0, 0, ownerUINT, 0, 1000000000);
	// 	creator.transfer({value:1000000000, bounce:false, body:body});
	// }

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

	function createPairWallets(address pairAddr) public view checkOwnerAndAccept {
		Pair cp = pairs[pairAddr];
		if (!roots.exists(cp.rootA)){createNewEmptyWallet(cp.rootA);}
		if (!roots.exists(cp.rootB)){createNewEmptyWallet(cp.rootB);}
	}

	// function resetPairWallets(address pairAddr) public checkOwnerAndAccept {
	// 	Pair cp = pairs[pairAddr];
	// 	roots[cp.rootA] = address(0);
	// 	roots[cp.rootB] = address(0);
	// }
	//
	// function recreatePairWallets(address pairAddr) public view checkOwnerAndAccept {
	// 	Pair cp = pairs[pairAddr];
	// 	createNewEmptyWallet(cp.rootA);
	// 	createNewEmptyWallet(cp.rootB);
	// }

	function getPairWallets(address pairAddr) public view alwaysAccept returns (address wallet0, address wallet1){
    Pair cp = pairs[pairAddr];
		wallet0 = roots[cp.rootA];
		wallet1 = roots[cp.rootB];
  }

	function askPairWalletsBalance(address pairAddr) public view checkOwnerAndAccept {
		Pair cp = pairs[pairAddr];
		askBalanceToken(roots[cp.rootA]);
		askBalanceToken(roots[cp.rootB]);
	}

	function getPairWalletsBalance(address pairAddr) public view alwaysAccept returns (uint128 value0, uint128 value1) {
		Pair cp = pairs[pairAddr];
		value0 = getWalletBalance(roots[cp.rootA]);
		value1 = getWalletBalance(roots[cp.rootB]);
	}





	function showContractAddress() public pure alwaysAccept returns (address dexclient, uint256 dexclientUINT256){
    dexclient = address(this);
		dexclientUINT256 = dexclient.value;
  }







}
