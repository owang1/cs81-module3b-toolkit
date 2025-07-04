I tested the double() function by adding the lines:
const input = Number(process.argv[2]);
console.log(double(input));

Then on the command line, I did the command "node math.js 5", and received the result 10. "node math.js 6" returned 12. "node math.js 0" returned 0. And "node math.js .2" returned .4, everything was as expected.

Testing out square() gave expected results, like 4 for 2 and 25 for 5, as well as 25 for -5.
