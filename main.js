let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');

const circles = ['top','middle','bottom']
let last_circle = top_circle;


let light_button = document.getElementById('lightButton');
const numOfCircles = 3;



let lightRandomCircle = () => {
	var randomNum = Math.floor(Math.random()*numOfCircles);
	console.log(randomNum);
	//easier if i made circles an array?
	switch (randomNum) {
		case 0:
			top_circle.style.backgroundColor = 'green';
			middle_circle.style.backgroundColor = '';
			bottom_circle.style.backgroundColor = '';
			break;
		case 1:
			top_circle.style.backgroundColor = '';
			middle_circle.style.backgroundColor = 'yellow';
			bottom_circle.style.backgroundColor = '';
			break;
		case 2:
			top_circle.style.backgroundColor = '';
			middle_circle.style.backgroundColor = '';
			bottom_circle.style.backgroundColor = 'red';
			break;
		default:
			console.log("Something went wrong with the randomNum");
			break;
	}
}

lightButton.onclick = lightRandomCircle;