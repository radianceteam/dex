solc DEXrootClient.sol
tvm_linker compile DEXrootClient.code --lib ../../../TVM/TON-Solidity-Compiler/lib/stdlib_sol.tvm
tonos-cli genaddr DEXrootClient.tvc DEXrootClient.abi.json --genkey DEXrootClient.keys.json

tvm_linker decode --tvc DEXclient.tvc > code.txt

0:0c3427febed3b30d548f6e76a481bd90786fe7a509929e66b3a0cc23594be735

tonos-cli account 0:0c3427febed3b30d548f6e76a481bd90786fe7a509929e66b3a0cc23594be735

//копируем из code.txt значение переменной code
//если возникает ошибка можно вызвать вот в таком виде
tvm_linker decode --tvc <DEXCLIENT>>.tvc
//в результате придет переменная code - создать файл code.txt и cкопировать ее значение в этот в файл 

export TVM_WALLET_CODE=`cat code.txt`

tonos-cli deploy DEXrootClient.tvc '{"DEXclientCode":"'$TVM_WALLET_CODE'"}' --sign DEXrootClient.keys.json --abi DEXrootClient.abi.json

адреса подставляем свои
pubkey генерируем ручками

tonos-cli account 0:36c1dbcd47319fc85400f6bd08fb56a0083680ea7cf5baad22a4e230c4565d96
tonos-cli run 0:36c1dbcd47319fc85400f6bd08fb56a0083680ea7cf5baad22a4e230c4565d96 getAddress {} --abi DEXrootClient.abi.json
tonos-cli call 0:6f888960842b35af4af5dabe8ee082bf1c9cbb02e7f0a0e56ca676f8fef84e2d deployNewDexClient '{"pubkey":"0x9261701ded267b8a2e2a3b351a6e992702fbce97a7e9ca3a8bc42e86507b6695"}' --abi DEXrootClient.abi.json --sign DEXrootClient.keys.json


tonos-cli genphrase
tonos-cli getkeypair gg.keys.json "feature furnace plate stock analyst priority race please pioneer ripple seat palace"
