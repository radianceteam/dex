const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./TONTokenWalletDebotContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const fs = require('fs');
const pathJson = './TONTokenWalletDebotContract.json';
const pathGiverJson = './GiverContractNTD.json';
const giver = require('./GiverContract.js');
const giverabi = giver.package.abi;
const hex = require('ascii-hex');
const converter = require('hex2dec');
// let debotAbi   = process.env.TTW_DEBOT_ABI;
// let targetAbi = process.env.TTW_ABI;
// let targetAddress = "0:a39e6dd8bb49579bd750cde0ddb47750e17b29d01ce1034e98a882858b086b44";


// console.log(debotAbi);
// console.log(targetAbi);

function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

async function main(client) {



  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const abi = {
      type: 'Contract',
      value: contract.package.abi
    }

    const deployOptions = {
      abi,
      deploy_set: {
        tvc: contract.package.imageBase64,
        initial_data: {}
      },
      call_set: {
        function_name: 'constructor',
        input: {
          // options: 7,
          // debotAbi: debotAbi,
          // targetAbi: targetAbi,
          // targetAddr: targetAddress,
        },
      },
      signer: {
        type: 'Keys',
        keys: contractKeys
      }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);


      await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

      console.log(`Contract was deployed at address: ${address}`);
      console.log("Contract was deployed at address: ",contractAddress);

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
      console.log("Hello net.ton.dev TON!");
      await main(client);
      process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();
