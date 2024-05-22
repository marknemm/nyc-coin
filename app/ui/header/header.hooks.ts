import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Custom hook that gets and maintains the sticky state for the `Header`.
 *
 * @param initSticky The initial sticky state. Defaults to `false`.
 * @returns The sticky state and the setter for the sticky state.
 */
export function useStickyState(initSticky = false): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [sticky, setSticky] = useState(initSticky);

  useEffect(() => {
    const scrollCb = () => {
      setSticky(window.scrollY >= window.innerHeight);
    }

    window.addEventListener('scroll', scrollCb);

    return () => {
      window.removeEventListener('scroll', scrollCb);
    }
  }, []);

  return [sticky, setSticky];
}
