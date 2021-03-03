pragma ton -solidity >= 0.36.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
import "DEXpair.sol";

interface IDEXrootChecker {
    function checkMsgSenderContractType(uint256 wallet_public_key_, address requestingAddress) external returns (bool status);
}

contract DEXrootPair {
    TvmCell m_DEXpairCodeSetted;

    address m_dexPairAddress;
    address DexRootChecker;
    address m_client;

    address m_root0;
    address m_root1;
    uint256 m_clientPubkey;
    address newAddress;

    string m_error;

    modifier alwaysAccept {
        tvm.accept();
        _;
    }

    constructor(TvmCell dexPairCode, address dexRootChecker) public {
        tvm.accept();
        m_DEXpairCodeSetted = dexPairCode;
        DexRootChecker = dexRootChecker;
    }

    function deployNewDexPair(uint256 clientPubkey, address root0, address root1) public alwaysAccept returns(bool status){
        m_root0 = root0;
        m_root1 = root1;
        m_clientPubkey = clientPubkey;
        m_client = msg.sender;
//TODO check deploy cost
        status = false;
        TvmCell body = tvm.encodeBody(IDEXrootChecker(DexRootChecker).checkMsgSenderContractType, setStatus, clientPubkey, m_client);
        DexRootChecker.transfer({value:10000000, body:body});
        status = true;
    }

    function setStatus(bool status) public alwaysAccept {

//TODO check created pairs => if exists return pair exists error
        if (status) {
            uint128 grams = 1000000000;
            uint256 pubk = m_clientPubkey;

            m_dexPairAddress = new DEXpair{
            value : grams,
            code : m_DEXpairCodeSetted,
            pubkey : pubk
            }(m_root0, m_root1);

            newAddress = m_dexPairAddress;
            m_error = "Success created";
        } else {
            newAddress = m_client;
            m_error = "Somithing goes wrong";
        }
    }

    function getYourAddress() public alwaysAccept returns (address newAddr, string error){
        newAddr = newAddress;
        error = m_error;
    }

}


