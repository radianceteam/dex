# Freeton DEX Debot interface

If you want to test the DEX functionality go to "Testing the DEX functionality with debots" below.

## How to use

When [compiling](https://docs.ton.dev/86757ecb2/v/0/p/950f8a-write-smart-contract-in-solidity/t/1620b2) DeBot smart contract, make sure to place the Debot.sol file into the folder with your DeBot contract code.

[Deploy](https://docs.ton.dev/86757ecb2/v/0/p/8080e6-tonos-cli/t/478a51) DeBot smart contract to the blockchain with at least 1 token balance.

### DeBot deployment
To deploy DEX DeBot:

1. Generate address and deployment keys for the DeBot contract:

    ```jsx
    tonos-cli genaddr <YOURDEXDEBOT>.tvc <YOURDEXDEBOT>.abi.json --genkey debot.keys.json
    ```

2. Transfer at least 1 token to the generated contract address.

3. Deploy and configure the Multisig DeBot contract. The best way to do it is with a single script. Here is an example of the script for Linux: 

    ```jsx
    debot_abi=$(cat <YOURDEXDEBOT>.abi.json | xxd -ps -c 20000)
    debot_abi=$(cat msigDebot.abi.json | xxd -ps -c 20000)
    zero_address=0:0000000000000000000000000000000000000000000000000000000000000000
    ./tonos-cli deploy msigDebot.tvc "{\"options\":0,\"debotAbi\":\"\",\"targetAddr\":\"$zero_address\",\"targetAbi\":\"\"}" --sign debot.keys.json --abi msigDebot.abi.json
    ./tonos-cli call <debot_address> setABI "{\"dabi\":\"$debot_abi\"}" --sign debot.keys.json --abi msigDebot.abi.json
    ./tonos-cli call <debot_address> setTargetABI "{\"tabi\":\"$smc_abi\"}" --sign debot.keys.json --abi msigDebot.abi.json
    ```

    where

    `<YOURDEXDEBOT>.abi.json` - ABI of the target contract.

    `<debot_address>` - address of the DeBot contract, generated at step 1.

    `debot.keys.json` - the DeBot deployment keyfile generated at step 1.

    The script performs the following actions:

    - stores the content of the ABI files required for DeBot operation as variables
    - calls the DeBot constructor function leaving its options empty, or setting them to zero.
    - calls DeBot's `SetABI` and `setTargetABI` configuration functions, uploading the content of the necessary ABI files to it
    
### Call DeBot

Call deployed DeBot in any DeBot browser.

**Example**: in [tonos-cli](https://github.com/tonlabs/tonos-cli) the DeBot can be called with the following command:

```
tonos-cli debot fetch <debot_address>
```

## Testing the DEX functionality with debots

### Deploying a new TIP-3 Client wallet

1. Generate a new seed phrase (`tonos-cli genphrase`), create a new keypair file (`tonos-cli getkeypair “your_keypair_filename.keys.json” “seed-phrase”`)

2. Start the Wrapper debot 

3. Choose [2] to create a new client wallet

4. Insert the public key from the keypair file from step 1 right after “0x” for correct format 

5. Enter seed phrase or path to your newly created keypair file

6. After you have deployed a new client wallet wait a few seconds, refresh your client wallet data and display it

7. Copy your wallet address and fill it up with TONs. Required amount is around 20 TONs

8. Check your balance again, when you have enough TONs, you can create a wallet for wTONs using debot menu command and wrap your TONs into TIP-3 tokens for future use in other DEX debots


After this you can launch Swapper Debot and Liquidity Provider Debot and follow the instructions to operate the DEX. Below is the list of debot addresses and pair addresses for trading. You can connect each pair inside the debot interface and start trading using available liquidity. Note that 1 nanoToken = 0,000 000 001 wTON/wBTC/wETH/wUSDT.

Debots:

**TONwrapperDebot**

tonos-cli debot fetch 0:35980ae219f15a716e9a0e5562c5c3ec9029adddb6fcb221f2aa6f64a8c38aa4

**Swapper**

tonos-cli debot fetch 0:dbc0f2367ab70fb845c44e596ee1b061bae15562f937768f6c7c27edef139a22

**Liquidity Provider**

tonos-cli debot fetch 0:08b76ddf6c8e3d8b4f6e7f57c1eec01c65b9e3e2d6f82edb113dac82b2100e81


PAIRS for debot:


WTON-USDT
0:8f8979814fd3ff28e53e72b608c8e466824c9d7dae05d8b2735322f0ccb41892


WTON-BTC
0:fd0ef71a220079a61cde06465f26d368db84ea1ae0eefea8f77827b0ebdb5e35


TON-ETH
0:2eb69f3cc5855e837d74a2d2055315d64d1cf90555d39eaa02a70c09c8a22ab9


ETH-BTC
0:f1ad43be654c594e1070a7bdf7df5a4453b23c09aa765260cd5646b34a29bda5


BTC-USDT
0:5845a6e5f461e840a7f23a73b360b12dd6ffda010577dd4b64e35d7d61e327d3

