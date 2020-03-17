console.log('Hello World');
let some_number: Number = 42;

let func: Function = (...args: number[]) => { // rest
	return args.reduce((acc, val) => {
		return acc + val
	}, 0)
};

console.log(func(some_number, -3, 5, -2))

var ret_func: Function = (...mult: number[]): Function[] => {
	return mult.map(m => (...arr: number[]) => {
		return arr.map((n) => { return n * m })
	});
};

let multiplos = ret_func([3, 5, 7]);
console.log(multiplos[0](1, 3, 9, 27, 81, 243, 729))
console.log(multiplos[1](1, 5, 25, 125, 200))
console.log(multiplos[2](1, 7, 49))
