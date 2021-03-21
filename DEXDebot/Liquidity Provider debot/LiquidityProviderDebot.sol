pragma ton-solidity >=0.36.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./Debot.sol";
import "./Terminal.sol";
import "./AddressInput.sol";
import "./Sdk.sol";
import "./Menu.sol";

interface ITONTokenWallet {
    function getName() external functionID(0x000000011) returns (bytes value0);
    function getBalance() external functionID(0x00000014) returns (uint128 value0);
    function getRootAddress() external functionID(0x000000016) returns (address value0);
}
interface IDEXroot {
    function deployNewDexClient(uint256 pubkey) external returns (address newAddress);
}
interface IDEXpair {
   function getReservesBalance() external returns (uint128 balanceReserveA, uint128 balanceReserveB);
}
interface IDEXclient {
    function getPair(address value0) external returns (address pairRootA, address pairReserveA, address clientDepositA, uint128 clientAllowanceA, address pairRootB, address pairReserveB, address clientDepositB, uint128 clientAllowanceB, address curPair);
    function sendTokens3(address from, address to, uint128 tokens) external returns (address transmitter, address receiver, TvmCell body);
    function makeBdepositToPair(address pairAddr, uint128 qtyA) external returns (bool makeDepositStatus);
    function makeAdepositToPair(address pairAddr, uint128 qtyA) external returns (bool makeDepositStatus);
    function returnAllLiquidity(address pairAddr) external returns (bool returnLiquidityStatus);
    function askBalanceToken(address walletAddr) external;
    function getBalanceTokenWallet(address walletAddr) external returns (uint128 walletBal);
    function getAllDataPreparation() external returns (address[] pairKeysR, address[] walletKeysR);
    function getPairClientWallets(address pairAddr) external returns (address clientWalletA, address clientWalletB, address pairReturn);
    function connectPair(address pairAddr) external returns (bool statusConnection);
    function processSwapA(address pairAddr, uint128 qtyA) external returns (bool processSwapStatus);
    function processSwapB(address pairAddr, uint128 qtyB) external returns (bool processSwapStatus);
    function processLiquidity(address pairAddr, uint128 qtyA, uint128 qtyB) external returns (bool processLiquidityStatus);
    function makeABdepositToPair(address pairAddr, uint128 qtyA, uint128 qtyB) external returns (bool makeDepositStatus);
}

contract DEXDebot is Debot {
    uint128 m_clientBalanceTon;
    address m_Client;

    struct Wallet {
        bytes name;
        address root;
        uint128 balanceToken;
    }
    struct Pair {
        bytes name1;
        bytes name2;
        address rootA;
        address pairWalletA;
        address depositWalletA;
        uint128 allowanceA;
        address rootB;
        address pairWalletB;
        address depositWalletB;
        uint128 allowanceB;
    }
    struct PairWallet {
        address wallet1;
        address wallet2;
    }
    mapping(address => PairWallet) PairWallets;

    mapping(address => Pair) pairs;
    address m_DexRootAddress;

    address[] clientPairKeys;

    mapping(address => Wallet) wallets;
    address[] clientWalletKeys;

    modifier alwaysAccept {
        tvm.accept();
        _;
    }
    constructor(string debotAbi, address DexRootAddress) public {
        require(tvm.pubkey() == msg.pubkey(), 100);
        tvm.accept();
        init(0, "", "", address(0));
        m_DexRootAddress = DexRootAddress;
    }
    function setABI(string dabi) public {
        require(tvm.pubkey() == msg.pubkey(), 100);
        tvm.accept();
        m_debotAbi.set(dabi);
        m_options |= DEBOT_ABI;
    }
    function start() public override {
        Menu.select("", "Welcome to Radiance DEX Liquidity Provider debot interface.", [
            MenuItem("Log into your existing client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Exit", "", 0)
            ]);
    }

    /*
        set wallet address
    */
    function selectWallet(uint32 index) public {
        Terminal.print(0, "Enter your client address");
        AddressInput.select(tvm.functionId(setWalletAddress));
    }
    function setWalletAddress(address value) public {
        m_Client = value;
        Terminal.print(tvm.functionId(getClientData), "");
    }
/*
    fetch client data
*/
    function getClientDataPRE(uint32 index) public {
        Terminal.print(tvm.functionId(getClientData), "");
    }
    function getClientData() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).getAllDataPreparation{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setClientData),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function setBalance(uint128 nanotokens) public {
        m_clientBalanceTon = nanotokens;
    }
