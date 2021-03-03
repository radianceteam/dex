const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXpairContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXpairContract.json';
const walletATokenA = "0:3a15f2f221527bf784346502c39bf3be57305b5f46dc6af822b77c9d8b294a70";
const walletBTokenA = "0:2eb178ee3e27581800348171a9953fd3a4e17e9f2e08212f1a75ff8d480b83d6";


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

        let response_getTokenA = await client.tvm.run_tvm(paramsOfRunTvm);
        console.log('Contract reacted to your getPair:', response_getTokenA.decoded.output);

        resultQC = await client.net.query_collection({
              collection: 'accounts',
              filter: { id: { eq: contractAddress } },
              result: 'boc'
            });
            paramsOfEncodeMessage = {
              abi: abi,
              address: contractAddress,
              call_set: {
                function_name: 'getTokenB',
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

            let response_getTokenB = await client.tvm.run_tvm(paramsOfRunTvm);
            console.log('Contract reacted to your getTokenB:', response_getTokenB.decoded.output);

          resultQC = await client.net.query_collection({
                collection: 'accounts',
                filter: { id: { eq: contractAddress } },
                result: 'boc'
              });
              paramsOfEncodeMessage = {
                abi: abi,
                address: contractAddress,
                call_set: {
                  function_name: 'getReserveTokenA',
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

              let response_getReserveTokenA = await client.tvm.run_tvm(paramsOfRunTvm);
              console.log('Contract reacted to your getReserveTokenA:', response_getReserveTokenA.decoded.output);

          resultQC = await client.net.query_collection({
                collection: 'accounts',
                filter: { id: { eq: contractAddress } },
                result: 'boc'
              });
              paramsOfEncodeMessage = {
                abi: abi,
                address: contractAddress,
                call_set: {
                  function_name: 'getReserveTokenB',
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

              let response_getReserveTokenB = await client.tvm.run_tvm(paramsOfRunTvm);
              console.log('Contract reacted to your getReserveTokenB:', response_getReserveTokenB.decoded.output);

              resultQC = await client.net.query_collection({
                    collection: 'accounts',
                    filter: { id: { eq: contractAddress } },
                    result: 'boc'
                  });
                  paramsOfEncodeMessage = {
                    abi: abi,
                    address: contractAddress,
                    call_set: {
                      function_name: 'getWriterA',
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

                  let response_getWriterA = await client.tvm.run_tvm(paramsOfRunTvm);
                  console.log('Contract reacted to your getWriterA:', response_getWriterA.decoded.output);

              resultQC = await client.net.query_collection({
                    collection: 'accounts',
                    filter: { id: { eq: contractAddress } },
                    result: 'boc'
                  });
                  paramsOfEncodeMessage = {
                    abi: abi,
                    address: contractAddress,
                    call_set: {
                      function_name: 'getWriterB',
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

                  let response_getWriterB = await client.tvm.run_tvm(paramsOfRunTvm);
                  console.log('Contract reacted to your getWriterB:', response_getWriterB.decoded.output);

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
