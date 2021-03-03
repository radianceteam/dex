pragma ton-solidity >= 0.36.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
import "DEXclient.sol"; //specify path

contract DEXrootChecker {
    TvmCell m_DEXclientCodeSetted;

    address checkedDEXclient;

    modifier alwaysAccept {
        tvm.accept();
        _;
    }

    constructor(TvmCell dexClientCode) public {
        tvm.accept();
        m_DEXclientCodeSetted = dexClientCode;
    }

    function checkMsgSenderContractType(uint256 wallet_public_key_, address requestingAddress) public alwaysAccept returns (bool status)  {
        uint256 pub = wallet_public_key_;
        TvmCell code = m_DEXclientCodeSetted;

        TvmCell stateInit = tvm.buildStateInit({
            contr: DEXclient,
            varInit: {},
            pubkey: pub,
            code: code
        });

        checkedDEXclient = address.makeAddrStd(0, tvm.hash(stateInit));
        if (checkedDEXclient != requestingAddress) {
            status = false;
        } else{
            status = true;
        }

    }

    function getAddress () public view returns(TvmCell pairCode, address checkedAddress){
        checkedAddress = checkedDEXclient;
        pairCode = m_DEXclientCodeSetted;
    }
}
