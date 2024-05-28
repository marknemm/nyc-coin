'use client';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo, type ReactNode } from 'react';

/**
 * An application-wide wallet provider.
 *
 * @param props The {@link AppWalletProviderProps}.
 * @returns The {@link AppWalletProvider} component JSX.
 */
export default function AppWalletProvider({ children }: AppWalletProviderProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      // manually add any legacy wallet adapters here
      // new UnsafeBurnerWalletAdapter(),
    ],
    [network], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        autoConnect
        wallets={wallets}
      >
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

/**
 * The {@link AppWalletProvider} component props.
 */
export interface AppWalletProviderProps {

  /**
   * The children to render.
   */
  children: ReactNode;

}
