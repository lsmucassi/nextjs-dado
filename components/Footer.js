import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* A footer component */
export default function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                Powered by{' '}
                <Image src="/images/dogo-logo.png" alt="dogo logo" className={styles.logo} width="64" height="64" />
            </footer>
        </>
    )
}
