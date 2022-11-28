import { ChainId, Token } from '@venomswap/sdk';
export interface TokenListToken {
    chainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
}
export declare class Tokens {
    chainId?: ChainId;
    rawTokens: TokenListToken[];
    tokens?: Token[];
    constructor(chainId?: ChainId, tokens?: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        chainId: number;
        logoURI: string;
    }[]);
    private setTokens;
    all(): Token[] | undefined;
    byChainId(): Token[] | undefined;
    byName(name: string): Token[] | undefined;
    bySymbol(symbol: string): Token[] | undefined;
    byAddress(address: string): Token[] | undefined;
    firstByName(name: string): Token | undefined;
    firstBySymbol(symbol: string): Token | undefined;
    firstByAddress(address: string): Token | undefined;
    find(key: string, value: string): Token[] | undefined;
    first(key: string, value: string): Token | undefined;
    convertTokens(tokens: TokenListToken[]): Token[];
    convertToken(token: TokenListToken): Token;
}
export declare const TOKENS: {
    [chainId in ChainId]: Tokens;
};
