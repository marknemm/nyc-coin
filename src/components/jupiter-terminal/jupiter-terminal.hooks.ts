import { NYC_TA, SOL_TA, type JUPITER_TERMINAL_EMBED_SCRIPT } from '@/constants/blockchain';
import { useLazyLoad } from '@/hooks/lazy.hooks';
import { RefObject, useCallback, useRef } from 'react';

const defaultTerminalId = 'integrated-terminal';

/**
 * Custom hook that lazily initializes the Jupiter terminal.
 *
 * @template T_ELEM The integrated terminal target element type. Default is {@link HTMLDivElement}.
 * @returns The {@link UseJupiterTerminalReturn} object which contains bindings for embedding the Jupiter terminal.
 */
export function useJupiterTerminal<
  T_ELEM extends HTMLElement = HTMLDivElement
>(): UseJupiterTerminalReturn<T_ELEM> {
  const integratedTargetRef = useRef<T_ELEM>(null);

  // Lazy load the Jupiter terminal when it scrolls nearly into view.
  const canLoad = useLazyLoad({
    elementRef: integratedTargetRef,
    callback: () => initJupiterTerminal(integratedTargetRef.current?.id ?? defaultTerminalId),
  });

  // Callback to initialize Jupiter terminal when the embed script is ready if already scrolled into view.
  return {
    integratedTargetRef,
    onEmbedScriptError: useCallback((error: any) => {
      console.error('Jupiter failed to load with error:', error);
    }, []),
    onEmbedScriptReady: useCallback(() => {
      if (!integratedTargetRef.current?.id) {
        integratedTargetRef.current?.setAttribute('id', defaultTerminalId);
      }
      if (canLoad) {
        initJupiterTerminal(integratedTargetRef.current?.id ?? '');
      }
    }, [canLoad, integratedTargetRef]),
  };
}

/**
 * Initializes the Jupiter terminal.
 *
 * @param integratedTargetId The ID of the integrated terminal target element.
 * @return `true` if the terminal was initialized; `false` otherwise.
 * Will return `false` if the terminal embed script is not loaded.
 */
function initJupiterTerminal(integratedTargetId: string): boolean {
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

/**
 * The {@link useJupiterTerminal} hook return type that contains bindings for embedding the Jupiter terminal.
 *
 * @template T_ELEM The integrated terminal target element type. Default is {@link HTMLDivElement}.
 */
export interface UseJupiterTerminalReturn<T_ELEM extends HTMLElement = HTMLDivElement> {

  /**
   * The reference to the integrated terminal target element.
   */
  integratedTargetRef: RefObject<T_ELEM>;

  /**
   * A memoized function that should be invoked when the {@link JUPITER_TERMINAL_EMBED_SCRIPT} had an error while loading.
   *
   * @param error The error that occurred.
   */
  onEmbedScriptError: (error: any) => void;

  /**
   * A memoized function that should be invoked when the {@link JUPITER_TERMINAL_EMBED_SCRIPT} is ready.
   */
  onEmbedScriptReady: () => void;

}
