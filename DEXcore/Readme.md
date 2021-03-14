# Working with DEX core smart-contracts

## 1. Introduction

You can use the TONOS-CLI utility to deploy contract DEXclient.sol and manage them.
Available actions in TONOS-CLI include the following:

* setting the network that the utility should connect to
* creating seed phrases, private and public keys, which will be used for DEXclient management
* generating contract address
* deploying contract
* checking contract balance and status
* running getter contract methods
* executing contract methods

Requirements for 14/03/2021:
* TONOS-CLI 0.6.0
* TON Solidity Compiler 0.17.7
* TON SDK ton-client-js 1.5.3+

## 2. TONOS-CLI Installation
### 2.1. Install TONOS-CLI and download contract files
#### Linux

Create a folder. Download the .tar.gz file from the latest release from here: https://github.com/tonlabs/tonos-cli/releases to this folder. Extract it:

```
tar -xvf tonos-cli_v0.6.0_linux.tar.gz
```
Download token contract files (RootTokenContract.cpp, RootTokenContract.hpp, TONTokenWallet.cpp, TONTokenWallet.hpp) from https://github.com/tonlabs/ton-labs-contracts/tree/master/cpp/tokens-fungible. Place them into the folder containing the TONOS-CLI executable.

> Note: Make sure you have downloaded the raw versions of the files. If you use wget or curl be aware that github can send you a redirection page instead of a file. Use appropriate tool flag to avoid it.

#### Mac OS

Install Cargo: https://github.com/rust-lang/cargo#compiling-from-source

Build TONOS-CLI tool from source:

```
> git clone https://github.com/tonlabs/tonos-cli.git

> cd tonos-cli

> cargo build --release

> cd target/release/
```
Download token contract files (RootTokenContract.cpp, RootTokenContract.hpp, TONTokenWallet.cpp, TONTokenWallet.hpp) from https://github.com/tonlabs/ton-labs-contracts/tree/master/cpp/tokens-fungible. Place them into the tonos-cli/target/release/ utility folder.

> Note: Make sure you have downloaded the raw versions of the files. If you use wget or curl be aware that github can send you a redirection page instead of a file. Use appropriate tool flag to avoid it.

> Note: On Mac OS all calls of the TONOS-CLI utility should be performed from the tonos-cli/target/release/ folder.

#### Windows

The workflow is the same as for Mac OS (see the section above). However, when using Windows command line, the following syntax should be used for all TONOS-CLI commands:
```
tonos-cli <command_name> <options>
```
Simply omit the `./` symbols before `tonos-cli`.

### 2.2. Set blockchain network

> Note: By default TONOS-CLI connects to net.ton.dev network.

Use the following command to switch to any other network

```
./tonos-cli config --url <https://network_url>
```

You need to do it only once before using the utility.

A .json configuration file will be created in the TONOS-CLI utility folder. The URL of the current network will be specified there. All subsequent calls of the utility will use this file to select the network to connect to.

## 3. Installing TON Solidity Compiler

Install TON-Solidity-Compiler from https://github.com/tonlabs/TON-Solidity-Compiler.

## 4. Build contracts
```
<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc DEXclient.sol
<PATH_TO>/tvm_linker compile DEXclient.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm
```
It will generate both tvc and abi files.
We have also prepared ready for deploy set:
DEXclient.tvc
DEXclient.abi


## 5. Deploying DEXclient to the Blockchain
### 5.1. Generating seed phrase
To generate your seed phrase enter the following command:
```
./tonos-cli genphrase
```
Terminal displays the generated seed phrase.
> Note: The seed phrase ensures access to the token root. If lost, the custodian will no longer be able to manage the root. The seed phrase should be kept secret and securely backed up.

### 5.2. Generating token root address and deployment key pair
1. Use the following command:
```
./tonos-cli getkeypair <deploy.keys.json> "<seed_phrase>"
```
`deploy.keys.json` - the file the key pair will be written to.
The utility generates the file that contains the key pair produced from seed phrase. Use it to generate your address:
```
./tonos-cli genaddr DEXclient.tvc DEXclient.abi --setkey deploy.keys.json --wc <workchain_id>
```
* `deploy.keys.json` - the file the key pair is read from.
* `--wc <workchain_id>` - (optional) ID of the workchain the wallet will be deployed to (-1 for masterchain, 0 for basechain). By default this value is set to 0.
The utility displays the new DEXclient_address (Raw_address).

> Note: The token root address is required for any interactions with the contract.

