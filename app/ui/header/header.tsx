'use client';

import clsx from 'clsx';
import Image from 'next/image';
import CopyButton from '../copy-button/copy-button';
import { useStickyState } from './header.hooks';
import styles from './header.module.css';
import { IconButton } from '@mui/material';

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

      <div className={`${styles.mobile}`}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          size="medium"
          sx={{ mr: 2, height: 40 }}
        >
          <span className={`${styles.hamburgerIcon}`}>
            &#9776;
          </span>
        </IconButton>
      </div>

      <div className={`${styles.desktop}`}>
        <div className={`${styles.start}`}>
          <CopyButton copyText={copyText}>
            Ca: { copyText }
          </CopyButton>
        </div>

        <div className={`${styles.end}`}>
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
      </div>

    </header>
  )
}
