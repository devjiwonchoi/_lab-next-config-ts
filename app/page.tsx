import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{process.env.hello_next_config_ts}</h1>
    </main>
  )
}
