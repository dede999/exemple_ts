"use strict";
console.log('Hello World');
let some_number = 42;
let func = (...args) => {
    return args.reduce((acc, val) => {
        return acc + val;
    }, 0);
};
console.log(func(some_number, -3, 5, -2));
var ret_func = (...mult) => {
    return mult.map(m => (...arr) => {
        return arr.map((n) => { return n * m; });
    });
};
let multiplos = ret_func([3, 5, 7]);
console.log(multiplos[0](1, 3, 9, 27, 81, 243, 729));
console.log(multiplos[1](1, 5, 25, 125, 200));
console.log(multiplos[2](1, 7, 49));
