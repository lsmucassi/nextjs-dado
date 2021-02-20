import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Card({ pet }) {
    return(
        <>
        
            <div className={styles.card_container}>
                <div className={styles.round}>
                    <Image className={styles.round} src={pet.src} layout='fixed' alt="user" width="164" height="164"/>
                </div>
                <h3>{pet.pet_name}</h3>
                <h6>{pet.pet_role}</h6>
                <a href="">read more about me</a>
            </div>

        </>
    )
}