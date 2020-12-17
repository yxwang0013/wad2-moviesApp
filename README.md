# Assignment 1 - ReactJS app.

Name: Yuxuan Wang

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - The login and signup functions enable users to view favourites, watchlist and their account
 + Feature 2 - The top_rated movies function can see the top movies
 + Feature 3 - The now_playing movies function can see the now_playing movies
 + Feature 4 - The watchlist function can see people who add the upcoming movies to the watchlist
 + Feature 5 - The similar movies function can see the similar movies at the button of moviesDetailsPage
 + Feature 6 - The actors function can see the cast of a movie
 + Feature 7 - The famous actor function can see the popluar actor with an actor list 
 + Feature 8 - The upcoming movies function can see the upcoming movies 
 + Feature 9 - The favourite movies function can see people who add the homepage movies to the favourites
 + Feature 10 - The movieDetails function can see the movie details if people who click the movie image
 + Feature 11 - The showReview function can see the reviews of each movie
 + Feature 12 - The actorDetails function can see the actor details if people who click the actor image

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

Install the firebase, react-bootstrap and the ES7 React/Redux/GraphQL/React-Native snippets.

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres.
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top_rated movies.
+ https://api.themoviedb.org/3/movie/now_playing - get a list of now_playing movies.
+ https://api.themoviedb.org/3/movie/${id}/similar - get a list of similar movies by id.
+ https://api.themoviedb.org/3/movie/${id}/credits - get the credits of each movie.
+ https://api.themoviedb.org/3/credit/${creditId} - get credits detail information on a specific movie by id.
+ https://api.themoviedb.org/3/person/popular - get a list of popular people .
+ https://api.themoviedb.org/3/person/${id} - get the detailed information on a specific people.
+ https://api.themoviedb.org/3/discover/movie - get a list of movies.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][component1]
![][component2]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][homepage]
>Shows the homepage of the movie app.

![][famous actor]
>Shows the famous actor of the cast list.

![][top]
>Show the top_rated movies by clicking the top button.

![][nowplaying]
>Shows the nowplaying movies by clicking the NowPlaying button.

![][watchlist]
>Shows the watchlist movies which are added by the upcoming movies.

![][login]
![][signup]
>Show the login page to login if clicking the 'account' button. If you don't have an account, you can click the signup button to signup. A new account will be created and it will appear in the firebase because it is connected to the firebase.


![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][moviecredits]
>Shows the actor list of each movie.

![][similar]
>Shows the similar movies of each movie.

![][PeopleDetail]
>Show the detailed information on a people. Clicking the image of the popular people will display the detailed information of that people.



## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/people (public) - displays the famous actors of the cast list.
+ /movies/Top_rated (public) - displays top-rated movies.
+ /movies/now_playing (public) - displays now_playing movies.
+ /movies/:id/movieCredits (public) - displays the casts of each movie.
+ /movies/signup (public) - displays the signup page.
+ /movies/login (public) - displays the login page.
+ /:id/similar (public) - displays the similar movies by each movie.
+ /movies/profile (private) - displays the user's login status.
+ /movies/favorites (private) - displays the favourite movies which are added by the movies.
+ /movies/watchlist (private) - displays the wachlist movies which are added by the upcoming movies.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardlink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][movieActorlink]
>Clicking the actor to display the casts of the specific movie.

![][similarlink]
>Clicking the similar movies to display the similar movies of the specific movie.

![][peoplelink]
> Clicking a card causes the display of that people's details.

![][loginlink]
> Clicking the login button to log in the profile page.

![][signuplink]
> Clicking the signup button to signup in the profile page.


## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

I use firebase to complete the login and the signup function. The file name includes:
file name: "./pages/signUpPage", "./pages/loginPage", "/src/firebase.js"

I also use private route to login.
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Yuxuan Wang

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,

+ Actor page - Shows the details about an actor. 

Tests: cypress/integration/actor-page.spec.js

![][PeopleDetail]

+ Home page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/home-page.spec.js

![][homepage]

+ Movie Credits page - Shows the credits in a movie. 

Tests: cypress/integration/movieCredits-page.spec.js 

![][moviecredits]

+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails-page.spec.js 

![][movieDetail]

+ Login and signup page: Displays the login page and the signup page, and verify the correction and logic of the login and signup.

Tests: cypress/integration/login-page.spec.js 

![][login]
![][signup]

+ Nowplaying movie page - Users can get nowplaying movies in TMDB and view their detailed information.

Tests: cypress/integration/nowPlaying-page.spec.js

![][nowplaying]

+ Top rated movie page - Users can get toprated movies in TMDB and view their detailed information.

Tests: cypress/integration/top-page.spec.js

![][top]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/xca54p/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/login-page.spec.js - test when the account or the password is wrong.


## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)



List reference material links (articles/blogs).

+ Layout Inspector-https://www.npmjs.com/package/cypress-layout-inspector.
+ Bunding and code-splitting

---------------------------------

[component1]: ./public/component1.png
[component2]: ./public/component2.png
[homepage]: ./public/homepage.png
[famous actor]: ./public/famousactor.png
[top]: ./public/top.png
[nowplaying]: ./public/nowplaying.png
[watchlist]: ./public/watchlist.png
[login]: ./public/login.png
[signup]: ./public/signup.png
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[moviecredits]: ./public/moviecredits.png
[similar]: ./public/similar.png
[PeopleDetail]: ./public/PeopleDetail.png
[cardlink]: ./public/cardlink.png
[reviewLink]: ./public/reviewLink.png
[movieActorlink]: ./public/movieActorlink.png
[similarlink]: ./public/similarlink.png
[peoplelink]: ./public/peoplelink.png
[loginlink]: ./public/loginlink.png
[signuplink]: ./public/signuplink.png
