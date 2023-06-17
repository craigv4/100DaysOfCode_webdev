console.log("hello");

console.log(4 + 10);
console.log(4 - 10);
console.log(4 * 10);
console.log(10 / 4);

// There are integer numbers and there are floats
// integer numbers are 0,1,2,3,4,5,6,7,8
// floats numbers are 1.2,2.5,6.9,4.333,43.33

// example of modulo it gives the remainder of the answer

console.log(10 % 4); // 10 / 4 => 2 * 4 => remainder: 2
console.log(10 % 3); // 10 / 3 => 3 * 3 => remainder: 1

let result = 45 + 5;

result++; // is same as writing
result = result + 1;

result--; // is same as writing
result = result - 1;

result += 5; // is same as writing
result = result + 5;

result -= 5; // is same as writing
result = result - 5;

result /= 5; // is same as writing
result = result / 5;

result *= 5; // is same as writing
result = result * 5;

// concatenating string

let strings = "hello " + "world";

console.log(strings);

let a = "hi" + " there"; // 'hi there' => a string
let b = "the number" + " 2"; // 'the number 2' => a string
let c = "the number" + 2; // 'the number2' => a string
let d = 2 + 2; // 4 => a number
let e = 2 + "2"; // '22' => a string! ('2' and '2' concatenated)
let f = "2" + "2"; // '22' => a string! ('2' and '2' concatenated)
let g = "2" * 3; // 6 => a number

/* g might then again be confusing, as the result now suddenly is a number and not a string but the reason
for that is simple: JavaScript doesn't know what to do with * , / or - on strings. But instead of failing
immediately, it tries to convert the string to a number behind the scenes and use that converted number in
the operation instead. That's why we get the number 6 as a result. */

let userName = "hellomynameislongintheworld";

console.log(userName.length); // to count the length of the string
console.log(userName.toUpperCase()); // to uppercase all the letters in the string

let arrayName = ["hello", "world", "pale", "some"];
console.log(arrayName.length); // this also works on arrays
