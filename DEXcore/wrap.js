const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXclientContract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './DEXclientContract.json';
const qtyTONgrams = 50000000000;


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
          function_name: 'wrapTON',
          input: {
            qtyTONgrams: qtyTONgrams,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your wrapTON proceed. Tx id: ', response.transaction.id);
      console.log('Your wrapTON output: ', response.decoded.output);

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