#### 5.2.1. (Optional) Check that a contract with the address generated on the previous step does not already exist in the blockchain
Request status for the generated contract address from the blockchain:
```
./tonos-cli account <DEXclient_address>
```
#### 5.2.2. Send a few TONs(requiry !<100) to the new address from another contract.
Create, and if necessary, confirm a transaction from another wallet.
Ensure that contract address has been created in the blockchain and has Uninit status.
```
./tonos-cli account <DEXclient_address>
```
### 5.3. Deploy DEXclient contract to the blockchain
Use the following command:
```
./tonos-cli deploy DEXclient.tvc '{}' --abi DEXclient.abi --sign deploy.keys.json --wc <workchain_id>
```
* `--wc <workchain_id>` - (optional) ID of the workchain the wallet will be deployed to (-1 for masterchain, 0 for basechain). By default this value is set to 0.

#### 5.4.1. Check the <DEXclient_address> status again
Now it should be Active.
```
./tonos-cli account <DEXclient_address>
```

#### 5.4.2. Run getters of the DEXclient contract
Verify that state matches parameters you have provided during deploy.
```
./tonos-cli run <DEXclient_address> showContractAddress {} --abi DEXclient.abi
./tonos-cli run <DEXclient_address> getAddressWTON {} --abi DEXclient.abi
```

`getAddressWTON` give you <DEXclient_wTon_address> of your DEXclient for wrapp your TON to wTON:
```
./tonos-cli run <DEXclient_wTon_address> getBalance {} --abi TONTokenWallet.abi

```

## 6. Preparing for operation with TIP-3 tokens
### 6.1. Check your TON balance of DEXclient
```
./tonos-cli account <DEXclient_address>
```
We require have on balance more then 100 TON for testing.

### 6.2. Send your TON
```
./tonos-cli call <DEXclient_address> sendTransfer '{"dest":"<set_destination>","value":"<set_quantity_TON_grams_which_you_want_to_send>","bounce":"<set_bounce_true_or_false>"}' --sign deploy.keys.json --abi DEXclient.abi
```
Configuration parameters:
* `dest` - (type address) destination for send transfer.
* `value` - (type uint128) quantity TON grams which you want to transfer.
* `bounce` - (type bool) if it's set and transaction (generated by the internal outbound message) falls (only at computing phase, not at action phase!) then funds will be returned. Otherwise (flag isn't set or transaction terminated successfully) the address accepts the funds even if the account doesn't exist or is frozen. Defaults to true.



### 6.3. Wrap your TON to wTON and unwrap back your wTON to TON
```
./tonos-cli call <DEXclient_address> wrapTON '{"qtyTONgrams":"<set_quantity_TON_grams>"}' --sign deploy.keys.json --abi DEXclient.abi

```
Configuration parameters:
* `qtyTONgrams` - quantity TON grams which you want to wrap.

You can check wTON balance using comand:
```
./tonos-cli run <DEXclient_wTon_address> getBalance {} --abi TONTokenWallet.abi

```
You can unwrap back all your wTON to TON using comand:
```
./tonos-cli call <DEXclient_address> unwrapTON '{}' --sign deploy.keys.json --abi DEXclient.abi

```
### 6.4. DEX preset configuration (deployed on net.ton.dev)

