I tested the double() function by adding the lines:
const input = Number(process.argv[2]);
console.log(double(input));

Then on the command line, I did the command "node math.js 5", and received the result 10. "node math.js 6" returned 12. "node math.js 0" returned 0. And "node math.js .2" returned .4, everything was as expected.

Testing out square() gave expected results, like 4 for 2 and 25 for 5, as well as 25 for -5.

Testing isEven() gave the expected results, although it was true and false, not True and False (capitalized). Some examples were 2, 0, -2, and 4 returned true. 3 and .2 returned false.

Testing isOdd() gave the expected results. Some examples were 1, 3, and 33 returned true. 0 and 2 returned false.

Testing multiply() gave the expected results, like giving 3 & 4 gave 12. 3&-3 gave -9. And decimal numbers also gave the expected result, like .5&5 gave 2.5.

Testing divide() gave mostly the expected results. 4 & 1 gave 4, 4 & .1 gave 40, and 4 and -2 gave -2. But 4 & 0 gave Infinity, not NaN.
