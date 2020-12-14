import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
const Header = ({ title, numMovies, history }) => {
    return (
        <div className="row">
            <div className="col-2">
                <button onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
                    <span>{" Back"}</span>
                </button>
            </div>
            <div className="col-md-6 offset-4" style={{ marginRight:20, marginDown:0 }}>
                <h2>
                    {`${title}  `}
                    <span className="badge badge-pill badge-success">{numMovies}</span>
                </h2>
            </div>
        </div>
    );
};

export default withRouter(Header);