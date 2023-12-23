// Тукущая дата
const date = new Date();
// Дата новго года
const newYaerDay = new Date("31 december 2023");
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const getCurrentDay = function () {
  const day = date.toLocaleString();
  const myDate = new Date(day.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));
  return week[myDate.getDay()];
};

const CurrentTime = () => {
  return date.toLocaleTimeString("en-US");
};

const getFormatsDay = (varieble, format) => {
  varieble = Math.abs(varieble) % 10;
  if (varieble > 1 && varieble < 5) {
    return format[1];
  }
  if (varieble == 1) {
    return format[0];
  } else {
    return format[2];
  }
};

const beforeTimeNewYear = () => {
  const toDay = date.getTime();
  const newYaer = newYaerDay.getTime();
  const timeRemaining = (newYaer - toDay) / 1000;
  const day = Math.floor(timeRemaining / (3600 * 24));
  const formatDay = getFormatsDay(day, ["день", "дня", "дней"]);
  return `${day} ${formatDay}`;
};

const start = () => {
  console.log(`Сегодня: ${getCurrentDay()}`);
  console.log(`Текущее время: ${CurrentTime()}`);
  console.log(`До нового года осталось ${beforeTimeNewYear()}`);
};

start();
