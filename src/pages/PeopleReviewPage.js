import React from "react";
import PageTemplate from '../components/templatePeoplePage'
import PeopleReview from "../components/peopleReview";

const PeopleReviewPage = (props) => {
  return (
      <PageTemplate people={props.location.state.people}>
        <PeopleReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default PeopleReviewPage;