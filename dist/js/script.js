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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion.js */ "./src/assets/js/modules/accordion.js");

document.addEventListener("DOMContentLoaded", () => {
  // close header banner
  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-banner-close') || e.target.closest('[data-banner-close]')) {
      document.querySelector('.banner').remove();
    }
  }); // mobile header

  window.addEventListener('click', e => {
    if (e.target.classList.contains('menu-open__btn') || e.target.closest('.menu-open__btn')) {
      document.querySelector('.navigation .menu').classList.toggle('active');

      if (document.querySelector('.navigation .menu').classList.contains('active')) {
        setTimeout(() => {
          document.querySelector('.navigation .account').classList.toggle('active');
        }, 200);
        document.body.style.overflowY = 'hidden';
      } else {
        document.querySelector('.navigation .account').classList.toggle('active');
        document.body.style.overflowY = 'auto';
      }
    }
  }); // questions-accordion

  Object(_modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.questions-accordion'));
});

/***/ }),

/***/ "./src/assets/js/modules/accordion.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/accordion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordion; });
function accordion(accordionWrapperEl) {
  const accordionHeaders = accordionWrapperEl.querySelectorAll('[data-accordion="title"]');
  accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', event => {
      const currentAccordionItem = event.currentTarget.parentNode;
      const accordionContent = currentAccordionItem.querySelector('[data-accordion="content"]'); // Toggle the active class on the current accordion item

      currentAccordionItem.classList.toggle('active'); // Toggle the height of the accordion content

      if (currentAccordionItem.classList.contains('active')) {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.height = '0px';
      }
    });
  });
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map