//get exist pairs and wallets by client
    function setClientData(address[] pairKeysR, address[] walletKeysR) public {
        clientPairKeys = pairKeysR;
        clientWalletKeys = walletKeysR;
        Sdk.getBalance(tvm.functionId(setBalance), m_Client);
        Terminal.print(tvm.functionId(getWalletsData), "Data smart-contract complete...");
    }
//get pairs data

    function getPairsData(address pairAddress) public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).getPair{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setClientPairData),
        onErrorId : tvm.functionId(someError)
        }(pairAddress);
    }
    function setClientPairData(address pairRootA, address pairReserveA, address clientDepositA, uint128 clientAllowanceA, address pairRootB, address pairReserveB, address clientDepositB, uint128 clientAllowanceB, address curPair) public {
        Pair cp = pairs[curPair];
            cp.rootA = pairRootA;
            cp.pairWalletA = pairReserveA;
            cp.depositWalletA = clientDepositA;
            cp.allowanceA = clientAllowanceA;
            cp.rootB = pairRootB;
            cp.pairWalletB = pairReserveB;
            cp.depositWalletB = clientDepositB;
            cp.allowanceB = clientAllowanceB;
            pairs[curPair] = cp;
    }
//fetching name and balance by each client wallet
    function getWalletsData() public {
        for(uint8 i = 0; i < clientWalletKeys.length; i++){
            address curClientWallet = clientWalletKeys[i];
            askNameTokenWallet(curClientWallet);
            askWalletBalance1(curClientWallet);
            askRootAddressTokenWallet(curClientWallet);
        }
        for(uint8 k = 0; k < clientPairKeys.length; k++){
            address curClientPair = clientPairKeys[k];
            getPairsData(curClientPair);
            getPairClientWalletsFunc(curClientPair);
        }
        Terminal.print(tvm.functionId(mainmenu), "Client data smart-contract complete...\nPlease refresh and get your client data");
    }


    function getPairClientWalletsFunc(address cuePair) public alwaysAccept {
        address curPairRes = cuePair;
        optional(uint256) pubkey;
        IDEXclient(m_Client).getPairClientWallets{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setWalletsNameS),
        onErrorId : tvm.functionId(someError)
        }(curPairRes);
    }

    function setWalletsNameS(address clientWalletA, address clientWalletB, address pairReturn) public {
        address adrAX = clientWalletA;
        address adrBX = clientWalletB;
        PairWallet pw = PairWallets[pairReturn];
        pw.wallet1 = adrAX;
        pw.wallet2 = adrBX;
        PairWallets[pairReturn] = pw;
        Pair cx = pairs[pairReturn];
        Wallet cp = wallets[adrAX];
        Wallet cp1 = wallets[adrBX];
        bytes nameP = cp.name;
        bytes nameR = cp1.name;
        cx.name1 = nameP;
        cx.name2 = nameR;
        pairs[pairReturn] = cx;
    }
    function askRootAddressTokenWallet(address waletAddress) public alwaysAccept {
        optional(uint256) pubkey;
        ITONTokenWallet(waletAddress).getRootAddress{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setRootAddress),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function setRootAddress(address value0) public {
        address rootAddress = value0;
        address clientWallet = msg.sender;
        Wallet cp = wallets[clientWallet];
        cp.root = rootAddress;
        wallets[clientWallet] = cp;
    }

    function askNameTokenWallet(address waletAddress) public alwaysAccept {
        optional(uint256) pubkey;
        ITONTokenWallet(waletAddress).getName{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setTokenName),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function setTokenName(bytes value0) public {
        bytes tokenName = value0;
        address clientWallet = msg.sender;
        Wallet cp = wallets[clientWallet];
        cp.name = tokenName;
        wallets[clientWallet] = cp;
    }

    function askWalletBalance1(address waletAddress) public alwaysAccept {
        optional(uint256) pubkey;
        ITONTokenWallet(waletAddress).getBalance{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setTokenBalanceInMenuCB),
        onErrorId : tvm.functionId(someError)
        }();
    }

uint128 bb;
    function setTokenBalanceInMenuCB(uint128 value0) public {
        address answerAddress = msg.sender;
        bb = value0;
        Wallet cp = wallets[answerAddress];
        cp.balanceToken = value0;
        wallets[answerAddress] = cp;
    }
/*
    view client data
*/
    function setDataForView(uint32 index) public {
        for(uint8 i = 0; i < clientWalletKeys.length; i++){
            address cur = clientWalletKeys[i];
            Wallet cp = wallets[cur];
            uint128 bal = cp.balanceToken;
            bytes nam = cp.name;
            Terminal.print(0, format("Wallet address: {}\nToken name: {}\nBalance: {} nanotokens\n................", cur, nam, bal));
        }
        (uint64 dec, uint64 float) = tokens(m_clientBalanceTon);
        Terminal.print(tvm.functionId(mainmenu), format("Your client address is: {}\nClient balance {}.{} TONS", m_Client, dec, float));
    }

    function mainmenu() public {
        Menu.select("", "Main menu", [
            MenuItem("Log into a different client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Refresh client wallet data", "", tvm.functionId(getClientDataPRE)),
            MenuItem("Display client wallet data", "", tvm.functionId(setDataForView)),
//            MenuItem("Send tokens", "", tvm.functionId(sendTokens_chooseWallet)),
            MenuItem("Add Liquidity", "", tvm.functionId(addLiquidityStep1)),
            MenuItem("Return all Liquidity", "", tvm.functionId(returnAllLiquidity_setpair)),
            MenuItem("Connect to a new token pair", "", tvm.functionId(connectToPair_GetPairAddress)),
            MenuItem("Quit", "", 0)
            ]);
    }
//    function sendTokens_chooseWallet(uint32 index) public {
//        if(clientWalletKeys.length == 0){
//            Terminal.print(tvm.functionId(mainmenu), "You have no token wallets...");
//        }else{
//            MenuItem[] m_menu;
//            for (uint i = 0; i < clientWalletKeys.length; i++) {
//                address curAddr = clientWalletKeys[i];
//                Wallet cp = wallets[curAddr];
//                string tokenWalData = format("Wallet address:{}\nToken wallet name: {}\nBalance: {} nanotokens",curAddr, cp.name, cp.balanceToken);
//                m_menu.push(MenuItem(tokenWalData,"",tvm.functionId(setWalletForSend)));
//            }
//            m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
//            Menu.select("Choose wallet for send:", "",m_menu);
//        }
//    }

//address chosenWallet;
//uint128 curWalletTokenBalance128;
//address curWalletRootAddress;
//
//    function setWalletForSend(uint32 index) public {
//        chosenWallet = clientWalletKeys[index];
//        Wallet cp = wallets[chosenWallet];
//        uint256 curValue256 = cp.balanceToken;
//        curWalletTokenBalance128 = uint128(curValue256);
//        curWalletRootAddress = cp.root;
//        Terminal.print(tvm.functionId(setValueForSend), "Your wallet data getted success...");
//    }
//    function setValueForSend() public {
//        Terminal.inputUint(tvm.functionId(checkTokensAmount), "Set amount of nanotokens to send...");
//    }
//uint128 tokensForSend128;
//    function checkTokensAmount(uint256 value) public {
//        uint256 tokForSend256 = value;
//        tokensForSend128 = uint128(tokForSend256);
//        if(tokensForSend128 > curWalletTokenBalance128 || tokensForSend128 == 0){
//            Terminal.inputBoolean(tvm.functionId(resetTokensForSend), "Error: your value more then your balance or zero, reset amount?");
//        }else{
//            Terminal.print(tvm.functionId(sendTokens_inputRecipAddr), "...");
//        }
//    }
//    function sendTokens_inputRecipAddr() public {
//        Terminal.print(0, "Enter address for recipient: ");
//        AddressInput.select(tvm.functionId(sendTokens_checkRoots));
//    }
//
//    function resetTokensForSend(bool value) public {
//        if (value){
//            Terminal.print(tvm.functionId(setValueForSend), "Reset nanotokens for send...");
//        }else{
//            mainmenu();
//        }
//    }
//
//address recipient;
//    function sendTokens_checkRoots(address value) public alwaysAccept {
//        recipient = value;
//        optional(uint256) pubkey;
//        ITONTokenWallet(recipient).getRootAddress{
//        abiVer : 2,
//        extMsg : true,
//        sign : false,
//        pubkey : pubkey,
//        time : uint64(now),
//        expire: 0x123,
//        callbackId : tvm.functionId(getRecipRootAddress),
//        onErrorId : tvm.functionId(errCheckRoot)
//        }();
//    }
//    function errCheckRoot(uint32 sdkError, uint32 exitCode) public {
//        Terminal.inputBoolean(tvm.functionId(resetRecipientAddress), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
//    }
//    function getRecipRootAddress(address value0) public {
//        Terminal.print(0, "Recipient root address getted success...");
//        address recipRootAddress = value0;
//        if (curWalletRootAddress == recipRootAddress){
//            Terminal.print(tvm.functionId(sendTokensRequest), "Send request...");
//        }else{
//            Terminal.inputBoolean(tvm.functionId(resetRecipientAddress), "Tip3 type error, set another address?");
//        }
//    }
//    function resetRecipientAddress(bool value) public {
//        if (value){
//            Terminal.print(tvm.functionId(sendTokens_inputRecipAddr), "Reset recipient address...");
//        }else{
//            mainmenu();
//        }
//    }
//    function sendTokensRequest() public {
//        optional(uint256) pubkey;
//        IDEXclient(m_Client).sendTokens3{
//        abiVer : 2,
//        extMsg : true,
//        sign : true,
//        pubkey : pubkey,
//        time : uint64(now),
//        expire: 0x123,
//        callbackId : tvm.functionId(scSend),
//        onErrorId : tvm.functionId(errSendTokens)
//        }(chosenWallet, recipient, tokensForSend128);
//    }
//    function scSend(address transmitter, address receiver, TvmCell body) public {
//        Terminal.print(tvm.functionId(mainmenu), format("..\nSuccess\n..\nSend from: {}\nRecipient: {}\nAmount sended: {} nanotokens", chosenWallet, recipient, tokensForSend128));
//    }
//    function errSendTokens(uint32 sdkError, uint32 exitCode) public {
//        Terminal.inputBoolean(tvm.functionId(retrySend), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
//    }
//    function retrySend(bool value) public {
//        if (value){
//            Terminal.print(tvm.functionId(sendTokensRequest), "retry#1...");
//        }else{
//            mainmenu();
//        }
//    }

    /*
        return liquidity
    */
    function returnAllLiquidity_setpair(uint32 index) public {
        if(clientPairKeys.length == 0){
            Terminal.print(tvm.functionId(mainmenu), "You have no token pairs, please connect to some...");
        }else{
            MenuItem[] m_menu;
            for (uint i = 0; i < clientPairKeys.length; i++) {
                address curAddr = clientPairKeys[i];
                Pair ct = pairs[curAddr];
                bytes n1 = ct.name1;
                bytes n2 = ct.name2;
                string pairAddrAsStr = format("Pair tokens name: {}-{}\nPair address: {} ", n1, n2, curAddr);
                m_menu.push(MenuItem(pairAddrAsStr,"",tvm.functionId(returnAllLiquidity_getpair)));
            }
            m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
            Menu.select("Choose pair address:", "",m_menu);
        }
    }
address m_pairReturnLiq;
    function returnAllLiquidity_getpair(uint32 index) public {
        m_pairReturnLiq = clientPairKeys[index];
        Terminal.print(tvm.functionId(returnAllLiquidity), "");
    }
    function returnAllLiquidity() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).returnAllLiquidity{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scReturn),
        onErrorId : tvm.functionId(erReturn)
        }(m_pairReturnLiq);
    }
    function scReturn(bool returnLiquidityStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "`Liquidity returned success, check balance");
    }
    function erReturn(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(erReturnBool), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
    }
    function erReturnBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(returnAllLiquidity),"Retry return liquidity...");
        }else{
            Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
        }
    }
    /*
       Add liquidity
    */
    function addLiquidityStep1(uint32 index) public {
            if(clientPairKeys.length == 0){
                Terminal.print(tvm.functionId(mainmenu), "You have no token pairs, please connect to some...");
            }else{
                MenuItem[] m_menu;
                    for (uint i = 0; i < clientPairKeys.length; i++) {
                    address curAddr = clientPairKeys[i];
                    Pair ct = pairs[curAddr];
                      bytes n1 = ct.name1;
                      bytes n2 = ct.name2;
                    string pairAddrAsStr = format("Pair tokens name: {}-{}\nPair address: {}", n1, n2, curAddr);
                    m_menu.push(MenuItem(pairAddrAsStr,"",tvm.functionId(addLiquidityStep2)));
                }
                m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
                Menu.select("Choose pair address:", "",m_menu);
            }

    }
