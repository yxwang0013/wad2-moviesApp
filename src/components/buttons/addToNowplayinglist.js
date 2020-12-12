import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToNowplayinglistButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToNowplayinglist = e => {
    e.preventDefault();
    context.addToNowplayingList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToNowplayinglist}
    >
      Add to Nowplaying List
    </button>
  );
};

export default AddToNowplayinglistButton;