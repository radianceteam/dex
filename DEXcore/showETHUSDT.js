const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./DEXclientContract.js'); //specify the path to the .js file
const paircontract = require('./DEXpairContract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './DEXclientContract.json';
// const pathJsonPair = './DEXpairContractTONxUSDT.json';
// const pathJsonPair = './DEXpairContractTONxBTC.json';
// const pathJsonPair = './DEXpairContractTONxETH.json';
// const pathJsonPair = './DEXpairContractBTCxUSDT.json';
const pathJsonPair = './DEXpairContractETHxUSDT.json';
const pathTONTokenWalletJson = './TONTokenWallet.abi.json';

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
    const pairabi = {
      type: 'Contract',
      value: paircontract.package.abi
    };
    const walletJson = fs.readFileSync(pathTONTokenWalletJson,{encoding: "utf8"});
    const walletData = JSON.parse(walletJson);
    const walletabi = {
      type: 'Contract',
      value: walletData
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
    let clientDepositA = response.decoded.output.clientDepositA;
    let clientDepositB = response.decoded.output.clientDepositB;
    let pairReserveA = response.decoded.output.pairReserveA;
    let pairReserveB = response.decoded.output.pairReserveB;

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: clientDepositA } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: clientDepositA,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for clientDepositA', response.decoded.output);

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: clientDepositB } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: clientDepositB,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for clientDepositB', response.decoded.output);

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: pairReserveA } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: pairReserveA,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for pairReserveA', response.decoded.output);

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: pairReserveB } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: pairReserveB,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for pairReserveB', response.decoded.output);

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: pairAddress } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: pairabi,
      address: pairAddress,
      call_set: {
        function_name: 'getReservesBalance',
        input: {}
      },
      signer: { type: 'None' },
    };

    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: pairabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getReservesBalance', response.decoded.output);
    let reserveA = (response.decoded.output.balanceReserveA > 0)?response.decoded.output.balanceReserveA:1;
    let reserveB = (response.decoded.output.balanceReserveB > 0)?response.decoded.output.balanceReserveB:1;
    console.log('Current pair rate: 1 tokenA =', Math.fround(reserveB/reserveA),' tokenB');
    console.log('Current pair rate: 1 tokenB =', Math.fround(reserveA/reserveB),' tokenA');


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
    let walletA = response.decoded.output.walletA;
    let walletB = response.decoded.output.walletB;


    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: walletA } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: walletA,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for walletA', response.decoded.output);

    resultQC = await client.net.query_collection({
      collection: 'accounts',
      filter: { id: { eq: walletB } },
      result: 'boc'
    });
    paramsOfEncodeMessage = {
      abi: walletabi,
      address: walletB,
      call_set: {
        function_name: 'getBalance',
        input: {}
      },
      signer: { type: 'None' },
    };
    resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
    paramsOfRunTvm = {
      message: resultEM.message,
      account: resultQC.result[0].boc,
      abi: walletabi,
    };

    response = await client.tvm.run_tvm(paramsOfRunTvm);
    console.log('Contract reacted to your getBalance for walletB', response.decoded.output);


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
