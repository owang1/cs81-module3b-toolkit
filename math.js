function double(n) {
	return 2*n;
}

function square(n) {
	return n*n;
}

const input = Number(process.argv[2]);
console.log(square(input));
