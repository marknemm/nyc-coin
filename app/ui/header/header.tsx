'use client';

import CopyButton from '@/app/ui/copy-button/copy-button';
import { useWindowSizeCategory } from '@/app/ui/hooks/dimension.hooks';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowSizeCategory = useWindowSizeCategory();

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  const navElement = (
    <>
      <div className={`${styles.start}`}>
        <CopyButton
          className={`${styles.copyButton}`}
          copyText={copyText}
        >
          Ca: { copyText }
        </CopyButton>
      </div>

      <nav className={`${styles.end}`}>
        <a href="#" onClick={closeDrawer}>
          Dextools
        </a>

        <a href="#" onClick={closeDrawer}>
          Screener
        </a>

        <a href="#" onClick={closeDrawer}>
          Buy
        </a>

        <a
          className={`${styles.iconLink}`}
          href="#"
          title="Twitter"
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
          href="#"
          title="Telegram"
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
