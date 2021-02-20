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

  address walletAddr;
	uint128 tongrams1;
	uint128 tongrams2;
	address rootA = '0:cf5d9b0d7fe0dd14f8d75b9c511fab9805ae64dc4c1f08b955c69e44193518a1';
	address rootB = '0:eaa4b8e54760d2922d6e23da188d7a2c6824ed108a7c15be5de7b97d9740253e';


	function setTongrams(uint128 msgGramPrice1, uint128 msgGramPrice2) public alwaysAccept {
		tongrams1 = msgGramPrice1;
		tongrams2 = msgGramPrice2;
	}

	function getTongrams() public view alwaysAccept returns (uint128 msgGramPrice1, uint128 msgGramPrice2){
		msgGramPrice1 = tongrams1;
		msgGramPrice2 = tongrams2;
	}

	function getWalletAddr() public view alwaysAccept returns (address walletValue){
		walletValue = walletAddr;
	}

	function createNewEmptyWallet(bool selector) public view alwaysAccept  returns (bool createStatus) {
		createStatus = false;
		address creator = (selector == true)?rootA:rootB;
		address owner = address(this);
		uint256 ownerUINT = owner.value;
		TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000007, 0, 0, ownerUINT, tongrams1);
		creator.transfer({value:tongrams2, bounce:false, body:body});
		createStatus = true;
	}

	function setNewEmptyWallet(address value0) public override alwaysAccept functionID(0x00000007){
		address root = msg.sender;
		walletAddr = value0;
	}

}
