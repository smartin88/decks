(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckItem/DeckItem.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/DeckItem/DeckItem.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container__deck {\n    display: flex;\n    align-items: center;\n    border: 1px solid black; \n    border-radius: 20px;\n    border: 3px solid white; \n    height: 150px;\n    padding: 2rem; \n    margin-top: 2rem; \n}\n\n\n\n.deckName {\n    display: flex;\n    align-items: center;\n    color: white;\n    border: 1px solid white;\n    height: 150px;\n    width: 150px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    background-color: blueviolet;\n    font-size: 20px;\n}\n\n.deckLength {\n    display: flex;\n    align-items: center;\n    color: white; \n    font-size: 30px;\n    margin-left: 2rem;\n}\n\n", "",{"version":3,"sources":["webpack://src/components/DeckItem/DeckItem.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[".container__deck {\n    display: flex;\n    align-items: center;\n    border: 1px solid black; \n    border-radius: 20px;\n    border: 3px solid white; \n    height: 150px;\n    padding: 2rem; \n    margin-top: 2rem; \n}\n\n\n\n.deckName {\n    display: flex;\n    align-items: center;\n    color: white;\n    border: 1px solid white;\n    height: 150px;\n    width: 150px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    background-color: blueviolet;\n    font-size: 20px;\n}\n\n.deckLength {\n    display: flex;\n    align-items: center;\n    color: white; \n    font-size: 30px;\n    margin-left: 2rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckManagement/DeckManagement.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/DeckManagement/DeckManagement.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".deck__management__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  perspective: 1000px;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.deck__list__container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  overflow-y: scroll;\n}\n\n.deck__item {\n  border: solid black 3px;\n  border-radius: 10px;\n  margin: 1em;\n  width: 17vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n.deck__item:hover {\n  background-color: whitesmoke;\n}\n\n.deck__delete__button {\n  display: flex;\n  flex: 0.5 1;\n  align-self: flex-end;\n}\n\n.delete__button__logo {\n  width: 1.5em;\n  margin: 0.4em;\n  cursor: pointer;\n}\n\n.delete__button__logo:hover {\n  transform: scale(1.1);\n}\n\n.deck__name {\n  flex: 1 1;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.deck__name__title {\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.deck__number__of__cards {\n  flex: 1 1;\n  text-align: center;\n}\n\n.deck__add__new__card {\n  flex: 1 1;\n  text-align: center;\n}\n\n.update__deck__container{\n  flex: 1 1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deck__update__logo {\n  width: 1.5em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n\n.deck__update__logo:hover {\n  transform: scale(1.2);\n}\n\n.deck__username {\n  flex: 1 1;\n  text-align: center;\n}\n\n.start__training__container {\n  flex: 1 1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deck__start__training__logo {\n  width: 1.5em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n\n.deck__start__training__logo:hover {\n transform: scale(1.2);\n}\n\n\n/* ADD NEW CARD POPUP WINDOW */\n.card__popup__container {\n  position: absolute;\n  background-color: white;\n  z-index: 2;\n  width: 30em;\n  height: 20em;\n  top: 10%;\n  border: solid black 3px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.add__word__title {\n  font-size: 1.5em;\n  margin: 1em;\n}\n\n.add__word__input__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add__word__input__field {\n  margin: 1em;\n  width: 15em;\n  padding: 1.2em;\n}\n\n.add__word__add__button {\n  font-size: 1.2em;\n  margin-top: 0.8em;\n}\n\n.add__word__close__button {\n  position: absolute;\n  right: 0.5em;\n  bottom: 0.3em;\n  font-size: 1.3em;\n  font-weight: bolder;\n}\n\n.blur__it {\n  filter: blur(2px);\n}\n\n/* UPDATE DECK SECTION */\n.update__deck__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.card__list__title {\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.card__list {\n  display: flex;\n  flex-direction: column;\n  border: solid black 3px;\n  border-radius: 15px;\n  background-color: white;\n  padding: 3em;\n}\n\n.card__list__item {\n  display: flex;\n  margin: 0.5em;\n}\n\n.card__word__item {\n  width: 15em;\n}\n\n.edit__card__logo, .delte__card__logo {\n  width: 1em;\n  cursor: pointer;\n  margin: 0.2em;\n}\n\n.edit__card__logo:hover, .delte__card__logo:hover {\n  transform: scale(1.2);\n}\n\n.input__deckmanagement__card {\n  padding: 0.5em;\n  margin-right: 0.5em;\n  width: 5em;\n  border: solid black 2px;\n  border-radius: 5px;\n}\n\n.input__deckmanagement__button {\n  padding: 0.5em;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.add__word__container__update__deck {\n  display: flex;\n  flex-direction: row;\n  margin-top: 1em;\n}\n\n.add__word__input__field__update__deck {\n  width: 5em;\n  margin: 0.5em;\n  padding: 0.5em;\n  border: solid black 2px;\n  border-radius: 5px;\n}\n\n.add__word__button__update__deck {\n  margin: 0.5em;\n  padding: 0.5em;\n}\n", "",{"version":3,"sources":["webpack://src/components/DeckManagement/DeckManagement.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,WAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAO;EACP,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;CACC,qBAAqB;AACtB;;;AAGA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,eAAe;EACf,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,UAAU;EACV,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB","sourcesContent":[".deck__management__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  perspective: 1000px;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.deck__list__container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  overflow-y: scroll;\n}\n\n.deck__item {\n  border: solid black 3px;\n  border-radius: 10px;\n  margin: 1em;\n  width: 17vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n.deck__item:hover {\n  background-color: whitesmoke;\n}\n\n.deck__delete__button {\n  display: flex;\n  flex: 0.5;\n  align-self: flex-end;\n}\n\n.delete__button__logo {\n  width: 1.5em;\n  margin: 0.4em;\n  cursor: pointer;\n}\n\n.delete__button__logo:hover {\n  transform: scale(1.1);\n}\n\n.deck__name {\n  flex: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.deck__name__title {\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.deck__number__of__cards {\n  flex: 1;\n  text-align: center;\n}\n\n.deck__add__new__card {\n  flex: 1;\n  text-align: center;\n}\n\n.update__deck__container{\n  flex: 1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deck__update__logo {\n  width: 1.5em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n\n.deck__update__logo:hover {\n  transform: scale(1.2);\n}\n\n.deck__username {\n  flex: 1;\n  text-align: center;\n}\n\n.start__training__container {\n  flex: 1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deck__start__training__logo {\n  width: 1.5em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n\n.deck__start__training__logo:hover {\n transform: scale(1.2);\n}\n\n\n/* ADD NEW CARD POPUP WINDOW */\n.card__popup__container {\n  position: absolute;\n  background-color: white;\n  z-index: 2;\n  width: 30em;\n  height: 20em;\n  top: 10%;\n  border: solid black 3px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.add__word__title {\n  font-size: 1.5em;\n  margin: 1em;\n}\n\n.add__word__input__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add__word__input__field {\n  margin: 1em;\n  width: 15em;\n  padding: 1.2em;\n}\n\n.add__word__add__button {\n  font-size: 1.2em;\n  margin-top: 0.8em;\n}\n\n.add__word__close__button {\n  position: absolute;\n  right: 0.5em;\n  bottom: 0.3em;\n  font-size: 1.3em;\n  font-weight: bolder;\n}\n\n.blur__it {\n  filter: blur(2px);\n}\n\n/* UPDATE DECK SECTION */\n.update__deck__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.card__list__title {\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.card__list {\n  display: flex;\n  flex-direction: column;\n  border: solid black 3px;\n  border-radius: 15px;\n  background-color: white;\n  padding: 3em;\n}\n\n.card__list__item {\n  display: flex;\n  margin: 0.5em;\n}\n\n.card__word__item {\n  width: 15em;\n}\n\n.edit__card__logo, .delte__card__logo {\n  width: 1em;\n  cursor: pointer;\n  margin: 0.2em;\n}\n\n.edit__card__logo:hover, .delte__card__logo:hover {\n  transform: scale(1.2);\n}\n\n.input__deckmanagement__card {\n  padding: 0.5em;\n  margin-right: 0.5em;\n  width: 5em;\n  border: solid black 2px;\n  border-radius: 5px;\n}\n\n.input__deckmanagement__button {\n  padding: 0.5em;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.add__word__container__update__deck {\n  display: flex;\n  flex-direction: row;\n  margin-top: 1em;\n}\n\n.add__word__input__field__update__deck {\n  width: 5em;\n  margin: 0.5em;\n  padding: 0.5em;\n  border: solid black 2px;\n  border-radius: 5px;\n}\n\n.add__word__button__update__deck {\n  margin: 0.5em;\n  padding: 0.5em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendItem/FriendItem.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/FriendItem/FriendItem.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container__friend {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid black; \n    margin: 2rem; \n    border-radius: 20px;\n    padding: 2rem;\n    border: 3px solid white; \n    height: 150px;\n}\n\n.box__info__user {\n    display: flex;\n    flex-direction: column;\n    color: white;\n}\n\n.friends__column {\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    margin-top: 100px;\n}\n\n.friends__img__preview {\n    height: 150px;\n    width: 150px;\n    border-radius: 5px;\n    margin: 1rem; \n    border: 2px solid white; \n}\n\n.buttonRemove {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://src/components/FriendItem/FriendItem.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":[".container__friend {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid black; \n    margin: 2rem; \n    border-radius: 20px;\n    padding: 2rem;\n    border: 3px solid white; \n    height: 150px;\n}\n\n.box__info__user {\n    display: flex;\n    flex-direction: column;\n    color: white;\n}\n\n.friends__column {\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    margin-top: 100px;\n}\n\n.friends__img__preview {\n    height: 150px;\n    width: 150px;\n    border-radius: 5px;\n    margin: 1rem; \n    border: 2px solid white; \n}\n\n.buttonRemove {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    font-weight: bolder;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendsPage/FriendsPage.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/FriendsPage/FriendsPage.css ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".containerFriendsPage {\n display: flex;\n flex-direction: column;\n}\n\n.container__two__main__columns {\n    display: flex;\n    justify-content: flex-start;\n}\n\n.friends__column {\n   background-color: #ff7b10;\n   height: 100vh;\n   width: 50%;\n}\n\n.friend__choosen__decks__column {\n   margin-top: 12.5vh;\n   background-color: grey; \n   height:100vh;\n   width: 50%;\n}\n\n.box__info__user {\n   margin-left: 5rem; \n   font-size: 30px;\n}", "",{"version":3,"sources":["webpack://src/components/FriendsPage/FriendsPage.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;GACG,yBAAyB;GACzB,aAAa;GACb,UAAU;AACb;;AAEA;GACG,kBAAkB;GAClB,sBAAsB;GACtB,YAAY;GACZ,UAAU;AACb;;AAEA;GACG,iBAAiB;GACjB,eAAe;AAClB","sourcesContent":[".containerFriendsPage {\n display: flex;\n flex-direction: column;\n}\n\n.container__two__main__columns {\n    display: flex;\n    justify-content: flex-start;\n}\n\n.friends__column {\n   background-color: #ff7b10;\n   height: 100vh;\n   width: 50%;\n}\n\n.friend__choosen__decks__column {\n   margin-top: 12.5vh;\n   background-color: grey; \n   height:100vh;\n   width: 50%;\n}\n\n.box__info__user {\n   margin-left: 5rem; \n   font-size: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePageNewDesign.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/HomePage/HomePageNewDesign.css ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home__page__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  perspective: 1000px;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.home__page__card__container {\n  width: 50vw;\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home__page__card {\n  /* width: 50vw; */\n  border: solid 4px;\n  background-color: white;\n  margin-top: 8em;\n  margin-bottom: 8em;\n  transform-style: preserve-3d;\n  border-radius: 15px;\n  padding: 1rem 1rem;\n  box-shadow: 0px 0px 20px #838383;\n  transition: all 0.2s ease-out;\n}\n\n.home__page__card__header {\n  display: flex;\n}\n\n.home__page__card__headline {\n  min-height: 10vh;\n  margin-left: 2em;\n  transition: all 0.9s ease-out;\n}\n\n.home__page__card__logo {\n  min-height: 10vh;\n  display: flex;\n}\n\n.home__page__card__logo img {\n  width: 7rem;\n  z-index: 2;\n  transition: all 0.9s ease-out;\n}\n\n.home__page__card__circle {\n  width: 7rem;\n  height: 7rem;\n  background: linear-gradient(\n    to right,\n    rgba(245, 70, 66, 0.75),\n    rgba(8, 83, 156, 0.75)\n  );\n  border-radius: 50%;\n  z-index: 1;\n  animation: pulse-eye 2s infinite;\n}\n\n.home__page__card__info h3 {\n  font-size: 1.3rem;\n  padding: 2rem 0rem;\n  margin-left: 1em;\n  margin-right: 1em;\n  text-align: justify;\n  color: #585858;\n  font-weight: lighter;\n  transition: all 0.75s ease-out;\n}\n\n/* MENU BUTTONS */\n.home__page__card__sizes {\n  display: flex;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n  border: solid 3px;\n  justify-content: space-between;\n  transition: all 0.75s ease-out;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.home__page__card__sizes button {\n  padding: 0.5rem 1.7rem;\n  margin: 1em;\n  flex: 1 1;\n  text-transform: uppercase;\n  font-size: 1em;\n  background: none;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: 'Share Tech Mono', sans-serif;\n  font-weight: bold;\n  color: black;\n  transition: all 1s ease-in-out;\n  white-space: nowrap;\n}\n\n.home__page__card__sizes button:hover {\n  text-decoration-line: underline;\n  text-decoration-style: solid;\n  text-decoration-color: rgba(8, 83, 156, 0.75);\n  text-decoration-thickness: 7px;\n  cursor: pointer;\n}\n\n/* ADD NEW CARD/DECK BUTTON */\n.home__page__card__blobs__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.home__page__card__blob {\n  margin: 1em;\n  height: 60px;\n  width: 60px;\n  transform: scale(1);\n  animation: pulse-button 2s infinite;\n  cursor: pointer;\n}\n\n@keyframes pulse-eye {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.75);\n  }\n\n  70% {\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n  }\n\n  100% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse-button {\n  0% {\n    transform: scale(0.9);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(0.9);\n  }\n}\n", "",{"version":3,"sources":["webpack://src/components/HomePage/HomePageNewDesign.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ;;;;GAIC;EACD,kBAAkB;EAClB,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,8BAA8B;EAC9B,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,SAAO;EACP,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,0CAA0C;EAC1C,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,4BAA4B;EAC5B,6CAA6C;EAC7C,8BAA8B;EAC9B,eAAe;AACjB;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE;IACE,uCAAuC;EACzC;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":[".home__page__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  perspective: 1000px;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.home__page__card__container {\n  width: 50vw;\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home__page__card {\n  /* width: 50vw; */\n  border: solid 4px;\n  background-color: white;\n  margin-top: 8em;\n  margin-bottom: 8em;\n  transform-style: preserve-3d;\n  border-radius: 15px;\n  padding: 1rem 1rem;\n  box-shadow: 0px 0px 20px #838383;\n  transition: all 0.2s ease-out;\n}\n\n.home__page__card__header {\n  display: flex;\n}\n\n.home__page__card__headline {\n  min-height: 10vh;\n  margin-left: 2em;\n  transition: all 0.9s ease-out;\n}\n\n.home__page__card__logo {\n  min-height: 10vh;\n  display: flex;\n}\n\n.home__page__card__logo img {\n  width: 7rem;\n  z-index: 2;\n  transition: all 0.9s ease-out;\n}\n\n.home__page__card__circle {\n  width: 7rem;\n  height: 7rem;\n  background: linear-gradient(\n    to right,\n    rgba(245, 70, 66, 0.75),\n    rgba(8, 83, 156, 0.75)\n  );\n  border-radius: 50%;\n  z-index: 1;\n  animation: pulse-eye 2s infinite;\n}\n\n.home__page__card__info h3 {\n  font-size: 1.3rem;\n  padding: 2rem 0rem;\n  margin-left: 1em;\n  margin-right: 1em;\n  text-align: justify;\n  color: #585858;\n  font-weight: lighter;\n  transition: all 0.75s ease-out;\n}\n\n/* MENU BUTTONS */\n.home__page__card__sizes {\n  display: flex;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n  border: solid 3px;\n  justify-content: space-between;\n  transition: all 0.75s ease-out;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.home__page__card__sizes button {\n  padding: 0.5rem 1.7rem;\n  margin: 1em;\n  flex: 1;\n  text-transform: uppercase;\n  font-size: 1em;\n  background: none;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: 'Share Tech Mono', sans-serif;\n  font-weight: bold;\n  color: black;\n  transition: all 1s ease-in-out;\n  white-space: nowrap;\n}\n\n.home__page__card__sizes button:hover {\n  text-decoration-line: underline;\n  text-decoration-style: solid;\n  text-decoration-color: rgba(8, 83, 156, 0.75);\n  text-decoration-thickness: 7px;\n  cursor: pointer;\n}\n\n/* ADD NEW CARD/DECK BUTTON */\n.home__page__card__blobs__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.home__page__card__blob {\n  margin: 1em;\n  height: 60px;\n  width: 60px;\n  transform: scale(1);\n  animation: pulse-button 2s infinite;\n  cursor: pointer;\n}\n\n@keyframes pulse-eye {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.75);\n  }\n\n  70% {\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n  }\n\n  100% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse-button {\n  0% {\n    transform: scale(0.9);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(0.9);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Login/Login.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Login/Login.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login__card {\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.login__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.login__form__label {\n  padding-bottom: 10px;\n}\n\n.login__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.login__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.login__form__button__container {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.login__form__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.login__form__link__container {\n  padding-top: 10px;\n}\n\na {\n  color: black;\n}\n\n.login__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.login__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://src/components/Login/Login.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;EAC1C,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":[".login__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login__card {\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.login__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.login__form__label {\n  padding-bottom: 10px;\n}\n\n.login__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.login__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.login__form__button__container {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.login__form__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.login__form__link__container {\n  padding-top: 10px;\n}\n\na {\n  color: black;\n}\n\n.login__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.login__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Nav/Nav.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Nav/Nav.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 10vh;\n}\n\n.features {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n  justify-content: center;\n}\n\n.features li {\n  margin-right: 30px;\n}\n\n.nav__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: Transparent;\n  border-style: none;\n  outline: transparent;\n}\n\n.nav__button:hover { /* Safari/Chrome */\n  filter: invert(100%);\n  cursor: pointer;\n}\n\n.nav__avatar {\n  width: 50px;\n  height: 50px;\n  margin-top: 10px;\n  border: 2px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 100px;\n}\n", "",{"version":3,"sources":["webpack://src/components/Nav/Nav.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,6BAA6B;EAC7B,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,qBACgC,kBAAkB;EAChD,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB","sourcesContent":[".navbar {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 10vh;\n}\n\n.features {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n  justify-content: center;\n}\n\n.features li {\n  margin-right: 30px;\n}\n\n.nav__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: Transparent;\n  border-style: none;\n  outline: transparent;\n}\n\n.nav__button:hover {\n  -webkit-filter: invert(100%); /* Safari/Chrome */\n  filter: invert(100%);\n  cursor: pointer;\n}\n\n.nav__avatar {\n  width: 50px;\n  height: 50px;\n  margin-top: 10px;\n  border: 2px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NavForFriendsPage/NavForFriendsPage.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/NavForFriendsPage/NavForFriendsPage.css ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "label {\n  display: block;\n}\n\ninput,\nlabel {\n  margin: 0.4rem 0;\n}\n", "",{"version":3,"sources":["webpack://src/components/NavForFriendsPage/NavForFriendsPage.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB","sourcesContent":["label {\n  display: block;\n}\n\ninput,\nlabel {\n  margin: 0.4rem 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewDeck/NewDeck.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/NewDeck/NewDeck.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".new__deck__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.new__deck__card {\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.new__deck__name__input {\n  margin-bottom: 20px;\n}\n\n.new__deck__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.new__deck__form__label {\n  padding-bottom: 10px;\n}\n\n.new__deck__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.new__deck__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.new__deck__language__input__left {\n  flex: 1 1;\n  margin-right: 2px;\n}\n\n.new__deck__language__input__right {\n  flex: 1 1;\n  margin-left: 2px;\n}\n\n.new__deck__language__inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.new__deck__button__container {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.save__deck__button {\n  position: absolute;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.add__word__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.new__deck__words {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.new__deck__word {\n  padding: 3px;\n  border-radius: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  border: 1px black solid;\n  background-color: lightgray;\n}\n\nspan {\n  font-size: 0.9em;\n}\n\n.delete__button {\n  border: 0px;\n  background-color: lightgray;\n  font-size: 0.7em;\n}\n", "",{"version":3,"sources":["webpack://src/components/NewDeck/NewDeck.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,SAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,SAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,0CAA0C;EAC1C,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;AAClB","sourcesContent":[".new__deck__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.new__deck__card {\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.new__deck__name__input {\n  margin-bottom: 20px;\n}\n\n.new__deck__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.new__deck__form__label {\n  padding-bottom: 10px;\n}\n\n.new__deck__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.new__deck__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.new__deck__language__input__left {\n  flex: 1;\n  margin-right: 2px;\n}\n\n.new__deck__language__input__right {\n  flex: 1;\n  margin-left: 2px;\n}\n\n.new__deck__language__inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.new__deck__button__container {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.save__deck__button {\n  position: absolute;\n  left: 0;\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.add__word__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.new__deck__words {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.new__deck__word {\n  padding: 3px;\n  border-radius: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  border: 1px black solid;\n  background-color: lightgray;\n}\n\nspan {\n  font-size: 0.9em;\n}\n\n.delete__button {\n  border: 0px;\n  background-color: lightgray;\n  font-size: 0.7em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotFound/NotFound.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/NotFound/NotFound.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container__404 {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n", "",{"version":3,"sources":["webpack://src/components/NotFound/NotFound.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E","sourcesContent":[".container__404 {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/StartTraining/StartTraining.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/StartTraining/StartTraining.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login__card {\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.login__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.login__form__label {\n  padding-bottom: 10px;\n}\n\n.login__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.login__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.login__form__button__container {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.login__form__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.login__form__link__container {\n  padding-top: 10px;\n}\n\na {\n  color: black;\n}\n\n.login__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.login__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://src/components/StartTraining/StartTraining.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;EAC1C,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":[".login__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login__card {\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.login__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.login__form__label {\n  padding-bottom: 10px;\n}\n\n.login__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.login__form__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  width: 100%;\n  padding: 10px;\n}\n\n.login__form__button__container {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.login__form__button {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n\n.login__form__link__container {\n  padding-top: 10px;\n}\n\na {\n  color: black;\n}\n\n.login__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.login__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/TrainingPage/TrainingPage.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/TrainingPage/TrainingPage.css ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper__training__page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299;\n  background: linear-gradient(to bottom, #b0dab9, #dad299);\n}\n\n.training__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.training__container::-webkit-scrollbar {\n  display: none;\n}\n\n.training__card__container {\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n}\n\n.training__card__outer {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  scroll-snap-align: start;\n}\n\n.training__card {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 70vw;\n  height: 70vh;\n  min-height: 400px;\n  perspective: 1000px;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 80px #838383;\n  }\n  25% {\n    box-shadow: 0px 0px 20px #838383;\n  }\n  50% {\n    box-shadow: 0px 0px 20px #838383;\n  }\n  100% {\n    box-shadow: 0px 0px 80px #838383;\n  }\n}\n\n.training__card__inner {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1.5s;\n  transform-style: preserve-3d;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  animation: pulse 10s infinite;\n  transform: rotateY(0);\n}\n\n.training__card__inner:hover {\n  cursor: pointer;\n}\n\n.training__card__is__flipped .training__card__inner {\n  transform: rotateY(-180deg);\n  transition: transform 1.5s;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n}\n\n.training__card__is__flipped .flag__front {\n  transform: rotateY(-180deg);\n  transition: transform 1.5s;\n}\n\n.training__card__front,\n.training__card__back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-color: white;\n}\n\n.training__card__front {\n  border-radius: 15px;\n  background-color: white;\n}\n\n.training__card__back {\n  border-radius: 15px;\n  background-color: white;\n  transform: rotateY(-180deg);\n}\n\n.training__card__text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 5em;\n}\n\n.carousel__button {\n  background-color: transparent;\n  border: none;\n  outline: transparent;\n}\n\n.carousel__button:hover { /* Safari/Chrome */\n  filter: invert(100%);\n  cursor: pointer;\n}\n\n.arrow {\n  height: 20px;\n  border-radius: 50%;\n  padding: 0.7rem;\n  margin: 1rem 5rem 1rem 5rem;\n}\n\n.left__arrow {\n  transform: rotate(180deg);\n}\n\n.right__arrow {\n  transform: rotate(0deg);\n}\n\n.progress__container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n}\n\nprogress[value] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 550px;\n  height: 10px;\n}\n\nprogress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 2px;\n}\n\nprogress[value]::-webkit-progress-value {\n  background-color: black;\n  border-radius: 2px;\n  background-size: 35px 20px, 100% 100%, 100% 100%;\n}\n\n.flag {\n  position: absolute;\n  padding-right: 10px;\n  width: 70px;\n  bottom: 0;\n  right: 0;\n}\n\n.speaker__container {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.speaker {\n  margin-top: 3px;\n  width: 40px;\n  height: 40px;\n}\n\n.speaker:hover {\n  cursor: pointer;\n}\n\n.training__card__input__outer {\n  display: flex;\n  align-items: center;\n  width: 800px;\n  height: 200px;\n}\n\n.training__card__input__container {\n  position: relative;\n  margin-top: 80px;\n  display: flex;\n  background-color: #fff;\n  width: 100%;\n  height: 50px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  animation: pulse 10s infinite;\n  overflow: hidden;\n}\n\n.training__card__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 2em;\n  width: 100%;\n  padding: 10px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  text-align: center;\n}\n\n.tick__image {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n", "",{"version":3,"sources":["webpack://src/components/TrainingPage/TrainingPage.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,0CAA0C;EAC1C,mBAAmB;EAEnB,wDAAwD;AAC1D;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE;IACE,gCAAgC;EAClC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,gCAAgC;EAClC;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,4BAA4B;EAC5B,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;AACtB;;AAEA,0BACgC,kBAAkB;EAChD,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,wBAAwB;EAExB,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,cAAc;EACd,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV","sourcesContent":[".wrapper__training__page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299;\n  background: -webkit-linear-gradient(to bottom, #b0dab9, #dad299);\n  background: linear-gradient(to bottom, #b0dab9, #dad299);\n}\n\n.training__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.training__container::-webkit-scrollbar {\n  display: none;\n}\n\n.training__card__container {\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n}\n\n.training__card__outer {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  scroll-snap-align: start;\n}\n\n.training__card {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 70vw;\n  height: 70vh;\n  min-height: 400px;\n  perspective: 1000px;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 80px #838383;\n  }\n  25% {\n    box-shadow: 0px 0px 20px #838383;\n  }\n  50% {\n    box-shadow: 0px 0px 20px #838383;\n  }\n  100% {\n    box-shadow: 0px 0px 80px #838383;\n  }\n}\n\n.training__card__inner {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1.5s;\n  transform-style: preserve-3d;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  animation: pulse 10s infinite;\n  transform: rotateY(0);\n}\n\n.training__card__inner:hover {\n  cursor: pointer;\n}\n\n.training__card__is__flipped .training__card__inner {\n  transform: rotateY(-180deg);\n  transition: transform 1.5s;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n}\n\n.training__card__is__flipped .flag__front {\n  transform: rotateY(-180deg);\n  transition: transform 1.5s;\n}\n\n.training__card__front,\n.training__card__back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-color: white;\n}\n\n.training__card__front {\n  border-radius: 15px;\n  background-color: white;\n}\n\n.training__card__back {\n  border-radius: 15px;\n  background-color: white;\n  transform: rotateY(-180deg);\n}\n\n.training__card__text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 5em;\n}\n\n.carousel__button {\n  background-color: transparent;\n  border: none;\n  outline: transparent;\n}\n\n.carousel__button:hover {\n  -webkit-filter: invert(100%); /* Safari/Chrome */\n  filter: invert(100%);\n  cursor: pointer;\n}\n\n.arrow {\n  height: 20px;\n  border-radius: 50%;\n  padding: 0.7rem;\n  margin: 1rem 5rem 1rem 5rem;\n}\n\n.left__arrow {\n  transform: rotate(180deg);\n}\n\n.right__arrow {\n  transform: rotate(0deg);\n}\n\n.progress__container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n}\n\nprogress[value] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 550px;\n  height: 10px;\n}\n\nprogress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 2px;\n}\n\nprogress[value]::-webkit-progress-value {\n  background-color: black;\n  border-radius: 2px;\n  background-size: 35px 20px, 100% 100%, 100% 100%;\n}\n\n.flag {\n  position: absolute;\n  padding-right: 10px;\n  width: 70px;\n  bottom: 0;\n  right: 0;\n}\n\n.speaker__container {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.speaker {\n  margin-top: 3px;\n  width: 40px;\n  height: 40px;\n}\n\n.speaker:hover {\n  cursor: pointer;\n}\n\n.training__card__input__outer {\n  display: flex;\n  align-items: center;\n  width: 800px;\n  height: 200px;\n}\n\n.training__card__input__container {\n  position: relative;\n  margin-top: 80px;\n  display: flex;\n  background-color: #fff;\n  width: 100%;\n  height: 50px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  animation: pulse 10s infinite;\n  overflow: hidden;\n}\n\n.training__card__input {\n  font-family: 'Share Tech Mono', sans-serif;\n  font-size: 2em;\n  width: 100%;\n  padding: 10px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  text-align: center;\n}\n\n.tick__image {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UpdateProfilePage/UpdateProfilePage.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UpdateProfilePage/UpdateProfilePage.css ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settings__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.settings__icon {\n  height: 32px;\n  margin-right: 1rem;\n}\n\n.settings__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.settings__card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 60vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.settings__img__preview {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 2rem;\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  overflow: hidden;\n}\n\n.settings__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.settings__form__container {\n  margin-top: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.custom__file__upload {\n  border: none;\n  background-color: black;\n  color: white;\n  width: 95px;\n  text-align: center;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  position: absolute;\n  margin-top: 92px;\n  margin-left: 0px;\n}\n\n.settings__form__label {\n  padding-bottom: 10px;\n}\n\n.settings__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.settings__form__input {\n  font-family: 'ShareTechMono-Regular', sans-serif;\n  font-size: 1.5em;\n  width: 100%;\n}\n\n.settings__form__button__container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n\n.settings__form__button {\n  font-family: 'ShareTechMono-Regular', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n.settings__form__button img {\n  margin-left: 5px;\n  width: 15px;\n}\n\n.settings__form__link__container {\n  padding-top: 10px;\n  color: hsl(219deg 64% 57%);\n  font-weight: 550;\n}\n\n.settings__form__attribute {\n  font-size: 1.5em;\n}\n\n.settings__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.settings__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n\n.container__image__profile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://src/components/UpdateProfilePage/UpdateProfilePage.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;EAC1C,mBAAmB,EAAE,8BAA8B,EAKhD,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;AAC1E;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,gDAAgD;EAChD,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,gDAAgD;EAChD,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":[".settings__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.settings__icon {\n  height: 32px;\n  margin-right: 1rem;\n}\n\n.settings__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Share Tech Mono', sans-serif;\n  background: #dad299; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #b0dab9,\n    #dad299\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.settings__card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 60vw;\n  min-width: 350px;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  border-radius: 15px;\n  box-shadow: 0px 0px 20px #838383;\n  padding: 40px;\n  background-color: white;\n}\n\n.settings__img__preview {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 2rem;\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  border: 4px;\n  border-color: black;\n  border-style: solid;\n  overflow: hidden;\n}\n\n.settings__heading {\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n\n.settings__form__container {\n  margin-top: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.custom__file__upload {\n  border: none;\n  background-color: black;\n  color: white;\n  width: 95px;\n  text-align: center;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  position: absolute;\n  margin-top: 92px;\n  margin-left: 0px;\n}\n\n.settings__form__label {\n  padding-bottom: 10px;\n}\n\n.settings__form__input__container {\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.settings__form__input {\n  font-family: 'ShareTechMono-Regular', sans-serif;\n  font-size: 1.5em;\n  width: 100%;\n}\n\n.settings__form__button__container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n\n.settings__form__button {\n  font-family: 'ShareTechMono-Regular', sans-serif;\n  font-size: 1.2em;\n  background-color: white;\n  border-style: none;\n}\n.settings__form__button img {\n  margin-left: 5px;\n  width: 15px;\n}\n\n.settings__form__link__container {\n  padding-top: 10px;\n  color: hsl(219deg 64% 57%);\n  font-weight: 550;\n}\n\n.settings__form__attribute {\n  font-size: 1.5em;\n}\n\n.settings__alert {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.settings__alert__warning {\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n}\n\n.container__image__profile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/ApiService.tsx":
/*!****************************!*\
  !*** ./src/ApiService.tsx ***!
  \****************************/
/*! exports provided: getAllUser, createNewUser, getUserByUUId, getUserById, getUserByEmail, deleteUser, updateUser, getAllDecks, createNewDeck, getAllDecksFromUser, updateDeck, deleteDeck, getAllCards, getAllCardsFromDeck, createNewCard, deleteCard, updateCard, createDeckWithCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUser", function() { return getAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewUser", function() { return createNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByUUId", function() { return getUserByUUId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByEmail", function() { return getUserByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDecks", function() { return getAllDecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewDeck", function() { return createNewDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDecksFromUser", function() { return getAllDecksFromUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeck", function() { return updateDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDeck", function() { return deleteDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCards", function() { return getAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCardsFromDeck", function() { return getAllCardsFromDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewCard", function() { return createNewCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCard", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCard", function() { return updateCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeckWithCards", function() { return createDeckWithCards; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const url = 'http://localhost:3001'; // INTERFACES

// GET ALL USERS FROM DB
async function getAllUser() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/user`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // CREATE A NEW USER

async function createNewUser(options) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${url}/user`, options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
} // GET ONE USER FROM DB BY UUID

async function getUserByUUId(UUId) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/user/${UUId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // GET ONE USER FROM DB BY ID

async function getUserById(id) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/user/userId/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // GET ONE USER FROM DB BY EMAIL 

async function getUserByEmail(email) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/user/userEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // DELETE A USER FROM DB

async function deleteUser(id) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${url}/user/${id}`).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // UPDATE USER INFORMATION

async function updateUser(id, options) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${url}/user/${id}`, options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // GET ALL DECKS FROM DB

async function getAllDecks() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/deck`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // CREATE A NEW DECK

async function createNewDeck(options) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${url}/deck`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // GET ALL DECKS FROM DB WHICH BELONG TO A SPECIFIC USER

async function getAllDecksFromUser(id) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/deck/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // UPDATE DECK INFORMATION

async function updateDeck(id, options) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${url}/deck/${id}`, options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // DELETE DECK FROM DB

async function deleteDeck(id) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${url}/deck/${id}`).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // GET ALL CARDS FROM DB

async function getAllCards() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/card`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} // GET ALL CARDS FROM DB WHICH BELONG TO A SPECIFIC DECK

async function getAllCardsFromDeck(id) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}/card/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
} // CREATE A NEW CARD

async function createNewCard(options) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${url}/card`, options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // DELETE DECK FROM DB

async function deleteCard(id) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${url}/card/${id}`).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
} // UPDATE CARD

async function updateCard(id, options) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${url}/card/${id}`, options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
}
async function createDeckWithCards(id, name, lang1, lang2, words) {
  const deck = await createNewDeck({
    id: 0,
    userId: id,
    deckName: name,
    details: '',
    private: true
  });
  const deckId = deck.id;

  if (words) {
    words.forEach(word => {
      createNewCard({
        id: 0,
        deckId: deckId,
        front: word.lang1,
        back: word.lang2,
        languageFront: lang1,
        languageBack: lang2,
        stage: 1
      });
    });
  }
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Signup_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Signup/Signup */ "./src/components/Signup/Signup.tsx");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login/Login */ "./src/components/Login/Login.tsx");
/* harmony import */ var _components_TrainingPage_TrainingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TrainingPage/TrainingPage */ "./src/components/TrainingPage/TrainingPage.tsx");
/* harmony import */ var _components_DeckManagement_DeckDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DeckManagement/DeckDashboard */ "./src/components/DeckManagement/DeckDashboard.tsx");
/* harmony import */ var _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HomePage/HomePage */ "./src/components/HomePage/HomePage.tsx");
/* harmony import */ var _components_FriendsPage_FriendsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FriendsPage/FriendsPage */ "./src/components/FriendsPage/FriendsPage.tsx");
/* harmony import */ var _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NotFound/NotFound */ "./src/components/NotFound/NotFound.tsx");
/* harmony import */ var _components_UpdateProfilePage_UpdateProfilePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/UpdateProfilePage/UpdateProfilePage */ "./src/components/UpdateProfilePage/UpdateProfilePage.tsx");
/* harmony import */ var _components_NewDeck_NewDeck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/NewDeck/NewDeck */ "./src/components/NewDeck/NewDeck.tsx");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrivateRoute */ "./src/PrivateRoute.tsx");
/* harmony import */ var _components_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ForgotPassword/ForgotPassword */ "./src/components/ForgotPassword/ForgotPassword.tsx");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_DeckManagement_UpdateDeck__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/DeckManagement/UpdateDeck */ "./src/components/DeckManagement/UpdateDeck.tsx");
/* harmony import */ var _components_Success_Success__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Success/Success */ "./src/components/Success/Success.tsx");
/* harmony import */ var _components_StartTraining_StartTraining__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/StartTraining/StartTraining */ "./src/components/StartTraining/StartTraining.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/App.tsx";



















