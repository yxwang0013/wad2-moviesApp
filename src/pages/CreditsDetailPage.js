import React from "react";
import PageTemplate from "../components/templateMoviePage";
import CreditsDetail from "../components/CreditsDetail";
import useMovie from "../hooks/useMovie";

const CreditsDetail = props => {
  const { id } = props.match.params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie] = useMovie(id)  // NEW
  
  return (
    <>
    {movie ? (
      <>
      <PageTemplate movie={movie}>
        <MovieCredits movie={movie} /> 
      </PageTemplate>
      </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CreditsDetail;
