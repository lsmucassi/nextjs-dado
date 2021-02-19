import styles from '../styles/Home.module.css'
import Card from './Card'

export default function Petlab() {
    return(
        <>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Meet The Pets Of Petlab
                </h4>

                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </>
    )
}