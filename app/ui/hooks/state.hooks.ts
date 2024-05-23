import { useCallback, useState } from 'react';

/**
 * A custom hook that returns a tuple containing a boolean state and a function to toggle it.
 *
 * @param initialState The initial state of the toggle.
 * @returns A tuple containing the boolean state and a function to toggle it.
 */
export function useToggleState(
  initialState = false
): readonly [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(
    () => setState((prev) => !prev),
  []);

  return [state, toggleState];
}
