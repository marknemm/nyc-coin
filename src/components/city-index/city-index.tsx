'use client';

import SocialLink from '@/components/social-link/social-link';
import Image from 'next/image';
import { useCityTokens } from './city-index.hooks';
import styles from './city-index.module.css';

export default function CityIndex() {
  const { cityIndexRef, tokens, error } = useCityTokens();

  return (
    <div className={`${styles.container}`}>
      <table
        className={`${styles.table}`}
        ref={cityIndexRef}
      >
        <thead>
          <tr>
            <th>Coin</th>
            <th>Market Cap</th>
            <th>Liquidity</th>
            <th>Price 24H</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.address}>
              <td>
                <div className={styles.coinContent}>
                  { token.imageUrl && (
                    <Image
                      alt={token.name}
                      className={styles.tokenImage}
                      height={40}
                      src={token.imageUrl}
                      width={40}
                    />
                  )}
                  <div>
                    <span>{token.name}</span>

                    <table className={`${styles.mobile}`}>
                      <tbody>
                        <tr>
                          <th>Market Cap:</th>
                          <td>{token.marketCap}</td>
                        </tr>
                        <tr>
                          <th>Liquidity:</th>
                          <td>{token.liquidity}</td>
                        </tr>
                        <tr>
                          <th>Price 24H:</th>
                          <td className={`${token.price24HDirection}`}>
                            {token.price24H}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <div className={`${styles.socials}`}>
                          { token.twitterUrl && (
                            <SocialLink
                              className={styles.socialLink}
                              href={token.twitterUrl}
                              title="Twitter"
                            />
                          )}

                          { token.telegramUrl && (
                            <SocialLink
                              className={styles.socialLink}
                              href={token.telegramUrl}
                              title="Telegram"
                            />
                          )}
                        </div>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </td>
              <td>
                <span>{token.marketCap}</span>
              </td>
              <td>
                <span>{token.liquidity}</span>
              </td>
              <td>
                <span className={`${token.price24HDirection}`}>
                  {token.price24H}
                </span>
              </td>
              <td>
                <div className={`${styles.socials}`}>
                  { token.twitterUrl && (
                    <SocialLink
                      className={styles.socialLink}
                      href={token.twitterUrl}
                      title="Twitter"
                    />
                  )}

                  { token.telegramUrl && (
                    <SocialLink
                      className={styles.socialLink}
                      href={token.telegramUrl}
                      title="Telegram"
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
