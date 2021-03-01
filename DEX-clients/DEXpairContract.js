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
