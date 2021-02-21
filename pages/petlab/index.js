import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import { fetchEntries } from '../api/content'

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
    
    
//     const res = await fetchEntries()
//     petList = await res.map((p) => {
//     return p.fields
// })

//     return {
//         props: {
//             petList,
//         },
//     }
}


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


// inside your component markup, pull `posts` from props

{/* <div className="posts">
    {posts.map((p) => {
    return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
    })}
</div> */}

// at the bottom of your component file


// const getStaticProps = async () => {
//     const client = require('contentful').createClient({
//         space: 'bnvvhtbeth06',
//         accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
//     })
//     const pets = await client.getEntries()
//     console.log(pets.items)
//     return {
//         props: {
//             petList: pets.items || []
//         }
//     }
// }