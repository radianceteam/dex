pragma ton-solidity >=0.36.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "../Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../Sdk.sol";
import "../Menu.sol";

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
    function createNewEmptyWallet(address rootAddr) external returns (bool createStatus);
    function wrapTON(uint128 qtyTONgrams) external returns (bool processWrapStatus);
    function unwrapTON() external returns (bool processUnwrapStatus);
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
    address constant ROOT_WRAPPED_TON = address(0xff6da7ac48c8d5cbb9a05013540b52709c04f546ced81bcf0553a027cb04c210);
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
    bool statusTONwallet = false;
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
        Menu.select("", "Welcome to Radiance DEX-Wrapper debot interface. Here you can create a new multi-TIP3 account or log into your existing account.", [
            MenuItem("Log into your existing client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Create a new DEX&TIP-3 client wallet", "", tvm.functionId(deployDexClient)),
            MenuItem("Exit", "", 0)
            ]);
    }
/*
    deploy new client
*/
    function deployDexClient(uint32 index) public {
        Terminal.inputUint(tvm.functionId(deployDexClientRequest), "Generate a new pubkey & set in 0x format");
    }
    function deployDexClientRequest(uint256 value) public alwaysAccept view {
        uint256 val = value;
        optional(uint256) pubkey;
        IDEXroot(m_DexRootAddress).deployNewDexClient{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setWalletAddressAfterDeploy),
        onErrorId : tvm.functionId(deployError)
        }(val);
    }
    function deployError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        start();
    }

    function setWalletAddressAfterDeploy(address newAddress) public {
        m_Client = newAddress;

//        Terminal.print(tvm.functionId(mainmenu), "Client address smart-contract complete...");
        checkDeployedWallet();
    }
    function checkDeployedWallet() public {
        Sdk.getAccountType(tvm.functionId(checkWalletExist), m_Client);
    }

    function checkWalletExist(int8 acc_type) public {
        if (acc_type == -1 || acc_type == 0 || acc_type == 2)  {
            checkDeployedWallet();
        }else{
            mainmenu();
        }

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

    function createWTONwallet(uint32 index) public {
        if(statusTONwallet){
            Terminal.print(tvm.functionId(mainmenu), "You already have WTON wallet...");
        }else{
        createWTONwallet1();
        }
    }

    function createWTONwallet1() public {
            optional(uint256) pubkey;
            IDEXclient(m_Client).createNewEmptyWallet{
            abiVer : 2,
            extMsg : true,
            sign : true,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(scCreareTonW),
            onErrorId : tvm.functionId(errCreareTonW)
            }(ROOT_WRAPPED_TON);
    }
    function scCreareTonW(bool createStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "Success create WTON wallet");
        bool statusTONwallet = true;
    }
    function errCreareTonW(uint32 sdkError, uint32 exitCode) public {
        createWTONwallet1();
    }

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
            Terminal.print(0, format("Wallet address: {}\nToken name: {}\nToken balance: {}\n................", cur, nam, bal));
        }
        (uint64 dec, uint64 float) = tokens(m_clientBalanceTon);
        Terminal.print(tvm.functionId(mainmenu), format("Your client address is: {}\nClient balance: {}.{} TONS", m_Client, dec, float));
    }

    function mainmenu() public {
        Menu.select("", "Main menu", [
            MenuItem("Log into a different client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Refresh client wallet data", "", tvm.functionId(getClientDataPRE)),
            MenuItem("Display client wallet data", "", tvm.functionId(setDataForView)),
            MenuItem("Send tokens", "", tvm.functionId(sendTokens_chooseWallet)),
            MenuItem("Create WrappedTON wallet", "", tvm.functionId(createWTONwallet)),
            MenuItem("Wrap tons", "", tvm.functionId(wrapTonsStep1)),
            MenuItem("Unwrap all tons", "", tvm.functionId(unwrapTON1)),
            MenuItem("Connect to a new token pair", "", tvm.functionId(connectToPair_GetPairAddress)),
            MenuItem("Quit", "", 0)
            ]);
    }

    function unwrapTON1(uint32 index) public {
        Terminal.inputBoolean(tvm.functionId(retryWrapTons), "Are you sure?");
    }
    function unwrapTON() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).unwrapTON{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scUnwrapTON),
        onErrorId : tvm.functionId(errUnwrapTON)
        }();
    }
    function scUnwrapTON(bool processWrapStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "Success, check wrappedTON wallet balance");
    }
    function errUnwrapTON(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(retryWrapTons), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function retryWrapTons(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(unwrapTON), "");
        }else{
            mainmenu();
        }
    }
