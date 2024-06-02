'use client';

import { useVh } from '@/hooks/vh.hooks';

/**
 * A provider that sets the CSS variable `--vh` to the viewport height.
 *
 * @returns The {@link VhProvider} component JSX.
 */
export default function VhProvider() {
  useVh();
  return null;
}
