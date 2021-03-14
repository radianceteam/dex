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
        Menu.select("", "Welcome to Radiance DEX-Swapper debot interface.", [
            MenuItem("Log into your existing client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Quit", "", 0)
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
        Terminal.print(tvm.functionId(mainmenu), "Client data smart-contract complete...\nPlease refresh and get your client data and copy your client wallet address, fill it up with TONs (the more the better!)");
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
            Terminal.print(0, format("Wallet address: {}\nToken name: {}\nToken balance: {} nanotokens\n................", cur, nam, bal));
        }

        (uint64 dec, uint64 float) = tokens(m_clientBalanceTon);
        Terminal.print(tvm.functionId(mainmenu), format("Your client address is: {}\nClient balance {}.{} TONS", m_Client, dec, float));
    }

    function mainmenu() public {
        Menu.select("", "Main menu", [
            MenuItem("Log into a different client wallet", "", tvm.functionId(selectWallet)),
            MenuItem("Refresh client wallet data", "", tvm.functionId(getClientDataPRE)),
            MenuItem("Display client wallet data", "", tvm.functionId(setDataForView)),
            MenuItem("Swap tokens", "", tvm.functionId(testView)),
            MenuItem("Connect to a new token pair", "", tvm.functionId(connectToPair_GetPairAddress)),
            MenuItem("Quit", "", 0)
            ]);
    }

/*
    Swap
*/
    function testView(uint32 index) public {
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
                m_menu.push(MenuItem(pairAddrAsStr,"",tvm.functionId(getReserveBalance)));
            }
            m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
            Menu.select("Choose pair for swap:", "",m_menu);
        }
    }
address currentPairAddress;
    function getReserveBalance(uint32 index) public alwaysAccept {
        currentPairAddress = clientPairKeys[index];
        optional(uint256) pubkey;
        IDEXpair(currentPairAddress).getReservesBalance{
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
uint128 fIntB;
uint128 SIntB;


    function setReservesData(uint128 balanceReserveA, uint128 balanceReserveB) public {
        balanceReserveAS = balanceReserveA;
        balanceReserveBS = balanceReserveB;
        if(balanceReserveAS > balanceReserveBS){
            (fIntA,SIntA,tIntA) = getRateDecimals(balanceReserveAS, balanceReserveBS);
            (fIntB,SIntB) = getRate(balanceReserveBS, balanceReserveAS);
        }else if(balanceReserveAS < balanceReserveBS){
            (fIntA,SIntA,tIntA) = getRateDecimals(balanceReserveBS, balanceReserveAS);
            (fIntB,SIntB) = getRate(balanceReserveAS, balanceReserveBS);
        }
        Terminal.print(tvm.functionId(getPairClientWallets), "Fetching pair wallets...");
    }
    function getPairClientWallets() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).getPairClientWallets{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(setWalletsForSwap),
        onErrorId : tvm.functionId(someError)
        }(currentPairAddress);
    }

address adrA;
address adrB;

