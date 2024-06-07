import type { DexTokenPair } from './city-index-table.interfaces';
import type { DeepPartial } from 'utility-types';

/**
 * A city token's display data.
 */
export class TokenDisplayData {

  /**
   * The raw Dex Screener API {@link DexTokenPair} data.
   */
  readonly #pair: DeepPartial<DexTokenPair>;

  /**
   * Creates a new {@link TokenDisplayData} instance.
   *
   * @param pair The raw Dex Screener API {@link DexTokenPair} data.
   */
  constructor(pair: DeepPartial<DexTokenPair> = {}) {
    this.#pair = pair;
  }

  /**
   * The token's unique address.
   */
  get address(): string {
    return this.#pair.baseToken?.address ?? '';
  }

  /**
   * The token's image URL.
   */
  get imageUrl(): string {
    return this.#pair.info?.imageUrl ?? '';
  }

  get isFeatured(): boolean {
    return this.#pair.baseToken?.address === process.env.NEXT_PUBLIC_NYC_TA;
  }

  /**
   * The token's liquidity.
   *
   * Format: `$00.00[B/M/K]`.
   */
  get liquidity(): string {
    return this.#pair.liquidity?.usd
      ? `${this.formatUsd(this.#pair.liquidity.usd)}`
      : '';
  }

  /**
   * The token's market cap.
   *
   * Format: `$00.00[B/M/K]`.
   */
  get marketCap(): string {
    return this.#pair.fdv
      ? `${this.formatUsd(this.#pair.fdv)}`
      : '';
  }

  /**
   * The token's name.
   */
  get name(): string {
    return this.#pair.baseToken?.name ?? '';
  }

  /**
   * The token's price change in the last 24 hours.
   *
   * Format: `±00.00%`.
   */
  get price24H(): string {
    return this.#pair.priceChange?.h24
      ? `${this.#pair.priceChange.h24}%`
      : '';
  }

  /**
   * The token's price change in the last 24 hours direction.
   */
  get price24HDirection(): 'positive' | 'negative' {
    return (this.#pair.priceChange?.h24 ?? 0) >= 0 ? 'positive' : 'negative';
  }

  get telegramUrl(): string {
    return this.#pair.info?.socials?.find(
      (social) => social.type?.toLowerCase() === 'telegram'
    )?.url ?? '';
  }

  get twitterUrl(): string {
    return this.#pair.info?.socials?.find(
      (social) => social.type?.toLowerCase() === 'twitter'
    )?.url ?? '';
  }

  private formatUsd(value: number): string {
    if (!value) return '';

    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`;
    }

    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    }

    if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}K`;
    }

    return `$${value.toFixed(2)}`;
  }

}
