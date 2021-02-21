import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import { fetchEntries } from '../api/content'

export default function Petlab( { petList }) {
    console.log(petList)
    return(
        <>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Meet The Pets Of Petlab
                </h4>
                <div className={styles.grid}>
                    {/* {petList.map((pet) => {
                        return <Card pet={pet.petName} key={pet.id} />
                    })} */}
                </div>
            </main>
        </>
    )
}

// const petList = []
const client = require('contentful').createClient({
    space: 'bnvvhtbeth06',
    accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
})

export async function getStaticProps() {
    const petList = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

    return {
        props: {
            petList,
        },
    }
}