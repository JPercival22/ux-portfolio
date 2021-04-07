//   Modal toggle 

var modal = document.querySelector('.modal');
var btn = document.querySelector('.open-modal');
var span = document.querySelector('.close-modal');
var element = document.querySelector('.contact-form');

btn.onclick = function() {
  modal.style.display = "block";
  element.classList.add('blur')
};
span.onclick = function() {
  modal.style.display = "none";
  element.classList.remove('blur');
};
