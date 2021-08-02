// Write your code here!
const main = document.getElementsByTagName("main")[0];
main.remove(main.querySelector("main"));

const newHeader = document.createElement("h1")
newHeader.id = "victory";
newHeader.innerHTML = "London is the champion!";
