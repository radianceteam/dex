const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./NewWalletContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './NewWalletContract.json';
const tongrams = 1000000000;
const tongrams2 = 1000000000;


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
          function_name: 'setTongrams',
          input: {
            value0: tongrams,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your setTongrams proceed. Tx id: ', response.transaction.id);
      console.log('Your setTongrams output: ', response.decoded.output);

      params1 = {
        send_events: false,
        message_encode_params: {
          address: contractAddress,
          abi: {
            type: 'Contract',
            value: contract.package.abi
          },
          call_set: {
            function_name: 'setTongrams2',
            input: {
              value0: tongrams2,
            }
          },
          signer: {
            type: 'Keys',
            keys: contractKeys }
          }
        }

        response1 = await client.processing.process_message(params1);
        console.log('Your setTongrams2 proceed. Tx id: ', response1.transaction.id);
        console.log('Your setTongrams2 output: ', response1.decoded.output);


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
