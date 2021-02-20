import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { pets } from '../api/store/data'
import Footer from '../../components/Footer'

export default function Gallery({ petList }) {
    return(
        <>
            <Navbar />
            <main className={styles.main}>
                
                <h4 className={styles.title}>
                    Gallery
                </h4>
                <div className={styles.grid}>
                    {petList.map((pet) => (
                    <Card pet={pet} key={pet.id}/>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            petList: pets
        }
    }
    
}