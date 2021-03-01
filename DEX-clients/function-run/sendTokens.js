const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXpairContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXpairContract.json';
const walletATokenA = "0:738807e7da5ae5d8352ac660163e8f2a5f4eb2a9bc154dba385ef7dddbc2eebd";
const walletBTokenA = "0:a39e6dd8bb49579bd750cde0ddb47750e17b29d01ce1034e98a882858b086b44";


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
          function_name: 'sendTokens',
          input: {
            from: walletATokenA,
            to: walletBTokenA,
            tokens: 5,
            grams: 300000000,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      }

      let response = await client.processing.process_message(params);
      console.log('Your sendTokens attempt proceed. Tx id: ', response.transaction.id);
      console.log('Your sendTokens output: ', response.decoded.output);

      const params1 = {
        send_events: false,
        message_encode_params: {
          address: contractAddress,
          abi: {
            type: 'Contract',
            value: contract.package.abi
          },
          call_set: {
            function_name: 'sendTokens2',
            input: {
              from: walletATokenA,
              to: walletBTokenA,
              tokens: 5,
              grams: 300000000,
            }
          },
          signer: {
            type: 'Keys',
            keys: contractKeys }
          }
        }

        let response1 = await client.processing.process_message(params1);
        console.log('Your sendTokens attempt proceed. Tx id: ', response1.transaction.id);
        console.log('Your sendTokens output: ', response1.decoded.output);


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
