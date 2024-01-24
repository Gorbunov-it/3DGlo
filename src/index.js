import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scrollBy from "./modules/scrollBy";
import calcRegExp from "./modules/calcRegExp";
import nameRegExp from "./modules/nameRegExp";
import emailRegExp from "./modules/emailRegExp";
import telephoneRegExp from "./modules/telephoneRegExp";
import connectRegExp from "./modules/connectRegExp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("01 January 2024");
menu();
modal();
scrollBy();
calcRegExp();
nameRegExp();
emailRegExp();
telephoneRegExp();
connectRegExp();
tabs();
slider();
calc(100);
sendForm({
  formId: "form1",
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "input",
      id: "form2-message",
    },
  ],
});
sendForm({
  formId: "form3",
});
