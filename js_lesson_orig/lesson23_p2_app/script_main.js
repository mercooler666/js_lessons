'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');/* обьявляем через const ибо мы не знаем будет измин или нет// ставим унарный"+"перед prompt(поледлязаполнения) ибо мы будем получать числом */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},   /* {} - пустой обьект */ 
    actors: {},
    genres: [], /* [] пустой массив */
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB)