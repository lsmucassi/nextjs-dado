import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
                        <Image  src="/images/dogo-logo.png" alt="me" width="64" height="64" />
                    </div>
                    <ul>
                        <li><a href="">about_us</a>
                        </li>
                        <li><a href="">products</a>
                        </li>
                        <li><a href="">blog</a>
                        </li>
                        <li><a href="">hoof_hoof</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}