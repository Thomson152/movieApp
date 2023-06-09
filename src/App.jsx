import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import YouTube from 'react-youtube';

const App = () => {
  const [movies, setMovies] = useState([]);
  // f81ad358a9b0542a2035785519231410 
  console.log(movies);



  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=f81ad358a9b0542a2035785519231410 `
        );
        const topRatedResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=f81ad358a9b0542a2035785519231410 `
        );
        const upcomingResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=f81ad358a9b0542a2035785519231410 `
        );

        setPopularMovies(popularResponse.data.results);
        setTopRatedMovies(topRatedResponse.data.results);
        setUpcomingMovies(upcomingResponse.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  async function fetchTrailer(movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f81ad358a9b0542a2035785519231410`
      );
      const videos = response.data.results;
      if (videos.length > 0) {
        const trailerKey = videos[0].key;
        setTrailerKey(trailerKey);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }

  function closeTrailerModal() {
    setTrailerKey('');
  }


  
  
  
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <h1 className="text-2xl my-5 pl-4 text-white">Popular Movies</h1>
      <ul className="grid md:grid-cols-6 pl-5 grid-cols-3 gap-3 items-center">
        {popularMovies.slice(0,6).map((movie) => (
          <li key={movie.id}>
            {/* <h2 className="text-white">{movie.title}</h2> */}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded items-center"
              />
            )}
        {/* <button onClick={() => fetchTrailer(movie.id, 'popular')} className='text-white'>Watch Trailer</button> */}
          </li>
        ))}
      </ul>


      <h1 className="text-2xl my-5 pl-4 text-white">Top Rated Movies</h1>
      <ul className="grid md:grid-cols-6 pl-5 grid-cols-3 gap-3 items-center">
        {topRatedMovies.slice(0,6).map((movie) => (
          <li key={movie.id}>
            {/* <h2 className="text-white">{movie.title}</h2> */}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded items-center"
              />
            )}
        {/* <button onClick={() => fetchTrailer(movie.id, 'top-rated')} className='text-white'>Watch Trailer</button> */}
          </li>
        ))}
      </ul>


      <h1 className="text-2xl my-5 pl-4 text-white">Up Coming Movies</h1>
      <ul className="grid md:grid-cols-6 pl-5 grid-cols-3 gap-3 items-center">
        {upcomingMovies.slice(0,6).map((movie) => (
          <li key={movie.id}>
            {/* <h2 className="text-white">{movie.title}</h2> */}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded items-center"
              />
            )}
        {/* <button onClick={() => fetchTrailer(movie.id, 'upcoming')} className='text-white'>Watch Trailer</button> */}
          </li>
        ))}
      </ul>

  {
    
  }
     

      
    </div>
  );
};

export default App;
