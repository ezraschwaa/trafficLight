//Code by Ezra

//Initialize and declare variables for traffic lights
const circles = document.querySelectorAll(".circle");
const colors = ['red','yellow','green'];
const BOX_SHADOW_STYLE = '0 0 10px 5px ';
const numOfCircles = circles.length;
let last_num = -1;

//Initiatlize variables for buttons
let light_button = document.getElementById('lightButton');
let instructions = document.getElementById('instructions-column');
let toggleButton = document.getElementById('toggle');
let resetButton = document.getElementById('resetButton');

//Event handler function for light button click event
const lightRandomCircle = () => {
	let randomNum;

	//Reset last circle lit if one exists
	if(last_num !== -1){
		resetStyle(circles[last_num])
	};

	//Generate random number and save it
	do{
		randomNum = getRandomNum();
	}while(randomNum === last_num);
	last_num = randomNum;

	//Add style to indexed circle based on ordered array colors.
	addStyle(circles[randomNum], colors[randomNum]);
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