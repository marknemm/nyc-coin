import Image from 'next/image';
import { ReactNode, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import styles from './copy-button.module.css';

export default function CopyButton ({ children, className = '', copyText = '' }: CopyButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  return (
    <>
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
        <span>
          {children ?? copyText}
        </span>

        <span className={styles.copyIcon}>
          <Image
            src="/Copy_Icon.svg"
            alt="Copy"
            width={24}
            height={24}
            priority
          />
        </span>
      </button>

      <Tooltip
        id="copy-tooltip"
        content="Copied!"
        isOpen={isTooltipVisible}
        place="bottom"
      />
    </>
  )
}

export interface CopyButtonProps {
  children?: ReactNode;
  className?: string;
  copyText?: string;
}
