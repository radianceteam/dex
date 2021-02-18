pragma solidity >= 0.6.0;
pragma AbiHeader expire;

interface ITONTokenWallet {
		function transfer(address dest, uint128 tokens, uint128 grams) external;
}

contract DEXpair {

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

	function sendTokens(ITONTokenWallet tokenAddress, address dest, uint128 tokens, uint128 grams) external view checkOwnerAndAccept  returns(bool){
		// Call the remote contract function with parameter.
		tokenAddress.transfer(dest, tokens, grams);
		return true;
	}


}
