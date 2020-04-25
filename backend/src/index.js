import express from 'express';
import cors from 'cors';
import connect from './db.js';
import storage from './memory_storage';

const app = express()
const port = 3000

app.use(cors());

// app.get('/', async(req, res) => {
    
//     let db = await connect()

//     let cursor = await db.collection('posts').find().sort({postedAt: -1}) //.find() -> svi podaci, find({nesta}) -> samo ti podaci
//    //postedAt moram dodat,ali -1 znaci obrnutim redoslijedom (novo prvo)
//    let results = await cursor.toArray() // prodi kroz sve rezultate i vrati te rezultate kao kolekciju, array

   
//    res.json(results)

// })
app.get('/', (req, res) => {

    res.json(storage.posts)
});

app.get('/objava', (req, res) => res.send('Detalji objave'))

app.get('/profil', (req, res) => res.send('profil'))

app.get('/kontakt', (req, res) => res.send('kontakt'))

app.get('/prijava', (req, res) => res.send('prijava'))

app.get('/registracija', (req, res) => res.send('registracija'))

app.get('/nova-objava', (req, res) => res.send('nova objava'))

app.listen(port, () => console.log(`Slušam na portu ${port}!`))