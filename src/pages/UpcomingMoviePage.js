import React, { useContext } from "react";
import AddToWatchlistButton from '../components/buttons/addToWatchlist';
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });

  

  return (
      <PageTemplate
        title='Upcoming Movie'
        movies={movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviePage;