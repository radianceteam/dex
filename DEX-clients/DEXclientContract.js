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
