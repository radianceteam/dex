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
				{"name":"root","type":"address"},
				{"name":"owner","type":"address"}
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
    imageBase64: 'te6ccgECGQEAA+cAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJnwAAAAcHBgA/O1E0NP/0z/TAPQE03/XC3/4bPhr+Gp/+GH4Zvhj+GKAAQT4QsjL//hDzws/+EbPCwD4SvhL+ExeIPQAy3/Lf8ntVIAIBIAsJAez/f40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIe1E0CDXScIBjhzT/9M/0wD0BNN/1wt/+Gz4a/hqf/hh+Gb4Y/hijiH0BW34anD4a3D4bHABgED0DvK91wv/+GJw+GNw+GZ/+GHi0wABCgC2n4ECANcYIPkBWPhC+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7zyudMfIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIBIMAgEgEA0CAWYPDgA9tCmpK/wgt0l4A+9pv+m/6PwAEPw1kHw2LfgDP/wzwADHtFqvn/wgt0cldqJoEGuk4QDHDmn/6Z/pgHoCab/rhb/8Nnw1/DU//DD8M3wx/DFHEPoCtvw1OHw1uHw2OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCN5Obj8M2j8AHgDP/wzwAHHu3ZwgW+EFukvAH3vpA+kGV1NHQ+kDf0fgAcHAxIiKAC9ch1wv/yM+QAAAANnfPCx9wzwoHcM8L/yHPC//4S88Lf8n4TCPIz4UIzgH6AoBpz0DPgc+DIc8UyXH7AH80XwMjwP+BEAXo4jJdDTAfpAMDHIz4cgzoBgz0DPgc+Bz5NdnCBaIc8KAMlx+wDeMFuS8Abef/hnAgEgFBMAl7plN3MvhBbpLwB97R+ABwcPhLMvhMMSLA/44nJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5KZTdzKIs8LfyHPC3/JcfsA3luS8Abef/hngCASAWFQDBuVX0xH8ILdJeAPvfSBo/AA4NreBEPwlQICF+gVLaY/6AreBSjg2t4FxGJFgf8cTkmhpgP0gGBjkZ8OQZ0AwZ6BnwOfA58k1X0xHELeRAWWP+gBkuP2AbxgYSXgDbz/8M8AIC2RgXAJf3wgt0l4A+99IGj8AHwk/CUQgKmIQICF+gVLaY/6AreBSjg2t4FxEgC3kRDSAazAEHoLN4E3kQDkZY/6ACzAgIX6IPw1GBh4Az/8M8AGfTgRaGmB/SAYfDTUnABuEOOAbhDpj5DukOCBkUEIf////t5Yya35HnAA+AD8I7dJmHkeb0',
};

class DEXgastracker1Contract {
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
     * @typedef DEXgastracker1Contract_getTongrams
     * @type {object}
     * @property {uint128} forNewWallet 
     * @property {uint128} forRoot 
     */

    /**
     * @return {Promise.<DEXgastracker1Contract_getTongrams>}
     */
    getTongrams() {
        return this.run('getTongrams', {});
    }

    /**
     * @return {Promise.<DEXgastracker1Contract_getTongrams>}
     */
    getTongramsLocal() {
        return this.runLocal('getTongrams', {});
    }

    /**
     * @typedef DEXgastracker1Contract_getWalletAddr
     * @type {object}
     * @property {string[]} walletsArr  (address[])
     */

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastracker1Contract_getWalletAddr>}
     */
    getWalletAddr(params) {
        return this.run('getWalletAddr', params);
    }

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @return {Promise.<DEXgastracker1Contract_getWalletAddr>}
     */
    getWalletAddrLocal(params) {
        return this.runLocal('getWalletAddr', params);
    }

    /**
     * @typedef DEXgastracker1Contract_createNewEmptyWallet
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @param {string} params.owner (address)
     * @return {Promise.<DEXgastracker1Contract_createNewEmptyWallet>}
     */
    createNewEmptyWallet(params) {
        return this.run('createNewEmptyWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.root (address)
     * @param {string} params.owner (address)
     * @return {Promise.<DEXgastracker1Contract_createNewEmptyWallet>}
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

DEXgastracker1Contract.package = pkg;

module.exports = DEXgastracker1Contract;
