import React from 'react'
import './SearchResult.css'

function SearchResult({data, hide, showPoster}) {
    //console.log(data.response.Search)
    return (
        <div>
            <div onClick={hide} className='searchResultBackdrop'></div>
            <div className='searchResult'>
            {data?.Search?.map((result)=>{
                return(
                    <div key={result?.imdbID} className='searchResultBar' onClick={()=>{
                            showPoster(result?.Poster)
                        }}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <h4 className='searchResultBarTitle'>{result?.Title}</h4>
                            <h5 className={result?.Type=='movie'?'searchResultBarTypeBlue':'searchResultBarTypeRed'}>{result?.Type}</h5>
                        </div>
                        <h4 className='searchResultBarYear'>{result?.Year}</h4>
                    </div>
                )
            })}      
            </div>
        </div>
       
    )
}

export default SearchResult
