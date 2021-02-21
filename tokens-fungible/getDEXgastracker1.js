const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXgastracker1Contract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './DEXgastracker1Contract.json';
let rootA = '0:cf5d9b0d7fe0dd14f8d75b9c511fab9805ae64dc4c1f08b955c69e44193518a1';
let rootB = '0:eaa4b8e54760d2922d6e23da188d7a2c6824ed108a7c15be5de7b97d9740253e';

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

    let resultQC = await client.net.query_collection({
          collection: 'accounts',
          filter: { id: { eq: contractAddress } },
          result: 'boc'
        });
        let  paramsOfEncodeMessage = {
          abi: abi,
          address: contractAddress,
          call_set: {
            function_name: 'getTongrams',
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

        let response = await client.tvm.run_tvm(paramsOfRunTvm);
        console.log('Contract reacted to your getTongrams:', response.decoded.output);

        resultQC = await client.net.query_collection({
              collection: 'accounts',
              filter: { id: { eq: contractAddress } },
              result: 'boc'
            });
            paramsOfEncodeMessage = {
              abi: abi,
              address: contractAddress,
              call_set: {
                function_name: 'getWalletAddr',
                input: {
                  root:rootA,
                }
              },
              signer: { type: 'None' },
            };

        resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
            paramsOfRunTvm = {
              message: resultEM.message,
              account: resultQC.result[0].boc,
              abi: abi,
            };

            response = await client.tvm.run_tvm(paramsOfRunTvm);
            console.log('Contract reacted to your getWalletAddr:', response.decoded.output);

            resultQC = await client.net.query_collection({
                  collection: 'accounts',
                  filter: { id: { eq: contractAddress } },
                  result: 'boc'
                });
                paramsOfEncodeMessage = {
                  abi: abi,
                  address: contractAddress,
                  call_set: {
                    function_name: 'getWalletAddr',
                    input: {
                      root:rootB,
                    }
                  },
                  signer: { type: 'None' },
                };

            resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                paramsOfRunTvm = {
                  message: resultEM.message,
                  account: resultQC.result[0].boc,
                  abi: abi,
                };

                response = await client.tvm.run_tvm(paramsOfRunTvm);
                console.log('Contract reacted to your getWalletAddr:', response.decoded.output);


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
