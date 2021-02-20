pragma solidity >= 0.6.0;
pragma AbiHeader expire;

contract Queue {

	mapping(uint128 => address) providersQueue;
	mapping(address => uint128) queueIndexes;

	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	function getProviderFromQueueByIndex(uint128 index) public view alwaysAccept returns (address) {
		return providersQueue[index];
	}

	function getLast() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = providersQueue.max();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function getFirst() public view alwaysAccept returns (uint128) {
		optional(uint128, address) rs = providersQueue.min();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function addProviderToQueue(address provider) public alwaysAccept returns (bool addStatus) {
		uint128 last = getLast();
		last ++;
		addStatus = providersQueue.add(last, provider);
	}

	function deleteFirstFromQueue() public alwaysAccept returns (uint128) {
		optional(uint128, address) rs = providersQueue.delMin();
		if (rs.hasValue()) {(uint128 number, ) = rs.get();return number;} else {return 0;}
	}

	function takeFirstFromQueue() public alwaysAccept returns (address) {
		optional(uint128, address) rs = providersQueue.delMin();
		if (rs.hasValue()) {( ,address value) = rs.get();return value;} else {return address(0);}
	}

	function getProvidersQueueLength() public view alwaysAccept returns (uint128 length) {
		uint128 first = getFirst();
		uint128 last = getLast();
		uint128 length = (last>=first)?last-first+1:0;
	}

	function getAllProvidersFromQueue() public view alwaysAccept returns (address[] providersArr) {
		uint128 first = getFirst();
		uint128 last = getLast();
		uint128 repeatQty = (last>=first)?last-first+1:0;
		uint128 count = first;
		repeat(repeatQty) {
			providersArr.push(providersQueue[count]);
			count++;
		}
	}

}
