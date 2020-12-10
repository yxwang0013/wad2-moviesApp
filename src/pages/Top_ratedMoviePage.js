import React, { useContext } from "react";
import AddToWatchlistButton from '../components/buttons/addToWatchlist';
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext'

const Top_ratedMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.Top_rated.filter((m) => {  // New
    return !("watchlist" in m);
  });

  

  return (
      <PageTemplate
        title='Top_rated Movie'
        movies={movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default Top_ratedMoviePage;