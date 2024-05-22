'use client';

import clsx from 'clsx';
import Image from 'next/image';
import CopyButton from '../copy-button/copy-button';
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
        <CopyButton copyText={copyText}>
          Ca: { copyText }
        </CopyButton>
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
