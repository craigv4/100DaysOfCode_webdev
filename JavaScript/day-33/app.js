// console.log(document.body.children[1].children[0].href);


// document.body.children[1].children[0].href = "http://google.com";


// console.dir(document);

// console.log(document.body.children[1].children[0].href);

let link = document.getElementById("link-to-website")

link.href = "https://google.com"

console.log(link.childNodes[0].parentElement.href);

console.log(link.href); // same way to write above code

// wrote above code by looking into dev tools DOM tree and it logs "https://google.com"

let linkElement = document.querySelector("a");

linkElement.href = "https://google.com"

console.log(linkElement.href);

