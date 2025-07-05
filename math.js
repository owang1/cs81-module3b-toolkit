function double(n) {
	return 2*n;
}

function square(n) {
	return n*n;
}

function isEven(n) {
	return n % 2 == 0;
}

function isOdd(n) {
	return n % 2 != 0;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a/b;
}
//const input = Number(process.argv[2]);
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
console.log(divide(a, b));
