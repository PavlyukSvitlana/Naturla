'use strict'

function toogleClass(element, toogleClass) {
	if (element.classList.contains(toogleClass)) {
		element.classList.remove(toogleClass);
	} else {
		element.classList.add(toogleClass);
	}
}

const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const header = document.querySelector('.header__block');

	toogleClass(header, 'show');
	toogleClass(burgerBtn, 'burger-btn__active');

});