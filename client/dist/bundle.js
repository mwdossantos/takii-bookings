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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("ScrollReveal().reveal('nav', {\r\n    delay: 300,\r\n    origin: 'left',\r\n    distance: '100px'\r\n});\r\n\r\nScrollReveal().reveal('h1', {\r\n    delay: 500,\r\n    origin: 'right',\r\n    distance: '50px'\r\n});\r\n\r\nScrollReveal().reveal('.card', {\r\n    delay: 800,\r\n    origin: 'right',\r\n    distance: '200px',\r\n    interval: 300\r\n});\n\n//# sourceURL=webpack:///./src/js/animation.js?");

/***/ }),

/***/ "./src/js/components/GetButton.js":
/*!****************************************!*\
  !*** ./src/js/components/GetButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GetButton; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ \"./src/js/tools.js\");\n\r\n\r\n\r\nclass GetButton extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor() {\r\n        super({\r\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\r\n            element: document.querySelector(`.js-getButton`)\r\n        });\r\n\r\n        // Custom logic for our button\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\r\n            {\r\n                getState: 'inactive'\r\n            });\r\n\r\n        this.element.addEventListener('click', () => {\r\n            this.get();\r\n        })\r\n    }\r\n\r\n    // Called every time the state updates\r\n    render() {\r\n        if (_vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['getState'] == \"Getting data\") {\r\n            this.element.style.opacity = .5;\r\n            this.element.innerHTML = \"Getting data...\";\r\n        }\r\n        else {\r\n            this.element.style.opacity = 1;\r\n            this.element.innerHTML = \"Get data\";\r\n        }\r\n    }\r\n\r\n    get() {\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['getState'] = \"Getting data\";\r\n        new _tools__WEBPACK_IMPORTED_MODULE_1__[\"GetRequest\"](\r\n            'http://localhost:5000/getBookings',\r\n            {},\r\n            this.callback\r\n        )\r\n    }\r\n\r\n    callback(response) {\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['getState'] = \"inactive\";\r\n\r\n        let objects = response;\r\n        objects.forEach(booking => {\r\n            // create card\r\n\r\n            const bookingCard = document.createElement('div');\r\n            bookingCard.setAttribute('class', 'card js-preview');\r\n            bookingCard.innerHTML = `<img src=\"http://1.bp.blogspot.com/-7XiSNsI7Zhc/XL3HYJjFmDI/AAAAAAACt9E/Yzd_cNd6h7IBQcnL4H8R7hHOQXXM_qX6QCK4BGAYYCw/s1600/girassol.gif\"\r\n                class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Your appointment</h5>\r\n                <p class=\"card-text\">See a preview of your appointment.</p>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item company\"><h5 class=\"label\">Company:</h5>${booking.company}</li>\r\n                <li class=\"list-group-item recipient\"><h5 class=\"label\">Recipient:</h5>${booking.recipient}</li>\r\n                <li class=\"list-group-item date\"><h5 class=\"label\">Date:</h5>${booking.date}</li>\r\n                <li class=\"list-group-item location\"><h5 class=\"label\">Location</h5>${booking.location}</li>\r\n            </ul>`;\r\n            document.querySelector('.page').appendChild(bookingCard);\r\n\r\n            $('#exampleModal').modal('show');\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/components/GetButton.js?");

/***/ }),

/***/ "./src/js/components/SaveButton.js":
/*!*****************************************!*\
  !*** ./src/js/components/SaveButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SaveButton; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ \"./src/js/tools.js\");\n\r\n\r\n\r\nclass SaveButton extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor() {\r\n        super({\r\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\r\n            element: document.querySelector(`.js-saveButton`)\r\n        });\r\n\r\n        // Custom logic for our button\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\r\n            {\r\n                saveState: 'inactive'\r\n            });\r\n\r\n        this.element.addEventListener('click', () => {\r\n            this.save();\r\n        })\r\n    }\r\n\r\n    // Called every time the state updates\r\n    render() {\r\n        if (_vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] == \"saving\") {\r\n            this.element.style.opacity = .5;\r\n            this.element.innerHTML = \"Saving...\";\r\n        }\r\n        else {\r\n            this.element.style.opacity = 1;\r\n            this.element.innerHTML = \"Save\";\r\n        }\r\n    }\r\n\r\n    save() {\r\n        const fields = [\r\n            'valueCompany',\r\n            'valueDate',\r\n            'valueRecipient',\r\n            'valueLocation'\r\n        ];\r\n\r\n        let allgood = true;\r\n\r\n        fields.forEach(field => {\r\n            if (_vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state[field].length == 0)\r\n                allgood = false;\r\n        });\r\n\r\n        if (allgood) {\r\n            _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] = \"saving\";\r\n            new _tools__WEBPACK_IMPORTED_MODULE_1__[\"WebRequest\"](\r\n                'http://localhost:5000/createBookings',\r\n                {\r\n                    company: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueCompany'],\r\n                    date: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueDate'],\r\n                    recipient: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueRecipient'],\r\n                    location: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueLocation'],\r\n                },\r\n                this.callback\r\n            )\r\n        }\r\n\r\n    }\r\n\r\n    callback(response) {\r\n        console.log(response);\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] = \"inactive\";\r\n        $('#exampleModal').modal('show')\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/components/SaveButton.js?");

/***/ }),

