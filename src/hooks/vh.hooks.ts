import { useEffect, useRef } from 'react';
import { DESKTOP_WIDTH_MIN } from './dimension.hooks';

/**
 * Custom hook that sets the CSS variable `--vh` to the viewport height.
 */
export function useVh() {
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const setVh = () => {
      clearInterval(intervalRef.current);
      let ticks = 0;

      intervalRef.current = setInterval(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        if (++ticks >= 20) {
          clearInterval(intervalRef.current);
        }
      }, 100);
    };

    // Check if the browser is mobile firefox.
    // TODO: Replace with use of lvh/svh units when supported by Firefox.
    if (/firefox|fxios/i.test(navigator.userAgent) && screen.width < DESKTOP_WIDTH_MIN) {
      setVh();
      window.addEventListener('orientationchange', setVh);
    }

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
}
