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

eval("ScrollReveal().reveal('nav', {\n    delay: 300,\n    origin: 'left',\n    distance: '100px'\n});\n\nScrollReveal().reveal('h1', {\n    delay: 500,\n    origin: 'right',\n    distance: '50px'\n});\n\nScrollReveal().reveal('.card', {\n    delay: 800,\n    origin: 'right',\n    distance: '200px',\n    interval: 300\n});\n\n//# sourceURL=webpack:///./src/js/animation.js?");

/***/ }),

/***/ "./src/js/components/GetButton.js":
/*!****************************************!*\
  !*** ./src/js/components/GetButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GetButton; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ \"./src/js/tools.js\");\n\n\n\nclass GetButton extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor() {\n        super({\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\n            // element: document.querySelector(`.js-getButton`)\n        });\n\n        // Custom logic for our button\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\n            {\n                getState: 'inactive'\n            });\n\n        // this.element.addEventListener('click', () => {\n        //     this.get();\n        // })\n        window.onload = this.get();\n    }\n\n    // Called every time the state updates\n\n    get() {\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['getState'] = \"Getting data\";\n        new _tools__WEBPACK_IMPORTED_MODULE_1__[\"GetRequest\"](\n            'http://localhost:5000/getBookings',\n            {},\n            this.callback\n        )\n    }\n\n    callback(response) {\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['getState'] = \"inactive\";\n\n        let objects = response;\n        objects.forEach(booking => {\n            // create card\n\n            const bookingCard = document.createElement('div');\n            bookingCard.setAttribute('class', 'card js-preview');\n            bookingCard.innerHTML = `<img src=\"http://1.bp.blogspot.com/-7XiSNsI7Zhc/XL3HYJjFmDI/AAAAAAACt9E/Yzd_cNd6h7IBQcnL4H8R7hHOQXXM_qX6QCK4BGAYYCw/s1600/girassol.gif\"\n                class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Your appointment</h5>\n                <p class=\"card-text\">See a preview of your appointment.</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item company\"><h5 class=\"label\">Company:</h5>${booking.company}</li>\n                <li class=\"list-group-item recipient\"><h5 class=\"label\">Recipient:</h5>${booking.recipient}</li>\n                <li class=\"list-group-item date\"><h5 class=\"label\">Date:</h5>${booking.date}</li>\n                <li class=\"list-group-item location\"><h5 class=\"label\">Location</h5>${booking.location}</li>\n            </ul>`;\n            document.querySelector('.page').appendChild(bookingCard);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/js/components/GetButton.js?");

/***/ }),

/***/ "./src/js/components/SaveButton.js":
/*!*****************************************!*\
  !*** ./src/js/components/SaveButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SaveButton; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ \"./src/js/tools.js\");\n\n\n\nclass SaveButton extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor() {\n        super({\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\n            element: document.querySelector(`.js-saveButton`)\n        });\n\n        // Custom logic for our button\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\n            {\n                saveState: 'inactive'\n            });\n\n        this.element.addEventListener('click', () => {\n            this.save();\n        })\n    }\n\n    // Called every time the state updates\n    render() {\n        if (_vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] == \"saving\") {\n            this.element.style.opacity = .5;\n            this.element.innerHTML = \"Saving...\";\n        }\n        else {\n            this.element.style.opacity = 1;\n            this.element.innerHTML = \"Save\";\n        }\n    }\n\n    save() {\n        const fields = [\n            'valueCompany',\n            'valueDate',\n            'valueRecipient',\n            'valueLocation'\n        ];\n\n        let allgood = true;\n\n        fields.forEach(field => {\n            if (_vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state[field].length == 0)\n                allgood = false;\n        });\n\n        if (allgood) {\n            _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] = \"saving\";\n            new _tools__WEBPACK_IMPORTED_MODULE_1__[\"WebRequest\"](\n                'http://localhost:5000/createBookings',\n                {\n                    company: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueCompany'],\n                    date: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueDate'],\n                    recipient: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueRecipient'],\n                    location: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['valueLocation'],\n                },\n                this.callback\n            )\n        }\n\n    }\n\n    callback(response) {\n        console.log(response);\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state['saveState'] = \"inactive\";\n        $('#exampleModal').modal('show')\n    }\n}\n\n//# sourceURL=webpack:///./src/js/components/SaveButton.js?");

/***/ }),

