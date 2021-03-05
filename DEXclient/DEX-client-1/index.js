'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('../DEXclientContract.js'); //specify the path to the .js file
const fs = require('fs');
const converter = require('hex2dec');
const pathJson = './DEXclientContract.json';
const pathJsonPair = '../DEXpairContract.json';





async function main(client, req, res) {
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    // const contractAddress = contractData.address;
    const contractAddress = req.params.addresscontract;
    const contractKeys = contractData.keys;
    const abi = {
      type: 'Contract',
      value: contract.package.abi
    };
    const pairJson = fs.readFileSync(pathJsonPair,{encoding: "utf8"});
    const pairData = JSON.parse(pairJson);
    // const pairAddress = pairData.address;
    const pairAddress = req.params.addresspair;

      let resultQC = await client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: contractAddress } },
            result: 'boc'
          });
          let  paramsOfEncodeMessage = {
            abi: abi,
            address: contractAddress,
            call_set: {
              function_name: 'showContractAddress',
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
          console.log('Contract reacted to your showContractAdress:', response.decoded.output);
          

          resultQC = await client.net.query_collection({
                collection: 'accounts',
                filter: { id: { eq: contractAddress } },
                result: 'boc'
              });
              paramsOfEncodeMessage = {
                abi: abi,
                address: contractAddress,
                call_set: {
                  function_name: 'getPair',
                  input: {
                    value0:pairAddress,
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
              console.log('Contract reacted to your getPair:', response.decoded.output);
              res.send(response.decoded.output);


              resultQC = await client.net.query_collection({
                    collection: 'accounts',
                    filter: { id: { eq: contractAddress } },
                    result: 'boc'
                  });
                  paramsOfEncodeMessage = {
                    abi: abi,
                    address: contractAddress,
                    call_set: {
                      function_name: 'getPairClientWallets',
                      input: {
                        pairAddr:pairAddress,
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
                  console.log('Contract reacted to your getPairWallets:', response.decoded.output);
                  // res.send(response.decoded.output);

                  resultQC = await client.net.query_collection({
                        collection: 'accounts',
                        filter: { id: { eq: contractAddress } },
                        result: 'boc'
                      });
                      paramsOfEncodeMessage = {
                        abi: abi,
                        address: contractAddress,
                        call_set: {
                          function_name: 'getPairWalletsBalance',
                          input: {
                            pairAddr:pairAddress,
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
                      console.log('Contract reacted to your getPairWalletsBalance:', response.decoded.output);
                      // return response.decoded.output;
                      // res.send(response.decoded.output);



    }catch(err){
      console.log(err);
    }
  }

  // (
    async function a1 (req, res) {
    try {
      TonClient.useBinaryLibrary(libNode);
      const client = new TonClient({
        network: {
          server_address: 'net.ton.dev'
        }
      });
      console.log("Hello net.ton.dev!");
      await main(client, req, res);
      
      // process.exit(0);
    } catch (error) {
      console.error(error);
    }
  }
  // )();

  app.get('/getdexpair/:addresscontract/:addresspair', async (req, res ) => {
    // try {      
      
        // (i) => {
           a1(req,res);
          // const fddsf = a1()
          // }, 
        // (err2) => {          
          // console.error(err2 + {"result":"false","data":"Wallet doesent create"});
          // res.send(a1());
                   
    // } catch (error) {        
    //     // console.error(error + {"result":"false","data":"Wallet doesent create"});
    //     res.send("err");
    // }  
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  