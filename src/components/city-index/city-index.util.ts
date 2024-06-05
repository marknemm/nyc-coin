import type { DexTokenPair } from './city-index.interfaces';

/**
 * A city token's display data.
 */
export class TokenDisplayData {

  /**
   * The raw Dex Screener API {@link DexTokenPair} data.
   */
  readonly #pair: DexTokenPair;

  /**
   * Creates a new {@link TokenDisplayData} instance.
   *
   * @param pair The raw Dex Screener API {@link DexTokenPair} data.
   */
  constructor(pair: DexTokenPair) {
    this.#pair = pair;
  }

  /**
   * The token's unique address.
   */
  get address(): string {
    return this.#pair.baseToken.address ?? '';
  }

  /**
   * The token's image URL.
   */
  get imageUrl(): string {
    return this.#pair.info?.imageUrl ?? '';
  }

  /**
   * The token's liquidity.
   *
   * Format: `$00.00[B/M/K]`.
   */
  get liquidity(): string {
    return `$${this.#pair.liquidity?.usd}`;
  }

  /**
   * The token's market cap.
   *
   * Format: `$00.00[B/M/K]`.
   */
  get marketCap(): string {
    return `$${this.#pair.fdv}`;
  }

  /**
   * The token's name.
   */
  get name(): string {
    return this.#pair.baseToken.name ?? '';
  }

  /**
   * The token's price change in the last 24 hours.
   *
   * Format: `±00.00%`.
   */
  get price24H(): string {
    return `${this.#pair.priceChange.h24}%`;
  }

  /**
   * The token's price change in the last 24 hours direction.
   */
  get price24HDirection(): 'positive' | 'negative' {
    return this.#pair.priceChange.h24 >= 0 ? 'positive' : 'negative';
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

}