function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__["AuthProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/",
          component: _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/starttraining",
          component: _components_StartTraining_StartTraining__WEBPACK_IMPORTED_MODULE_16__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/training",
          component: _components_TrainingPage_TrainingPage__WEBPACK_IMPORTED_MODULE_3__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/friends",
          component: _components_FriendsPage_FriendsPage__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/deckmanagement",
          component: _components_DeckManagement_DeckDashboard__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/update-profile",
          component: _components_UpdateProfilePage_UpdateProfilePage__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/update-deck",
          component: _components_DeckManagement_UpdateDeck__WEBPACK_IMPORTED_MODULE_14__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          exact: true,
          path: "/newdeck",
          component: _components_NewDeck_NewDeck__WEBPACK_IMPORTED_MODULE_9__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
          path: "/success",
          component: _components_Success_Success__WEBPACK_IMPORTED_MODULE_15__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
          path: "/login",
          component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
          path: "/signup",
          component: _components_Signup_Signup__WEBPACK_IMPORTED_MODULE_1__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
          path: "/forgot-password",
          component: _components_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_11__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
          component: _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/PrivateRoute.tsx":
/*!******************************!*\
  !*** ./src/PrivateRoute.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/PrivateRoute.tsx",
    _s = __webpack_require__.$Refresh$.signature();





function PrivateRoute({
  component: Component,
  ...rest
}) {
  _s();

  const {
    currentUser
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { ...rest,
    render: props => {
      return currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, { ...props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_s(PrivateRoute, "byfRDkJ+t3MKhIwXgwbXYFaZtD0=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"]];
});

_c = PrivateRoute;

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivateRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_RootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/RootReducer */ "./src/reducers/RootReducer.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_RootReducer__WEBPACK_IMPORTED_MODULE_1__["RootReducer"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
_c = Store;
/* harmony default export */ __webpack_exports__["default"] = (Store);

var _c;

__webpack_require__.$Refresh$.register(_c, "Store");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/CardActionTypes.ts":
/*!****************************************!*\
  !*** ./src/actions/CardActionTypes.ts ***!
  \****************************************/
/*! exports provided: CARD_LOADING, CARD_FAIL, CARD_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_LOADING", function() { return CARD_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_FAIL", function() { return CARD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_SUCCESS", function() { return CARD_SUCCESS; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const CARD_LOADING = "CARD_LOADING";
const CARD_FAIL = "CARD_FAIL";
const CARD_SUCCESS = "CARD_SUCCESS";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/CardActions.ts":
/*!************************************!*\
  !*** ./src/actions/CardActions.ts ***!
  \************************************/
/*! exports provided: GetAllCards, CreateNewCard, GetCardByDeckId, DeleteCard, UpdateCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCards", function() { return GetAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCard", function() { return CreateNewCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardByDeckId", function() { return GetCardByDeckId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCard", function() { return DeleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCard", function() { return UpdateCard; });
/* harmony import */ var _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardActionTypes */ "./src/actions/CardActionTypes.ts");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiService */ "./src/ApiService.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const GetAllCards = () => async dispatch => {
  try {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllCards"]();
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_FAIL"]
    });
  }
};
const CreateNewCard = options => async dispatch => {
  try {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["createNewCard"](options);
  } catch (error) {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_FAIL"]
    });
  }
};
const GetCardByDeckId = id => async dispatch => {
  try {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllCardsFromDeck"](id);
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_FAIL"]
    });
  }
};
const DeleteCard = id => async dispatch => {
  try {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["deleteCard"](id);
  } catch (error) {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_FAIL"]
    });
  }
};
const UpdateCard = (id, options) => async dispatch => {
  try {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["updateCard"](id, options);
  } catch (error) {
    dispatch({
      type: _CardActionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_FAIL"]
    });
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/DeckActionTypes.ts":
/*!****************************************!*\
  !*** ./src/actions/DeckActionTypes.ts ***!
  \****************************************/
/*! exports provided: DECK_LOADING, DECK_FAIL, DECK_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECK_LOADING", function() { return DECK_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECK_FAIL", function() { return DECK_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECK_SUCCESS", function() { return DECK_SUCCESS; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const DECK_LOADING = "DECK_LOADING";
const DECK_FAIL = "DECK_FAIL";
const DECK_SUCCESS = "DECK_SUCCESS";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/DeckActions.ts":
/*!************************************!*\
  !*** ./src/actions/DeckActions.ts ***!
  \************************************/
/*! exports provided: GetAllDecks, CreateDeck, GetDeckByUserId, DeleteDeck, UpdateDeck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllDecks", function() { return GetAllDecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDeck", function() { return CreateDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDeckByUserId", function() { return GetDeckByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDeck", function() { return DeleteDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeck", function() { return UpdateDeck; });
/* harmony import */ var _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckActionTypes */ "./src/actions/DeckActionTypes.ts");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiService */ "./src/ApiService.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const GetAllDecks = () => async dispatch => {
  try {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllDecks"]();
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_FAIL"]
    });
  }
};
const CreateDeck = options => async dispatch => {
  try {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["createNewDeck"](options);
  } catch (error) {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_FAIL"]
    });
  }
};
const GetDeckByUserId = id => async dispatch => {
  try {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllDecksFromUser"](id);
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_FAIL"]
    });
  }
};
const DeleteDeck = id => async dispatch => {
  try {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_LOADING"]
    });
    await _ApiService__WEBPACK_IMPORTED_MODULE_1__["deleteDeck"](id);
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllDecks"]();
    let filteredDecks = res.filter(deck => deck.id !== id);
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_SUCCESS"],
      payload: filteredDecks
    });
  } catch (error) {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_FAIL"]
    });
  }
};
const UpdateDeck = (id, options) => async dispatch => {
  try {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["updateDeck"](id, options);
  } catch (error) {
    dispatch({
      type: _DeckActionTypes__WEBPACK_IMPORTED_MODULE_0__["DECK_FAIL"]
    });
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/UserActionTypes.ts":
/*!****************************************!*\
  !*** ./src/actions/UserActionTypes.ts ***!
  \****************************************/
/*! exports provided: USER_LOADING, USER_FAIL, USER_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADING", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FAIL", function() { return USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SUCCESS", function() { return USER_SUCCESS; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const USER_LOADING = "USER_LOADING";
const USER_FAIL = "USER_FAIL";
const USER_SUCCESS = "USER_SUCCESS";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/UserActions.ts":
/*!************************************!*\
  !*** ./src/actions/UserActions.ts ***!
  \************************************/
/*! exports provided: GetAllUsers, CreateUser, GetUserByUUId, GetUserById, DeleteUser, UpdateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllUsers", function() { return GetAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserByUUId", function() { return GetUserByUUId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return GetUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony import */ var _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserActionTypes */ "./src/actions/UserActionTypes.ts");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiService */ "./src/ApiService.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const GetAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getAllUser"]();
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};
const CreateUser = options => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["createNewUser"](options);
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};
const GetUserByUUId = UUId => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getUserByUUId"](UUId);
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};
const GetUserById = id => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    const res = await _ApiService__WEBPACK_IMPORTED_MODULE_1__["getUserById"](id);
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_SUCCESS"],
      payload: res
    });
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};
const DeleteUser = id => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["deleteUser"](id);
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};
const UpdateUser = (id, options) => async (dispatch) => {
  try {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
    });
    _ApiService__WEBPACK_IMPORTED_MODULE_1__["updateUser"](id, options);
  } catch (error) {
    dispatch({
      type: _UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]
    });
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DeckItem/DeckItem.css":
/*!**********************************************!*\
  !*** ./src/components/DeckItem/DeckItem.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckItem/DeckItem.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckItem/DeckItem.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckItem/DeckItem.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/DeckItem/DeckItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/DeckItem/DeckItem.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckItem; });
/* harmony import */ var _DeckItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckItem.css */ "./src/components/DeckItem/DeckItem.css");
/* harmony import */ var _DeckItem_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeckItem_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/DeckItem/DeckItem.tsx";
// import ButtonAdd from '../assets/btn-add.svg'



