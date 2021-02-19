pragma solidity >= 0.6.0;
pragma AbiHeader expire;

contract Queue {

	mapping(uint128 => address) providersQueue;

	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	function getProviderFromQueueByIndex(uint128 index) public view alwaysAccept returns (address) {
		return providersQueue[index];
	}


	function getLast() public view alwaysAccept returns (uint128, address) {
		return providersQueue.max();
	}

	function getFirst() public view alwaysAccept returns (uint128, address) {
		return providersQueue.min();
	}

	function addProviderToQueue(uint128 index, address provider) public view alwaysAccept returns (bool) {
		return providersQueue.add(index, provider);
	}

	function deleteMinFromQueue(uint128 index, address provider) public view alwaysAccept returns (uint128, address) {
		return providersQueue.delMin();
	}

	function deleteMaxFromQueue(uint128 index, address provider) public view alwaysAccept returns (uint128, address) {
		return providersQueue.delMax();
	}

}
