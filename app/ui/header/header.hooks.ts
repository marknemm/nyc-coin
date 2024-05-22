import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Custom hook that gets and maintains the sticky state for the `Header`.
 *
 * @param threshold The threshold `scrollY` value for the sticky state. Defaults to the `window.innerHeight`.
 * @returns The sticky state and the setter for the sticky state.
 */
export function useStickyState(threshold?: number): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const computeSticky = () => {
      setSticky(window.scrollY >= (threshold ?? window.innerHeight));
    }

    computeSticky();
    window.addEventListener('scroll', computeSticky);

    return () => {
      window.removeEventListener('scroll', computeSticky);
    }
  }, [threshold]);

  return [sticky, setSticky];
}