/*
    Wrap tons
*/
    function wrapTonsStep1(uint32 index) public {
        Terminal.inputUint(tvm.functionId(wrapTonsStep2), "Set amount of nanotokens to wrap...");
    }
    function wrapTonsStep2(uint256 value) public {
        uint128 tonsFOrWrap = uint128(value);
        optional(uint256) pubkey;
        IDEXclient(m_Client).wrapTON{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scWrap),
        onErrorId : tvm.functionId(errWrap)
        }(tonsFOrWrap);
    }
    function scWrap(bool processWrapStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "Success, check wrappedTON wallet balance");
    }
    function errWrap(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(retryWrap), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function retryWrap(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(wrapTonsStep2), "Retry...");
        }else{
            mainmenu();
        }
    }
    /*
        Send tokens
    */
    function sendTokens_chooseWallet(uint32 index) public {
        if(clientWalletKeys.length == 0){
            Terminal.print(tvm.functionId(mainmenu), "You have no token wallets...");
        }else{
            MenuItem[] m_menu;
            for (uint i = 0; i < clientWalletKeys.length; i++) {
                address curAddr = clientWalletKeys[i];
                Wallet cp = wallets[curAddr];
                string tokenWalData = format("Wallet address:{}\nToken wallet name: {}\nBalance: {} nanotokens",curAddr, cp.name, cp.balanceToken);
                m_menu.push(MenuItem(tokenWalData,"",tvm.functionId(setWalletForSend)));
            }
            m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
            Menu.select("Choose wallet for send:", "",m_menu);
        }
    }
address chosenWallet;
uint128 curWalletTokenBalance128;
address curWalletRootAddress;

    function setWalletForSend(uint32 index) public {
        chosenWallet = clientWalletKeys[index];
        Wallet cp = wallets[chosenWallet];
        uint256 curValue256 = cp.balanceToken;
        curWalletTokenBalance128 = uint128(curValue256);
        curWalletRootAddress = cp.root;
        Terminal.print(tvm.functionId(setValueForSend), "Your wallet data getted success...");
    }
    function setValueForSend() public {
        Terminal.inputUint(tvm.functionId(checkTokensAmount), "Set amount of nanotokens to send...");
    }
uint128 tokensForSend128;
    function checkTokensAmount(uint256 value) public {
        uint256 tokForSend256 = value;
        tokensForSend128 = uint128(tokForSend256);
        if(tokensForSend128 > curWalletTokenBalance128 || tokensForSend128 == 0){
            Terminal.inputBoolean(tvm.functionId(resetTokensForSend), "Error: your value more then your balance or zero, reset amount?");
        }else{
            Terminal.print(tvm.functionId(sendTokens_inputRecipAddr), "...");
        }
    }
    function sendTokens_inputRecipAddr() public {
        Terminal.print(0, "Enter address for recipient:");
        AddressInput.select(tvm.functionId(sendTokens_checkRoots));
    }

    function resetTokensForSend(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(setValueForSend), "Retry...");
        }else{
            mainmenu();
        }
    }

address recipient;
    function sendTokens_checkRoots(address value) public alwaysAccept {
        recipient = value;
        optional(uint256) pubkey;
        ITONTokenWallet(recipient).getRootAddress{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getRecipRootAddress),
        onErrorId : tvm.functionId(errCheckRoot)
        }();
    }
    function errCheckRoot(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(resetRecipientAddress), format("sdkError: {}\nexitCOde:{}\nSome error...reset?", sdkError, exitCode));
    }
    function getRecipRootAddress(address value0) public {
        Terminal.print(0, "Recipient root address getted success...");
        address recipRootAddress = value0;
        if (curWalletRootAddress == recipRootAddress){
            Terminal.print(tvm.functionId(sendTokensRequest), "Send request...");
        }else{
            Terminal.inputBoolean(tvm.functionId(resetRecipientAddress), "Wrong TIP-3 root. Retry?");
        }
    }
    function resetRecipientAddress(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(sendTokens_inputRecipAddr), "Reset recipient address...");
        }else{
            mainmenu();
        }
    }
    function sendTokensRequest() public {
        optional(uint256) pubkey;
        IDEXclient(m_Client).sendTokens3{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scSend),
        onErrorId : tvm.functionId(errSendTokens)
        }(chosenWallet, recipient, tokensForSend128);
    }
    function scSend(address transmitter, address receiver, TvmCell body) public {
        Terminal.print(tvm.functionId(mainmenu), format("...Success...\nSend from: {}\nRecipient: {}\nAmount sended: {} nanotokens", chosenWallet, recipient, tokensForSend128));
    }
    function errSendTokens(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(retrySend), format("sdkError: {}\nexitCOde:{}\nSome error...retry?", sdkError, exitCode));
    }
    function retrySend(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(sendTokensRequest), "Retry...");
        }else{
            mainmenu();
        }
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
        (name, semver) = ("Radiance DEX-Wrapper debot", 1 << 16);
    }

    function fetch() public override returns (Context[] contexts) {}

    function quit() public override {}
}
