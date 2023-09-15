import { useState, useEffect } from 'react' 
import axios  from 'axios'
import { useParams } from 'react-router-dom'



function Movie() {
    const [params, setParams] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {post_id}  = useParams()
    const apiKey = "api_key=9ea3e26c3fe15640782a8ab5434a1bfe"    
    console.log(post_id);
    let APIUrl = "https://api.themoviedb.org/3/movie/"
    let fullUrl = `${APIUrl}${post_id}?${apiKey}&language=en-US`
    useEffect(() => {
        setLoading(false)
        
        axios.get(fullUrl)
            .then((response) =>  {console.log(response.data); setParams(response.data)} )
            .catch(err => { console.log(err); setError(err.message)})
    }, [])
    let posterUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    let posterPath = params.poster_path
    let getPoster = posterUrl + posterPath
    
  return (
    <div>
    { loading ? <h1 className='loading'>LOADING...</h1> :
        <div className='movie-details flex'>
            <div className=''>
                <img src={getPoster} alt='params.title'></img>
            </div>
            <div className='movie-detail-text'>
                <h2>Title: <span data-testid="movie-title">{params.title}</span>  </h2>
                <p >Release Date: <span data-testid="movie-release-date">{params.release_date} </span> </p>
                <p>Duration: <span data-testid="movie-runtime">{params.runtime} </span> mins</p>
                <p  className='movie-overview'>Overview: <span data-testid="movie-overview">{params.overview} </span> </p>
            </div>

        </div>
        

} <p className="d-flex">{error}</p>
    </div>
 )
}

export default Movie

