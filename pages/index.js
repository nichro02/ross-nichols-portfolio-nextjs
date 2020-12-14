import Head from 'next/head'
import styles from '../styles/Home.module.css'

//import Link component to enable navigation within app
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ross Nichols Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Portfolio!
        </h1>

        <p className={styles.description}>
          Hi! Thanks for stopping by my portfolio. My name is Ross and I'm a full-stack software engineer. You can learn more about, view my projects, and find my contact information by clicking on the boxes below.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about me</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Look at what I've been working on</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>Get in touch</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
