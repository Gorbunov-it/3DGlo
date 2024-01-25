const timerModule = (deadline) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, days, hours, minutes, seconds };
  };

  const creatFormatDate = (variable) => {
    return variable < 10 ? "0" + variable : variable;
  };

  const ZeroDate = () => {
    timerDays.textContent = "00";
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();
    timerDays.textContent = creatFormatDate(getTime.days);
    timerHours.textContent = creatFormatDate(getTime.hours);
    timerMinutes.textContent = creatFormatDate(getTime.minutes);
    timerSeconds.textContent = creatFormatDate(getTime.seconds);
    if (getTime.timeRemaining < 0) {
      ZeroDate();
    }
  };

  const init = () => {
    updateClock();
    setInterval(() => {
      updateClock();
    }, 1000);
  };

  init();
};

export default timerModule;
