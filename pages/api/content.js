
// const getStaticProps = async () => {
//     const client = require('contentful').createClient({
//         space: 'bnvvhtbeth06',
//         accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
//     })

//     var i = 0
//     const pets = client.getEntries()
//     pets.then(function (entries) {
//         // log the title for all the entries that have it
//         entries.items.forEach(function (entry) {
//             // if(entry.fields.productName) {
//             // petModule {    
//                 // console.log(entry.fields.sys.id)
//                 console.log(entry.fields.petName)
//                 console.log(entry.fields.petRole)
//                 console.log(entry.fields.petAge)
//                 console.log(entry.fields.activities)
//                 console.log(entry.fields.bio)
//                 // console.log(entry.fields.petImage.fields.file.url)
//                 console.log(i++ + "\n")


//                 // petName: entry.fields.petName,
//                 // petRole: entry.fields.petRole,
//                 // petAge: entry.fields.petAge,
//                 // petActivities: entry.fields.activities,
//                 // petBio: entry.fields.bio,
//                 // petImage: entry.fields.petImage.fields.file.url
//             // }
//             // console.log(pets)        
//         })
//     })
// }

// // const getStaticProps = async () => {
// //     const client = require('contentful').createClient({
// //         space: 'bnvvhtbeth06',
// //         accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
// //     })
// //     const pets = await client.getEntries()
// //     console.log(pets.items.feilds)
// //     return {
// //         props: {
// //             petList: pets.items
// //         }
// //     }
// // }

// getStaticProps()