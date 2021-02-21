//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "setTongrams",
			"inputs": [
				{"name":"forNewWallet","type":"uint128"},
				{"name":"forRoot","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getTongrams",
			"inputs": [
			],
			"outputs": [
				{"name":"forNewWallet","type":"uint128"},
				{"name":"forRoot","type":"uint128"}
			]
		},
		{
			"name": "getWalletAddr",
			"inputs": [
				{"name":"root","type":"address"}
			],
			"outputs": [
				{"name":"walletsArr","type":"address[]"}
			]
		},
		{
			"name": "createNewEmptyWallet",
			"inputs": [
				{"name":"root","type":"address"}
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
    imageBase64: 'te6ccgECGgEAA+MAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJnwAAAAcHBgA/O1E0NP/0z/TAPQE03/XC3/4bPhr+Gp/+GH4Zvhj+GKAAQT4QsjL//hDzws/+EbPCwD4SvhL+ExeIPQAy3/Lf8ntVIAIBIAsJAez/f40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIe1E0CDXScIBjhzT/9M/0wD0BNN/1wt/+Gz4a/hqf/hh+Gb4Y/hijiH0BW34anD4a3D4bHABgED0DvK91wv/+GJw+GNw+GZ/+GHi0wABCgC2n4ECANcYIPkBWPhC+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7zyudMfIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIBMMAgEgEA0CAWYPDgA9tCmpK/wgt0l4A+9pv+m/6PwAEPw1kHw2LfgDP/wzwADHtFqvn/wgt0cldqJoEGuk4QDHDmn/6Z/pgHoCab/rhb/8Nnw1/DU//DD8M3wx/DFHEPoCtvw1OHw1uHw2OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCN5Obj8M2j8AHgDP/wzwAEJuiqEYAgRAf74QW6S8Afe+kDR+ABwcDEh+CgggAvXIdcL/8jPkAAAADZ3zwsfcM8KB3DPC/8hzwv/+EvPC3/J+EwkyM+FCM4B+gKAac9Az4HPgyHPFMlx+wB/NV8EIsD/jiMk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkwqhGAIhzwoAyXH7AN4wEgAQMJLwBt5/+GcCASAVFACXumU3cy+EFukvAH3tH4AHBw+Esy+EwxIsD/jick0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkplN3Moizwt/Ic8Lf8lx+wDeW5LwBt5/+GeAIBIBcWAMG5VfTEfwgt0l4A+99IGj8ADg2t4EQ/CVAgIX6BUtpj/oCt4FKODa3gXEYkWB/xxOSaGmA/SAYGORnw5BnQDBnoGfA58DnyTVfTEcQt5EBZY/6AGS4/YBvGBhJeANvP/wzwAgLZGRgAl/fCC3SXgD730gaPwAfCT8JRCAqYhAgIX6BUtpj/oCt4FKODa3gXESALeRENIBrMAQegs3gTeRAORlj/oALMCAhfog/DUYGHgDP/wzwAZ9OBFoaYH9IBh8NNScAG4Q44BuEOmPkO6Q4IGRQQh////+3ljJrfkecAD4APwjt0mYeR5vQ=',
};

class DEXgastrackerContract {
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
     * @param {uint128} params.forNewWallet
     * @param {uint128} params.forRoot
     */
    setTongrams(params) {
        return this.run('setTongrams', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.forNewWallet
     * @param {uint128} params.forRoot
     */
    setTongramsLocal(params) {
        return this.runLocal('setTongrams', params);
    }

    /**
     * @typedef DEXgastrackerContract_getTongrams
     * @type {object}
     * @property {uint128} forNewWallet 
     * @property {uint128} forRoot 
     */

    /**
     * @return {Promise.<DEXgastrackerContract_getTongrams>}
     */
    getTongrams() {
        return this.run('getTongrams', {});
    }

    /**
     * @return {Promise.<DEXgastrackerContract_getTongrams>}
     */
    getTongramsLocal() {
        return this.runLocal('getTongrams', {});
    }

    /**
     * @typedef DEXgastrackerContract_getWalletAddr
     * @type {object}
     * @property {string[]} walletsArr  (address[])
     */

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastrackerContract_getWalletAddr>}
     */
    getWalletAddr(params) {
        return this.run('getWalletAddr', params);
    }

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastrackerContract_getWalletAddr>}
     */
    getWalletAddrLocal(params) {
        return this.runLocal('getWalletAddr', params);
    }

    /**
     * @typedef DEXgastrackerContract_createNewEmptyWallet
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastrackerContract_createNewEmptyWallet>}
     */
    createNewEmptyWallet(params) {
        return this.run('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastrackerContract_createNewEmptyWallet>}
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

}

DEXgastrackerContract.package = pkg;

module.exports = DEXgastrackerContract;
