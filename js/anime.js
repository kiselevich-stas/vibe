const circle1 = () => anime({
  targets: '.circle1',
  width: '4vw',
  height: '4vw',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false,
  duration: 3000,
});

anime({
  targets: '.circle1',
  easing: 'easeInOutQuad',
  duration: 5000,
  opacity: 0

});

const circle2 = () => anime({
  targets: '.circle2',
  width: '3vw',
  height: '3vw',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false,
  duration: 3500,
  opacity: 0
});

const circle3 = () => anime({
  targets: '.circle3',
  width: '3vw',
  height: '3vw',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false,
  duration: 4000,
  opacity: 0
});


// anime({
//     targets: '#demo-svg polygon',
//     points: [
//       {value: '65 32.5,65 41.2325 61.556 49.1605 55.9521 55,50.0375 61.1634 41.7168 65 32.5 65,22.3232 65 13.2388 60.3225 7.27963 53,2.72838 47.4076 0 40.2724 0 32.5,0 25.8014 2.02655 19.5762 5.5 14.4039,11.3339 5.71675 21.2493 0 32.5 0,43.7507 0 53.6661 5.71675 59.5 14.4039,62.9734 19.5762 65 25.8014 65 32.5'},
//       {value: '98.749 167.641,54.6703 174.739 -7.0984 44.2724 1.1118 36.6757,9.322 29.0791 35.8221 76.2095 54.8616 73.9535,73.9012 71.6974 177.431 -17.3901 199.238 3.04258,221.045 23.4753 142.828 160.544 98.749 167.641'}
//     ],
//     easing:'easeOutQuad',
//     duration: 4000,
//     delay: 2500,
//     opacity: 1
//   });

// Для одного лого

function ShowImage() {
  const img = document.querySelectorAll('.image');
  img.forEach(item => {
    item.classList.add('show', 'fade', 'size');
  });
}



/// для 3 лого 
function addFirstText() {
  const text = document.querySelector(".line-1")
  // console.log(text)
  text.classList.add("anim-typewriter")
  text.addEventListener('animationend', () => ShowImage());
}






//////////////
function SmenaSlov() {
  const text_2 = document.querySelector(".line-2");
  const text_1 = document.querySelector(".line-1");
  text_1.classList.add("hide")
  text_1.classList.remove("show")
  text_2.classList.remove("hide")
  text_2.classList.add("show", "anim-typewriter");
}


function deleteText() {
  const text_2 = document.querySelector(".line-2");
  text_2.classList.remove("show")
  text_2.classList.add("hide");
}



function traffic() {
  const imgs = document.querySelectorAll(".image");
  console.log(imgs);
  imgs.forEach(item => {
    item.classList.add('traffic', "endpoint");
  });
}



function emergence() {
  const lab = document.querySelector(".lab");
  console.log(lab);
  lab.classList.remove("hide2");
  lab.classList.add("show", "fade2", "traffic_top");
}



function addData() {
  const block = document.querySelector(".data");
  block.classList.remove("hide");
  block.classList.add("fade", "show");
  console.log(block)
}

circle1();
circle2();
circle3();
addFirstText();
setTimeout(addData, 10500);//10500
setTimeout(ShowImage, 3900);
setTimeout(emergence, 8000);
setTimeout(traffic, 8200);// было 9000
setTimeout(deleteText, 8000);
setTimeout(SmenaSlov, 3200);


const mediaQuery = window.matchMedia('(min-width: 1224px)')
if (mediaQuery.matches) {
  console.log("sdds")
  const circle1 = () => anime({
    targets: '.circle1',
    width: '3vw',
    height: '3vw',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false,
    duration: 3000,
  });

  anime({
    targets: '.circle1',
    easing: 'easeInOutQuad',
    duration: 5000,
    opacity: 0

  });

  const circle2 = () => anime({
    targets: '.circle2',
    width: '3vw',
    height: '3vw',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false,
    duration: 3500,
    opacity: 0
  });

  const circle3 = () => anime({
    targets: '.circle3',
    width: '3vw',
    height: '3vw',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false,
    duration: 4000,
    opacity: 0
  });
  circle1();
  circle2();
  circle3();
}