import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watchlist Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchlistMoviesPage;