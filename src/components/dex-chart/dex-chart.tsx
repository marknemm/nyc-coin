'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './dex-chart.module.css';

/**
 * A widget that displays a DEX chart.
 *
 * @param props The {@link DexChartProps}.
 * @returns The {@link DexChart} component JSX.
 */
export default function DexChart({
  className = ''
}: DexChartProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx(
      `${styles.dexChart} ${className} shimmer`,
      {
        [styles.loaded]: loaded
      }
    )}>
      <div className={`${styles.barContainer}`}>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
      </div>

      <iframe
        className={`${styles.iframe}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        src={`https://dexscreener.com/solana/${process.env.NEXT_PUBLIC_NYC_TA}?embed=1&theme=dark`}
        title="Solana DEX Screener"
      />
    </div>
  )
}

/**
 * The {@link DexChart} component props.
 */
export interface DexChartProps {
  className?: string;
}
