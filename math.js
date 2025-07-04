function double(n) {
	return 2*n;
}

function square(n) {
	return n*n;
}

function isEven(n) {
	return n % 2 == 0;
}

const input = Number(process.argv[2]);
console.log(isEven(input));
