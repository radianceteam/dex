//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
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
			"name": "connectPair",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"param0","type":"bool"}
			]
		},
		{
			"name": "setPair",
			"id": "0x3",
			"inputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"},
				{"name":"arg2","type":"address"},
				{"name":"arg3","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPair",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"},
				{"name":"arg2","type":"uint128"},
				{"name":"arg3","type":"address"},
				{"name":"arg4","type":"address"},
				{"name":"arg5","type":"uint128"}
			]
		},
		{
			"name": "sendTokens",
			"inputs": [
				{"name":"from","type":"address"},
				{"name":"to","type":"address"},
				{"name":"tokens","type":"uint128"},
				{"name":"grams","type":"uint128"}
			],
			"outputs": [
				{"name":"transmitter","type":"address"},
				{"name":"receiver","type":"address"},
				{"name":"body","type":"cell"}
			]
		},
		{
			"name": "sendTokens2",
			"inputs": [
				{"name":"from","type":"address"},
				{"name":"to","type":"address"},
				{"name":"tokens","type":"uint128"},
				{"name":"grams","type":"uint128"}
			],
			"outputs": [
				{"name":"transmitter","type":"address"},
				{"name":"receiver","type":"address"}
			]
		},
		{
			"name": "askBalanceToken",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "askBalanceAllTokens",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setBalanceToken",
			"id": "0x4",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getWalletBalance",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
				{"name":"value1","type":"uint128"}
			]
		},
		{
			"name": "setMsgGrams",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getMsgGrams",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "setTongrams",
			"inputs": [
				{"name":"value0","type":"uint128"},
				{"name":"value1","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getTongrams",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"},
				{"name":"value1","type":"uint128"}
			]
		},
		{
			"name": "createNewEmptyWallet",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setNewEmptyWallet",
			"id": "0x7",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "createPairWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "resetPairWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "recreatePairWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPairWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"address"},
				{"name":"value1","type":"address"}
			]
		},
		{
			"name": "askPairWalletsBalance",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPairWalletsBalance",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"},
				{"name":"value1","type":"uint128"}
			]
		},
		{
			"name": "showContractAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"uint256"}
			]
		},
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
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

