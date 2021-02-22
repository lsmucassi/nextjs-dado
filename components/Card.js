import Image from "next/image";
import styles from '../styles/Home.module.css'

/* The Card component is used by the gallery to render local data */
export default function Card({ pet }) {
    return(
        <>
            {/* // render local data passed through props */}
            <div className={styles.card_container}>
                <div className={styles.round}>
                    <Image className={styles.round} src={pet.src} layout='fixed' alt="dogo" width="164" height="164"/>
                </div>
                <h3>{pet.pet_name}</h3>
                <h6>{pet.pet_role}</h6>
                {/* // link does not work */}
                <a href="">read more about me</a>
            </div>
        </>
    )
}