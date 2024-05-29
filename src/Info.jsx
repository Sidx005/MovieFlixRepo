import React, { useEffect, useState } from 'react'
import './info.css'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlayCircle, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Navabar from './Navabar';
import Footerr from './Footerr';
faThumbsUp
const Info = () => {
const{id}=useParams();
const[movie,setMovie]=useState(null);
const[loading,setLoading]=useState(true);

useEffect(()=>{
    axios.get('https://sidx005.github.io/MoviesAPI/MovieApi.json')
    .then(res=>{
        const movie=res.data.movies.find(m=>m.id===parseInt(id))
        setMovie(movie);
        setLoading(false)
    })
    .catch(e=>{
        console.error('Error',error)
        setLoading(false)
    });
},[id])

if (loading) {
    return <div style={{marginTop:'5%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <div className="loader"></div>
    <p style={{color:'#fff',marginTop:'3%',textAlign:'center'}}>Loading...</p>
  </div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='infocontainer'>
      <Navabar/>
        <div className="infoCard">
        <img src={movie.poster} alt={movie.title} />

            <p>{movie.description}</p>
            <div className="buttondiv">
            <button><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
            <Link to={`/trailer/${movie.id}`} style={{color:'black',textDecoration:'none'}}>Watch trailer</Link></button>
            <button id='Like'>
            <FontAwesomeIcon icon={faThumbsUp} style={{  color: '#007BFF' }} />
            </button>
            <button id='Like'>
            <FontAwesomeIcon icon={faThumbsDown} style={{  color: '#007BFF' }} />
            </button>

            </div>
        </div>
    </div>
  )
}

export default Info