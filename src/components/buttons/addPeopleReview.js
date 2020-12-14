import React from "react";
import { Link } from "react-router-dom";

const PeopleReviewButton = ({ people }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          people: people
        }
      }}
    >
      Write a Review  
      
    </Link>
  );
};

export default PeopleReviewButton;