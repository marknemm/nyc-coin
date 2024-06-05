import Image from 'next/image';
import styles from './social-link.module.css';
import type { SocialLinkProps } from './social-link.interface';

export type { SocialLinkProps };

/**
 * A social link with a circular image icon.
 *
 * @param props The {@link SocialLinkProps}.
 * @returns The {@link SocialLink} component JSX.
 */
export default function SocialLink({
  className = '',
  href,
  imgPriority,
  imgSrc,
  onClick,
  target = '_blank',
  title,
}: SocialLinkProps) {
  if (!imgSrc) {
    switch (title.toLowerCase()) {
      case 'telegram':
        imgSrc = '/TG.png';
        break;
      case 'twitter':
        imgSrc = '/Tw.png';
        break;
      default:
        imgSrc = '';
    }
  }

  return (
    <a
      className={`${styles.socialLink} ${className}`}
      href={href}
      onClick={onClick}
      target={target}
      title={title}
    >
      <Image
        alt=""
        height={24}
        priority={imgPriority}
        src={imgSrc}
        width={24}
      />
    </a>
  )
}
