import express from 'express'
import axios from 'axios'

import { appendFile } from 'fs/promises'


const app = express()

app.get('/',(req,res)=>{
    res.send('welcome to the weather Api')
})

       
app.get('/weather', (req,res)=>{

   

    axios({
        method:'get',
        url:'https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=211da0ba8780f809b807739e63f4ba96&units=metric'
    }).then(function(response){

            const date = new Date()
            const hour = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds()
            const todayLog = `Weather requested at ${hour}`
            const weatherApi= `Its ${response.data.main.temp} degrees in ${response.data.name}`
       
        res.send(weatherApi)
        appendFile('logFile.txt','\n' + todayLog)

    }).catch(function(error){
        console.log(error)
        res.send('error', error)
    })

})



app.listen(3111, ()=>{
    console.log('listening to http://localhost:3111')
})