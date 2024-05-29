'use client';

import { useEffect } from 'react';
import styles from './currency-swap.module.css';

/**
 * A widget that swaps one token currency for another.
 *
 * @param props The {@link SwapProps}.
 * @returns The {@link CurrencySwap} component JSX.
 */
export default function CurrencySwap({
  className = ''
}: SwapProps) {
  useEffect(() => {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://api.mainnet-beta.solana.com",
    });
  }, []);

  return(
    <div className={`${styles.currencySwap} ${className}`}>
      <div id="integrated-terminal"></div>
      <script src='https://terminal.jup.ag/main-v2.js' async />
    </div>
  );
}

/**
 * The {@link CurrencySwap} component props.
 */
export interface SwapProps {
  className?: string;
};
