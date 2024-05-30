'use client';

import { useLazyLoad } from '@/hooks/lazy.hooks';
import { initJupiterTerminal } from '@/utils/jupiter-terminal';
import Script from 'next/script';
import { useCallback, useRef } from 'react';
import styles from './jupiter-terminal.module.css';

const integratedTargetId = 'integrated-terminal';

/**
 * A widget that swaps one token currency for another.
 *
 * @param props The {@link JupiterTerminalProps}.
 * @returns The {@link JupiterTerminal} component JSX.
 */
export default function CurrencySwap({
  className = ''
}: JupiterTerminalProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  // Lazy load the Jupiter terminal when it scrolls nearly into view.
  const canLoad = useLazyLoad({
    elementRef,
    callback: () => initJupiterTerminal(integratedTargetId),
  });

  return(
    <div className={`${styles.currencySwap} ${className}`}>

      <div
        ref={elementRef}
        id={integratedTargetId}
      ></div>

      <Script
        src='https://terminal.jup.ag/main-v2.js'
        onLoad={useCallback(() => {
          if (canLoad) { // If scrolled into view before script loaded, initialize Jupiter terminal immediately.
            initJupiterTerminal(integratedTargetId);
          }
        }, [canLoad])}
        onError={useCallback((error: any) => {
          console.error('Jupiter failed to load with error:', error);
        }, [])}
        async
      />

    </div>
  );
}

/**
 * The {@link JupiterTerminal} component props.
 */
export interface JupiterTerminalProps {
  className?: string;
};
