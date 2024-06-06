'use client';

import SocialLink from '@/components/social-link/social-link';
import clsx from 'clsx';
import Image from 'next/image';
import { useCityTokens } from './city-index.hooks';
import styles from './city-index.module.css';

/**
 * An index of city tokens.
 *
 * @returns The {@link CityIndex} component JSX.
 */
export default function CityIndex() {
  const { cityIndexRef, error, loaded, tokens } = useCityTokens();

  return (
    <div className={`${styles.container}`}>
      <table
        className={`${styles.table}`}
        ref={cityIndexRef}
      >
        <thead>
          <tr>
            <th scope="col">
              Coin
            </th>
            <th scope="col">
              Market Cap
            </th>
            <th scope="col">
              Liquidity
            </th>
            <th scope="col">
              Price 24H
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr
              className={clsx({
                [styles.loading]: !loaded
              })}
              key={token.address}
            >
              <td>
                <div className={styles.coinContent}>
                  <div className={styles.tokenImageContainer}>
                    {token.imageUrl && (
                      <Image
                        alt={`${token.name} logo`}
                        className={styles.tokenImage}
                        height={40}
                        src={token.imageUrl}
                        width={40}
                      />
                    )}
                  </div>
                  <div>
                    <div className={`${styles.value}`}>
                      {token.name}
                    </div>

                    <table className={styles.smallTable}>
                      <tbody>
                        <tr>
                          <th scope="row">
                            Market Cap:
                          </th>
                          <td>
                            <div className={`${styles.value}`}>
                              {token.marketCap}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Liquidity:
                          </th>
                          <td>
                            <div className={`${styles.value}`}>
                              {token.liquidity}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Price 24H:
                          </th>
                          <td>
                            <div className={`${token.price24HDirection} ${styles.value}`}>
                              {token.price24H}
                            </div>
                          </td>
                        </tr>
                        <tr>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td>
                <div className={`${styles.value}`}>
                  {token.marketCap}
                </div>
              </td>
              <td>
                <div className={`${styles.value}`}>
                  {token.liquidity}
                </div>
              </td>
              <td>
                <div className={`${token.price24HDirection} ${styles.value}`}>
                  {token.price24H}
                </div>
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
