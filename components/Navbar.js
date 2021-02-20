import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <>
            <header id="header">
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" >
                        <i className={styles.materialicons} id="btn" >dehaze</i>
                        <i className={styles.materialicons} id="cancel" >close</i>
                    </label>
                    <div className={styles.img}>
                        <Link href="/">
                            <a><Image  src="/images/dogo-logo.png" alt="me" width="64" height="64" /></a>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link href="/gallery"><a>gallery</a></Link>
                        </li>
                        <li>
                            <Link href="/"><a>products</a></Link>
                        </li>
                        <li>
                            <Link href="/"><a>blog</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a href="">hoof_hoof</a></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}