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
			"name": "isRoot",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "createZeroWallet",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setZeroWallet",
			"id": "0x126",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getZeroAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"walletZero","type":"address"}
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
			"name": "getLengthQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"uint256[]"}
			]
		},
		{
			"name": "wrapGrams",
			"id": "0x25",
			"inputs": [
				{"name":"destination","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setDepositWallet",
			"id": "0x125",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "unwrapGrams",
			"id": "0x52",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "balanceDepositWallet",
			"id": "0x152",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
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
			"name": "getDepositAddress",
			"inputs": [
				{"name":"dexclient","type":"address"}
			],
			"outputs": [
				{"name":"dexclientDepositAddress","type":"address"}
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
    imageBase64: 'te6ccgECSAEADScAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShFQQBCvSkIPShBQIDzcAJBgIBSAgHAGnXaiaGn/6Z/pgGr6AnoC/Df8N30gaQB6AmmP+gIst4F8NvoC/Dh8Nnw1/DU//DD8M3wx/DFABv98IWRl//wh54Wf/CNnhYBkfCd8J4F6AHoAfCV8JfwmfCa3kXwoLzBniOdlAHoAZY/6AHoAZPaqQCASAQCgIBSAwLAFtPhPgQCA9JaZWPhvAdcL/28Ck/hvbeIgbrObICBu8n9vIjEx2zCUMHDbMOME2YAgEgDw0B/xw8AektX/wBiD4ToEBAPQOmfpA+kDXC39vA45LjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8D4iAnb1AxICZvUTEgJW9SMfhOIgEibyPIgDgBUI88WIs8WIc8LfwNfA1mBAQD0Q/hu+E8iyMv/JFiBAID0UwH4bzRVI18GAFU+E+BAID0hpYB1wv/bwKRbeIgbrOdICBu8n9vIiEDXwPbMJQwcNsw4wTZgAgEgFBECAVgTEgBVPhPgQCA9I6WAdcL/28CkW3iIG6znSAgbvJ/byIhA18D2zCUMHDbMOME2YAANPgl+BX4JoABlZ+AAgjQhgBeQy7gWRL2OvCsUXH8MWc1Ecx7mcmG8f4xMyHv7WfbzExwVvAfhoMPhIbyGAgEgGRYByP9/jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh7UTQINdJwgGOMdP/0z/TANX0BPQF+G/4bvpA0gD0BNMf9ARZbwL4bfQF+HD4bPhr+Gp/+GH4Zvhj+GIXAeKOU/QFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtt+GxwbW8C+G1t+G5t+G9t+HBwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/ARgAjo4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeAgEgIhoCAWofGwEPti1Xz/4QW6AcAUaOgN74RvJzcfhm0fhC+EUgbpIwcN668uBm+ABw+GvwE3/4Zx0Bdu1E0CDXScIBjjHT/9M/0wDV9AT0Bfhv+G76QNIA9ATTH/QEWW8C+G30Bfhw+Gz4a/hqf/hh+Gb4Y/hiHgCsjlP0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqcPhrbfhscG1vAvhtbfhubfhvbfhwcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeICAUghIADEsjBBafpA0fgAII0IYAXkMu4FkS9jrwrFFx/DFnNRHMe5nJhvH+MTMh7+1n28xMcFIsD/jiMk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk4jBBaYhzwoAyXH7AN4wMJLwE95/+GcArrO5usT4QW6S8BTe+kDXDX+V1NHQ03/f1wwAldTR0NIA39H4RSBukjBw3vhCuvLgZvgAISMiyM+FgMoAc89AzgH6AoBpz0DPgc+ByXP7AF8DkvAT3n/4ZwIBICcjAgFmJSQArbVt/PT8ILdJeApvaPwAOHgEeAOQEV9MkBFQ2r+40Fq/yLhxGa2Q4H/HEZHoaYD9IBgY5GfDkGdAMGegZ8DnwOfJXbfz0xDnhb/kuP2AbxhJeAnvP/wzwAHFtSYjZvwgt0l4Cm9o/CKQN0kYOG98IV15cDN8ADg2t4F4BHgDkBFfTJARUNq/uNBav8i4cREQxxISEPwnwIBAegdJ64X/yLhxZGX/gLeRENIBrMAQeiG3gRrSWr/yL4IQ4H/AJgBkjicj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkqkxGzYhbyICyx/0AMlx+wDeMJLwE95/+GcCAUgwKAIBICspAc+075Ue/CC3SXgKb30gaPwARoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEPwmQICF+gVHEkaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm+YkWB/wCoAXI4iJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5I3fKj2Ic8WyXH7AN4wMJLwE95/+GcCAWItLAB7rwAzp0fgAcPgnbxAxIcD/jiMj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkiMAM6Yhzwt/yXH7AN4wkvAT3n/4Z4BP6+FRjPhBbpLwFN7R+EUgbpIwcN74Qrry4Gb4APhLcLqLgH+jnzwBo0IYAXkMu4FkS9jrwrFFx/DFnNRHMe5nJhvH+MTMh7+1n28xPgoIIAL1yHXC//Iz5AAAAA2gQEmzwsfcM8KByTPC/8hzwv/ghAdzWUAzwt/ySPIz4UIzo0EUO5rKAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8F3i8ADpLwE95/+GcCASAyMQDLtJseNXwgt0l4Cm9o/ABGhDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ8JRiQ4H/HERHoaYD9IBgY5GfDkGdAMGegZ8DnwOfJCmx41RDni2S4/YBvGEl4Ce8//DPAAgLRPDMCAUg2NAGZsl8ILdJeApvab/o/AB8JJB8KECAhfoFRxJGhDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJvkRB8E7eIXln5cDOQYQBA1ANKOXiL4SiKCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfByAiyM+FCM4B+gKAac9Az4HPgclz+wDeXwMw8BN/+GcCA6TAODcAP0+EFukvAU3vpA0fhJ8AHy4GX4ACD4an/4azDwE3/4Z4Af9fhBbpLwFN76QNH4APhJ8Aog+E6BAQD0Dpn6QPpA1wt/bwOOS40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvA+IgbxAhbxEibxL4TCMBKFmDkB6oEBC/QS+GzIz5AAAAA+Ic8Lf8mNCGAF5DLuBZEvY68KxRcfwxZzURzHuZyYbx/jEzIe/tZ9vMTIz4UIzo0EUDRzvAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AMjPkAAAADojzxYizwt/ghAHJw4Azwt/yToB/o0IYAXkMu4FkS9jrwrFFx/DFnNRHMe5nJhvH+MTMh7+1n28xMjPhQjOjQRQOThwAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAyM+QAAACJijPFinPFsklyM+FiM6NBFAcnDgAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wA7ABBfCTDwE3/4ZwIBSD89Af2yXwgt0l4Cm9o/AB8JUaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmOC2flwNHwkkHwmQICF+gUQSJjveXAzkHwmQICF+gVHEkaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm/kZ8gAAAAbQPgCEgQFSzwsfySHIz4WIzo0EUAU+xgAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7APhQIgEkWYEBC/QS+HBfA/ATf/hnAgEgR0ABUal+EFukvAU3vpA0fgA+ElwaKb7YJVopv5gMd8h+EyBAQv0CiCRMd6zgQQIEjoBFQgEUjoDiWzDwE3/4Z0MB3MjPkAAAAD4hzwt/yY0IYAXkMu4FkS9jrwrFFx/DFnNRHMe5nJhvH+MTMh7+1n28xMjPhQjOjQRQNHO8AAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAyM+QAAAAOiTPFiLPC3+CEAcnDgDPC3/JRACWjQhgBeQy7gWRL2OvCsUXH8MWc1Ecx7mcmG8f4xMyHv7WfbzEyM+FCM6NBFA5OHAAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBbAeT4TSIBbyIhpANZgCD0Fm8C+G0hIyLwCTCNCGAF5DLuBZEvY68KxRcfwxZzURzHuZyYbx/jEzIe/tZ9vMTwBiH4KCCAC9ch1wv/yM+QAAAANoEBJc8LH3DPCgckzwv/Ic8L/4IQHc1lAM8Lf8kjyM+FCM5GAEaNBFDuaygAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfBgBn1cCLQ0wP6QDD4aak4ANwhxwDcIdMfId0hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeg==',
};

class TONwrapperContract {
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
     * @typedef TONwrapperContract_isRoot
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<TONwrapperContract_isRoot>}
     */
    isRoot(params) {
        return this.run('isRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<TONwrapperContract_isRoot>}
     */
    isRootLocal(params) {
        return this.runLocal('isRoot', params);
    }

    /**
     */
    createZeroWallet() {
        return this.run('createZeroWallet', {});
    }

    /**
     */
    createZeroWalletLocal() {
        return this.runLocal('createZeroWallet', {});
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setZeroWallet(params) {
        return this.run('setZeroWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setZeroWalletLocal(params) {
        return this.runLocal('setZeroWallet', params);
    }

    /**
     * @typedef TONwrapperContract_getZeroAddress
     * @type {object}
     * @property {string} walletZero  (address)
     */

    /**
     * @return {Promise.<TONwrapperContract_getZeroAddress>}
     */
    getZeroAddress() {
        return this.run('getZeroAddress', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getZeroAddress>}
     */
    getZeroAddressLocal() {
        return this.runLocal('getZeroAddress', {});
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
     * @typedef TONwrapperContract_getLengthQueue
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<TONwrapperContract_getLengthQueue>}
     */
    getLengthQueue() {
        return this.run('getLengthQueue', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getLengthQueue>}
     */
    getLengthQueueLocal() {
        return this.runLocal('getLengthQueue', {});
    }

    /**
     * @typedef TONwrapperContract_getAllQueue
     * @type {object}
     * @property {string[]} queueArr  (uint256[])
     */

    /**
     * @return {Promise.<TONwrapperContract_getAllQueue>}
     */
    getAllQueue() {
        return this.run('getAllQueue', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getAllQueue>}
     */
    getAllQueueLocal() {
        return this.runLocal('getAllQueue', {});
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     */
    wrapGrams(params) {
        return this.run('wrapGrams', params);
    }

    /**
     * @param {object} params
     * @param {string} params.destination (address)
     */
    wrapGramsLocal(params) {
        return this.runLocal('wrapGrams', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setDepositWallet(params) {
        return this.run('setDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setDepositWalletLocal(params) {
        return this.runLocal('setDepositWallet', params);
    }

    /**
     */
    unwrapGrams() {
        return this.run('unwrapGrams', {});
    }

    /**
     */
    unwrapGramsLocal() {
        return this.runLocal('unwrapGrams', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    balanceDepositWallet(params) {
        return this.run('balanceDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    balanceDepositWalletLocal(params) {
        return this.runLocal('balanceDepositWallet', params);
    }

    /**
     * @typedef TONwrapperContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<TONwrapperContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<TONwrapperContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

    /**
     * @typedef TONwrapperContract_getDepositAddress
     * @type {object}
     * @property {string} dexclientDepositAddress  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<TONwrapperContract_getDepositAddress>}
     */
    getDepositAddress(params) {
        return this.run('getDepositAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<TONwrapperContract_getDepositAddress>}
     */
    getDepositAddressLocal(params) {
        return this.runLocal('getDepositAddress', params);
    }

}

TONwrapperContract.package = pkg;

module.exports = TONwrapperContract;
