import { DESKTOP_WIDTH_MIN, TABLET_WIDTH_MIN } from '@/constants/dimension';
import { Size, WindowSizeCategory } from '@/interfaces/dimension';
import { useEffect, useState } from 'react';

export * from '@/constants/dimension';
export * from '@/interfaces/dimension';

/**
 * Custom hook that gets the {@link WindowSizeCategory}.
 *
 * @returns The {@link WindowSizeCategory}.
 */
export function useWindowSizeCategory(): WindowSizeCategory {
  const windowSize = useWindowSize();

  return (!windowSize.width || windowSize.width >= DESKTOP_WIDTH_MIN)
    ? 'Desktop'
    : (windowSize.width >= TABLET_WIDTH_MIN)
      ? 'Tablet'
      : 'Mobile';
}

/**
 * Custom hook to get the window size.
 *
 * @returns The window size.
 */
export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
