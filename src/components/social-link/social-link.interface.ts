import type SocialLink from './social-link';

/**
 * The {@link SocialLink} component props.
 */
export interface SocialLinkProps {

  /**
   * The social link class name.
   */
  className?: string;

  /**
   * The link href.
   */
  href: string;

  /**
   * Whether the image has priority loading.
   *
   * @default false
   */
  imgPriority?: boolean;

  /**
   * The social link image source.
   *
   * If not set, will attempt to derive default from the {@link title}.
   */
  imgSrc?: string;

  /**
   * The link click handler.
   */
  onClick?: () => void;

  /**
   * The link target.
   *
   * @default '_blank'
   */
  target?: string;

  /**
   * The social link title.
   *
   * e.g. `Twitter` or `Telegram`.
   */
  title: string;

}
