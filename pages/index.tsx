import Head from 'next/head'
import { Search } from '@trussworks/react-uswds'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>USSF Portal Prototype</title>
        <meta name="description" content="USSF Portal Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Search size="big" onSubmit={(e) => e.preventDefault} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
