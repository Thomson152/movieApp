import React, { useEffect, useState } from 'react';
import axios from 'axios';


function NetflixBanner() {
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=f81ad358a9b0542a2035785519231410'
        );
        const movies = response.data.results;
        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          const bannerImageUrl = `https://image.tmdb.org/t/p/original${movies[randomIndex].backdrop_path}`;
          setBannerImage(bannerImageUrl);
        }
      } catch (error) {
        console.error('Error fetching banner image:', error);
      }
    }

    fetchBannerImage();
  }, []);

  return (
    <div className="relative">
      <img className="w-full h-[700px]" src={bannerImage} alt="Netflix Banner" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-[10rem] left-0 right-0 pb-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Discover New Shows
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4">
          Stream the latest movies, TV shows, and documentaries
        </p>
        <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
          Start Watching
        </button>
      </div>
    </div>
  );
}

export default NetflixBanner;
