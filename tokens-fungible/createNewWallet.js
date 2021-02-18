const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./NewWalletContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './NewWalletContract.json';
const rootAddr = "0:cf5d9b0d7fe0dd14f8d75b9c511fab9805ae64dc4c1f08b955c69e44193518a1";
const internalOwner = "0x5625f39cf0efbb144a6cf1f34423b9b1c3959272d3f1305d4dc7446fb929e432";


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
          function_name: 'createNewEmptyWallet',
          input: {
            rootAddr: rootAddr,
            internal_owner: internalOwner,
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
