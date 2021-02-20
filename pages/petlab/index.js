import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'

const client = require('contentful').createClient({
    space: 'bnvvhtbeth06',
    accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
})

export default function Petlab( props ) {
    console.log(props)
    return(
        <>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Meet The Pets Of Petlab
                </h4>

                <div className={styles.grid}>
                    <Card />
                    
                </div>
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const pet = client.getEntries()
    const pets = []
    pet.then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            // if(entry.fields.productName) {
            pets.push(entry)
            // console.log(pets)        
        })
    })
    return {
        props: { pets }
    }
}