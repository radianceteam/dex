# radianceteam-dex


../../solc ./DEXclient.sol
../../tvm_linker compile DEXclient.code --abi-json ./DEXclient.abi.json -o ./DEXclient.tvc --lib ../../stdlib_sol.tvm

sudo tondev sol DEXclient.sol -l js -L deploy
../../tonos-cli genaddr DEXclient.tvc DEXclient.abi.json --genkey DEXclient.keys.json

Seed phrase: "uncover spatial bird emerge loop goat pull vacant debris noodle recycle glove"

Raw address: 0:2908bd1fccd566c4bfbcd5ee7e3a3ed1c87b7cd7a611683d63bd0dc6677d114c



../../solc ./DEXpair.sol
../../tvm_linker compile DEXpair.code --abi-json ./DEXpair.abi.json -o ./DEXpair.tvc --lib ../../stdlib_sol.tvm

sudo tondev sol DEXpair.sol -l js -L deploy
../../tonos-cli genaddr DEXpair.tvc DEXpair.abi.json --genkey DEXpair.keys.json

Seed phrase: "author gallery bean indicate vital suspect gospel interest garlic conduct suggest outside"

Raw address: 0:b3098a3cf3951b045bf28bed3cd23079f2b6bcd53b0919fc7cff6b6b8aacb3ac