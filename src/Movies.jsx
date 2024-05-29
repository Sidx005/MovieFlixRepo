import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navabar from './Navabar';
import Footerr from './Footerr';
function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch('https://sidx005.github.io/MoviesAPI/MovieApi.json')
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container' >

      {loading ? (
       <div style={{marginTop:'5%'}}>
        <div className="loader"></div>
        <p style={{color:'#fff',marginTop:'10%',textAlign:'center'}}>Loading...</p>
      </div>
      ) : (
        
        <>
                       <Navabar/>

                 <h3 style={{marginTop:'10%'}}>Hollywood {'>'}</h3>
        <div className="slider">
       {movies.slice(0,10).map(m=>(
        <Link to={`/details/${m.id}`} key={m.id}>
         <img src={m.poster} alt={m.title} className="poster" />

        </Link>

       ))}
        </div>
        <h3>Bollywood {'>'}</h3>
        <div className="slider">
       {movies.slice(11,20).map(m=>(
 <Link to={`/details/${m.id}`} key={m.id}>
 <img src={m.poster} alt={m.title} className="poster" />

</Link>
       ))}

        </div>
            <Footerr/>

        </>
      )}  

    </div>
  );
}

export default Movies;
