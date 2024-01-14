/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scrollBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollBy */ \"./modules/scrollBy.js\");\n/* harmony import */ var _modules_calcRegExp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calcRegExp */ \"./modules/calcRegExp.js\");\n/* harmony import */ var _modules_connectRegExp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/connectRegExp */ \"./modules/connectRegExp.js\");\n/* harmony import */ var _modules_emailRegExp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/emailRegExp */ \"./modules/emailRegExp.js\");\n/* harmony import */ var _modules_telRegExp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/telRegExp */ \"./modules/telRegExp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"01 January 2024\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scrollBy__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calcRegExp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_connectRegExp__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_emailRegExp__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_telRegExp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calcRegExp.js":
/*!*******************************!*\
  !*** ./modules/calcRegExp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calcRegExp = () => {\r\n  const calcBlock = document.getElementById(\"calc\");\r\n  const calcSquare = calcBlock.querySelector(\".calc-square\");\r\n  const calcCount = calcBlock.querySelector(\".calc-count\");\r\n  const calcDay = calcBlock.querySelector(\".calc-day\");\r\n  const regExpCals = /^[1-9]\\d*$/;\r\n\r\n  const validExpReg = (variable, regExp) => {\r\n    return regExp.test(variable);\r\n  };\r\n\r\n  const validSuccess = (input) => {\r\n    input.style.borderColor = \"#19b5fe\";\r\n  };\r\n\r\n  const validError = (input) => {\r\n    input.style.borderColor = \"#ff0000\";\r\n    input.value = input.value.replace(/[^0-9+]/g, \"\");\r\n    input.value = \"\";\r\n  };\r\n\r\n  const calcSquareEvent = () => {\r\n    calcSquare.addEventListener(\"input\", (e) => {\r\n      e.preventDefault();\r\n      if (validExpReg(e.target.value, regExpCals)) {\r\n        validSuccess(calcSquare);\r\n      } else {\r\n        validError(calcSquare);\r\n      }\r\n    });\r\n  };\r\n\r\n  const calcCountEvent = () => {\r\n    calcCount.addEventListener(\"input\", (e) => {\r\n      e.preventDefault();\r\n      if (validExpReg(e.target.value, regExpCals)) {\r\n        validSuccess(calcCount);\r\n      } else {\r\n        validError(calcCount);\r\n      }\r\n    });\r\n  };\r\n\r\n  const calcDayEvent = () => {\r\n    calcDay.addEventListener(\"input\", (e) => {\r\n      e.preventDefault();\r\n      if (validExpReg(e.target.value, regExpCals)) {\r\n        validSuccess(calcDay);\r\n      } else {\r\n        validError(calcDay);\r\n      }\r\n    });\r\n  };\r\n\r\n  const AddEvent = () => {\r\n    calcSquareEvent();\r\n    calcCountEvent();\r\n    calcDayEvent();\r\n  };\r\n\r\n  AddEvent();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcRegExp);\r\n\n\n//# sourceURL=webpack:///./modules/calcRegExp.js?");

/***/ }),

/***/ "./modules/connectRegExp.js":
/*!**********************************!*\
  !*** ./modules/connectRegExp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst connectRegExp = () => {\r\n  const connectBlock = document.getElementById(\"connect\");\r\n  const messageInput = connectBlock.querySelector(\".mess\");\r\n\r\n  const messageInputEvent = () => {\r\n    messageInput.addEventListener(\"input\", (e) => {\r\n      e.preventDefault();\r\n      messageInput.value = messageInput.value.replace(/[^\\-а-яА-ЯёЁ\\s]+$/g, \"\");\r\n    });\r\n  };\r\n\r\n  const AddEvent = () => {\r\n    messageInputEvent();\r\n  };\r\n\r\n  AddEvent();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectRegExp);\r\n\n\n//# sourceURL=webpack:///./modules/connectRegExp.js?");

/***/ }),

