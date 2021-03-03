1. solc DEXroot.sol
2. tvm_linker compile DEXroot.code --lib ../../TVM/TON-Solidity-Compiler/lib/stdlib_sol.tvm
3. tonos-cli genaddr DEXroot.tvc DEXroot.abi.json --genkey DEXroot.keys.json

4. tvm_linker decode --tvc <DEXCLIENT>>.tvc > code.txt

//копируем из code.txt значение переменной code
//если возникает ошибка можно вызвать вот в таком виде
tvm_linker decode --tvc <DEXCLIENT>>.tvc
//в результате придет переменная code - создать файл code.txt и cкопировать ее значение в этот в файл 

5. export TVM_WALLET_CODE=`cat code.txt`

6. tonos-cli deploy DEXroot.tvc '{"code":"'$TVM_WALLET_CODE'"}' --sign DEXroot.keys.json --abi DEXroot.abi.json

адреса подставляем свои
pubkey генерируем ручками

tonos-cli run 0:e20c66647b36e6d7f1ec6f79ec6fa3972aa35352bd110f2fadc32d3bf1c72715 getAddress {} --abi DEXroot.abi.json
tonos-cli call 0:e20c66647b36e6d7f1ec6f79ec6fa3972aa35352bd110f2fadc32d3bf1c72715 deployNewDexClient '{"pukey":"0x2e38f2c96db23a48340a9dd7e6f73aec4f243d3127d6e172c6b19507cca60fe7"}' --abi DEXroot.abi.json --sign DEXroot.keys.json
git checkout -b "draft_changes"
