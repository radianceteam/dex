const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXpairContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
// const pathJson = './DEXpairContractTONxUSDT.json';
// const pathJson = './DEXpairContractTONxBTC.json';
// const pathJson = './DEXpairContractTONxETH.json';
// const pathJson = './DEXpairContractBTCxUSDT.json';
const pathJson = './DEXpairContractETHxUSDT.json';

const clientJson = './DEXclientContract.json';


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

    const clientAddress = JSON.parse(fs.readFileSync(clientJson,{encoding: "utf8"})).address;
    // const clientAddress = clientData.address;


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

        let response = await client.tvm.run_tvm(paramsOfRunTvm);
        console.log('Contract reacted to your getPair:', response.decoded.output);

        resultQC = await client.net.query_collection({
              collection: 'accounts',
              filter: { id: { eq: contractAddress } },
              result: 'boc'
            });
            paramsOfEncodeMessage = {
              abi: abi,
              address: contractAddress,
              call_set: {
                function_name: 'getClientsArr',
                input: {}
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
            console.log('Contract reacted to your getClientsArr:', response.decoded.output);

            resultQC = await client.net.query_collection({
                  collection: 'accounts',
                  filter: { id: { eq: contractAddress } },
                  result: 'boc'
                });
                paramsOfEncodeMessage = {
                  abi: abi,
                  address: contractAddress,
                  call_set: {
                    function_name: 'getAllQueueA',
                    input: {}
                  },
                  signer: {
                    type: 'Keys',
                    keys: contractKeys }
                };

                resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                paramsOfRunTvm = {
                  message: resultEM.message,
                  account: resultQC.result[0].boc,
                  abi: abi,
                };

                response = await client.tvm.run_tvm(paramsOfRunTvm);
                console.log('Contract reacted to your getAllQueueA:', response.decoded.output);

                resultQC = await client.net.query_collection({
                      collection: 'accounts',
                      filter: { id: { eq: contractAddress } },
                      result: 'boc'
                    });
                    paramsOfEncodeMessage = {
                      abi: abi,
                      address: contractAddress,
                      call_set: {
                        function_name: 'getAllQueueB',
                        input: {}
                      },
                      signer: {
                        type: 'Keys',
                        keys: contractKeys }
                    };

                    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                    paramsOfRunTvm = {
                      message: resultEM.message,
                      account: resultQC.result[0].boc,
                      abi: abi,
                    };

                    response = await client.tvm.run_tvm(paramsOfRunTvm);
                    console.log('Contract reacted to your getAllQueueB:', response.decoded.output);

                    resultQC = await client.net.query_collection({
                          collection: 'accounts',
                          filter: { id: { eq: contractAddress } },
                          result: 'boc'
                        });
                        paramsOfEncodeMessage = {
                          abi: abi,
                          address: contractAddress,
                          call_set: {
                            function_name: 'getClient',
                            input: {
                              dexclient:clientAddress,
                            }
                          },
                          signer: {
                            type: 'Keys',
                            keys: contractKeys }
                        };

                        resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                        paramsOfRunTvm = {
                          message: resultEM.message,
                          account: resultQC.result[0].boc,
                          abi: abi,
                        };

                        response = await client.tvm.run_tvm(paramsOfRunTvm);
                        console.log('Contract reacted to your getClient:', response.decoded.output);

                        resultQC = await client.net.query_collection({
                              collection: 'accounts',
                              filter: { id: { eq: contractAddress } },
                              result: 'boc'
                            });
                            paramsOfEncodeMessage = {
                              abi: abi,
                              address: contractAddress,
                              call_set: {
                                function_name: 'getTotalSupply',
                                input: {}
                              },
                              signer: {
                                type: 'Keys',
                                keys: contractKeys }
                            };

                            resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                            paramsOfRunTvm = {
                              message: resultEM.message,
                              account: resultQC.result[0].boc,
                              abi: abi,
                            };

                            response = await client.tvm.run_tvm(paramsOfRunTvm);
                            console.log('Contract reacted to your getTotalSupply:', response.decoded.output);

                            resultQC = await client.net.query_collection({
                                  collection: 'accounts',
                                  filter: { id: { eq: contractAddress } },
                                  result: 'boc'
                                });
                                paramsOfEncodeMessage = {
                                  abi: abi,
                                  address: contractAddress,
                                  call_set: {
                                    function_name: 'getShareReserveProvider',
                                    input: {
                                      providerAddr:clientAddress,
                                    }
                                  },
                                  signer: {
                                    type: 'Keys',
                                    keys: contractKeys }
                                };

                                resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
                                paramsOfRunTvm = {
                                  message: resultEM.message,
                                  account: resultQC.result[0].boc,
                                  abi: abi,
                                };

                                response = await client.tvm.run_tvm(paramsOfRunTvm);
                                console.log('Contract reacted to your getShareReserveProvider:', response.decoded.output);

                                resultQC = await client.net.query_collection({
                                  collection: 'accounts',
                                  filter: { id: { eq: contractAddress } },
                                  result: 'boc'
                                });
                                paramsOfEncodeMessage = {
                                  abi: abi,
                                  address: contractAddress,
                                  call_set: {
                                    function_name: 'getBalanceTONgrams',
                                    input: {}
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
