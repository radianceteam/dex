const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./TONTokenWalletDebotContract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './TONTokenWalletDebotContract.json';
let debotAbi   = process.env.TTW_DEBOT_ABI;

async function main(client) {
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;

    const params = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'setABI',
          input: {
            dabi: debotAbi,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('setTargetDebotABI: ', response.decoded.output, ', ', response.transaction.id);

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
