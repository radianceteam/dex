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
				{"name":"root0","type":"address"},
				{"name":"root1","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "isDEXpairWallet",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "isDEXpairRoot",
			"inputs": [
				{"name":"arg0","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
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
			"name": "createDepositWallet",
			"inputs": [
				{"name":"rootAddr","type":"address"}
			],
			"outputs": [
				{"name":"createStatus","type":"bool"}
			]
		},
		{
			"name": "connect",
			"id": "0x5",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setPairDepositWallet",
			"id": "0xA",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
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
			"name": "askBalancePairWallets",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setWalletBalance",
			"id": "0x6",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getReserveWalletsBalance",
			"inputs": [
			],
			"outputs": [
				{"name":"walletReserveA","type":"uint128"},
				{"name":"walletReserveB","type":"uint128"}
			]
		},
		{
			"name": "getLengthQueueA",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueueA",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"address[]"}
			]
		},
		{
			"name": "getLengthQueueB",
			"inputs": [
			],
			"outputs": [
				{"name":"length","type":"uint128"}
			]
		},
		{
			"name": "getAllQueueB",
			"inputs": [
			],
			"outputs": [
				{"name":"queueArr","type":"address[]"}
			]
		},
		{
			"name": "setPairReserveWallet",
			"id": "0xB",
			"inputs": [
				{"name":"value0","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPair",
			"inputs": [
			],
			"outputs": [
				{"name":"addressRootA","type":"address"},
				{"name":"addressRootB","type":"address"},
				{"name":"addressReserveA","type":"address"},
				{"name":"addressReserveB","type":"address"},
				{"name":"balanceReserveA","type":"uint128"},
				{"name":"balanceReserveB","type":"uint128"},
				{"name":"walletReserveA","type":"uint128"},
				{"name":"walletReserveB","type":"uint128"}
			]
		},
		{
			"name": "getReservesBalance",
			"inputs": [
			],
			"outputs": [
				{"name":"balanceReserveA","type":"uint128"},
				{"name":"balanceReserveB","type":"uint128"}
			]
		},
		{
			"name": "getClient",
			"inputs": [
				{"name":"dexclient","type":"address"}
			],
			"outputs": [
				{"name":"indexDEXclient","type":"uint256"},
				{"name":"depositWalletA","type":"address"},
				{"name":"depositWalletB","type":"address"},
				{"name":"processStatus","type":"uint8"},
				{"name":"processQtyA","type":"uint128"},
				{"name":"returnWalletA","type":"address"},
				{"name":"processQtyB","type":"uint128"},
				{"name":"returnWalletB","type":"address"}
			]
		},
		{
			"name": "getClientsArr",
			"inputs": [
			],
			"outputs": [
				{"name":"dexclientsArr","type":"address[]"}
			]
		},
		{
			"name": "getProcessRouter",
			"inputs": [
				{"name":"clientAddr","type":"address"}
			],
			"outputs": [
				{"name":"dexclientA","type":"address"},
				{"name":"dexclientB","type":"address"}
			]
		},
		{
			"name": "getShareReserveProvider",
			"inputs": [
				{"name":"providerAddr","type":"address"}
			],
			"outputs": [
				{"name":"balanceDEXprovider","type":"uint128"}
			]
		},
		{
			"name": "getTotalSupply",
			"inputs": [
			],
			"outputs": [
				{"name":"totalSupplyDEXpair","type":"uint128"}
			]
		},
		{
			"name": "processLiquidity",
			"id": "0x11",
			"inputs": [
				{"name":"qtyA","type":"uint128"},
				{"name":"qtyB","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getQuotient",
			"inputs": [
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getRemainder",
			"inputs": [
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "responceClientBalanceA",
			"id": "0x16",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "responceClientBalanceB",
			"id": "0x26",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnDeposit",
			"id": "0x18",
			"inputs": [
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnClientDepositA",
			"id": "0x36",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnClientDepositB",
			"id": "0x46",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "processSwapA",
			"id": "0x12",
			"inputs": [
				{"name":"qtyA","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "swapA",
			"id": "0x56",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "processSwapB",
			"id": "0x21",
			"inputs": [
				{"name":"qtyB","type":"uint128"},
				{"name":"returnAddrA","type":"address"},
				{"name":"returnAddrB","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "swapB",
			"id": "0x66",
			"inputs": [
				{"name":"value0","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "returnAllLiquidity",
			"id": "0x19",
			"inputs": [
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
		}
	],
	"data": [
	],
	"events": [
	]
};

const pkg = {
    abi,
    imageBase64: 'te6ccgEC8QEAMqQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShOQQBCvSkIPShBQIDzUATBgIBIAoHAgFiCQgAq07UTQ0//TP9MA1fpA+kD0BNN/9ATTH/QEWW8C+HP0Bfh0+HL4cfhw+G34bNX0BPQF+Hb4dfpA+kDSANIA9AT0Bfhv+G74ePh3+Gv4an/4Yfhm+GP4YoALNfhCyMv/+EPPCz/4Rs8LAMj4TPhN+FD4UfhS+FNvIvhUXnDOzvQAy3/0AMsf9AD0AMj4VfhWAvQA9AD4SvhL+Ff4WPhO+E9ecM8RzxHOzsoAygD0APQAye1UgCAUgSCwIBIA8MAadPgA+Ekg+FaBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yD4UoEBC/QLjhbQ1NP/+kD6QNMH1wt/VQTQ+kDTf28IgNAq6OgOIgbxPAAY5HICFvFCW5kyFvFJEk4m9UMSByb1Mx+FIiASJvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWYEBC/QT+HLeIG8TwALuDgEMjoDeXwMwxQIBIBEQACc+ABxISOpjLV/MW8B+Ghb+EhvIYAArPgAcSEjqYy1fyExMW8B+Ghb+EhvIYAA5Z+ABwIfhQgQEL9AqT1wt/kXDiMW8B+Ggw+EhvIYCASAlFAIBIBoVAgFIFxYAI0Ifhq+ErwGTAg+Gv4S/AZMFuAIBIBkYALscHAxIfgoIIAL1yHXC//Iz5AAAAA2gAvPCx9wzwoHcM8L/yHPC/+CEB3NZQDPC3/JI8jPhQjOjQRQ7msoAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAfzVVBF8FgAPE+EUgbpIwcN74Qrry4Gb4AHBtbwLwEPAPICK+mSAiobV/caC1f5Fw4iIhjkEkIfhVgQCA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN8BbyIhpANZgCD0Fm8CNaS1f+RfBG8B+Gj4SG8hgAgEgHhsCASAdHADxT4RSBukjBw3vhCuvLgZvgAcG1vAvAO8A0gIr6ZICKhtX9xoLV/kXDiIiGOQSQh+FSBAID0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3wFvIiGkA1mAIPQWbwI1pLV/5F8EbwH4aPhIbyGACdT4VYEAgPSWllj4dQFvApP4dW3iIG6zmyAgbvJ/byIxMdswjicwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zDjBNmAIBICIfAgEgISAAnT4VIEAgPSWllj4dAFvApP4dG3iIG6zmyAgbvJ/byIxMdswjicwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zDjBNmAALRw8A+ktX/4VSMiWIEAgPQ2Afh1MlhbgAgEgJCMALRw8A2ktX/4VCMiWIEAgPQ2Afh0MlhbgAE8+FWBAID0hpMBbwKRbeIgbrOdICBu8n9vIiEDXwPbMJQwcNsw4wTZgAgEgLyYCASAsJwIBICsoAgEgKikATz4VYEAgPSOkwFvApFt4iBus50gIG7yf28iIQNfA9swlDBw2zDjBNmAATz4VIEAgPSGkwFvApFt4iBus50gIG7yf28iIQNfA9swlDBw2zDjBNmAAT1+FSBAID0jpMBbwKRbeIgbrOdICBu8n9vIiEDXwPbMJQwcNsw4wTZgCAVguLQA3PhJ8AHy4GX4APhP+EkBIsjLf1mBAQv0QfhvMIAD5PhFIG6SMHDe+EK68uBm+AD4TPhNyM+QAAAANnbPCx/JyM+QAAAANnbPCx/JI8jPhYjOjQRQBMS0AAAAAAAAAAAAAAAAAAHPFs+Bz4MizxTJcfsAIsjPhYjOjQRQBMS0AAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwSACASA2MAIBIDMxASFPgA+Ekg+FKBAQv0CyCRMd6DIBCI6A3zDqAgEgNTQAzz4AHBwMfAEIvgoIIAL1yHXC//Iz5AAAAA2es8LH3DPCgckzwv/Ic8L/4IQHc1lAM8Lf8kjyM+FCM6NBFDuaygAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wB/Nl8FbwH4aDD4SG8hgAA0+CX4FfgmgAgEgODcAM0+AAg+ErHBSCWMCD4S8cF328B+Ggw+EhvIYADNfgAIPhMxwUgljAg+E3HBd9vAfhoMPhIbyGAIBID06AWL/f40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIe1E0CDXScIBOwGojlLT/9M/0wDV+kD6QPQE03/0BNMf9ARZbwL4c/QF+HT4cvhx+HD4bfhs1fQE9AX4dvh1+kD6QNIA0gD0BPQF+G/4bvh4+Hf4a/hqf/hh+Gb4Y/hiPAHKjoDi0wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHyHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN5oAgEgbT4CASBSPwIBIElAAgFIQkEArbTF2Oh8ILdJeBlvaPwAOHgIeAeQEV9MkBFQ2r+40Fq/yLhxGa2Q4H/HEZHoaYD9IBgY5GfDkGdAMGegZ8DnwOfJ6xdjoRDnhb/kuP2AbxhJeBjvP/wzwAIBIEZDAQizLnu+RAH++EFukvAy3vpA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4Gb4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEUA+MjJJjMlMsjPkAAAADIizxYlzwt/JM8Lf8kxIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAJ8D/jiop0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5PMue76JM8WI88WIs8Uzclx+wDeXwNfBJLwMd5/+GcB9LJDNG34QW6S8DLe0fgAjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERwH2jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcHBwcPhKOPhLN/hMNvhNNfhM+E6BAQv0CpPXC3+RcOI0+E34ToEBC/QKk9cLf5Fw4jP4TPhPgQEL9AqT1wt/kXDiMvhN+E+BAQv0CpPXC3+RcOIxKMD/SACWjj8q0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5PBDNG2Kc8WKM8WJ88WyCfPFibPC38lzwt/JM8LfyPPC3/Nzclx+wDeXwiS8DHef/hnAgEgTUoBCbbkKP9gSwH++EFukvAy3tH4RSBukjBw3vhCuvLgZvgA+Ez4TcjPkAAAADZ2zwsfycjPkAAAADZ2zwsfySPIz4WIzo0EUATEtAAAAAAAAAAAAAAAAAABzxbPgc+DIs8UyXH7ACLIz4WIzo0EUATEtAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyUwAGHH7AF8EkvAx3n/4ZwIBIFFOAgFIUE8Ak7DagLPwgt0l4GW9o/AA4NreBfCmYkOB/xxOR6GmA/SAYGORnw5BnQDBnoGfA58DnycragLMQt5EBZY/6AGS4/YBvGEl4GO8//DPAJ+wdS2B8ILdJeBlvfSBo/AAQfCVjgpBLGBB8JeOC75Fgf8cRkmhpgP0gGBjkZ8OQZ0AwZ6BnwOfA58nIdS2BEOeFAGS4/YBvGBhJeBjvP/wzwCvtNzdYnwgt0l4GW99IGuGv8rqaOhpv+/rhgBK6mjoaQBv6PwikDdJGDhvfCFdeXAzfAAQkZFkZ8LAZQA556BnAP0BQDTnoGfA58Dkuf2AL4HJeBjvP/wzwAIBIF9TAgEgWlQCAUhZVQEIs41FgFYB+PhBbpLwMt76QNH4AHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBXAYiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQo+FKBAQv0C44W0NTT//pA+kDTB9cLf1UE0PpA039vCFgB5o6A4iBvEDkgbxE4IG8SNyBvEzYgbxQ1IG8VNCBvFjMgbxcyMCnA/44/K9DTAfpAMDHIz4cgzoBgz0DPgc+DyM+TbjUWAinPC/8ozxYnzxYmzwsHyCbPC38lzxYkzwt/I88Wzc3JcfsA3l8IMJLwMd5/+GfuAKCy1JxD+EFukvAy3vpA0fgAIPhMxwUgljAg+E3HBd8iwP+OIyTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TY1JxDiHPCgDJcfsA3jAwkvAx3n/4ZwICc1xbAM2uxxpv4QW6S8DLe0fgAcHD4TPhPgQEL9AqT1wt/kXDiMvhN+E+BAQv0CpPXC3+RcOIxIsD/jick0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk07HGm4izwt/Ic8Lf8lx+wDeW5LwMd5/+GeAQeu6TeyXQH++EFukvAy3vpA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R+EUgbpIwcN74Qrry4Gb4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABF4A4CUyJDEhyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPg8jPkAAAADIizxYlzwt/JM8Lf83JcfsAJsD/jico0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5NM6TeyI88WIs8Wzclx+wDeW18E8DF/+GcCASBsYAIBIGNhAf+0saQR/CC3SXgZb2j8IpA3SRg4b3whXXlwM3wAODa3gXgIeAeQEV9MkBFQ2r+40Fq/yLhxERDHIJIQ/CrAgEB6B0cSRoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACb4C3kRDSAazAEHoLN4Ea0lq/8i+CEOB/wGIAZI4nI9DTAfpAMDHIz4cgzoBgz0DPgc+Bz5M1jSCOIW8iAssf9ADJcfsA3jCS8DHef/hnAgFIamQBDbH0+b/wgt1lAWyOgN74RvJzcfhm+kD6QZXU0dD6QN/R+EL4RSBukjBw3rry4Gb4ACEh8Bpw+Hdw+Hhb8DF/+GdmAbjtRNAg10nCAY5S0//TP9MA1fpA+kD0BNN/9ATTH/QEWW8C+HP0Bfh0+HL4cfhw+G34bNX0BPQF+Hb4dfpA+kDSANIA9AT0Bfhv+G74ePh3+Gv4an/4Yfhm+GP4YmcBBo6A4mgB6PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsaQDAjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G1t+G5t+G9t+HBw+HFt+HJwbW8C+HNt+HRt+HVt+HZw+Hdw+HhwAYBA9A7yvdcL//hicPhjcPhmf/hhAc+xg0nB9IGj8ADg4GPgCEXwUEEAF65Drhf/kZ8gAAAAbPWeFj7hnhQOSZ4X/kOeF/8EIDuaygGeFv+SR5GfChGdGgih3NZQAAAAAAAAAAAAAAAAAAOeLZ8DnwZDnimS4/YA/my+CkWB/2sAXo4jJNDTAfpAMDHIz4cgzoBgz0DPgc+Bz5MjBpOCIc8KAMlx+wDeMDCS8DHef/hnAIu3x0F3NN/03/R+ABxISOpjLV/MSPA/44jJdDTAfpAMDHIz4cgzoBgz0DPgc+Bz5McdBdyIc8Lf8lx+wDeMFuS8DHef/hngAgEgdG4CAUhybwIBIHFwAK20NuRcfCC3SXgZb2j8ADh4B3gGkBFfTJARUNq/uNBav8i4cRmtkOB/xxGR6GmA/SAYGORnw5BnQDBnoGfA58DnyVjbkXEQ54W/5Lj9gG8YSXgY7z/8M8AAh7WZv7/8ILdJeBlvaPwAOHwomJDgf8cRkehpgP0gGBjkZ8OQZ0AwZ6BnwOfA58lWZv7/EOeFv+S4/YBvGEl4GO8//DPAAf+3qjVwfhBbpLwMt7R+EUgbpIwcN74Qrry4Gb4AHBtbwLwDvANICK+mSAiobV/caC1f5Fw4iIhjkEkIfhUgQCA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN8BbyIhpANZgCD0Fm8CNaS1f+RfBCHA/4HMAZI4nI9DTAfpAMDHIz4cgzoBgz0DPgc+Bz5Kao1cGIW8iAssf9ADJcfsA3jCS8DHef/hnAgEgfXUCASB8dgIBIHt3Ad+06xUofCC3SXgZb30gaPwARoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEXwpQICF+gWQSJjveXAzkXwpQICF+gXAeAEwjhbQ1NP/+kD6QNMH1wt/VQTQ+kDTf28IeQLWjoDiIG8R+FaBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3zMgbxL4VoEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfMjAjwP/uegBmjicl0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5J3WKlCI88WIs8Wzclx+wDeWzCS8DHef/hnAI+1+jb6ab/pv+j8ADiQkdTGWr+QmJiR4H/HEZLoaYD9IBgY5GfDkGdAMGegZ8DnwOfJN+jb6RDnhb/kuP2AbxgtyXgY7z/8M8AAp7bNlvJ+EFukvAy3vpA0fgAcCH4UIEBC/QKk9cLf5Fw4jEiwP+OIyTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+STNlvJiHPC3/JcfsA3jAwkvAx3n/4Z4AIBIH9+AH22MAM6dH4AHD4J28QMSHA/44jI9DTAfpAMDHIz4cgzoBgz0DPgc+Bz5IjADOmIc8Lf8lx+wDeMJLwMd5/+GeACAUiBgADOskIGGfhBbpLwMt7R+ABwcPhM+E6BAQv0CpPXC3+RcOIy+E34ToEBC/QKk9cLf5Fw4jEiwP+OJyTQ0wH6QDAxyM+HIM6AYM9Az4HPgc+SCQgYZiLPC38hzwt/yXH7AN5bkvAx3n/4ZwIC0p+CAgEgioMBvam+EFukvAy3tN/0fgA+Ekg+FaBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yD4UoEBC/QLjhbQ1NP/+kD6QNMH1wt/VQTQ+kDTf28IghAL8joDiICFvFiW5kyFvFpEk4m9WMfhM+E6BAQv0CpPXC3+RcOLCAI4Q+Ez4ToEBC/QKk9cLf5Fw4pFx4vhN+E6BAQv0CpPXC3+RcOLCAI4Q+E34ToEBC/QKk9cLf5Fw4pFx4iB1gQPoqYS1fyNvFiG8kSCTI28W4iAhc4ED6KmF7oUB0rV/IMEBkXGRIOIxICMBobV/MyUltggmJrYJISHwJCIi8CUoKrmfJiKotX8nIiaphLV/oLV/lyYkJKmEtX/iKSu5kSefICOotX8hIyephLV/oLV/4jgnJqC1fychobV/IsIAIJQwKcIA3oYBno6AjkEtcG9UPi1wb1Y+LXBvUz74Ui8BL28oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cuKAEGUw8DF/+GeHAd4h+E74TQFTEIEBC/QKk9cLf5Fw4lUCoLV/yMt/WYEBC/RB+G4i+E74TAFTEIEBC/QKk9cLf5Fw4lUCobV/yMt/WYEBC/RB+G4tbxL4TSOCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6IAf6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB/hMLm8VJIIQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIzo0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8HLXBvVD4tcG9WPi1wb1M+IMIAiQH+jn0tbxIubxcighAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwf4Ui8BL28oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cpICASCTiwG9o3wgt0l4GW9pv+j8AHwkkHwrQICF+gVHEkaEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm+QfClAgIX6BccLaGpp//0gfSBpg+uFv6qCaH0gab+3hECMAvyOgOIgIW8UJbmTIW8UkSTib1Qx+Ez4ToEBC/QKk9cLf5Fw4sIAjhD4TPhOgQEL9AqT1wt/kXDikXHi+E34ToEBC/QKk9cLf5Fw4sIAjhD4TfhOgQEL9AqT1wt/kXDikXHiIXWBA+iphLV/I28UIbyRIJMjbxTiICFzgQPoqYXujQHStX8gwQGRcZEg4jEgIwGhtX8zJSW2CCYmtgkhIfAkIiLwJSkpuZ8mIqi1fyciJqmEtX+gtX+XJiQkqYS1f+IqKrmRJ58gI6i1fyEjJ6mEtX+gtX/iOCcmoLV/JyGhtX8pwgAglDAiwgDejgGejoCOQS1wb1Q+LXBvVj4tcG9TPvhSLwEvbyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hy4oAQZTDwMX/4Z48B3iH4TvhMAVMQgQEL9AqT1wt/kXDiVQKgtX/Iy39ZgQEL9EH4biL4TvhNAVMQgQEL9AqT1wt/kXDiVQKhtX/Iy39ZgQEL9EH4bi1vEfhMI4IQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIzpAB/o0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8H+E0ubxckghAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwctcG9UPi1wb1Y+LXBvUz4gwgCRAf6OfS1vES5vFSKCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB/hSLwEvbyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hykgBqjjL4Ui8BL28oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cuIBvaN8ILdJeBlvab/o/AB8JJB8K0CAhfoFRxJGhDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJvkHwpQICF+gXHC2hqaf/9IH0gaYPrhb+qgmh9IGm/t4RAlAIQjoDiIG8TwAHulQIEjoCclgEWjoDiXwMw8DF/+GeXAQogbxPAApgBBo6A3pkBFCAkb1YxIG8WwgCaAYyOgI5BIHBvUzEgcG9UMSBwb1Yx+FIiASJvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWYEBC/QT+HLimwH+IG8SIW8XIm8WghAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwcgcG9TMSBwb1QxIHBvVjH4UiIBIm8oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJKoBFCAkb1YxIG8WwgCdAXiOgI43IHJvUzH4UiIBIm8oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cuKeAfogbxIhbxcibxaCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfByByb1Mx+FIiASJvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWa4CASC3oAIBIK+hAb2jfCC3SXgZb2m/6PwAfCSQfCtAgIX6BUcSRoQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACb5B8KUCAhfoFxwtoamn//SB9IGmD64W/qoJofSBpv7eEQKICEI6A4iBvE8AB7qMCBI6Aq6QBFo6A4l8DMPAxf/hnpQEKIG8TwAKmAQaOgN6nARQgJG9UMSBvFMIAqAGMjoCOQSBwb1MxIHBvVDEgcG9WMfhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hy4qkB/iBvESFvFSJvFIIQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIzo0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8HIHBvUzEgcG9UMSBwb1Yx+FIiASJvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LBySqAB7PC38IXwjJWYEBC/QT+HIBFCAkb1QxIG8UwgCsAXiOgI43IHJvUzH4UiIBIm8oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cuKtAfogbxEhbxUibxSCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfByByb1Mx+FIiASJvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWa4ADoEBC/QT+HICAUi1sAG7a+EFukvAy3tN/0fgA+Ekg+FaBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yD4UoEBC/QLjhbQ1NP/+kD6QNMH1wt/VQTQ+kDTf28IrECro6A4iBvE8ABjkcgIW8WJbmTIW8WkSTib1YxIHJvUzH4UiIBIm8oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4ct4gbxPAAu6yARaOgN5fAzDwMX/4Z7MB9iAhbxYluZMhbxaRJOJvVjH4V3+6jif4TPhOgQEL9AqT1wt/kXDiwgCOEPhM+E6BAQv0CpPXC3+RcOKRceKfIG8Uf/h3IMIAkSCRceIx4vhYf7qOJ/hN+E6BAQv0CpPXC3+RcOLCAI4Q+E34ToEBC/QKk9cLf5Fw4pFx4rQB+J8hbxZ/+HggwgCRIJFx4jHiIm8UISOphLV/I28WIyOphLV/JG8UIbYIJW8WI7YIIcEBIJQwIMEB345BJnBvUzcmcG9UNyZwb1Y3+FIoAShvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWYEBC/QT+HLHAb9n4QW6S8DLe03/6QZXU0dD6QN/6QZXU0dD6QN/R+En4UoEBC/QLIJEx3vLgZ/gA+CdvEIIQdzWUALmz8uBp+Ekg+FKBAQv0C44W0NTT//pA+kDTB9cLf1UE0PpA039vCK2AvyOgOIgbxPAAPLgaCBxb1MxICVvVjEgcG9UMSAkb1UxICNvVzHIz5AAAAA2gGbPCx/JIW8SyM+FiM6NBFAFPsYAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wD4ViJvEgEkWYEBC/QS+Hb4UiMBI28oyMgkzxYjzwt/Is8WzSju1QIBINm4AgEgwbkCAdS+ugGXPhBbpLwMt7R+En4UoEBC/QLIJEx3vLgZ/gA+CdvEIIQdzWUALmz8uBp+Ekg+FKBAQv0C44W0NTT//pA+kDTB9cLf1UE0PpA039vCILsC/o6A4iBvE8AA8uBo+Ez4ToEBC/QKk9cLf5Fw4iL4UIEBC/QKk9cLf5Fw4vhRqYW1f/hN+E6BAQv0CpPXC3+RcOIj+FCBAQv0CpPXC3+RcOL4UamFtX8h+E74TAFTEIEBC/QKk9cLf5Fw4lUCobV/yMt/WYEBC/RB+G4g+E74TQHuvAHYUxCBAQv0CpPXC3+RcOJVAqG1f8jLf1mBAQv0QfhuI/hQgQEL9AqT1wt/kXDi+FEBobV/+HH4UCQBcMjLf1mBAQv0Qfhw+EwjbxUjghAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOvQD8jQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwf4TSNvFyKCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB/hRlnD4d3D4eN9fBPAxf/hnAa0+EFukvAy3vpA+kGV1NHQ+kDf0fhJ+FKBAQv0CyCRMd7y4Gf4APgnbxCCEHc1lAC5s/LgafhJIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwiC/At6OgOIgbxPAAPLgaCBxb1MxIHBvVDEgcG9WMSAkb1UxICNvVzHIz5AAAAA2gDbPCx/JIW8RyM+FiM6NBFAFPsYAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wDIz5AAAAA2gEbPCx/JIm8SyM+FiM7uwADyjQRQBT7GAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsA+FYjbxEBJVmBAQv0Evh2+FYjbxIBJVmBAQv0Evh2+FIkASRvKMjIJM8WI88LfyLPFs0ozwv/J88WJs8WJc8LByTPC38IXwjJWYEBC/QT+HJfBFvwMX/4ZwIBINLCAbtr4QW6S8DLe03/R+AD4SSD4VoEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwiwwKujoDiIG8TwAGORyAhbxQluZMhbxSRJOJvVDEgcm9TMfhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hy3iBvE8AC7sQBFo6A3l8DMPAxf/hnxQH2ICFvFCW5kyFvFJEk4m9UMfhXf7qOJ/hM+E6BAQv0CpPXC3+RcOLCAI4Q+Ez4ToEBC/QKk9cLf5Fw4pFx4p8gbxR/+HcgwgCRIJFx4jHi+Fh/uo4n+E34ToEBC/QKk9cLf5Fw4sIAjhD4TfhOgQEL9AqT1wt/kXDikXHixgH4nyFvFn/4eCDCAJEgkXHiMeIibxQhI6mEtX8jbxYjI6mEtX8kbxQhtgglbxYjtgghwQEglDAgwQHfjkEmcG9UNyZwb1Y3JnBvUzf4UigBKG8oyMgkzxYjzwt/Is8WzSjPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cscBCo6A4l8GyAH+JSW2CCYmtgkhIfAkIiLwJSUltgggI6i1fyEjJ6mEtX+gtX8nJ7mRIZEg4icpuZEikSHiLm8UIqG1fy9vFiKhtX9WEG8R+EwlghAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFskB/s+Bz4MhzxTJcfsAXwdWEG8S+E0kghAR4aMAIyPIz5AAAAAyIc8WJM8LfyPPC3/JIsjPhYjOjQRQdzWUAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAXwcj+E74TAFTEIEBC/QKk9cLf5Fw4lUCoLV/yMt/WYEBC/RB+G4i+E7KAfz4TQFTEIEBC/QKk9cLf5Fw4lUCoLV/yMt/WYEBC/RB+G4l+FBWEwFTEIEBC/QKk9cLf5Fw4lUCoLV/yMt/WYEBC/RB+HAl+FEBoLV/+HFWEHBvU1cRVhBwb1RXEVYQcG9WVxH4UlYSAVYSbyjIyCTPFiPPC38izxbNKM8L/yfLAUbPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hyIcIAIJQwIMIA3swCBI6A0M0BCo6A4l8KzgGkIcIAjk1WEG8RVhFvFSOCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB88ArI5TIMIAjk1WEG8SVhFvFyKCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB97iAe5WEG8RVhFvFSOCEBHhowAjI8jPkAAAADIhzxYkzwt/I88Lf8kiyM+FiM6NBFB3NZQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfB1YQbxJWEW8XIoIQEeGjACMjyM+QAAAAMiHPFiTPC38jzwt/ySLIz4WIztEARo0EUHc1lAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AF8HAgEg1tMBv0+EFukvAy3tN/+kGV1NHQ+kDf+kGV1NHQ+kDf0fhJ+FKBAQv0CyCRMd7y4Gf4APgnbxCCEHc1lAC5s/LgafhJIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwiNQC/I6A4iBvE8AA8uBoIHFvUzEgJW9UMSBwb1YxICRvVTEgI29XMcjPkAAAADaAVs8LH8khbxHIz4WIzo0EUAU+xgAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7APhWIm8RASRZgQEL9BL4dvhSIwEjbyjIyCTPFiPPC38izxbNKO7VAEzPC/8nzxYmzxYlzwsHJM8LfwhfCMlZgQEL9BP4cl8DXwPwMX/4ZwHDX4QW6S8DLe03/Tf/pBldTR0PpA3/pBldTR0PpA39H4SfhSgQEL9AsgkTHe8uBn+AD4J28QghB3NZQAubPy4Gn4SSD4UoEBC/QLjhbQ1NP/+kD6QNMH1wt/VQTQ+kDTf28IjXAuSOgOIgbxPAAPLgaCBxb1MxICZvVDEgJW9WMSAkb1UxICNvVzEgbxHIz5AAAAA2gBbPCx/JIcjPhYjOjQRQBT7GAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAWyBvEsjPkAAAADaAJs8LH8khyM+FiM7u2AD0jQRQBT7GAAAAAAAAAAAAAAAAAAHPFs+Bz4MhzxTJcfsAW/hWIW8RASNZgQEL9BL4dvhWIW8SASNZgQEL9BL4dvhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hyW18E8DF/+GcCASDl2gIBZtzbAF8+EFukvAy3vpA0fhJ8ALy4GX4APhJ+ErHBZMg+Gze+En4S8cFkyD4bd4w8DF/+GeABKT4QW6S8DLe+kDR+AD4SSEh+ErHBYN0CBI6A494BFI6A4lsw8DF/+GffAQoh+EvHBeABBo6A3uEBRPAUIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwjiAdyOgOIgI29SMfhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hyyM+QAAAAJiPPFskiyM+FiM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfA+4BRPATIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwjkAdyOgOIgI29RMfhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibPFiXPCwckzwt/CF8IyVmBAQv0E/hyyM+QAAAAIiPPFskiyM+FiM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPgyHPFMlx+wBfA+4CASDw5gIBIOjnAFVPhBbpLwMt7Tf9H4SfAB8uBl+AD4T/hJASLIy39ZgQEL9EH4bzDwMX/4Z4ATFfhBbpLwMt7R+AD4SSD4UoEBC/QLIJEx3o6QESjoDfMPAxf/hn6gGI+FMhAW8iIaQDWYAg9BZvAvhzIPARMCDwEjD4SvAFMPhL8AUwIPhSgQEL9AuOFtDU0//6QPpA0wfXC39VBND6QNN/bwjrAvyOgOIg+FNvEG9QMY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCEBb1ExjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIQFvUjEgcG9TMfhSIgEibyjIyCTPFiPPC38izxbNKM8L/yfPFibu7AH8zxYlzwsHJM8LfwhfCMlZgQEL9BP4csjPkAAAAA74Ss8W+EzPFo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM8WyPhLzxb4Tc8WjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzxbNySLI7QBMz4WIzo0EUC+vCAAAAAAAAAAAAAAAAAABzxbPgc+DIc8UyXH7AFsB4HCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHDvAEyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvCABn04EWhpgf0gGHw01JwAbhDjgG4Q6Y+Q7pDggZFBCH////7eWMmt+R5wAPgA/CO3SZh5Hm9A==',
};

class DEXpairContract {
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
     * @param {object} constructorParams
     * @param {string} constructorParams.root0 (address)
     * @param {string} constructorParams.root1 (address)
     */
    async deploy(constructorParams) {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams,
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
     * @typedef DEXpairContract_isDEXpairWallet
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairWallet>}
     */
    isDEXpairWallet(params) {
        return this.run('isDEXpairWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairWallet>}
     */
    isDEXpairWalletLocal(params) {
        return this.runLocal('isDEXpairWallet', params);
    }

    /**
     * @typedef DEXpairContract_isDEXpairRoot
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairRoot>}
     */
    isDEXpairRoot(params) {
        return this.run('isDEXpairRoot', params);
    }

    /**
     * @param {object} params
     * @param {string} params.arg0 (address)
     * @return {Promise.<DEXpairContract_isDEXpairRoot>}
     */
    isDEXpairRootLocal(params) {
        return this.runLocal('isDEXpairRoot', params);
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
     * @typedef DEXpairContract_createDepositWallet
     * @type {object}
     * @property {bool} createStatus 
     */

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXpairContract_createDepositWallet>}
     */
    createDepositWallet(params) {
        return this.run('createDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.rootAddr (address)
     * @return {Promise.<DEXpairContract_createDepositWallet>}
     */
    createDepositWalletLocal(params) {
        return this.runLocal('createDepositWallet', params);
    }

    /**
     */
    connect() {
        return this.run('connect', {});
    }

    /**
     */
    connectLocal() {
        return this.runLocal('connect', {});
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairDepositWallet(params) {
        return this.run('setPairDepositWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairDepositWalletLocal(params) {
        return this.runLocal('setPairDepositWallet', params);
    }

    /**
     * @typedef DEXpairContract_sendTokens2
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
     * @return {Promise.<DEXpairContract_sendTokens2>}
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
     * @return {Promise.<DEXpairContract_sendTokens2>}
     */
    sendTokens2Local(params) {
        return this.runLocal('sendTokens2', params);
    }

    /**
     * @typedef DEXpairContract_sendTokens
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
     * @return {Promise.<DEXpairContract_sendTokens>}
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
     * @return {Promise.<DEXpairContract_sendTokens>}
     */
    sendTokensLocal(params) {
        return this.runLocal('sendTokens', params);
    }

    /**
     */
    askBalancePairWallets() {
        return this.run('askBalancePairWallets', {});
    }

    /**
     */
    askBalancePairWalletsLocal() {
        return this.runLocal('askBalancePairWallets', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setWalletBalance(params) {
        return this.run('setWalletBalance', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    setWalletBalanceLocal(params) {
        return this.runLocal('setWalletBalance', params);
    }

    /**
     * @typedef DEXpairContract_getReserveWalletsBalance
     * @type {object}
     * @property {uint128} walletReserveA 
     * @property {uint128} walletReserveB 
     */

    /**
     * @return {Promise.<DEXpairContract_getReserveWalletsBalance>}
     */
    getReserveWalletsBalance() {
        return this.run('getReserveWalletsBalance', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReserveWalletsBalance>}
     */
    getReserveWalletsBalanceLocal() {
        return this.runLocal('getReserveWalletsBalance', {});
    }

    /**
     * @typedef DEXpairContract_getLengthQueueA
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueA>}
     */
    getLengthQueueA() {
        return this.run('getLengthQueueA', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueA>}
     */
    getLengthQueueALocal() {
        return this.runLocal('getLengthQueueA', {});
    }

    /**
     * @typedef DEXpairContract_getAllQueueA
     * @type {object}
     * @property {string[]} queueArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getAllQueueA>}
     */
    getAllQueueA() {
        return this.run('getAllQueueA', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getAllQueueA>}
     */
    getAllQueueALocal() {
        return this.runLocal('getAllQueueA', {});
    }

    /**
     * @typedef DEXpairContract_getLengthQueueB
     * @type {object}
     * @property {uint128} length 
     */

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueB>}
     */
    getLengthQueueB() {
        return this.run('getLengthQueueB', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getLengthQueueB>}
     */
    getLengthQueueBLocal() {
        return this.runLocal('getLengthQueueB', {});
    }

    /**
     * @typedef DEXpairContract_getAllQueueB
     * @type {object}
     * @property {string[]} queueArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getAllQueueB>}
     */
    getAllQueueB() {
        return this.run('getAllQueueB', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getAllQueueB>}
     */
    getAllQueueBLocal() {
        return this.runLocal('getAllQueueB', {});
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairReserveWallet(params) {
        return this.run('setPairReserveWallet', params);
    }

    /**
     * @param {object} params
     * @param {string} params.value0 (address)
     */
    setPairReserveWalletLocal(params) {
        return this.runLocal('setPairReserveWallet', params);
    }

    /**
     * @typedef DEXpairContract_getPair
     * @type {object}
     * @property {string} addressRootA  (address)
     * @property {string} addressRootB  (address)
     * @property {string} addressReserveA  (address)
     * @property {string} addressReserveB  (address)
     * @property {uint128} balanceReserveA 
     * @property {uint128} balanceReserveB 
     * @property {uint128} walletReserveA 
     * @property {uint128} walletReserveB 
     */

    /**
     * @return {Promise.<DEXpairContract_getPair>}
     */
    getPair() {
        return this.run('getPair', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getPair>}
     */
    getPairLocal() {
        return this.runLocal('getPair', {});
    }

    /**
     * @typedef DEXpairContract_getReservesBalance
     * @type {object}
     * @property {uint128} balanceReserveA 
     * @property {uint128} balanceReserveB 
     */

    /**
     * @return {Promise.<DEXpairContract_getReservesBalance>}
     */
    getReservesBalance() {
        return this.run('getReservesBalance', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getReservesBalance>}
     */
    getReservesBalanceLocal() {
        return this.runLocal('getReservesBalance', {});
    }

    /**
     * @typedef DEXpairContract_getClient
     * @type {object}
     * @property {string} indexDEXclient  (uint256)
     * @property {string} depositWalletA  (address)
     * @property {string} depositWalletB  (address)
     * @property {number} processStatus  (uint8)
     * @property {uint128} processQtyA 
     * @property {string} returnWalletA  (address)
     * @property {uint128} processQtyB 
     * @property {string} returnWalletB  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_getClient>}
     */
    getClient(params) {
        return this.run('getClient', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dexclient (address)
     * @return {Promise.<DEXpairContract_getClient>}
     */
    getClientLocal(params) {
        return this.runLocal('getClient', params);
    }

    /**
     * @typedef DEXpairContract_getClientsArr
     * @type {object}
     * @property {string[]} dexclientsArr  (address[])
     */

    /**
     * @return {Promise.<DEXpairContract_getClientsArr>}
     */
    getClientsArr() {
        return this.run('getClientsArr', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getClientsArr>}
     */
    getClientsArrLocal() {
        return this.runLocal('getClientsArr', {});
    }

    /**
     * @typedef DEXpairContract_getProcessRouter
     * @type {object}
     * @property {string} dexclientA  (address)
     * @property {string} dexclientB  (address)
     */

    /**
     * @param {object} params
     * @param {string} params.clientAddr (address)
     * @return {Promise.<DEXpairContract_getProcessRouter>}
     */
    getProcessRouter(params) {
        return this.run('getProcessRouter', params);
    }

    /**
     * @param {object} params
     * @param {string} params.clientAddr (address)
     * @return {Promise.<DEXpairContract_getProcessRouter>}
     */
    getProcessRouterLocal(params) {
        return this.runLocal('getProcessRouter', params);
    }

    /**
     * @typedef DEXpairContract_getShareReserveProvider
     * @type {object}
     * @property {uint128} balanceDEXprovider 
     */

    /**
     * @param {object} params
     * @param {string} params.providerAddr (address)
     * @return {Promise.<DEXpairContract_getShareReserveProvider>}
     */
    getShareReserveProvider(params) {
        return this.run('getShareReserveProvider', params);
    }

    /**
     * @param {object} params
     * @param {string} params.providerAddr (address)
     * @return {Promise.<DEXpairContract_getShareReserveProvider>}
     */
    getShareReserveProviderLocal(params) {
        return this.runLocal('getShareReserveProvider', params);
    }

    /**
     * @typedef DEXpairContract_getTotalSupply
     * @type {object}
     * @property {uint128} totalSupplyDEXpair 
     */

    /**
     * @return {Promise.<DEXpairContract_getTotalSupply>}
     */
    getTotalSupply() {
        return this.run('getTotalSupply', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getTotalSupply>}
     */
    getTotalSupplyLocal() {
        return this.runLocal('getTotalSupply', {});
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processLiquidity(params) {
        return this.run('processLiquidity', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processLiquidityLocal(params) {
        return this.runLocal('processLiquidity', params);
    }

    /**
     * @typedef DEXpairContract_getQuotient
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getQuotient>}
     */
    getQuotient(params) {
        return this.run('getQuotient', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getQuotient>}
     */
    getQuotientLocal(params) {
        return this.runLocal('getQuotient', params);
    }

    /**
     * @typedef DEXpairContract_getRemainder
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getRemainder>}
     */
    getRemainder(params) {
        return this.run('getRemainder', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.min
     * @param {uint128} params.max
     * @return {Promise.<DEXpairContract_getRemainder>}
     */
    getRemainderLocal(params) {
        return this.runLocal('getRemainder', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceA(params) {
        return this.run('responceClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceALocal(params) {
        return this.runLocal('responceClientBalanceA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceB(params) {
        return this.run('responceClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    responceClientBalanceBLocal(params) {
        return this.runLocal('responceClientBalanceB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    returnDeposit(params) {
        return this.run('returnDeposit', params);
    }

    /**
     * @param {object} params
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    returnDepositLocal(params) {
        return this.runLocal('returnDeposit', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositA(params) {
        return this.run('returnClientDepositA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositALocal(params) {
        return this.runLocal('returnClientDepositA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositB(params) {
        return this.run('returnClientDepositB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    returnClientDepositBLocal(params) {
        return this.runLocal('returnClientDepositB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapA(params) {
        return this.run('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyA
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapALocal(params) {
        return this.runLocal('processSwapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapA(params) {
        return this.run('swapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapALocal(params) {
        return this.runLocal('swapA', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapB(params) {
        return this.run('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.qtyB
     * @param {string} params.returnAddrA (address)
     * @param {string} params.returnAddrB (address)
     */
    processSwapBLocal(params) {
        return this.runLocal('processSwapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapB(params) {
        return this.run('swapB', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.value0
     */
    swapBLocal(params) {
        return this.runLocal('swapB', params);
    }

    /**
     */
    returnAllLiquidity() {
        return this.run('returnAllLiquidity', {});
    }

    /**
     */
    returnAllLiquidityLocal() {
        return this.runLocal('returnAllLiquidity', {});
    }

    /**
     * @typedef DEXpairContract_getBalanceTONgrams
     * @type {object}
     * @property {uint128} balanceTONgrams 
     */

    /**
     * @return {Promise.<DEXpairContract_getBalanceTONgrams>}
     */
    getBalanceTONgrams() {
        return this.run('getBalanceTONgrams', {});
    }

    /**
     * @return {Promise.<DEXpairContract_getBalanceTONgrams>}
     */
    getBalanceTONgramsLocal() {
        return this.runLocal('getBalanceTONgrams', {});
    }

}

DEXpairContract.package = pkg;

module.exports = DEXpairContract;
