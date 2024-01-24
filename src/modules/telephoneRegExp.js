const telephoneRegExp = () => {
  const userPhones = document.querySelectorAll(".form-phone");
  const regExp = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;

  const isUserPhonelValid = (phone) => {
    return regExp.test(phone);
  };

  const phoneInputEvent = () => {
    userPhones.forEach((userPhone) => {
      userPhone.addEventListener("input", (e) => {
        e.preventDefault();
        if (isUserPhonelValid(userPhone.value)) {
          userPhone.classList.add("success");
        } else {
          userPhone.classList.remove("success");
        }
      });
    });
  };

  const AddEvent = () => {
    phoneInputEvent();
  };

  AddEvent();
};

export default telephoneRegExp;
