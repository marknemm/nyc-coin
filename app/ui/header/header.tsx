'use client';

import Image from 'next/image'
import styles from './header.module.css'

/**
 * The {@link Header} component, with sticky scrolling.
 *
 * @returns The {@link Header} component JSX.
 */
export default function Header() {
  const copyText = 'Gglerd7Qeme5Wa6Zstr2Bmfbanbdesarhpyugnpakyx3';

  return (
    <header className={`${styles.header}`}>

      <div className={`${styles.left}`}>
        <button
          className={styles.copyButton}
          title="Copy to clipboard"
          onClick={() => {
            navigator.clipboard.writeText(copyText);
          }}
        >
          Ca: { copyText }

          <span className={styles.copyIcon}>
            <Image
              src="/Copy_Icon.svg"
              alt="Copy"
              fill
            />
          </span>
        </button>
      </div>

      <div className={`${styles.right}`}>
        <a href="#">
          Dextools
        </a>

        <a href="#">
          Screener
        </a>

        <a href="#">
          Buy
        </a>

        <a
          className={`${styles.iconLink}`}
          href="#"
        >
          <Image
            src="/Tw.png"
            alt="$NYC Logo"
            fill
            title="Twitter"
          />
        </a>

        <a
          className={`${styles.iconLink}`}
          href="#"
          title="Telegram"
        >
          <Image
            src="/TG.png"
            alt="$NYC Logo"
            fill
          />
        </a>
      </div>

    </header>
  )
}
