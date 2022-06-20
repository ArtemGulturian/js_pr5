"use strict";
/*
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
        const a = prompt('Укажите один из просмотренных фильмов', ''),
              b = prompt('На сколько вы его оцените?', '');
    
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
*
//---
// Место для первой задачи
// объем полной поверхности = а^3
// площадь полной поверхности = 6 * a^2
function calculateVolumeAndArea(rebro) {
    if (typeof(rebro) !== 'number' || rebro < 0  || !Number.isInteger(rebro) ){
        return "При вычислении произошла ошибка";    
    }
    rebro = prompt('Введите целое число ребра куба', '');
        let surfaceVolume = Math.pow(rebro, 3);
        let square = 6 * Math.pow(rebro, 2);

    return `Объем куба: ${surfaceVolume}, площадь всей поверхности: ${square}`;
}
console.log(calculateVolumeAndArea(5));*/

// Место для второй задачи
function getCoupeNumber(coupeNumber) {
    if (coupeNumber === 0 || coupeNumber > 36){
        return "Таких мест нет";
    }
    if (typeof(coupeNumber) !== 'number' || coupeNumber < 0 || !Number.isInteger(coupeNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    for (let i = 4; i <=36; i + 4){
        return Math.ceil(coupeNumber / i);
    }
}
console.log(getCoupeNumber(15));