import styles from '../styles/Home.module.css'

export default function Hero() {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.content} >
                    <div className={styles.info} >
                        <h1 >WELCOME</h1> <br />
                        <h3>We’re Dogo Co. A company built for pet owners, by pet owners.</h3>
                        <p>We provide everything from vitamin supplements to grooming products, all aimed at supporting our 
                            pets to help them live a longer, healthier and happier life.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

