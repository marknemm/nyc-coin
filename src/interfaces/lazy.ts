import { RefObject } from 'react';

/**
 * The configuration for lazy loading an element.
 */
export interface UseLazyLoadConfig extends Omit<IntersectionObserverInit, 'root'> {

  /**
   * The callback to execute when the element can load.
   */
  callback?: () => void;

  /**
   * The element reference to observe.
   */
  elementRef: RefObject<HTMLElement>;

  /**
   * A reference to the element whose bounds are used to determine if the observed element is in view.
   *
   * If not provided, the viewport is used.
   */
  rootRef?: RefObject<HTMLElement>;

}
