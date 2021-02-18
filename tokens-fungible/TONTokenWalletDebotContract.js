//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setABI",
			"inputs": [
				{"name":"dabi","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetABI",
			"inputs": [
				{"name":"tabi","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "enterTargetAddress",
			"inputs": [
				{"name":"target","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "fetch",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"id","type":"uint8"},{"name":"desc","type":"bytes"},{"components":[{"name":"desc","type":"bytes"},{"name":"name","type":"bytes"},{"name":"actionType","type":"uint8"},{"name":"attrs","type":"bytes"},{"name":"to","type":"uint8"},{"name":"misc","type":"cell"}],"name":"actions","type":"tuple[]"}],"name":"contexts","type":"tuple[]"}
			]
		},
		{
			"name": "getVersion",
			"inputs": [
			],
			"outputs": [
				{"name":"name","type":"bytes"},
				{"name":"semver","type":"uint24"}
			]
		},
		{
			"name": "quit",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "getErrorDescription",
			"inputs": [
				{"name":"error","type":"uint32"}
			],
			"outputs": [
				{"name":"desc","type":"bytes"}
			]
		},
		{
			"name": "getTargetAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"addr","type":"address"}
			]
		},
		{
			"name": "parseTargetAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"address"}
			]
		},
		{
			"name": "parseTargetAddressRoot",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"address"}
			]
		},
		{
			"name": "parseRootName",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"bytes"}
			]
		},
		{
			"name": "parseRootSymbol",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"bytes"}
			]
		},
		{
			"name": "parseRootDecimals",
			"inputs": [
			],
			"outputs": [
				{"name":"number0","type":"uint8"}
			]
		},
		{
			"name": "parseRootOwner",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"address"}
			]
		},
		{
			"name": "parseWalletAllowance",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"address"},
				{"name":"number1","type":"uint128"},
				{"name":"number2","type":"uint128"}
			]
		},
		{
			"name": "parseBalanceArgs",
			"inputs": [
			],
			"outputs": [
				{"name":"number0","type":"uint128"},
				{"name":"number1","type":"uint128"}
			]
		},
		{
			"name": "parseTokenBalanceArgs",
			"inputs": [
			],
			"outputs": [
				{"name":"number0","type":"uint128"},
				{"name":"number1","type":"uint128"}
			]
		},
		{
			"name": "queryBalance",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"desc","type":"bytes"},{"name":"name","type":"bytes"},{"name":"actionType","type":"uint8"},{"name":"attrs","type":"bytes"},{"name":"to","type":"uint8"},{"name":"misc","type":"cell"}],"name":"actions","type":"tuple[]"}
			]
		},
		{
			"name": "setTargetBalance",
			"inputs": [
				{"name":"arg1","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetTokenBalance",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetRootAddress",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetRootName",
			"inputs": [
				{"name":"value0","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetRootSymbol",
			"inputs": [
				{"name":"value0","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetRootDecimals",
			"inputs": [
				{"name":"value0","type":"uint8"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetRootOwner",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetPubkey",
			"inputs": [
				{"name":"value0","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTargetAllowance",
			"inputs": [
				{"name":"spender","type":"address"},
				{"name":"remainingTokens","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getTransferInfo",
			"inputs": [
			],
			"outputs": [
				{"name":"param0","type":"address"},
				{"name":"number1","type":"uint128"},
				{"name":"number2","type":"uint128"}
			]
		},
		{
			"name": "setDest",
			"inputs": [
				{"name":"addr","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setTokensQty",
			"inputs": [
				{"name":"tokens","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setGramsQty",
			"inputs": [
				{"name":"grams","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "sendSubmitMsg",
			"inputs": [
			],
			"outputs": [
				{"name":"dest","type":"address"},
				{"name":"body","type":"cell"}
			]
		},
		{
			"name": "getDebotOptions",
			"inputs": [
			],
			"outputs": [
				{"name":"options","type":"uint8"},
				{"name":"debotAbi","type":"bytes"},
				{"name":"targetAbi","type":"bytes"},
				{"name":"targetAddr","type":"address"}
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

class TONTokenWalletDebotContract {
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
     * @param {bytes} params.dabi
     */
    setABI(params) {
        return this.run('setABI', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.dabi
     */
    setABILocal(params) {
        return this.runLocal('setABI', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.tabi
     */
    setTargetABI(params) {
        return this.run('setTargetABI', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.tabi
     */
    setTargetABILocal(params) {
        return this.runLocal('setTargetABI', params);
    }

    /**
     * @param {object} params
     * @param {string} params.target (address)
     */
    enterTargetAddress(params) {
        return this.run('enterTargetAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params.target (address)
     */
    enterTargetAddressLocal(params) {
        return this.runLocal('enterTargetAddress', params);
    }

    /**
     * @typedef TONTokenWalletDebotContract_fetch
     * @type {object}
     * @property {tuple[]} contexts 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_fetch>}
     */
    fetch() {
        return this.run('fetch', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_fetch>}
     */
    fetchLocal() {
        return this.runLocal('fetch', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_getVersion
     * @type {object}
     * @property {bytes} name 
     * @property {uint24} semver 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getVersion>}
     */
    getVersion() {
        return this.run('getVersion', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getVersion>}
     */
    getVersionLocal() {
        return this.runLocal('getVersion', {});
    }

    /**
     */
    quit() {
        return this.run('quit', {});
    }

    /**
     */
    quitLocal() {
        return this.runLocal('quit', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_getErrorDescription
     * @type {object}
     * @property {bytes} desc 
     */

    /**
     * @param {object} params
     * @param {number} params.error (uint32)
     * @return {Promise.<TONTokenWalletDebotContract_getErrorDescription>}
     */
    getErrorDescription(params) {
        return this.run('getErrorDescription', params);
    }

    /**
     * @param {object} params
     * @param {number} params.error (uint32)
     * @return {Promise.<TONTokenWalletDebotContract_getErrorDescription>}
     */
    getErrorDescriptionLocal(params) {
        return this.runLocal('getErrorDescription', params);
    }

    /**
     * @typedef TONTokenWalletDebotContract_getTargetAddress
     * @type {object}
     * @property {string} addr  (address)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getTargetAddress>}
     */
    getTargetAddress() {
        return this.run('getTargetAddress', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getTargetAddress>}
     */
    getTargetAddressLocal() {
        return this.runLocal('getTargetAddress', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseTargetAddress
     * @type {object}
     * @property {string} param0  (address)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTargetAddress>}
     */
    parseTargetAddress() {
        return this.run('parseTargetAddress', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTargetAddress>}
     */
    parseTargetAddressLocal() {
        return this.runLocal('parseTargetAddress', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseTargetAddressRoot
     * @type {object}
     * @property {string} param0  (address)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTargetAddressRoot>}
     */
    parseTargetAddressRoot() {
        return this.run('parseTargetAddressRoot', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTargetAddressRoot>}
     */
    parseTargetAddressRootLocal() {
        return this.runLocal('parseTargetAddressRoot', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseRootName
     * @type {object}
     * @property {bytes} param0 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootName>}
     */
    parseRootName() {
        return this.run('parseRootName', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootName>}
     */
    parseRootNameLocal() {
        return this.runLocal('parseRootName', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseRootSymbol
     * @type {object}
     * @property {bytes} param0 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootSymbol>}
     */
    parseRootSymbol() {
        return this.run('parseRootSymbol', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootSymbol>}
     */
    parseRootSymbolLocal() {
        return this.runLocal('parseRootSymbol', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseRootDecimals
     * @type {object}
     * @property {number} number0  (uint8)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootDecimals>}
     */
    parseRootDecimals() {
        return this.run('parseRootDecimals', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootDecimals>}
     */
    parseRootDecimalsLocal() {
        return this.runLocal('parseRootDecimals', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseRootOwner
     * @type {object}
     * @property {string} param0  (address)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootOwner>}
     */
    parseRootOwner() {
        return this.run('parseRootOwner', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseRootOwner>}
     */
    parseRootOwnerLocal() {
        return this.runLocal('parseRootOwner', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseWalletAllowance
     * @type {object}
     * @property {string} param0  (address)
     * @property {uint128} number1 
     * @property {uint128} number2 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseWalletAllowance>}
     */
    parseWalletAllowance() {
        return this.run('parseWalletAllowance', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseWalletAllowance>}
     */
    parseWalletAllowanceLocal() {
        return this.runLocal('parseWalletAllowance', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseBalanceArgs
     * @type {object}
     * @property {uint128} number0 
     * @property {uint128} number1 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseBalanceArgs>}
     */
    parseBalanceArgs() {
        return this.run('parseBalanceArgs', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseBalanceArgs>}
     */
    parseBalanceArgsLocal() {
        return this.runLocal('parseBalanceArgs', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_parseTokenBalanceArgs
     * @type {object}
     * @property {uint128} number0 
     * @property {uint128} number1 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTokenBalanceArgs>}
     */
    parseTokenBalanceArgs() {
        return this.run('parseTokenBalanceArgs', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_parseTokenBalanceArgs>}
     */
    parseTokenBalanceArgsLocal() {
        return this.runLocal('parseTokenBalanceArgs', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_queryBalance
     * @type {object}
     * @property {tuple[]} actions 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_queryBalance>}
     */
    queryBalance() {
        return this.run('queryBalance', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_queryBalance>}
     */
    queryBalanceLocal() {
        return this.runLocal('queryBalance', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.arg1
     */
    setTargetBalance(params) {
        return this.run('setTargetBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.arg1
     */
    setTargetBalanceLocal(params) {
        return this.runLocal('setTargetBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTargetTokenBalance(params) {
        return this.run('setTargetTokenBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTargetTokenBalanceLocal(params) {
        return this.runLocal('setTargetTokenBalance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setTargetRootAddress(params) {
        return this.run('setTargetRootAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setTargetRootAddressLocal(params) {
        return this.runLocal('setTargetRootAddress', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value0
     */
    setTargetRootName(params) {
        return this.run('setTargetRootName', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value0
     */
    setTargetRootNameLocal(params) {
        return this.runLocal('setTargetRootName', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value0
     */
    setTargetRootSymbol(params) {
        return this.run('setTargetRootSymbol', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value0
     */
    setTargetRootSymbolLocal(params) {
        return this.runLocal('setTargetRootSymbol', params);
    }

    /**
     * @param {object} params
     * @param {number} params.value0 (uint8)
     */
    setTargetRootDecimals(params) {
        return this.run('setTargetRootDecimals', params);
    }

    /**
     * @param {object} params
     * @param {number} params.value0 (uint8)
     */
    setTargetRootDecimalsLocal(params) {
        return this.runLocal('setTargetRootDecimals', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setTargetRootOwner(params) {
        return this.run('setTargetRootOwner', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setTargetRootOwnerLocal(params) {
        return this.runLocal('setTargetRootOwner', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (uint256)
     */
    setTargetPubkey(params) {
        return this.run('setTargetPubkey', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (uint256)
     */
    setTargetPubkeyLocal(params) {
        return this.runLocal('setTargetPubkey', params);
    }

    /**
     * @param {object} params
     * @param {string} params.spender (address)
     * @param {uint128} params.remainingTokens
     */
    setTargetAllowance(params) {
        return this.run('setTargetAllowance', params);
    }

    /**
     * @param {object} params
     * @param {string} params.spender (address)
     * @param {uint128} params.remainingTokens
     */
    setTargetAllowanceLocal(params) {
        return this.runLocal('setTargetAllowance', params);
    }

    /**
     * @typedef TONTokenWalletDebotContract_getTransferInfo
     * @type {object}
     * @property {string} param0  (address)
     * @property {uint128} number1 
     * @property {uint128} number2 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getTransferInfo>}
     */
    getTransferInfo() {
        return this.run('getTransferInfo', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getTransferInfo>}
     */
    getTransferInfoLocal() {
        return this.runLocal('getTransferInfo', {});
    }

    /**
     * @param {object} params
     * @param {string} params.addr (address)
     */
    setDest(params) {
        return this.run('setDest', params);
    }

    /**
     * @param {object} params
     * @param {string} params.addr (address)
     */
    setDestLocal(params) {
        return this.runLocal('setDest', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.tokens
     */
    setTokensQty(params) {
        return this.run('setTokensQty', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.tokens
     */
    setTokensQtyLocal(params) {
        return this.runLocal('setTokensQty', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.grams
     */
    setGramsQty(params) {
        return this.run('setGramsQty', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.grams
     */
    setGramsQtyLocal(params) {
        return this.runLocal('setGramsQty', params);
    }

    /**
     * @typedef TONTokenWalletDebotContract_sendSubmitMsg
     * @type {object}
     * @property {string} dest  (address)
     * @property {cell} body 
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_sendSubmitMsg>}
     */
    sendSubmitMsg() {
        return this.run('sendSubmitMsg', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_sendSubmitMsg>}
     */
    sendSubmitMsgLocal() {
        return this.runLocal('sendSubmitMsg', {});
    }

    /**
     * @typedef TONTokenWalletDebotContract_getDebotOptions
     * @type {object}
     * @property {number} options  (uint8)
     * @property {bytes} debotAbi 
     * @property {bytes} targetAbi 
     * @property {string} targetAddr  (address)
     */

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getDebotOptions>}
     */
    getDebotOptions() {
        return this.run('getDebotOptions', {});
    }

    /**
     * @return {Promise.<TONTokenWalletDebotContract_getDebotOptions>}
     */
    getDebotOptionsLocal() {
        return this.runLocal('getDebotOptions', {});
    }

}

TONTokenWalletDebotContract.package = pkg;

module.exports = TONTokenWalletDebotContract;
