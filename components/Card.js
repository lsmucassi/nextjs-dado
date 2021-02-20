import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Card() {
    return(
        <>
        
            <div className={styles.card_container}>
                <div className={styles.round}>
                    <Image className={styles.round} src="/images/dogo-logo.png" alt="user" width="164" height="164"/>
                </div>
                <h3>Scooby Doo</h3>
                <h6>Igwala this one</h6>
                <a href="">read more about me</a>
            </div>

        </>
    )
}