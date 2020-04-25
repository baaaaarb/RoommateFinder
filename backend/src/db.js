import mongo from 'mongodb'

let connection_string = 'mongodb+srv://admin:rfinder@cluster0-mbr1a.mongodb.net/test?retryWrites=true&w=majority'

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,  //
    useUnifiedTopology: true // bitna je kad je rad na vise?? neceg
})

let db=null

export default ()=>{
    return new Promise((resolve, reject) => {

        if(db && client.isConnected()){ //provjerava je li baza postoji i je si spojen na klijent
            resolve(db)
        }

        client.connect(err => {
            if (err) {
                reject('Doslo je do greske prilikom spajanja' + err)
            }
            else {
                console.log('Uspjesno spajanje na bazu')
                db = client.db('RoommateFinder')
                resolve(db)
            }
        })
    })
}