import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { withRouter } from "react-router-dom";

const PeopleHeader = ({ people, history }) => {
  return (
    <div className="row">
      <div className="col-2">
        <button onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
          <span>{" Back"}</span>
        </button>
      </div>
      <div className="col-6 offset-3">
        <h2>
          {people.name}
          {"  "}
          <a href={people.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default withRouter(PeopleHeader);