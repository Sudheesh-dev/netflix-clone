import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useGetMovies = (term) => {
    let [data, setData] = useState(null)
    //const API_KEY = 'c24c2c7d'
    const keyword = term

    useEffect(() => {
        console.log("Sending use get movie request")
        axios.get(`https://www.omdbapi.com/?apikey=c24c2c7d&s=${keyword}`)
        .then((res) => { setData(res.data)})       
    },[term])
    
    return data
}

export default useGetMovies


//const API_KEY = '2b0dcf08'
//https://www.omdbapi.com/?apikey=c24c2c7d&s=batma