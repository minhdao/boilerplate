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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tests/utilities.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tests/utilities.test.js":
/*!*************************************!*\
  !*** ./src/tests/utilities.test.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utilities = __webpack_require__(/*! ./../utilities.js */ "./src/utilities.js");

describe('utilities.js add', function () {
  it('should return correct sum of two positive numbers', function () {
    var x = 12;
    var y = 43;
    var expectedResult = 55;
    var result = (0, _utilities.add)(12, 43);
    if (result !== expectedResult) {
      throw new Error('expected ' + expectedResult + ' but got ' + result);
    }
  });

  it('should return correct sum of two negative numbers', function () {
    var x = -10;
    var y = -32;
    var expectedResult = -42;
    var result = (0, _utilities.add)(x, y);
    if (result !== expectedResult) {
      throw new Error('expected ' + expectedResult + ' but got ' + result);
    }
  });

  it('should return correct sum of one negative and one positive number', function () {
    var x = 13;
    var y = -32;
    var expectedResult = -19;
    var result = (0, _utilities.add)(x, y);
    if (result !== expectedResult) {
      throw new Error('expected ' + expectedResult + ' but got ' + result);
    }
  });

  it('should reject and display error message if either input is not number', function () {
    var x = 'a';
    var y = 12;
    var expectedResult = 'can only add numbers.';
    var result = (0, _utilities.add)(x, y);
    if (result !== expectedResult) {
      throw new Error('expected ' + expectedResult + ' but got ' + result);
    }
  });
});

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [add return the sum of 2 numbers]
 * @param {[number]} x [first number]
 * @param {[number]} y [second number]
 */
var add = exports.add = function add(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return 'can only add numbers.';
  }
  return x + y;
};

/***/ })

/******/ });
//# sourceMappingURL=tests.js.map