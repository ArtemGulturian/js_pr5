"use strict"

function fib(arg) {
    let f = 0;
    let s = 1;
    let arr = [f, s];
    let res= '';

    for (let i = 2; i <= arg; i++){
        arr [i] = arr[i-1]+arr[i-2];
        res += `${arr[i]} `;
    }
    
    return res;
}
console.log(fib(10));