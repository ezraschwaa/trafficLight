//Code by Ezra

//Initialize and declare variables for traffic lights
let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');

const circles = ['top','middle','bottom']
let last_num = -1;

let light_button = document.getElementById('lightButton');
const numOfCircles = circles.length;

//Initiatlize variables for displaying and hiding instructions
let instructions = document.getElementById('instructions-column');
let toggleButton = document.getElementById('toggle');

//Initialize variable for reset button
let resetButton = document.getElementById('resetButton');

//Event handler function for light button click event
const lightRandomCircle = () => {
	let randomNum;

	do{
		randomNum = getRandomNum();
	}while(randomNum === last_num);
	last_num = randomNum;

	//Switch case to change light and reset others to default settings
	switch (randomNum) {
		case 0:
			top_circle.style.backgroundColor = 'red';
			top_circle.style.boxShadow = '0 0 10px 5px red';
			middle_circle.style.backgroundColor = '';
			middle_circle.style.boxShadow = '';
			bottom_circle.style.backgroundColor = '';
			bottom_circle.style.boxShadow = '';
			break;
		case 1:
			top_circle.style.backgroundColor = '';
			top_circle.style.boxShadow = '';
			middle_circle.style.backgroundColor = 'yellow';
			middle_circle.style.boxShadow = '0 0 10px 5px yellow';
			bottom_circle.style.backgroundColor = '';
			bottom_circle.style.boxShadow = '';
			break;
		case 2:
			top_circle.style.backgroundColor = '';
			top_circle.style.boxShadow = '';
			middle_circle.style.backgroundColor = '';
			middle_circle.style.boxShadow = '';
			bottom_circle.style.backgroundColor = 'green';
			bottom_circle.style.boxShadow = '0 0 10px 5px green';
			break;
		default:
			console.log("Something went wrong with the randomNum");
			break;
	}
}

//Returns random number between 0 and max circles
const getRandomNum = () => Math.floor(Math.random()*numOfCircles);

lightButton.onclick = lightRandomCircle;

//Add event handler and listener for instruction button
const hideInstructions = () => {
	if (instructions.hidden === true){
		instructions.hidden = false;
		toggleButton.innerHTML = 'visibility_off';
	} else {
		instructions.hidden = true;
		toggleButton.innerHTML = 'visibility';
	}
}

toggleButton.onclick = hideInstructions;

//Add event handler and listener for reset button
const resetLights = () => {
	top_circle.style.backgroundColor = '';
	middle_circle.style.backgroundColor = '';
	bottom_circle.style.backgroundColor = '';

	top_circle.style.boxShadow = '';
	middle_circle.style.boxShadow = '';
	bottom_circle.style.boxShadow = '';
	last_num = -1
}

resetButton.onclick = resetLights;


