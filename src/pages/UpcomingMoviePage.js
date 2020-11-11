import React, { useState, useEffect } from "react";
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import PageTemplate from '../components/templateMovieListPage';
import {getUpcomingMoviePage} from "../api/tmdb-api";

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMoviePage().then(movies => {
      setMovies(movies);
    });
  }, []);

  

  return (
      <PageTemplate
        title='Upcoming Movie'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviePage;