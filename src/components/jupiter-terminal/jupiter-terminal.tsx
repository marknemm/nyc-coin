'use client';

import { JUPITER_TERMINAL_EMBED_SCRIPT } from '@/constants/blockchain';
import Script from 'next/script';
import { useJupiterTerminal } from './jupiter-terminal.hooks';
import styles from './jupiter-terminal.module.css';

/**
 * A Jupiter terminal widget that allows users to swap tokens.
 *
 * @param props The {@link JupiterTerminalProps}.
 * @returns The {@link JupiterTerminal} component JSX.
 */
export default function JupiterTerminal({
  className = ''
}: JupiterTerminalProps) {
  const { integratedTargetRef, loaded, onEmbedScriptError, onEmbedScriptReady } = useJupiterTerminal();

  return(
    <>
      <div
        className={`${styles.jupiterTerminal} ${className}`}
        ref={integratedTargetRef}
      >
        {!loaded && (
          <div className={`${styles.skeleton}`}>
            <div className={`${styles.input} shimmer`} />
            <div className={`${styles.output} shimmer`} />
            <div className={`${styles.swapButton} shimmer`} />
          </div>
        )}
      </div>

      <Script
        src={JUPITER_TERMINAL_EMBED_SCRIPT}
        onReady={onEmbedScriptReady}
        onError={onEmbedScriptError}
        async
      />
    </>
  );
}

/**
 * The {@link JupiterTerminal} component props.
 */
export interface JupiterTerminalProps {
  className?: string;
};
