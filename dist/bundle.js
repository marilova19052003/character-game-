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

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Character = /*#__PURE__*/function () {\n  function Character(name, type) {\n    _classCallCheck(this, Character);\n    var types = [\"Bowman\", \"Swordsman\", \"Magician\", \"Daemon\", \"Undead\", \"Zombie\"];\n    if (name.length < 2 || name.length > 10) {\n      throw new Error(\"Имя должно содержать от 2 до 10 символов\");\n    }\n    if (!types.includes(type)) {\n      throw new Error(\"Некорректный тип персонажа\");\n    }\n    this.name = name;\n    this.type = type;\n    this.health = 100;\n    this.level = 1;\n    switch (type) {\n      case \"Bowman\":\n        this.attack = 25;\n        this.defence = 25;\n        break;\n      case \"Swordsman\":\n        this.attack = 40;\n        this.defence = 10;\n        break;\n      case \"Magician\":\n        this.attack = 10;\n        this.defence = 40;\n        break;\n      case \"Undead\":\n        this.attack = 25;\n        this.defence = 25;\n        break;\n      case \"Zombie\":\n        this.attack = 40;\n        this.defence = 10;\n        break;\n      case \"Daemon\":\n        this.attack = 10;\n        this.defence = 40;\n        break;\n      default:\n        throw new Error(\"Некорректный тип персонажа\");\n    }\n  }\n  return _createClass(Character, [{\n    key: \"levelUp\",\n    value: function levelUp() {\n      if (this.health === 0) {\n        throw new Error(\"Нельзя повысить левел умершего\");\n      }\n      this.level += 1;\n      this.attack *= 1.2;\n      this.defence *= 1.2;\n      this.health = 100;\n    }\n  }, {\n    key: \"damage\",\n    value: function damage(points) {\n      this.health -= points * (1 - this.defence / 100);\n      if (this.health < 0) {\n        this.health = 0;\n      }\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n//# sourceURL=webpack://character-game/./src/character.js?");

/***/ }),

/***/ "./src/characters.js":
/*!***************************!*\
  !*** ./src/characters.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bowman: () => (/* binding */ Bowman),\n/* harmony export */   Daemon: () => (/* binding */ Daemon),\n/* harmony export */   Magician: () => (/* binding */ Magician),\n/* harmony export */   Swordsman: () => (/* binding */ Swordsman),\n/* harmony export */   Undead: () => (/* binding */ Undead),\n/* harmony export */   Zombie: () => (/* binding */ Zombie)\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Bowman = /*#__PURE__*/function (_Character) {\n  function Bowman(name) {\n    _classCallCheck(this, Bowman);\n    return _callSuper(this, Bowman, [name, \"Bowman\"]);\n  }\n  _inherits(Bowman, _Character);\n  return _createClass(Bowman);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Swordsman = /*#__PURE__*/function (_Character2) {\n  function Swordsman(name) {\n    _classCallCheck(this, Swordsman);\n    return _callSuper(this, Swordsman, [name, \"Swordsman\"]);\n  }\n  _inherits(Swordsman, _Character2);\n  return _createClass(Swordsman);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Magician = /*#__PURE__*/function (_Character3) {\n  function Magician(name) {\n    _classCallCheck(this, Magician);\n    return _callSuper(this, Magician, [name, \"Magician\"]);\n  }\n  _inherits(Magician, _Character3);\n  return _createClass(Magician);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Daemon = /*#__PURE__*/function (_Character4) {\n  function Daemon(name) {\n    _classCallCheck(this, Daemon);\n    return _callSuper(this, Daemon, [name, \"Daemon\"]);\n  }\n  _inherits(Daemon, _Character4);\n  return _createClass(Daemon);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Undead = /*#__PURE__*/function (_Character5) {\n  function Undead(name) {\n    _classCallCheck(this, Undead);\n    return _callSuper(this, Undead, [name, \"Undead\"]);\n  }\n  _inherits(Undead, _Character5);\n  return _createClass(Undead);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Zombie = /*#__PURE__*/function (_Character6) {\n  function Zombie(name) {\n    _classCallCheck(this, Zombie);\n    return _callSuper(this, Zombie, [name, \"Zombie\"]);\n  }\n  _inherits(Zombie, _Character6);\n  return _createClass(Zombie);\n}(_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://character-game/./src/characters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters */ \"./src/characters.js\");\n\n\n\n// Пример использования\nvar hero = new _characters__WEBPACK_IMPORTED_MODULE_1__.Bowman(\"Hero\");\nconsole.log(hero);\n\n//# sourceURL=webpack://character-game/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;