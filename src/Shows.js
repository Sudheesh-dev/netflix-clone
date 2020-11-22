import React,{useState} from 'react'
import './Shows.css'
import Row from './Row'
import { requests } from './requests'
import movieTrailer from 'movie-trailer'
import Spinner from './spinner'

function Shows() {
    const [trailerID, setTrailerID] = useState(null)
    const [trailerLoading, settrailerLoading] = useState(false)
    const [previousMovie, setPreviousMovie] = useState(null)
    
    const showTrailerHandler=async(movie)=>{      
        if (trailerID && movie.title?movie.title:movie.original_name == previousMovie){
            setPreviousMovie(null)
            setTrailerID(null)
            //console.log('setting => setTrailerID(null)')
        }else{
            // console.log(movie)
            settrailerLoading(true)
            const movieName = movie.title?movie.title:movie.original_name
            movieTrailer(movieName)
            .then((url)=>{
                setPreviousMovie(movieName)
                setTrailerID(url.split('=')[1])
                //console.log(trailerID)
                settrailerLoading(false)
            })
            .catch(()=>{settrailerLoading(false);setTrailerID(null);console.log('error fetching trailer url');alert("Trailer Not Available, Please try Another Movie")})
            }       
    }

    let trailerPlayer = null
    let trailer = null
    if(trailerID){
        trailer =  <iframe title='video' width="100%" height="350" src={`https://www.youtube.com/embed/${trailerID}?&autoplay=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
    if (trailerLoading){
        trailerPlayer = <Spinner></Spinner>
    }else{
        trailerPlayer = trailer
    }
    return (
        <div className='shows'>
            <Row title='Netflix Originals' cardType='large' fetchURL={requests.fetchNetflixOriginals} showTrailer={(movie)=>{showTrailerHandler(movie)}}></Row>
            {trailerPlayer}
            <Row title='Trending' cardType='small' fetchURL={requests.fetchTrending}></Row>
            <Row title='Top Rated' cardType='small' fetchURL={requests.fetchTopRated}></Row>
            <Row title='Action Movies' cardType='small' fetchURL={requests.fetchActionMovies}></Row>
            <Row title='Comedy Movies' cardType='small' fetchURL={requests.fetchComedyMovies}></Row>
            <Row title='Horror Movies' cardType='small' fetchURL={requests.fetchHorrorMovies}></Row>
            <Row title='Romance Movies' cardType='small' fetchURL={requests.fetchRomanceMovies}></Row>
            <Row title='Documentaries' cardType='small' fetchURL={requests.fetchDocumentaries}></Row>
        </div >
    )
}

export default Shows
