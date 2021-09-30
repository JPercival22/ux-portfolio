// Hero text (index page) 
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const style = document.createElement('style');
  style.innerHTML = `
  .txt-rotate > .wrap {
        border-right: 0.1em solid #2c4465;
        font-family: 'Poppins';
        font-size: 1.5em;
        font-weight: 600;
        transform: none;
        color: #2c4465;
        margin: 0;
      }
    `;
  document.head.appendChild(style);
};

//   Modal toggle 
// generic modal 
var modal = document.querySelector('.modal');
var btn = document.querySelector('.open-modal');
var span = document.querySelector('.close-modal');

btn.onclick = function () {
    modal.style.display = "flex";
};
span.onclick = function () {
    modal.style.display = "none";
};

// contact form modal 
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


// projects carousel 





















// Video Button actions (Remind Me Project) 
// var videoPlayer = document.getElementById("videoPlayer");
// var videoPlayer2 = document.getElementById("videoPlayer2");
// var designVideo = document.getElementById("designVideo");
// var designVideo2 = document.getElementById("designVideo2");

// function stopVideo() {
//     videoPlayer.style.display = "none";
//     videoPlayer2.style.display = "none";
// }
// function playVideo(file) {
//     designVideo.src = file;
//     videoPlayer.style.display = "block"
// }
// function playVideo2(file) {
//     designVideo2.src = file;
//     videoPlayer2.style.display = "block"
// }




// debugging section 
// Debug Code to find elements causing horizontal scroll 
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
// end of debug code 