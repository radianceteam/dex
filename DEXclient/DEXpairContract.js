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

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
