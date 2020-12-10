import React, { useContext } from "react";
import AddToToplistButton from '../components/buttons/addToToplist';
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext'

const Top_ratedMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.Top_rated.filter((m) => {  // New
    return !("toplist" in m);
  });

  

  return (
      <PageTemplate
        title='Top_rated Movie'
        movies={movies}
        action={(movie) => {
          return <AddToToplistButton movie={movie} />;
        }}
      />
  );
};

export default Top_ratedMoviePage;