/***/ "./modules/emailRegExp.js":
/*!********************************!*\
  !*** ./modules/emailRegExp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst emailRegExp = () => {\r\n  const emailInputs = document.querySelectorAll(\".form-email\");\r\n  const regExp = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n\r\n  const isEmailValid = (email, regExp) => {\r\n    return regExp.test(email);\r\n  };\r\n\r\n  const emailInputEvent = () => {\r\n    emailInputs.forEach((emailInput) => {\r\n      emailInput.addEventListener(\"change\", (e) => {\r\n        e.preventDefault();\r\n        if (isEmailValid(emailInput.value, regExp)) {\r\n          console.log(\"Success\");\r\n        } else {\r\n          emailInput.value = \"\";\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  const AddEvent = () => {\r\n    emailInputEvent();\r\n  };\r\n\r\n  AddEvent();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailRegExp);\r\n\n\n//# sourceURL=webpack:///./modules/emailRegExp.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuButtom = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeButton = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handlMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuButtom.addEventListener(\"click\", handlMenu);\r\n\r\n  closeButton.addEventListener(\"click\", handlMenu);\r\n\r\n  menuItems.forEach((items) => items.addEventListener(\"click\", handlMenu));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const popupButton = document.querySelectorAll(\".popup-btn\");\r\n  const popupClose = modal.querySelector(\".popup-close\");\r\n  let outerWidth = window.outerWidth;\r\n\r\n  const openModal = (speed) => {\r\n    outerWidth = window.outerWidth;\r\n    if (outerWidth >= 768) {\r\n      const step = 1 / speed;\r\n      let interval = setInterval(() => {\r\n        modal.style.display = \"block\";\r\n        if (modal.style.opacity >= 1) {\r\n          clearInterval(interval);\r\n          modal.style.opacity = 1;\r\n        } else {\r\n          modal.style.opacity = +modal.style.opacity + step;\r\n        }\r\n      }, speed / 1000);\r\n    } else {\r\n      modal.style.display = \"block\";\r\n      modal.style.opacity = 1;\r\n    }\r\n  };\r\n\r\n  const closeModal = (speed) => {\r\n    outerWidth = window.outerWidth;\r\n    if (outerWidth >= 768) {\r\n      const step = 1 / speed;\r\n      let interval = setInterval(() => {\r\n        if (modal.style.opacity < 0) {\r\n          clearInterval(interval);\r\n          modal.style.display = \"none\";\r\n          modal.style.opacity = 0;\r\n        } else {\r\n          modal.style.opacity = +modal.style.opacity - step;\r\n        }\r\n      }, speed / 1000);\r\n    } else {\r\n      modal.style.display = \"none\";\r\n      modal.style.opacity = 0;\r\n    }\r\n  };\r\n\r\n  popupButton.forEach((button) => {\r\n    button.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      openModal(200);\r\n    });\r\n  });\r\n\r\n  popupClose.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    closeModal(200);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollBy.js":
/*!*****************************!*\
  !*** ./modules/scrollBy.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollBy = () => {\r\n  const scrollServerBlock = () => {\r\n    const button = document.querySelector(\"main > a\");\r\n    const serviceBlock = document.getElementById(\"service-block\");\r\n\r\n    const scrollTo = (element) => {\r\n      element.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    };\r\n\r\n    button.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      scrollTo(serviceBlock);\r\n    });\r\n  };\r\n\r\n  const scrollMenuBy = () => {\r\n    const menu = document.querySelector(\"menu\");\r\n    const links = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n    links.forEach((link) => {\r\n      link.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        let href = link.getAttribute(\"href\").substring(1);\r\n        const scrollTarget = document.getElementById(href);\r\n        scrollTo(scrollTarget);\r\n      });\r\n    });\r\n  };\r\n\r\n  const scrollTo = (element) => {\r\n    element.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  const init = () => {\r\n    scrollServerBlock();\r\n    scrollMenuBy();\r\n  };\r\n\r\n  init();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBy);\r\n\n\n//# sourceURL=webpack:///./modules/scrollBy.js?");

/***/ }),

/***/ "./modules/telRegExp.js":
/*!******************************!*\
  !*** ./modules/telRegExp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst telRegExp = () => {\r\n  const regExp = /^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$/;\r\n\r\n  const phonelInputs = document.querySelectorAll(\".form-phone\");\r\n\r\n  const isPhonelValid = (phone, regExp) => {\r\n    return regExp.test(phone);\r\n  };\r\n\r\n  const phoneInputEvent = () => {\r\n    phonelInputs.forEach((phoneInput) => {\r\n      phoneInput.addEventListener(\"change\", (e) => {\r\n        e.preventDefault();\r\n        if (isPhonelValid(phoneInput.value, regExp)) {\r\n          console.log(\"Success\");\r\n        } else {\r\n          phoneInput.value = \"\";\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  const AddEvent = () => {\r\n    phoneInputEvent();\r\n  };\r\n\r\n  AddEvent();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (telRegExp);\r\n\n\n//# sourceURL=webpack:///./modules/telRegExp.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timerModule = (deadline) => {\r\n  const timerDays = document.getElementById(\"timer-days\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  const timerAction = document.querySelector(\".timer-action\");\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    const days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    const hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    const minutes = Math.floor((timeRemaining / 60) % 60);\r\n    const seconds = Math.floor(timeRemaining % 60);\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  const creatFormatDate = (variable) => {\r\n    return variable < 10 ? \"0\" + variable : variable;\r\n  };\r\n\r\n  const ZeroDate = () => {\r\n    timerDays.textContent = \"00\";\r\n    timerHours.textContent = \"00\";\r\n    timerMinutes.textContent = \"00\";\r\n    timerSeconds.textContent = \"00\";\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimeRemaining();\r\n    timerAction.textContent = \"До нового года осталось\";\r\n    timerDays.textContent = creatFormatDate(getTime.days);\r\n    timerHours.textContent = creatFormatDate(getTime.hours);\r\n    timerMinutes.textContent = creatFormatDate(getTime.minutes);\r\n    timerSeconds.textContent = creatFormatDate(getTime.seconds);\r\n    if (getTime.timeRemaining > 0) {\r\n      setInterval(updateClock, 1000);\r\n    } else {\r\n      ZeroDate();\r\n    }\r\n  };\r\n\r\n  updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerModule);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;