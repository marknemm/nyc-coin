import { useLazyLoad } from '@/hooks/lazy.hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { DexTokenPair, DexTokensApiResponse, UseCityTokensReturn } from './city-index-table.interfaces';
import { TokenDisplayData } from './token-display-data';

/**
 * Custom hook that fetches the city tokens from the Dex Screener API.
 *
 * @template T_ELEM The city index element type. Default is `HTMLTableElement`.
 * @returns The {@link UseCityTokensReturn} value.
 *
 * @see https://docs.dexscreener.com/api/reference - Note: This has to be done client-side due to rate limit of 300 requests per second.
 */
export function useCityTokens<
  T_ELEM extends HTMLElement = HTMLTableElement
>(): UseCityTokensReturn<T_ELEM> {
  const cityIndexRef = useRef<T_ELEM>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const [error, setError] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);
  const [tokens, setTokens] = useState<TokenDisplayData[]>(() => {
    const initTokens = [new TokenDisplayData({ baseToken: { address: process.env.NEXT_PUBLIC_NYC_TA ?? '' } })];
    for (const cityTa of (process.env.NEXT_PUBLIC_CITY_TAS ?? '').split(',')) {
      initTokens.push(new TokenDisplayData({ baseToken: { address: cityTa } }));
    }
    return initTokens;
  });

  const loadCb = useCallback(async () => {
    try {
      const pairs = await loadCityTokens();
      setTokens(pairs.map((pair) => new TokenDisplayData(pair)));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  }, []);

  useLazyLoad({
    elementRef: cityIndexRef,
    callback: loadCb,
  });

  useEffect(() => {
    if (loaded) {
      const intervalTimeout = parseInt(process.env.NEXT_PUBLIC_CITY_IDX_REFRESH_INTERVAL ?? '30000', 10);
      intervalRef.current = setInterval(loadCb, intervalTimeout);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [loadCb, loaded]);

  return useMemo<UseCityTokensReturn<T_ELEM>>(() => ({
    cityIndexRef,
    error,
    loaded,
    tokens,
  }), [error, loaded, tokens]);
}

/**
 * Fetches the city tokens from the Dex Screener API.
 *
 * @returns A promise that resolves to the raw {@link DexTokenPair} data from the Dex Screener API.
 */
async function loadCityTokens(): Promise<DexTokenPair[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DEX_TOKENS_API_URL}/${process.env.NEXT_PUBLIC_NYC_TA},${process.env.NEXT_PUBLIC_CITY_TAS}`);
    const data: DexTokensApiResponse = await response.json();

    return data.pairs
      .filter(
        (pair) => pair?.dexId?.toLowerCase() === process.env.NEXT_PUBLIC_PREFERRED_DEX_ID?.toLowerCase()
      )
      .sort(
        (a, b) => (b.fdv ?? 0) - (a.fdv ?? 0)
      );
  } catch (error) {
    console.error('Error fetching Dex Screener tokens:', error);
    throw new Error('Error fetching Dex Screener tokens');
  }
}
