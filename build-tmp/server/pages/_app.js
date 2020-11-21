module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__("u0k+");

// CONCATENATED MODULE: ./redux/reducers/modal_reduce.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let INITIAL_STATE = {
  show_modal: 'hidden',
  title_modal: 'This is Title',
  text_modal: []
};

const Modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types["c" /* MODAL */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        show_modal: action.payload['show_modal'],
        title_modal: action.payload['title_modal'],
        text_modal: action.payload['text_modal']
      });

    default:
      return state;
  }
};

/* harmony default export */ var modal_reduce = (Modal);
// CONCATENATED MODULE: ./redux/reducers/job_reducer.js
function job_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function job_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { job_reducer_ownKeys(Object(source), true).forEach(function (key) { job_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { job_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function job_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let job_reducer_INITIAL_STATE = {
  jobs: [],
  job_filter: {}
};

const reducer = (state = job_reducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case types["b" /* JOB_LIST */]:
      return job_reducer_objectSpread(job_reducer_objectSpread({}, state), {}, {
        jobs: action.payload.jobs
      });

    case types["a" /* JOB_FILTER */]:
      console.log(action.payload);
      return job_reducer_objectSpread(job_reducer_objectSpread({}, state), {}, {
        job_filter: action.payload.filter
      });

    default:
      return state;
  }
};

/* harmony default export */ var job_reducer = (reducer);
// CONCATENATED MODULE: ./redux/reducers/index.js



const rootReducer = Object(external_redux_["combineReducers"])({
  modal: modal_reduce,
  job: job_reducer
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./components/nav.js

var __jsx = external_react_default.a.createElement;

const Nav = () => {
  return __jsx("nav", {
    className: "bg-white flex justify-center"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, __jsx("div", {
    className: "relative flex items-center justify-between h-16"
  }, __jsx("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, __jsx("button", {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    "aria-expanded": "false"
  }, __jsx("span", {
    className: "sr-only"
  }, "Open main menu"))), __jsx("div", {
    className: "flex-shrink-0 flex items-center"
  }, __jsx("h1", {
    className: "text-blue-400 text-xl font-bold"
  }, "HEALTH EXPLORE")), __jsx("div", {
    className: "flex items-center justify-center w-full"
  }, __jsx("div", {
    className: "hidden sm:block sm:ml-6"
  }, __jsx("div", {
    className: "flex space-x-4"
  }, __jsx("a", {
    href: "#",
    className: "px-3 py-2 text-sm font-medium bg-transparent"
  }, "PROFILE"), __jsx("a", {
    href: "#",
    className: "px-3 py-2 text-sm font-medium bg-transparent"
  }, "JOBS"), __jsx("a", {
    href: "#",
    className: "px-3 py-2 text-sm font-medium bg-transparent"
  }, "PROFESSIONAL NETWORK"), __jsx("a", {
    href: "#",
    className: "px-3 py-2 text-sm font-medium bg-transparent"
  }, "LOUNGE"), __jsx("a", {
    href: "#",
    className: "px-3 py-2 text-sm font-medium bg-transparent"
  }, "SALARY")))), __jsx("div", {
    className: "items-center justify-center"
  }, __jsx("div", {
    className: "hidden sm:block sm:ml-6"
  }, __jsx("div", {
    className: "space-x-4 flex items-center"
  }, __jsx("button", {
    className: "bg-transparent nav_btn_create_job text-center text-blue-400 font-bold border-2 border-blue-400 px-4 py-2 mx-4 rounded-lg"
  }, "CREATE JOB"), __jsx("img", {
    className: "h-12 w-12 mx-8 rounded-full ring-2 ring-white",
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: ""
  }), __jsx("a", {
    href: "#",
    className: "flex px-4 py-2 text-sm nav_btn_create_job font-medium bg-transparent"
  }, "LOG OUT")))))), __jsx("div", {
    className: "hidden sm:hidden"
  }, __jsx("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, __jsx("a", {
    href: "#",
    className: "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
  }, "Dashboard"), __jsx("a", {
    href: "#",
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
  }, "Team"), __jsx("a", {
    href: "#",
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
  }, "Projects"), __jsx("a", {
    href: "#",
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
  }, "Calendar")))));
};

/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./components/footer.js
var footer_jsx = external_react_default.a.createElement;


const Footer = () => {
  return footer_jsx("div", {
    className: "w-full mt-8 p-8 bg-white grid grid-cols-8 gap-4"
  }, footer_jsx("div", {
    className: "col-span-4"
  }, footer_jsx("h1", {
    className: "font-bold mb-2"
  }, "About US"), footer_jsx("h1", {
    className: "my-2"
  }, "We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love."), footer_jsx("h1", {
    className: "my-2"
  }, "All copyrights reserved @ 2020 - Health Explore")), footer_jsx("div", {
    className: "col-span-2"
  }, footer_jsx("h1", {
    className: "font-bold mb-2"
  }, "Sitemap"), footer_jsx("h1", null, "Nureses", footer_jsx("br", null), "Employers", footer_jsx("br", null), "Social networking", footer_jsx("br", null), "Jobs", footer_jsx("br", null))), footer_jsx("div", {
    className: "col-span-2"
  }, footer_jsx("h1", {
    className: "font-bold mb-2"
  }, "Privacy"), footer_jsx("h1", null, "Terms of use", footer_jsx("br", null), "Privacy policy", footer_jsx("br", null), "Cookie policy", footer_jsx("br", null))));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__("iOjB");

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;








const createStoreWithMiddleware = Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)(external_redux_["createStore"]);
const store = createStoreWithMiddleware(reducers);

function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(external_react_default.a.Fragment, null, _app_jsx(nav, null), _app_jsx("div", {
    className: "flex justify-center"
  }, _app_jsx("div", {
    className: "container"
  }, _app_jsx(Component, pageProps))), _app_jsx(footer, null)));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iOjB":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "u0k+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JOB_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JOB_FILTER; });
const MODAL = 'MODAL';
const JOB_LIST = 'JOB_LIST';
const JOB_FILTER = 'JOB_FILTER';

/***/ })

/******/ });