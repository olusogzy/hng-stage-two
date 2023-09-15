import React from 'react'
import "../App.css"
import Favorite from "../icons/Favorite.svg"
import { Link } from 'react-router-dom'


function MovieCard({poster_path, title, release_date, id}) {
    
    const getPosterUrl = "https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path


  return <div className=' flex flex-col gap-5 ms-5 ' data-testid='movie-card'>
            <div className='card' data-testid="movie-card">
            <Link to={`/movie/${id}`} >
                {/* <img src={Favorite} alt='favorite' className='favorite'></img> */}
                <button className='favorite'></button>
                <img src={getPosterUrl} alt={title} data-testid="movie-poster"></img>
                <p data-testid="movie-release-date">{release_date} </p>
                <h4 className='none-margin' data-testid="movie-title">{title}</h4>
            </Link>        
            </div>
        </div>
    
  
}

export default MovieCard

{/* <div className='d-flex-btw'>
                    <div className='imdb-icon d-flex'>
                        <img src={Imdb} alt='imdb'></img>
                        <p>86.0/100</p>
                    </div>
                    <div className='pngitem-icon d-flex'>
                        <img src={Pngitem} alt='pngitem'></img>
                        <p>97%</p>
                    </div>
                    
                </div>
                 */}