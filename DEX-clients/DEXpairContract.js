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
				{"name":"root0","type":"address"},
				{"name":"root1","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "isDEXpairWallet",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "isDEXpairRoot",
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
			"name": "createDepositWallet",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
				{"name":"createStatus","type":"bool"}
			]
		},
		{
			"name": "connect",
			"id": "0x5",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setPairDepositWallet",
			"id": "0xA",
			"inputs": [
				{"name":"value0","type":"address"}
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
			"name": "askBalancePairWallets",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setWalletBalance",
			"id": "0x6",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getBalanceTokens",
			"inputs": [
			],
			"outputs": [
				{"name":"balanceReserveA","type":"uint128"},
				{"name":"balanceReserveB","type":"uint128"}
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
			"name": "getLengthQueueA",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueueA",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"address[]"}
			]
		},
		{
			"name": "getLengthQueueB",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueueB",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"address[]"}
			]
		},
		{
			"name": "setPairReserveWallet",
			"id": "0xB",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPair",
			"inputs": [
			],
			"outputs": [
				{"name":"addressRootA","type":"address"},
				{"name":"addressRootB","type":"address"},
				{"name":"addressReserveA","type":"address"},
				{"name":"addressReserveB","type":"address"},
				{"name":"balanceReserveA","type":"uint128"},
				{"name":"balanceReserveB","type":"uint128"}
			]
		},
		{
			"name": "getClient",
			"inputs": [
				{"name":"dexclient","type":"address"}
			],
			"outputs": [
				{"name":"indexDEXclient","type":"uint256"},
				{"name":"depositWalletA","type":"address"},
				{"name":"depositWalletB","type":"address"}
			]
		},
		{
			"name": "getClientsArr",
			"inputs": [
			],
			"outputs": [
				{"name":"dexclientsArr","type":"address[]"}
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
     * @param {object} constructorParams
     * @param {string} constructorParams.root0 (address)
     * @param {string} constructorParams.root1 (address)
     */
    async deploy(constructorParams) {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams,
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
     * @typedef DEXpairContract_isDEXpairWallet
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairWallet>}
     */
    isDEXpairWallet(params) {
        return this.run('isDEXpairWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairWallet>}
     */
    isDEXpairWalletLocal(params) {
        return this.runLocal('isDEXpairWallet', params);
    }

    /**
     * @typedef DEXpairContract_isDEXpairRoot
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairRoot>}
     */
    isDEXpairRoot(params) {
        return this.run('isDEXpairRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairRoot>}
     */
    isDEXpairRootLocal(params) {
        return this.runLocal('isDEXpairRoot', params);
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
     * @typedef DEXpairContract_createDepositWallet
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXpairContract_createDepositWallet>}
     */
    createDepositWallet(params) {
        return this.run('createDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXpairContract_createDepositWallet>}
     */
    createDepositWalletLocal(params) {
        return this.runLocal('createDepositWallet', params);
    }

    /**
     */
    connect() {
        return this.run('connect', {});
    }

    /**
     */
    connectLocal() {
        return this.runLocal('connect', {});
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairDepositWallet(params) {
        return this.run('setPairDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairDepositWalletLocal(params) {
        return this.runLocal('setPairDepositWallet', params);
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
    askBalancePairWallets() {
        return this.run('askBalancePairWallets', {});
    }

    /**
     */
    askBalancePairWalletsLocal() {
        return this.runLocal('askBalancePairWallets', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setWalletBalance(params) {
        return this.run('setWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setWalletBalanceLocal(params) {
        return this.runLocal('setWalletBalance', params);
    }

    /**
     * @typedef DEXpairContract_getBalanceTokens
     * @type {object}
     * @property {uint128} balanceReserveA 
     * @property {uint128} balanceReserveB 
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
     * @typedef DEXpairContract_getLengthQueueA
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueA>}
     */
    getLengthQueueA() {
        return this.run('getLengthQueueA', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueA>}
     */
    getLengthQueueALocal() {
        return this.runLocal('getLengthQueueA', {});
    }

    /**
     * @typedef DEXpairContract_getAllQueueA
     * @type {object}
     * @property {string[]} queueArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getAllQueueA>}
     */
    getAllQueueA() {
        return this.run('getAllQueueA', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getAllQueueA>}
     */
    getAllQueueALocal() {
        return this.runLocal('getAllQueueA', {});
    }

    /**
     * @typedef DEXpairContract_getLengthQueueB
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueB>}
     */
    getLengthQueueB() {
        return this.run('getLengthQueueB', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueB>}
     */
    getLengthQueueBLocal() {
        return this.runLocal('getLengthQueueB', {});
    }

    /**
     * @typedef DEXpairContract_getAllQueueB
     * @type {object}
     * @property {string[]} queueArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getAllQueueB>}
     */
    getAllQueueB() {
        return this.run('getAllQueueB', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getAllQueueB>}
     */
    getAllQueueBLocal() {
        return this.runLocal('getAllQueueB', {});
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairReserveWallet(params) {
        return this.run('setPairReserveWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairReserveWalletLocal(params) {
        return this.runLocal('setPairReserveWallet', params);
    }

    /**
     * @typedef DEXpairContract_getPair
     * @type {object}
     * @property {string} addressRootA  (address)
     * @property {string} addressRootB  (address)
     * @property {string} addressReserveA  (address)
     * @property {string} addressReserveB  (address)
     * @property {uint128} balanceReserveA 
     * @property {uint128} balanceReserveB 
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
     * @typedef DEXpairContract_getClient
     * @type {object}
     * @property {string} indexDEXclient  (uint256)
     * @property {string} depositWalletA  (address)
     * @property {string} depositWalletB  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_getClient>}
     */
    getClient(params) {
        return this.run('getClient', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_getClient>}
     */
    getClientLocal(params) {
        return this.runLocal('getClient', params);
    }

    /**
     * @typedef DEXpairContract_getClientsArr
     * @type {object}
     * @property {string[]} dexclientsArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getClientsArr>}
     */
    getClientsArr() {
        return this.run('getClientsArr', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getClientsArr>}
     */
    getClientsArrLocal() {
        return this.runLocal('getClientsArr', {});
    }

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
