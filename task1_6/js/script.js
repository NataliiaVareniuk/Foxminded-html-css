"use strict"
document.addEventListener('click', addClassActive);


function addClassActive(e) {
	const targetElement = e.target;
	const currActive = targetElement.closest('.active');

	if(currActive){
		currActive.classList.toggle('active');
	}
	else{ 
	clearAll();

	if (targetElement.closest('.item')) {
    
		const currElem = targetElement.closest('.item');
   
		currElem.classList.toggle('active');
	}
	}
   
}
function clearAll() {
	const element = document.querySelector('.active');
    if(element)  element.classList.remove('active');
 }

 document.addEventListener("click", menuOpen);
 function menuOpen(e) {
	const targetElement = e.target;
	const currentMenu = targetElement.closest('.menu__title');
	if (currentMenu) {
		document.documentElement.classList.toggle('menu-open');
	}
}

