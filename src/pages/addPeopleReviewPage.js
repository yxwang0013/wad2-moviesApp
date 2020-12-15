import React from "react";
import PageTemplate from "../components/templatePeoplePage";

const ReviewFormPage = props => {

  return (
      <PageTemplate people={props.location.state.people}>
          <h3>Placeholder for web form</h3>
      </PageTemplate>
  );
};
export default ReviewFormPage;