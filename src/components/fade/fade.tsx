'use client';

import { Fade as RARFade, type FadeProps } from 'react-awesome-reveal';
import styles from './fade.module.css';
export { type FadeProps };

/**
 * A fade-in/out animation component.
 *
 * A proxy for {@link RARFade Fade} from the `react-awesome-reveal` module.
 *
 * @param props The {@link FadeProps}.
 * @returns The {@link Fade} component JSX.
 * @see {@link RARFade Fade} from the `react-awesome-reveal` module.
 */
export default function Fade({ children, ...props }: FadeProps) {
  return (
    <div className={`${styles.container}`}>
      <RARFade {...props}>
        <div>
          {children}
        </div>
      </RARFade>
    </div>
  );
}
