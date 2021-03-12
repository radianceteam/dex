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
			"name": "getReserveWalletsBalance",
			"inputs": [
			],
			"outputs": [
				{"name":"walletReserveA","type":"uint128"},
				{"name":"walletReserveB","type":"uint128"}
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
			"name": "getReservesBalance",
			"inputs": [
			],
			"outputs": [
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
				{"name":"depositWalletB","type":"address"},
				{"name":"processStatus","type":"uint8"},
				{"name":"processQtyA","type":"uint128"},
				{"name":"returnWalletA","type":"address"},
				{"name":"processQtyB","type":"uint128"},
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
		},
		{
			"name": "returnAllLiquidity",
			"id": "0x19",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "resetStatus",
			"inputs": [
				{"name":"dexclient","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "getBalanceTONgrams",
			"inputs": [
			],
			"outputs": [
				{"name":"balanceTONgrams","type":"uint128"}
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
     * @typedef DEXpairContract_getReserveWalletsBalance
     * @type {object}
     * @property {uint128} walletReserveA 
     * @property {uint128} walletReserveB 
     */

    /**
     * @return {Promise.<DEXpairContract_getReserveWalletsBalance>}
     */
    getReserveWalletsBalance() {
        return this.run('getReserveWalletsBalance', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReserveWalletsBalance>}
     */
    getReserveWalletsBalanceLocal() {
        return this.runLocal('getReserveWalletsBalance', {});
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
     * @typedef DEXpairContract_getReservesBalance
     * @type {object}
     * @property {uint128} balanceReserveA 
     * @property {uint128} balanceReserveB 
     */

    /**
     * @return {Promise.<DEXpairContract_getReservesBalance>}
     */
    getReservesBalance() {
        return this.run('getReservesBalance', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReservesBalance>}
     */
    getReservesBalanceLocal() {
        return this.runLocal('getReservesBalance', {});
    }

    /**
     * @typedef DEXpairContract_getClient
     * @type {object}
     * @property {string} indexDEXclient  (uint256)
     * @property {string} depositWalletA  (address)
     * @property {string} depositWalletB  (address)
     * @property {number} processStatus  (uint8)
     * @property {uint128} processQtyA 
     * @property {string} returnWalletA  (address)
     * @property {uint128} processQtyB 
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

    /**
     */
    returnAllLiquidity() {
        return this.run('returnAllLiquidity', {});
    }

    /**
     */
    returnAllLiquidityLocal() {
        return this.runLocal('returnAllLiquidity', {});
    }

    /**
     * @typedef DEXpairContract_resetStatus
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_resetStatus>}
     */
    resetStatus(params) {
        return this.run('resetStatus', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_resetStatus>}
     */
    resetStatusLocal(params) {
        return this.runLocal('resetStatus', params);
    }

    /**
     * @typedef DEXpairContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<DEXpairContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
