"use srtict";

const str = "teSt";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
//---
const fruit = "Some fruit";
console.log(fruit.indexOf("q"));
//---
const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 11));
//---
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));