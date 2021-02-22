import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Snap({ pets }) {
    console.log(pets)
    return(
        <>
            <div className={styles.card_container}>
                <div className={styles.round}>
                    {/* <Image className={styles.round} src={pets.petImage.fields.file.fileName} layout='fixed' alt="dogo" width="164" height="164"/> */}
                </div>
                <h3>{pets.petName}</h3>
                <h6>{pets.petRole}</h6>
                <a href="">read more about me</a>
            </div>
        </>
    )
}