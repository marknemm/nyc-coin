import { type JUPITER_TERMINAL_EMBED_SCRIPT } from '@/constants/jupiter';
import { useLazyLoad } from '@/hooks/lazy.hooks';
import { RefObject, useCallback, useRef, useState } from 'react';

/**
 * Custom hook that lazily initializes the Jupiter terminal.
 *
 * @template T_ELEM The integrated terminal target element type. Default is {@link HTMLDivElement}.
 * @returns The {@link UseJupiterTerminalReturn} object which contains bindings for embedding the Jupiter terminal.
 */
export function useJupiterTerminal<
  T_ELEM extends HTMLElement = HTMLDivElement
>(): UseJupiterTerminalReturn<T_ELEM> {
  const defaultTerminalId = 'integrated-terminal';
  const [loaded, setLoaded] = useState(false);
  const integratedTargetRef = useRef<T_ELEM>(null);

  // Lazy load the Jupiter terminal when it scrolls nearly into view.
  useLazyLoad({
    elementRef: integratedTargetRef,
    callback: () => setLoaded(
      initJupiterTerminal(integratedTargetRef.current?.id ?? defaultTerminalId)
    ),
  });

  // Callback to initialize Jupiter terminal when the embed script is ready if already scrolled into view.
  return {
    integratedTargetRef,
    loaded,
    onEmbedScriptError: useCallback((error: any) => {
      console.error('Jupiter terminal embed script load failed with error:', error);
    }, []),
    onEmbedScriptReady: useCallback(() => {
      if (!integratedTargetRef.current?.id) {
        integratedTargetRef.current?.setAttribute('id', defaultTerminalId);
      }
      if (integratedTargetRef.current?.dataset.canLoad === 'true') {
        setLoaded(
          initJupiterTerminal(integratedTargetRef.current?.id ?? '')
        );
      }
    }, [integratedTargetRef]),
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
    endpoint: `${process.env.NEXT_PUBLIC_RPC_ENDPOINT_URL}/${process.env.NEXT_PUBLIC_RPC_API_KEY}`,
    strictTokenList: false,
    formProps: {
      fixedOutputMint: true,
      initialInputMint: process.env.NEXT_PUBLIC_DEFAULT_SOURCE_TA,
      initialOutputMint: process.env.NEXT_PUBLIC_NYC_TA,
    },
    onSwapError: (error: any) => {
      console.error('Jupiter terminal swap error:', error);
    }
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
   * Whether the Jupiter terminal is loaded.
   */
  loaded: boolean;

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
