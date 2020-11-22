import React from 'react'
import './ShowCard.css'

function ShowCard({ click, movie }) {
    const baseURL = 'https://image.tmdb.org/t/p/original'
    return (
        <div className='showCard'>
            <img onClick={click} className='showCardImage' src={`${baseURL}${movie.poster_path}`} alt='Image'></img>
        </div>
    )
}

export default ShowCard
