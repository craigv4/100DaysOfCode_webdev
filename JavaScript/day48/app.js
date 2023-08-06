/* Challenge 1

Why doesn't this code work?  Try to make it work and guess what the result will be (hint: this is a little bit of a review from last lesson). */

const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

/* Challenge 2

Do the following two blocks of code result in the same answer?  If not, which one would you recommend using and why? */

// const firstNumber = 20;
// const secondNumber = '20';

// const result = firstNumber === secondNumber;

// console.log(result);

// const firstNumber = 20;
// const secondNumber = '20';

// const result = firstNumber == secondNumber;

// console.log(result);

/* correct way to write above code */

const firstNumber = 20;
const secondNumber = 20;

result = firstNumber === secondNumber;

console.log(result);

/* Challenge 3

What does `expression5` evaluate to?  How could you write this in a single line of code (for exercise purposes only; you would never want to combine all this in one line)?
 */

const expression1 = 100 % 50; // this will equal to 0
const expression2 = 100 / 50; // this will equal to 2
const expression3 = expression1 < expression2; // hence this would be true
const expression4 = expression3 && 300 + 5 === 305; // 300 + 5 is 305 which compare to 305 === 305, and expression3 is already true, hence expression4 should also be true
const expression5 = !expression4; // hence the opposite of expression4(true) would be false

console.log(expression5); // hence this would result into false

const result1 = !(100 % 50 < 100 / 50 && 300 + 5 === 305);
// this is how you would write all 5 of above expressions into combine one line

/* Challenge 4
What does `result` evaluate to?  You might want to review the previous lesson for this one.
 */

const myObj = {
	prop1: "first value",
	prop2: 20,
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === myArray[0] / myArray[2];

/*
myObj.prop2 = 20
myArray[0] = 40
myArray[2] = 2

hence myArray[0] / myArray[2] = 20

20 === 20

true

*/
