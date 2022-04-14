import express from 'express'
// import db from 'db'
import axios from 'axios'
import db from '../backend/db.js'

const app = express()

app.use(express.json())



app.get('/', (req, res)=>res.send('welcome to the weather api'))


app.post('/weather', (req, res)=>{
    // fetch the temperature of the requested city
    axios({
        method:"GET",
        url:`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=211da0ba8780f809b807739e63f4ba96&units=metric`,
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