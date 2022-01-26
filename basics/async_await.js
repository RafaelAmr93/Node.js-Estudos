/*
ASYNC-AWAIT: é uma forma mais compreensível de se fazer promises
Mas tem diferenças de promises
*/

function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`Making request to: ${location}`)
        if (location === 'Google'){
            resolve('Hi Google!')
        } else reject('The requisition works only on Google')
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Requisition received')
        resolve(`You required ${response}`)
    })
}

/*com promises

makeRequest('Google').then(response =>{
    console.log('Processing...')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err =>{
    console.log(err)
}).finally(console.log('Session closed'))

*/

//com async/await

async function withAsync(){
    try{
        const response = await makeRequest ('Google')
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err){
       console.log(err)
   }
}

withAsync()

//https://youtu.be/V_Kr9OSfDeU