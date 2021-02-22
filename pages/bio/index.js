import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import Snap from '../../components/Snap'
import Navbar from '../../components/Navbar'

/* A component to retrieve and render contentful data using getStaticSiteProps */
export default function Bio({ pets }) {
    return(
        <>
            <Navbar />
            <main className={styles.main}>
                <h4 className={styles.title}>
                Meet The Pets Of Petlab
                </h4>
                <div className={styles.grid}>
                    {pets.map((pet) => (
                        <Snap pets={pet.fields} key={pet.sys.id} />
                    ))} 
                </div>
            </main>
            <Footer />
        </>
    )
}

// uses contentful package to create a client for fetching entries
let client = require('contentful').createClient({
    space: 'bnvvhtbeth06',
    accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
})

// using static site props to rendeer cms data
export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'pets'
    })

    return {
        props: {
            pets: data.items
        }
    }
}