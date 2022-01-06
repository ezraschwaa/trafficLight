let trafficBoxElement = document.querySelector(".trafficBox");
let circles = document.querySelectorAll(".circle")
let numOfCircles = circles.length;
let last_num = -1;

const MIN_CIRCLES = 3;
const BOX_SHADOW_STYLE = '0 0 10px 5px ';
const TRAFFIC_BOX_HEIGHT_DEFAULT = 250;

//Initialize variables for buttons
let light_button = document.getElementById('lightButton');
let resetButton = document.getElementById('resetButton');
let addButton = document.getElementById('addButton');
let subButton = document.getElementById('subButton');
let newLightsButton = document.getElementById('newLightsButton');

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

//Returns random RGB Color
const getRandomRGB = () => Math.floor(Math.random()*255);
const getRandomColor = () => 'rgb('+getRandomRGB()+','+getRandomRGB()+','+getRandomRGB()+')';

//create an object of circles
class light {
	constructor(circle, color){
		this.circle = circle;
		this.color = color;
	}
}

let trafficBox = [];
for(i = 0; i<numOfCircles;i++){
	trafficBox.push(new light(circles[i], getRandomColor()));
};

//Reset all trafficBox colors
const newColors = () => {
	for (var key in trafficBox){
		trafficBox[key].color = getRandomColor();
	}

	if(last_num!==-1){
		resetStyle(trafficBox[last_num].circle);
		addStyle(trafficBox[last_num].circle,trafficBox[last_num].color)
	}
}

//Event handler function for light button click event
const lightRandomCircle = () => {
	let randomNum;

	//Reset last circle lit if one exists
	if(last_num !== -1){
		resetStyle(trafficBox[last_num].circle);
	}

	//Generate random number and save it
	do{
		randomNum = getRandomNum();
	}while(randomNum === last_num);
	last_num = randomNum;

	//Change the color
	addStyle(trafficBox[randomNum].circle, trafficBox[randomNum].color)
}

//Add and subtract button event handlers
const addLight = () => {
	const newCircle = document.createElement("div");
	newCircle.classList.add("circle");
	trafficBox.push(new light(newCircle, getRandomColor()));
	numOfCircles++;
	trafficBoxElement.appendChild(newCircle);
	let newHeight = TRAFFIC_BOX_HEIGHT_DEFAULT + (68*(trafficBox.length-3));
	trafficBoxElement.style.height = `${newHeight}px`;

	if (trafficBox.length > 5){
		document.body.style.height = document.getElementById("body").clientHeight + 400;
	}
};

const subLight = () => {
	if(trafficBox.length > MIN_CIRCLES){
		trafficBox.pop();
		trafficBoxElement.removeChild(trafficBoxElement.lastElementChild);
		numOfCircles--;

		let newHeight = TRAFFIC_BOX_HEIGHT_DEFAULT + (68*(trafficBox.length-3));
		trafficBoxElement.style.height = `${newHeight}px`;

	}
};

//Add event handler for reset button
const resetLights = () => {
	for(var key in trafficBox) {
		resetStyle(trafficBox[key].circle)
	};
	last_num = -1;
}

//Event listeners
lightButton.onclick = lightRandomCircle;
resetButton.onclick = resetLights;
addButton.onclick = addLight;
subButton.onclick = subLight;
newLightsButton.onclick = newColors;