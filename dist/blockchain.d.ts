import { ChainId, Currency } from '@venomswap/sdk';
/**
 * Blockchain is an enum representing different blockchains
 */
export declare enum Blockchain {
    ETHEREUM = 1,
    BINANCE_SMART_CHAIN = 2,
    NOVA = 3
}
/**
 * BlockchainSettings represents settings for a specific blockchain
 */
export declare class BlockchainSettings {
    chainId: number;
    blockchain?: Blockchain;
    name?: string;
    rpcURLs?: string[];
    rpcAPIKey?: string;
    explorerURL?: string;
    blockTime?: number;
    currency?: Currency;
    constructor(chainId: ChainId, blockchain?: Blockchain, name?: string, rpcURLs?: string[], rpcAPIKey?: string, explorerURL?: string, blockTime?: number);
    setBlockchain(blockchain?: Blockchain): void;
    setName(name?: string): void;
    setRpcURLs(rpcURLs?: string[]): void;
    setExplorerURL(explorerURL?: string): void;
    setCurrency(): void;
    setBlocktime(blockTime?: number): void;
    randomRpcURL(): string | undefined;
    hexChainId(): string;
}
export declare const BLOCKCHAIN_SETTINGS: {
    [chainId in ChainId]: BlockchainSettings;
};
