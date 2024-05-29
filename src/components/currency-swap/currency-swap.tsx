import { NYC_TA, SOL_TA } from '@/constants/currency';
import styles from './currency-swap.module.css';
import Script from 'next/script';

const integratedTargetId = 'integrated-terminal';

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
      <div id={integratedTargetId}></div>
      <Script
        src='https://terminal.jup.ag/main-v2.js'
        onReady={() => {
          window.Jupiter.init({
            displayMode: 'integrated',
            integratedTargetId,
            endpoint: 'https://api.mainnet-beta.solana.com',
            strictTokenList: false,
            containerStyles: {
              maxWidth: '100%',
            },
            formProps: {
              fixedOutputMint: true,
              initialInputMint: SOL_TA,
              initialOutputMint: NYC_TA,
            },
          });
        }}
        onError={() => console.error('Jupiter failed to load')}
        async
      />
    </div>
  );
}

/**
 * The {@link CurrencySwap} component props.
 */
export interface SwapProps {
  className?: string;
};
