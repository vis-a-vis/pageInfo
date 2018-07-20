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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pageInfo = __webpack_require__(1);

var _pageInfo2 = _interopRequireDefault(_pageInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Info = _pageInfo2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sum(a, b) {
  return a + b;
}
module.exports = sum;

/*import React from 'react';

const infoStyle = {
  float: 'left',
  width: '50%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center'
};

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {
        ID: '252120z',
        location: 'Albany, NY',
        condition: 'Brand New',
        name: 'CanonEOS 40d',
        price: 499
      },
      currentBid: 499
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newBid = this.state.currentBid + 1;
    let item = Object.assign({}, this.state.item);
    item.price = newBid;
    this.setState({
      currentBid: newBid,
      item: item
    });
  }

  render() {
    return (
      <div style={infoStyle}>
        <p>
          <span>
            Auction: {this.state.item.ID}
          </span>
          <br/>
          <span>
            For sale is a <em>
              {this.state.item.condition}
            </em> <strong>
              {this.state.item.name}
            </strong>
          </span>
          <br />
          <span>
            Current Bid: ${this.state.item.price}
          </span>
          <button onClick={(e) => {this.handleClick(e)}}>
          Bid
          </button>
        </p>
      </div>
    );
  }
}
*/

/***/ })
/******/ ]);