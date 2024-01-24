const emailRegExp = () => {
  const emailInputs = document.querySelectorAll(".form-email");
  const regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  const isUserEmailValid = (email) => {
    return regExp.test(email);
  };

  const emailInputEvent = () => {
    emailInputs.forEach((emailInput) => {
      emailInput.addEventListener("input", (e) => {
        e.preventDefault();
        if (isUserEmailValid(emailInput.value)) {
          emailInput.classList.add("success");
        } else {
          emailInput.classList.remove("success");
        }
      });
    });
  };

  const AddEvent = () => {
    emailInputEvent();
  };

  AddEvent();
};

export default emailRegExp;
