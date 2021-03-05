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
				{"name":"balanceReserveB","type":"uint128"},
				{"name":"walletReserveA","type":"uint128"},
				{"name":"walletReserveB","type":"uint128"}
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
				{"name":"depositWalletB","type":"address"},
				{"name":"processStatus","type":"uint8"},
				{"name":"processStatusA","type":"uint8"},
				{"name":"processQtyA","type":"uint128"},
				{"name":"processValueA","type":"uint128"},
				{"name":"returnWalletA","type":"address"},
				{"name":"processStatusB","type":"uint8"},
				{"name":"processQtyB","type":"uint128"},
				{"name":"processValueB","type":"uint128"},
				{"name":"returnWalletB","type":"address"}
			]
		},
		{
			"name": "getClientsArr",
			"inputs": [
			],
			"outputs": [
				{"name":"dexclientsArr","type":"address[]"}
			]
		},
		{
			"name": "getProcessRouter",
			"inputs": [
				{"name":"clientAddr","type":"address"}
			],
			"outputs": [
				{"name":"dexclientA","type":"address"},
				{"name":"dexclientB","type":"address"}
			]
		},
		{
			"name": "getShareReserveProvider",
			"inputs": [
				{"name":"providerAddr","type":"address"}
			],
			"outputs": [
				{"name":"balanceDEXprovider","type":"uint128"}
			]
		},
		{
			"name": "getTotalSupply",
			"inputs": [
			],
			"outputs": [
				{"name":"totalSupplyDEXpair","type":"uint128"}
			]
		},
		{
			"name": "requestClientBalanceA",
			"inputs": [
				{"name":"tip3wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "requestClientBalanceB",
			"inputs": [
				{"name":"tip3wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "processLiquidity",
			"id": "0x11",
			"inputs": [
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getReserveA",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getReserveB",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getQuotient",
			"inputs": [
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getRemainder",
			"inputs": [
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "responceClientBalanceA",
			"id": "0x16",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "responceClientBalanceB",
			"id": "0x26",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnDeposit",
			"id": "0x18",
			"inputs": [
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnClientDepositA",
			"id": "0x36",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnClientDepositB",
			"id": "0x46",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "processSwapA",
			"id": "0x12",
			"inputs": [
				{"name":"qtyA","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "swapA",
			"id": "0x56",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "processSwapB",
			"id": "0x21",
			"inputs": [
				{"name":"qtyB","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "swapB",
			"id": "0x66",
			"inputs": [
				{"name":"value0","type":"uint128"}
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
     * @property {uint128} walletReserveA 
     * @property {uint128} walletReserveB 
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
     * @property {number} processStatus  (uint8)
     * @property {number} processStatusA  (uint8)
     * @property {uint128} processQtyA 
     * @property {uint128} processValueA 
     * @property {string} returnWalletA  (address)
     * @property {number} processStatusB  (uint8)
     * @property {uint128} processQtyB 
     * @property {uint128} processValueB 
     * @property {string} returnWalletB  (address)
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

    /**
     * @typedef DEXpairContract_getProcessRouter
     * @type {object}
     * @property {string} dexclientA  (address)
     * @property {string} dexclientB  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.clientAddr (address)
     * @return {Promise.<DEXpairContract_getProcessRouter>}
     */
    getProcessRouter(params) {
        return this.run('getProcessRouter', params);
    }

    /**
     * @param {object} params
     * @param {string} params.clientAddr (address)
     * @return {Promise.<DEXpairContract_getProcessRouter>}
     */
    getProcessRouterLocal(params) {
        return this.runLocal('getProcessRouter', params);
    }

    /**
     * @typedef DEXpairContract_getShareReserveProvider
     * @type {object}
     * @property {uint128} balanceDEXprovider 
     */

    /**
     * @param {object} params
     * @param {string} params.providerAddr (address)
     * @return {Promise.<DEXpairContract_getShareReserveProvider>}
     */
    getShareReserveProvider(params) {
        return this.run('getShareReserveProvider', params);
    }

    /**
     * @param {object} params
     * @param {string} params.providerAddr (address)
     * @return {Promise.<DEXpairContract_getShareReserveProvider>}
     */
    getShareReserveProviderLocal(params) {
        return this.runLocal('getShareReserveProvider', params);
    }

    /**
     * @typedef DEXpairContract_getTotalSupply
     * @type {object}
     * @property {uint128} totalSupplyDEXpair 
     */

    /**
     * @return {Promise.<DEXpairContract_getTotalSupply>}
     */
    getTotalSupply() {
        return this.run('getTotalSupply', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getTotalSupply>}
     */
    getTotalSupplyLocal() {
        return this.runLocal('getTotalSupply', {});
    }

    /**
     * @param {object} params
     * @param {string} params.tip3wallet (address)
     */
    requestClientBalanceA(params) {
        return this.run('requestClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {string} params.tip3wallet (address)
     */
    requestClientBalanceALocal(params) {
        return this.runLocal('requestClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {string} params.tip3wallet (address)
     */
    requestClientBalanceB(params) {
        return this.run('requestClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.tip3wallet (address)
     */
    requestClientBalanceBLocal(params) {
        return this.runLocal('requestClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processLiquidity(params) {
        return this.run('processLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processLiquidityLocal(params) {
        return this.runLocal('processLiquidity', params);
    }

    /**
     * @typedef DEXpairContract_getReserveA
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<DEXpairContract_getReserveA>}
     */
    getReserveA() {
        return this.run('getReserveA', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReserveA>}
     */
    getReserveALocal() {
        return this.runLocal('getReserveA', {});
    }

    /**
     * @typedef DEXpairContract_getReserveB
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<DEXpairContract_getReserveB>}
     */
    getReserveB() {
        return this.run('getReserveB', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReserveB>}
     */
    getReserveBLocal() {
        return this.runLocal('getReserveB', {});
    }

    /**
     * @typedef DEXpairContract_getQuotient
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getQuotient>}
     */
    getQuotient(params) {
        return this.run('getQuotient', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getQuotient>}
     */
    getQuotientLocal(params) {
        return this.runLocal('getQuotient', params);
    }

    /**
     * @typedef DEXpairContract_getRemainder
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getRemainder>}
     */
    getRemainder(params) {
        return this.run('getRemainder', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getRemainder>}
     */
    getRemainderLocal(params) {
        return this.runLocal('getRemainder', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceA(params) {
        return this.run('responceClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceALocal(params) {
        return this.runLocal('responceClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceB(params) {
        return this.run('responceClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceBLocal(params) {
        return this.runLocal('responceClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    returnDeposit(params) {
        return this.run('returnDeposit', params);
    }

    /**
     * @param {object} params
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    returnDepositLocal(params) {
        return this.runLocal('returnDeposit', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositA(params) {
        return this.run('returnClientDepositA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositALocal(params) {
        return this.runLocal('returnClientDepositA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositB(params) {
        return this.run('returnClientDepositB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositBLocal(params) {
        return this.runLocal('returnClientDepositB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapA(params) {
        return this.run('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapALocal(params) {
        return this.runLocal('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapA(params) {
        return this.run('swapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapALocal(params) {
        return this.runLocal('swapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapB(params) {
        return this.run('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapBLocal(params) {
        return this.runLocal('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapB(params) {
        return this.run('swapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapBLocal(params) {
        return this.runLocal('swapB', params);
    }

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
