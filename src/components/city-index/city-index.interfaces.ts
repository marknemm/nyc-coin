import { RefObject } from 'react';
import type { useCityTokens } from './city-index.hooks';
import type { TokenDisplayData } from './token-display-data';

/**
 * API Response for Dex Screener tokens.
 *
 * @see https://api.dexscreener.com/latest/dex/tokens/GGLERd7QeMe5wa6Zstr2BMFbaNbdeSaRhPyugNpaKyx3
 */
export interface DexTokensApiResponse {
  schemaVersion: string;
  pairs: DexTokenPair[];
}

/**
 * Represents a Dex Screener base-quote token {@link DexTokenPair}.
 *
 * @see https://api.dexscreener.com/latest/dex/tokens/GGLERd7QeMe5wa6Zstr2BMFbaNbdeSaRhPyugNpaKyx3
 */
export interface DexTokenPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd?: string;
  txns: {
    m5: {
      buys: number;
      sells: number;
    };
    h1: {
      buys: number;
      sells: number;
    };
    h6: {
      buys: number;
      sells: number;
    };
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity?: {
    usd?: number;
    base: number;
    quote: number;
  };
  fdv?: number;
  pairCreatedAt?: number;
  info?: {
    imageUrl?: string;
    websites?: [{
      label: string;
      url: string;
    }],
    socials?: [{
      type: string;
      url: string;
    }],
  }
}

/**
 * The return type of the {@link useCityTokens} hook.
 *
 * @template T_ELEM The city index element type. Default is `HTMLTableElement`.
 */
export interface UseCityTokensReturn<
  T_ELEM extends HTMLElement = HTMLTableElement
> {

  /**
   * The city index `HTMLElement` reference used for lazy loading.
   */
  cityIndexRef: RefObject<T_ELEM>;

  /**
   * The error message. `''` if no error.
   */
  error: string;

  /**
   * Whether the city tokens have been loaded.
   */
  loaded: boolean;

  /**
   * The city tokens' index data. `[]` if no tokens or an error occurred.
   */
  tokens: TokenDisplayData[];

}
