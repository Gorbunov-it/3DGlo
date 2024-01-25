const connectRegExp = () => {
  const connectBlock = document.getElementById("connect");
  const messageInput = connectBlock.querySelector(".mess");
  const regExp = /^[-?!,.а-яА-ЯёЁ\s]/;

  const isUserMessageValid = (message) => {
    return regExp.test(message);
  };

  const messageInputEvent = () => {
    messageInput.addEventListener("input", (e) => {
      e.preventDefault();
      if (isUserMessageValid(messageInput.value)) {
        messageInput.classList.add("success");
      } else {
        messageInput.classList.remove("success");
      }
    });
  };

  const AddEvent = () => {
    messageInputEvent();
  };

  AddEvent();
};

export default connectRegExp;
