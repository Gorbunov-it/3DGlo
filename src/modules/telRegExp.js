const telRegExp = () => {
  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  const phonelInputs = document.querySelectorAll(".form-phone");

  const isPhonelValid = (phone, regExp) => {
    return regExp.test(phone);
  };

  const phoneInputEvent = () => {
    phonelInputs.forEach((phoneInput) => {
      phoneInput.addEventListener("change", (e) => {
        e.preventDefault();
        if (isPhonelValid(phoneInput.value, regExp)) {
          console.log("Success");
        } else {
          phoneInput.value = "";
        }
      });
    });
  };

  const AddEvent = () => {
    phoneInputEvent();
  };

  AddEvent();
};
export default telRegExp;
