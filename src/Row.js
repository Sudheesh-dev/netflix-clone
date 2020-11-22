import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from './axios'
import ShowCard from './ShowCard'
import ShowCardSmall from './ShowCardSmall'


function Row({ title, cardType, fetchURL, showTrailer}) {
    const [data, setData] = useState()
    

    useEffect(() => {
        //console.log('RUNNING USEEFFECT')
        axios.get(fetchURL)
            .then((res) => { setData(res.data.results) })
    }, [fetchURL])


    if (cardType == 'large') {
        return (
            <div className='row'>
                <h2 className='showsHeader'>{title}</h2>
                <div className='showsRow'>
                    {data?.map((movie) => {
                        return (
                            <ShowCard key={movie.id} click={()=>showTrailer(movie)} movie={movie}></ShowCard>
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='row'>
                <h2 className='showsHeader'>{title}</h2>
                <div className='showsRow'>
                    {data?.map((movie,i) => {
                        if (i<7){
                            return (
                                <ShowCardSmall key={movie.id} movie={movie}></ShowCardSmall>
                            )
                        }else{
                            return(null)
                        }
                    })}
                </div>
            </div>
        )
    }

}

export default Row
