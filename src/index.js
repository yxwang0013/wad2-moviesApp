import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/homePage";
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import Top_ratedMoviePage from "./pages/Top_ratedMoviePage";
import WatchlistMoviesPage from './pages/watchlistMoviePage';
import Now_playingMoviePage from './pages/NowplayingMoviePage';
import MovieCreditsPage from "./pages/movieCreditsPage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddPeopleReviewPage from './pages/addPeopleReviewPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import PeoplePage from './pages/peoplePage'
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PeoplesContextProvider from "./contexts/peoplesContext";
import AuthProvider from "./contexts/authContext"
import signUpPage from "./pages/signUpPage";
import loginPage from "./pages/loginPage";
import PrivateRoute from "./components/privateRoute"

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
            <PeoplesContextProvider>{/* NEW  */}

              <GenresContextProvider>    {/* NEW */}
              <AuthProvider>
                <Switch>
                  <Route exact path="/movies/people" component={PeoplePage} />
                  <Route exact path="/people/:id" component={PeopleDetailsPage} />
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/reviews/form" component={AddPeopleReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                  <Route exact path="/movies/Top_rated" component={Top_ratedMoviePage} />
                  <PrivateRoute exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                  <Route exact path="/movies/now_playing" component={Now_playingMoviePage} />
                  <Route exact path="/movies/:id/movieCredits" component={MovieCreditsPage} />
                  <Route exact path="/movies/signup" component={signUpPage} />
                  <Route exact path="/movies/login" component={loginPage} />                       
                  <Route path="/:id/similar" component={SimilarMoviesPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
                </AuthProvider>

              </GenresContextProvider>    {/* NEW */}
            </PeoplesContextProvider>
          </MoviesContextProvider>     {/* NEW */}
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 