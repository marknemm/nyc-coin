'use client';

import { Fade as RARFade, type FadeProps as RARFadeProps } from 'react-awesome-reveal';
import styles from './fade.module.css';
/**
 * A fade-in/out animation component.
 *
 * A proxy for {@link RARFade Fade} from the `react-awesome-reveal` module.
 *
 * @param props The {@link FadeProps}.
 * @returns The {@link Fade} component JSX.
 * @see {@link RARFade Fade} from the `react-awesome-reveal` module.
 */
export default function Fade({
  children,
  containerClassName = '',
  innerClassName = '',
  ...props
}: FadeProps) {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <RARFade {...props}>
        <div className={`${innerClassName}`}>
          {children}
        </div>
      </RARFade>
    </div>
  );
}

export type FadeProps = RARFadeProps & {

  /**
   * Custom CSS class name for the container that surrounds the entire {@link Fade} animation element.
   */
  containerClassName?: string;

  /**
   * Custom CSS class name for the inner container that immediately surrounds the {@link Fade} `children`.
   */
  innerClassName?: string;

}
