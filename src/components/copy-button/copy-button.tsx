import Image from 'next/image';
import { useRef, useState, type PropsWithChildren } from 'react';
import { Tooltip } from 'react-tooltip';
import styles from './copy-button.module.css';

/**
 * A button that copies contained text to the clipboard.
 *
 * @param props The {@link CopyButtonProps}.
 * @returns The {@link CopyButton} component JSX.
 */
export default function CopyButton ({
  children,
  className = '',
  innerClassName = '',
  iconClassName = '',
  copyText = ''
}: CopyButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  return (
    <button
      className={`${styles.copyButton} ${className}`}
      title="Copy to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(copyText ?? '');

        clearTimeout(timeoutRef.current);
        setIsTooltipVisible(true);
        timeoutRef.current = setTimeout(() => setIsTooltipVisible(false), 1000);
      }}
      data-tooltip-id="copy-tooltip"
    >
      <span className={`${styles.inner} ${innerClassName}`}>
        {children ?? copyText}
      </span>

      <span className={`${styles.icon} ${iconClassName}`}>
        <Image
          src="/Copy_Icon.svg"
          alt="Copy"
          width={24}
          height={24}
          priority
        />
      </span>

      <Tooltip
        id="copy-tooltip"
        content="Copied!"
        isOpen={isTooltipVisible}
        place="bottom"
      />
    </button>
  )
}

/**
 * The {@link CopyButton} component props.
 */
export type CopyButtonProps = PropsWithChildren<{
  className?: string;
  copyText?: string;
  iconClassName?: string;
  innerClassName?: string;
}>;