address m_liquidPair;

    function addLiquidityStep2(uint32 index) public {
        m_liquidPair = clientPairKeys[index];

        optional(uint256) pubkey;
        IDEXpair(m_liquidPair).getReservesBalance{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setReservesData),
        onErrorId : tvm.functionId(someError)
        }();
    }

uint128 balanceReserveAS;
uint128 balanceReserveBS;
bytes nF;
bytes nS;
    function setReservesData(uint128 balanceReserveA, uint128 balanceReserveB) public {
        balanceReserveAS = balanceReserveA;
        balanceReserveBS = balanceReserveB;
        Pair ct = pairs[m_liquidPair];
        bytes nF = ct.name1;
        bytes nS = ct.name2;
        Terminal.print(0, format("Reserve balance of {}: {} tokens\nReserve balance of {}: {} nanotokens", nF, balanceReserveAS, nS, balanceReserveBS));
        Terminal.print(tvm.functionId(setvalueToken1), "*Note*\n- you should add your nanotokens with proportion based on reserve balances\n- smaller nanotoken value in rate can not be less then 1\nexample: if rate tokenA/tokenB - 1/10, minimal values must be 1 for nanotoken A, 10 for B");
    }

    uint128 balCurrA;
    function setvalueToken1() public {
        PairWallet pw = PairWallets[m_liquidPair];
        address currA = pw.wallet1;
        Wallet wt = wallets[currA];
        balCurrA = wt.balanceToken;
//        bytes nameCurrA = wt.name;
        Terminal.print(0, format("Token name: {}\nBalance: {}", nF, balCurrA));

        Terminal.inputUint(tvm.functionId(addLiquidityStep3), format("Enter {} value:", nF));
    }
    uint128 m_liquidValA;

    function addLiquidityStep3(uint256 value) public {
        m_liquidValA = uint128(value);
        if(m_liquidValA < 1){
            Terminal.print(tvm.functionId(setvalueToken1), "Must be more then 1 nanotoken...retry");
        }else if(m_liquidValA > balCurrA){
            Terminal.print(tvm.functionId(setvalueToken1), "Not enought balance...retry");
        }else{
            Terminal.print(tvm.functionId(valueBinput), "Checking...");
        }
    }
