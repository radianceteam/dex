const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXpairContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXpairContract.json';
const rootTokenA = "0:bfd9c9f619b11ce1f3f9520af60dd64a5d4773116afab5e4fcd177208a9c7358";
const rootTokenB = "0:95f08c717d720bd7fa626b064673f9544b47cef60657ea2e23966dfe6dd329c3";


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
          function_name: 'createDepositWallet',
          input: {
            rootAddr: rootTokenA,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your createDepositWallet proceed. Tx id: ', response.transaction.id);
      console.log('Your createDepositWallet output: ', response.decoded.output);

      const params1 = {
        send_events: false,
        message_encode_params: {
          address: contractAddress,
          abi: {
            type: 'Contract',
            value: contract.package.abi
          },
          call_set: {
            function_name: 'createDepositWallet',
            input: {
              rootAddr: rootTokenB,
            }
          },
          signer: {
            type: 'Keys',
            keys: contractKeys }
          }
        }

        let response1 = await client.processing.process_message(params1);
        console.log('Your createDepositWallet proceed. Tx id: ', response1.transaction.id);
        console.log('Your createDepositWallet output: ', response1.decoded.output);


      let resultQC = await client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: contractAddress } },
            result: 'boc'
          });
          let  paramsOfEncodeMessage = {
            abi: abi,
            address: contractAddress,
            call_set: {
              function_name: 'getPair',
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
          console.log('Contract reacted to your getPair:', response.decoded.output);


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
