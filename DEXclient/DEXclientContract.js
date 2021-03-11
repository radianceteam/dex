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
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"statusConnection","type":"bool"}
			]
		},
		{
			"name": "createNewEmptyWalletByOwner",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
				{"name":"createStatus","type":"bool"}
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
			"name": "getWalletByRoot",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
				{"name":"wallet","type":"address"}
			]
		},
		{
			"name": "setPair",
			"id": "0x3",
			"inputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"},
				{"name":"arg2","type":"address"},
				{"name":"arg3","type":"address"},
				{"name":"arg4","type":"address"},
				{"name":"arg5","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setPairDepositA",
			"id": "0x8",
			"inputs": [
				{"name":"arg0","type":"address"}
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
				{"name":"pairRootA","type":"address"},
				{"name":"pairReserveA","type":"address"},
				{"name":"clientDepositA","type":"address"},
				{"name":"clientAllowanceA","type":"uint128"},
				{"name":"pairRootB","type":"address"},
				{"name":"pairReserveB","type":"address"},
				{"name":"clientDepositB","type":"address"},
				{"name":"clientAllowanceB","type":"uint128"}
			]
		},
		{
			"name": "setPairDepositB",
			"id": "0x9",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
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
				{"name":"walletAddr","type":"address"}
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
			"name": "getBalanceTokenWallet",
			"inputs": [
				{"name":"walletAddr","type":"address"}
			],
			"outputs": [
				{"name":"walletBal","type":"uint128"}
			]
		},
		{
			"name": "getPairClientWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"walletA","type":"address"},
				{"name":"walletB","type":"address"}
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
				{"name":"balanceWalletA","type":"uint128"},
				{"name":"balanceWalletB","type":"uint128"}
			]
		},
		{
			"name": "getAllDataPreparation",
			"inputs": [
			],
			"outputs": [
				{"name":"pairKeysR","type":"address[]"},
				{"name":"walletKeysR","type":"address[]"}
			]
		},
		{
			"name": "showContractAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"dexclient","type":"address"},
				{"name":"dexclientUINT256","type":"uint256"}
			]
		},
		{
			"name": "makeABdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "makeAdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "makeBdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "returnDepositFromPair",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"returnDepositStatus","type":"bool"}
			]
		},
		{
			"name": "processLiquidity",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"processLiquidityStatus","type":"bool"}
			]
		},
		{
			"name": "returnAllLiquidity",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"returnLiquidityStatus","type":"bool"}
			]
		},
		{
			"name": "processSwapA",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"}
			],
			"outputs": [
				{"name":"processSwapStatus","type":"bool"}
			]
		},
		{
			"name": "processSwapB",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"processSwapStatus","type":"bool"}
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
			"name": "setWrapper",
			"id": "0x89",
			"inputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "wrapTON",
			"inputs": [
				{"name":"qtyTONgrams","type":"uint128"}
			],
			"outputs": [
				{"name":"processWrapStatus","type":"bool"}
			]
		},
		{
			"name": "unwrapTON",
			"inputs": [
			],
			"outputs": [
				{"name":"processUnwrapStatus","type":"bool"}
			]
		},
		{
			"name": "callbackUnwrapTON",
			"id": "0x24",
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
     * @property {bool} statusConnection 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_connectPair>}
     */
    connectPair(params) {
        return this.run('connectPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_connectPair>}
     */
    connectPairLocal(params) {
        return this.runLocal('connectPair', params);
    }

    /**
     * @typedef DEXclientContract_createNewEmptyWalletByOwner
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWalletByOwner>}
     */
    createNewEmptyWalletByOwner(params) {
        return this.run('createNewEmptyWalletByOwner', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWalletByOwner>}
     */
    createNewEmptyWalletByOwnerLocal(params) {
        return this.runLocal('createNewEmptyWalletByOwner', params);
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
     * @typedef DEXclientContract_getWalletByRoot
     * @type {object}
     * @property {string} wallet  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_getWalletByRoot>}
     */
    getWalletByRoot(params) {
        return this.run('getWalletByRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_getWalletByRoot>}
     */
    getWalletByRootLocal(params) {
        return this.runLocal('getWalletByRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     * @param {string} params.arg2 (address)
     * @param {string} params.arg3 (address)
     * @param {string} params.arg4 (address)
     * @param {string} params.arg5 (address)
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
     * @param {string} params.arg4 (address)
     * @param {string} params.arg5 (address)
     */
    setPairLocal(params) {
        return this.runLocal('setPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    setPairDepositA(params) {
        return this.run('setPairDepositA', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    setPairDepositALocal(params) {
        return this.runLocal('setPairDepositA', params);
    }

    /**
     * @typedef DEXclientContract_getPair
     * @type {object}
     * @property {string} pairRootA  (address)
     * @property {string} pairReserveA  (address)
     * @property {string} clientDepositA  (address)
     * @property {uint128} clientAllowanceA 
     * @property {string} pairRootB  (address)
     * @property {string} pairReserveB  (address)
     * @property {string} clientDepositB  (address)
     * @property {uint128} clientAllowanceB 
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
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    setPairDepositB(params) {
        return this.run('setPairDepositB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     */
    setPairDepositBLocal(params) {
        return this.runLocal('setPairDepositB', params);
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
     * @param {string} params.walletAddr (address)
     */
    askBalanceToken(params) {
        return this.run('askBalanceToken', params);
    }

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
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
     * @typedef DEXclientContract_getBalanceTokenWallet
     * @type {object}
     * @property {uint128} walletBal 
     */

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getBalanceTokenWallet>}
     */
    getBalanceTokenWallet(params) {
        return this.run('getBalanceTokenWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getBalanceTokenWallet>}
     */
    getBalanceTokenWalletLocal(params) {
        return this.runLocal('getBalanceTokenWallet', params);
    }

    /**
     * @typedef DEXclientContract_getPairClientWallets
     * @type {object}
     * @property {string} walletA  (address)
     * @property {string} walletB  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairClientWallets>}
     */
    getPairClientWallets(params) {
        return this.run('getPairClientWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_getPairClientWallets>}
     */
    getPairClientWalletsLocal(params) {
        return this.runLocal('getPairClientWallets', params);
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
     * @property {uint128} balanceWalletA 
     * @property {uint128} balanceWalletB 
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
     * @typedef DEXclientContract_getAllDataPreparation
     * @type {object}
     * @property {string[]} pairKeysR  (address[])
     * @property {string[]} walletKeysR  (address[])
     */

    /**
     * @return {Promise.<DEXclientContract_getAllDataPreparation>}
     */
    getAllDataPreparation() {
        return this.run('getAllDataPreparation', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getAllDataPreparation>}
     */
    getAllDataPreparationLocal() {
        return this.runLocal('getAllDataPreparation', {});
    }

    /**
     * @typedef DEXclientContract_showContractAddress
     * @type {object}
     * @property {string} dexclient  (address)
     * @property {string} dexclientUINT256  (uint256)
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

    /**
     * @typedef DEXclientContract_makeABdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeABdepositToPair>}
     */
    makeABdepositToPair(params) {
        return this.run('makeABdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeABdepositToPair>}
     */
    makeABdepositToPairLocal(params) {
        return this.runLocal('makeABdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_makeAdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_makeAdepositToPair>}
     */
    makeAdepositToPair(params) {
        return this.run('makeAdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_makeAdepositToPair>}
     */
    makeAdepositToPairLocal(params) {
        return this.runLocal('makeAdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_makeBdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeBdepositToPair>}
     */
    makeBdepositToPair(params) {
        return this.run('makeBdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeBdepositToPair>}
     */
    makeBdepositToPairLocal(params) {
        return this.runLocal('makeBdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_returnDepositFromPair
     * @type {object}
     * @property {bool} returnDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnDepositFromPair>}
     */
    returnDepositFromPair(params) {
        return this.run('returnDepositFromPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnDepositFromPair>}
     */
    returnDepositFromPairLocal(params) {
        return this.runLocal('returnDepositFromPair', params);
    }

    /**
     * @typedef DEXclientContract_processLiquidity
     * @type {object}
     * @property {bool} processLiquidityStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processLiquidity>}
     */
    processLiquidity(params) {
        return this.run('processLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processLiquidity>}
     */
    processLiquidityLocal(params) {
        return this.runLocal('processLiquidity', params);
    }

    /**
     * @typedef DEXclientContract_returnAllLiquidity
     * @type {object}
     * @property {bool} returnLiquidityStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnAllLiquidity>}
     */
    returnAllLiquidity(params) {
        return this.run('returnAllLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnAllLiquidity>}
     */
    returnAllLiquidityLocal(params) {
        return this.runLocal('returnAllLiquidity', params);
    }

    /**
     * @typedef DEXclientContract_processSwapA
     * @type {object}
     * @property {bool} processSwapStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_processSwapA>}
     */
    processSwapA(params) {
        return this.run('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_processSwapA>}
     */
    processSwapALocal(params) {
        return this.runLocal('processSwapA', params);
    }

    /**
     * @typedef DEXclientContract_processSwapB
     * @type {object}
     * @property {bool} processSwapStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processSwapB>}
     */
    processSwapB(params) {
        return this.run('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processSwapB>}
     */
    processSwapBLocal(params) {
        return this.runLocal('processSwapB', params);
    }

    /**
     * @typedef DEXclientContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<DEXclientContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     */
    setWrapper(params) {
        return this.run('setWrapper', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     */
    setWrapperLocal(params) {
        return this.runLocal('setWrapper', params);
    }

    /**
     * @typedef DEXclientContract_wrapTON
     * @type {object}
     * @property {bool} processWrapStatus 
     */

    /**
     * @param {object} params
     * @param {uint128} params.qtyTONgrams
     * @return {Promise.<DEXclientContract_wrapTON>}
     */
    wrapTON(params) {
        return this.run('wrapTON', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyTONgrams
     * @return {Promise.<DEXclientContract_wrapTON>}
     */
    wrapTONLocal(params) {
        return this.runLocal('wrapTON', params);
    }

    /**
     * @typedef DEXclientContract_unwrapTON
     * @type {object}
     * @property {bool} processUnwrapStatus 
     */

    /**
     * @return {Promise.<DEXclientContract_unwrapTON>}
     */
    unwrapTON() {
        return this.run('unwrapTON', {});
    }

    /**
     * @return {Promise.<DEXclientContract_unwrapTON>}
     */
    unwrapTONLocal() {
        return this.runLocal('unwrapTON', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    callbackUnwrapTON(params) {
        return this.run('callbackUnwrapTON', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    callbackUnwrapTONLocal(params) {
        return this.runLocal('callbackUnwrapTON', params);
    }

}

DEXclientContract.package = pkg;

module.exports = DEXclientContract;
