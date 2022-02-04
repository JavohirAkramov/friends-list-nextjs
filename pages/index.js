import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Friends list | Home</title>

      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .</p>
        <p className={styles.text}>Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .Javohir is frontend developer. He has to do ... .</p>
        <Link href="/friends">
          <a className={styles.btn}>See Friends list</a>
        </Link>
      </div>
    </>
  )
}
