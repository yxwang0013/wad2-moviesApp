import React, { useContext } from "react";
import AddToToplistButton from '../components/buttons/addToToplist';
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext'

const Now_playingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.Now_playing.filter((m) => {  // New
    return !("toplist" in m);
  });

  

  return (
      <PageTemplate
        title='Nowplaying Movie'
        movies={movies}
        action={(movie) => {
          return <AddToToplistButton movie={movie} />;
        }}
      />
  );
};

export default Now_playingMoviePage;