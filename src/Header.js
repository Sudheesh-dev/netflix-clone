import {useState, useEffect}from 'react'
import './Header.css'
import image from './assets/netflix1.png'
import SearchIcon from '@material-ui/icons/Search';
import useGetMovies from './useGetMovies'
//import {response }from './response'
import SearchResult from './SearchResult'


function Header() {
    const[showHeader, setShowHeader] = useState(false)
    const[showSearchResult, setShowSearchResult] = useState(false)
    const[searchTerm, setSearchTerm] = useState('')
    //useGetMovies('bat')
    let data = useGetMovies(searchTerm)
    //let DATA = 
    //console.log('DATAa', data)  
    useEffect(() => {
        //console.log('Running useEffect Header')
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100||showSearchResult){
                setShowHeader(true)
            }else{
                setShowHeader(false)
            }
        })
    }, [showSearchResult])
    const hideResultsHandler = ()=>{
        setShowSearchResult(false)
        setSearchTerm('')
        if (window.scrollY<100){
            setShowHeader(false)
        }
    }
    const showPosterHandler = (poster) => {
        //console.log(poster)
        // if (poster!=='N/A'){
        //     window.open(poster)
        // }      
    }
    return (
        <div className='header' style={{backgroundColor:showHeader?'rgba(14, 14, 14, 0.925)':'rgba(0, 0, 0, 0)'}}>
            <img src={image} alt='NETFLIX'></img>
            <form className='headerForm'>
                <SearchIcon className='headerSearchIcon'></SearchIcon>
                <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} onClick={()=>{setShowSearchResult(true);setShowHeader(true)}}placeholder='Search'className='headerInput'></input>
            </form>
            {showSearchResult?<SearchResult className='headerResult' data={data} hide={hideResultsHandler} showPoster={showPosterHandler}></SearchResult>:null}
        </div>
    )
}

export default Header
