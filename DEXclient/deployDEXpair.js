const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXpairContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const fs = require('fs');
const pathJson = './DEXpairContract.json';
const pathGiverJson = './GiverContractNTD.json';
const giver = require('./GiverContract.js');
const giverabi = giver.package.abi;
const rootTokenA = "0:4f3c1b7a7eda40b7ae2de8033f119f18bde059ee3e2e367858845316340dfc97";
const rootTokenB = "0:bfd9c9f619b11ce1f3f9520af60dd64a5d4773116afab5e4fcd177208a9c7358";

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
      input: {
        root0:rootTokenA,
        root1:rootTokenB,
      },
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
          value: 10000000000,
          bounce: false,
        }
      },
      signer: {
        type: 'Keys',
        keys: giverKeys }
      }
    }

    let response = await client.processing.process_message(getFromGiver);
    console.log('10 Tons were transfered from giver to: ', address,', tx id: ', response.transaction.id);

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
      console.log("Hello net.ton.dev!");
      await main(client);
      process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();
