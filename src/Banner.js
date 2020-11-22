import React ,{useEffect, useState}from 'react'
import axios from './axios'
import './Banner.css'
import { requests } from './requests'


function Banner() {
    const [banner, setBanner] = useState()
    const baseURL = 'https://image.tmdb.org/t/p/original'

     useEffect(() => {
        //console.log('RUNNING USEEFFECT 2')
        axios.get(requests.fetchNetflixOriginals)
            .then((res) => { setBanner(res.data.results[
                Math.floor(Math.random() * (res.data.results.length-1))
            ])})
    }, [])
    
    return (
        <div className='banner'>
            <img className='bannerImage' src={`${baseURL}${banner?.backdrop_path}`} alt='IMAGE'></img>
            <div className='bannerGradient'></div>
            <div className='bannerInfo'>
                <h1>{banner?.original_name}</h1>
                <div className='bannerButtons'>
                    <button className='bannerButton'>Play</button>
                    <button className='bannerButton'>My List</button>
                </div>
                <p className='bannerDescription'>{banner?.overview}</p>
            </div>
        </div>
    )
}

export default Banner
