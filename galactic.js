let circles = document.querySelectorAll(".circle")
const numOfCircles = circles.length;
const colors = ['red','yellow','green']
let last_num = -1;

const BOX_SHADOW_STYLE = '0 0 10px 5px ';

//Initialize variables for buttons
let light_button = document.getElementById('lightButton');
let resetButton = document.getElementById('resetButton');

//create an object of circles:
let trafficBox = {circles:colors}
console.log(trafficBox)

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

	//Change the color
	addStyle(circles[randomNum], colors[randomNum])
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

//Add event handler and listener for reset button
const resetLights = () => {
	circles.forEach(resetStyle);
	last_num = -1;
}

resetButton.onclick = resetLights;