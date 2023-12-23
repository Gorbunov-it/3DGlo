const chargeInput = document.getElementById("charge-input");
const inputText = document.querySelector(".input-text");

const keyUpInput = () => {
  const text = chargeInput.value;
  inputText.textContent = text;
};

const debounce = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

chargeInput.addEventListener("keyup", debounce(keyUpInput, 2000));
