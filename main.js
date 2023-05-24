/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/goblin/goblin.js

class Goblin {
  constructor() {
    const goblin = document.createElement("img");
    goblin.classList.add("goblin");
    goblin.src = goblin_namespaceObject;
    this.element = goblin;
  }
  get goblin() {
    return this.element;
  }
}
;// CONCATENATED MODULE: ./src/js/field/field.js

class GameField {
  constructor() {
    this.field = document.querySelector(".field");
    this.goblin = null;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.setGoblin();
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.goblin.element.remove();
    this.goblin = null;
  }
  addGoblin(id) {
    this.goblin = new Goblin();
    const target = this.field.children[id];
    target.append(this.goblin.goblin);
  }
  generateId() {
    let positions = [];
    for (let i = 0; i < this.field.children.length; i += 1) {
      if (!this.field.children[i].querySelector(".goblin")) {
        positions.push(this.field.children[i].dataset.id);
      }
    }
    return positions[Math.floor(Math.random() * positions.length)];
  }
  reAddGoblin(id) {
    const oldId = this.goblin.element.closest(".cell").dataset.id;
    const newCell = this.field.children[id];
    const a = newCell.querySelector("a");
    const newA = document.createElement("a");
    a.replaceWith(this.goblin.element);
    this.field.children[oldId].append(newA);
  }
  setGoblin() {
    const id = this.generateId();
    if (this.goblin) {
      this.reAddGoblin(id);
    } else {
      this.addGoblin(id);
    }
  }
}
/* harmony default export */ const field = (GameField);
;// CONCATENATED MODULE: ./src/js/app.js

const app_field = new field();
app_field.start();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;