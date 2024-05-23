/**
 * Contains 2D {@link Size} with {@link width} and {@link height}.
 */
export interface Size {

  /**
   * The width.
   */
  width: number;

  /**
   * The height.
   */
  height: number;

}

/**
 * Window size category.
 */
export type WindowSizeCategory = 'Desktop' | 'Tablet' | 'Mobile';