class DEXclientContract {
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
     * @typedef DEXclientContract_connectPair
     * @type {object}
     * @property {bool} param0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXclientContract_connectPair>}
     */
    connectPair(params) {
        return this.run('connectPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXclientContract_connectPair>}
     */
    connectPairLocal(params) {
        return this.runLocal('connectPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     * @param {string} params.arg2 (address)
     * @param {string} params.arg3 (address)
     */
    setPair(params) {
        return this.run('setPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     * @param {string} params.arg2 (address)
     * @param {string} params.arg3 (address)
     */
    setPairLocal(params) {
        return this.runLocal('setPair', params);
    }

    /**
     * @typedef DEXclientContract_getPair
     * @type {object}
     * @property {string} arg0  (address)
     * @property {string} arg1  (address)
     * @property {uint128} arg2 
     * @property {string} arg3  (address)
     * @property {string} arg4  (address)
     * @property {uint128} arg5 
     */

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     * @return {Promise.<DEXclientContract_getPair>}
     */
    getPair(params) {
        return this.run('getPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     * @return {Promise.<DEXclientContract_getPair>}
     */
    getPairLocal(params) {
        return this.runLocal('getPair', params);
    }

    /**
     * @typedef DEXclientContract_sendTokens
     * @type {object}
     * @property {string} transmitter  (address)
     * @property {string} receiver  (address)
     * @property {cell} body 
     */

    /**
     * @param {object} params
     * @param {string} params.from (address)
     * @param {string} params.to (address)
     * @param {uint128} params.tokens
     * @param {uint128} params.grams
     * @return {Promise.<DEXclientContract_sendTokens>}
     */
    sendTokens(params) {
        return this.run('sendTokens', params);
    }

    /**
     * @param {object} params
     * @param {string} params.from (address)
     * @param {string} params.to (address)
     * @param {uint128} params.tokens
     * @param {uint128} params.grams
     * @return {Promise.<DEXclientContract_sendTokens>}
     */
    sendTokensLocal(params) {
        return this.runLocal('sendTokens', params);
    }

    /**
     * @typedef DEXclientContract_sendTokens2
     * @type {object}
     * @property {string} transmitter  (address)
     * @property {string} receiver  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.from (address)
     * @param {string} params.to (address)
     * @param {uint128} params.tokens
     * @param {uint128} params.grams
     * @return {Promise.<DEXclientContract_sendTokens2>}
     */
    sendTokens2(params) {
        return this.run('sendTokens2', params);
    }

    /**
     * @param {object} params
     * @param {string} params.from (address)
     * @param {string} params.to (address)
     * @param {uint128} params.tokens
     * @param {uint128} params.grams
     * @return {Promise.<DEXclientContract_sendTokens2>}
     */
    sendTokens2Local(params) {
        return this.runLocal('sendTokens2', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    askBalanceToken(params) {
        return this.run('askBalanceToken', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    askBalanceTokenLocal(params) {
        return this.runLocal('askBalanceToken', params);
    }

    /**
     */
    askBalanceAllTokens() {
        return this.run('askBalanceAllTokens', {});
    }

    /**
     */
    askBalanceAllTokensLocal() {
        return this.runLocal('askBalanceAllTokens', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setBalanceToken(params) {
        return this.run('setBalanceToken', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setBalanceTokenLocal(params) {
        return this.runLocal('setBalanceToken', params);
    }

    /**
     * @typedef DEXclientContract_getWalletBalance
     * @type {object}
     * @property {uint128} value1 
     */

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     * @return {Promise.<DEXclientContract_getWalletBalance>}
     */
    getWalletBalance(params) {
        return this.run('getWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     * @return {Promise.<DEXclientContract_getWalletBalance>}
     */
    getWalletBalanceLocal(params) {
        return this.runLocal('getWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setMsgGrams(params) {
        return this.run('setMsgGrams', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setMsgGramsLocal(params) {
        return this.runLocal('setMsgGrams', params);
    }

    /**
     * @typedef DEXclientContract_getMsgGrams
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<DEXclientContract_getMsgGrams>}
     */
    getMsgGrams() {
        return this.run('getMsgGrams', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getMsgGrams>}
     */
    getMsgGramsLocal() {
        return this.runLocal('getMsgGrams', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     * @param {uint128} params.value1
     */
    setTongrams(params) {
        return this.run('setTongrams', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     * @param {uint128} params.value1
     */
    setTongramsLocal(params) {
        return this.runLocal('setTongrams', params);
    }

    /**
     * @typedef DEXclientContract_getTongrams
     * @type {object}
     * @property {uint128} value0 
     * @property {uint128} value1 
     */

    /**
     * @return {Promise.<DEXclientContract_getTongrams>}
     */
    getTongrams() {
        return this.run('getTongrams', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getTongrams>}
     */
    getTongramsLocal() {
        return this.runLocal('getTongrams', {});
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     */
    createNewEmptyWallet(params) {
        return this.run('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     */
    createNewEmptyWalletLocal(params) {
        return this.runLocal('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setNewEmptyWallet(params) {
        return this.run('setNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setNewEmptyWalletLocal(params) {
        return this.runLocal('setNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    createPairWallets(params) {
        return this.run('createPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    createPairWalletsLocal(params) {
        return this.runLocal('createPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    resetPairWallets(params) {
        return this.run('resetPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    resetPairWalletsLocal(params) {
        return this.runLocal('resetPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    recreatePairWallets(params) {
        return this.run('recreatePairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    recreatePairWalletsLocal(params) {
        return this.runLocal('recreatePairWallets', params);
    }

    /**
     * @typedef DEXclientContract_getPairWallets
     * @type {object}
     * @property {string} value0  (address)
     * @property {string} value1  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairWallets>}
     */
    getPairWallets(params) {
        return this.run('getPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairWallets>}
     */
    getPairWalletsLocal(params) {
        return this.runLocal('getPairWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    askPairWalletsBalance(params) {
        return this.run('askPairWalletsBalance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     */
    askPairWalletsBalanceLocal(params) {
        return this.runLocal('askPairWalletsBalance', params);
    }

    /**
     * @typedef DEXclientContract_getPairWalletsBalance
     * @type {object}
     * @property {uint128} value0 
     * @property {uint128} value1 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairWalletsBalance>}
     */
    getPairWalletsBalance(params) {
        return this.run('getPairWalletsBalance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairWalletsBalance>}
     */
    getPairWalletsBalanceLocal(params) {
        return this.runLocal('getPairWalletsBalance', params);
    }

    /**
     * @typedef DEXclientContract_showContractAddress
     * @type {object}
     * @property {string} arg0  (address)
     * @property {string} arg1  (uint256)
     */

    /**
     * @return {Promise.<DEXclientContract_showContractAddress>}
     */
    showContractAddress() {
        return this.run('showContractAddress', {});
    }

    /**
     * @return {Promise.<DEXclientContract_showContractAddress>}
     */
    showContractAddressLocal() {
        return this.runLocal('showContractAddress', {});
    }

}

DEXclientContract.package = pkg;

module.exports = DEXclientContract;
