# sudo tondev sol DEXpair.sol -l js -L deploy
## deployDEXpair.js (for end deploy after 5 tons received use deployDEXpairR.js)
## getDEXpair.js
# sudo tondev sol DEXclient.sol -l js -L deploy
## deployDEXclient.js for contract deploy
## getDEXclient.js for view current state of contract
## connectDEXclient.js for connect to DEXpair.sol
## for grant tokens from root to client wallets
### /tonos-cli call 0:bfd9c9f619b11ce1f3f9520af60dd64a5d4773116afab5e4fcd177208a9c7358 grant '{"dest":"0:19cc9e897337f6ad9e7ffa3da0028c8bbdd9bd2a74ba6091094cbdcf7393f1ca","tokens":"250000","grams":12000000}' --sign deploy2.keys.json --abi RootTokenContract.abi
### /tonos-cli call 0:95f08c717d720bd7fa626b064673f9544b47cef60657ea2e23966dfe6dd329c3 grant '{"dest":"0:6511cf47d5836758f79623c3e13012d7f8ae9915176c98f6aaf28e2886a2a8db","tokens":"250000","grams":12000000}' --sign deploy3.keys.json --abi RootTokenContract.abi
## depositDEXclient.js for deposit amount from client wallets A & B to pair deposit wallets A & B
## for check deposit wallets
### /tonos-cli run 0:5efec5250f20ec4d280bcaf3eb4ec6bcf1e5b01710b42f9ac18ecf9b338dacd5 getBalance {} --abi TONTokenWallet.abi
### /tonos-cli run 0:a9fa2dbf5e9c9769b9c3f54dfb7fe500d5dad4516c5d7349d204e2e7e8406cbd getBalance {} --abi TONTokenWallet.abi
## processLDEXclient.js for process Liquidity 
## depositADEXclient.js for deposit amount from client wallets A to pair deposit wallets A
## swapADEXclient.js for swap A to B 
