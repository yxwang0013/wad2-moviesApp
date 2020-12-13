import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies,getTop_ratedMovies,getNow_playingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        Top_rated:[...state.Top_rated],
        Now_playing:[...state.Top_rated]
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        Top_rated:[...state.Top_rated],
        Now_playing:[...state.Top_rated]
      };
      case "add-toplist":
      return {
        Top_rated: state.Top_rated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, toplist: true } : m
        ),
        movies: [...state.movies],
        upcoming:[...state.upcoming],
        Now_playing:[...state.Top_rated]
      };
      
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming],Top_rated:[...state.Top_rated], Now_playing:[...state.Now_playing]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies],Top_rated:[...state.Top_rated],Now_playing:[...state.Now_playing] };
    case "load-Top_rated":
      return { Top_rated: action.payload.movies, movies: [...state.movies],upcoming: [...state.upcoming] ,Now_playing:[...state.Now_playing]};
    case "load-Now_playing":
      return { Now_playing: action.payload.movies, movies: [...state.movies],upcoming: [...state.upcoming],Top_rated:[...state.Top_rated] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        Top_rated:[...state.Top_rated],
        Now_playing:[...state.Top_rated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],Top_rated:[],Now_playing:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] , } });
  };

  const addToTopList = (movieId) => {
    const index = state.Top_rated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-toplist", payload: { movie: state.Top_rated[index] } });
  };


  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getTop_ratedMovies().then((movies) => {
      dispatch({ type: "load-Top_rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNow_playingMovies().then((movies) => {
      dispatch({ type: "load-Now_playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        Top_rated:state.Top_rated,
        Now_playing:state.Now_playing,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        addToTopList: addToTopList,
        
        
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
