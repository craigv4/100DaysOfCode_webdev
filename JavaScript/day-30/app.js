// ! Variables

let me = "Hi i'm a string";
let myAge = 29;
var name = "chirag";
const birthYear = 1994;

// ! arrays

let hobbies = ["playing", "coding", "eating", "driving"];

// ! Objects

let job = {
	name: "analyst",
	salary: 45000,
	place: "kalol",
};

// ? Accessing the objects

// console.log(job.name)

console.log(hobbies[0]); // to call an arrays
console.log(job.place); // to call an objects

// ! Functions

function calculateTodayYears() {
	return myAge + birthYear;
}

age = calculateTodayYears();
console.log(age);

function driverAgeFunction(currentYear, birthYear) {
	return currentYear - birthYear;
}

let driverAge = driverAgeFunction(2023, 1994);
console.log(driverAge);

let person = {
	name: "jobs", // variable in the object is called property
	age: 12,
	// ths is how you define function in the object
	// a function in the object is called ~method~
	greet() {
		console.log("hello world!");
	},
};

let print = person.greet()

console.log(print)
