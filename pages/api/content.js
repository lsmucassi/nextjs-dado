    const client = require('contentful').createClient({
        space: 'bnvvhtbeth06',
        accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
    })

export async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }


// const getStaticProps = async () => {
//     const pets = client.getEntries()
//     pets.then(function (entries) {
//         // log the title for all the entries that have it
//         entries.items.forEach(function (entry) {
//             // if(entry.fields.productName) {
//             console.log(entry.fields.petRole)
//             // console.log(pets)        
//         })
//     })
// }

// const getStaticProps = async () => {
//     const client = require('contentful').createClient({
//         space: 'bnvvhtbeth06',
//         accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
//     })
//     const pets = await client.getEntries()
//     console.log(pets.items)
//     return {
//         props: {
//             petList: pets.items
//         }
//     }
// }

// getStaticProps()