let h1 = document.querySelector("h1");
const container = document.querySelector(".container");

let numb = 0;

function scale(numb, inMin, inMax, outMin, outMax) {
	return ((numb - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function blurring() {
	numb++;

	if (numb > 99) {
		clearInterval(id);
	}
	h1.innerHTML = `${numb}%`;
	h1.style.opacity = scale(numb, 0, 100, 1, 0);
	container.style.filter = `blur(${scale(numb, 0, 100, 30, 0)}px)`;
}

const id = setInterval(() => {
	blurring();
}, 50);

// let h1 = document.querySelector("h1");
// const container = document.querySelector(".container");

// let numb = 0;
// blure();

// function blure() {
// 	numb++;
// 	if (numb > 100) {
// 		numb = 100;
// 		clearInterval(id);
// 	}

// 	let nick = 100 / numb;

// 	container.style.filter = `blur(${nick - 1}px)`;

// 	h1.innerHTML = `${numb}%`;
// 	h1.style.opacity = `${1 - numb / 100}`;
// }

// const id = setInterval(() => {
// 	blure();
// }, 50);
