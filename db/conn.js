const { MongoClient } = require('mongodb')

const uri = 'mongodb+srv://admin:marcos123@cluster0.nh5dmuq.mongodb.net/bons_fluidos'


const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log('Conectando ao MongoDB!')
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client
