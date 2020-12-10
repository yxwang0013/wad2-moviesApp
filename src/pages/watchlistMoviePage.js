import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToWatchlistButton from '../components/buttons/addToWatchlist'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watchlist Movies"}
      action={movie => <AddToWatchlistButton movie={movie} />}
    />
  );
};

export default WatchlistMoviesPage;