'use client';

import CopyButton from '@/components/copy-button/copy-button';
import { useWindowSizeCategory } from '@/hooks/dimension.hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import SocialLink from '../social-link/social-link';
import { useStickyState } from './header.hooks';
import styles from './header.module.css';

/**
 * A header with navigation and sticky scrolling.
 *
 * @returns The {@link Header} component JSX.
 */
export default function Header() {
  const [sticky] = useStickyState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowSizeCategory = useWindowSizeCategory();
  const pathname = usePathname();

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  const navElement = (
    <>
      {/* <ReCAPTCHA
        sitekey="6LcnyO0pAAAAAGH7KBL3BIcNBiw5TJohKDr4nvfe"
        size="invisible"
      /> */}

      <div className={`${styles.start}`}>
        <CopyButton
          className={`${styles.copyButton}`}
          copyText={process.env.NEXT_PUBLIC_NYC_TA}
          innerClassName={`${styles.inner}`}
          iconClassName={`${styles.icon}`}
        >
          Ca: { process.env.NEXT_PUBLIC_NYC_TA }
        </CopyButton>
      </div>

      <nav className={`${styles.end}`}>
        { pathname !== '/' && (
          <Link
            className={`${styles.navLink}`}
            href="/"
            onClick={closeDrawer}
          >
            Home
          </Link>
        )}

        { pathname === '/' && (
          <Link
            className={`${styles.navLink}`}
            href="/city-index"
            onClick={closeDrawer}
          >
            City Index
          </Link>
        )}

        <a
          className={`${styles.navLink}`}
          href={`https://www.dextools.io/app/en/solana/pair-explorer/${process.env.NEXT_PUBLIC_TOKEN_PAIR_ID}`}
          target="_blank"
          onClick={closeDrawer}
        >
          Dextools
        </a>

        <a
          className={`${styles.navLink}`}
          href={`https://dexscreener.com/solana/${process.env.NEXT_PUBLIC_TOKEN_PAIR_ID}`}
          target="_blank"
          onClick={closeDrawer}
        >
          Screener
        </a>

        <a
          className={`${styles.navLink}`}
          href={`https://jup.ag/swap/SOL-${process.env.NEXT_PUBLIC_NYC_TA}`}
          target="_blank"
          onClick={closeDrawer}
        >
          Buy
        </a>

        <SocialLink
          className={`${styles.socialLink}`}
          href="https://twitter.com/nyc_solana"
          title="Twitter"
          imgPriority
          onClick={closeDrawer}
        />

        <SocialLink
          className={`${styles.socialLink}`}
          href="https://t.me/+VwqG2w_hEddmYzQ0"
          title="Telegram"
          imgPriority
          onClick={closeDrawer}
        />
      </nav>
    </>
  );

  return (
    <>
      <header
        className={clsx(
          `${styles.header}`,
          { [`${styles.sticky}`]: sticky }
        )}
      >

        <div className={`${styles.mobile}`}>
          <button
            className={`${styles.drawerToggleButton}`}
            color="inherit"
            title="Open navigation"
            onClick={openDrawer}
          >
            &#9776;
          </button>
        </div>

        <div className={`${styles.desktop}`}>
          { windowSizeCategory === 'Desktop' && navElement }
        </div>

        <Drawer
          customIdSuffix="Header"
          direction="top"
          open={drawerOpen}
          onClose={closeDrawer}
          className={`${styles.drawer} ${styles.container}`}
          size={'auto'}
        >
          <button
            className={`${styles.closeButton}`}
            color="inherit"
            title="Close"
            onClick={closeDrawer}
          >
            &#x2715;
          </button>
          { windowSizeCategory !== 'Desktop' && navElement }
        </Drawer>

      </header>
    </>
  )
}
