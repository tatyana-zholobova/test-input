/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_utm_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/utm_cookie */ "./assets/scripts/tools/utm_cookie.js");
/* harmony import */ var _tools_utm_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_utm_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_feedback_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/feedback-form */ "./assets/scripts/tools/feedback-form.js");
/* harmony import */ var _components_covering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/covering */ "./assets/scripts/components/covering.js");
/* harmony import */ var _components_covering__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_covering__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq */ "./assets/scripts/components/faq.js");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_faq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_3d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal-3d */ "./assets/scripts/components/modal-3d.js");
/* harmony import */ var _components_modal_3d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modal_3d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_thanks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thanks */ "./assets/scripts/components/thanks.js");
/* harmony import */ var _components_thanks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_thanks__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./assets/scripts/components/covering.js":
/*!***********************************************!*\
  !*** ./assets/scripts/components/covering.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var view = document.querySelector('[data-element="covering"]');
if (view) setTimeout(coveringInit, 0);
function coveringInit() {
  var videoBox = view.querySelector('[data-element="covering__video-box"]');
  var previewPicture = videoBox.querySelector('[data-element="covering__preview-picture"]');
  previewPicture.addEventListener('click', loadVideo);
  function loadVideo() {
    var video = document.createElement('div');
    video.classList.add('covering__video');
    var iframe = document.createElement('iframe');
    iframe.classList.add('covering__iframe');
    iframe.src = 'https://www.youtube.com/embed/x__bOkW8_M8?autoplay=1&mute=1';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('frameborder', '0');
    video.appendChild(iframe);
    videoBox.appendChild(video);
    previewPicture.style.display = 'none';
  }
}

/***/ }),

/***/ "./assets/scripts/components/faq.js":
/*!******************************************!*\
  !*** ./assets/scripts/components/faq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var faq = document.querySelector('[data-element="faq"]');
if (faq) setTimeout(faqInit, 0);
function faqInit() {
  var questions = faq.querySelectorAll('[data-element="faq__question"]');
  if (questions.length) {
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', showContent);
    }
  }
  function showContent() {
    var parent = this.parentNode;
    if (parent) {
      parent.classList.toggle('faq__item_active');
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/modal-3d.js":
/*!***********************************************!*\
  !*** ./assets/scripts/components/modal-3d.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttons = document.querySelectorAll('[data-role="open-modal-3d"]');
var view = document.querySelector('[data-element="modal-3d"]');
if (view) setTimeout(modal3dInit, 0);
function modal3dInit() {
  var layer = view.querySelector('[data-element="modal-3d__layer"]');
  var container = view.querySelector('[data-element="modal-3d__cont"]');
  var canvas = view.querySelector('[data-element="modal-3d__canvas"]');
  var isLoadThreeJS = false;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openModal);
  }
  layer.addEventListener('click', closeModal);
  function openModal(event) {
    var model = event.currentTarget.dataset.model;
    view.classList.add("modal-3d_display");
    setTimeout(showModalOpacity, 0);
    function showModalOpacity() {
      view.classList.add("modal-3d_opacity");
    }
    isLoadThreeJS ? canvas.dataset.model = model : createAndLoadScript(model);
  }
  function closeModal() {
    view.classList.remove("modal-3d_opacity");
    setTimeout(hideModalDisplay, 300);
    function hideModalDisplay() {
      view.classList.remove("modal-3d_display");
      canvas.dataset.model = '';
    }
  }
  function createAndLoadScript(model) {
    container.classList.add('modal-3d__cont_load');
    var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = view.dataset.hash ? "statics/scripts/model-".concat(view.dataset.hash, ".js") : "statics/scripts/model.js";
    scriptTag.addEventListener('load', function () {
      canvas.dataset.model = model;
      isLoadThreeJS = true;
    }, {
      once: true
    });
    document.body.appendChild(scriptTag);
  }
}

/***/ }),

/***/ "./assets/scripts/components/thanks.js":
/*!*********************************************!*\
  !*** ./assets/scripts/components/thanks.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var view = document.querySelector('[data-element="thanks"]');
if (view) setTimeout(thanksInit, 0);
function thanksInit() {
  var text = view.querySelector('[data-element="thanks__text"]');
  var weekday = new Date().getDay();
  if (weekday === 0 || weekday === 6) {
    text.textContent = 'Наш менеджер перезвонит вам в понедельник утром';
  }
}

/***/ }),

/***/ "./assets/scripts/tools/feedback-form.js":
/*!***********************************************!*\
  !*** ./assets/scripts/tools/feedback-form.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sendForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendForm */ "./assets/scripts/tools/sendForm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var feedbackForms = document.querySelectorAll('[data-role="feedback-form"]');
