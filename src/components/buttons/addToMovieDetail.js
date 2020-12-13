import React from "react";
import { Link } from "react-router-dom";

const addToMovieDetail = ({ movie }) => {
  return (
    <Link
    to={{
      pathname: `/movies/${movie.id}`,
      state: {
        movie: movie
      }
    }}
  >
    Details
  </Link>
  
    
  );
};

export default addToMovieDetail;