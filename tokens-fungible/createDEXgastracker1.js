const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXgastracker1Contract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './DEXgastracker1Contract.json';
let rootA = '0:cf5d9b0d7fe0dd14f8d75b9c511fab9805ae64dc4c1f08b955c69e44193518a1';
let rootB = '0:eaa4b8e54760d2922d6e23da188d7a2c6824ed108a7c15be5de7b97d9740253e';
let owner = '0:0e3fce947a11afc651a5706131d5e7ccb2b8c7677ccfe7aa4adf464d7ee11b3a';

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

    const params = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'createNewEmptyWallet',
          input: {
            root: rootA,
            owner: owner,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your createNewEmptyWallet proceed. Tx id: ', response.transaction.id);
      console.log('Your createNewEmptyWallet output: ', response.decoded.output);



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
