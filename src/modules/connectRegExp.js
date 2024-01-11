const connectRegExp = () => {
  const connectBlock = document.getElementById("connect");
  const messageInput = connectBlock.querySelector(".mess");

  const messageInputEvent = () => {
    messageInput.addEventListener("input", (e) => {
      e.preventDefault();
      messageInput.value = messageInput.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "");
    });
  };

  const AddEvent = () => {
    messageInputEvent();
  };

  AddEvent();
};

export default connectRegExp;
