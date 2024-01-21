import { animate } from "./helpers";

const calc = (price) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = calcBlock.querySelector(".calc-type");
  const calcSquare = calcBlock.querySelector(".calc-square");
  const calcCount = calcBlock.querySelector(".calc-count");
  const calcDay = calcBlock.querySelector(".calc-day");
  const total = document.getElementById("total");

  const countCalc = () => {
    const calcTyeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareVlue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTyeValue * calcSquareVlue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    if (totalValue > 0) {
      aminated(totalValue);
    }
  };

  const aminated = (totalValue) => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.round(totalValue * progress);
      },
    });
  };

  calcBlock.addEventListener("input", (e) => {
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
  });
};

export default calc;
