import styles from '../styles/Home.module.css'

export default function Snap({ pets }) {
    return(
        <>
            <div className={styles.card_container}>
                
                <h3>{pets.petName}
                    <h6>Age:[{pets.petAge}]</h6>
                </h3>
                
                <h6>{pets.petRole}</h6>
                <hr />
                <p>{pets.bio}</p>
            </div>

            
        </>
    )
}