/***/ "./src/js/components/TextField.js":
/*!****************************************!*\
  !*** ./src/js/components/TextField.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextField; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n\r\n\r\n\r\nclass TextField extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor(name) {\r\n        super({\r\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\r\n            element: document.querySelector(`.js-input${name}`)\r\n        });\r\n\r\n        // Custom logic for our button\r\n        this.name = name;\r\n\r\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\r\n            {\r\n                [`value${this.name}`]: ''\r\n            });\r\n\r\n        this.element.addEventListener('keyup', () => {\r\n            _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state[`value${this.name}`] = this.element.value;\r\n        })\r\n    }\r\n\r\n    // Called every time the state updates\r\n    render() {\r\n        const state = _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state;\r\n        document.querySelector(`.js-${this.name}Preview`).innerHTML =\r\n            state[`value${this.name}`] ? state[`value${this.name}`] : \"\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/components/TextField.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ONLY ADD REQUIRES\r\n__webpack_require__(/*! ./vanite */ \"./src/js/vanite.js\")\r\n__webpack_require__(/*! ./tools */ \"./src/js/tools.js\")\r\n__webpack_require__(/*! ./main */ \"./src/js/main.js\")\r\n__webpack_require__(/*! ./animation */ \"./src/js/animation.js\")\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TextField */ \"./src/js/components/TextField.js\");\n/* harmony import */ var _components_SaveButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SaveButton */ \"./src/js/components/SaveButton.js\");\n/* harmony import */ var _components_GetButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GetButton */ \"./src/js/components/GetButton.js\");\n\r\n\r\n\r\n\r\n// Load in components per page\r\n\r\nlet sPath = window.location.pathname;\r\nlet sPage = sPath.substring(sPath.lastIndexOf('/') + 1);\r\n\r\nif (sPage == \"index.html\") {\r\n    const textFields = [\r\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Company'),\r\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Recipient'),\r\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Date'),\r\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Location')\r\n    ];\r\n    new _components_SaveButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n}\r\n\r\nelse if (sPage == \"get-bookings.html\") {\r\n    new _components_GetButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/*! exports provided: WebRequest, GetRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebRequest\", function() { return WebRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetRequest\", function() { return GetRequest; });\nclass WebRequest {\r\n    constructor(url, data, callback, files = []) {\r\n        this.url = url;\r\n        this.data = data;\r\n        this.callback = callback;\r\n        this.files = files;\r\n        this.send()\r\n    }\r\n\r\n    send() {\r\n        var expReq = this;\r\n\r\n        var xhttp = new XMLHttpRequest();\r\n\r\n        xhttp.onreadystatechange = function () {\r\n            if (typeof this.responseText == 'undefined') return false;\r\n\r\n            if (this.readyState == 4 && this.status == 200) {\r\n                var response = JSON.parse(this.responseText);\r\n                expReq.callback(response);\r\n            }\r\n\r\n        };\r\n\r\n        xhttp.open(\"POST\", this.url, true);\r\n        xhttp.setRequestHeader(\"Content-Type\", \"application/json\");\r\n        xhttp.send(JSON.stringify(this.data));\r\n    }\r\n}\r\n\r\nclass GetRequest {\r\n\r\n    constructor(url, data, callback = []) {\r\n        this.url = url;\r\n        this.data = data;\r\n        this.callback = callback;\r\n        this.get()\r\n    }\r\n\r\n    get() {\r\n        let expReq = this;\r\n\r\n        let xhttp = new XMLHttpRequest();\r\n        xhttp.onreadystatechange = function () {\r\n            if (this.readyState == 4 && this.status == 200) {\r\n                let response = JSON.parse(this.responseText);\r\n                expReq.callback(response);\r\n            }\r\n        };\r\n        xhttp.open(\"GET\", this.url, true);\r\n        xhttp.setRequestHeader(\"Content-Type\", \"application/json\");\r\n        xhttp.send(JSON.stringify(this.data));\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/tools.js?");

/***/ }),

/***/ "./src/js/vanite.js":
/*!**************************!*\
  !*** ./src/js/vanite.js ***!
  \**************************/
/*! exports provided: Store, Component, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nclass Store {\r\n    constructor() {\r\n        this.stateUpdateEvent = new Event('stateUpdate');\r\n\r\n        let self = this;\r\n        this.state = new Proxy({}, {\r\n            set(obj, prop, value) {\r\n                obj[prop] = value;\r\n                dispatchEvent(self.stateUpdateEvent);\r\n                return true;\r\n            },\r\n            get(state, key) {\r\n                return state[key];\r\n            }\r\n        });\r\n    }\r\n\r\n    setState(newState) {\r\n        let self = this;\r\n        self.state = Object.assign(self.state, newState);\r\n    }\r\n}\r\n\r\nclass Component {\r\n    constructor(properties = {}) {\r\n        this.render = this.render || function () { };\r\n\r\n        addEventListener('stateUpdate', () => this.render());\r\n\r\n        if (properties.hasOwnProperty('element'))\r\n            this.element = properties.element;\r\n    }\r\n}\r\n\r\nconst store = new Store();\r\n\n\n//# sourceURL=webpack:///./src/js/vanite.js?");

/***/ })

/******/ });