uint128 balCurrB;

    function valueBinput() public {
        PairWallet pw = PairWallets[m_liquidPair];
        address currB = pw.wallet2;
        Wallet wt = wallets[currB];
        balCurrB = wt.balanceToken;
//        bytes nameCurB = wt.name;
        Terminal.print(0, format("Token name: {}\nBalance: {}", nS, balCurrB));
        Terminal.inputUint(tvm.functionId(addLiquidityStep4SHOW), format("Enter {} value:", nS));
    }

uint128 m_liquidValB;

    function addLiquidityStep4SHOW(uint256 value) public {
        m_liquidValB = uint128(value);
        if(m_liquidValB < 1){
            Terminal.print(tvm.functionId(valueBinput), "Must be more then 1 nanotoken...retry");
        }else if(m_liquidValB > balCurrB){
            Terminal.print(tvm.functionId(valueBinput), "Not enought balance...retry");
        }else{
            Terminal.print(tvm.functionId(addLiquidityStep4), format("Pair address: {}\nAmount A: {}\nAmount B: {}", m_liquidPair, m_liquidValA, m_liquidValB));
        }
    }
    //set deposit to a client deposit wallets
    function addLiquidityStep4() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).makeABdepositToPair{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(addDepositABSucc),
        onErrorId : tvm.functionId(addDepositError)
        }(m_liquidPair, m_liquidValA, m_liquidValB);
    }
    function addDepositABSucc(bool makeDepositStatus) public {
        Terminal.print(tvm.functionId(addLiquidityStep5), "Success, please wait few seconds while deposit wallet will get tokens (~10-15 secs)");
    }
    function addDepositError(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(AddDepositErrorBool), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
    }
    function AddDepositErrorBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(addLiquidityStep4),"Retry...");
        }else{
            Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
        }
    }
    function addLiquidityStep5() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).processLiquidity{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(addLiquiditySucess),
        onErrorId : tvm.functionId(addLiquidityError)
        }(m_liquidPair, m_liquidValA, m_liquidValB);
    }

    function addLiquiditySucess(bool processLiquidityStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "Adding liquidity complete...");
    }
    function addLiquidityBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(addLiquidityStep5),"Retry...");
        }else{
            Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
        }
    }
    function addLiquidityError(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(addLiquidityBool), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
    }

