let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');

const circles = ['top','middle','bottom']
let last_num = 3;

let light_button = document.getElementById('lightButton');
const numOfCircles = circles.length;

//Event handler function for light button click event
const lightRandomCircle = () => {
	let randomNum;

	randomNum = getRandomNum();
	while(randomNum === last_num){
		randomNum = getRandomNum();
	}
	last_num = randomNum;

	//Switch case to change light and reset others to default settings
	switch (randomNum) {
		case 0:
			top_circle.style.backgroundColor = 'red';
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
			bottom_circle.style.backgroundColor = 'green';
			break;
		default:
			console.log("Something went wrong with the randomNum");
			break;
	}
}

//Returns random number between 0 and max circles
const getRandomNum = () => Math.floor(Math.random()*numOfCircles);

lightButton.onclick = lightRandomCircle;