const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXclientContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXclientContract.json';


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
          function_name: 'unwrapTON',
          input: {}
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your unwrapTON proceed. Tx id: ', response.transaction.id);
      console.log('Your unwrapTON output: ', response.decoded.output);

      let resultQC = await client.net.query_collection({
        collection: 'accounts',
        filter: { id: { eq: contractAddress } },
        result: 'boc'
      });
      let paramsOfEncodeMessage = {
        abi: abi,
        address: contractAddress,
        call_set: {
          function_name: 'getBalanceTONgrams',
          input: {}
        },
        signer: { type: 'None' },
      };

      let resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
      let paramsOfRunTvm = {
        message: resultEM.message,
        account: resultQC.result[0].boc,
        abi: abi,
      };

      response = await client.tvm.run_tvm(paramsOfRunTvm);
      console.log('Contract reacted to your getBalanceTONgrams:', response.decoded.output);


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
