import React, { useContext } from "react";
import AddToNowplayinglistButton from '../components/buttons/addToNowplayinglist';
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext'

const Now_playingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.Now_playing.filter((m) => {  // New
    return !("nowplayinglist" in m);
  });

  

  return (
      <PageTemplate
        title='Nowplaying Movie'
        movies={movies}
        action={(movie) => {
          return <AddToNowplayinglistButton movie={movie} />;
        }}
      />
  );
};

export default Now_playingMoviePage;