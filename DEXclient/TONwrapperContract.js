//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "isRoot",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "createZeroWallet",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "mintRoot",
			"inputs": [
				{"name":"wrappedTONgrams","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "grantRoot",
			"inputs": [
				{"name":"destination","type":"address"},
				{"name":"wrappedTONgrams","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setZeroWallet",
			"id": "0x126",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getZeroAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"walletZero","type":"address"}
			]
		},
		{
			"name": "sendTransfer",
			"inputs": [
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint128"},
				{"name":"bounce","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "getLengthQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"uint256[]"}
			]
		},
		{
			"name": "wrapGrams",
			"id": "0x25",
			"inputs": [
				{"name":"destination","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setDepositWallet",
			"id": "0x125",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "unwrapGrams",
			"id": "0x52",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "balanceDepositWallet",
			"id": "0x152",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getBalanceTONgrams",
			"inputs": [
			],
			"outputs": [
				{"name":"balanceTONgrams","type":"uint128"}
			]
		},
		{
			"name": "getDepositAddress",
			"inputs": [
				{"name":"dexclient","type":"address"}
			],
			"outputs": [
				{"name":"dexclientDepositAddress","type":"address"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

const pkg = {
    abi,
    imageBase64: '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',
};

class TONwrapperContract {
    /**
    * @param {TONClient} client
    * @param {string} address can be null if contract will be deployed
    * @param {TONKeyPairData} keys
    */
    constructor(client, address, keys) {
        this.client = client;
        this.address = address;
        this.keys = keys;
        this.package = pkg;
        this.abi = abi;
    }

    /**
     */
    async deploy() {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams: {},
            initParams: {},
            keyPair: this.keys,
        })).address;
    }

    /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async run(functionName, input) {
        const result = await this.client.contracts.run({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

   /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async runLocal(functionName, input) {
        const result = await this.client.contracts.runLocal({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

    /**
     * @typedef TONwrapperContract_isRoot
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<TONwrapperContract_isRoot>}
     */
    isRoot(params) {
        return this.run('isRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<TONwrapperContract_isRoot>}
     */
    isRootLocal(params) {
        return this.runLocal('isRoot', params);
    }

    /**
     */
    createZeroWallet() {
        return this.run('createZeroWallet', {});
    }

    /**
     */
    createZeroWalletLocal() {
        return this.runLocal('createZeroWallet', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.wrappedTONgrams
     */
    mintRoot(params) {
        return this.run('mintRoot', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.wrappedTONgrams
     */
    mintRootLocal(params) {
        return this.runLocal('mintRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     * @param {uint128} params.wrappedTONgrams
     */
    grantRoot(params) {
        return this.run('grantRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     * @param {uint128} params.wrappedTONgrams
     */
    grantRootLocal(params) {
        return this.runLocal('grantRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setZeroWallet(params) {
        return this.run('setZeroWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setZeroWalletLocal(params) {
        return this.runLocal('setZeroWallet', params);
    }

    /**
     * @typedef TONwrapperContract_getZeroAddress
     * @type {object}
     * @property {string} walletZero  (address)
     */

    /**
     * @return {Promise.<TONwrapperContract_getZeroAddress>}
     */
    getZeroAddress() {
        return this.run('getZeroAddress', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getZeroAddress>}
     */
    getZeroAddressLocal() {
        return this.runLocal('getZeroAddress', {});
    }

    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransfer(params) {
        return this.run('sendTransfer', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransferLocal(params) {
        return this.runLocal('sendTransfer', params);
    }

    /**
     * @typedef TONwrapperContract_getLengthQueue
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<TONwrapperContract_getLengthQueue>}
     */
    getLengthQueue() {
        return this.run('getLengthQueue', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getLengthQueue>}
     */
    getLengthQueueLocal() {
        return this.runLocal('getLengthQueue', {});
    }

    /**
     * @typedef TONwrapperContract_getAllQueue
     * @type {object}
     * @property {string[]} queueArr  (uint256[])
     */

    /**
     * @return {Promise.<TONwrapperContract_getAllQueue>}
     */
    getAllQueue() {
        return this.run('getAllQueue', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getAllQueue>}
     */
    getAllQueueLocal() {
        return this.runLocal('getAllQueue', {});
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     */
    wrapGrams(params) {
        return this.run('wrapGrams', params);
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     */
    wrapGramsLocal(params) {
        return this.runLocal('wrapGrams', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setDepositWallet(params) {
        return this.run('setDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setDepositWalletLocal(params) {
        return this.runLocal('setDepositWallet', params);
    }

    /**
     */
    unwrapGrams() {
        return this.run('unwrapGrams', {});
    }

    /**
     */
    unwrapGramsLocal() {
        return this.runLocal('unwrapGrams', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    balanceDepositWallet(params) {
        return this.run('balanceDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    balanceDepositWalletLocal(params) {
        return this.runLocal('balanceDepositWallet', params);
    }

    /**
     * @typedef TONwrapperContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<TONwrapperContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

    /**
     * @typedef TONwrapperContract_getDepositAddress
     * @type {object}
     * @property {string} dexclientDepositAddress  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<TONwrapperContract_getDepositAddress>}
     */
    getDepositAddress(params) {
        return this.run('getDepositAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<TONwrapperContract_getDepositAddress>}
     */
    getDepositAddressLocal(params) {
        return this.runLocal('getDepositAddress', params);
    }

}

TONwrapperContract.package = pkg;

module.exports = TONwrapperContract;
