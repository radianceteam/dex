const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXclientContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXclientContract.json';
const pathJsonPair = './DEXpairContractTONxUSDT.json';
// const pathJsonPair = './DEXpairContractTONxBTC.json';
// const pathJsonPair = './DEXpairContractTONxETH.json';
// const pathJsonPair = './DEXpairContractBTCxUSDT.json';
// const pathJsonPair = './DEXpairContractETHxUSDT.json';

const qtyTokenA = 280000000;//specify qty of tokens
const qtyTokenB = 500000000000;//specify qty of tokens

async function main(client) {
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const abi = {
      type: 'Contract',
      value: contract.package.abi
    };
    const pairJson = fs.readFileSync(pathJsonPair,{encoding: "utf8"});
    const pairData = JSON.parse(pairJson);
    const pairAddress = pairData.address;

    const params = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'processLiquidity',
          input: {
            pairAddr: pairAddress,
            qtyA: qtyTokenA,
            qtyB: qtyTokenB,

          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your processLiquidity proceed. Tx id: ', response.transaction.id);
      console.log('Your processLiquidity output: ', response.decoded.output);

    }catch(err){
      console.log(err);
    }
  }

  (async () => {
    try {
      TonClient.useBinaryLibrary(libNode);
      const client = new TonClient({
        network: {
          server_address: 'net.ton.dev'
        }
      });
      console.log("Hello net.ton.dev!");
      await main(client);
      process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();