/***/ "./src/js/components/TextField.js":
/*!****************************************!*\
  !*** ./src/js/components/TextField.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextField; });\n/* harmony import */ var _vanite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanite */ \"./src/js/vanite.js\");\n\n\n\nclass TextField extends _vanite__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(name) {\n        super({\n            store: _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"],\n            element: document.querySelector(`.js-input${name}`)\n        });\n\n        // Custom logic for our button\n        this.name = name;\n\n        _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].setState(\n            {\n                [`value${this.name}`]: ''\n            });\n\n        this.element.addEventListener('keyup', () => {\n            _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state[`value${this.name}`] = this.element.value;\n        })\n    }\n\n    // Called every time the state updates\n    render() {\n        const state = _vanite__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state;\n        document.querySelector(`.js-${this.name}Preview`).innerHTML =\n            state[`value${this.name}`] ? state[`value${this.name}`] : \"\";\n    }\n}\n\n//# sourceURL=webpack:///./src/js/components/TextField.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ONLY ADD REQUIRES\n__webpack_require__(/*! ./vanite */ \"./src/js/vanite.js\")\n__webpack_require__(/*! ./tools */ \"./src/js/tools.js\")\n__webpack_require__(/*! ./main */ \"./src/js/main.js\")\n__webpack_require__(/*! ./animation */ \"./src/js/animation.js\")\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TextField */ \"./src/js/components/TextField.js\");\n/* harmony import */ var _components_SaveButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SaveButton */ \"./src/js/components/SaveButton.js\");\n/* harmony import */ var _components_GetButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GetButton */ \"./src/js/components/GetButton.js\");\n\n\n\n\n// Load in components per page\n\nlet sPath = window.location.pathname;\nlet sPage = sPath.substring(sPath.lastIndexOf('/') + 1);\n\nif (sPage == \"index.html\") {\n    const textFields = [\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Company'),\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Recipient'),\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Date'),\n        new _components_TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Location')\n    ];\n    new _components_SaveButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n\nelse if (sPage == \"get-bookings.html\") {\n    new _components_GetButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/*! exports provided: WebRequest, GetRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebRequest\", function() { return WebRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetRequest\", function() { return GetRequest; });\nclass WebRequest {\n    constructor(url, data, callback, files = []) {\n        this.url = url;\n        this.data = data;\n        this.callback = callback;\n        this.files = files;\n        this.send()\n    }\n\n    send() {\n        var expReq = this;\n\n        var xhttp = new XMLHttpRequest();\n\n        xhttp.onreadystatechange = function () {\n            if (typeof this.responseText == 'undefined') return false;\n\n            if (this.readyState == 4 && this.status == 200) {\n                var response = JSON.parse(this.responseText);\n                expReq.callback(response);\n            }\n\n        };\n\n        xhttp.open(\"POST\", this.url, true);\n        xhttp.setRequestHeader(\"Content-Type\", \"application/json\");\n        xhttp.send(JSON.stringify(this.data));\n    }\n}\n\nclass GetRequest {\n\n    constructor(url, data, callback = []) {\n        this.url = url;\n        this.data = data;\n        this.callback = callback;\n        this.get()\n    }\n\n    get() {\n        let expReq = this;\n\n        let xhttp = new XMLHttpRequest();\n        xhttp.onreadystatechange = function () {\n            if (this.readyState == 4 && this.status == 200) {\n                let response = JSON.parse(this.responseText);\n                expReq.callback(response);\n            }\n        };\n        xhttp.open(\"GET\", this.url, true);\n        xhttp.setRequestHeader(\"Content-Type\", \"application/json\");\n        xhttp.send(JSON.stringify(this.data));\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/tools.js?");

/***/ }),

/***/ "./src/js/vanite.js":
/*!**************************!*\
  !*** ./src/js/vanite.js ***!
  \**************************/
/*! exports provided: Store, Component, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nclass Store {\n    constructor() {\n        this.stateUpdateEvent = new Event('stateUpdate');\n\n        let self = this;\n        this.state = new Proxy({}, {\n            set(obj, prop, value) {\n                obj[prop] = value;\n                dispatchEvent(self.stateUpdateEvent);\n                return true;\n            },\n            get(state, key) {\n                return state[key];\n            }\n        });\n    }\n\n    setState(newState) {\n        let self = this;\n        self.state = Object.assign(self.state, newState);\n    }\n}\n\nclass Component {\n    constructor(properties = {}) {\n        this.render = this.render || function () { };\n\n        addEventListener('stateUpdate', () => this.render());\n\n        if (properties.hasOwnProperty('element'))\n            this.element = properties.element;\n    }\n}\n\nconst store = new Store();\n\n\n//# sourceURL=webpack:///./src/js/vanite.js?");

/***/ })

/******/ });