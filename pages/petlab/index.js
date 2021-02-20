import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'


export default function Petlab({ petList }) {

    return(
        <>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Meet The Pets Of Petlab
                </h4>
                <div className={styles.grid}>
                    {/* {petList.map((pet) => (
                        <Card pet={pet.fields} key={pet.sys.id} />
                    ))} */}
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const client = require('contentful').createClient({
        space: 'bnvvhtbeth06',
        accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
    })
    const pets = await client.getEntries()
    return {
        props: {
            petList: pets.items || []
        }
    }
}