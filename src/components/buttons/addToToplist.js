import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToToplistButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToToplist = e => {
    e.preventDefault();
    context.addToTopList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToToplist}
    >
      Add to Top List
    </button>
  );
};

export default AddToToplistButton;