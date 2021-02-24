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
    imageBase64: 'te6ccgECbQEAFf8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShHQQBCvSkIPShBQIDzcAJBgICcwgHAIM7UTQ0//TP9MA1dMf9ARZbwL4bfQE0x/0BW8C+G/4bvQE0x/0BFlvAvhr03/Tf/QF+Gz4cfhw+Gp/+GH4Zvhj+GKAAiz4QsjL//hDzws/+EbPCwDI+E1vIvhO+E9vIl5Ayx/0APQAyx/0APhK+EtvIvhQ+FH4TF5gzxH0AMsf9ADLf8t/9ADJ7VSACASAUCgIBIA8LAgEgDgwB/V+EUgbpIwcN74Qrry4GX4AHBwMSH4TIEBC/QKIJEx3o5XIfgoIIAL1yHXC//Iz5AAAAA2d88LH3DPCgdwzwv/Ic8L/4IQO5rKAM8Lf8kjyM+FCM6NBFHc1lAAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/NV8E328B+GgwgNAAj4SG8hAJ1PgAcCH4SoEBC/QKmdP/+kDXC39vA44ocI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvA+IgbxIyMG8B+Ggw+EhvIYAgFIERAAjT4RSBukjBw3vhCuvLgZfgAIMjPkAAAADZ0zwsfySHIz4WIzo0EUATEtAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AFswgAQEgEgH6+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCUyJDEhyM+FiM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPg8gTAEDPkAAAADIizxYlzwt/JM8Lf83JcfsAbwL4aF8E+EhvIgIBIBoVAgEgGBYB8V+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMjJJjMlMsjPkAAAADIizxYlzwt/JM8Lf8kxIsjPhYjOgXAFaNBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBvA/hoXwT4SG8jAVdPgA+Ekg+E6BAQv0C44d0NTU0//6QPpAMFUD0PpA039VBdD6QPpA1wt/bwmBkBgI6A4iAjb1Mx+E4iASJvKcjIJ88WJs8LfyXPFs3IJM8WI88WIs8Lf80pzwv/KM8WJ88WCV8JyVmBAQv0E/huWzBqAVf3wAfCSQfCdAgIX6BccO6Gpqaf/9IH0gGCqB6H0gab+qguh9IH0ga4W/t4TBsCHo6A4iH4ToEBC/QLIJEx3mocAPyOePhPIgFvIiGkA1mAIPQWbwL4byD4T28Qb1AxIChvUTEgJ29SMSAmb1MxIHBvVDEgJW9VMSAkb1YxICNvVzEgcG9YMfhOIgEibynIyCfPFibPC38lzxbNyCTPFiPPFiLPC3/NKc8L/yjPFifPFglfCclZgQEL9BP4bt9bXwYCASAhHgHi/3+NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHtRNAg10nCAY4+0//TP9MA1dMf9ARZbwL4bfQE0x/0BW8C+G/4bvQE0x/0BFlvAvhr03/Tf/QF+Gz4cfhw+Gp/+GH4Zvhj+GIfAfyOOfQFbfhqcG1vAvhrbfhscG1vAvhtbfhucG1vAvhvcPhwcPhxcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7wgAEDyudMfIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIEMiAgEgNCMCASAqJAIBYiglAQizLnu+JgH++EFukvAX3vpA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCcA+MjJJjMlMsjPkAAAADIizxYlzwt/JM8Lf8kxIsjPhYjOjQRQBMS0AAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAJ8D/jiop0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5PMue76JM8WI88WIs8Uzclx+wDeXwNfBJLwFt5/+GcBCLMNlEYpAf74QW6S8Bfe+kDR+EUgbpIwcN74Qrry4GX4AHBwMcjPkAAAABbJIsjPhYjOjQRSy0F4AAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzIwIsD/jiMk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk8Q2URohzwoAyXH7AN4wMJLwFt5/VwIBIDErAgEgLSwAPbQpqSv8ILdJeAvvab/pv+j8ABD8OBB8OK34Cz/8M8ABD7Rar5/8ILdALgEkjoDe+Ebyc3H4ZtH4APAWf/hnLwGQ7UTQINdJwgGOPtP/0z/TANXTH/QEWW8C+G30BNMf9AVvAvhv+G70BNMf9ARZbwL4a9N/03/0Bfhs+HH4cPhqf/hh+Gb4Y/hiMAB4jjn0BW34anBtbwL4a234bHBtbwL4bW34bnBtbwL4b3D4cHD4cXABgED0DvK91wv/+GJw+GNw+GZ/+GHiAgFIMzIAeLNG2bb4QW6S8Bfe0fhFIG6SMHDe+EK68uBl+ABw+EtvEI4QIPhLbxGAIPQO8rLwCaS1f+QwkvAW3n/4ZwCus7m6xPhBbpLwF976QNcNf5XU0dDTf9/XDACV1NHQ0gDf0fhFIG6SMHDe+EK68uBl+AAhIyLIz4WAygBzz0DOAfoCgGnPQM+Bz4HJc/sAXwOS8Bbef/hnAgEgODUBCbhnSb2QNgH++EFukvAX3vpA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDcA4CUyJDEhyM+FiM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPg8jPkAAAADIizxYlzwt/JM8Lf83JcfsAJsD/jico0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5NM6TeyI88WIs8Wzclx+wDeW18E8BZ/+GcCASA8OQFzt3X1k74QW6S8Bfe+kDR+ABwcCL4ToEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCYDoC3o6A4iBvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wDDMgbxX4TIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf8AwyMCPA/2o7AGaOJyXQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TN19ZOiLPC38hzwt/yXH7AN5bMJLwFt5/+GcCASBAPQH/teX2//wgt0l4C+99IGj8AEaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhF8J0CAhfoFxw7oampp//0gfSAYKoHofSBpv6qC6H0gfSBrhb+3hMA+AtaOgOIgbxH4TIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfMyBvFfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN8yMCPA/2o/AGaOJyXQ0wH6QDAxyM+HIM6AYM9Az4HPg8jPkx8vt/4jzxYizxbNyXH7AN5bMJLwFt5/+GcBW7VUIwB8ILdJeAvvfSBo/CKQN0kYOG98IV15cDL8ADg4GJD8JkCAhfoFEEiY70BBAbqOVyH4KCCAC9ch1wv/yM+QAAAANnfPCx9wzwoHcM8L/yHPC/+CEDuaygDPC3/JI8jPhQjOjQRR3NZQAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzVfBN8iwP9CAF6OIyTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TCqEYAiHPCgDJcfsA3jAwkvAW3n/4ZwIBIEpEAgEgSUUB+7hFSipfCC3SXgL730gaPwARoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOEEYB6o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAo+E6BAQv0C0cBPo4d0NTU0//6QPpAMFUD0PpA039VBdD6QPpA1wt/bwlIAeaOgOIgbxE5IG8SOCBvEzcgbxQ2IG8VNSBvFjQgbxczIG8YMjApwP+OPyvQ0wH6QDAxyM+HIM6AYM9Az4HPg8jPksipRUopzxYozxYnzxbIJ88LfybPFiXPFsglzxYkzwt/zc3NyXH7AN5fCDCS8Bbef/hnagCXuMpu5l8ILdJeAvvaPwAODh8KBl8KJiRYH/HE5JoaYD9IBgY5GfDkGdAMGegZ8DnwOfJTKbuZRFnhb+Q54W/5Lj9gG8tyXgLbz/8M8AIBIFFLAgEgUEwCAUhPTQGWs9ZGGPhBbpLwF976QNH4RSBukjBw3vhCuvLgZfgAcHBwMnAxIvhOgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JTgHUjoDiIG8R+EyBAQv0CiCRMd6YIG8R8A8wfzPfIG8V+EyBAQv0CiCRMd6YIG8V8A8wfzLfMCPA/44nJdDTAfpAMDHIz4cgzoBgz0DPgc+Bz5JvWRhiIs8KACHPCgDJcfsA3lswkvAW3n/4Z2oA2LN4y6vR+ACNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARw+CgyIYAL1yHXC/8xIsD/jiYk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkmXjLq4izxYhzwv/yXH7AN5bkvAW3n/4ZwC3ty8t1z4QW6S8Bfe+kDR+EUgbpIwcN74Qrry4GX4ACDIz5AAAAA2dM8LH8khyM+FiM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBbMJLwFt5/+GeACASBUUgGLtkOKX74QW6S8Bfe+kDR+EUgbpIwcN74Qrry4GX4ACD4ToEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCYFMB5I6A4iBvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wCSBvFfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wCTAwkvAW3n/4Z2oCAWJYVQEHsOHnzVYB/vhBbpLwF976QNH4AHAh+EqBAQv0CpnT//pA1wt/bwOOKHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwPiIG8SMjAiwP+OIyTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+SBcPPmiHPC3/JcfsA3jAwkvAW3n9XAAT4ZwIC1F5ZAgHUXFoBaz4QW6S8Bfe+kDR+AD4SSD4ToEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCYFsBio6A4iAjb1cx+E4iASJvKcjIJ88WJs8LfyXPFs3IJM8WI88WIs8Lf80pzwv/KM8WJ88WCV8JyVmBAQv0E/huWzDwFn/4Z2oBaz4QW6S8Bfe+kDR+AD4SSD4ToEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCYF0Bio6A4iAjb1Mx+E4iASJvKcjIJ88WJs8LfyXPFs3IJM8WI88WIs8Lf80pzwv/KM8WJ88WCV8JyVmBAQv0E/huWzDwFn/4Z2oCASBlXwIBIGRgAVFfhBbpLwF976QNH4APhJIfhMIgEiWYEBC/QS+Gwh+EyBAQv0CiCRMd6GEBFI6A31sw8BZ/+GdiAf74TSIBbyIhpANZgCD0Fm8C+G34SyEBbyIhpANZgCD0Fm8C+Gsg+EqBAQv0CpnT//pA1wt/bwOOKHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwPiIPhLbxBvUDEgI29RMSBwb1Ix+EoiASJvI8gjzwv/YwAmIs8WIc8LfwNfA1mBAQv0QfhqMADrT4QW6S8Bfe03/R+AD4SfhKgQEL9AqZ0//6QNcLf28DjihwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8D4iAib1Ix+Er4SQEibyPII88L/yLPFiHPC38DXwNZgQEL9EH4ajAw8BZ/+GeAIBIGxmAcVfhBbpLwF976QPpBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39H4APhJIPhOgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JhnAh6OgOIh+E6BAQv0CyCRMd5qaAH8jnj4TyIBbyIhpANZgCD0Fm8C+G8g+E9vEG9QMSAob1ExICdvUjEgJm9TMSBwb1QxICVvVTEgJG9WMSAjb1cxIHBvWDH4TiIBIm8pyMgnzxYmzwt/Jc8WzcgkzxYjzxYizwt/zSnPC/8ozxYnzxYJXwnJWYEBC/QT+G7fW18GaQAK8BZ/+GcB3HCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwawDejQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8JAGdHAi0NMD+kAw+GmpOADcIccA3CHTHyHdIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83o',
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
