
const client = require('contentful').createClient({
    space: 'bnvvhtbeth06',
    accessToken: 'fjCiI01g71Uk7oMNTgv419qQGI2E0kOLdm8JbCL_iUs'
})
const i = 0

const getStaticProps = async () => {
    const pets = client.getEntries()
    
    pets.then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
            // if(entry.fields.productName) {
            console.log(entry.fields.petRole)
            console.log(i + 1)
            // console.log(pets)        
        })
    })
}
    
    // return {
    //     props: {
    //         petList: pets.items
    //     }
    // }

getStaticProps()
