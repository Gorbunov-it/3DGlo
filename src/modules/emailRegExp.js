const emailRegExp = () => {
  const emailInputs = document.querySelectorAll(".form-email");
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailValid = (email, regExp) => {
    return regExp.test(email);
  };

  const emailInputEvent = () => {
    emailInputs.forEach((emailInput) => {
      emailInput.addEventListener("change", (e) => {
        e.preventDefault();
        if (isEmailValid(emailInput.value, regExp)) {
          console.log("Success");
        } else {
          emailInput.value = "";
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
