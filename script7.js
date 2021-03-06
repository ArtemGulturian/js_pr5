"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remembersMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Укажите один из просмотренных фильмов', '').trim(),
              b = prompt('На сколько вы его оцените?', '').trim();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
remembersMyFilms();

function detectPersanalLevel(){
    if(personalMovieDB.count < 10){
        console.log("просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы класический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("ошибка");
    }
}
detectPersanalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i=1; i <=3; i++){
        const genre = prompt(`Ваш д.бимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();
