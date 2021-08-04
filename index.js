// Write your code here!
document.querySelector('main').remove();


let vElement = document.createElement('h1');
vElement.id = "victory";
vElement.innerHTML = "Jouse is the champion";

document.body.appendChild(vElement);
let newHeader = document.getElementById("victory");