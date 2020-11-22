import React from 'react'
import './ShowCardSmall.css'


function ShowCardSmall({ movie }) {
    const baseURL = 'https://image.tmdb.org/t/p/original'
    return (
        <div className='showCardSmall'>
            <img className='showCardSmallImage' src={`${baseURL}${movie.backdrop_path}`} alt='IMAGE___HERE'></img>
            <div className='showCardSmallInfo'>
                <h4 className='showCardSmallHeader'>{movie.title?movie.title:movie.original_name}</h4>
            </div>
        </div>
    )
}

export default ShowCardSmall
