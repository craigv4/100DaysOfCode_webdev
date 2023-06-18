// console.log(document.body.children[1].children[0].href);

// document.body.children[1].children[0].href = "http://google.com";

// console.dir(document);

// console.log(document.body.children[1].children[0].href);

let link = document.getElementById("link-to-website");

link.href = "https://google.com";

// console.log(link.childNodes[0].parentElement.href);

// console.log(link.href); // same way to write above code

// wrote above code by looking into dev tools DOM tree and it logs "https://google.com"

let linkElement = document.querySelector("a");

linkElement.href = "https://google.com";

// console.log(linkElement.href);





// adding new elements via JavaScript

// (1) create a new element and add data to it

let newElement = document.createElement("a");

newElement.textContent = "LINK"; // adding content to the element

newElement.href = "https://www.instagram.com/"; // setting link to the newly added element

//  (2) get to the element where this new element will be inserted

let newElementP = document.querySelector("p");

// (3) insert the new element into parent

newElementP.append(newElement);






//  Removing the elements from the document

// (1) select the element that you need to remove

let toRemove = document.querySelector("h4");

// (2) remove the selected element

toRemove.remove();

// alternate way to remove , for older browsers

// toRemove.parentElement.removeChild(toRemove);






// to move element around, you will use APPEND only to place wherever you need to move the element around

newElementP.parentElement.append(newElementP);

console.dir(document.body);







console.dir(newElementP.textContent);   // console results to "New Para LINK"

// console.dir(newElementP.innerHTML);  // console results to "New Para <a href="https://www.instagram.com/">LINK</a>" , this will result to all html into the element


// console.dir(newElementP.innerText); // console results to "New Para LINK"

newElementP.innerText = "this is some text and <strong> this is the bold text </strong>"
// above code will result to {"this is some text and <strong> this is the bold text </strong>"}

newElementP.innerHTML = "this is some text and <strong> this is the bold text </strong>";
// above code will result to {"this is some text and this is the bold text"} keeping the text in the <strong> element as bold