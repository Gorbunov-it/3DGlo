const connectRegExp = () => {
  // ^[?!,.а-яА-ЯёЁ0-9\s]+$

  const connectBlock = document.getElementById("connect");
  const messageInput = connectBlock.querySelector(".mess");

  const messageInputEvent = () => {
    messageInput.addEventListener("input", (e) => {
      e.preventDefault();
      e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "");
    });
  };

  const AddEvent = () => {
    messageInputEvent();
  };

  AddEvent();
};

export default connectRegExp;
