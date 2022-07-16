const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilmWatch = prompt('Один из последних просмотренных фильмов ?', '');
const userRatingFilm = prompt('На сколько оцените его ?', '');


personalMovieDb.movies[lastFilmWatch] = userRatingFilm;

console.log(personalMovieDb);