import {hiddenElement} from '/allModules/functions.js';



let pressElement = document.getElementById("secret-button");
let secretElement = document.getElementById("drop-btn");


pressElement.addEventListener('click',() =>
	hiddenElement(secretElement));