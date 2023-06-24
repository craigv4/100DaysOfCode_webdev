// first section code , calculate sum

const sumButton = document.querySelector("#calculator button");
sumButton.addEventListener("click", calculateSum);

function calculateSum() {
	const inputNumber = document.getElementById("user-number");

	let sumValue = 0;

	for (let i = 0; i <= inputNumber.value; i++) {
		sumValue = sumValue + i;
		const sumOutput = document.getElementById("calculated-sum");
		sumOutput.textContent = sumValue;
		sumOutput.style.display = "block";
	}
}

// second section code, highlight links
const highlightButton = document.querySelector("#highlight-links button");

highlightButton.addEventListener("click", highlightLinks);

function highlightLinks() {
	const links = document.querySelectorAll("#highlight-links a");

	// links.forEach((link) => {
	// 	link.classList.add("highlight");
	// });
	for (const link of links) {
		link.classList.add("highlight");
	}
}

// third section code, Display User Data

let dummyData = {
	superName: "batman",
	superPower: "none",
	superFriend: "superman",
};

const displayUserButton = document.querySelector("#user-data button");
const ulElement = document.getElementById("output-user-data");

displayUserButton.addEventListener("click", displayUserData);

function displayUserData() {
	ulElement.innerHTML = "";

	for (const key in dummyData) {
		const newElement = document.createElement("li");
		const newElementText = key + ": " + dummyData[key];
		newElement.textContent = newElementText;
		ulElement.append(newElement);
	}
}

// forth section code, find out how many dice rolls
const rollDiceButton = document.querySelector("#statistics button"); // select button

function generateRandomNumber() {
	return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
} // function to generate random number from 0 to 6

function rollTheDice() {
	const enteredNumberElement = document.getElementById("user-target-number"); //select entered number element
	const rollDiceUlElement = document.getElementById("dice-rolls"); // select main ul element

	const userEnteredNumber = enteredNumberElement.value; // get the value of user input
	rollDiceUlElement.innerHTML = ""; // setting html element of ul to empty

	let hasUserNumber = false; // define that user entered number is not what we got in rolled dice

	let numberOfRolls = 0; // number of time dice was rolled, setting it to initial value of 0

	while (!hasUserNumber) {
		const randomNumber = generateRandomNumber(); // run the function that generates random number from 0 to 6
		numberOfRolls++; // incrementing number of time dice is rolled
		const newListElement = document.createElement("li"); // create a new element that will store rolled number
		let listText = "Roll" + numberOfRolls + "➡" + randomNumber; // creating a value that will be added to new created li items and storing into a variable
		newListElement.textContent = listText; // adding value to newly created li element
		rollDiceUlElement.append(newListElement); // adding new li to ul element
		hasUserNumber = randomNumber == userEnteredNumber; // checking if rolled number is same as user input
	}
	const outputTotalRolls = document.getElementById("output-total-rolls");
	const outputTargetNumber = document.getElementById("output-target-number");

	outputTargetNumber.textContent = userEnteredNumber; // updating spans with results
	outputTotalRolls.textContent = numberOfRolls; // updating spans with results
}
rollDiceButton.addEventListener("click", rollTheDice); // click the button to get result
