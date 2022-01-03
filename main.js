let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');

const circles = ['top','middle','bottom']
let last_num = 3;
let last_circle = top_circle;


let light_button = document.getElementById('lightButton');
const numOfCircles = 3;



const lightRandomCircle = () => {
	let randomNum;

	randomNum = getRandomNum();
	while(randomNum === last_num){
		console.log("We gotta repeat!")
		randomNum = getRandomNum();
	}
	last_num = randomNum;

	console.log(randomNum);
	//easier if i made circles an array?
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

const getRandomNum = () => {
	return randomNum = Math.floor(Math.random()*numOfCircles);
}

lightButton.onclick = lightRandomCircle;