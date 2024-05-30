import { NYC_TA, SOL_TA } from '@/constants/blockchain';

/**
 * Initializes the Jupiter terminal.
 *
 * @param integratedTargetId The ID of the integrated terminal target element.
 * @return `true` if the terminal was initialized; `false` otherwise.
 * Will return `false` if the terminal embed script is not loaded.
 */
export function initJupiterTerminal(integratedTargetId: string): boolean {
  window.Jupiter?.init({
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

  return !!window.Jupiter;
}