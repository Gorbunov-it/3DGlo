const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");

let angle = 0;
let animate = false;

let updateBoxAngle = () => {
  angle += 1;
  document.querySelector(".box").style.transform = `rotate(${angle}deg)`;
  if (animate == true) {
    requestAnimationFrame(updateBoxAngle);
  }
};

const startEvent = (e) => {
  e.preventDefault();
  if (animate == false) {
    animate = true;
    requestAnimationFrame(updateBoxAngle);
  }
};

const resetEvent = (e) => {
  e.preventDefault();
  angle = 0;
  animate = false;
};

const addEvent = () => {
  startButton.addEventListener("click", startEvent);
  resetButton.addEventListener("click", resetEvent);
};

const init = () => {
  addEvent();
};

init();
