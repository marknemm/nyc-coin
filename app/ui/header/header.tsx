'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useStickyState } from './header.hooks';
import styles from './header.module.css';

/**
 * The {@link Header} component, with sticky scrolling.
 *
 * @returns The {@link Header} component JSX.
 */
export default function Header() {
  const copyText = 'Gglerd7Qeme5Wa6Zstr2Bmfbanbdesarhpyugnpakyx3';
  const [sticky] = useStickyState();

  return (
    <header
      className={clsx(
        `${styles.header}`,
        { [`${styles.sticky}`]: sticky }
      )}
    >

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
              width={24}
              height={24}
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
          title="Twitter"
        >
          <Image
            src="/Tw.png"
            alt="$NYC Logo"
            width={24}
            height={24}
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
            width={24}
            height={24}
          />
        </a>
      </div>

    </header>
  )
}
