const body = document.querySelector('body');
const button = document.querySelector('button');
const span = document.querySelector('span');
const hexArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

button.addEventListener('click', getHex);

function getHex() {
	let hexVal = '#';

	for(let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * hexArray.length);
		hexVal += hexArray[random];
	}

	span.style.paddingRight = '10px';
	span.innerHTML = hexVal;
	body.style.backgroundColor = hexVal;
}