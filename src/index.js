import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeoplesContextProvider from "./contexts/peoplesContext";
import AuthProvider from "./contexts/authContext";

const HomePage = lazy(() => import("./pages/homePage"))
const UpcomingMoviePage = lazy(() => import("./pages/UpcomingMoviePage"))
const Top_ratedMoviePage = lazy(() => import("./pages/Top_ratedMoviePage"))
const WatchlistMoviesPage = lazy(() => import('./pages/watchlistMoviePage'))
const Now_playingMoviePage = lazy(() => import('./pages/NowplayingMoviePage'))
const MovieCreditsPage = lazy(() => import("./pages/movieCreditsPage"))
const MoviePage = lazy(() => import('./pages/movieDetailsPage'))
const FavoriteMoviesPage = lazy(() => import('./pages/favoritesMoviesPage'))
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"))
const SiteHeader= lazy(() => import( './components/siteHeader'))
const AddMovieReviewPage = lazy(() => import( './pages/addMovieReviewPage'))
const AddPeopleReviewPage  = lazy(() => import( './pages/addPeopleReviewPage'))
const SimilarMoviesPage = lazy(() => import( './pages/similarMoviesPage'))
const PeoplePage = lazy(() => import( './pages/peoplePage'))
const PeopleDetailsPage = lazy(() => import( './pages/peopleDetailsPage'))
const signUpPage = lazy(() => import( "./pages/signUpPage"))
const loginPage = lazy(() => import( "./pages/loginPage"))
const PrivateRoute = lazy(() => import( "./components/privateRoute"))
const profilePage = lazy(() => import( "./pages/profilePage"))

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
                    <PrivateRoute exact path="/movies/profile" component={profilePage} />
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

ReactDOM.render(
  <Suspense fallback={<h3>Loading... </h3>}>
    <App />,
  </Suspense>,
  document.getElementById("root")); 