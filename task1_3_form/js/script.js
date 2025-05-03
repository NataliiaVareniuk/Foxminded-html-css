"use strict"

let slider = document.getElementById("range");
let output = document.getElementById("value");
output.innerHTML = convert(slider.value);

slider.oninput = function() {
	let value=this.value;

  output.innerHTML = convert(value);
    progress(value);
}

function convert(value) {
	return(value / 1000 +"K");
}
function  progress(val){
 let index =(val / slider.max) *100;
 slider.style.background =`linear-gradient(to right,rgb(0, 0, 0) ${index}%,  #D64200 ${index}%)`;
 
}




function moveElem(){
const value = document.querySelector('.range__value');
const range = document.querySelector('.range__label');
const marker = document.querySelector('.range__marker');
  if (window.innerWidth <= 558.98 ) {
    range.insertAdjacentElement('afterend', value);
 }
 else if((window.innerWidth > 558.98 )&&(window.innerWidth <=785.98 )){
  marker.insertAdjacentElement('afterend', value);
 }
 else if((window.innerWidth > 785.98 )&&(window.innerWidth <=1024.98 )){
  range.insertAdjacentElement('afterend', value);
 }
 else marker.insertAdjacentElement('afterend', value);
}
window.addEventListener('resize', moveElem);

