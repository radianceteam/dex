//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "getProviderFromQueueByIndex",
			"inputs": [
				{"name":"index","type":"uint128"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "getLast",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getFirst",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "addProviderToQueue",
			"inputs": [
				{"name":"provider","type":"address"}
			],
			"outputs": [
				{"name":"addStatus","type":"bool"}
			]
		},
		{
			"name": "deleteFirstFromQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "deleteLastFromQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getAllProvidersFromQueue",
			"inputs": [
			],
			"outputs": [
				{"name":"providersArr","type":"address[]"}
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
    imageBase64: 'te6ccgECIgEABYEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShDAQBCvSkIPShBQIDzkAJBgIB1AgHAC07UTQ0//TP9MA9AX4an/4Yfhm+GP4YoAAvPhCyMv/+EPPCz/4Rs8LAPhKAfQAye1UgAgFmCwoAaT4AI4n+EqBAID0hpMBbwKRbeIgbrOdICBu8n9vIiEDXwPbMJQwcNsw4wTZ2G8B+Gj4SG8hgAGk+ACOJ/hKgQCA9I6TAW8CkW3iIG6znSAgbvJ/byIhA18D2zCUMHDbMOME2dhvAfho+EhvIYAIBIBANAQL/DgH+fyHtRNAg10nCAY4T0//TP9MA9AX4an/4Yfhm+GP4Yo4b9AVt+GpwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8Bjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHw8AOCHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN4CASAdEQIBIBkSAgEgFBMA07muQ0b/CC3SXgE72j8AEcT/CVAgEB6R0mAt4FItvEQN1nOkBA3eT+3kRCBr4HtmEoYOG2YcYJs7BDgf8cRkehpgP0gGBjkZ8OQZ0AwZ6BnwOfA58n65DRvEOeFv+S4/YBvGEl4BG8//DPACASAWFQCpti1Xz/4QW6OO+1E0CDXScIBjhPT/9M/0wD0Bfhqf/hh+Gb4Y/hijhv0BW34anABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbR+ADwCH/4Z4AIBIBgXANO0XzC0/CC3SXgE72j8AEcT/CVAgEB6Q0mAt4FItvEQN1nOkBA3eT+3kRCBr4HtmEoYOG2YcYJs7BDgf8cRkehpgP0gGBjkZ8OQZ0AwZ6BnwOfA58nJfMLTEOeFv+S4/YBvGEl4BG8//DPAANm0qdMffCC3SXgE72j8AEcWfCVAgEB6S0ssfDUAt4FJ/DU28RA3Wc6QEDd5P7eREIGvge2YShg4bZhxgmzsEOB/xxGR6GmA/SAYGORnw5BnQDBnoGfA58DnycKnTH0Q54W/5Lj9gG8YeAQ//DPAAgFIHBoB47ctTU5+EFukvAJ3tH4AHBtbwLwA/ACICK+mSAiobV/caC1f5Fw4iIhjkEkIfhKgQCA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN8BbyIhpANZgCD0Fm8CNaS1f+RfBCHA/4BsAZI4nI9DTAfpAMDHIz4cgzoBgz0DPgc+Bz5My1NTmIW8iAssf9ADJcfsA3jCS8Ajef/hnAKu2PKlS/hBbpLwCd76QNH4AHDwAqS1f/hKIyJYgQCA9DYB+GoyMCLA/44jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5MDypUuIc8KAMlx+wDeMDDwCH/4Z4AIBIB8eANm7uklZ74QW6S8Ane0fgAjiz4SoEAgPSellj4agFvApP4am3iIG6znSAgbvJ/byIhA18D2zCUMHDbMOME2dghwP+OIyPQ0wH6QDAxyM+HIM6AYM9Az4HPgc+S7pJWeiHPC3/JcfsA3jDwCH/4Z4AgEgISAA4bgZqQr/CC3SXgE72m/6PwAEHwlQIBAegdHEkaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm+RYH/HERJoaYD9IBgY5GfDkGdAMGegZ8DnwOfJIZqQrxDni2S4/YBvGBhJeARvP/wzwAGDccCLQ1wsDqTgA3CHHANwh0x8h3SHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN4=',
};

class QueueContract {
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
     * @typedef QueueContract_getProviderFromQueueByIndex
     * @type {object}
     * @property {string} value0  (address)
     */

    /**
     * @param {object} params
     * @param {uint128} params.index
     * @return {Promise.<QueueContract_getProviderFromQueueByIndex>}
     */
    getProviderFromQueueByIndex(params) {
        return this.run('getProviderFromQueueByIndex', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.index
     * @return {Promise.<QueueContract_getProviderFromQueueByIndex>}
     */
    getProviderFromQueueByIndexLocal(params) {
        return this.runLocal('getProviderFromQueueByIndex', params);
    }

    /**
     * @typedef QueueContract_getLast
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<QueueContract_getLast>}
     */
    getLast() {
        return this.run('getLast', {});
    }

    /**
     * @return {Promise.<QueueContract_getLast>}
     */
    getLastLocal() {
        return this.runLocal('getLast', {});
    }

    /**
     * @typedef QueueContract_getFirst
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<QueueContract_getFirst>}
     */
    getFirst() {
        return this.run('getFirst', {});
    }

    /**
     * @return {Promise.<QueueContract_getFirst>}
     */
    getFirstLocal() {
        return this.runLocal('getFirst', {});
    }

    /**
     * @typedef QueueContract_addProviderToQueue
     * @type {object}
     * @property {bool} addStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.provider (address)
     * @return {Promise.<QueueContract_addProviderToQueue>}
     */
    addProviderToQueue(params) {
        return this.run('addProviderToQueue', params);
    }

    /**
     * @param {object} params
     * @param {string} params.provider (address)
     * @return {Promise.<QueueContract_addProviderToQueue>}
     */
    addProviderToQueueLocal(params) {
        return this.runLocal('addProviderToQueue', params);
    }

    /**
     * @typedef QueueContract_deleteFirstFromQueue
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<QueueContract_deleteFirstFromQueue>}
     */
    deleteFirstFromQueue() {
        return this.run('deleteFirstFromQueue', {});
    }

    /**
     * @return {Promise.<QueueContract_deleteFirstFromQueue>}
     */
    deleteFirstFromQueueLocal() {
        return this.runLocal('deleteFirstFromQueue', {});
    }

    /**
     * @typedef QueueContract_deleteLastFromQueue
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<QueueContract_deleteLastFromQueue>}
     */
    deleteLastFromQueue() {
        return this.run('deleteLastFromQueue', {});
    }

    /**
     * @return {Promise.<QueueContract_deleteLastFromQueue>}
     */
    deleteLastFromQueueLocal() {
        return this.runLocal('deleteLastFromQueue', {});
    }

    /**
     * @typedef QueueContract_getAllProvidersFromQueue
     * @type {object}
     * @property {string[]} providersArr  (address[])
     */

    /**
     * @return {Promise.<QueueContract_getAllProvidersFromQueue>}
     */
    getAllProvidersFromQueue() {
        return this.run('getAllProvidersFromQueue', {});
    }

    /**
     * @return {Promise.<QueueContract_getAllProvidersFromQueue>}
     */
    getAllProvidersFromQueueLocal() {
        return this.runLocal('getAllProvidersFromQueue', {});
    }

}

QueueContract.package = pkg;

module.exports = QueueContract;
