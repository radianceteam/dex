pragma solidity >=0.6.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "Debot.sol";

interface Storage {
  function storeValue(uint256) external;
  function getValue() external returns (uint256);
}

contract StorageDebot is Debot {

  uint8 constant STATE_GET_TARGET_ADDRESS  = 1;
  uint8 constant STATE_SET_TARGET_ADDRESS  = 2;
  uint8 constant STATE_GET_TARGET_ADDRESS_TONS_BALANCE  = 3;
  uint8 constant STATE_GET_TARGET_ADDRESS_UINT_NUMBER  = 4;
  uint8 constant STATE_SET_TARGET_ADDRESS_UINT_NUMBER  = 5;

  modifier accept() {
    tvm.accept();
    _;
  }

  uint128 m_balance;
  address m_params;
  uint256 m_numberFromStorage;
  uint256 m_numberForStorage;

  constructor(uint8 options, string debotAbi, string targetAbi, address targetAddr) public {
    require(tvm.pubkey() == msg.pubkey(), 100);
    tvm.accept();
    init(options, debotAbi, targetAbi, targetAddr);
  }

  function setABI(string dabi) public {
    require(tvm.pubkey() == msg.pubkey(), 100);
    tvm.accept();
    m_debotAbi.set(dabi);
    m_options |= DEBOT_ABI;
  }

  function setTargetABI(string tabi) public {
    require(tvm.pubkey() == msg.pubkey(), 100);
    tvm.accept();
    m_targetAbi.set(tabi);
    m_options |= DEBOT_TARGET_ABI;
  }

  function enterTargetAddress(address addr) public accept {
    require(target != address(0), ERROR_ZERO_ADDRESS);
    m_target.set(target);
    m_options |= DEBOT_TARGET_ADDR;
  }

  function fetch() public override accept returns (Context[] contexts) {

    // Zero state: work with existing wallet or change it.
    contexts.push(Context(STATE_ZERO,
      "Hello, I'm a UINTStorage Debot 🙂. What would you like to do today?", [
        ActionGoto("Check your current target wallet", STATE_GET_TARGET_ADDRESS),
        ActionGoto("Change target wallet", STATE_SET_TARGET_ADDRESS),
        ActionGoto("Check TONs balance of target wallet", STATE_GET_TARGET_ADDRESS_TONS_BALANCE),
        ActionGoto("Get stored uint from target wallet", STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE),
        ActionGoto("Set uint for store for target wallet", STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS),
        ActionPrint("Quit", "quit", STATE_EXIT) ] ));

        // STATE_GET_TARGET_ADDRESS.
        optional(string) fargs;
        fargs.set("parseTargetAddress");
        contexts.push(Context(STATE_GET_TARGET_ADDRESS,
          "STATE_GET_TARGET_ADDRESS", [
            ActionPrintEx("", "setted target address: {}", true, fargs, STATE_CURRENT),
            ActionGoto("Go to start", STATE_ZERO),
            ActionPrint("Quit", "quit", STATE_EXIT) ] ));

        // STATE_SET_TARGET_ADDRESS
        contexts.push(Context(STATE_SET_TARGET_ADDRESS,
          "STATE_SET_TARGET_ADDRESS", [
            ActionRun("Change target wallet", "enterTargetAddress", STATE_CURRENT),
            ActionGoto("Go to start", STATE_ZERO),
            ActionPrint("Quit", "quit", STATE_EXIT) ] ));

          // STATE_GET_TARGET_ADDRESS_TONS_BALANCE
          fargs.set("parseBalanceArgs");
          contexts.push(Context(STATE_GET_TARGET_ADDRESS_TONS_BALANCE,
            "STATE_GET_TARGET_ADDRESS_TONS_BALANCE", [
              ActionInstantRun("", "queryBalance", STATE_CURRENT),
              ActionPrintEx("", "{}.{}", true, fargs, STATE_CURRENT),
              ActionGoto("Go to start", STATE_ZERO),
              ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_GET_TARGET_ADDRESS_UINT_NUMBER
            fargs.set("parseLocalStorage");
            contexts.push(Context(STATE_GET_TARGET_ADDRESS_UINT_NUMBER,
              "STATE_GET_TARGET_ADDRESS_UINT_NUMBER", [
                ActionGetMethod("", "getValue", args, "setLocalStorage", true, STATE_MAIN3),
                ActionPrintEx("", "setted uint: {}", true, fargs, STATE_CURRENT),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

              // STATE_SET_TARGET_ADDRESS_UINT_NUMBER;
              contexts.push(Context(STATE_SET_TARGET_ADDRESS_UINT_NUMBER,
                "STATE_SET_TARGET_ADDRESS_UINT_NUMBER", [
                  ActionRun("Enter uint for Storage", "enterUint", STATE_CURRENT),
                  ActionSendMsg("Send uint to Storage", "sendSubmitMsg", "sign=by_user", STATE_CURRENT),
                  ActionGoto("Go to start", STATE_ZERO),
                  ActionPrint("Quit", "quit", STATE_EXIT) ] ));

      }

      function getVersion() public override accept returns (string name, uint24 semver) {
        name = "Token Create DeBot";
        semver = (1 << 8);
      }

      function quit() public override accept {}

      function parseTargetAddress() public view accept returns (address param0) {
        param0 = m_target.get();
      }

      function getTargetAddress() public accept returns (address addr) {
        addr = m_target.get();
      }

      function queryBalance() public view accept returns (Action[] actions) {
        optional(string) argsGetter;
        argsGetter.set("getTargetAddress");
        actions = [ callEngine("getBalance", "", "setTargetBalance", argsGetter) ];
      }

      function setTargetBalance(uint128 arg1) public accept {
        m_balance = arg1;
      }

      function parseBalanceArgs() public accept returns (uint128 number0, uint128 number1) {
        (number0, number1) =tokens(m_balance);
      }

      function tokens(uint128 nanotokens) private pure returns (uint64, uint64) {
        uint64 decimal = uint64(nanotokens / 1e9);
        uint64 float = uint64(nanotokens - (decimal * 1e9));
        return (decimal, float);
      }

      function setLocalStorage(uint256 num) public accept {
        m_numberFromStorage = num;
      }

      function parseLocalStorage() public view accept returns (address param0) {
        param0 = m_numberFromStorage;
      }

      function enterUint(uint256 num) public accept {
          m_numberForStorage = num;
      }

      function sendSubmitMsg() public accept view returns (address dest, TvmCell body) {
        dest = m_target.get();
        body = tvm.encodeBody(Storage.storeValue, m_numberForStorage);
      }

    }
