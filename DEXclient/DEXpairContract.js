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
