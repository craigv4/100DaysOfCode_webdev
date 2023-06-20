const inputText = document.querySelector("input");
const remainderCount = document.getElementById("remainder");

let newCountFunction = function functionA(event) {
	const enteredText = event.target.value;

	const enteredTextLength = enteredText.length;

	const remainderChar = inputText.maxLength - enteredTextLength;

	remainderCount.textContent = remainderChar;

	if (remainderChar === 0) {
		inputText.classList.add("error");
		remainderCount.classList.add("error-text");
	} else if (remainderChar <= 10) {
		inputText.classList.add("warning");
		remainderCount.classList.add("warning-text");
		inputText.classList.remove("error");
		remainderCount.classList.remove("error-text");
	} else {
		inputText.classList.remove("warning");
		remainderCount.classList.remove("warning-text");
	}
};
inputText.addEventListener("input", newCountFunction);