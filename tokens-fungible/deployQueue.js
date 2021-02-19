const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./QueueContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const fs = require('fs');
const pathJson = './QueueContract.json';
const pathGiverJson = './GiverContractNTD.json';
const giver = require('./GiverContract.js');
const giverabi = giver.package.abi;

async function main(client) {
  const abi = {
    type: 'Contract',
    value: contract.package.abi
  }
  const contractKeys = await client.crypto.generate_random_sign_keys();

  const deployOptions = {
    abi,
    deploy_set: {
      tvc: contract.package.imageBase64,
      initial_data: {}
    },
    call_set: {
      function_name: 'constructor',
      input: {},
    },
    signer: {
      type: 'Keys',
      keys: contractKeys
    }
  }

  const { address } = await client.abi.encode_message(deployOptions);
  console.log(`Future address of the contract will be: ${address}`);

  let contractJson = JSON.stringify({address:address, keys:contractKeys});
  // fs.writeFileSync( pathJson, contractJson,{flag:'a+'});   //'a+' is append mode
  fs.writeFileSync( pathJson, contractJson,{flag:'w'});
  console.log("Future address of the contract  and keys written successfully to:", pathJson);

  const giverJson = fs.readFileSync(pathGiverJson,{encoding: "utf8"});
  const giverData = JSON.parse(giverJson);
  const giverAddress = giverData.address;
  const giverKeys = giverData.keys;
  const getFromGiver = {
    send_events: false,
    message_encode_params: {
      address: giverAddress,
      abi: {
        type: 'Contract',
        value: giverabi,
      },
      call_set: {
        function_name: 'sendTransaction',
        input: {
          dest: address,
          value: 5000000000,
          bounce: false,
        }
      },
      signer: {
        type: 'Keys',
        keys: giverKeys }
      }
    }

    let response = await client.processing.process_message(getFromGiver);
    console.log('5 Tons were transfered from giver to: ', address,', tx id: ', response.transaction.id);

    await client.processing.process_message({
      send_events: false,
      message_encode_params: deployOptions
    });

    console.log(`Contract was deployed at address: ${address}`);

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
