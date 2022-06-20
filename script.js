"use strict";
/*
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");

function calc(a,b) {
    return(a + b);
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

//------------------------

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
*
//-----------------

const logger = function(){
    console.log("Hello");
};

logger();

//const calc = (a, b) => a + b;

const calc = (a, b) => {
    console.log('1');
    return a + b;
}*/
//---
function getMathResult(num1, num2){

    let str = '';

    for (let i = 1; i <= num2; i++){
        if (i === num2){
            str += `${num1 * i}`;
        } else {
            str += `${num1 * i}---`;
        }
    }
    return str;
}
console.log(getMathResult(2, 13));