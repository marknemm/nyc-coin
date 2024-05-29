'use client';

import CopyButton from '@/components/copy-button/copy-button';
import { NYC_TA } from '@/constants/currency';
import { useWindowSizeCategory } from '@/hooks/dimension.hooks';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
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

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  const navElement = (
    <>
      <div className={`${styles.start}`}>
        <CopyButton
          className={`${styles.copyButton}`}
          copyText={NYC_TA}
          innerClassName={`${styles.inner}`}
          iconClassName={`${styles.icon}`}
        >
          Ca: { NYC_TA }
        </CopyButton>
      </div>

      <nav className={`${styles.end}`}>
        <a
          href="https://www.dextools.io/app/en/solana/pair-explorer/7p5yMdMJLQX2QCM7wD3sm6G7bgsKFvkUCZMpVRtxRQcj?t=1716573652638"
          target="_blank"
          onClick={closeDrawer}
        >
          Dextools
        </a>

        <a
          href="https://dexscreener.com/solana/7p5ymdmjlqx2qcm7wd3sm6g7bgskfvkuczmpvrtxrqcj"
          target="_blank"
          onClick={closeDrawer}
        >
          Screener
        </a>

        <a
          href={`https://jup.ag/swap/SOL-${NYC_TA}`}
          target="_blank"
          onClick={closeDrawer}
        >
          Buy
        </a>

        <a
          className={`${styles.iconLink}`}
          href="https://twitter.com/nyc_solana"
          title="Twitter"
          target="_blank"
          onClick={closeDrawer}
        >
          <Image
            src="/Tw.png"
            alt="$NYC Logo"
            width={24}
            height={24}
            priority
          />
        </a>

        <a
          className={`${styles.iconLink}`}
          href="https://t.me/+VwqG2w_hEddmYzQ0"
          title="Telegram"
          target="_blank"
          onClick={closeDrawer}
        >
          <Image
            src="/TG.png"
            alt="$NYC Logo"
            width={24}
            height={24}
            priority
          />
        </a>
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
