import { ETHER, NOVA, BINANCE_COIN, ChainId, Token } from '@venomswap/sdk';
import random from 'lodash.random';
import DEFAULT_TOKEN_LIST from '@venomswap/default-token-list';
import COMMUNITY_TOKEN_LIST from '@venomswap/community-token-list';

var _BLOCKCHAIN_SETTINGS;
/**
 * Blockchain is an enum representing different blockchains
 */

var Blockchain;

(function (Blockchain) {
  Blockchain[Blockchain["ETHEREUM"] = 1] = "ETHEREUM";
  Blockchain[Blockchain["BINANCE_SMART_CHAIN"] = 2] = "BINANCE_SMART_CHAIN";
  Blockchain[Blockchain["NOVA"] = 3] = "NOVA";
})(Blockchain || (Blockchain = {}));
/**
 * BlockchainSettings represents settings for a specific blockchain
 */


var BlockchainSettings = /*#__PURE__*/function () {
  function BlockchainSettings(chainId, blockchain, name, rpcURLs, rpcAPIKey, explorerURL, blockTime) {
    this.chainId = chainId;
    this.rpcAPIKey = rpcAPIKey;
    this.setBlockchain(blockchain);
    this.setName(name);
    this.setRpcURLs(rpcURLs);
    this.setExplorerURL(explorerURL);
    this.setCurrency();
    this.setBlocktime(blockTime);
  }

  var _proto = BlockchainSettings.prototype;

  _proto.setBlockchain = function setBlockchain(blockchain) {
    if (blockchain) {
      this.blockchain = blockchain;
    } else {
      switch (this.chainId) {
        case 56:
        case 97:
          this.blockchain = Blockchain.BINANCE_SMART_CHAIN;
          break;

        case 42170:
        case 1666700000:
          this.blockchain = Blockchain.NOVA;
          break;

        default:
          this.blockchain = Blockchain.ETHEREUM;
      }
    }
  };

  _proto.setName = function setName(name) {
    if (name) {
      this.name = name;
    } else {
      switch (this.chainId) {
        case 1:
          this.name = 'Ethereum Mainnet';
          break;

        case 3:
          this.name = 'Ethereum Ropsten';
          break;

        case 4:
          this.name = 'Ethereum Rinkeby';
          break;

        case 5:
          this.name = 'Ethereum Görli';
          break;

        case 42:
          this.name = 'Ethereum Kovan';
          break;

        case 56:
          this.name = 'Binance Smart Chain Mainnet';
          break;

        case 97:
          this.name = 'Binance Smart Chain Testnet';
          break;

        case 42170:
          this.name = 'Arbitrum Nova';
          break;

        case 1666700000:
          this.name = 'Harmony Testnet';
          break;

        default:
          this.name = 'Ethereum Mainnet';
      }
    }
  };

  _proto.setRpcURLs = function setRpcURLs(rpcURLs) {
    if (rpcURLs && rpcURLs.length > 0) {
      this.rpcURLs = rpcURLs;
    } else {
      switch (this.chainId) {
        case 1:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://mainnet.infura.io/v3/" + this.rpcAPIKey] : ['https://mainnet.infura.io/v3/'];
          break;

        case 3:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://ropsten.infura.io/v3/" + this.rpcAPIKey] : ['https://ropsten.infura.io/v3/'];
          break;

        case 4:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://rinkeby.infura.io/v3/" + this.rpcAPIKey] : ['https://rinkeby.infura.io/v3/'];
          break;

        case 5:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://goerli.infura.io/v3/" + this.rpcAPIKey] : ['https://goerli.infura.io/v3/'];
          break;

        case 42:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://kovan.infura.io/v3/" + this.rpcAPIKey] : ['https://kovan.infura.io/v3/'];
          break;

        case 56:
          this.rpcURLs = ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/', 'https://bsc-dataseed1.ninicoin.io/'];
          break;

        case 97:
          this.rpcURLs = ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://data-seed-prebsc-2-s1.binance.org:8545/', 'https://data-seed-prebsc-1-s2.binance.org:8545/'];
          break;

        case 42170:
          this.rpcURLs = ['https://nova.arbitrum.io/rpc'];
          break;

        case 1666700000:
          this.rpcURLs = ['https://api.s0.b.hmny.io/'];
          break;

        default:
          this.rpcURLs = this.rpcAPIKey && this.rpcAPIKey !== '' ? ["https://mainnet.infura.io/v3/" + this.rpcAPIKey] : ['https://mainnet.infura.io/v3/'];
      }
    }
  };

  _proto.setExplorerURL = function setExplorerURL(explorerURL) {
    if (explorerURL && explorerURL !== '') {
      this.explorerURL = explorerURL;
    } else {
      switch (this.chainId) {
        case 1:
          this.explorerURL = 'https://etherscan.io/';
          break;

        case 3:
          this.explorerURL = 'https://ropsten.etherscan.io/';
          break;

        case 4:
          this.explorerURL = 'https://rinkeby.etherscan.io/';
          break;

        case 5:
          this.explorerURL = 'https://goerli.etherscan.io/';
          break;

        case 42:
          this.explorerURL = 'https://kovan.etherscan.io/';
          break;

        case 56:
          this.explorerURL = 'https://bscscan.com/';
          break;

        case 97:
          this.explorerURL = 'https://testnet.bscscan.com/';
          break;

        case 42170:
          this.explorerURL = 'https://nova-explorer.arbitrum.io';
          break;

        case 1666700000:
          this.explorerURL = 'https://explorer.testnet.harmony.one/';
          break;

        default:
          this.explorerURL = 'https://etherscan.io/';
      }
    }
  };

  _proto.setCurrency = function setCurrency() {
    switch (this.chainId) {
      case 56:
      case 97:
        this.currency = BINANCE_COIN;
        break;

      case 42170:
      case 1666700000:
        this.currency = NOVA;
        break;

      default:
        this.currency = ETHER;
    }
  };

  _proto.setBlocktime = function setBlocktime(blockTime) {
    if (blockTime) {
      this.blockTime = blockTime;
    } else {
      switch (this.chainId) {
        case 56:
        case 97:
          this.blockTime = 3;
          break;

        case 42170:
        case 1666700000:
          this.blockTime = 2;
          break;

        default:
          this.blockTime = 13;
      }
    }
  };

  _proto.randomRpcURL = function randomRpcURL() {
    if (this.rpcURLs === undefined || this.rpcURLs.length === 0) return undefined;
    var randomIndex = random(0, this.rpcURLs.length - 1);
    return this.rpcURLs[randomIndex];
  };

  _proto.hexChainId = function hexChainId() {
    var _this$chainId;

    return "0x" + ((_this$chainId = this.chainId) == null ? void 0 : _this$chainId.toString(16));
  };

  return BlockchainSettings;
}();
var BLOCKCHAIN_SETTINGS = (_BLOCKCHAIN_SETTINGS = {}, _BLOCKCHAIN_SETTINGS[ChainId.MAINNET] = /*#__PURE__*/new BlockchainSettings(ChainId.MAINNET), _BLOCKCHAIN_SETTINGS[ChainId.ROPSTEN] = /*#__PURE__*/new BlockchainSettings(ChainId.ROPSTEN), _BLOCKCHAIN_SETTINGS[ChainId.RINKEBY] = /*#__PURE__*/new BlockchainSettings(ChainId.RINKEBY), _BLOCKCHAIN_SETTINGS[ChainId.GÖRLI] = /*#__PURE__*/new BlockchainSettings(ChainId.GÖRLI), _BLOCKCHAIN_SETTINGS[ChainId.KOVAN] = /*#__PURE__*/new BlockchainSettings(ChainId.KOVAN), _BLOCKCHAIN_SETTINGS[ChainId.BSC_MAINNET] = /*#__PURE__*/new BlockchainSettings(ChainId.BSC_MAINNET), _BLOCKCHAIN_SETTINGS[ChainId.BSC_TESTNET] = /*#__PURE__*/new BlockchainSettings(ChainId.BSC_TESTNET), _BLOCKCHAIN_SETTINGS[ChainId.ARBITRUM_NOVA] = /*#__PURE__*/new BlockchainSettings(ChainId.ARBITRUM_NOVA), _BLOCKCHAIN_SETTINGS[ChainId.HARMONY_TESTNET] = /*#__PURE__*/new BlockchainSettings(ChainId.HARMONY_TESTNET), _BLOCKCHAIN_SETTINGS);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _TOKENS;
var Tokens = /*#__PURE__*/function () {
  function Tokens(chainId, tokens) {
    if (tokens === void 0) {
      tokens = [].concat(DEFAULT_TOKEN_LIST.tokens, COMMUNITY_TOKEN_LIST.tokens);
    }

    this.chainId = chainId;
    this.rawTokens = tokens;
    this.setTokens();
  }

  var _proto = Tokens.prototype;

  _proto.setTokens = function setTokens() {
    this.tokens = this.convertTokens(this.rawTokens);

    if (this.chainId) {
      this.tokens = this.byChainId();
    }
  };

  _proto.all = function all() {
    if (!this.tokens || this.tokens.length == 0) return undefined;
    return this.tokens;
  };

  _proto.byChainId = function byChainId() {
    var _this = this;

    if (this.chainId === undefined || this.tokens === undefined) return undefined;
    return this.tokens.filter(function (token) {
      return token.chainId == _this.chainId;
    });
  };

  _proto.byName = function byName(name) {
    return this.find('name', name);
  };

  _proto.bySymbol = function bySymbol(symbol) {
    return this.find('symbol', symbol);
  };

  _proto.byAddress = function byAddress(address) {
    return this.find('address', address);
  };

  _proto.firstByName = function firstByName(name) {
    var _this$find;

    return (_this$find = this.find('name', name)) == null ? void 0 : _this$find[0];
  };

  _proto.firstBySymbol = function firstBySymbol(symbol) {
    var _this$find2;

    return (_this$find2 = this.find('symbol', symbol)) == null ? void 0 : _this$find2[0];
  };

  _proto.firstByAddress = function firstByAddress(address) {
    var _this$find3;

    return (_this$find3 = this.find('address', address)) == null ? void 0 : _this$find3[0];
  };

  _proto.find = function find(key, value) {
    if (this.tokens === undefined) return undefined;

    switch (key) {
      case 'name':
        return this.tokens.filter(function (token) {
          var _token$name;

          return (token == null ? void 0 : (_token$name = token.name) == null ? void 0 : _token$name.toLowerCase()) == value.toLowerCase();
        });

      case 'symbol':
        return this.tokens.filter(function (token) {
          var _token$symbol;

          return (token == null ? void 0 : (_token$symbol = token.symbol) == null ? void 0 : _token$symbol.toLowerCase()) == value.toLowerCase();
        });

      case 'address':
        return this.tokens.filter(function (token) {
          var _token$address;

          return (token == null ? void 0 : (_token$address = token.address) == null ? void 0 : _token$address.toLowerCase()) == value.toLowerCase();
        });

      default:
        return this.tokens.filter(function (token) {
          var _token$name2;

          return (token == null ? void 0 : (_token$name2 = token.name) == null ? void 0 : _token$name2.toLowerCase()) == value.toLowerCase();
        });
    }
  };

  _proto.first = function first(key, value) {
    var _this$find4;

    return (_this$find4 = this.find(key, value)) == null ? void 0 : _this$find4[0];
  };

  _proto.convertTokens = function convertTokens(tokens) {
    var sdkTokens = [];

    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      var sdkToken = this.convertToken(token);
      sdkTokens.push(sdkToken);
    }

    return sdkTokens;
  };

  _proto.convertToken = function convertToken(token) {
    return new Token(token.chainId, token.address, token.decimals, token.symbol, token.name);
  };

  return Tokens;
}();
var TOKENS = (_TOKENS = {}, _TOKENS[ChainId.MAINNET] = /*#__PURE__*/new Tokens(ChainId.MAINNET), _TOKENS[ChainId.ROPSTEN] = /*#__PURE__*/new Tokens(ChainId.ROPSTEN), _TOKENS[ChainId.RINKEBY] = /*#__PURE__*/new Tokens(ChainId.RINKEBY), _TOKENS[ChainId.GÖRLI] = /*#__PURE__*/new Tokens(ChainId.GÖRLI), _TOKENS[ChainId.KOVAN] = /*#__PURE__*/new Tokens(ChainId.KOVAN), _TOKENS[ChainId.BSC_MAINNET] = /*#__PURE__*/new Tokens(ChainId.BSC_MAINNET), _TOKENS[ChainId.BSC_TESTNET] = /*#__PURE__*/new Tokens(ChainId.BSC_TESTNET), _TOKENS[ChainId.ARBITRUM_NOVA] = /*#__PURE__*/new Tokens(ChainId.ARBITRUM_NOVA), _TOKENS[ChainId.HARMONY_TESTNET] = /*#__PURE__*/new Tokens(ChainId.HARMONY_TESTNET), _TOKENS);

export { BLOCKCHAIN_SETTINGS, Blockchain, BlockchainSettings, TOKENS, Tokens };
//# sourceMappingURL=sdk-extra.esm.js.map
