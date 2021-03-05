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
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"statusConnection","type":"bool"}
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
			"name": "setPairDepositB",
			"id": "0x9",
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

}

DEXclientContract.package = pkg;

module.exports = DEXclientContract;