uint128 fIntA;
uint128 SIntA;
uint128 tIntA;

    function setWalletsForSwap(address clientWalletA, address clientWalletB, address pairReturn) public {
        adrA = clientWalletA;
        adrB = clientWalletB;
        MenuItem[] m_menu;
        Wallet cp = wallets[adrA];
        Wallet cp1 = wallets[adrB];

        Terminal.print(0, format("Current pair address:{}\nReserves {} on pair: {}\nReserves token {} on pair: {}\n.........",currentPairAddress, cp.name, balanceReserveAS, cp1.name, balanceReserveBS));

        if(balanceReserveAS > balanceReserveBS){
            Terminal.print(0, format("For 1 nanotoken {} you will get: ~{}.{}{} of nanotokens {}",cp1.name, fIntA, SIntA, tIntA, cp.name));
            Terminal.print(0, format("For 1 nanotoken {} you will get: ~{}.{} of nanotokens {}",cp.name, fIntB, SIntB, cp1.name));
        }else if(balanceReserveAS < balanceReserveBS){
            Terminal.print(0, format("For 1 nanotoken {} you will get: ~{}.{}{} of nanotokens {}",cp.name, fIntA, SIntA, tIntA, cp1.name));
            Terminal.print(0, format("For 1 nanotoken {} you will get: ~{}.{} of nanotokens {}",cp1.name, fIntB, SIntB, cp.name));
        }else if(balanceReserveAS != 0 && balanceReserveAS == balanceReserveBS){
            Terminal.print(0, "Reserves are equal, current rate 1/1");
        }else{
            Terminal.print(0, "Reserves are zero, y can set any amount of nanotoken, it will set the first rate");
        }

        string tokenWalDataA = format("Wallet address:{}\nToken wallet name: {}\nBalance: {} nanotokens",adrA, cp.name, cp.balanceToken);
        m_menu.push(MenuItem(tokenWalDataA,"",tvm.functionId(setQua)));

        string tokenWalDataB = format("Wallet address:{}\nToken wallet name: {}\nBalance: {} nanotokens",adrB, cp1.name, cp1.balanceToken);
        m_menu.push(MenuItem(tokenWalDataB,"",tvm.functionId(setQua)));

        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(tomainmenu)));
        Menu.select("Choose token wallet for swap:", "",m_menu);
    }

    address tokenForSW;

    function setQua(uint32 index) public {
        index == 0 ? tokenForSW = adrA : tokenForSW = adrB;
        Terminal.inputUint(tvm.functionId(checkSwap), "Set amount, min amount for swap - 350 nanotokens...");
    }
    function resetQua(bool value) public {
        if (value){
            Terminal.inputUint(tvm.functionId(checkSwap), "retry...");
        }else{
            Terminal.print(tvm.functionId(mainmenu), "Back to menu...");
        }
    }
uint128 valSwap;
    function checkSwap(uint256 value) public {
        valSwap = uint128(value);
        Wallet cp = wallets[tokenForSW];
        if(valSwap > cp.balanceToken){
            Terminal.inputBoolean(tvm.functionId(resetQua), "Not enought nanotokens, set another val?");
        }else if(valSwap < 350){
            Terminal.inputBoolean(tvm.functionId(resetQua), "Your value less then 350 tokens, set another val?");
        }else{
            if(adrA == tokenForSW){
                Terminal.print(tvm.functionId(makeAdepositToPair), "Requesting...");
            }else{
                Terminal.print(tvm.functionId(makeBdepositToPair), "Requesting...");
            }
        }
    }

    function makeAdepositToPair() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).makeAdepositToPair{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scMakedepositToPairA),
        onErrorId : tvm.functionId(makeDepSwapErrorA)
        }(currentPairAddress, valSwap);
    }
    function makeDepSwapErrorA(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(makeDepSwapErrorBoolA), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function makeDepSwapErrorBoolA(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(makeAdepositToPair),"Retry...");
        }else{
            mainmenu();
        }
    }
address depAdrA;
    function scMakedepositToPairA(bool makeDepositStatus) public {
        Pair cd = pairs[currentPairAddress];
        depAdrA = cd.depositWalletA;
        Terminal.print(tvm.functionId(checkDepBalA), "Waiting few seconds while deposit will be setted...");
    }

    function checkDepBalA() public alwaysAccept {
        optional(uint256) pubkey;
        ITONTokenWallet(depAdrA).getBalance{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getBalDepositA),
        onErrorId : tvm.functionId(errGetDepositA)
        }();

    }
    function getBalDepositA(uint128 value0) public {
        uint128 bal = value0;
        if(bal >= valSwap){
            Terminal.print(tvm.functionId(SwapRequestA), "Success: deposit B is full\nSwap A request...");
        }else{
            checkDepBalA();
        }
    }
    function errGetDepositA(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(tvm.functionId(checkDepBalA), format("sdkError: {}\nexitCOde:{}\nretry...", sdkError, exitCode));
    }

    function makeBdepositToPair() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).makeBdepositToPair{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(scMakedepositToPairB),
        onErrorId : tvm.functionId(makeDepSwapErrorB)
        }(currentPairAddress, valSwap);
    }

