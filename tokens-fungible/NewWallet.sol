pragma solidity >= 0.6.0;
pragma AbiHeader expire;

interface IRootTokenContract {
  function deployEmptyWallet(uint32 _answer_id, int8 workchain_id, uint256 pubkey, uint256 internal_owner, uint128 grams) external functionID(0x0000000d) returns (address value0);
  function deployWallet(uint32 _answer_id, int8 workchain_id, uint256 pubkey, uint256 internal_owner, uint128 tokens, uint128 grams) external functionID(0x0000000c) returns (address value0);
}

interface IDEXclient {
  function setWallet(address value0) external functionID(0x00000003);
}

contract WalletCreate is IDEXclient {

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

  address tip3wallet;
  uint128 tongrams;
  uint128 tongrams2;


  function createNewEmptyWallet(address rootAddr, uint256 internal_owner) public view checkOwnerAndAccept {
    address creator = rootAddr;
    uint256 owner = internal_owner;
    TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployEmptyWallet, 0x00000003, 0, 0, owner, tongrams);
    creator.transfer({value:tongrams2, body:body});
  }

  function createNewWallet(address rootAddr, uint256 internal_owner) public view checkOwnerAndAccept {
    address creator = rootAddr;
    uint256 owner = internal_owner;
    TvmCell body = tvm.encodeBody(IRootTokenContract(creator).deployWallet, 0x00000003, 0, 0, owner, 0, tongrams);
    creator.transfer({value:tongrams2, body:body});
  }

  function setWallet(address value0) public override alwaysAccept functionID(0x00000003){
    tip3wallet = value0;
  }

  function showWallet() public view alwaysAccept returns (address value0){
    value0 = tip3wallet;
  }

  function setTongrams(uint128 value0) public alwaysAccept {
    tongrams = value0;
  }

  function showTongrams() public view alwaysAccept returns (uint128 value0){
    value0 = tongrams;
  }

  function setTongrams2(uint128 value0) public alwaysAccept {
    tongrams2 = value0;
  }

  function showTongrams2() public view alwaysAccept returns (uint128 value0){
    value0 = tongrams2;
  }

}
