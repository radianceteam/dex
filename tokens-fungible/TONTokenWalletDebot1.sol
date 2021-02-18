pragma solidity >=0.6.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

abstract contract Debot {

  /// @notice ACTION TYPES

  uint8 constant ACTION_EMPTY        	= 0;    // undefined action
  uint8 constant ACTION_RUN_ACTION   	= 1;    // Call debot function associated with action
  uint8 constant ACTION_RUN_METHOD   	= 2;    // Call get-method of smart contract controlled by debot.
  uint8 constant ACTION_SEND_MSG     	= 3;    // Send a message to smart contract controlled by debot.
  uint8 constant ACTION_INVOKE_DEBOT 	= 4;    // Call action from another debot
  uint8 constant ACTION_PRINT         = 5;    // Print string to user
  uint8 constant ACTION_MOVE_TO       = 6;    // Jumps to the context defined in 'to' field, works like a `goto` operator
  uint8 constant ACTION_CALL_ENGINE   = 10;   // Calls Dengine routine.

  // Debot options used by Dengine
  uint8 constant DEBOT_ABI            = 1;    // Debot contains its ABI
  uint8 constant DEBOT_TARGET_ABI     = 2;    // Debot contains target contract ABI
  uint8 constant DEBOT_TARGET_ADDR    = 4;    // Debot stores target contract address

  // Predefined context ids
  uint8 constant STATE_ZERO   = 0;   // initial state, before we start
  uint8 constant STATE_CURRENT= 253; // placeholder for a current context
  uint8 constant STATE_PREV   = 254; // placeholder for a previous context
  uint8 constant STATE_EXIT   = 255; // we're done

  struct Context {
    uint8 id;           // Context ordinal
    string desc;        // message to be printed to the user
    Action[] actions;   // list of actions
  }

  /// @notice ACTION structure
  struct Action {
    // String that describes action step, should be printed to user
    string desc;
    // Name of debot function that runs this action
    string name;
    // Action type
    uint8 actionType;
    // Action attributes.
    // Syntax: "attr1,attr2,attr3=value,...".
    // Example: "instant,fargs=fooFunc,sign=by-user,func=foo"
    string attrs;
    // Context to transit to
    uint8 to;
    // Action internal data
    TvmCell misc;
  }

  uint8 m_options;
  optional(string) m_debotAbi;
  optional(string) m_targetAbi;
  optional(address) m_target;
  TvmCell empty;

  // debot developer should call this function from debot constructor
  function init(uint8 options, string debotAbi, string targetAbi, address targetAddr) internal {
    if (options & DEBOT_ABI != 0) m_debotAbi.set(debotAbi);
    if (options & DEBOT_TARGET_ABI != 0) m_targetAbi.set(targetAbi);
    if (options & DEBOT_TARGET_ADDR != 0) m_target.set(targetAddr);
    m_options = options;
  }

  /*
  * Public debot interface
  */

  /// @notice Invoked by DeBot Browser at debot startup. Returns array of debot contexts.
  function fetch() public virtual returns (Context[] contexts);

  function quit() public virtual;

  function getVersion() public virtual returns (string name, uint24 semver);

  function getDebotOptions() public view returns (uint8 options, string debotAbi, string targetAbi, address targetAddr) {
    debotAbi = m_debotAbi.hasValue() ? m_debotAbi.get() : "";
    targetAbi = m_targetAbi.hasValue() ? m_targetAbi.get() : "";
    targetAddr = m_target.hasValue() ? m_target.get() : address(0);
    options = m_options;
  }

  /*
  *   Helper action functions
  */

  function ActionGoto(string desc, uint8 to) internal inline view returns (Action) {
    return Action(desc, "", ACTION_MOVE_TO, "", to, empty);
  }

  function ActionPrint(string desc, string text, uint8 to) internal inline view returns (Action) {
    return Action(desc, text, ACTION_PRINT, "", to, empty);
  }

  function ActionInstantPrint(string desc, string text, uint8 to) internal inline view returns (Action) {
    return setAttrs(ActionPrint(desc, text, to), "instant");
  }

  function ActionPrintEx(string desc, string text, bool instant, optional(string) fargs, uint8 to)
  internal inline view returns (Action) {
    Action act = ActionPrint(desc, text, to);
    if (instant) {
      act.attrs = act.attrs + ",instant";
    }
    if (fargs.hasValue()) {
      act.attrs = act.attrs + ",fargs=" + fargs.get();
    }
    return act;
  }

  function ActionRun(string desc, string name, uint8 to) internal inline view returns (Action) {
    return Action(desc, name, ACTION_RUN_ACTION, "", to, empty);
  }

  function ActionInstantRun(string desc, string name, uint8 to) internal inline view returns (Action) {
    return setAttrs(ActionRun(desc, name, to), "instant");
  }

  function ActionGetMethod(string desc, string getmethod, optional(string) args, string callback, bool instant, uint8 to)
  internal inline view returns (Action) {
    string attrs = "func=" + getmethod;
    if (instant) {
      attrs = attrs + ",instant";
    }
    if (args.hasValue()) {
      attrs = attrs + ",args=" + args.get();
    }
    return Action(desc, callback, ACTION_RUN_METHOD, attrs, to, empty);
  }

  function ActionSendMsg(string desc, string name, string attrs, uint8 to) internal inline view returns (Action) {
    return Action(desc, name, ACTION_SEND_MSG, attrs, to, empty);
  }

  function ActionInvokeDebot(string desc, string handlerFunc, uint8 to) internal inline view returns (Action) {
    return Action(desc, handlerFunc, ACTION_INVOKE_DEBOT, "", to, empty);
  }

  function callEngine(string func, string arg, string callback, optional(string) argsGetter)
  internal inline view returns (Action) {
    string attrs = "func=" + callback;
    if (argsGetter.hasValue()) {
      attrs = attrs + ",args=" + argsGetter.get();
    }
    return Action(arg, func, ACTION_CALL_ENGINE, attrs, 0, empty);
  }

  function setAttrs(Action act, string attrs) internal inline pure returns (Action) {
    act.attrs = attrs;
    return act;
  }

  function setMisc(Action act, TvmCell cell) internal inline pure returns (Action) {
    act.misc = cell;
    return act;
  }
}

