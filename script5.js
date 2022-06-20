"use strict";
/*
// Место для первой задачи
function getTimeFromMinutes(min) {
    if (typeof(min) !== "number" || min < 0 || !Number.isInteger(min)){
        return "Ошибка, проверьте данные";
    }

    let m = min % 60;
    let h = Math.trunc(min/60);

    let hStr = '';
    switch (h){
        case 0:
            hStr = 'часов';
            break;
        case 1:
            hStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hStr = 'часа';
            break;
        default:
            hStr = 'часов';
    }

    return `Это ${h} ${hStr} и ${m} минут`;
}
console.log(getTimeFromMinutes(175));*/

// Место для второй задачи
function findMaxNumber(n1, n2, n3, n4) {
    if (typeof(n1) !== "number" ||
        typeof(n2) !== 'number' ||
        typeof(n3) !== 'number' ||
        typeof(n4) !== 'number'){
        return 0;
    }

    return Math.max(n1, n2, n3, n4);
}
console.log(findMaxNumber(2,45,5,'5'));