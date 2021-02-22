import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { pets } from './api/store/data'
import Footer from '../components/Footer'
import Head from 'next/head'
import View from '../components/View'

/* landing component, renders the static data and navigation bar, footer and hero components,
    uses server side props to get and render local data */
export default function Gallery({ petList }) {
    return(
        <>

            <Head>
                <title>About dogo | hoof hoof</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head> 
            <Navbar /> 
            <View />
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