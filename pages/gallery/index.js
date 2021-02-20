import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { pets } from '../api/store/data'

export default function Gallery( { petList } ) {
    console.log(petList)
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