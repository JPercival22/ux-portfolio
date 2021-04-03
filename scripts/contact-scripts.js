//   Modal toggle 

var modal = document.querySelector('.modal');
var btn = document.querySelector('.open-modal');
var span = document.querySelector('.close-modal');

btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};