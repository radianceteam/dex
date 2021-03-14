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
			"name": "createNewEmptyWalletByOwner",
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
			"name": "getWalletByRoot",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
				{"name":"wallet","type":"address"}
			]
		},
		{
			"name": "getAddressWTON",
			"inputs": [
			],
			"outputs": [
				{"name":"wallet","type":"address"}
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
				{"name":"clientAllowanceB","type":"uint128"},
				{"name":"curPair","type":"address"}
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
			"name": "sendTokens3",
			"inputs": [
				{"name":"from","type":"address"},
				{"name":"to","type":"address"},
				{"name":"tokens","type":"uint128"}
			],
			"outputs": [
				{"name":"transmitter","type":"address"},
				{"name":"receiver","type":"address"},
				{"name":"body","type":"cell"}
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
			"name": "getBalanceTokenWallet",
			"inputs": [
				{"name":"walletAddr","type":"address"}
			],
			"outputs": [
				{"name":"walletBal","type":"uint128"}
			]
		},
		{
			"name": "getPairClientWallets",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"walletA","type":"address"},
				{"name":"walletB","type":"address"},
				{"name":"pairReturn","type":"address"}
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
				{"name":"balanceWalletA","type":"uint128"},
				{"name":"balanceWalletB","type":"uint128"}
			]
		},
		{
			"name": "getAllDataPreparation",
			"inputs": [
			],
			"outputs": [
				{"name":"pairKeysR","type":"address[]"},
				{"name":"walletKeysR","type":"address[]"}
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
			"name": "makeABdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "makeAdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "makeBdepositToPair",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"makeDepositStatus","type":"bool"}
			]
		},
		{
			"name": "returnDepositFromPair",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"returnDepositStatus","type":"bool"}
			]
		},
		{
			"name": "processLiquidity",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"processLiquidityStatus","type":"bool"}
			]
		},
		{
			"name": "returnAllLiquidity",
			"inputs": [
				{"name":"pairAddr","type":"address"}
			],
			"outputs": [
				{"name":"returnLiquidityStatus","type":"bool"}
			]
		},
		{
			"name": "processSwapA",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyA","type":"uint128"}
			],
			"outputs": [
				{"name":"processSwapStatus","type":"bool"}
			]
		},
		{
			"name": "processSwapB",
			"inputs": [
				{"name":"pairAddr","type":"address"},
				{"name":"qtyB","type":"uint128"}
			],
			"outputs": [
				{"name":"processSwapStatus","type":"bool"}
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
			"name": "setWrapper",
			"id": "0x89",
			"inputs": [
				{"name":"arg0","type":"address"},
				{"name":"arg1","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "wrapTON",
			"inputs": [
				{"name":"qtyTONgrams","type":"uint128"}
			],
			"outputs": [
				{"name":"processWrapStatus","type":"bool"}
			]
		},
		{
			"name": "unwrapTON",
			"inputs": [
			],
			"outputs": [
				{"name":"processUnwrapStatus","type":"bool"}
			]
		},
		{
			"name": "callbackUnwrapTON",
			"id": "0x24",
			"inputs": [
				{"name":"value0","type":"uint128"}
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
    imageBase64: 'te6ccgECsgEAKQMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShIwQBCvSkIPShBQIDzUANBgICcQgHAI1O1E0NP/0z/TANX0BNMf9ARZbwL4bfQE0x/0BW8C+HH4bvhs1dMf9ARZbwL4b/QF+HD0BNMf9AVvAvhr+Gp/+GH4Zvhj+GKAIBIAoJAJ0+ELIy//4Q88LP/hGzwsAyPhM+E1vIvhO+FFvIl5Q9ADLH/QA9ADLH/QAyPhPbyL4UF4gyx/0APQA+Er4S28iXkDPEc8R9ADLH/QAye1UgAYk+En4SoEBC/QKIJEx3vLga/gA+EmNCGAHyT/7b3S3Ao/ajzjB4JwjUbtypNVxTT0ttM4/Y0VOkJz4ToEBC/QKlPpAbwKALAeiOSo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG8C4iBvESIhJYIQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIzgwA8I0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8HyM+QAAABSsmNCGAHyT/7b3S3Ao/ajzjB4JwjUbtypNVxTT0ttM4/Y0VOkJzIz4WIzo0EUDRzvAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8EMAIBIA8OAJ+hfAA4EPwlQICF+gVM6f/9IGuFv7eBxxQ4RoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACODeB8RA3iRkYN4D8NBh8JDeQwAIBIBsQAgEgFRECASATEgCNX4RSBukjBw3vhCuvLgZfgAIMjPkAAAADZ0zwsfySHIz4WIzo0EUDRzvAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AFswgB8U+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMjJJjMlMsjPkAAAADIizxYlzwt/JM8Lf8kxIsjPhYjOgUAFaNBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBvA/hoXwT4SG8jAgFIGBYBVz4APhJIPhQgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JgFwGAjoDiICNvUzH4UCIBIm8pyMgnzxYmzwt/Jc8WzcgkzxYjzxYizwt/zSnPC/8ozxYnzxYJXwnJWYEBC/QT+HBbMK8BVz4APhJIPhQgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JgGQIejoDiIfhQgQEL9AsgkTHerxoBDI6A31tfBq0CASAiHAIBICAdAgEgHx4Aqz4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAXkMu4FkS9jrwrFFx/DFnNRHMe5nJhvH+MTMh7+1n28xPAGMW8B+Gj4SG8hgAL8+ACNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQh+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3zFvAfhoMPhIbyGAB/U+EUgbpIwcN74Qrry4GX4AHBwMSH4TIEBC/QKIJEx3o5XIfgoIIAL1yHXC//Iz5AAAAA2d88LH3DPCgdwzwv/Ic8L/4IQHc1lAM8Lf8kjyM+FCM6NBFDuaygAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/NV8E328B+GgwghAAj4SG8hAOn3wAODgYkPwmQICF+gUQSJjvRyuQ/BQQQAXrkOuF/+RnyAAAABs754WPuGeFA7hnhf+Q54X/wQgO5rKAZ4W/5JHkZ8KEZ0aCKHc1lAAAAAAAAAAAAAAAAAAA54tnwOfBkOeKZLj9gD+ar4Jvt4D8NBh8JDeQwCASAnJAHs/3+NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHtRNAg10nCAY5D0//TP9MA1fQE0x/0BFlvAvht9ATTH/QFbwL4cfhu+GzV0x/0BFlvAvhv9AX4cPQE0x/0BW8C+Gv4an/4Yfhm+GP4YiUB/I489AVt+GpwbW8C+Gtt+GxwbW8C+G1t+G5wbW8C+G9t+HBwbW8C+HFwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfASYARvgjvPK50x8hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeAgEgYigCASBTKQIBID0qAgEgLSsBCbcgsU/gLAH++EFukvAm3vpA0fgAcCH4SoEBC/QKmdP/+kDXC39vA44ocI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvA+IgbxIyMCLA/44jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5PyCxT+Ic8Lf8lx+wDeMDCS8CXefzwCAUg6LgIBIDIvAQewXPd9MAH++EFukvAm3vpA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDEA+MjJJjMlMsjPkAAAADIizxYlzwt/JM8Lf8kxIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAJ8D/jiop0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5PMue76JM8WI88WIs8Uzclx+wDeXwNfBJLwJd5/+GcCAnM3MwHVqBjwfwgt0l4E299IGuGv8rqaOhpv+/rhr/K6mjoab/v6PwikDdJGDhvfCFdeXAy/AA4OBiR/ChAgIX6BZBImO95cDMR/ChAgIX6BccO6Gpqaf/9IH0gGCqB6H0gab+qguh9IH0ga4W/t4TA0AuSOgOIgbxH4TIEBC/QKIJEx3iCfMCBvFfhMgQEL9AogkTHe3vLgZ8jPkAAAAEYkzwt/I88LfyFvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/PFiFvFfhMgQEL9AqvNQH8jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfzxbJJcjPhYjOjQRSDIVYAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzNbJMD/jiMm0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk8nDHg4hzwoAyXH7AN4wNgASXwOS8CXef/hnAcGo8t2/CC3SXgTb30ga4a/yupo6Gm/7+j8IpA3SRg4b3whXXlwMvwAODgYkXwoQICF+gWQSJjveXAzEXwoQICF+gXHDuhqamn//SB9IBgqgeh9IGm/qoLofSB9IGuFv7eEwOALcjoDiIG8R+EyBAQv0CiCRMd4gnzAgbxX4TIEBC/QKIJEx3t7y4GfIz5AAAACGI88LfyFvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/PFiFvFfhMgQEL9AqvOQH+jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfzxbJJMjPhYjOjQRRfXhAAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzNbI8D/jiMl0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk8meW7YhzwoAyXH7AN4wW3IBCLMNlEY7Af74QW6S8Cbe+kDR+EUgbpIwcN74Qrry4GX4AHBwMcjPkAAAABbJIsjPhYjOjQRSDIVYAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzIwIsD/jiMk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk8Q2URohzwoAyXH7AN4wMJLwJd5/PAAE+GcCASBIPgIBSEQ/AdayQN0R+EFukvAm3vpA1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AHBwMSP4UIEBC/QLIJEx3vLgZiP4UIEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCUACxI6A4iBvEY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFsyCOKzAgbxONCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPe8uBoIG8Vr0EBxo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFsyCOKzAgbxeNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPe8uBpIG8R+EyBAQv0CkIB9I4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yFvEyWCEBHhowDwDF8DIG8V+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yFvFySCEBHhowDwDF8DfzIwJMD/QwBgjiMm0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk6kDdEYhzwoAyXH7AN4wXwOS8CXef/hnAQ6ytV8/+EFuRQGOjoDe+Ebyc3H4ZtH4QvhFIG6SMHDeuvLgZvgAjQhgBeQy7gWRL2OvCsUXH8MWc1Ecx7mcmG8f4xMyHv7WfbzE8AMw8CV/+GdGAZrtRNAg10nCAY5D0//TP9MA1fQE0x/0BFlvAvht9ATTH/QFbwL4cfhu+GzV0x/0BFlvAvhv9AX4cPQE0x/0BW8C+Gv4an/4Yfhm+GP4YkcAfo489AVt+GpwbW8C+Gtt+GxwbW8C+G1t+G5wbW8C+G9t+HBwbW8C+HFwAYBA9A7yvdcL//hicPhjcPhmf/hh4gIBIFBJAgFqTEoBza5HJSvhBbpLwJt76QNH4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCH4TIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfMSLA/5LAFyOIiTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TmkclKiHPFslx+wDeMDCS8CXef/hnAfmul39b4QW6S8Cbe+kDR+ACNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwk0B2o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBOAZaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQp+FCBAQv0C44d0NTU0//6QPpAMFUD0PpA039VBdD6QPpA1wt/bwlPAfCOgOIgbxE6IG8SOSBvEzggbxQ3IG8VNiBvFjUgbxc0IG8YMyoyMCrA/45CLNDTAfpAMDHIz4cgzoBgz0DPgc+DyM+TmJd/WirPFinPFijPFsgozwt/J88WJs8WyCbPFiXPC38kzxbNzc3JcfsA3l8JMJLwJd5/+GevAgEgUlEAeLNG2bb4QW6S8Cbe0fhFIG6SMHDe+EK68uBl+ABw+EtvEI4QIPhLbxGAIPQO8rLwD6S1f+QwkvAl3n/4ZwCus7m6xPhBbpLwJt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0fhFIG6SMHDe+EK68uBl+AAhIyLIz4WAygBzz0DOAfoCgGnPQM+Bz4HJc/sAXwOS8CXef/hnAgEgW1QCASBYVQEJthtGhaBWAf74QW6S8Cbe03/R+EUgbpIwcN74Qrry4GX4AHBwMSH4J28QvLPy4GrIz5AAAACWjQhgBeQy7gWRL2OvCsUXH8MWc1Ecx7mcmG8f4xMyHv7WfbzE+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVwDq388WySKNCGAHyT/7b3S3Ao/ajzjB4JwjUbtypNVxTT0ttM4/Y0VOkJzIz4WIzgH6AoBpz0DPgc+DIc8UyXH7AH8yMCLA/44jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5NhtGhaIc8KAMlx+wDeMDCS8CXef/hnAQm2zpN7IFkB/vhBbpLwJt76QPpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f0fhFIG6SMHDe+EK68uBl+ACNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARaAOAlMiQxIcjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4PIz5AAAAAyIs8WJc8LfyTPC3/NyXH7ACbA/44nKNDTAfpAMDHIz4cgzoBgz0DPgc+DyM+TTOk3siPPFiLPFs3JcfsA3ltfBPAlf/hnAgJ2X1wBcbGvrJ3wgt0l4E299IGj8ADg4EXwoQICF+gXHDuhqamn//SB9IBgqgeh9IGm/qoLofSB9IGuFv7eE10C3o6A4iBvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wEjMgbxX4TIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf8BIyMCPA/69eAGaOJyXQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TN19ZOiLPC38hzwt/yXH7AN5bMJLwJd5/+GcBwbFIjenwgt0l4E299IGuGv8rqaOhpv+/o/CKQN0kYOG98IV15cDL8ADg4GJF8KECAhfoFkEiY73lwMxF8KECAhfoFxw7oampp//0gfSAYKoHofSBpv6qC6H0gfSBrhb+3hNgAtyOgOIgbxH4TIEBC/QKIJEx3iCfMCBvFfhMgQEL9AogkTHe3vLgZ8jPkAAAAEojzwt/IW8R+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE388WIW8V+EyBAQv0Cq9hAf6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/PFskkyM+FiM6NBFF9eEAAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/M1sjwP+OIyXQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TMpEb0iHPCgDJcfsA3jBbcgIBIHpjAgEgc2QCASBsZQIBSGlmAcKzhgUY+EFukvAm3vpA1w1/ldTR0NN/39H4RSBukjBw3vhCuvLgZfgAcHAxIvhQgQEL9AsgkTHe8uBmIvhQgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JZwLSjoDiIG8RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWzII4rMCBvE40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFs97y4GggbxH4TIEBC/QKr2gA1I4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yFvEySCEBHhowDwDF8DfzIwI8D/jiMl0NMB+kAwMcjPhyDOgGDPQM+Bz4HPku4YFGIhzwoAyXH7AN4wW5LwJd5/+GcBrrIc/AD4QW6S8Cbe+kDR+EUgbpIwcN74Qrry4GX4AHBwMSH4UIEBC/QLIJEx3vLgZiH4UIEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCWoC1I6A4iBvEfhMgQEL9AogkTHeIJ8wIG8V+EyBAQv0CiCRMd7e8uBnyM+QAAAAYiFvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/PFiFvFfhMgQEL9AqvawH+jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfzxbJI8jPhYjOjQRQNHO8AAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzNbIsD/jiMk0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkuBz8AIhzwoAyXH7AN4wMHICASBwbQFbtJgbinwgt0l4E299IGj8IpA3SRg4b3whXXlwMvwAODgYkPwmQICF+gUQSJjvQG4Buo5XIfgoIIAL1yHXC//Iz5AAAAA2d88LH3DPCgdwzwv/Ic8L/4IQHc1lAM8Lf8kjyM+FCM6NBFDuaygAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/NV8E3yLA/28AXo4jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5LUwNxSIc8KAMlx+wDeMDCS8CXef/hnAQm0dJmzwHEB/PhBbpLwJt7R+ACNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAF5DLuBZEvY68KxRcfwxZzURzHuZyYbx/jEzIe/tZ9vMTwBjEhwP+OIiPQ0wH6QDAxyM+HIM6AYM9Az4HPgc+Sw6TNniHPFslx+wDeMHIADpLwJd5/+GcCAW53dAHCsjedX/hBbpLwJt76QNcNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AHBwMSL4UIEBC/QLIJEx3vLgZiL4UIEBC/QLjh3Q1NTT//pA+kAwVQPQ+kDTf1UF0PpA+kDXC39vCXUC0o6A4iBvFY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFsyCOKzAgbxeNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPe8uBpIG8V+EyBAQv0Cq92ANSOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN8hbxckghAR4aMA8AxfA38yMCPA/44jJdDTAfpAMDHIz4cgzoBgz0DPgc+Bz5K43nV+Ic8KAMlx+wDeMFuS8CXef/hnAa6yZ49x+EFukvAm3vpA0fhFIG6SMHDe+EK68uBl+ABwcDEh+FCBAQv0CyCRMd7y4GYh+FCBAQv0C44d0NTU0//6QPpAMFUD0PpA039VBdD6QPpA1wt/bwl4AraOgOIgbxH4TIEBC/QKIJEx3iCfMCBvFfhMgQEL9AogkTHe3vLgZ8jPkAAAAGbJI8jPhYjOjQRSDIVYAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzNbIsD/r3kAXo4jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5Kxnj3GIc8KAMlx+wDeMDCS8CXef/hnAgEgiHsCASCBfAIBIIB9AQm1/3w9wH4B+PhBbpLwJt76QPpBldTR0PpA39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4GX4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMjJJTMkMsh/APTPkAAAADIizxYkzwt/ghAR4aMAzwt/yTEiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wAmwP+OKijQ0wH6QDAxyM+HIM6AYM9Az4HPg8jPkn/74e4kzxYjzxYizxTNyXH7AN5fA18DkvAl3n/4ZwDZtLxl1ej8AEaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjh8FBkQwAXrkOuF/5iRYH/HExJoaYD9IBgY5GfDkGdAMGegZ8DnwOfJMvGXVxFnixDnhf/kuP2Aby3JeBLvP/wzwAIBIIWCAgFIhIMAsbAtY/Hwgt0l4E29o/AA4NreBODa3gXwomXwlmJFgf8cXkmhpgP0gGBjkZ8OQZ0AwZ6BnwOfA58kqLWPxETeRAWWP+gAQt5EBZY/6AGS4/YBvLcl4Eu8//DPALWxeW658ILdJeBNvfSBo/CKQN0kYOG98IV15cDL8ABBkZ8gAAAAbOmeFj+SQ5GfCxGdGgigaOd4AAAAAAAAAAAAAAAAAAOeLZ8DnwZDnimS4/YAtmEl4Eu8//DPAZ+0GzAV/CC3SXgTb2j8IpA3SRg4b3whXXlwMvwAODgYxoQwA+Sf/be6W4FH7UecYPBOEajduVJquKaeltpnH7Gip0hOfCdAgIX6BUp9IDeBQIYB/o5KjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbwLiIG8Q+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE38iHANDPkAAAADaAJM8LH8khyM+FiM6NBFA0c7wAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/NF8DIcD/jiMj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkkDZgK4hzwoAyXH7AN4wkvAl3n/4ZwIBII2JAgFijIoBibAcUv3wgt0l4E299IGj8IpA3SRg4b3whXXlwMvwAEHwoQICF+gXHDuhqamn//SB9IBgqgeh9IGm/qoLofSB9IGuFv7eE4sB5I6A4iBvEfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wDyBvFfhMgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/wDzAwkvAl3n/4Z68Ae7GAGdOj8ADh8E7eIGJDgf8cRkehpgP0gGBjkZ8OQZ0AwZ6BnwOfA58kRgBnTEOeFv+S4/YBvGEl4Eu8//DPAgEgk44BCbQVZP3AjwH8+EFukvAm3vpA0fgAjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEI/hQgQELkAFC9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JkQLajoDiIG8R+EyBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3zQgbxX4TIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfMyQyMCTA/6+SAG6OKibQ0wH6QDAxyM+HIM6AYM9Az4HPg8jPkhCrJ+4kzxYjzxYizxbNyXH7AN5fAzCS8CXef/hnAgLSmJQBSbifhBbpLwJt76QPpBldTR0PpA39H4APhJIPhOgQEL9AogkTHeiVARSOgN8wW/Alf/hnlgH+IPhOgQEL9AqU+kBvAo5KjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbwLiICRvUDEgI29RMfhOIgEibyLIIs8WIc8WMTFZgQEL9EH4bvhPIpcAIAFvIiGkA1mAIPQWbwL4bzACAUicmQGfqT4QW6S8Cbe03/R+En4SoEBC/QKIJEx3vLga/gA+EmNCGAHyT/7b3S3Ao/ajzjB4JwjUbtypNVxTT0ttM4/Y0VOkJz4ToEBC/QKlPpAbwKCaAeiOSo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG8C4iBvESIhJYIQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIzpsA+o0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8HyM+QAAABSsmNCGAHyT/7b3S3Ao/ajzjB4JwjUbtypNVxTT0ttM4/Y0VOkJzIz4WIzo0EUDRzvAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8EMPAlf/hnAgFIop0CAdSgngFrPhBbpLwJt76QNH4APhJIPhQgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JgnwGKjoDiICNvVzH4UCIBIm8pyMgnzxYmzwt/Jc8WzcgkzxYjzxYizwt/zSnPC/8ozxYnzxYJXwnJWYEBC/QT+HBbMPAlf/hnrwFrPhBbpLwJt76QNH4APhJIPhQgQEL9AuOHdDU1NP/+kD6QDBVA9D6QNN/VQXQ+kD6QNcLf28JgoQGKjoDiICNvUzH4UCIBIm8pyMgnzxYmzwt/Jc8WzcgkzxYjzxYizwt/zSnPC/8ozxYnzxYJXwnJWYEBC/QT+HBbMPAlf/hnrwIBIKmjAgEgqKQBN1+EFukvAm3vpA0fgA+EkhIfhMgQEL9AogkTHeilARSOgN9bMPAlf/hnpgH++EwiASJZgQEL9BL4bPhNIgFvIiGkA1mAIPQWbwL4bfhLIQFvIiGkA1mAIPQWbwL4ayD4SoEBC/QKmdP/+kDXC39vA44ocI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvA+Ig+EtvEG9QMSAjb1ExIHBvUqcAQDH4SiIBIm8jyCPPC/8izxYhzwt/A18DWYEBC/RB+GowAOtPhBbpLwJt7Tf9H4APhJ+EqBAQv0CpnT//pA1wt/bwOOKHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwPiICJvUjH4SvhJASJvI8gjzwv/Is8WIc8LfwNfA1mBAQv0QfhqMDDwJX/4Z4AgEgsaoBxV+EFukvAm3vpA+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf0fgA+Ekg+FCBAQv0C44d0NTU0//6QPpAMFUD0PpA039VBdD6QPpA1wt/bwmKsCHo6A4iH4UIEBC/QLIJEx3q+sARaOgN9bXwbwJX/4Z60B+vhRIgFvIiGkA1mAIPQWbwL4cSD4UW8Qb1AxIChvUTEgJ29SMSAmb1MxIHBvVDEgJW9VMSAkb1YxICNvVzEgcG9YMSBvEfADMCBvFfADMPhQIgEibynIyCfPFibPC38lzxbNyCTPFiPPFiLPC3/NKc8L/yjPFifPFglfCclZrgAOgQEL9BP4cAHccI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHCwAN6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwkAZ0cCLQ0wP6QDD4aak4ANwhxwDcIdMfId0hwQMighD////9vLGTW/I84AHwAfhHbpMw8jzeg=',
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
     * @typedef DEXclientContract_createNewEmptyWalletByOwner
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWalletByOwner>}
     */
    createNewEmptyWalletByOwner(params) {
        return this.run('createNewEmptyWalletByOwner', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_createNewEmptyWalletByOwner>}
     */
    createNewEmptyWalletByOwnerLocal(params) {
        return this.runLocal('createNewEmptyWalletByOwner', params);
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
     * @typedef DEXclientContract_getWalletByRoot
     * @type {object}
     * @property {string} wallet  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_getWalletByRoot>}
     */
    getWalletByRoot(params) {
        return this.run('getWalletByRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXclientContract_getWalletByRoot>}
     */
    getWalletByRootLocal(params) {
        return this.runLocal('getWalletByRoot', params);
    }

    /**
     * @typedef DEXclientContract_getAddressWTON
     * @type {object}
     * @property {string} wallet  (address)
     */

    /**
     * @return {Promise.<DEXclientContract_getAddressWTON>}
     */
    getAddressWTON() {
        return this.run('getAddressWTON', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getAddressWTON>}
     */
    getAddressWTONLocal() {
        return this.runLocal('getAddressWTON', {});
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
     * @property {string} curPair  (address)
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
     * @typedef DEXclientContract_sendTokens3
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
     * @return {Promise.<DEXclientContract_sendTokens3>}
     */
    sendTokens3(params) {
        return this.run('sendTokens3', params);
    }

    /**
     * @param {object} params
     * @param {string} params.from (address)
     * @param {string} params.to (address)
     * @param {uint128} params.tokens
     * @return {Promise.<DEXclientContract_sendTokens3>}
     */
    sendTokens3Local(params) {
        return this.runLocal('sendTokens3', params);
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
     * @typedef DEXclientContract_getBalanceTokenWallet
     * @type {object}
     * @property {uint128} walletBal 
     */

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getBalanceTokenWallet>}
     */
    getBalanceTokenWallet(params) {
        return this.run('getBalanceTokenWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.walletAddr (address)
     * @return {Promise.<DEXclientContract_getBalanceTokenWallet>}
     */
    getBalanceTokenWalletLocal(params) {
        return this.runLocal('getBalanceTokenWallet', params);
    }

    /**
     * @typedef DEXclientContract_getPairClientWallets
     * @type {object}
     * @property {string} walletA  (address)
     * @property {string} walletB  (address)
     * @property {string} pairReturn  (address)
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
     * @property {uint128} balanceWalletA 
     * @property {uint128} balanceWalletB 
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
     * @typedef DEXclientContract_getAllDataPreparation
     * @type {object}
     * @property {string[]} pairKeysR  (address[])
     * @property {string[]} walletKeysR  (address[])
     */

    /**
     * @return {Promise.<DEXclientContract_getAllDataPreparation>}
     */
    getAllDataPreparation() {
        return this.run('getAllDataPreparation', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getAllDataPreparation>}
     */
    getAllDataPreparationLocal() {
        return this.runLocal('getAllDataPreparation', {});
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

    /**
     * @typedef DEXclientContract_makeABdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeABdepositToPair>}
     */
    makeABdepositToPair(params) {
        return this.run('makeABdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeABdepositToPair>}
     */
    makeABdepositToPairLocal(params) {
        return this.runLocal('makeABdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_makeAdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_makeAdepositToPair>}
     */
    makeAdepositToPair(params) {
        return this.run('makeAdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_makeAdepositToPair>}
     */
    makeAdepositToPairLocal(params) {
        return this.runLocal('makeAdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_makeBdepositToPair
     * @type {object}
     * @property {bool} makeDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeBdepositToPair>}
     */
    makeBdepositToPair(params) {
        return this.run('makeBdepositToPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_makeBdepositToPair>}
     */
    makeBdepositToPairLocal(params) {
        return this.runLocal('makeBdepositToPair', params);
    }

    /**
     * @typedef DEXclientContract_returnDepositFromPair
     * @type {object}
     * @property {bool} returnDepositStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnDepositFromPair>}
     */
    returnDepositFromPair(params) {
        return this.run('returnDepositFromPair', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnDepositFromPair>}
     */
    returnDepositFromPairLocal(params) {
        return this.runLocal('returnDepositFromPair', params);
    }

    /**
     * @typedef DEXclientContract_processLiquidity
     * @type {object}
     * @property {bool} processLiquidityStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processLiquidity>}
     */
    processLiquidity(params) {
        return this.run('processLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processLiquidity>}
     */
    processLiquidityLocal(params) {
        return this.runLocal('processLiquidity', params);
    }

    /**
     * @typedef DEXclientContract_returnAllLiquidity
     * @type {object}
     * @property {bool} returnLiquidityStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnAllLiquidity>}
     */
    returnAllLiquidity(params) {
        return this.run('returnAllLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @return {Promise.<DEXclientContract_returnAllLiquidity>}
     */
    returnAllLiquidityLocal(params) {
        return this.runLocal('returnAllLiquidity', params);
    }

    /**
     * @typedef DEXclientContract_processSwapA
     * @type {object}
     * @property {bool} processSwapStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_processSwapA>}
     */
    processSwapA(params) {
        return this.run('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyA
     * @return {Promise.<DEXclientContract_processSwapA>}
     */
    processSwapALocal(params) {
        return this.runLocal('processSwapA', params);
    }

    /**
     * @typedef DEXclientContract_processSwapB
     * @type {object}
     * @property {bool} processSwapStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processSwapB>}
     */
    processSwapB(params) {
        return this.run('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.pairAddr (address)
     * @param {uint128} params.qtyB
     * @return {Promise.<DEXclientContract_processSwapB>}
     */
    processSwapBLocal(params) {
        return this.runLocal('processSwapB', params);
    }

    /**
     * @typedef DEXclientContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<DEXclientContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<DEXclientContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     */
    setWrapper(params) {
        return this.run('setWrapper', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @param {string} params.arg1 (address)
     */
    setWrapperLocal(params) {
        return this.runLocal('setWrapper', params);
    }

    /**
     * @typedef DEXclientContract_wrapTON
     * @type {object}
     * @property {bool} processWrapStatus 
     */

    /**
     * @param {object} params
     * @param {uint128} params.qtyTONgrams
     * @return {Promise.<DEXclientContract_wrapTON>}
     */
    wrapTON(params) {
        return this.run('wrapTON', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyTONgrams
     * @return {Promise.<DEXclientContract_wrapTON>}
     */
    wrapTONLocal(params) {
        return this.runLocal('wrapTON', params);
    }

    /**
     * @typedef DEXclientContract_unwrapTON
     * @type {object}
     * @property {bool} processUnwrapStatus 
     */

    /**
     * @return {Promise.<DEXclientContract_unwrapTON>}
     */
    unwrapTON() {
        return this.run('unwrapTON', {});
    }

    /**
     * @return {Promise.<DEXclientContract_unwrapTON>}
     */
    unwrapTONLocal() {
        return this.runLocal('unwrapTON', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    callbackUnwrapTON(params) {
        return this.run('callbackUnwrapTON', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    callbackUnwrapTONLocal(params) {
        return this.runLocal('callbackUnwrapTON', params);
    }

}

DEXclientContract.package = pkg;

module.exports = DEXclientContract;
