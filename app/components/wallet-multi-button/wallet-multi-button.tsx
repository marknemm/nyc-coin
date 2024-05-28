'use client';

import dynamic from 'next/dynamic';
import type { CSSProperties, MouseEvent, PropsWithChildren, ReactElement } from 'react';

const SolWalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

/**
 * A fade-in/out animation component.
 *
 * A proxy for {@link RARFade Fade} from the `react-awesome-reveal` module.
 *
 * @param props The {@link FadeProps}.
 * @returns The {@link Fade} component JSX.
 * @see {@link RARFade Fade} from the `react-awesome-reveal` module.
 */
export default function WalletMultiButton({ children, ...props }: ButtonProps) {
  return (
    <SolWalletMultiButton {...props}>
      {children}
    </SolWalletMultiButton>
  );
}

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}>;
