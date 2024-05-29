'use client';

import dynamic from 'next/dynamic';
import type { CSSProperties, MouseEvent, PropsWithChildren, ReactElement } from 'react';

const SolWalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

/**
 * A web3 wallet connect button.
 *
 * A proxy for {@link SolWalletMultiButton WalletMultiButton} from the `@solana/wallet-adapter-react-ui` module.
 *
 * @param props The {@link ButtonProps}.
 * @returns The {@link WalletMultiButton} component JSX.
 * @see {@link SolWalletMultiButton WalletMultiButton} from the `@solana/wallet-adapter-react-ui` module.
 */
export default function WalletMultiButton({ children, ...props }: ButtonProps) {
  return (
    <SolWalletMultiButton {...props}>
      {children}
    </SolWalletMultiButton>
  );
}

/**
 * The {@link WalletMultiButton} component props.
 */
export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}>;
