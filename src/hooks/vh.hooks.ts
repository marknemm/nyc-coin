import { useEffect } from 'react';
import { DESKTOP_WIDTH_MIN } from './dimension.hooks';

/**
 * Custom hook that sets the CSS variable `--vh` to the viewport height.
 */
export function useVh() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Check if the browser is mobile firefox.
    // TODO: Replace with use of lvh/svh units when supported by Firefox.
    if (/firefox|mozilla/i.test(navigator.userAgent) && screen.width < DESKTOP_WIDTH_MIN) {
      setVh();
      window.addEventListener('orientationchange', setVh);
    }

    return () => {
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
}
