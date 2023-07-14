// "for" loop (certain no. of time)
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// "for of" loop (arrays)
let heroes = ["superman", "batman", "Wolverine"];

for (const hero of heroes) {
	console.log(hero);
}

// you can also use "for" loop on arrays as well
for (let i = 0; i < heroes.length; i++) {
	const hero = heroes[i];
	console.log(hero);
}

// "for in" loop (object)

let object = {
	name: "superman",
	otherName: "kal-el",
	enemy: "lex-luther",
	age: 32,
	haveSuperpower: true,
};

for (const key in object) {
	console.log(key);
	console.log(object[key]); //same as console.log(object.name), but for all objects
}

// "while" loop (while something is true / false)

let confirmExit = false;

while (!confirmExit) {
	confirmExit = confirm("Are you sure you want to quit?");
}

console.log("done");



// Day 52 of #100DaysOfCode #webdevelopment

// ✔ Introduction to Backend
// ✔ Storing user data
// ✔ validating user auth with backend code