const calcRegExp = () => {
  const calcBlock = document.getElementById("calc");
  const calcSquare = calcBlock.querySelector(".calc-square");
  const calcCount = calcBlock.querySelector(".calc-count");
  const calcDay = calcBlock.querySelector(".calc-day");
  const regExpCals = /^[1-9]\d*$/;

  const validExpReg = (variable, regExp) => {
    return regExp.test(variable);
  };

  const validSuccess = (input) => {
    input.style.borderColor = "#19b5fe";
  };

  const validError = (input) => {
    input.style.borderColor = "#ff0000";
    input.value = input.value.replace(/[^0-9+]/g, "");
    input.value = "";
  };

  const calcSquareEvent = () => {
    calcSquare.addEventListener("input", (e) => {
      e.preventDefault();
      if (validExpReg(e.target.value, regExpCals)) {
        validSuccess(calcSquare);
      } else {
        validError(calcSquare);
      }
    });
  };

  const calcCountEvent = () => {
    calcCount.addEventListener("input", (e) => {
      e.preventDefault();
      if (validExpReg(e.target.value, regExpCals)) {
        validSuccess(calcCount);
      } else {
        validError(calcCount);
      }
    });
  };

  const calcDayEvent = () => {
    calcDay.addEventListener("input", (e) => {
      e.preventDefault();
      if (validExpReg(e.target.value, regExpCals)) {
        validSuccess(calcDay);
      } else {
        validError(calcDay);
      }
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
