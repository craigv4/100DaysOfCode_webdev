let inputText = document.querySelector("input");
let remainderCount = document.getElementById("remainder");

let newCountFunction = function functionA(event) {
	let enteredText = event.target.value;

	let enteredTextLength = enteredText.length;

	let remainderChar = inputText.maxLength - enteredTextLength;

	remainderCount.textContent = remainderChar;
};

let wordCount = inputText.addEventListener("input", newCountFunction);