This DEX implementation uses a slightly modified TON Labs TIP-3  RootTokenContract.cpp (https://github.com/radianceteam/dex/blob/main/DEXrootAndWalletcompile/RootTokenContract.cpp). It was modified to allow for deployment of wallets of the same type with different addresses for one internal owner. Pull-request to TONLabs TIP-3: https://github.com/tonlabs/ton-labs-contracts/pull/60 (preliminary confirmed by Mitja on SG call).

- wTON 0:bc865dc0b225ec75e158a2e3f862ce6a2398f733930de3fc626643dfdacfb798
- wUSDT 0:b7b17288b1e1c1166797fc40f6329aa598ef720176738769f79fa49c87f50feb
- wBTC 0:2ffafd25bdc5b322318ca768d8fa9044cf602c4589b02671a430b1ff949173ac
- wETH 0:2e3854dcfa1f1150e3ad3062692e9891650a8915c9982879829b3b47080189aa


DEXpair.sol with wTON
- wTON-wUSDT 0:f06c877542037ca512e43e42ca621c998daccce28fe02b5246a89551cb8659d5
- wTON-wBTC 0:03bb86589570aa7e0b95ceabba2f5eecc0c731a4b74fb1c0cec2bddc23add81b
- wTON-wETH 0:aa7d2070534679facaab708b985f27b791adf2fcc2d35465c4926b61fea3dd97

DEXpair.sol without wTON
- wBTC-wUSDT 0:0a1f28614409c815d3e5f0774ed161c71929ae800b8f4bef6954b65147beb669
- wETH-wUSDT 0:8588a819c849e7209a4d730dc1d8516ef29f4f17bcd5b459ba2ebae93f36c9a6

We provide some liquidity to all DEXpairs.
You can check current DEXpair balance ReserveA and ReserveB  using command.

```
./tonos-cli run <DEXpair_address> getReservesBalance '{}' --abi DEXpair.abi.json

```
You will get
- "balanceReserveA": "<nanoTokens_quantity>"
- "balanceReserveB": "<nanoTokens_quantity>"

where nanoToken is:
- 1 nanoToken = 0,000 000 001 wTON/wBTC/wETH/wUSDT/etc.


## 7. DEXclient management and major actions
### 7.1. Get DEXclient connection state to DEXpair
```
./tonos-cli run <DEXclient_address> getPair '{"value0":"<DEXpair_address>"}' --abi DEXclient.abi

```
You will get:
- "pairRootA": "<TIP3_RootTokenContract_address_for_TokenA>",
- "pairReserveA": "<TIP3_Wallet_DEXpair_reserve_storage_address_for_TokenA>",
- "clientDepositA": "<DEXclient_deposit_wallet_where_DEXpair_internal_owner_for_TokenA>",
- "clientAllowanceA": "0",
- "pairRootB": "<TIP3_RootTokenContract_address_for_TokenB>",
- "pairReserveB": "<TIP3_Wallet_DEXpair_reserve_storage_address_for_TokenB>",
- "clientDepositB": "<DEXclient_deposit_wallet_where_DEXpair_internal_owner_for_TokenB>",
- "clientAllowanceB": "0",
- "curPair": "<DEXpair_address>"

You can check your deposit wallets balances for DEXpair tokens using:
```
./tonos-cli run <DEXclient_deposit_wallet_where_DEXpair_internal_owner_for_TokenA> getBalance {} --abi TONTokenWallet.abi
./tonos-cli run <DEXclient_deposit_wallet_where_DEXpair_internal_owner_for_TokenB> getBalance {} --abi TONTokenWallet.abi

```

### 7.2. Get DEXclient wallets for DEXpair tokens roots where internal_owner is DEXclient
```
./tonos-cli run <DEXclient_address> getPairClientWallets '{"pairAddr":"<DEXpair_address>"}' --abi DEXclient.abi
```
You will get:
- "walletA": "<DEXclient_wallet_where_DEXclient_internal_owner_for_TokenA>",
- "walletB": "<DEXclient_wallet_where_DEXclient_internal_owner_for_TokenA>",

You can check your wallets balances for DEXpair tokens using:
```
./tonos-cli run <DEXclient_wallet_where_DEXclient_internal_owner_for_TokenA> getBalance {} --abi TONTokenWallet.abi
./tonos-cli run <DEXclient_wallet_where_DEXclient_internal_owner_for_TokenA> getBalance {} --abi TONTokenWallet.abi

```


### 7.3. Make deposit A or B to DEXpair and return
```
./tonos-cli call <DEXclient_address> makeAdepositToPair '{"pairAddr":"<DEXpair_address>","qtyA":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
./tonos-cli call <DEXclient_address> makeBdepositToPair '{"pairAddr":"<DEXpair_address>","qtyB":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
./tonos-cli call <DEXclient_address> returnDepositFromPair '{"pairAddr":"<DEXpair_address>"}' --sign deploy.keys.json --abi DEXclient.abi
```
You can check change of your wallets balances using commands from 7.1 and 7.2

### 7.4. Swaps 'A to B' and 'B to A'
```
./tonos-cli call <DEXclient_address> processSwapA '{"pairAddr":"<DEXpair_address>","qtyA":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
./tonos-cli call <DEXclient_address> processSwapB '{"pairAddr":"<DEXpair_address>","qtyB":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
```
- You can check change of your wallets balances using commands from 7.1 and 7.2
- You can check change of DEXpair reserves balances using commands from 6.4

### 7.5. Provide liquidity to DEXpairs and return

If you want to became shareholder of DEXpair and will get part of DEXpair profit you need provide some liquidity to DEXpair.
You should collect both DEXpair tokens on your wallets using swap.
Any time you can returm your part of DEXpair reserves balances.

```
./tonos-cli call <DEXclient_address> makeABdepositToPair '{"pairAddr":"<DEXpair_address>","qtyA":"<set_quantity_nanoTokens>","qtyB":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
./tonos-cli call <DEXclient_address> processLiquidity '{"pairAddr":"<DEXpair_address>","qtyB":"<set_quantity_nanoTokens>","qtyB":"<set_quantity_nanoTokens>"}' --sign deploy.keys.json --abi DEXclient.abi
./tonos-cli call <DEXclient_address> returnAllLiquidity '{"pairAddr":"<DEXpair_address>"}' --sign deploy.keys.json --abi DEXclient.abi

```
You can check change of your wallets balances using commands from 7.1 and 7.2
You can check change of DEXpair reserves balances using commands from 6.4
You can check your part of DEXpair using command:

```
./tonos-cli run <DEXpair_address> getShareReserveProvider '{"providerAddr":"<DEXclient_address>"}' --abi DEXpair.abi.json
./tonos-cli run <DEXpair_address> getTotalSupply '{}' --abi DEXpair.abi.json

```
You will get
- totalSupplyDEXpair: '<total_number_of_stakes>'
- balanceDEXprovider: '<your_number_of_stakes>'

## 8. DEXclient management using TON SDK (ton-client-js) with examples 
### 8.1. Install dependencies
```
npm i --save @tonclient/core
npm i --save @tonclient/lib-node
npm i --save fs

```
### 8.2. Deploy DEXclient contract to the blockchain
```
node deployDEXclient.js
```
* `const pathJson = './DEXclientContract.json';` - at the end of script <DEXclient_address> and keys will be in this file.
* `const tongrams = 100000000000;` - tongrams qty which giver transfer to <DEXclient_address> before deploy.

### 8.3. Connect to DEXpairs
```
node connectTONxUSDT.js
node connectTONxBTC.js
node connectTONxETH.js
node connectBTCxUSDT.js
node connectETHxUSDT.js
```
You can check DEXclient connection to DEXpair using commands:
```
node showTONUSDT.js
node showTONBTC.js
node showTONETH.js
node showBTCUSDT.js
node showETHUSDT.js
```
You can check DEXpair using commands:
```
node pairTONUSDT.js
node pairTONBTC.js
node pairTONETH.js
node pairBTCUSDT.js
node pairETHUSDT.js
```
### 8.4. Wrap TON to wTON and unwrap
You can wrap some of your TON using script:
```
node wrap.js
```
* `const qtyTONgrams = 50000000000;` - set here qty TON grams for wrap

- You can check change of  wallets balances using commands from 8.3

You can unwrap all your wTON using script:
```
node unwrap.js
```

### 8.5. Deposit tokenA or tokenB

```
node depositA.js
node depositB.js

```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair
* `const qtyTokens = 3000000000;` - set here qty nanoTokens for deposit

- You can check change of  wallets balances using commands from 8.3

You can return all your deposits from DEXpair using script:
```
node returnDeposit.js
```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair

### 8.5. Swap tokenA or tokenB

```
node swapA.js
node swapB.js

```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair
* `const qtyToken = 1000000000;` - set here qty nanoTokens for swap

- You can check change of  wallets balances using scrip from 8.3

### 8.6. Provide liquidity to DEXpairs and return

If you want to became shareholder of DEXpair and will get part of DEXpair profit you need provide some liquidity to DEXpair.
You should collect both DEXpair tokens on your wallets using swap.
Any time you can returm your part of DEXpair reserves balances.

- First add deposit:
```
node depositAB.js

```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair
* `const qtyTokenA = <quantity in nanoTokens>;` - set here qtyA nanoTokens for deposit
* `const qtyTokenB = <quantity in nanoTokens>;` - set here qtyB nanoTokens for deposit

- Second provide Liquidity:
```
node provide.js

```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair
* `const qtyTokenA = <quantity in nanoTokens>;` - set here qtyA nanoTokens for provide
* `const qtyTokenB = <quantity in nanoTokens>;` - set here qtyB nanoTokens for provide

- You can check result using script for specified pair:
```
node pairTONUSDT.js
node pairTONBTC.js
node pairTONETH.js
node pairBTCUSDT.js
node pairETHUSDT.js

```
- You can return all your provided liquidity using script:
```
node returnLiquidity.js

```
* `const pathJsonPair = './DEXpairContractTONxUSDT.json';` - select working DEXpair
