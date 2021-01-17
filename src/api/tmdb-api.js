export const getMovies = () => {
  return fetch(
    '/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};
export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
};
export const getUpcomingMovies = () => {
  return fetch(
    '/api/Upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getTop_ratedMovies = () => {
  return fetch(
    '/api/Top_rated', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getNow_playingMovies = () => {
  return fetch(
    '/api/Now_playing', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
export const getSimilarMovies = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(json => { return json });
};
export const getCreditDetail = (creditId) => {
  return fetch(
    `https://api.themoviedb.org/3/credit/${creditId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
};
export const getPeoples = () => {
  return fetch(
    '/api/Peoples', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getPeople = id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then(res => res.json());
};