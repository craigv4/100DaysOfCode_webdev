const inputText = document.querySelector("input");
const remainderCount = document.getElementById("remainder");

let newCountFunction = function functionA(event) {
	const enteredText = event.target.value;

	const enteredTextLength = enteredText.length;

	const remainderChar = inputText.maxLength - enteredTextLength;

	remainderCount.textContent = remainderChar;
	};

inputText.addEventListener("input", newCountFunction);
