let paragraphElement = document.querySelector("p");

function functionName() {
	paragraphElement.textContent = "You Clicked";
	console.log(paragraphElement.textContent);
}

paragraphElement.addEventListener("click", functionName);

let inputSpace = document.getElementById("input-space");

function printInputWords(event) {
	// inputSpace.value; this line is true but you can use below line as well
	event.target.value;
	console.dir(event.target.value);
}
inputSpace.addEventListener("input", printInputWords);
