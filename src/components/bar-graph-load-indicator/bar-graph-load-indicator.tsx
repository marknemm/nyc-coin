import styles from './bar-graph-load-indicator.module.css';

/**
 * A bar graph animation for graph loading mask.
 *
 * @param props The component props.
 * @returns The {@link BarGraphLoadIndicator} component JSX.
 */
export default function BarGraphLoadIndicator({
  className = '',
  loading = true,
}) {
  return loading && (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.graph}`}>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.bar}`}></div>
      </div>
    </div>
  )
}
