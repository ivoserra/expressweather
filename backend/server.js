import express from 'express'
// import db from 'db'
import axios from 'axios'
import db from '../backend/db.js'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())

dotenv.config()
const { URL } = process.env

app.get('/', (req, res)=>res.send('welcome to the weather api'))


app.post('/weather', (req, res)=>{
    // fetch the temperature of the requested city
    axios({
        method:"GET",
        url:URL,
    }).then(response => {
        const date = new Date().toISOString()
    
        db.data.requests.push({date: date, request: req.body, response:response.data.main})
        db.write()

        res.send(`weather for ${req.body.city} is ${response.data.main.temp} degrees`)


    })
    .catch(error => res.send('error'))
})


// write the request in a separate file.


app.listen(8080,()=>console.log('Up at http://localhost:8080'))