abstract contract DError {
  function getErrorDescription(uint32 error) public pure virtual returns (string desc);
}

contract DebotABI is Debot, DError {
  function fetch() override public returns (Context[] contexts) { }
  function quit() override public {}
  function getVersion() override public returns (string name, uint24 semver) {}
  function getErrorDescription(uint32 error) public pure override returns (string desc) {}
}



interface ITONTokenWallet {
  function transfer(address dest, uint128 tokens, uint128 grams) external functionID(0x0000000c);
  function getBalance() external functionID(0x00000014) returns (uint128 value0);
  function getRootAddress() external functionID(0x00000016) returns (address value0);
}

contract TONTokenWalletDebot is Debot, DError {

  // Debot context ids
  uint8 constant STATE_GET_TARGET_ADDRESS  = 1;
  uint8 constant STATE_SET_TARGET_ADDRESS  = 2;
  uint8 constant STATE_GET_TARGET_ADDRESS_TONS_BALANCE  = 3;
  uint8 constant STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE  = 4;
  uint8 constant STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS  = 5;
  uint8 constant SETTING_TRANSFER_TOKENS  = 6;
  uint8 constant STATE_CONFIRM_TRANSFER_TOKENS  = 7;
  uint8 constant SETTING_TRANSFER_TONGRAMS  = 8;
  uint8 constant STATE_CONFIRM_TRANSFER_TONGRAMS  = 9;


  /*
  Storage
  */

  // Target wallet balance
  uint128 m_balance;

  // Target wallet token balance
  uint128 m_token_balance;

  // Target wallet root address
  address m_token_root_address;

  //
  address m_dest;

  //
  uint128 m_grams_qty;

  //
  uint128 m_tokens_qty;


  // helper modifier
  modifier accept() {
    tvm.accept();
    _;
  }

  /*
  *   Init functions
  */

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

  function enterTargetAddress(address target) public accept {
    require(target != address(0), ERROR_ZERO_ADDRESS);
    m_target.set(target);
    m_options |= DEBOT_TARGET_ADDR;
  }

  /*
  *  Overrided Debot functions
  */

  function fetch() public override accept returns (Context[] contexts) {

    // Zero state: work with existing wallet or change it.
    contexts.push(Context(STATE_ZERO,
      "Hello, I'm a TONTokenWallet Debot 🙂. What would you like to do today?", [
        ActionGoto("Check your current target wallet", STATE_GET_TARGET_ADDRESS),
        ActionGoto("Change target wallet", STATE_SET_TARGET_ADDRESS),
        ActionGoto("Check TONs balance of target wallet", STATE_GET_TARGET_ADDRESS_TONS_BALANCE),
        ActionGoto("Check TONTokens balance of target wallet", STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE),
        ActionGoto("Check root address of target wallet", STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS),
        ActionGoto("Transfer TONtokens and grams from target wallet", SETTING_TRANSFER_TOKENS),
        ActionGoto("Transfer TONtgrams from target wallet", SETTING_TRANSFER_TONGRAMS),

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

            // STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE
            optional(string) args;
            fargs.set("parseTokenBalanceArgs");
            contexts.push(Context(STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE,
              "STATE_GET_TARGET_ADDRESS_TOKEN_BALANCE", [
                ActionGetMethod("", "getBalance", args, "setTargetTokenBalance", true, STATE_CURRENT),
                ActionPrintEx("", "TONToken balance : {}.{}", true, fargs, STATE_CURRENT),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS
            fargs.set("parseTargetAddressRoot");
            contexts.push(Context(STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS,
              "STATE_GET_TARGET_ADDRESS_ROOT_ADDRESS", [
                ActionGetMethod("", "getRootAddress", args, "setTargetRootAddress", true, STATE_CURRENT),
                ActionPrintEx("", "root for target address : {}", true, fargs, STATE_CURRENT),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_TRANSFER_TOKENS_FROM_TARGET_ADDRESS
            fargs.set("parseTokenBalanceArgs");
            optional(string) fargs2;
            fargs2.set("parseBalanceArgs");
            contexts.push(Context(SETTING_TRANSFER_TOKENS,
              "SETTING_TRANSFER_TOKENS", [
                ActionGetMethod("", "getBalance", args, "setTargetTokenBalance", true, STATE_CURRENT),
                ActionPrintEx("", "Now your TONToken balance : {}.{}", true, fargs, STATE_CURRENT),
                ActionInstantRun("", "queryBalance", STATE_CURRENT),
                ActionPrintEx("", "Now your TON balance: {}.{}", true, fargs2, STATE_CURRENT),
                Action("", "Now your setting for transfer\ndest: {}\ntokens: {}\ngrams: {}", ACTION_PRINT, "instant,fargs=getTransferInfo", STATE_CURRENT, empty),
                ActionRun("Reset destination address", "setDest", STATE_CURRENT),
                ActionRun("Reset TONtokens qty", "setTokensQty", STATE_CURRENT),
                ActionRun("Reset TONgrams qty", "setGramsQty", STATE_CURRENT),
                ActionGoto("Go to transfer", STATE_CONFIRM_TRANSFER_TOKENS),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_CONFIRM_TRANSFER_TOKENS
            contexts.push(Context(STATE_CONFIRM_TRANSFER_TOKENS,
              "STATE_CONFIRM_TRANSFER_TOKENS", [
                Action("", "Now your setting for transfer\ndest: {}\ntokens: {}\ngrams: {}", ACTION_PRINT, "instant,fargs=getTransferInfo", STATE_CURRENT, empty),
                ActionSendMsg("Transfer Tokens", "sendSubmitMsg", "sign=by_user", STATE_CURRENT),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // SETTING_TRANSFER_TONGRAMS
            fargs.set("parseBalanceArgs");
            contexts.push(Context(SETTING_TRANSFER_TONGRAMS,
              "SETTING_TRANSFER_TONGRAMS", [
                ActionInstantRun("", "queryBalance", STATE_CURRENT),
                ActionPrintEx("", "Now your TON balance: {}.{}", true, fargs, STATE_CURRENT),
                Action("", "Now your setting for transfer\ndest: {}\nTONgrams: {}", ACTION_PRINT, "instant,fargs=getTONTransferInfo", STATE_CURRENT, empty),
                ActionRun("Reset destination address", "setDest", STATE_CURRENT),
                ActionRun("Reset TONgrams qty", "setGramsQty", STATE_CURRENT),
                ActionGoto("Go to transfer", STATE_CONFIRM_TRANSFER_TONGRAMS),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_CONFIRM_TRANSFER_TONGRAMS
            contexts.push(Context(STATE_CONFIRM_TRANSFER_TONGRAMS,
              "STATE_CONFIRM_TRANSFER_TOKENS", [
                Action("", "Now your setting for transfer\ndest: {}\nTONgrams: {}", ACTION_PRINT, "instant,fargs=getTONTransferInfo", STATE_CURRENT, empty),
                ActionSendMsg("Transfer TON", "sendSubmitTONTransfer", "sign=by_user", STATE_CURRENT),
                ActionGoto("Go to start", STATE_ZERO),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

                  }

                  function getVersion() public override accept returns (string name, uint24 semver) {
                    name = "TONTokenWalletDebot";
                    semver = (1 << 8) | 3;
                  }

                  function quit() public override accept { }

                  uint32 constant ERROR_ZERO_ADDRESS = 1001;
                  uint32 constant ERROR_AMOUNT_TOO_LOW = 1002;
                  uint32 constant ERROR_TOO_MANY_CUSTODIANS = 1003;
                  uint32 constant ERROR_INVALID_CONFIRMATIONS = 1004;
                  uint32 constant ERROR_AMOUNT_TOO_BIG = 1005;

                  function getErrorDescription(uint32 error) public pure override returns (string desc) {
                    if (error == ERROR_ZERO_ADDRESS) {
                      return "recipient address can't be zero";
                    } else if (error == ERROR_AMOUNT_TOO_LOW) {
                      return "amount must be greater or equal than 0.001 tons";
                    } else if (error == ERROR_TOO_MANY_CUSTODIANS) {
                      return "custodian count must be less than 32";
                    } else if (error == ERROR_INVALID_CONFIRMATIONS) {
                      return "number of confirmations must be less than number of custodians";
                    } else if (error == ERROR_AMOUNT_TOO_BIG) {
                      return "amount is bigger than wallet balance";
                    }
                    return "unknown exception";
                  }

                  function getTargetAddress() public view accept returns (address addr) {
                    addr = m_target.get();
                  }

                  function parseTargetAddress() public view accept returns (address param0) {
                    param0 = m_target.get();
                  }

                  function parseTargetAddressRoot() public view accept returns (address param0) {
                    param0 = m_token_root_address;
                  }

                  function parseBalanceArgs() public view accept returns (uint128 number0, uint128 number1) {
                    (number0, number1) =tons(m_balance);
                  }

                  function parseTokenBalanceArgs() public view accept returns (uint128 number0, uint128 number1) {
                    (number0, number1) =tokens(m_token_balance);
                  }

                  function queryBalance() public accept returns (Action[] actions) {
                    optional(string) argsGetter;
                    argsGetter.set("getTargetAddress");
                    actions = [ callEngine("getBalance", "", "setTargetBalance", argsGetter) ];
                  }

                  function setTargetBalance(uint128 arg1) public accept {
                    m_balance = arg1;
                  }

                  function setTargetTokenBalance(uint128 value0) public accept {
                    m_token_balance = value0;
                  }

                  function setTargetRootAddress(address value0) public accept {
                    m_token_root_address = value0;
                  }

                  function getTransferInfo() public view accept returns (address param0, uint128 number1, uint128 number2) {
                    return (m_dest, m_tokens_qty, m_grams_qty);
                  }

                  function getTONTransferInfo() public view accept returns (address param0, uint128 number1) {
                    return (m_dest, m_grams_qty);
                  }

                  function setDest(address addr) public accept {
                    m_dest = addr;
                  }

                  function setTokensQty(uint128 tokens) public accept {
                    m_tokens_qty = tokens;
                  }

                  function setGramsQty(uint128 grams) public accept {
                    m_grams_qty = grams;
                  }

                  function sendSubmitMsg() public accept view returns (address dest, TvmCell body) {
                   dest = m_target.get();
                   body = tvm.encodeBody(ITONTokenWallet.transfer, m_dest, m_tokens_qty, m_grams_qty);
                  }

                  function sendSubmitTONTransfer() public accept view returns (address dest, TvmCell body) {
                   dest = m_target.get();
                   body = tvm.encodeBody(ITONTokenWallet.transfer, m_dest, 0, m_grams_qty);
                  }

                  /*
                  *  Helpers
                  */

                  function tons(uint128 grams) private pure returns (uint64, uint64) {
                    uint64 decimal = uint64(grams / 1e9);
                    uint64 float = uint64(grams - (decimal * 1e9));
                    return (decimal, float);
                  }

                  function tokens(uint128 mintokens) private pure returns (uint64, uint64) {
                    uint64 decimal = uint64(mintokens);
                    uint64 float = uint64(mintokens - decimal);
                    return (decimal, float);
                  }

                }
