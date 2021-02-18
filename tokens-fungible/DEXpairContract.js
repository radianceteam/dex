//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "isDEXpairToken",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
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
			"name": "connectPair",
			"id": "0x5",
			"inputs": [
			],
			"outputs": [
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
			"name": "askBalanceTokens",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setBalanceToken",
			"id": "0x6",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setPair",
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
			"name": "resetPair",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "getPair",
			"inputs": [
			],
			"outputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"},
				{"name":"arg2","type":"address"},
				{"name":"arg3","type":"address"}
			]
		},
		{
			"name": "getBalanceTokens",
			"inputs": [
			],
			"outputs": [
				{"name":"balance_tokenA","type":"uint128"},
				{"name":"balance_tokenB","type":"uint128"}
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
			"name": "getWriters",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"bool"},
				{"name":"param1","type":"bool"}
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

class DEXpairContract {
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
     * @typedef DEXpairContract_isDEXpairToken
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairToken>}
     */
    isDEXpairToken(params) {
        return this.run('isDEXpairToken', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairToken>}
     */
    isDEXpairTokenLocal(params) {
        return this.runLocal('isDEXpairToken', params);
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
     */
    connectPair() {
        return this.run('connectPair', {});
    }

    /**
     */
    connectPairLocal() {
        return this.runLocal('connectPair', {});
    }

    /**
     * @typedef DEXpairContract_sendTokens2
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
     * @return {Promise.<DEXpairContract_sendTokens2>}
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
     * @return {Promise.<DEXpairContract_sendTokens2>}
     */
    sendTokens2Local(params) {
        return this.runLocal('sendTokens2', params);
    }

    /**
     * @typedef DEXpairContract_sendTokens
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
     * @return {Promise.<DEXpairContract_sendTokens>}
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
     * @return {Promise.<DEXpairContract_sendTokens>}
     */
    sendTokensLocal(params) {
        return this.runLocal('sendTokens', params);
    }

    /**
     */
    askBalanceTokens() {
        return this.run('askBalanceTokens', {});
    }

    /**
     */
    askBalanceTokensLocal() {
        return this.runLocal('askBalanceTokens', {});
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
     */
    resetPair() {
        return this.run('resetPair', {});
    }

    /**
     */
    resetPairLocal() {
        return this.runLocal('resetPair', {});
    }

    /**
     * @typedef DEXpairContract_getPair
     * @type {object}
     * @property {string} arg0  (address)
     * @property {string} arg1  (address)
     * @property {string} arg2  (address)
     * @property {string} arg3  (address)
     */

    /**
     * @return {Promise.<DEXpairContract_getPair>}
     */
    getPair() {
        return this.run('getPair', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getPair>}
     */
    getPairLocal() {
        return this.runLocal('getPair', {});
    }

    /**
     * @typedef DEXpairContract_getBalanceTokens
     * @type {object}
     * @property {uint128} balance_tokenA 
     * @property {uint128} balance_tokenB 
     */

    /**
     * @return {Promise.<DEXpairContract_getBalanceTokens>}
     */
    getBalanceTokens() {
        return this.run('getBalanceTokens', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getBalanceTokens>}
     */
    getBalanceTokensLocal() {
        return this.runLocal('getBalanceTokens', {});
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
     * @typedef DEXpairContract_getMsgGrams
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<DEXpairContract_getMsgGrams>}
     */
    getMsgGrams() {
        return this.run('getMsgGrams', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getMsgGrams>}
     */
    getMsgGramsLocal() {
        return this.runLocal('getMsgGrams', {});
    }

    /**
     * @typedef DEXpairContract_getWriters
     * @type {object}
     * @property {bool} param0 
     * @property {bool} param1 
     */

    /**
     * @return {Promise.<DEXpairContract_getWriters>}
     */
    getWriters() {
        return this.run('getWriters', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getWriters>}
     */
    getWritersLocal() {
        return this.runLocal('getWriters', {});
    }

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
