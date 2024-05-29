import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Trailer = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios.get('https://sidx005.github.io/MoviesAPI/MovieApi.json')
      .then(res => {
        const movieData = res.data.movies.find(m => m.id === parseInt(id));
        setMovie(movieData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !movie) {
    return <div>Error loading movie trailer</div>;
  }

  return (
    <div>
      <iframe
        src={getYouTubeEmbedUrl(movie.trailer_link)}
        allowFullScreen
        title={movie.title}
        style={{ width: '100%', height: '500px' }}
      ></iframe>
    </div>
  );
}

export default Trailer;
