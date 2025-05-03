"use strict"
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const slides = document.querySelectorAll(".content__slide");

const translateStep = -105;
let indexSlide = 0; 
let slideCount = slides.length;

['load', 'resize'].forEach(function(e) {
 
  window.addEventListener(e, moveSocial);
window.addEventListener(e, moveTitleCustomer);
window.addEventListener(e, moveSocial);
window.addEventListener(e, moveButtons);
window.addEventListener(e, moveLogo);
window.addEventListener(e, moveTitleFoxSay);

});

document.addEventListener('click', addClassActive);
document.addEventListener('click', menuClose);
document.addEventListener("click", menuOpen);

if(nextButton) nextButton.addEventListener('click', schowNext);
if(prevButton) prevButton.addEventListener('click', schowPrev);



function addClassActive(e) {
	const targetElement = e.target;
	const currActive = targetElement.closest('.active');

	if(currActive){
		currActive.classList.toggle('active');
	}
	else{ 
	clearAllActive();
  if (targetElement.closest('.menu-header__item')) {
   const currElem = targetElement.closest('.menu-header__item');
  	currElem.classList.toggle('active');
	}
	}
   
}
function clearAllActive() {
	const element = document.querySelector('.active');
    if(element)  element.classList.remove('active');
 }


function menuOpen(e) {
 const targetElement = e.target;
 const currentMenu = targetElement.closest('.content-header__logo');
 if (currentMenu) {
  if (window.innerWidth <= 604.98  ){
    document.documentElement.classList.add('menu-open');
  }
 
 }
}

function menuClose(e) {
  const targetElement = e.target;
  const currentMenu = targetElement.closest('.content-header__close-button');
  if (currentMenu) {
    document.documentElement.classList.remove('menu-open');
  }
 }

function moveSocial(){
  const socialGroup = document.querySelector('.social-footer');
  const placeSocial=document.querySelector('.footer-content');
  const correctPlaceSocial=document.querySelector('.bottom-content');

     if (window.innerWidth <= 604.98  ) {
      placeSocial.insertAdjacentElement('beforeend', socialGroup);
      
     }
     else{
      correctPlaceSocial.insertAdjacentElement('beforeend',socialGroup);
     }
  }

  function moveLogo(){
    const imgLogo = document.querySelector('.footer-content__logo');
    const placeLogo=document.querySelector('.footer__body');
    const correctPlaceLogo=document.querySelector('.footer-content');
  
      if (window.innerWidth <= 672.98 && window.innerWidth > 604.98) {
      placeLogo.insertAdjacentElement('afterbegin', imgLogo);
      }
      else {
        correctPlaceLogo.insertAdjacentElement('afterbegin', imgLogo);
       }
     
   }

    function moveButtons(e){
      const groupButton = document.querySelector('.info-part__app');
      const placeButton=document.querySelector('.comerce-section__content-pictures');
      const correctPlaceButton=document.querySelector('.comerce-section__content');
      
        if (window.innerWidth <= 816.98 ) {
          placeButton.insertAdjacentElement('afterend', groupButton);
        }
        else {
          correctPlaceButton.insertAdjacentElement('beforeend', groupButton);
        }
    }
   
  function moveTitleCustomer(e){
      const title = document.querySelector('.help-customer__title');
      const placeTitle=document.querySelector('.customer-help');
      const correctPlaceTitle=document.querySelector('.customer-help__left');
      
        if (window.innerWidth <= 604.98 ) {
          placeTitle.insertAdjacentElement('afterbegin', title);
        }
        else {
          correctPlaceTitle.insertAdjacentElement('afterbegin', title);
          }

  }

  function moveTitleFoxSay(e){
    const title = document.querySelector('.slider__title');
      const placeTitle=document.querySelector('.citations');
      const correctPlaceTitle=document.querySelector('.citations__slider-part');
      
        if (window.innerWidth <= 738.98 ) {
          placeTitle.insertAdjacentElement('afterbegin', title);
        }
        else {
          correctPlaceTitle.insertAdjacentElement('afterbegin', title);
          }

  }
 
  
  
  function schowNext(){
   indexSlide =(indexSlide < slideCount-1) ? indexSlide + 1 : slideCount-1;
  
   clearAllSelection();
  
   slides.forEach(slide => {
        slide.style.setProperty("--translateStep", indexSlide * translateStep + '%');
       
    });
  
    isLastSlide(indexSlide);
    
  }
  
  function schowPrev(){
   indexSlide =(indexSlide > 0) ? indexSlide - 1 : 0;
   clearAllSelection();
      slides.forEach(slide => {
      slide.style.setProperty("--translateStep", indexSlide * translateStep + '%');
  });
  
  isLastSlide(indexSlide);
  }

  function isLastSlide(ind){
    if(ind === 0){
        const prevElem = document.querySelector('.carousel__button--prev');
       if(prevElem) prevElem.classList.add('finish');
     }
     else if (ind === slideCount-1){
       const nextElem = document.querySelector('.carousel__button--next');
   
       if(nextElem) nextElem.classList.add('finish');
     }
   
   }
   
   function clearAllSelection() {
       const selectedElem = document.querySelector('.selected');
       const lastElem = document.querySelector('.finish');

       if(selectedElem)  selectedElem.classList.remove('selected');
       if(lastElem)  lastElem.classList.remove('finish');
    }
   