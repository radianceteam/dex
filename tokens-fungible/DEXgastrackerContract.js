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
    imageBase64: 'te6ccgECHAEAA/AAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCgQBCvSkIPShBQIDzkAHBgA/32omhp/+mf6YB6Amm/64W//DZ8Nfw1P/ww/DN8MfwxQCAVgJCABBX4QsjL//hDzws/+EbPCwD4SvhL+ExeIPQAy3/Lf8ntVIAA1Pgl+BX4JoAgEgDQsB7P9/jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh7UTQINdJwgGOHNP/0z/TAPQE03/XC3/4bPhr+Gp/+GH4Zvhj+GKOIfQFbfhqcPhrcPhscAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAEMALafgQIA1xgg+QFY+EL5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeAgEgFQ4CASASDwIBZhEQAD20Kakr/CC3SXgEb2m/6b/o/AAQ/DWQfDYt+AO//DPAAMe0Wq+f/CC3RyV2omgQa6ThAMcOaf/pn+mAegJpv+uFv/w2fDX8NT/8MPwzfDH8MUcQ+gK2/DU4fDW4fDY4AMAgegd5XuuF//wxOHwxuHwzP/ww8W98I3k5uPwzaPwAeAO//DPAAQm6KoRgCBMB/vhBbpLwCN76QNH4AHBwMSHwBPgoIIAL1yHXC//Iz5AAAAA2d88LH3DPCgcjzwv/Ic8L//hLzwt/yfhMJcjPhQjOAfoCgGnPQM+Bz4MhzxTJcfsAfzZfBSLA/44jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5MKoRgCIc8KAMlx+wAUABTeMDCS8Afef/hnAgEgFxYAl7plN3MvhBbpLwCN7R+ABwcPhLMvhMMSLA/44nJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5KZTdzKIs8LfyHPC3/JcfsA3luS8Afef/hngCASAZGADBuVX0xH8ILdJeARvfSBo/AA4NreBEPwlQICF+gVLaY/6AreBSjg2t4FxGJFgf8cTkmhpgP0gGBjkZ8OQZ0AwZ6BnwOfA58k1X0xHELeRAWWP+gBkuP2AbxgYSXgD7z/8M8AIC2RsaAJf3wgt0l4BG99IGj8AHwk/CUQgKmIQICF+gVLaY/6AreBSjg2t4FxEgC3kRDSAazAEHoLN4E3kQDkZY/6ACzAgIX6IPw1GBh4A7/8M8AGfTgRaGmB/SAYfDTUnABuEOOAbhDpj5DukOCBkUEIf////t5Yya35HnAA+AD8I7dJmHkeb0',
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
