import DEFAULT_TOKEN_LIST from '@venomswap/default-token-list'
import COMMUNITY_TOKEN_LIST from '@venomswap/community-token-list'
import { ChainId, Token } from '@venomswap/sdk'

export interface TokenListToken {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

export class Tokens {
  chainId?: ChainId
  rawTokens: TokenListToken[]
  tokens?: Token[]
  
  constructor(chainId?: ChainId, tokens = [...DEFAULT_TOKEN_LIST.tokens, ...COMMUNITY_TOKEN_LIST.tokens]) {
    this.chainId = chainId
    this.rawTokens = tokens
    this.setTokens()
  }

  private setTokens() {
    this.tokens = this.convertTokens(this.rawTokens)

    if (this.chainId) {
      this.tokens = this.byChainId()
    }
  }

  public all(): Token[] | undefined {
    if (!this.tokens || this.tokens.length == 0) return undefined
    return this.tokens
  }

  public byChainId(): Token[] | undefined {
    if (this.chainId === undefined || this.tokens === undefined) return undefined
    return this.tokens.filter((token: Token) => token.chainId == this.chainId)
  }

  public byName(name: string): Token[] | undefined {
    return this.find('name', name)
  }

  public bySymbol(symbol: string): Token[] | undefined {
    return this.find('symbol', symbol)
  }

  public byAddress(address: string): Token[] | undefined {
    return this.find('address', address)
  }

  public firstByName(name: string): Token | undefined {
    return this.find('name', name)?.[0]
  }

  public firstBySymbol(symbol: string): Token | undefined {
    return this.find('symbol', symbol)?.[0]
  }

  public firstByAddress(address: string): Token | undefined {
    return this.find('address', address)?.[0]
  }

  public find(key: string, value: string): Token[] | undefined {
    if (this.tokens === undefined) return undefined
  
    switch (key) {
      case 'name':
        return this.tokens.filter((token) => token?.name?.toLowerCase() == value.toLowerCase())
      case 'symbol':
        return this.tokens.filter((token) => token?.symbol?.toLowerCase() == value.toLowerCase())
      case 'address':
        return this.tokens.filter((token) => token?.address?.toLowerCase() == value.toLowerCase())
      default:
        return this.tokens.filter((token) => token?.name?.toLowerCase() == value.toLowerCase())
    }
  }

  public first(key: string, value: string): Token | undefined {
    return this.find(key, value)?.[0]
  }
  
  public convertTokens(tokens: TokenListToken[]): Token[] {
    const sdkTokens: Token[] = []
  
    for (const token of tokens) {
      const sdkToken = this.convertToken(token)
      sdkTokens.push(sdkToken)
    }
  
    return sdkTokens
  }
  
  public convertToken(token: TokenListToken): Token {
    return new Token(token.chainId, token.address, token.decimals, token.symbol, token.name)
  }
}

export const TOKENS: { [chainId in ChainId]: Tokens } = {
  [ChainId.MAINNET]: new Tokens(ChainId.MAINNET),
  [ChainId.ROPSTEN]: new Tokens(ChainId.ROPSTEN),
  [ChainId.RINKEBY]: new Tokens(ChainId.RINKEBY),
  [ChainId.GÖRLI]: new Tokens(ChainId.GÖRLI),
  [ChainId.KOVAN]: new Tokens(ChainId.KOVAN),
  [ChainId.BSC_MAINNET]: new Tokens(ChainId.BSC_MAINNET),
  [ChainId.BSC_TESTNET]: new Tokens(ChainId.BSC_TESTNET),
  [ChainId.ARBITRUM_NOVA]: new Tokens(ChainId.ARBITRUM_NOVA),
  [ChainId.HARMONY_TESTNET]: new Tokens(ChainId.HARMONY_TESTNET),
}
