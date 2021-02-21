pragma solidity >= 0.6.0;
pragma AbiHeader expire;

interface IRootTokenContract {
	function deployEmptyWallet(uint32 _answer_id, int8 workchain_id, uint256 pubkey, uint256 internal_owner, uint128 grams) external functionID(0x0000000d) returns (address value0);
}

interface IDEXclient {
	function setNewEmptyWallet(address value0) external functionID(0x00000007);
}

contract DEXgastracker is IDEXclient {

	modifier alwaysAccept {
		tvm.accept();
		_;
	}

  mapping (address => address[]) rootWallets;
	uint128 tongrams1;
	uint128 tongrams2;

	function setTongrams(uint128 forNewWallet, uint128 forRoot) public alwaysAccept {
		tongrams1 = forNewWallet;
		tongrams2 = forRoot;
	}

	function getTongrams() public view alwaysAccept returns (uint128 forNewWallet, uint128 forRoot){
		forNewWallet = tongrams1;
		forRoot = tongrams2;
	}

	function getWalletAddr(address root) public view alwaysAccept returns (address[] walletsArr){
		walletsArr = rootWallets[root];
	}

	function createWalletId() private pure returns (uint256) {
		rnd.shuffle();
		return rnd.getSeed();
	}

	function createNewEmptyWallet(address root) public view alwaysAccept  returns (bool createStatus) {
		createStatus = false;
		address creator = root;
		uint256 walletId = createWalletId();
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, walletId, ownerUINT, tongrams1);
		creator.transfer({value:tongrams2, bounce:false, body:body});
		createStatus = true;
	}

	function setNewEmptyWallet(address value0) public override alwaysAccept functionID(0x00000007){
		address root = msg.sender;
		rootWallets[root].push(value0);
	}

}
