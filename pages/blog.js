import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import View from '../components/View'

export default function blog() {
    return(
        <>
            <Navbar />
            <View />
            <main className={styles.main}>                
                <h4 className={styles.title}>
                Blog &amp; Bones
                </h4>

            </main>
            <Footer />
        </>
    )
}
