import type { UseLazyLoadConfig } from '@/interfaces/lazy';
import { useEffect, useState } from 'react';

export type { UseLazyLoadConfig };

/**
 * Custom hook to lazy load an element.
 *
 * @param config The {@link UseLazyLoadConfig}.
 * @returns Whether the element can load.
 */
export function useLazyLoad({
  callback,
  elementRef,
  rootRef,
  rootMargin = '100% 0px',
  threshold,
}: UseLazyLoadConfig): boolean {
  const [canLoad, setCanLoad] = useState(false);

  const onScrollIntoView = () => {
    setCanLoad(true);
    callback?.();
  };

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      onScrollIntoView(); // Load immediately if IntersectionObserver is not supported
      return;
    }

    const observedElement = elementRef.current;
    if (!observedElement) {
      throw new Error('elementRef config is required for lazy loading');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          onScrollIntoView();
          observer.disconnect(); // Stop observing after the widget is in view
        }
      },
      {
        root: rootRef?.current ?? undefined,
        rootMargin,
        threshold,
      }
    );

    observer.observe(observedElement);

    return () => {
      observer.unobserve(observedElement);
    };
  }, [elementRef, rootMargin, rootRef, threshold]); // eslint-disable-line react-hooks/exhaustive-deps
  // TODO: Use useEffectEvent for onScrollIntoView once it becomes part of stable React.

  return canLoad;
}
