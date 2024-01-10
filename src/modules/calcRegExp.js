const calcRegExp = () => {
  const calcBlock = document.getElementById("calc");
  const calcSquare = calcBlock.querySelector(".calc-square");
  const calcCount = calcBlock.querySelector(".calc-count");
  const calcDay = calcBlock.querySelector(".calc-day");

  const calcSquareEvent = () => {
    calcSquare.addEventListener("input", (e) => {
      e.preventDefault();
      e.target.value = e.target.value.replace(/[^0-9+]/g, "");
    });
  };

  const calcCountEvent = () => {
    calcCount.addEventListener("input", (e) => {
      e.preventDefault();
      e.target.value = e.target.value.replace(/[^0-9+]/g, "");
    });
  };

  const calcDayEvent = () => {
    calcDay.addEventListener("input", (e) => {
      e.preventDefault();
      e.target.value = e.target.value.replace(/[^0-9+]/g, "");
    });
  };

  const AddEvent = () => {
    calcSquareEvent();
    calcCountEvent();
    calcDayEvent();
  };

  AddEvent();
};

export default calcRegExp;
