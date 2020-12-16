import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateSimilarMovieListPage";
import { getSimilarMovies } from "../api/tmdb-api";
import AddToMovieDetail from '../components/buttons/addToMovieDetail';

const SimilarMoviesPage = props => {
  const { id } = props.match.params;


  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
        
  }, [id]);
  return (
    <PageTemplate 
      title= {`Similar Movies`}
      movies={similarMovies}
      action={(movie) => {
        return <AddToMovieDetail movie={movie} />;
      }}
    />
);
};

export default SimilarMoviesPage;