function DeckItem({
  deck,
  cards
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container__deck",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "deckName",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [" ", `${deck.deckName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "deckLength",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [" ", cards.filter(card => card.deckId === deck.id).length, " words"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
_c = DeckItem;

var _c;

__webpack_require__.$Refresh$.register(_c, "DeckItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DeckList/DeckList.tsx":
/*!**********************************************!*\
  !*** ./src/components/DeckList/DeckList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckList; });
/* harmony import */ var _DeckItem_DeckItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DeckItem/DeckItem */ "./src/components/DeckItem/DeckItem.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ApiService */ "./src/ApiService.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/DeckList/DeckList.tsx",
    _s = __webpack_require__.$Refresh$.signature();





function DeckList({
  selectedFriendID
}) {
  _s();

  const [decks, setDecks] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [cards, setCards] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _ApiService__WEBPACK_IMPORTED_MODULE_2__["getAllDecksFromUser"](selectedFriendID).then(decks => setDecks(decks));
  }, [selectedFriendID]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let promises = (decks || []).map(deck => {
      return _ApiService__WEBPACK_IMPORTED_MODULE_2__["getAllCardsFromDeck"](deck.id);
    });
    Promise.all(promises).then(resultCards => setCards(resultCards.flat()));
  }, [decks]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "DeckList",
      children: decks === null || decks === void 0 ? void 0 : decks.map(deck => {
        return cards && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_DeckItem_DeckItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
          deck: deck,
          cards: cards
        }, deck.id, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 38
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(DeckList, "Ilh0IMedATePcodPhGhTj65rfiY=");

_c = DeckList;

var _c;

__webpack_require__.$Refresh$.register(_c, "DeckList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DeckManagement/DeckDashboard.tsx":
/*!*********************************************************!*\
  !*** ./src/components/DeckManagement/DeckDashboard.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckManagement; });
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckManagement.css */ "./src/components/DeckManagement/DeckManagement.css");
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_DeckActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/DeckActions */ "./src/actions/DeckActions.ts");
/* harmony import */ var _actions_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/CardActions */ "./src/actions/CardActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DeckItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeckItem */ "./src/components/DeckManagement/DeckItem.tsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/DeckManagement/DeckDashboard.tsx",
    _s = __webpack_require__.$Refresh$.signature();










function DeckManagement() {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // const userState = useSelector((state: RootStore) => state.user);

  const deckState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.deck); // const cardState = useSelector((state: RootStore) => state.card);

  const [decks, setDecks] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    dispatch(_actions_DeckActions__WEBPACK_IMPORTED_MODULE_2__["GetAllDecks"]());
    dispatch(_actions_CardActions__WEBPACK_IMPORTED_MODULE_3__["GetAllCards"]());
    dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["GetAllUsers"]());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    setDecks(deckState.decks);
  }, [deckState.decks]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "deck__management__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "App",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "deck__list__container",
        children: decks ? decks.map((deck, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_DeckItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
              deck: deck
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 38
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(DeckManagement, "KW+dMV12TgsbJSlOeSQn7iYKsVg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = DeckManagement;

var _c;

__webpack_require__.$Refresh$.register(_c, "DeckManagement");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DeckManagement/DeckItem.tsx":
/*!****************************************************!*\
  !*** ./src/components/DeckManagement/DeckItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckItem; });
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckManagement.css */ "./src/components/DeckManagement/DeckManagement.css");
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_DeckActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/DeckActions */ "./src/actions/DeckActions.ts");
/* harmony import */ var _actions_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/CardActions */ "./src/actions/CardActions.ts");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ApiService */ "./src/ApiService.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/DeckManagement/DeckItem.tsx",
    _s = __webpack_require__.$Refresh$.signature();