address depAdrB;
    function scMakedepositToPairB(bool makeDepositStatus) public {
        Pair cd = pairs[currentPairAddress];
        depAdrB = cd.depositWalletB;
        Terminal.print(tvm.functionId(checkDepBalB), "Waiting few seconds while deposit B will be setted...");
    }

    function makeDepSwapErrorB(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(makeDepSwapErrorBoolB), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function makeDepSwapErrorBoolB(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(makeBdepositToPair),"Retry...");
        }else{
            mainmenu();
        }
    }
    function checkDepBalB() public alwaysAccept {
        optional(uint256) pubkey;
        ITONTokenWallet(depAdrB).getBalance{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getBalDepositB),
        onErrorId : tvm.functionId(errGetDepositB)
        }();
    }

    function getBalDepositB(uint128 value0) public {
        uint128 bal = value0;
        if(bal >= valSwap){
            Terminal.print(tvm.functionId(SwapRequestB), "Success: deposit B is full\nSwap B request...");
        }else{
            checkDepBalB();
        }
    }
    function errGetDepositB(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(tvm.functionId(checkDepBalB), format("sdkError: {}\nexitCOde:{}\nRetry...", sdkError, exitCode));
    }

    function SwapRequestA() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).processSwapA{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(successSwap),
        onErrorId : tvm.functionId(errSwapA)
        }(currentPairAddress, valSwap);
    }
    function errSwapA(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(SwapRequestAerrBool), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function SwapRequestAerrBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(SwapRequestA),"Retry...");
        }else{
            mainmenu();
        }
    }
    function SwapRequestB() public alwaysAccept view {
        optional(uint256) pubkey;
        IDEXclient(m_Client).processSwapB{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(successSwap),
        onErrorId : tvm.functionId(errSwapB)
        }(currentPairAddress, valSwap);
    }
    function errSwapB(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(SwapRequestBerrBool), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }
    function SwapRequestBerrBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(SwapRequestB),"Retry...");
        }else{
            mainmenu();
    }
    }
    function successSwap(bool processSwapStatus) public {
        Terminal.print(tvm.functionId(mainmenu), "Swap success...");
    }


/*
 connect to pair
*/
    function connectToPair_GetPairAddress(uint32 index) public {
        Terminal.print(0, "Enter pair address:");
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
        Terminal.print(tvm.functionId(getClientData), "Connection success...");
    }
    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(tvm.functionId(mainmenu), "");
    }
    function connectErrorBool(bool value) public {
        if (value){
            Terminal.print(tvm.functionId(connectToPair),"Retry...");
        }else{
            mainmenu();
        }
    }
    function connectError(uint32 sdkError, uint32 exitCode) public {
        Terminal.inputBoolean(tvm.functionId(connectErrorBool), format("sdkError: {}\nexitCOde:{}\nRetry?", sdkError, exitCode));
    }

    //service functions


    function getRateDecimals(uint128 balanceReserveAS1, uint128 balanceReserveBS2)public returns(uint128 fInt, uint128 SInt,uint128 tInt){
        fInt = math.muldiv(balanceReserveAS1, 1, balanceReserveBS2);
        uint128 deiv = (balanceReserveAS1 - balanceReserveBS2)*10;
        SInt = math.muldiv(deiv, 1, balanceReserveBS2);
        uint128 deiv2 = deiv - balanceReserveBS2*SInt;
        tInt = math.muldiv(deiv2, 10, balanceReserveBS2);
    }
    function recurc(uint128 a10,uint128 b10) public returns(uint128 recA){
        recA = a10;
        uint128 recB = b10;
        while(recA < recB){
            recA = recA*10;
        }
        }
    function getRate(uint128 res1, uint128 res2) public returns(uint128 curRate1, uint128 curRate1afterPoint){
        uint128 b10 = res2*100;
        uint128 a10 = res1;
        curRate1 = 0;
        uint128 recursA10 = recurc(a10,b10);
        curRate1afterPoint = math.divc(recursA10, res2);
    }

    function tomainmenu(uint32 index) public {
        Terminal.print(tvm.functionId(mainmenu), "To main menu...");
    }
    function tokens(uint128 nanotokens) private pure returns (uint64, uint64) {
        uint64 decimal = uint64(nanotokens / 1e9);
        uint64 float = uint64(nanotokens - (decimal * 1e9));
        return (decimal, float);
    }

    function getVersion() public override returns (string name, uint24 semver) {
        (name, semver) = ("Radiance DEX-Swapper debot", 1 << 16);
    }

    function fetch() public override returns (Context[] contexts) {}

    function quit() public override {}
}