if (feedbackForms.length) setTimeout(feedbackFormsInit, 0);
function feedbackFormsInit() {
  for (var i = 0; i < feedbackForms.length; i++) {
    var feedbackForm = feedbackForms[i];
    new FeedbackForm(feedbackForm);
  }
}
var FeedbackForm = /*#__PURE__*/function () {
  function FeedbackForm(element) {
    var _this = this;
    _classCallCheck(this, FeedbackForm);
    this.form = element;
    this.phoneInput = element.querySelector('[data-role="feedback-form__phone-input"]');
    this.submitButton = element.querySelector('[data-role="feedback-form__button"]');
    this.errorText = element.querySelector('[data-role="feedback-form__text-error"]');
    this.form.addEventListener('submit', function (event) {
      event.preventDefault();
      _this.disabledForm();
      var elementsForm = event.target.elements;
      if (Object(_sendForm__WEBPACK_IMPORTED_MODULE_0__["isPhoneNotValid"])(elementsForm.phone.value)) return _this.invalidForm();
      elementsForm.form_number.value = '200';
      _this.phoneInput.classList.remove('input_error');
      _this.errorText.classList.add('text-error_hide');
      _this.createAndSendForm();
    });
  }
  _createClass(FeedbackForm, [{
    key: "disabledForm",
    value: function disabledForm() {
      this.phoneInput.disabled = true;
      this.submitButton.disabled = true;
    }
  }, {
    key: "enableForm",
    value: function enableForm() {
      this.phoneInput.disabled = false;
      this.submitButton.disabled = false;
    }
  }, {
    key: "invalidForm",
    value: function invalidForm() {
      this.phoneInput.required = true;
      this.phoneInput.classList.add('input_error');
      this.errorText.classList.remove('text-error_hide');
      this.enableForm();
    }
  }, {
    key: "createAndSendForm",
    value: function createAndSendForm() {
      var formData = new FormData(this.form);
      formData.append('phone', this.phoneInput.value);
      Object(_sendForm__WEBPACK_IMPORTED_MODULE_0__["SendForm"])(formData, this.callBackGoodSendForm);
    }
  }, {
    key: "callBackGoodSendForm",
    value: function callBackGoodSendForm() {
      document.location.assign('/thanks.html');
    }
  }]);
  return FeedbackForm;
}();

/***/ }),

/***/ "./assets/scripts/tools/sendForm.js":
/*!******************************************!*\
  !*** ./assets/scripts/tools/sendForm.js ***!
  \******************************************/
/*! exports provided: SendForm, isPhoneNotValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendForm", function() { return SendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhoneNotValid", function() { return isPhoneNotValid; });
function SendForm(dataObject, cb) {
  var request = new XMLHttpRequest();
  request.open('POST', '/mail.php', true);
  request.addEventListener('readystatechange', function (event) {
    var response = event.currentTarget;
    if (response.readyState !== XMLHttpRequest.DONE) return false;
    if (response.status === 200) return cb();
    console.log('Error send form');
  });
  request.send(dataObject);
}
function isPhoneNotValid(phoneString) {
  if (!phoneString) return true;
  if (typeof phoneString !== 'string') return true;
  if (phoneString.length < 5) return true;
  if (phoneString.length > 100) return true;
  if (/[^0-9-+()\s]/g.test(phoneString)) return true;
}

/***/ }),

/***/ "./assets/scripts/tools/utm_cookie.js":
/*!********************************************!*\
  !*** ./assets/scripts/tools/utm_cookie.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// Author: Puru Choudhary (www.terminusapp.com)
// URL: https://github.com/medius/utm_cookie
//
// Description:
// This script saves UTM parameters in cookies whenever there are any UTM parameters
// in the URL. It also saves the initial referrer information in a cookie which is
// never (365 days) overwritten.
//
// Adding this script is useful for custom tracking. e.g. The values in the cookies
// can be read and added to forms or stored in the backend database, etc.
//

var utmCookie = {
  cookieNamePrefix: '_uc_',
  utmParams: ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'],
  cookieExpiryDays: 365,
  // From http://www.quirksmode.org/js/cookies.html
  createCookie: function createCookie(name, value, days) {
    var expires = '';
    if (days) {
      var msDay = 24 * 60 * 60 * 1000;
      var date = new Date(Date.now() + days * msDay);
      expires = "expires=\"".concat(date.toUTCString(), "; ");
    }
    document.cookie = "".concat(this.cookieNamePrefix).concat(name, "=").concat(value, "; ").concat(expires, "path=/");
  },
  readCookie: function readCookie(name) {
    var nameEQ = this.cookieNamePrefix + name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: function eraseCookie(name) {
    this.createCookie(name, '', -1);
  },
  getParameterByName: function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regexS = '[\\?&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results === null) return '';
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  },
  utmPresentInUrl: function utmPresentInUrl() {
    var present = false;
    for (var i = 0; i < this.utmParams.length; i++) {
      var param = this.utmParams[i];
      var value = this.getParameterByName(param);
      if (value !== '' && value !== undefined) {
        present = true;
      }
    }
    return present;
  },
  writeUtmCookieFromParams: function writeUtmCookieFromParams() {
    for (var i = 0; i < this.utmParams.length; i++) {
      var param = this.utmParams[i];
      var value = this.getParameterByName(param);
      this.createCookie(param, value, this.cookieExpiryDays);
    }
  },
  writeCookieOnce: function writeCookieOnce(name, value) {
    var existingValue = this.readCookie(name);
    if (!existingValue) {
      this.createCookie(name, value, this.cookieExpiryDays);
    }
  },
  writeReferrerOnce: function writeReferrerOnce() {
    var value = document.referrer;
    if (value === "" || value === undefined) value = 'direct';
    this.writeCookieOnce("referrer", value);
  },
  referrer: function referrer() {
    return this.readCookie("referrer");
  }
};
utmCookie.writeReferrerOnce();
if (utmCookie.utmPresentInUrl()) {
  utmCookie.writeUtmCookieFromParams();
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map