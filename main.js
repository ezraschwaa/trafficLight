let top_circle = document.getElementById('top');
let middle_circle = document.getElementById('middle');
let bottom_circle = document.getElementById('bottom');

const circles = ['top','middle','bottom']
let last_circle = 'none';


let light_button = document.getElementById('lightButton');
const numOfCircles = 3;


let lightRandomCircle = () => {
	const randomNum = Math.floor(Math.random()*numOfCircles);
	//easier if i made circles an array?
	if (last_circle === 'none'){
		switch (randomNum) {
			case 0:
				top_circle.style.backgroundColor = 'green';
				last_circle = top_circle;
			case 1:
				middle_circle.style.backgroundColor = 'yellow';
				last_circle = middle_circle;
			case 2:
				bottom_circle.style.backgroundColor = 'red';
				last_circle = bottom_circle;
		}
	}


	if (randomNum === 0 && top_circle.style.backgroundColor === 'lightgray'){
		top_circle.style.backgroundColor === 'green';
		last_circle.style.backgroundColor = '';
		last_circle = top_circle;
	} else if (randomNum === 1 && middle_circle.style.backgroundColor === 'lightgray'){
		middle_circle.style.backgroundColor === 'yellow';
		last_circle.style.backgroundColor = '';
		last_circle = middle_circle;
	} else if (randomNum === 3 && bottom_circle.style.backgroundColor === 'lightgray'){
		bottom_circle.style.backgroundColor === 'red';
		last_circle.style.backgroundColor = '';
		last_circle = bottom_circle;
	} else {
		//If we've gotten here, the num is current circle.
		lightRandomCircle();
	}
}

lightButton.onclick = lightRandomCircle;