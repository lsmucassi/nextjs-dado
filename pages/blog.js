import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

// dummy blog link component
export default function blog() {
    return(
        <>
            <Navbar />
            <main className={styles.main}>                
                <h4 className={styles.title}>
                Blogs &amp; Bones
                </h4>

            </main>
            <Hero />
            <Footer />
        </>
    )
}