function DeckItem({
  deck
}) {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const cardState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.card);
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [addNewCard, setAddNewCard] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [firstLanguage, setFirstLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [secondLanguage, setSecondLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _ApiService__WEBPACK_IMPORTED_MODULE_6__["getAllUser"]().then(data => setUsers(data));
  }, []);

  function deleteDeckByClick(id) {
    dispatch(_actions_DeckActions__WEBPACK_IMPORTED_MODULE_4__["DeleteDeck"](id));
  }

  function countCardsOfDeck(id) {
    const cardsofDeck = cardState.cards.filter(card => card.deckId === id);
    return cardsofDeck.length;
  }

  function changeStateAddButton() {
    setAddNewCard(!addNewCard);
  }

  function updateFirstLanguage(event) {
    setFirstLanguage(event.target.value);
  }

  function updateSecondLanguage(event) {
    setSecondLanguage(event.target.value);
  }

  function sendNewCardToDB() {
    dispatch(_actions_CardActions__WEBPACK_IMPORTED_MODULE_5__["CreateNewCard"]({
      deckId: deck.id,
      front: firstLanguage,
      back: secondLanguage,
      languageFront: "test",
      languageBack: "test",
      stage: 0
    }));
    setFirstLanguage("");
    setSecondLanguage("");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: `deck__item`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "deck__delete__button",
        onClick: () => deleteDeckByClick(deck.id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          src: "/assets/binLogo.svg",
          alt: "add new card logo",
          className: "delete__button__logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "deck__name",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "deck__name__title",
          children: deck.deckName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 37
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "deck__username",
        children: [users ? userState.user.filter(user => user.id === deck.userId)[0].firstName : null, "'s Deck"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "deck__number__of__cards",
        children: ["Number of cards: ", countCardsOfDeck(deck.id)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "update__deck__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "deck__updated",
          children: "update deck"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: {
            pathname: "/update-deck",
            state: [{
              deckId: deck.id
            }, {
              deckName: deck.deckName
            }] // your data array of objects

          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            src: "/assets/updateLogo.svg",
            alt: "update deck",
            className: "deck__update__logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "deck__add__new__card",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          src: "/assets/plusLogo.svg",
          alt: "add new card logo",
          className: "home__page__card__blob deck__add__new__card__logo",
          onClick: () => setAddNewCard(!addNewCard)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "start__training__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "deck__start__training",
          children: "Start Training"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          src: "/assets/playLogo.svg",
          alt: "start Training",
          className: "deck__start__training__logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), addNewCard ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "card__popup__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "add__word__title",
          children: ["add new card to deck ", deck.deckName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "add__word__input__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "text",
              className: "add__word__input__field",
              onChange: updateFirstLanguage,
              value: firstLanguage,
              placeholder: "type in word for front side ..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "text",
              className: "add__word__input__field",
              onChange: updateSecondLanguage,
              value: secondLanguage,
              placeholder: "type in word for back side ..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "add__word__add__button",
          onClick: () => sendNewCardToDB(),
          children: "add word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "add__word__close__button",
          onClick: () => changeStateAddButton(),
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(DeckItem, "xCqNJ6YKgXblE9BRWSuvQKAgJY4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = DeckItem;

var _c;

__webpack_require__.$Refresh$.register(_c, "DeckItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DeckManagement/DeckManagement.css":
/*!**********************************************************!*\
  !*** ./src/components/DeckManagement/DeckManagement.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckManagement.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckManagement/DeckManagement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckManagement.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckManagement/DeckManagement.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeckManagement.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DeckManagement/DeckManagement.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/DeckManagement/UpdateDeck.tsx":
/*!******************************************************!*\
  !*** ./src/components/DeckManagement/UpdateDeck.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDeck; });
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckManagement.css */ "./src/components/DeckManagement/DeckManagement.css");
/* harmony import */ var _DeckManagement_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeckManagement_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ApiService */ "./src/ApiService.tsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/CardActions */ "./src/actions/CardActions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/DeckManagement/UpdateDeck.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function UpdateDeck(props) {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [cards, setCards] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [updateWord, setUpdateWord] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const [front, setFront] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [back, setBack] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [firstLanguage, setFirstLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [secondLanguage, setSecondLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _ApiService__WEBPACK_IMPORTED_MODULE_2__["getAllCardsFromDeck"](props.location.state[0].deckId).then(data => setCards(data));
  }, [cards]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    cards.map(card => {
      return setUpdateWord(prev => ({ ...prev,
        [card.id]: false
      }));
    });
  }, []);

  function updatedFront(event) {
    setFront(event.target.value);
  }

  function updatedBack(event) {
    setBack(event.target.value);
  }

  function updateButton(card) {
    setUpdateWord(prev => ({ ...prev,
      [card.id]: true
    }));
  }

  function sendCardToDb(card) {
    _ApiService__WEBPACK_IMPORTED_MODULE_2__["updateCard"](card.id, {
      id: card.id,
      deckId: card.deckId,
      front: front,
      back: back,
      languageFront: card.languageFront,
      languageBack: card.languageBack,
      stage: card.stage
    });
    setUpdateWord(!updateWord);
  }

  function updateFirstLanguage(event) {
    setFirstLanguage(event.target.value);
  }

  function updateSecondLanguage(event) {
    setSecondLanguage(event.target.value);
  }

  function sendNewCardToDB() {
    dispatch(_actions_CardActions__WEBPACK_IMPORTED_MODULE_5__["CreateNewCard"]({
      deckId: props.location.state[0].deckId,
      front: firstLanguage,
      back: secondLanguage,
      languageFront: "test",
      languageBack: "test",
      stage: 0
    }));
    setFirstLanguage("");
    setSecondLanguage("");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "deck__management__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "update__deck__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "card__list",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "card__list__title",
          children: props.location.state[1].deckName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), cards ? cards.map((card, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: !updateWord[card.id] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "card__list__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "card__word__item",
                children: [card.front, " - ", card.back]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                  src: "/assets/edit.svg",
                  alt: "edit card",
                  className: "edit__card__logo",
                  onClick: () => updateButton(card)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                  src: "/assets/binLogo.svg",
                  alt: "edit card",
                  className: "delte__card__logo",
                  onClick: () => _ApiService__WEBPACK_IMPORTED_MODULE_2__["deleteCard"](card.id)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 41
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
                type: "text",
                placeholder: card.front,
                onChange: updatedFront,
                className: "input__deckmanagement__card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
                type: "text",
                placeholder: card.back,
                onChange: updatedBack,
                className: "input__deckmanagement__card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
                onClick: () => sendCardToDb(card),
                className: "input__deckmanagement__button",
                children: "update card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 19
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this);
        }) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "add__word__container__update__deck",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "text",
              className: "add__word__input__field__update__deck",
              onChange: updateFirstLanguage,
              value: firstLanguage,
              placeholder: "front side ..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "text",
              className: "add__word__input__field__update__deck",
              onChange: updateSecondLanguage,
              value: secondLanguage,
              placeholder: "back side ..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "add__word__button__update__deck",
            onClick: () => sendNewCardToDB(),
            children: "add word"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(UpdateDeck, "0OUjGbP+7YxNZv00+RNrrIZNal8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = UpdateDeck;

var _c;

__webpack_require__.$Refresh$.register(_c, "UpdateDeck");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ForgotPassword/ForgotPassword.tsx":
/*!**********************************************************!*\
  !*** ./src/components/ForgotPassword/ForgotPassword.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/ForgotPassword/ForgotPassword.tsx",
    _s = __webpack_require__.$Refresh$.signature();






function ForgotPassword() {
  _s();

  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const {
    resetPassword
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Account not found');
    }

    setLoading(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "login__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "login__card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "login__heading",
          children: "Password Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "login__alert__warning",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "login__alert",
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "login__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "login__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                type: "email",
                className: "login__form__input",
                ref: emailRef,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "login__form__button__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
              type: "submit",
              className: "login__form__button",
              disabled: loading,
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "login__form__link__container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/login",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "login__form__link__container",
          children: ["Need an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/signup",
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 30
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ForgotPassword, "MNZhHZ2r5+BwQZpdVgT8bTVLyYA=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"]];
});

_c = ForgotPassword;

var _c;

__webpack_require__.$Refresh$.register(_c, "ForgotPassword");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/FriendItem/FriendItem.css":
/*!**************************************************!*\
  !*** ./src/components/FriendItem/FriendItem.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendItem/FriendItem.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendItem/FriendItem.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendItem/FriendItem.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/FriendItem/FriendItem.tsx":
/*!**************************************************!*\
  !*** ./src/components/FriendItem/FriendItem.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FriendItem; });
/* harmony import */ var _FriendItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FriendItem.css */ "./src/components/FriendItem/FriendItem.css");
/* harmony import */ var _FriendItem_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FriendItem_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/FriendItem/FriendItem.tsx";
// import ButtonAdd from '../assets/btn-add.svg'



function FriendItem({
  friend,
  onClick,
  onDelete
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container__friend",
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        backgroundImage: `url(${friend.userImage || 'http://via.placeholder.com/150'})`,
        backgroundSize: 'cover'
      },
      className: "friends__img__preview"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "box__info__user",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [" ", `${friend.firstName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: ["  ", `${friend.lastName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: "/assets/delete.svg",
      className: "buttonRemove",
      alt: "delete button",
      onClick: event => {
        event.stopPropagation();
        onDelete();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
_c = FriendItem;

var _c;

__webpack_require__.$Refresh$.register(_c, "FriendItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/FriendsPage/FriendsPage.css":
/*!****************************************************!*\
  !*** ./src/components/FriendsPage/FriendsPage.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendsPage/FriendsPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendsPage/FriendsPage.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./FriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FriendsPage/FriendsPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/FriendsPage/FriendsPage.tsx":
/*!****************************************************!*\
  !*** ./src/components/FriendsPage/FriendsPage.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _FriendsPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FriendsPage.css */ "./src/components/FriendsPage/FriendsPage.css");
/* harmony import */ var _FriendsPage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FriendsPage_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavForFriendsPage_NavForFriendsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavForFriendsPage/NavForFriendsPage */ "./src/components/NavForFriendsPage/NavForFriendsPage.tsx");
/* harmony import */ var _FriendItem_FriendItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FriendItem/FriendItem */ "./src/components/FriendItem/FriendItem.tsx");
/* harmony import */ var _DeckList_DeckList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DeckList/DeckList */ "./src/components/DeckList/DeckList.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ApiService */ "./src/ApiService.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/FriendsPage/FriendsPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();










function FriendsPage() {
  _s();

  var _userState$user;

  const [selectedFriendID, setSelectedFriendID] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const [friends, setFriends] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const friendsIDS = (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.friends;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    const promises = (friendsIDS || []).map(friendsID => {
      return _ApiService__WEBPACK_IMPORTED_MODULE_6__["getUserByUUId"](friendsID);
    });
    Promise.all(promises).then(resultFriends => setFriends(resultFriends));
  }, [friendsIDS]);

  function removeFriend(idFriend) {
    if (userState.user) {
      var _userState$user2;

      const newFriends = friends.filter(friend => friend.id !== idFriend);
      setFriends(newFriends);

      if (selectedFriendID === idFriend) {
        setSelectedFriendID(null);
      }

      const newFriendsIDS = newFriends.map(newFriend => newFriend.userUID);
      _ApiService__WEBPACK_IMPORTED_MODULE_6__["updateUser"]((_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.id, {
        friends: newFriendsIDS
      });
    }
  }

  async function addFriendByEmail(email) {
    const friend = await _ApiService__WEBPACK_IMPORTED_MODULE_6__["getUserByEmail"](email);
    const newFriends = [...friends, friend];
    const newFriendsUIDS = newFriends.map(friend => friend.userUID);

    if (userState.user && friend) {
      var _userState$user3;

      setFriends(newFriends);
      _ApiService__WEBPACK_IMPORTED_MODULE_6__["updateUser"]((_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.id, {
        friends: newFriendsUIDS
      });
    } else {
      alert('user not found');
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "containerFriendsPage",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavForFriendsPage_NavForFriendsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onAddFriend: email => addFriendByEmail(email)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "container__two__main__columns",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "friends__column",
        children: friends.map(friend => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_FriendItem_FriendItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          friend: friend,
          onClick: () => setSelectedFriendID(friend.id),
          onDelete: () => removeFriend(friend.id)
        }, friend.id, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "friend__choosen__decks__column",
        children: selectedFriendID != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_DeckList_DeckList__WEBPACK_IMPORTED_MODULE_3__["default"], {
          selectedFriendID: selectedFriendID
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(FriendsPage, "UUmtTlfnyDf7yS45B6X/CRtdfXw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = FriendsPage;
/* harmony default export */ __webpack_exports__["default"] = (FriendsPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "FriendsPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HomePage/HomePage.tsx":
/*!**********************************************!*\
  !*** ./src/components/HomePage/HomePage.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _HomePageNewDesign_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePageNewDesign.css */ "./src/components/HomePage/HomePageNewDesign.css");
/* harmony import */ var _HomePageNewDesign_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HomePageNewDesign_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/HomePage/HomePage.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function HomePage() {
  _s();

  const [styleCard, setStyleCard] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [styleLogo, setStyleLogo] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [styleHeadline, setStyleHeadline] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [styleMenu, setStyleMenu] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  function mouseMovesOnCard(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    setStyleCard({
      transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });
    setStyleLogo({
      transform: 'translateZ(50px) rotateZ(-15deg)'
    });
    setStyleHeadline({
      transform: 'translateZ(60px)'
    });
    setStyleMenu({
      transform: 'translateZ(30px)'
    });
  }

  function mouseLeavesContainer() {
    setStyleCard({
      transform: 'rotateY(0deg) rotateX(0deg)'
    });
    setStyleLogo({
      transform: 'translateZ(0px) rotateZ(0deg)'
    });
    setStyleHeadline({
      transform: 'translateZ(0px)'
    });
    setStyleMenu({
      transform: 'translateZ(0px)'
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "home__page__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "home__page__card__container",
      onMouseLeave: () => mouseLeavesContainer(),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "home__page__card",
        style: styleCard,
        onMouseMove: e => mouseMovesOnCard(e),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "home__page__card__header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "home__page__card__logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "home__page__card__circle",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "/assets/sauron.svg",
                alt: "sauron can see everything",
                style: styleLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "home__page__card__headline",
            style: styleHeadline,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              style: styleHeadline,
              children: "Decks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
              children: "create your own flash cards"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "home__page__card__info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
            children: "FUTURE-READY FLASH CARD TRAINER - CREATE YOUR OWN DECKS AND CARDS - GET PRE-BUILT DECKS - CONNECT WITH YOUR FRIENDS AND START SHARING DECKS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "home__page__card__sizes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              to: "/friends",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                style: styleMenu,
                children: "friends"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              to: "/deckmanagement",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                style: styleMenu,
                children: "decks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
              style: styleMenu,
              children: "statistics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              to: "/starttraining",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                style: styleMenu,
                children: "start session"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "home__page__card__blobs__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
              title: "ADD NEW CARD TO DECK",
              placement: "right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
                to: "/newdeck",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  src: "/assets/add.svg",
                  alt: "add new card logo",
                  className: "home__page__card__blob"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(HomePage, "BqZR+gLMjQrRXk77KrkMZs89oWE=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

__webpack_require__.$Refresh$.register(_c, "HomePage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HomePage/HomePageNewDesign.css":
/*!*******************************************************!*\
  !*** ./src/components/HomePage/HomePageNewDesign.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./HomePageNewDesign.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePageNewDesign.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./HomePageNewDesign.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePageNewDesign.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./HomePageNewDesign.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePageNewDesign.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Login/Login.css":
/*!****************************************!*\
  !*** ./src/components/Login/Login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Login/Login.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Login/Login.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Login/Login.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Login/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.css */ "./src/components/Login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/Login/Login.tsx",
    _s = __webpack_require__.$Refresh$.signature();






function Login() {
  _s();

  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const {
    login
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/');
    } catch {
      setError('Invalid email/password');
      setLoading(false);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "login__container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "login__card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "login__heading",
        children: "Decks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "login__alert__warning",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "email",
              className: "login__form__input",
              ref: emailRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "password",
              className: "login__form__input",
              ref: passwordRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "login__form__button__container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            type: "submit",
            className: "login__form__button",
            disabled: loading,
            children: "Log In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "login__form__link__container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/forgot-password",
          children: "Forgot Password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "login__form__link__container",
        children: ["Need an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/signup",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 28
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Login, "f7HH8tA2YnGlaxhKIkxvnQqYKbY=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Login;

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Nav/Nav.css":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Nav/Nav.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Nav/Nav.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Nav/Nav.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Nav/Nav.tsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav.css */ "./src/components/Nav/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/Nav/Nav.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function Nav() {
  _s();

  const {
    logout,
    currentUser
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["GetUserByUUId"](currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleLogoutClick() {
    await logout();
    history.push('/login');
  }

  function handleHomeClick() {
    history.push('/');
  }

  function handleSettingsClick() {
    history.push('/update-profile');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("nav", {
    className: "navbar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
      className: "avatar",
      children: userState.user ? userState.user.userImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          backgroundImage: `url(${userState.user.userImage})`,
          backgroundSize: 'cover'
        },
        className: "nav__avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        src: "/assets/avatar.png",
        alt: "",
        className: "nav__avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
      className: "features",
      children: [window.location.pathname === '/' && currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleSettingsClick,
          children: "SETTINGS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this) : null, window.location.pathname !== '/' && currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleHomeClick,
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this) : null, currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleLogoutClick,
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleHomeClick,
          children: "LOGIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_s(Nav, "7rH7dZX4vZiiT1CzDVnr+1sj4m8=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Nav;

var _c;

__webpack_require__.$Refresh$.register(_c, "Nav");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavForFriendsPage/NavForFriendsPage.css":
/*!****************************************************************!*\
  !*** ./src/components/NavForFriendsPage/NavForFriendsPage.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavForFriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NavForFriendsPage/NavForFriendsPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavForFriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NavForFriendsPage/NavForFriendsPage.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavForFriendsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NavForFriendsPage/NavForFriendsPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/NavForFriendsPage/NavForFriendsPage.tsx":
/*!****************************************************************!*\
  !*** ./src/components/NavForFriendsPage/NavForFriendsPage.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavForFriendsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var _NavForFriendsPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavForFriendsPage.css */ "./src/components/NavForFriendsPage/NavForFriendsPage.css");
/* harmony import */ var _NavForFriendsPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavForFriendsPage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/NavForFriendsPage/NavForFriendsPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();






 // import * as ApiService from '../../ApiService'


function NavForFriendsPage({
  onAddFriend
}) {
  _s();

  const {
    logout,
    currentUser
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["GetUserByUUId"](currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleLogoutClick() {
    await logout();
    history.push('/login');
  }

  function handleHomeClick() {
    history.push('/');
  }

  function handleSettingsClick() {
    history.push('/update-profile');
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("nav", {
    className: "navbar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
      className: "avatar",
      children: userState.user ? userState.user.userImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          backgroundImage: `url(${userState.user.userImage})`,
          backgroundSize: 'cover'
        },
        className: "nav__avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        src: "/assets/avatar.png",
        alt: "",
        className: "nav__avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
        htmlFor: "site-search",
        children: "Add your friend by email:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
        type: "search",
        id: "site-search",
        name: "q",
        "aria-label": "Search through site content",
        value: email,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
        onClick: event => {
          onAddFriend(email);
          setEmail('');
        },
        children: "Add friend"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
      className: "features",
      children: [window.location.pathname === '/' && currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleSettingsClick,
          children: "SETTINGS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, this) : null, window.location.pathname !== '/' && currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleHomeClick,
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, this) : null, currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleLogoutClick,
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "nav__button",
          onClick: handleHomeClick,
          children: "LOGIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

_s(NavForFriendsPage, "Lqzt9yNR+YBwjUJU0JAuh1F8AdU=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = NavForFriendsPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "NavForFriendsPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NewDeck/NewDeck.css":
/*!********************************************!*\
  !*** ./src/components/NewDeck/NewDeck.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NewDeck.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewDeck/NewDeck.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NewDeck.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewDeck/NewDeck.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NewDeck.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewDeck/NewDeck.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/NewDeck/NewDeck.tsx":
/*!********************************************!*\
  !*** ./src/components/NewDeck/NewDeck.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewDeck; });
/* harmony import */ var _NewDeck_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewDeck.css */ "./src/components/NewDeck/NewDeck.css");
/* harmony import */ var _NewDeck_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NewDeck_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ApiService */ "./src/ApiService.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/NewDeck/NewDeck.tsx",
    _s = __webpack_require__.$Refresh$.signature();










function NewDeck() {
  _s();

  const [words, setWords] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const nameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });
  const lang1Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });
  const lang2Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });
  const lang1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });
  const lang2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    currentUser
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["GetUserByUUId"])(currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleAddWord(e) {
    e.preventDefault();
    setError('');

    if (lang1.current.value === '' || lang2.current.value === '') {
      return setError('You must enter a word on both sides. Please check and try again.');
    }

    setWords([...words, {
      lang1: lang1.current.value,
      lang2: lang2.current.value
    }]);
    lang1.current.value = '';
    lang2.current.value = '';
  }

  function handleSaveDeck(e) {
    e.preventDefault();
    setError('');

    if (lang1Ref.current.value === lang2Ref.current.value) {
      return setError('You have selected the same language on both sides. Please check and try again.');
    }

    Object(_ApiService__WEBPACK_IMPORTED_MODULE_2__["createDeckWithCards"])(userState.user.id, nameRef.current.value, lang1Ref.current.value, lang2Ref.current.value, words);
    history.push('/success');
  }

  function deleteWord(word) {
    let newWords = [...words];
    const index = newWords.indexOf(word);
    newWords.splice(index, 1);
    setWords(newWords);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "new__deck__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "new__deck__card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "new__deck__heading",
        children: "Create New Deck"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "login__alert__warning",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
        onSubmit: handleAddWord,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "new__deck__name__input",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
              type: "text",
              className: "new__deck__form__input",
              ref: nameRef,
              tabIndex: 1,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "new__deck__language__inputs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "First Language"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("select", {
                className: "new__deck__form__input",
                ref: lang1Ref,
                tabIndex: 2,
                required: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "",
                  disabled: true,
                  selected: true,
                  children: "Select a language"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "English",
                  children: "English"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "German",
                  children: "German"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "Spanish",
                  children: "Spanish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "French",
                  children: "French"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "Italian",
                  children: "Italian"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Second Language"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("select", {
                className: "new__deck__form__input",
                ref: lang2Ref,
                tabIndex: 3,
                required: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "",
                  disabled: true,
                  selected: true,
                  children: "Select a language"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "English",
                  children: "English"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "German",
                  children: "German"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "Spanish",
                  children: "Spanish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "French",
                  children: "French"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
                  value: "Italian",
                  children: "Italian"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "new__deck__language__inputs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Words"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__words",
              children: words.map(word => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "new__deck__word",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
                    children: [word.lang1, '  ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                      type: "button",
                      onClick: () => deleteWord(word),
                      className: "delete__button",
                      tabIndex: -1,
                      children: "X"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 23
                  }, this)
                }, Math.random() * 10000, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Words"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__words",
              children: words.map(word => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "new__deck__word",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
                    children: [word.lang2, '  ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                      type: "button",
                      onClick: () => deleteWord(word),
                      className: "delete__button",
                      tabIndex: -1,
                      children: "X"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 23
                  }, this)
                }, Math.random() * 10000, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "new__deck__language__inputs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                type: "text",
                className: "new__deck__form__input",
                ref: lang1,
                onSubmit: handleAddWord,
                tabIndex: 4
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "new__deck__language__input__right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "new__deck__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                type: "text",
                className: "new__deck__form__input",
                ref: lang2,
                onSubmit: handleAddWord,
                tabIndex: 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "new__deck__button__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            type: "submit",
            className: "add__word__button",
            tabIndex: 6,
            children: "Add Word"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            onClick: handleSaveDeck,
            className: "save__deck__button",
            tabIndex: 7,
            children: "Save Deck"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(NewDeck, "IxLmqf78ABU+mdsg/cInKKDpcHs=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = NewDeck;

var _c;

__webpack_require__.$Refresh$.register(_c, "NewDeck");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NotFound/404.json":
/*!******************************************!*\
  !*** ./src/components/NotFound/404.json ***!
  \******************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.4.3\",\"fr\":30,\"ip\":0,\"op\":210,\"w\":128,\"h\":128,\"nm\":\"preview\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"anchor\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":12,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":15,\"s\":[128,44,0],\"e\":[112,44,0],\"to\":[-2.66666674613953,0,0],\"ti\":[-1.33333337306976,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":19,\"s\":[112,44,0],\"e\":[136,44,0],\"to\":[1.33333337306976,0,0],\"ti\":[-2.66666674613953,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":25,\"s\":[136,44,0],\"e\":[128,44,0],\"to\":[2.66666674613953,0,0],\"ti\":[1.33333337306976,0,0]},{\"t\":36}],\"ix\":2},\"a\":{\"a\":0,\"k\":[128,44,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":25,\"nm\":\"Drop Shadow\",\"np\":8,\"mn\":\"ADBE Drop Shadow\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Shadow Color\",\"mn\":\"ADBE Drop Shadow-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":1}},{\"ty\":0,\"nm\":\"Opacity\",\"mn\":\"ADBE Drop Shadow-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":51,\"ix\":2}},{\"ty\":0,\"nm\":\"Direction\",\"mn\":\"ADBE Drop Shadow-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":180,\"ix\":3}},{\"ty\":0,\"nm\":\"Distance\",\"mn\":\"ADBE Drop Shadow-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":4,\"ix\":4}},{\"ty\":0,\"nm\":\"Softness\",\"mn\":\"ADBE Drop Shadow-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":32,\"ix\":5}},{\"ty\":7,\"nm\":\"Shadow Only\",\"mn\":\"ADBE Drop Shadow-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":0,\"ix\":6}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,8.836],[-8.836,0],[0,-8.836],[8.837,0]],\"o\":[[0,-8.836],[8.837,0],[0,8.836],[-8.836,0]],\"v\":[[-16,0],[0,-16],[16,0],[0,16]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[128,44],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":210,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"점검중 Outlines 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":17,\"s\":[0],\"e\":[-16]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":22,\"s\":[-16],\"e\":[14]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":27,\"s\":[14],\"e\":[-12]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":36,\"s\":[-12],\"e\":[10]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":45,\"s\":[10],\"e\":[-8]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":56,\"s\":[-8],\"e\":[6]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":67,\"s\":[6],\"e\":[-4]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":80,\"s\":[-4],\"e\":[4]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":93,\"s\":[4],\"e\":[-2]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":108,\"s\":[-2],\"e\":[2]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":123,\"s\":[2],\"e\":[-1]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":140,\"s\":[-1],\"e\":[1]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":158,\"s\":[1],\"e\":[0]},{\"t\":179}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":15,\"s\":[128,44,0],\"e\":[112,44,0],\"to\":[-2.66666674613953,0,0],\"ti\":[-1.33333337306976,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":19,\"s\":[112,44,0],\"e\":[136,44,0],\"to\":[1.33333337306976,0,0],\"ti\":[-2.66666674613953,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":25,\"s\":[136,44,0],\"e\":[128,44,0],\"to\":[2.66666674613953,0,0],\"ti\":[1.33333337306976,0,0]},{\"t\":36}],\"ix\":2},\"a\":{\"a\":0,\"k\":[128,44,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[2.505,-4.731]],\"o\":[[0,0],[0,0],[0,0],[-2.005,3.117],[0,0]],\"v\":[[-4.867,3.6],[1.845,3.6],[1.845,-7.697],[1.602,-7.697],[-4.867,3.347]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-3.842,6.029],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[1.973,-3.876],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.738,7.428],[-8.982,7.428],[-8.982,3.204],[-0.311,-11.415],[6.112,-11.415],[6.112,3.457],[8.982,3.457],[8.982,7.428],[6.112,7.428],[6.112,11.415],[1.738,11.415]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[147.018,152],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,5.348],[2.506,0],[0,-5.3],[-2.506,0]],\"o\":[[0,-5.315],[-2.49,0],[0,5.332],[2.521,0]],\"v\":[[4.055,-0.04],[0,-8.093],[-4.054,-0.04],[0,8.108]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,7.579],[-5.39,0],[0,-7.579],[5.421,0]],\"o\":[[0,-7.562],[5.375,0],[0,7.545],[-5.421,0]],\"v\":[[-8.701,-0.04],[0,-12],[8.701,-0.023],[0,12]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[127.992,152],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[2.505,-4.731]],\"o\":[[0,0],[0,0],[0,0],[-2.005,3.117],[0,0]],\"v\":[[-4.867,3.6],[1.845,3.6],[1.845,-7.697],[1.602,-7.697],[-4.867,3.347]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-3.842,6.029],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[1.974,-3.876],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.738,7.428],[-8.982,7.428],[-8.982,3.204],[-0.311,-11.415],[6.112,-11.415],[6.112,3.457],[8.982,3.457],[8.982,7.428],[6.112,7.428],[6.112,11.415],[1.738,11.415]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[108.982,152],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.044],[-0.823,0],[0,1.043],[0.82,0]],\"o\":[[0,1.054],[0.825,0],[0,-1.04],[-0.818,0]],\"v\":[[-1.288,1.042],[0.026,2.727],[1.347,1.048],[0.026,-0.639]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.819],[-1.463,0],[-0.3,-0.632],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.808,0]],\"o\":[[0,-1.813],[0.787,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.31,0.615],[-1.468,0]],\"v\":[[-2.868,1.035],[-0.496,-1.9],[1.241,-0.896],[1.332,-0.896],[1.332,-3.982],[2.868,-3.982],[2.868,3.895],[1.379,3.895],[1.379,2.999],[1.283,2.999],[-0.496,3.982]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[150.132,219.982],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.862,0],[0,-1.365],[0,0],[0,0],[0,0],[0.729,0],[0,-0.75],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.27,-0.642],[1.294,0],[0,0],[0,0],[0,0],[0,-0.785],[-0.712,0],[0,0],[0,0],[0,0]],\"v\":[[-2.648,-2.788],[-1.16,-2.788],[-1.16,-1.873],[-1.064,-1.873],[0.658,-2.912],[2.648,-0.773],[2.648,2.912],[1.112,2.912],[1.112,-0.416],[0.039,-1.615],[-1.113,-0.375],[-1.113,2.912],[-2.648,2.912]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[143.952,220.964],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.883,0],[0,1.323],[0,0],[0,0],[0,0],[-0.707,0],[0,0.76],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[-0.275,0.661],[-1.257,0],[0,0],[0,0],[0,0],[0,0.786],[0.767,0],[0,0],[0,0],[0,0]],\"v\":[[2.662,2.788],[1.173,2.788],[1.173,1.873],[1.077,1.873],[-0.623,2.912],[-2.661,0.804],[-2.661,-2.912],[-1.124,-2.912],[-1.124,0.416],[-0.053,1.604],[1.126,0.375],[1.126,-2.912],[2.662,-2.912]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[137.64,221.088],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.105],[0.813,0],[0,-1.096],[-0.824,0]],\"o\":[[0,-1.096],[-0.818,0],[0,1.11],[0.818,0]],\"v\":[[1.288,-0.003],[0,-1.745],[-1.289,-0.003],[0,1.744]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.866],[-1.775,0],[0,-1.851],[1.791,0]],\"o\":[[0,-1.846],[1.774,0],[0,1.866],[-1.79,0]],\"v\":[[-2.868,-0.003],[0,-2.975],[2.868,-0.003],[0,2.974]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[131.452,221.026],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-2.496,3.729],[-2.496,-3.729],[2.496,-3.729],[2.496,-2.396],[-0.901,-2.396],[-0.901,-0.454],[2.2,-0.454],[2.2,0.824],[-0.901,0.824],[-0.901,3.729]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[125.594,220.148],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.523,0],[-0.148,0.015],[0,0],[0.295,0],[0,1.111],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0.496],[0.201,0],[0,0],[-0.19,0.036],[-1.416,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.619,-3.537],[0.619,-2.126],[1.828,-2.126],[1.828,-0.942],[0.619,-0.942],[0.619,1.621],[1.374,2.345],[1.828,2.324],[1.828,3.471],[1.057,3.538],[-0.919,1.978],[-0.919,-0.942],[-1.827,-0.942],[-1.827,-2.126],[-0.919,-2.126],[-0.919,-3.537]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[118.132,220.359],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.105],[0.813,0],[0,-1.096],[-0.824,0]],\"o\":[[0,-1.096],[-0.818,0],[0,1.11],[0.819,0]],\"v\":[[1.288,-0.003],[-0.001,-1.745],[-1.29,-0.003],[-0.001,1.744]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.866],[-1.774,0],[0,-1.851],[1.791,0]],\"o\":[[0,-1.846],[1.775,0],[0,1.866],[-1.79,0]],\"v\":[[-2.868,-0.003],[-0.001,-2.975],[2.868,-0.003],[-0.001,2.974]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.197,221.026],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-3.23,3.729],[-3.23,-3.729],[-1.899,-3.729],[1.609,0.916],[1.704,0.916],[1.704,-3.729],[3.23,-3.729],[3.23,3.729],[1.91,3.729],[-1.609,-0.938],[-1.704,-0.938],[-1.704,3.729]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[106.229,220.148],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-6.627,0],[0,6.627],[26.51,0],[0,-26.51],[0,0],[-6.627,0],[0,0],[0,6.627],[0,0],[6.627,0],[0,0],[0,0],[0,12.956],[-13.453,-0.255],[0,-13.1]],\"o\":[[6.627,0],[0,-26.51],[-26.51,0],[0,0],[0,6.627],[0,0],[6.627,0],[0,0],[0,-6.627],[0,0],[0,0],[-12.956,0],[0,-13.456],[13.041,0.247],[0,6.627]],\"v\":[[36,-60],[48,-72],[0,-120],[-48,-72],[-48,108],[-36,120],[36,120],[48,108],[48,-36],[36,-48],[24,-48],[-0.541,-48],[-24,-71.459],[0.464,-95.996],[24,-72]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[128,128],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":210,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[64,64,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[128,128,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[40,40,100],\"ix\":6}},\"ao\":0,\"w\":256,\"h\":256,\"ip\":0,\"op\":210,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./src/components/NotFound/NotFound.css":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotFound/NotFound.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotFound/NotFound.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotFound/NotFound.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/NotFound/NotFound.tsx":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.css */ "./src/components/NotFound/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-react */ "./node_modules/lottie-react/build/index.umd.js");
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _404_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.json */ "./src/components/NotFound/404.json");
var _404_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./404.json */ "./src/components/NotFound/404.json", 1);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/NotFound/NotFound.tsx";






function NotFound() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "container__404",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
          animationData: _404_json__WEBPACK_IMPORTED_MODULE_2__,
          style: {
            width: 1067,
            height: 800
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = NotFound;

var _c;

__webpack_require__.$Refresh$.register(_c, "NotFound");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Signup/Signup.tsx":
/*!******************************************!*\
  !*** ./src/components/Signup/Signup.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/Signup/Signup.tsx",
    _s = __webpack_require__.$Refresh$.signature();







function Signup() {
  _s();

  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const passwordConfirmRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const firstNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const lastNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const {
    signup
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      const user = await signup(emailRef.current.value, passwordRef.current.value);
      const newUser = {
        userUID: user.user.uid,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        userImage: '/assets/avatar.png',
        friends: []
      };
      dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__["CreateUser"](newUser));
      setLoading(false);
      history.push('/');
    } catch (err) {
      setError(JSON.stringify(err.message).substring(1, JSON.stringify(err.message).length - 1));
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "login__container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "login__card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "login__heading",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "login__alert__warning",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "text",
              className: "login__form__input",
              ref: firstNameRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "text",
              className: "login__form__input",
              ref: lastNameRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "email",
              className: "login__form__input",
              ref: emailRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "password",
              className: "login__form__input",
              ref: passwordRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "Confirm Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "password",
              className: "login__form__input",
              ref: passwordConfirmRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "login__form__button__container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
            type: "submit",
            className: "login__form__button",
            disabled: loading,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "login__form__link__container",
        children: ["Already have an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: "/login",
          children: "Log In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(Signup, "Vod8MOFbK08qQOb8fGZfa8eXsOo=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = Signup;

var _c;

__webpack_require__.$Refresh$.register(_c, "Signup");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/StartTraining/StartTraining.css":
/*!********************************************************!*\
  !*** ./src/components/StartTraining/StartTraining.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./StartTraining.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/StartTraining/StartTraining.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./StartTraining.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/StartTraining/StartTraining.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./StartTraining.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/StartTraining/StartTraining.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/StartTraining/StartTraining.tsx":
/*!********************************************************!*\
  !*** ./src/components/StartTraining/StartTraining.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartTraining; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var _actions_DeckActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/DeckActions */ "./src/actions/DeckActions.ts");
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var _StartTraining_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StartTraining.css */ "./src/components/StartTraining/StartTraining.css");
/* harmony import */ var _StartTraining_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_StartTraining_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/StartTraining/StartTraining.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function StartTraining() {
  _s();

  const deckRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const methodRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    currentUser
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const deckState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.deck);

  async function getUserAndDecks() {
    var _userState$user;

    const user = (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.id;
    user && dispatch(Object(_actions_DeckActions__WEBPACK_IMPORTED_MODULE_3__["GetDeckByUserId"])(user));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getUserAndDecks(); // userState.user!.id &&
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "login__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "login__card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "login__heading",
        children: "Start Session"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              children: "Select Deck"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("select", {
              className: "login__form__input",
              ref: deckRef,
              required: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("option", {
                value: "English",
                children: "Decks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "login__form__label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              children: "Learning Method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "login__form__input__container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("select", {
              className: "login__form__input",
              ref: methodRef,
              required: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("option", {
                value: "English",
                children: "Decks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "login__form__button__container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
            type: "submit",
            className: "login__form__button",
            children: "Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(StartTraining, "AHsSZ+IURlnlnchJtgcIz1V67Rg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = StartTraining;

var _c;

__webpack_require__.$Refresh$.register(_c, "StartTraining");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Success/Success.tsx":
/*!********************************************!*\
  !*** ./src/components/Success/Success.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Success; });
/* harmony import */ var _NotFound_NotFound_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NotFound/NotFound.css */ "./src/components/NotFound/NotFound.css");
/* harmony import */ var _NotFound_NotFound_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NotFound_NotFound_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-react */ "./node_modules/lottie-react/build/index.umd.js");
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tick_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tick.json */ "./src/components/Success/tick.json");
var _tick_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./tick.json */ "./src/components/Success/tick.json", 1);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/Success/Success.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function Success() {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  setTimeout(() => history.push('/'), 3000);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "container__404",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
          animationData: _tick_json__WEBPACK_IMPORTED_MODULE_2__,
          style: {
            width: 1067,
            height: 800
          },
          loop: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Success, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

_c = Success;

var _c;

__webpack_require__.$Refresh$.register(_c, "Success");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Success/tick.json":
/*!******************************************!*\
  !*** ./src/components/Success/tick.json ***!
  \******************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.21\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":50.0000020365418,\"w\":360,\"h\":360,\"nm\":\"Success\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Tick Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[0],\"h\":1},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[1],\"y\":[0.005]},\"t\":20,\"s\":[0]},{\"t\":26.0000010590017,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[180.056,180.011,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[28.402,25.421,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,-24]},\"o\":{\"x\":[1,1,0.333],\"y\":[0.003,0.003,0]},\"t\":20,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":26,\"s\":[150,150,100]},{\"i\":{\"x\":[0.599,0.599,0.833],\"y\":[1.945,1.945,1]},\"o\":{\"x\":[0.211,0.211,0.167],\"y\":[1.647,1.647,0]},\"t\":30,\"s\":[80,80,100]},{\"t\":36.0000014663101,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.283,-2.474],[0,0],[0,0],[-2.652,-2.073],[2.073,-2.652],[0,0],[2.549,2.761],[0,0],[-2.474,2.283]],\"o\":[[0,0],[0,0],[2.074,-2.651],[2.652,2.074],[0,0],[-2.315,2.96],[0,0],[-2.283,-2.474],[2.473,-2.283]],\"v\":[[-16.911,-1.097],[-7.709,8.873],[16.476,-22.051],[25.032,-23.098],[26.079,-14.541],[-2.523,22.03],[-11.804,22.41],[-25.868,7.172],[-25.524,-1.442]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.401,25.421],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50.0000020365418,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Solid Circle Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10,\"s\":[0]},{\"t\":20.0000008146167,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[180,179.999,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.25,60.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-33.138,0],[0,33.138],[33.137,0],[0,-33.137]],\"o\":[[33.137,0],[0,-33.137],[-33.138,0],[0,33.138]],\"v\":[[0,60],[60,0],[0,-60],[-60,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[60.25,60.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50.0000020365418,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Big Green Border Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[50]},{\"t\":21.0000008553475,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[180,179.999,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[89.955,89.955,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":0,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":16,\"s\":[72,72,100]},{\"t\":21.0000008553475,\"s\":[150,150,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-44.183,0],[0,44.184],[44.183,0],[0,-44.183]],\"o\":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.184]],\"v\":[[0,80],[80,0],[0,-80],[-80,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.982,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[89.955,89.955],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50.0000020365418,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Green Border Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10,\"s\":[100]},{\"t\":20.0000008146167,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[180,179.999,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[67.465,67.465,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":10,\"s\":[100,100,100]},{\"t\":20.0000008146167,\"s\":[150,150,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-33.138,0],[0,33.138],[33.137,0],[0,-33.137]],\"o\":[[33.137,0],[0,-33.137],[-33.138,0],[0,33.138]],\"v\":[[0,60],[60,0],[0,-60],[-60,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[100]},{\"t\":10.0000004073083,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2.986,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.465,67.465],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50.0000020365418,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Burst Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[0],\"h\":1},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":23,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":25,\"s\":[100]},{\"t\":30.0000012219251,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[180.734,175.365,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[104.611,106.395,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[106,106],\"to\":[14.492,8.317],\"ti\":[-14.492,-8.317]},{\"t\":26.0000010590017,\"s\":[192.95,155.899]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.812],[-1.811,0]],\"o\":[[0,1.812],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,-0.001],[0,3.279],[-3.279,-0.001],[0,-3.279]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[13.019,-6.16],\"ti\":[-13.019,6.16]},{\"t\":26.0000010590017,\"s\":[183.114,68.041]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.621,0],[0,3.621],[-3.621,0]],\"o\":[[0,3.621],[-3.621,0],[0,-3.621],[3.621,0]],\"v\":[[6.557,0],[-0.001,6.557],[-6.557,0],[-0.001,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[11.926,-14.076],\"ti\":[-11.926,14.076]},{\"t\":26.0000010590017,\"s\":[176.557,20.546]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.811,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.811,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-13.176,-8.053],\"ti\":[13.176,8.053]},{\"t\":26.0000010590017,\"s\":[25.942,56.679]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-4.759,16.085],\"ti\":[4.759,-16.085]},{\"t\":26.0000010590017,\"s\":[76.448,201.512]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[6.502,16.085],\"ti\":[-6.502,-16.085]},{\"t\":26.0000010590017,\"s\":[144.009,201.512]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.812],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.812],[1.81,0]],\"v\":[[3.279,0],[0,3.279],[-3.279,0],[0,-3.279]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[16.782,4.522],\"ti\":[-16.782,-4.522]},{\"t\":26.0000010590017,\"s\":[205.693,132.132]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.621,0],[0,3.621],[-3.622,0]],\"o\":[[0,3.621],[-3.622,0],[0,-3.621],[3.621,0]],\"v\":[[6.557,0],[0,6.557],[-6.557,0],[0,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-12.083,15.368],\"ti\":[12.083,-15.368]},{\"t\":26.0000010590017,\"s\":[32.499,197.209]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.812],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.812],[1.81,0]],\"v\":[[3.279,0],[0.001,3.279],[-3.279,0],[0.001,-3.279]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-11.537,-14.622],\"ti\":[11.537,14.622]},{\"t\":26.0000010590017,\"s\":[35.778,17.268]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[7.594,-12.436],\"ti\":[-7.594,12.436]},{\"t\":26.0000010590017,\"s\":[150.566,30.382]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0.001,3.278],[-3.279,0],[0.001,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-15.819,10.036],\"ti\":[15.819,-10.036]},{\"t\":26.0000010590017,\"s\":[10.084,165.214]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.621,0],[0,3.621],[-3.622,0]],\"o\":[[0,3.621],[-3.622,0],[0,-3.621],[3.621,0]],\"v\":[[6.557,0],[0,6.557],[-6.557,0],[0,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[16.236,-4.49],\"ti\":[-16.236,4.49]},{\"t\":26.0000010590017,\"s\":[202.414,78.057]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.622,0],[0,3.621],[-3.621,0]],\"o\":[[0,3.621],[-3.621,0],[0,-3.621],[3.622,0]],\"v\":[[6.557,0],[-0.001,6.557],[-6.557,0],[-0.001,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-6.398,-14.076],\"ti\":[6.398,14.076]},{\"t\":26.0000010590017,\"s\":[66.613,20.546]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.81,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.81,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[1.09,17.377],\"ti\":[-1.09,-17.377]},{\"t\":26.0000010590017,\"s\":[111.542,209.261]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.621,0],[0,3.621],[-3.621,0]],\"o\":[[0,3.621],[-3.621,0],[0,-3.621],[3.621,0]],\"v\":[[6.557,0],[-0.001,6.557],[-6.557,0],[-0.001,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[-16.366,-0.088],\"ti\":[16.366,0.088]},{\"t\":26.0000010590017,\"s\":[6.806,104.472]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.621],[3.621,0],[0,3.621],[-3.621,0]],\"o\":[[0,3.621],[-3.621,0],[0,-3.621],[3.621,0]],\"v\":[[6.557,-0.001],[-0.001,6.557],[-6.557,-0.001],[-0.001,-6.557]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[13.019,13.182],\"ti\":[-13.019,-13.182]},{\"t\":26.0000010590017,\"s\":[183.115,184.095]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.811],[1.811,0],[0,1.811],[-1.811,0]],\"o\":[[0,1.811],[-1.811,0],[0,-1.811],[1.811,0]],\"v\":[[3.279,0],[0,3.278],[-3.279,0],[0,-3.278]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305220211253,0.725116265989,0.096665498322,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":19,\"s\":[105,105],\"to\":[1.146,-16.912],\"ti\":[-1.146,16.912]},{\"t\":26.0000010590017,\"s\":[111.875,3.528]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50.0000020365418,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./src/components/TrainingCard/TrainingCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/TrainingCard/TrainingCard.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrainingCard; });
/* harmony import */ var _TrainingPage_TrainingPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrainingPage/TrainingPage.css */ "./src/components/TrainingPage/TrainingPage.css");
/* harmony import */ var _TrainingPage_TrainingPage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_TrainingPage_TrainingPage_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/TrainingCard/TrainingCard.tsx",
    _s = __webpack_require__.$Refresh$.signature();





function TrainingCard(props) {
  _s();

  const [audio] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Audio('/assets/click.mp3'));
  const [isFlipped, setIsFlipped] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [hideTick, setHideTick] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    value: ''
  });

  function handleClick() {
    setIsFlipped(!isFlipped);
    hideFlagWhenFlipping();
  }

  function handleChange() {
    console.log(props.back);
    console.log(inputRef.current.value);

    if (inputRef.current.value === props.back) {
      setHideTick(false);
      setTimeout(() => {
        scrollRight();
        setHideTick(true);
      }, 3000);
    }
  }

  function scrollLeft() {
    audio.play();

    if (document.getElementById('scroll__container')) {
      const element = document.getElementById('scroll__container');

      if (element) {
        element.scrollLeft -= window.innerWidth;
      }
    }
  }

  function scrollRight() {
    audio.play();

    if (document.getElementById('scroll__container')) {
      const element = document.getElementById('scroll__container');

      if (element) {
        element.scrollLeft += window.innerWidth;
      }
    }
  }

  function getFlag(language) {
    if (language.includes('English')) {
      return '/assets/ukflag.svg';
    } else if (language.includes('German')) {
      return '/assets/germanyflag.svg';
    } else if (language.includes('Spanish')) {
      return '/assets/argentinaflag.svg';
    } else if (language.includes('Italian')) {
      return '/assets/italyflag.svg';
    } else if (language.includes('French')) {
      return '/assets/franceflag.svg';
    }
  }

  function hideFlagWhenFlipping() {
    if (isFlipped) {
      const flagElements = document.querySelectorAll('.flag__front');
      flagElements.forEach(element => {
        element.style.visibility = 'hidden';
      });
      setTimeout(function () {
        flagElements.forEach(element => {
          element.style.visibility = 'visible';
        });
      }, 450);
    }
  }

  function textToSpeech(language, string) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = string;

    if (language.includes('English')) {
      speech.lang = 'en-GB';
    } else if (language.includes('German')) {
      speech.lang = 'de-DE';
    } else if (language.includes('Spanish')) {
      speech.lang = 'es-MX';
    } else if (language.includes('Italian')) {
      speech.lang = 'it-IT';
    } else if (language.includes('French')) {
      speech.lang = 'fr-FR';
    }

    window.speechSynthesis.speak(speech);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "training__card__outer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: "carousel__button",
        onClick: scrollLeft,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "assets/arrow_down.png",
          alt: "back",
          className: "arrow left__arrow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: isFlipped ? 'training__card training__card__is__flipped' : 'training__card',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "training__card__inner",
        onClick: handleClick,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "training__card__front",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "training__card__text",
            children: props.front
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            className: "flag flag__front",
            id: "flag__front",
            src: getFlag(props.languageFront),
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "training__card__back",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "training__card__text",
            children: props.back
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            className: "flag",
            src: getFlag(props.languageBack),
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "progress__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          id: "progress__bar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("progress", {
            max: props.max,
            value: props.progress,
            children: props.progress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "speaker__container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "assets/speaker.svg",
            alt: "",
            className: "speaker",
            onClick: () => isFlipped ? textToSpeech(props.languageBack, props.back) : textToSpeech(props.languageFront, props.front)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "training__card__input__outer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "training__card__input__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            tabIndex: 1,
            className: "training__card__input",
            ref: inputRef,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "tick__image",
            children: hideTick ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "/assets/tick.gif",
              alt: "correct",
              width: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: "carousel__button",
        onClick: scrollRight,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "assets/arrow_down.png",
          alt: "next",
          className: "arrow right__arrow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

_s(TrainingCard, "5++J9KW5QgZFBsRI27xq6gIEl+M=");

_c = TrainingCard;

var _c;

__webpack_require__.$Refresh$.register(_c, "TrainingCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TrainingPage/TrainingPage.css":
/*!******************************************************!*\
  !*** ./src/components/TrainingPage/TrainingPage.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TrainingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/TrainingPage/TrainingPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TrainingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/TrainingPage/TrainingPage.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TrainingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/TrainingPage/TrainingPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/TrainingPage/TrainingPage.tsx":
/*!******************************************************!*\
  !*** ./src/components/TrainingPage/TrainingPage.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrainingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/CardActions */ "./src/actions/CardActions.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var _TrainingPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrainingPage.css */ "./src/components/TrainingPage/TrainingPage.css");
/* harmony import */ var _TrainingPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TrainingPage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TrainingCard_TrainingCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrainingCard/TrainingCard */ "./src/components/TrainingCard/TrainingCard.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/TrainingPage/TrainingPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();









function TrainingPage() {
  _s();

  const [audio] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Audio('/assets/trainingsuccess.mp3'));
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const cardState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.card);
  const listInnerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_actions_CardActions__WEBPACK_IMPORTED_MODULE_2__["GetAllCards"]());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onScroll = () => {
    if (listInnerRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = listInnerRef.current;
      console.log(clientWidth - scrollWidth === -scrollLeft);

      if (clientWidth - scrollWidth === -scrollLeft) {
        audio.play();
        setTimeout(() => {
          history.push('/');
        }, 4000);
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "wrapper__training__page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "training__container",
      id: "scroll__container",
      onScroll: () => onScroll(),
      ref: listInnerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "training__card__container",
        children: [cardState.cards ? cardState.cards.map((card, idx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_TrainingCard_TrainingCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: card.id,
            front: card.front,
            back: card.back,
            languageFront: card.languageFront,
            languageBack: card.languageBack,
            progress: idx + 1,
            max: cardState.cards.length + 1
          }, card.id, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 19
          }, this);
        }) : null, cardState.cards.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_TrainingCard_TrainingCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: 9999,
          front: "Well done!",
          back: "Well done!",
          languageFront: "done",
          languageBack: "done",
          progress: cardState.cards.length + 1,
          max: cardState.cards.length + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(TrainingPage, "/d+Dx/E3T9ud/ynEFa0J7WBPjmc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"]];
});

_c = TrainingPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "TrainingPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UpdateProfilePage/UpdateProfilePage.css":
/*!****************************************************************!*\
  !*** ./src/components/UpdateProfilePage/UpdateProfilePage.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./UpdateProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UpdateProfilePage/UpdateProfilePage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./UpdateProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UpdateProfilePage/UpdateProfilePage.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./UpdateProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UpdateProfilePage/UpdateProfilePage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/UpdateProfilePage/UpdateProfilePage.tsx":
/*!****************************************************************!*\
  !*** ./src/components/UpdateProfilePage/UpdateProfilePage.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateProfilePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/UserActions */ "./src/actions/UserActions.ts");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UpdateProfilePage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateProfilePage.css */ "./src/components/UpdateProfilePage/UpdateProfilePage.css");
/* harmony import */ var _UpdateProfilePage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UpdateProfilePage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/components/UpdateProfilePage/UpdateProfilePage.tsx",
    _s = __webpack_require__.$Refresh$.signature();










function UpdateProfilePage() {
  _s();

  var _userState$user4, _userState$user5, _userState$user6, _userState$user7, _userState$user8;

  const {
    currentUser,
    updatePassword,
    updateEmail
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const firstNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const lastNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: currentUser.email
  });
  const passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const passwordConfirmRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    value: ''
  });
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [firstNameEdit, setFirstNameEdit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [lastNameEdit, setLastNameEdit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [emailEdit, setEmailEdit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [passwordEdit, setPasswordEdit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__["GetUserByUUId"](currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (image) {
      const uploadTask = _firebase__WEBPACK_IMPORTED_MODULE_7__["storage"].ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', snapshot => {}, error => {
        console.error(error);
      }, () => {
        _firebase__WEBPACK_IMPORTED_MODULE_7__["storage"].ref('images').child(image.name).getDownloadURL().then(url => {
          setUrl(url);
        });
      });
    }
  }, [image]);

  function handleSubmit(e) {
    var _userState$user, _userState$user2, _userState$user3;

    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (currentUser && emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (!url && url !== ((_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.userImage)) {
      dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"](userState.user.id, {
        userImage: url
      }));
    }

    if (!firstNameRef.current.value && firstNameRef.current.value !== ((_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.firstName)) {
      dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"](userState.user.id, {
        firstName: firstNameRef.current.value
      }));
    }

    if (!lastNameRef.current.value && lastNameRef.current.value !== ((_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.lastName)) {
      dispatch(_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"](userState.user.id, {
        lastName: lastNameRef.current.value
      }));
    }

    Promise.all(promises).then(() => {
      history.push('/success');
    }).catch(err => {
      setError(JSON.stringify(err.message).substring(1, JSON.stringify(err.message).length - 1));
    }).finally(setLoading(false));
  }

  const handlePhotoUpload = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "settings__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Nav_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "settings__card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "settings__heading",
        children: ["Settings", error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "settings__login__alert__warning",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "container__image__profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              backgroundImage: `url(${url || ((_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.userImage) || 'http://via.placeholder.com/150'})`,
              backgroundSize: 'cover'
            },
            className: "settings__img__preview",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              className: "custom__file__upload",
              children: ["UPLOAD", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                type: "file",
                className: "hidden",
                onChange: handlePhotoUpload,
                size: 60
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "settings__form__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__input__container",
              children: [firstNameEdit && userState.user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                type: "text",
                id: "first__name__edit",
                className: "settings__form__input",
                ref: firstNameRef,
                defaultValue: (_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.firstName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "settings__form__attribute",
                children: (_userState$user6 = userState.user) === null || _userState$user6 === void 0 ? void 0 : _userState$user6.firstName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, this), firstNameEdit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                type: "button",
                className: "settings__form__button",
                onClick: () => setFirstNameEdit(true),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: "/assets/edit.svg",
                  alt: "edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__input__container",
              children: [lastNameEdit && userState.user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                type: "text",
                id: "Last__name__edit",
                className: "settings__form__input",
                ref: lastNameRef,
                defaultValue: (_userState$user7 = userState.user) === null || _userState$user7 === void 0 ? void 0 : _userState$user7.lastName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "settings__form__attribute",
                children: (_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.lastName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this), lastNameEdit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                type: "button",
                className: "settings__form__button",
                onClick: () => setLastNameEdit(true),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: "/assets/edit.svg",
                  alt: "edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__input__container",
              children: [emailEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                className: "settings__form__input",
                type: "email",
                ref: emailRef,
                defaultValue: currentUser.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "settings__form__attribute",
                children: currentUser.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 19
              }, this), emailEdit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                type: "button",
                className: "settings__form__button",
                onClick: () => setEmailEdit(true),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: "/assets/edit.svg",
                  alt: "edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__input__container",
              children: [passwordEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                className: "settings__form__input",
                type: "password",
                ref: passwordRef,
                placeholder: "********"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "settings__form__attribute",
                children: "********"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 19
              }, this), passwordEdit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                type: "button",
                className: "settings__form__button",
                onClick: () => setPasswordEdit(true),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: "/assets/edit.svg",
                  alt: "edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, this), passwordEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                children: "Confirm Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "settings__form__input__container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                className: "settings__form__input",
                type: "password",
                ref: passwordConfirmRef,
                placeholder: "********"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "settings__form__button__container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              type: "button",
              className: "settings__form__button",
              onClick: () => history.push('/'),
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              type: "submit",
              className: "settings__form__button",
              disabled: loading,
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, this);
}

_s(UpdateProfilePage, "qzQXsWB4Tgj1I/7pEXddVRh26bQ=", false, function () {
  return [_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = UpdateProfilePage;

var _c;

__webpack_require__.$Refresh$.register(_c, "UpdateProfilePage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/*! exports provided: useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ "./src/firebase.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/contexts/AuthContext.tsx",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();





const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
function useAuth() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthContext);
}

_s(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function AuthProvider({
  children
}) {
  _s2();

  const [currentUser, setCurrentUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function signup(email, password) {
    return _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut();
  }

  function resetPassword(email) {
    return _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    if (currentUser) return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    if (currentUser) return currentUser.updatePassword(password);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s2(AuthProvider, "JPKkTE37R6IDrA7GzM7XvQFcJ6E=");

_c = AuthProvider;

var _c;

__webpack_require__.$Refresh$.register(_c, "AuthProvider");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/firebase.tsx":
/*!**************************!*\
  !*** ./src/firebase.tsx ***!
  \**************************/
/*! exports provided: auth, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const app = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp({
  apiKey: "AIzaSyDAtP-5zjd7RxyBWvgNWy8qH72fU0RUfmM",
  authDomain: "decks-4f2e7.firebaseapp.com",
  projectId: "decks-4f2e7",
  storageBucket: "decks-4f2e7.appspot.com",
  messagingSenderId: "337090126486",
  appId: "1:337090126486:web:e53a1af61e702a2ccfd8b7",
  measurementId: "G-QKQ8M72H4"
});
const auth = app.auth();
const storage = app.storage();
/* harmony default export */ __webpack_exports__["default"] = (app);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store */ "./src/Store.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _Store__WEBPACK_IMPORTED_MODULE_4__["default"],
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/Reducers.ts":
/*!**********************************!*\
  !*** ./src/reducers/Reducers.ts ***!
  \**********************************/
/*! exports provided: userReducer, deckReducer, cardReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckReducer", function() { return deckReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardReducer", function() { return cardReducer; });
/* harmony import */ var _actions_UserActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/UserActionTypes */ "./src/actions/UserActionTypes.ts");
/* harmony import */ var _actions_DeckActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/DeckActionTypes */ "./src/actions/DeckActionTypes.ts");
/* harmony import */ var _actions_CardActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/CardActionTypes */ "./src/actions/CardActionTypes.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




// interface defaultCardStateType {
//   loading: boolean;
//   card?: Card;
// }
const defaultUserState = {
  loading: false
};
const defaultDeckState = {
  loading: false,
  decks: []
};
const defaultCardState = {
  loading: false,
  cards: []
};
const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case _actions_UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_FAIL"]:
      return {
        loading: false
      };

    case _actions_UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]:
      return {
        loading: true
      };

    case _actions_UserActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_SUCCESS"]:
      return { ...state,
        loading: false,
        user: action.payload
      };

    default:
      return state;
  }
};
const deckReducer = (state = defaultDeckState, action) => {
  switch (action.type) {
    case _actions_DeckActionTypes__WEBPACK_IMPORTED_MODULE_1__["DECK_FAIL"]:
      return { ...state,
        loading: false
      };

    case _actions_DeckActionTypes__WEBPACK_IMPORTED_MODULE_1__["DECK_LOADING"]:
      return { ...state,
        loading: true
      };

    case _actions_DeckActionTypes__WEBPACK_IMPORTED_MODULE_1__["DECK_SUCCESS"]:
      return {
        loading: false,
        decks: action.payload
      };

    default:
      return state;
  }
};
const cardReducer = (state = defaultCardState, action) => {
  switch (action.type) {
    case _actions_CardActionTypes__WEBPACK_IMPORTED_MODULE_2__["CARD_FAIL"]:
      return { ...state,
        loading: false
      };

    case _actions_CardActionTypes__WEBPACK_IMPORTED_MODULE_2__["CARD_LOADING"]:
      return { ...state,
        loading: true
      };

    case _actions_CardActionTypes__WEBPACK_IMPORTED_MODULE_2__["CARD_SUCCESS"]:
      return {
        loading: false,
        cards: action.payload
      };

    default:
      return state;
  }
}; // export const cardReducer = (
//   state: defaultCardStateType = defaultCardState,
//   action: CardDispatchTypes
// ): defaultCardStateType => {
//   switch (action.type) {
//     case CARD_FAIL:
//       return {
//         loading: false,
//       };
//     case CARD_LOADING:
//       return {
//         loading: true,
//       };
//     case CARD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         card: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/RootReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/RootReducer.ts ***!
  \*************************************/
/*! exports provided: RootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootReducer", function() { return RootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers */ "./src/reducers/Reducers.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _Reducers__WEBPACK_IMPORTED_MODULE_1__["userReducer"],
  deck: _Reducers__WEBPACK_IMPORTED_MODULE_1__["deckReducer"],
  card: _Reducers__WEBPACK_IMPORTED_MODULE_1__["cardReducer"]
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/shaunmartin/Documents/Codeworks/Thesis Project/decks-thesis-project/client/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map