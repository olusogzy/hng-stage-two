import { useState, useEffect } from "react"
import "../App.css"
import ArrowRight from "../icons/arrow.svg"

import MovieCard from "./MovieCard"
import axios  from 'axios'




function Select() {
    const [ posts, setPosts ] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    

    useEffect(() => {
        setLoading(false)
        let APIUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=9ea3e26c3fe15640782a8ab5434a1bfe"
        axios.get(APIUrl)
            .then((response) =>  { setPosts(response.data.results)} )
            .catch(err => { console.log(err); setError(err.message)})
    }, [])
    
    
        console.log([posts]);
    return(
        <div>
        
        {loading ? <h1 className='loading'>LOADING...</h1> :
        <div className='feature-wrapper'>
            <div className='feature-div'>
                <div className='feature-header'>
                    <h2>Featured Movies</h2>
                </div>
                <div className='see-more'>
                    <p>See more</p>
                    <img src={ArrowRight} alt='arrow'></img>
                </div>
                
            </div>
            <div className='flex overflow-y-auto px-5 '>
                {posts.map((post, id) =>{
                    return <MovieCard key={id}  {...post}/>
                })}

            </div>
        </div>} <p className="d-flex">{error}</p>
        
        </div>
    )
  
  }

export default Select