/*
 connect to pair
*/
    function connectToPair_GetPairAddress(uint32 index) public {
        Terminal.print(0, "Enter DEXPair address:");
        AddressInput.select(tvm.functionId(connectToPair_AddressExistCheck));
    }
address curPairAdr;
    function connectToPair_AddressExistCheck(address value) public {
        curPairAdr = value;
        if(!pairs.exists(curPairAdr)){
            Terminal.print(tvm.functionId(connectToPair), "Starting connection...");
        }else{
            Terminal.print(tvm.functionId(mainmenu), "This pair already exist...");
        }
    }
    function connectToPair() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).connectPair{
        abiVer : 2,
        extMsg : true,
        sign: true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setDataFromConnectFunc),
        onErrorId : tvm.functionId(connectError)
        }(curPairAdr);
    }
    function setDataFromConnectFunc(bool statusConnection) public {
        Terminal.print(tvm.functionId(getClientData), "Connection complete...");
    }
    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
    }
    function connectErrorBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(connectToPair),"Retry...");
        }else{
            mainmenu();
        }
    }
    function connectError(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(connectErrorBool), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
    }

    //service functions
    function tomainmenu(uint32 index) public {
        Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
    }
    function tokens(uint128 nanotokens) private pure returns (uint64, uint64) {
        uint64 decimal = uint64(nanotokens / 1e9);
        uint64 float = uint64(nanotokens - (decimal * 1e9));
        return (decimal, float);
    }

    function getVersion() public override returns (string name, uint24 semver) {
        (name, semver) = ("Radiance DEX Liquidity Provider debot", 1 << 16);
    }

    function fetch() public override returns (Context[] contexts) {}

    function quit() public override {}
}
