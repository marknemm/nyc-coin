import { NYC_TA } from '@/constants/currency';
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
  return (
    <div className={`${styles.dexChart} ${className}`}>
      <iframe
        className={`${styles.iframe}`}
        onLoad={(event) => {
          (event.target as HTMLElement)?.classList.add(styles.loaded);
        }}
        loading="lazy"
        src={`https://dexscreener.com/solana/${NYC_TA}?embed=1&theme=dark`}
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
