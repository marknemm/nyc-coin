'use client';

import WalletMultiButton from '@/components/wallet-multi-button/wallet-multi-button';
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
  return(
    <div className={`${styles.currencySwap} ${className}`}>
      <WalletMultiButton />
    </div>
  );
}

/**
 * The {@link CurrencySwap} component props.
 */
export interface SwapProps {
  className?: string;
};
