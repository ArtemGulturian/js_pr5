"use srtict";
/*
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr){
    return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

convert(500, usdCurr);
convert(500, eurCurr);

//-----

function test(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }
    console.log("Done");
}

test();

function doNothing(){}
console.log(doNothing() === undefined);
*/
//-------------------------------

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num +1];
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(num1, num2) {
    if (typeof(num2) !== 'number' || num2 <= 0){
        return num1;
    }
    
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
console.log(getMathResult(10, 5));