pragma ton-solidity >=0.35.0;
interface ISdk {
//account info
function getBalance(uint32 answerId, address addr) external returns (uint128 nanotokens);
function getAccountType(uint32 answerId, address addr) external returns (int8 acc_type);
}

library Sdk {

	uint256 constant ITF_ADDR = 0x8fc6454f90072c9f1f6d3313ae1608f64f4a0660c6ae9f42c68b6a79e2a1bc4b;
	int8 constant DEBOT_WC = -31;

	function getBalance(uint32 answerId, address addr) public pure {
		address a = address.makeAddrStd(DEBOT_WC, ITF_ADDR);
		ISdk(a).getBalance(answerId, addr);
	}
	function getAccountType(uint32 answerId, address addr) public pure {
		address a = address.makeAddrStd(DEBOT_WC, ITF_ADDR);
		ISdk(a).getAccountType(answerId, addr);
	}
}

contract SdkABI is ISdk {
//account info
function getBalance(uint32 answerId, address addr) external override returns (uint128 nanotokens) {}
function getAccountType(uint32 answerId, address addr) external override returns (int8 acc_type) {}
}
