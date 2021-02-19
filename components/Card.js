import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Card() {
    return(
        <>
        
            <div className={styles.card_container}>
                <Image className={styles.round} src="/images/profiles/pp-1.jpg" alt="user" width="64" height="64"/>
                <h3>Ricky Park</h3>
                <h6>New York</h6>
                <p>User interface designer and <br/> front-end developer</p>
            </div>

        </>
    )
}