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
  function getName() external functionID(0x00000011) returns (bytes value0);
  function getSymbol() external functionID(0x00000012) returns (bytes value0);
  function getDecimals() external functionID(0x00000013) returns (uint8 value0);
  function getOwnerAddress() external functionID(0x00000017) returns (address value0);
  function getWalletKey() external functionID(0x00000015) returns (uint256 value0);
  function allowance() external functionID(0x00000018) returns (address spender, uint128 remainingTokens);
  function approve(address spender, uint128 remainingTokens, uint128 tokens) external functionID(0x00000019);
  function transferFrom(address dest, address to, uint128 tokens, uint128 grams) external functionID(0x0000001a);
  function disapprove() external functionID(0x0000001c);
}

contract TONTokenWalletDebot is Debot, DError {

  // Debot context ids
  uint8 constant STATE_MAIN  = 1;
  uint8 constant STATE_GET_TARGET_ADDRESS_BALANCES  = 2;
  uint8 constant STATE_GET_ROOT_GENERAL  = 3;
  uint8 constant SETTING_TRANSFER  = 4;
  uint8 constant STATE_CONFIRM_TRANSFER  = 5;
  // Debot const
  uint128 constant MIN_TOKENTRANSFER_GRAMS  = 12000000;

  /*
  Storage
  */
  // Target wallet address
  address m_address;

  // Target wallet pubkey
  uint256 m_pubkey;

  // Target wallet balance
  uint128 m_balance;

  // Target wallet token balance
  uint128 m_token_balance;

  // Target wallet root address
  address m_token_root_address;

  // For transfer destination address setting
  address m_dest;

  //For transfer grams qty setting
  uint128 m_grams_qty;

  //For transfer tokens qty setting
  uint128 m_tokens_qty;

  // A copy of TONToken general information
  struct Token {
      // Symbol.
      bytes rtc_symbol;
      // Name.
      bytes rtc_name;
      // Decimals.
      uint8 rtc_decimals;
      // Root address.
      address rtc_address;
      // Root owner address.
      address rtc_owner;
  }

  Token m_token;

  // A copy of TONTokenWallet allowance
    struct Allowance {
        // Spender.
        address current_spender;
        // RemainingTokens.
        uint128 delegated_tokens;
    }

  Allowance m_allowance;

  // helper modifier
  modifier accept() {
    tvm.accept();
    _;
  }

  /*
  *   Init functions
  */

  constructor() public {
    require(tvm.pubkey() == msg.pubkey(), 100);
    tvm.accept();
    init(0, "", "", address(0));
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
    m_address = target;
  }

  /*
  *  Overrided Debot functions
  */

  function fetch() public override accept returns (Context[] contexts) {

        // STATE_ZERO
        contexts.push(Context(STATE_ZERO,
          "Hello, I'm a TONTokenWallet Debot 🙂", [
            ActionRun("Set your target wallet", "enterTargetAddress", STATE_MAIN),
            ActionPrint("Quit", "quit", STATE_EXIT)] ));

        // STATE_MAIN
        optional(string) fargs;
        optional(string) fargs1;
        optional(string) args;
        fargs.set("parseTargetAddress");
        contexts.push(Context(STATE_MAIN,
          "STATE_SET_TARGET_ADDRESS", [
            ActionPrintEx("", "Current target address: {}", true, fargs, STATE_CURRENT),
            ActionGetMethod("", "getDecimals", args, "setTargetRootDecimals", true, STATE_CURRENT),
            ActionGetMethod("", "getRootAddress", args, "setTargetRootAddress", true, STATE_CURRENT),
            ActionGoto("Change target wallet", STATE_ZERO),
            ActionGoto("Check TONtokens and TONs balances of target wallet", STATE_GET_TARGET_ADDRESS_BALANCES),
            ActionGoto("Check TONtoken root general information", STATE_GET_ROOT_GENERAL),
            ActionGoto("Transfer TONtokens and TONgrams from target wallet", SETTING_TRANSFER),
            ActionPrint("Quit", "quit", STATE_EXIT) ] ));

        // STATE_GET_TARGET_ADDRESS_BALANCES
        fargs.set("parseTokenBalanceArgs");
        fargs1.set("parseBalanceArgs");
        contexts.push(Context(STATE_GET_TARGET_ADDRESS_BALANCES,
          "STATE_GET_TARGET_ADDRESS_BALANCES", [
            ActionGetMethod("", "getBalance", args, "setTargetTokenBalance", true, STATE_CURRENT),
            ActionPrintEx("", "TONToken balance : {}.{}", true, fargs, STATE_CURRENT),
            ActionInstantRun("", "queryBalance", STATE_CURRENT),
            ActionPrintEx("", "TON balance: {}.{}", true, fargs1, STATE_CURRENT),
            ActionGoto("Go to main menu", STATE_MAIN),
            ActionPrint("Quit", "quit", STATE_EXIT) ] ));

          // STATE_GET_ROOT_GENERAL
          contexts.push(Context(STATE_GET_ROOT_GENERAL,
            "STATE_GET_ROOT_GENERAL", [
              Action("", "TONToken General\nroot: {}", ACTION_PRINT, "instant,fargs=parseTargetAddressRoot", STATE_CURRENT, empty),
              ActionGetMethod("", "getName", args, "setTargetRootName", true, STATE_CURRENT),
              Action("", "name: {}", ACTION_PRINT, "instant,fargs=parseRootName", STATE_CURRENT, empty),
              ActionGetMethod("", "getSymbol", args, "setTargetRootSymbol", true, STATE_CURRENT),
              Action("", "symbol: {}", ACTION_PRINT, "instant,fargs=parseRootSymbol", STATE_CURRENT, empty),
              Action("", "decimals: {}", ACTION_PRINT, "instant,fargs=parseRootDecimals", STATE_CURRENT, empty),
              ActionGetMethod("", "getOwnerAddress", args, "setTargetRootOwner", true, STATE_CURRENT),
              Action("", "owner: {}", ACTION_PRINT, "instant,fargs=parseRootOwner", STATE_CURRENT, empty),
              ActionGetMethod("", "allowance", args, "setTargetAllowance", true, STATE_CURRENT),
              Action("", "Wallet allowance\nspender: {}\ntokens: {}.{}", ACTION_PRINT, "instant,fargs=parseWalletAllowance", STATE_CURRENT, empty),
              ActionGoto("Go to main menu", STATE_MAIN),
              ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // SETTING_TRANSFER
            fargs.set("parseTokenBalanceArgs");
            fargs1.set("parseBalanceArgs");
            contexts.push(Context(SETTING_TRANSFER,
              "SETTING_TRANSFER", [
                ActionGetMethod("", "getBalance", args, "setTargetTokenBalance", true, STATE_CURRENT),
                ActionPrintEx("", "TONToken balance: {}.{}", true, fargs, STATE_CURRENT),
                ActionInstantRun("", "queryBalance", STATE_CURRENT),
                ActionPrintEx("", "TON balance: {}.{}", true, fargs1, STATE_CURRENT),
                Action("", "Now your setting for transfer\ndest: {}\ntokens: {}\ngrams: {}", ACTION_PRINT, "instant,fargs=getTransferInfo", STATE_CURRENT, empty),
                ActionRun("Reset destination address", "setDest", STATE_CURRENT),
                ActionRun("Reset TONtokens qty", "setTokensQty", STATE_CURRENT),
                ActionRun("Reset TONgrams qty", "setGramsQty", STATE_CURRENT),
                ActionGoto("Go to transfer", STATE_CONFIRM_TRANSFER),
                ActionGoto("Go to main menu", STATE_MAIN),
                ActionPrint("Quit", "quit", STATE_EXIT) ] ));

            // STATE_CONFIRM_TRANSFER
            contexts.push(Context(STATE_CONFIRM_TRANSFER,
              "STATE_CONFIRM_TRANSFER", [
                Action("", "Check your setting for transfer\ndest: {}\ntokens: {}\ngrams: {}", ACTION_PRINT, "instant,fargs=getTransferInfo", STATE_CURRENT, empty),
                ActionSendMsg("Start transfer", "sendSubmitMsg", "sign=by_user", STATE_MAIN),
                ActionGoto("Go to main menu", STATE_MAIN),
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
                  param0 = m_token.rtc_address;
                }

                function parseRootName() public view accept returns (bytes param0) {
                  param0 = m_token.rtc_name;
                }

                function parseRootSymbol() public view accept returns (bytes param0) {
                  param0 = m_token.rtc_symbol;
                }

                function parseRootDecimals() public view accept returns (uint8 number0) {
                  number0 = m_token.rtc_decimals;
                }

                function parseRootOwner() public view accept returns (address param0) {
                  param0 = m_token.rtc_owner;
                }

                function parseWalletAllowance() public view accept returns (address param0, uint128 number1, uint128 number2) {
                  param0 = m_allowance.current_spender;
                  (number1, number2) = tip3tokens(m_allowance.delegated_tokens);
                }

                function parseBalanceArgs() public view accept returns (uint128 number0, uint128 number1) {
                  (number0, number1) = tontokens(m_balance);
                }

                function parseTokenBalanceArgs() public view accept returns (uint128 number0, uint128 number1) {
                  (number0, number1) = tip3tokens(m_token_balance);
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
                  m_token.rtc_address = value0;
                }

                function setTargetRootName(bytes value0) public accept {
                m_token.rtc_name = value0;
                }

                function setTargetRootSymbol(bytes value0) public accept {
                m_token.rtc_symbol = value0;
                }

                function setTargetRootDecimals(uint8 value0) public accept {
                m_token.rtc_decimals = value0;
                }

                function setTargetRootOwner(address value0) public accept {
                m_token.rtc_owner = value0;
                }

                function setTargetPubkey(uint256 value0) public accept {
                m_pubkey = value0;
                }

                function setTargetAllowance(address spender, uint128 remainingTokens) public accept {
                  m_allowance.current_spender = spender;
                  m_allowance.delegated_tokens = remainingTokens;
                }

                function getTransferInfo() public view accept returns (address param0, uint128 number1, uint128 number2) {
                  return (m_dest, m_tokens_qty, m_grams_qty);
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

                function sendSubmitMsg() public accept returns (address dest, TvmCell body) {
                  dest = m_target.get();
                  m_grams_qty = (m_tokens_qty>0&&m_grams_qty<MIN_TOKENTRANSFER_GRAMS)?MIN_TOKENTRANSFER_GRAMS:m_grams_qty;
                  body = tvm.encodeBody(ITONTokenWallet.transfer, m_dest, m_tokens_qty, m_grams_qty);
                }

                /*
                *  Helpers
                */

                function tontokens(uint128 nanotokens) private pure returns (uint64, uint64) {
                  uint64 decimal = uint64(nanotokens / 1e9);
                  uint64 float = uint64(nanotokens - (decimal * 1e9));
                  return (decimal, float);
                }

                function getDecimal() private view returns (uint64) {
                  uint64 x = 1;
                  repeat(m_token.rtc_decimals) {
            				x * 10;
            			}
                  return x;
                }

                function tip3tokens(uint128 tokens) private view returns (uint64, uint64) {
                  uint64 k = getDecimal();
                  uint64 decimal = uint64(tokens / k);
                  uint64 float = uint64(tokens - decimal);
                  return (decimal, float);
                }

              }
