import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Card() {
    return(
        <>
        
            <div className={styles.card_container}>
                <img className={styles.round} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Ricky Park</h3>
                <h6>New York</h6>
                <p>User interface designer and <br/> front-end developer</p>
            </div>

        </>
    )
}