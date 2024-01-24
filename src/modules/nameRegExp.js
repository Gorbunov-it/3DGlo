const nameRegExp = () => {
  const userName = document.querySelectorAll(".form-name");
  const regExp = /^[-?!,.а-яА-ЯёЁ0-9\s]+$/;

  const isUserNameValid = (userName) => {
    return regExp.test(userName);
  };

  const nameInputEvent = () => {
    userName.forEach((input) => {
      input.addEventListener("input", (e) => {
        e.preventDefault();
        if (isUserNameValid(input.value)) {
          input.classList.add("success");
        } else {
          input.classList.remove("success");
        }
      });
    });
  };

  const AddEvent = () => {
    nameInputEvent();
  };

  AddEvent();
};

export default nameRegExp;
