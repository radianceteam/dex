pragma ton-solidity >=0.35.0;

interface ITerminal {
	function inputUint(uint32 answerId, string prompt) external returns (uint256 value);
	function inputBoolean(uint32 answerId, string prompt) external returns (bool value);
	function print(uint32 answerId, string message) external;
}

library Terminal {

	uint256 constant ID = 0x8796536366ee21852db56dccb60bc564598b618c865fc50c8b1ab740bba128e3;
	int8 constant DEBOT_WC = -31;

	function inputUint(uint32 answerId, string prompt) public pure {
		address addr = address.makeAddrStd(DEBOT_WC, ID);
		ITerminal(addr).inputUint(answerId, prompt);
	}
	function inputBoolean(uint32 answerId, string prompt) public pure {
		address addr = address.makeAddrStd(DEBOT_WC, ID);
		ITerminal(addr).inputBoolean(answerId, prompt);
	}
	function print(uint32 answerId, string message) public pure {
		address addr = address.makeAddrStd(DEBOT_WC, ID);
		ITerminal(addr).print(answerId, message);
	}
}

contract TerminalABI is ITerminal {
	function inputUint(uint32 answerId, string prompt) external override returns (uint256 value) {}
	function inputBoolean(uint32 answerId, string prompt) external override returns (bool value) {}
	function print(uint32 answerId, string message) external override {}
}
