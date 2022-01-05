//Code by Ezra

//Initialize and declare variables for traffic lights
let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');
const circles = [top_circle, middle_circle, bottom_circle]
const numOfCircles = circles.length;
let last_num = -1;

const BOX_SHADOW_STYLE = '0 0 10px 5px ';

let light_button = document.getElementById('lightButton');

//Initiatlize variables for displaying and hiding instructions
let instructions = document.getElementById('instructions-column');
let toggleButton = document.getElementById('toggle');

//Initialize variable for reset button
let resetButton = document.getElementById('resetButton');

//Event handler function for light button click event
const lightRandomCircle = () => {
	let randomNum;

	//Reset last circle lit if one exists
	if(last_num !== -1){
		resetStyle(circles[last_num])
	}

	//Generate random number and save it
	do{
		randomNum = getRandomNum();
	}while(randomNum === last_num);
	last_num = randomNum;

	//Switch case to change light and reset others to default settings
	switch (randomNum) {
		case 0:
			addStyle(top_circle, 'red')
			break;
		case 1:
			addStyle(middle_circle, 'yellow');
			break;
		case 2:
			addStyle(bottom_circle, 'green')
			break;
		default:
			console.log("Something went wrong with the randomNum");
			break;
	}
}

//Adds style.  Expects circle object and color string.
const addStyle = (circle, color = '') => {
	circle.style.backgroundColor = color;
	circle.style.boxShadow = BOX_SHADOW_STYLE+color;
}

//Sets style of given circle to default.
const resetStyle = circle => {
	circle.style.backgroundColor = '';
	circle.style.boxShadow = '';
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
	circles.forEach(resetStyle);
	last_num = -1;
}

resetButton.onclick = resetLights;


