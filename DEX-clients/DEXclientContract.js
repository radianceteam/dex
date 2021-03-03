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
			"name": "getWalletBalance",
			"inputs": [
				{"name":"walletAddr","type":"address"}
			],
			"outputs": [
				{"name":"walletBal","type":"uint128"}
			]
		},
		{
			"name": "setTongrams",
			"inputs": [
				{"name":"msgGramPrice1","type":"uint128"},
				{"name":"msgGramPrice2","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getTongrams",
			"inputs": [
			],
			"outputs": [
				{"name":"msgGramPrice1","type":"uint128"},
				{"name":"msgGramPrice2","type":"uint128"}
			]
		},
		{
			"name": "createNewEmptyWallet",
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
			"name": "createPairClientWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"createStatusA","type":"bool"},
				{"name":"createStatusB","type":"bool"}
			]
		},
		{
			"name": "getPairClientWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"clientWalletA","type":"address"},
				{"name":"clientWalletB","type":"address"}
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
				{"name":"balanceClientWalletA","type":"uint128"},
				{"name":"balanceClientWalletB","type":"uint128"}
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
     * @typedef DEXclientContract_getWalletBalance
     * @type {object}
     * @property {uint128} walletBal 
     */

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getWalletBalance>}
     */
    getWalletBalance(params) {
        return this.run('getWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getWalletBalance>}
     */
    getWalletBalanceLocal(params) {
        return this.runLocal('getWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.msgGramPrice1
     * @param {uint128} params.msgGramPrice2
     */
    setTongrams(params) {
        return this.run('setTongrams', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.msgGramPrice1
     * @param {uint128} params.msgGramPrice2
     */
    setTongramsLocal(params) {
        return this.runLocal('setTongrams', params);
    }

    /**
     * @typedef DEXclientContract_getTongrams
     * @type {object}
     * @property {uint128} msgGramPrice1 
     * @property {uint128} msgGramPrice2 
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
     * @typedef DEXclientContract_createNewEmptyWallet
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWallet>}
     */
    createNewEmptyWallet(params) {
        return this.run('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWallet>}
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
     * @typedef DEXclientContract_createPairClientWallets
     * @type {object}
     * @property {bool} createStatusA 
     * @property {bool} createStatusB 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_createPairClientWallets>}
     */
    createPairClientWallets(params) {
        return this.run('createPairClientWallets', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_createPairClientWallets>}
     */
    createPairClientWalletsLocal(params) {
        return this.runLocal('createPairClientWallets', params);
    }

    /**
     * @typedef DEXclientContract_getPairClientWallets
     * @type {object}
     * @property {string} clientWalletA  (address)
     * @property {string} clientWalletB  (address)
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
     * @property {uint128} balanceClientWalletA 
     * @property {uint128} balanceClientWalletB 
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

}

DEXclientContract.package = pkg;

module.exports = DEXclientContract;
