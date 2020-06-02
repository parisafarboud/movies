import React , { Component , useEffect , useState } from 'react'
import axios from 'axios'

function Details() {

    const [latest,setLatest]=useState("")
    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice/141')
        .then(res => {
            setLatest(res.data.slip)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        // return () => {
            
        // }
    }, [])
    return (
        <div>
            {/* <h3>{latest}</h3> */}
        </div>
    )
}

export default Details
