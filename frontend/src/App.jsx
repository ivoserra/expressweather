import {useState} from 'react'


export default function App(){

    const [city, setCity] =useState('')
   

    function submit(e){
        console.log(city)
        fetch('http://localhost:8080')
        
    }

    return (
        <>        
        <input type="text" onChange={(e)=>setCity(e.target.value)}></input>
        <button onClick={submit}></button>
        </>
    )
}