import CityIndexTable from '@/components/city-index-table/city-index-table';
import styles from './page.module.css';
import Image from 'next/image';

/**
 * Page that displays City Index table data.
 *
 * @returns The {@link CityIndexPage} component JSX.
 */
export default function CityIndexPage() {

  return (
    <main className={`${styles.page}`}>
      <Image
        alt=""
        className={styles.background}
        fill
        priority
        src="/API_BG.png"
      />

      <h1 className={`${styles.pageTitle}`}>
        City Index
      </h1>

      <CityIndexTable className={`${styles.table}`} />
    </main>
  )
}
