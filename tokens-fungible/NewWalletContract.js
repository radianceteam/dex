//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "createNewEmptyWallet",
			"inputs": [
				{"name":"rootAddr","type":"address"},
				{"name":"internal_owner","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "createNewWallet",
			"inputs": [
				{"name":"rootAddr","type":"address"},
				{"name":"internal_owner","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setWallet",
			"id": "0x3",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "showWallet",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "setTongrams",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "showTongrams",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "setTongrams2",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "showTongrams2",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
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
    imageBase64: 'te6ccgECIgEABI0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCgQBCvSkIPShBQIDzkAJBgIBSAgHAD9O1E0NP/0z/TAPpA03/XC3/4bPhr+Gp/+GH4Zvhj+GKAA/X4QsjL//hDzws/+EbPCwD4SvhL+ExeIM7Lf8t/ye1UgADbfwAEHw1GECASANCwHm/38h7UTQINdJwgGOHNP/0z/TAPpA03/XC3/4bPhr+Gp/+GH4Zvhj+GKORPQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtw+GxwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAQwAvo4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeAgEgGQ4CASAYDwIBZhMQAgEgEhEAMrIrMR/4QW6S8Are03/R+AAg+Gww8Al/+GcAMrMHktX4QW6S8Are03/R+AAg+Gsw8Al/+GcCASAVFADes6z9AfhBbpLwCt76QNcN/5XU0dDT/9/R+EUgbpIwcN74Qrry4GX4ACEhyM+QAAAAMnPPCx9wzwoHcM8L/yHPC/9wzwt/+EvPC3/J+EwjyM+FiM4B+gKAac9Az4HPgyHPFMlx+wBfA1uS8Anef/hnAQiytV8/FgH++EFujm3tRNAg10nCAY4c0//TP9MA+kDTf9cLf/hs+Gv4an/4Yfhm+GP4Yo5E9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anD4a3D4bHABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbR+ADwCRcABn/4ZwCHurLMlL+EFukvAK3tH4AHD4TDEhwP+OIyPQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TLLMlLiHPC3/JcfsA3jCS8Anef/hngCASAdGgIDeiAcGwCFsTqzs/CC3SXgFb2j8ADh8JZiQ4H/HEZHoaYD9IBgY5GfDkGdAMGegZ8DnwOfJYzqzsxDnhb/kuP2AbxhJeATvP/wzwDJsD0Yy/CC3SXgFb2j8AEaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnwlGJDgf8cREehpgP0gGBjkZ8OQZ0AwZ6BnwOfA58lgPRjLEOeLZLj9gG8YSXgE7z/8M8CAUgfHgDXtypARj4QW6S8Are+kDXDf+V1NHQ0//f0fhFIG6SMHDe+EK68uBl+AAhIcjPkAAAADZzzwsfcM8KB3DPC/8hzwv/+EvPC3/J+EwjyM+FiM4B+gKAac9Az4HPgyHPFMlx+wBfA1uS8Anef/hngAgLZISAAK1+EFukvAK3vpA0fgAIPhqMPAJf/hngAX0cCLQ1wsDqTgA3CHHANwh0x8h3SHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN6A==',
};

class NewWalletContract {
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
     * @param {string} params.rootAddr (address)
     * @param {string} params.internal_owner (uint256)
     */
    createNewEmptyWallet(params) {
        return this.run('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @param {string} params.internal_owner (uint256)
     */
    createNewEmptyWalletLocal(params) {
        return this.runLocal('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @param {string} params.internal_owner (uint256)
     */
    createNewWallet(params) {
        return this.run('createNewWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @param {string} params.internal_owner (uint256)
     */
    createNewWalletLocal(params) {
        return this.runLocal('createNewWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setWallet(params) {
        return this.run('setWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setWalletLocal(params) {
        return this.runLocal('setWallet', params);
    }

    /**
     * @typedef NewWalletContract_showWallet
     * @type {object}
     * @property {string} value0  (address)
     */

    /**
     * @return {Promise.<NewWalletContract_showWallet>}
     */
    showWallet() {
        return this.run('showWallet', {});
    }

    /**
     * @return {Promise.<NewWalletContract_showWallet>}
     */
    showWalletLocal() {
        return this.runLocal('showWallet', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTongrams(params) {
        return this.run('setTongrams', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTongramsLocal(params) {
        return this.runLocal('setTongrams', params);
    }

    /**
     * @typedef NewWalletContract_showTongrams
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<NewWalletContract_showTongrams>}
     */
    showTongrams() {
        return this.run('showTongrams', {});
    }

    /**
     * @return {Promise.<NewWalletContract_showTongrams>}
     */
    showTongramsLocal() {
        return this.runLocal('showTongrams', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTongrams2(params) {
        return this.run('setTongrams2', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setTongrams2Local(params) {
        return this.runLocal('setTongrams2', params);
    }

    /**
     * @typedef NewWalletContract_showTongrams2
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<NewWalletContract_showTongrams2>}
     */
    showTongrams2() {
        return this.run('showTongrams2', {});
    }

    /**
     * @return {Promise.<NewWalletContract_showTongrams2>}
     */
    showTongrams2Local() {
        return this.runLocal('showTongrams2', {});
    }

}

NewWalletContract.package = pkg;

module.exports = NewWalletContract;
