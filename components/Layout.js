
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Hero from './Hero'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            <Hero />
            <main className={styles.main}>
                <div className={styles.grid}>
                    
                </div>
            </main>
            <Footer />
            {children}
        </>
    )
}

export default Layout