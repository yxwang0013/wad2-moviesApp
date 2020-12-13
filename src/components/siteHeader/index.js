import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
        <div class="dropdown" >
        <button class="dropbtn">movies</button>
        <div class="dropdown-content">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/Top_rated">
              Top
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/now_playing">
              Nowplaying
            </Link>
          </li>
          </div>
          </div> 
          <div class="dropdown" style={{marginLeft:10}}>
          <button class="dropbtn">lists</button>
          <div class="dropdown-content">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watchlist
            </Link>
          </li>
          </div>
          </div>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;