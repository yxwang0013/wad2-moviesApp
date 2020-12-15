import React from "react";
import { Link } from "react-router-dom";

const SeeDetails = ({ people }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/peoples/${people.id}`,
        state: {
          people: people
        }
      }}
    >
      Details
    </Link>
  );
};

export default SeeDetails;
