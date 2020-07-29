(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/about/about.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/about/about.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"app-title\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"black\" width=\"48px\" height=\"48px\">\n      <path d=\"M0 0h24v24H0V0z\" fill=\"none\" />\n      <path\n        d=\"M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5l-2-2zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9z\" />\n      <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n    <span class=\"label\">Crotalus</span>\n  </div>\n\n  <div class=\"description\">\n    <p><em>Crotalus</em> es una aplicación para la consulta y gestión de material educativo desde el banco de objetos de aprendizaje.</p>\n  </div>\n\n\n  <div class=\"version\">\n    <ion-label>Versión</ion-label>\n    <h5>1.0.0</h5>\n  </div>\n\n  <div class=\"developed-by\">\n    <ion-label>creado por:</ion-label>\n    <div>\n      <h4>Universidad de Medellín  y BambuCo</h4>\n    </div>\n  </div>\n\n  <div class=\"funded-by\">\n    <ion-label>Financiado por:</ion-label>\n    <h4>Fondo de Ctel del Sistema General de Regalías</h4>\n  </div>\n\n  <div class=\"licensing\">\n    <ion-label>Licencia</ion-label>\n    <h5>GNU/GPL v3</h5>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/appearance/appearance.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/appearance/appearance.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"dark-theme-control main-item\">\n    <ion-item>\n      <div class=\"content-wrapper\">\n        <ion-label class=\"title\">Modo oscuro</ion-label>\n        <ion-item>\n          <ion-label>Usar configuración del sistema</ion-label>\n          <ion-checkbox class=\"system-default\" color=\"crotalus-controls\" [checked]=\"useSystemThemeMode\"\n            (ionChange)=\"darkThemeChange($event)\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label>Usar modo oscuro</ion-label>\n          <ion-toggle [checked]=\"darkThemeEnabled\" [disabled]=\"useSystemThemeMode\" (ionChange)=\"darkThemeChange($event)\"\n            color=\"crotalus-controls\" slot=\"end\"></ion-toggle>\n        </ion-item>\n      </div>\n    </ion-item>\n  </div>\n  <div class=\"default-item-type-search main-item\">\n    <ion-item>\n      <div class=\"content-wrapper\">\n        <ion-label class=\"title\">Búsqueda por defecto</ion-label>\n        <ion-list class=\"item-type-list\">\n          <ion-radio-group [value]=\"defaultSearchType\" (ionChange)=\"updateDefaultTypeForSearch($event)\">\n            <ion-item class=\"all-type\">\n              <ion-label>Todo</ion-label>\n              <ion-radio slot=\"start\" value=\"all\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"image-type\">\n              <ion-label>Imágenes <ion-icon name=\"image\"></ion-icon>\n              </ion-label>\n              <ion-radio slot=\"start\" value=\"image\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"video-type\">\n              <ion-label>Videos <ion-icon name=\"videocam\"></ion-icon>\n              </ion-label>\n              <ion-radio slot=\"start\" value=\"video\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"audio-type\">\n              <ion-label>Audios <ion-icon name=\"volume-medium\"></ion-icon>\n              </ion-label>\n              <ion-radio slot=\"start\" value=\"audio\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"document-type\">\n              <ion-label>Documentos <ion-icon name=\"document\"></ion-icon>\n              </ion-label>\n              <ion-radio slot=\"start\" value=\"document\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"didactic-unit-type\">\n              <ion-label>Unidades didácticas <ion-icon name=\"people\"></ion-icon>\n              </ion-label>\n              <ion-radio slot=\"start\" value=\"didacticUnit\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </div>\n    </ion-item>\n  </div>\n  <div class=\"default-repositories\"></div>\n\n  <ion-button class=\"reset-settings\" (click)=\"resetCustomConfigs()\" color=\"light\" expand=\"block\">\n    Restaurar valores por defecto\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/repositories/repositories.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/repositories/repositories.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ng-container *ngIf=\"initializing; else elseTemplate\">\n    <div class=\"progress-bar-wrapper\">\n      <ion-progress-bar value=\"0.25\" buffer=\"0.5\"></ion-progress-bar> \n    </div>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <div class=\"available-repositories main-item\">\n      <ion-item>\n        <div class=\"content-wrapper\">\n          <ion-label class=\"title\">Repositorios disponibles</ion-label>\n          <ion-list>\n            <ion-item class=\"repository\" *ngFor=\"let repository of repositoriesToShow\">\n              <ion-avatar slot=\"start\">\n                <ion-toggle [checked]=\"repository.connected\" color=\"crotalus-controls\" (ionChange)=\"toggleRepository($event, repository)\" ></ion-toggle>\n              </ion-avatar>\n              <ion-label>\n                <h2>{{repository.name}}</h2>\n                <h3>Catalogos: {{repository.catalogs.length}}</h3>\n                <p>{{getCataloguesList(repository)}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-item>\n    </div>\n\n    <ion-button class=\"reset-settings\" (click)=\"resetCustomConfigs()\" color=\"light\" expand=\"block\">\n      Restaurar valores por defecto\n    </ion-button>\n  </ng-template>\n\n  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\n    <ion-toolbar>\n      <ion-button slot=\"start\" [routerLink]=\"['/home']\" fill=\"clear\" class=\"back-button\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"crotalus\"></ion-icon>\n      </ion-button>\n      <ion-segment (ionChange)=\"navSegmentChanged($event)\" [value]=\"tabsCurrentValue\" color=\"crotalus\">\n        <ion-segment-button value=\"appearance\">\n          <ion-label>Apariencia</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"repositories\">\n          <ion-label>Repositorios</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"about\">\n          <ion-label>Acerca de</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>");

/***/ }),

/***/ "./src/app/settings/about/about.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/settings/about/about.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  margin-top: 30px;\n  text-align: center;\n  --background: var(--custom-background);\n}\nion-content > div:not(.description) {\n  margin-top: 45px;\n}\nion-content > div {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.app-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 30px;\n  color: var(--ion-color-crotalus);\n}\n.app-title svg {\n  width: 40px;\n  height: 40px;\n  margin-right: 1px;\n  -webkit-transform: rotateZ(-13deg);\n          transform: rotateZ(-13deg);\n  fill: var(--ion-color-crotalus);\n}\n.app-title .label {\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  -webkit-transform: rotateZ(-3deg);\n          transform: rotateZ(-3deg);\n}\n.description {\n  margin-top: 20px;\n  font-size: 0.92em;\n}\n.licensing img {\n  width: 38px;\n  margin: 0 2px;\n}\nimg.bambuco-logo {\n  width: 80px;\n  margin: 5px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL3NldHRpbmdzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwrQkFBQTtBQ0RKO0FESUU7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0ZKO0FETUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20tYmFja2dyb3VuZCk7XG5cbiAgPiBkaXY6bm90KC5kZXNjcmlwdGlvbikge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cblxuICAmID4gZGl2IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG4uYXBwLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xM2RlZyk7XG4gICAgZmlsbDogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTNkZWcpO1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC45MmVtO1xufVxuXG4ubGljZW5zaW5nIGltZyB7XG4gIHdpZHRoOiAzOHB4O1xuICBtYXJnaW46IDAgMnB4O1xufVxuXG5pbWcuYmFtYnVjby1sb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59IiwiaW9uLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWJhY2tncm91bmQpO1xufVxuaW9uLWNvbnRlbnQgPiBkaXY6bm90KC5kZXNjcmlwdGlvbikge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuaW9uLWNvbnRlbnQgPiBkaXYge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYXBwLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG59XG4uYXBwLXRpdGxlIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEzZGVnKTtcbiAgZmlsbDogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbn1cbi5hcHAtdGl0bGUgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTNkZWcpO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDAuOTJlbTtcbn1cblxuLmxpY2Vuc2luZyBpbWcge1xuICB3aWR0aDogMzhweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuaW1nLmJhbWJ1Y28tbG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/settings/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/settings/about/about.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/settings/appearance/appearance.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/settings/appearance/appearance.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--custom-background);\n}\n\n.title {\n  font-size: 18px;\n}\n\n.main-item {\n  margin-top: 40px;\n}\n\nion-item {\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n.content-wrapper {\n  width: 100%;\n  max-width: 400px;\n}\n\n.content-wrapper .title {\n  padding: 18px 0 9px;\n}\n\n.default-item-type-search .item-type-list ion-item {\n  --min-height: 40px;\n}\n\n.default-item-type-search .item-type-list ion-item.all-type ion-icon {\n  color: var(--all-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.all-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--all-type-color);\n}\n\n.default-item-type-search .item-type-list ion-item.image-type ion-icon {\n  color: var(--image-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.image-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--image-type-color);\n}\n\n.default-item-type-search .item-type-list ion-item.video-type ion-icon {\n  color: var(--video-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.video-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--video-type-color);\n}\n\n.default-item-type-search .item-type-list ion-item.audio-type ion-icon {\n  color: var(--audio-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.audio-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--audio-type-color);\n}\n\n.default-item-type-search .item-type-list ion-item.document-type ion-icon {\n  color: var(--document-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.document-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--document-type-color);\n}\n\n.default-item-type-search .item-type-list ion-item.didactic-unit-type ion-icon {\n  color: var(--didactic-unit-type-color);\n  margin-left: 10px;\n}\n\n.default-item-type-search .item-type-list ion-item.didactic-unit-type ion-radio {\n  margin-right: 10px;\n  --color-checked: var(--didactic-unit-type-color);\n}\n\n.default-item-type-search .item-type-list ion-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.default-item-type-search .item-type-list ion-label ion-icon {\n  font-size: 22px;\n  margin: 1px 0 0 7px;\n}\n\n.reset-settings {\n  margin-top: 40px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL3NldHRpbmdzL2FwcGVhcmFuY2UvYXBwZWFyYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvYXBwZWFyYW5jZS9hcHBlYXJhbmNlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlb3BlcmV6L0RvY3VtZW50cy9jcm90YWx1cy9jcm90YWx1cy1tb2JpbGUtYXBwL3NyYy90aGVtZS9jdXN0b20vX3Nhc3MtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURXSTtFQUNFLGtCQUFBO0FDUk47O0FEY1U7RUFDRSw0QkUxQ1U7RUYyQ1YsaUJBQUE7QUNaWjs7QURlVTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7QUNiWjs7QURNVTtFQUNFLDhCRTFDVTtFRjJDVixpQkFBQTtBQ0paOztBRE9VO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtBQ0xaOztBREZVO0VBQ0UsOEJFMUNVO0VGMkNWLGlCQUFBO0FDSVo7O0FERFU7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0FDR1o7O0FEVlU7RUFDRSw4QkUxQ1U7RUYyQ1YsaUJBQUE7QUNZWjs7QURUVTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7QUNXWjs7QURsQlU7RUFDRSxpQ0UxQ1U7RUYyQ1YsaUJBQUE7QUNvQlo7O0FEakJVO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtBQ21CWjs7QUQxQlU7RUFDRSxzQ0UxQ1U7RUYyQ1YsaUJBQUE7QUM0Qlo7O0FEekJVO0VBQ0Usa0JBQUE7RUFDQSxnREFBQTtBQzJCWjs7QURyQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3VCTjs7QURyQk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUN1QlI7O0FEakJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNvQkYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9hcHBlYXJhbmNlL2FwcGVhcmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwic2Fzcy12YXJpYWJsZXNcIjtcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1iYWNrZ3JvdW5kKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWFpbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gIC50aXRsZSB7XG4gICAgcGFkZGluZzogMThweCAwIDlweDtcbiAgfVxufVxuXG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIHtcblxuICAuaXRlbS10eXBlLWxpc3Qge1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuXG4gICAgICBAZWFjaCAkY2xhc3MsXG4gICAgICAkY29sb3IgaW4gJGNvbnRlbnQtdHlwZS1jb2xvcnMge1xuICAgICAgICAmLiN7JGNsYXNzfSB7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1yYWRpb3tcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogI3skY29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMXB4IDAgMCA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5yZXNldC1zZXR0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWJhY2tncm91bmQpO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBwYWRkaW5nOiAxOHB4IDAgOXB4O1xufVxuXG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIC5pdGVtLXR5cGUtbGlzdCBpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1pdGVtLmFsbC10eXBlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWFsbC10eXBlLWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIC5pdGVtLXR5cGUtbGlzdCBpb24taXRlbS5hbGwtdHlwZSBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tYWxsLXR5cGUtY29sb3IpO1xufVxuLmRlZmF1bHQtaXRlbS10eXBlLXNlYXJjaCAuaXRlbS10eXBlLWxpc3QgaW9uLWl0ZW0uaW1hZ2UtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIC5pdGVtLXR5cGUtbGlzdCBpb24taXRlbS5pbWFnZS10eXBlIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1pdGVtLnZpZGVvLXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmRlZmF1bHQtaXRlbS10eXBlLXNlYXJjaCAuaXRlbS10eXBlLWxpc3QgaW9uLWl0ZW0udmlkZW8tdHlwZSBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG59XG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIC5pdGVtLXR5cGUtbGlzdCBpb24taXRlbS5hdWRpby10eXBlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1pdGVtLmF1ZGlvLXR5cGUgaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xufVxuLmRlZmF1bHQtaXRlbS10eXBlLXNlYXJjaCAuaXRlbS10eXBlLWxpc3QgaW9uLWl0ZW0uZG9jdW1lbnQtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGVmYXVsdC1pdGVtLXR5cGUtc2VhcmNoIC5pdGVtLXR5cGUtbGlzdCBpb24taXRlbS5kb2N1bWVudC10eXBlIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1pdGVtLmRpZGFjdGljLXVuaXQtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1pdGVtLmRpZGFjdGljLXVuaXQtdHlwZSBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZWZhdWx0LWl0ZW0tdHlwZS1zZWFyY2ggLml0ZW0tdHlwZS1saXN0IGlvbi1sYWJlbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxcHggMCAwIDdweDtcbn1cblxuLnJlc2V0LXNldHRpbmdzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSIsIiRjb250ZW50LXR5cGUtY29sb3JzOiAoXG4gIFwiYWxsLXR5cGVcIjogdmFyKC0tYWxsLXR5cGUtY29sb3IpLFxuICBcImltYWdlLXR5cGVcIjogdmFyKC0taW1hZ2UtdHlwZS1jb2xvciksXG4gIFwidmlkZW8tdHlwZVwiOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKSxcbiAgXCJhdWRpby10eXBlXCI6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpLFxuICBcImRvY3VtZW50LXR5cGVcIjogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvciksXG4gIFwiZGlkYWN0aWMtdW5pdC10eXBlXCI6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvciksXG4gICk7XG5cbiAgJGFuaW1hdGlvbi1kdXJhdGlvbjogNDUwbXM7Il19 */");

/***/ }),

/***/ "./src/app/settings/appearance/appearance.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings/appearance/appearance.component.ts ***!
  \*************************************************************/
/*! exports provided: AppearanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceComponent", function() { return AppearanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/storageKeys.enum */ "./src/app/models/storageKeys.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let AppearanceComponent = class AppearanceComponent {
    constructor(storage, platform, searchService) {
        this.storage = storage;
        this.platform = platform;
        this.searchService = searchService;
    }
    ngOnInit() {
        this.getInitialValuesFromStorge();
    }
    getInitialValuesFromStorge() {
        this.storage.get(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].darkMode).then((val) => {
            if (val) {
                this.useSystemThemeMode = !!val.useSystemDefault;
                this.darkThemeEnabled = !!val.darkModeEnabled;
            }
        });
        this.storage.get(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].defaultSearchType).then((val) => {
            this.defaultSearchType = val ? val : 'all';
        });
    }
    darkThemeChange(event) {
        let darkModeData;
        if (event.target.classList.contains('system-default')) {
            darkModeData = {
                useSystemDefault: event.detail.checked,
                darkModeEnabled: this.darkThemeEnabled,
            };
        }
        else {
            darkModeData = {
                useSystemDefault: this.useSystemThemeMode,
                darkModeEnabled: event.detail.checked,
            };
        }
        this.storage.set(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].darkMode, darkModeData).then(() => {
            this.useSystemThemeMode = darkModeData.useSystemDefault;
            this.darkThemeEnabled = darkModeData.darkModeEnabled;
            this.shouldSetDarkMode();
        }, () => { console.log('couldn\'t set the value'); });
    }
    shouldSetDarkMode() {
        if (this.useSystemThemeMode) {
            this.setTheme(window.navigator.userAgent.includes('AndroidDarkMode'));
        }
        else {
            this.setTheme(this.darkThemeEnabled);
        }
    }
    setTheme(dark) {
        document.body.classList.toggle('dark', dark);
        if (dark) {
            window['StatusBar'].styleLightContent();
        }
        else {
            window['StatusBar'].styleDefault();
        }
        const statusBarColor = getComputedStyle(document.body).getPropertyValue('--status-bar-background').trim();
        window['StatusBar'].backgroundColorByHexString(statusBarColor);
        if (this.platform.is('android') && window.hasOwnProperty('NavigationBar')) {
            const navigationBarColor = dark ? '#000000' : '#ffffff';
            const ligthNavigationBar = dark ? false : true;
            window['NavigationBar'].backgroundColorByHexString(navigationBarColor, ligthNavigationBar);
        }
    }
    updateDefaultTypeForSearch(event) {
        if (event.detail.value !== this.defaultSearchType) {
            this.storage.set(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].defaultSearchType, event.detail.value).then(() => { }, () => { console.log('couldn\'t set the value'); });
            this.searchService.setDefaultSearchChangedInSettings(true);
        }
    }
    resetCustomConfigs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updateDefaultTypeForSearch({ detail: { value: 'all' } });
            const defaultDarkMode = {
                useSystemDefault: true,
                darkModeEnabled: false,
            };
            yield this.storage.set(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].darkMode, defaultDarkMode);
            this.getInitialValuesFromStorge();
        });
    }
};
AppearanceComponent.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
];
AppearanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appearance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appearance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/appearance/appearance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appearance.component.scss */ "./src/app/settings/appearance/appearance.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
], AppearanceComponent);



/***/ }),

/***/ "./src/app/settings/repositories/repositories.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/settings/repositories/repositories.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--custom-background);\n}\n\n.progress-bar-wrapper {\n  padding: 20px 0;\n}\n\n.content-wrapper {\n  width: 100%;\n  max-width: 400px;\n}\n\n.content-wrapper .title {\n  padding: 18px 0 9px;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.main-item {\n  margin-top: 40px;\n}\n\nion-item {\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n.repository .catalogues-name {\n  white-space: normal;\n}\n\n.reset-settings {\n  margin-top: 40px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL3NldHRpbmdzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURNRTtFQUNFLG1CQUFBO0FDSEo7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvcmVwb3NpdG9yaWVzL3JlcG9zaXRvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20tYmFja2dyb3VuZCk7XG59XG5cbi5wcm9ncmVzcy1iYXItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG5cbiAgLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAxOHB4IDAgOXB4O1xuICB9XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1haW4taXRlbSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cblxuLnJlcG9zaXRvcnkge1xuICAuY2F0YWxvZ3Vlcy1uYW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59XG5cblxuLnJlc2V0LXNldHRpbmdzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20tYmFja2dyb3VuZCk7XG59XG5cbi5wcm9ncmVzcy1iYXItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBwYWRkaW5nOiAxOHB4IDAgOXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLnJlcG9zaXRvcnkgLmNhdGFsb2d1ZXMtbmFtZSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5yZXNldC1zZXR0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/settings/repositories/repositories.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/settings/repositories/repositories.component.ts ***!
  \*****************************************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/storageKeys.enum */ "./src/app/models/storageKeys.enum.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let RepositoriesComponent = class RepositoriesComponent {
    constructor(storage, toastController, http, searchService) {
        this.storage = storage;
        this.toastController = toastController;
        this.http = http;
        this.searchService = searchService;
        this.currentToast = null;
        this.registeredRepositoriesUrl = 'http://b.boaproject.net/index.json';
        this.initializing = true;
    }
    ngOnInit() {
        this.basicInit();
    }
    basicInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.initializing = true;
            yield this.getAvailableReposotories();
            if (!this.fetchingAvailableRepositories) {
                this.loadRepositoriesData();
            }
        });
    }
    getAvailableReposotories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const value = yield this.storage.get(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].availableRepositories);
            if (value) {
                this.availableRepositories = value;
            }
            else {
                this.updateRegisteredRepositoriesList();
                console.log('Fetching available repos');
            }
        });
    }
    getConnectedRepositories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const value = yield this.storage.get(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].connectedRepositories);
            if (value) {
                this.connectedRepositories = value;
            }
            else {
                this.connectedRepositories = [];
            }
        });
    }
    loadRepositoriesData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getConnectedRepositories();
            this.updateRepositoriesToShow();
        });
    }
    updateRepositoriesToShow() {
        this.repositoriesToShow = this.availableRepositories.map(repository => (Object.assign({}, repository, { connected: this.connectedRepositories.some(connectedRepo => connectedRepo.name === repository.name) })));
        if (!this.connectedRepositories.length) {
            setTimeout(() => {
                this.presentToast('No hay repositorios conectados para la búsqueda', 3000);
            }, 500);
        }
        if (this.initializing) {
            this.initializing = false;
        }
    }
    updateRegisteredRepositoriesList() {
        this.fetchingAvailableRepositories = true;
        this.http.get(this.registeredRepositoriesUrl).subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const repositoriesFromResponse = response['sources'].filter(source => source.version >= 1.1);
            if (repositoriesFromResponse.length) {
                this.availableRepositories = this.sortReposByNameAscending(repositoriesFromResponse);
                yield this.storage.set(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].availableRepositories, this.availableRepositories);
                this.fetchingAvailableRepositories = false;
                this.loadRepositoriesData();
            }
            else {
                console.error('No respositories availabe from response');
            }
        }));
    }
    getCataloguesList(repository) {
        return repository.catalogs.map(catalog => catalog.title).join(', ');
    }
    toggleRepository(event, repository) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.detail.checked === undefined) {
                return;
            }
            if (repository.connected) {
                const repositoryIndex = this.connectedRepositories.findIndex(connectedRepo => repository.name === connectedRepo.name);
                this.connectedRepositories.splice(repositoryIndex, 1);
            }
            else {
                const newConnectedRepo = repository;
                delete newConnectedRepo.connected;
                this.connectedRepositories.push(newConnectedRepo);
            }
            yield this.storage.set(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].connectedRepositories, this.connectedRepositories);
            this.searchService.updateReposConnectedNumber();
            this.updateRepositoriesToShow();
        });
    }
    presentToast(message, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.dismissCurrentToast();
            this.currentToast = yield this.toastController.create({
                message,
                duration
            });
            this.currentToast.present();
            this.currentToast.onDidDismiss().then(() => { this.currentToast = null; });
        });
    }
    dismissCurrentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.currentToast) {
                yield this.currentToast.dismiss();
            }
        });
    }
    resetCustomConfigs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.remove(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].connectedRepositories);
            yield this.storage.remove(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_5__["StorageKeys"].availableRepositories);
            this.searchService.updateReposConnectedNumber();
            this.basicInit();
        });
    }
    ionViewWillLeave() {
        this.dismissCurrentToast();
    }
    ngOnDestroy() {
        this.dismissCurrentToast();
    }
    /** Helpers */
    sortReposByNameAscending(repositoriesToSort) {
        return repositoriesToSort.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }
};
RepositoriesComponent.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"] }
];
RepositoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-repositories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repositories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/repositories/repositories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repositories.component.scss */ "./src/app/settings/repositories/repositories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
], RepositoriesComponent);



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/settings/about/about.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/settings/repositories/repositories.component.ts");
/* harmony import */ var _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appearance/appearance.component */ "./src/app/settings/appearance/appearance.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"],
        children: [
            { path: 'appearance', component: _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_3__["AppearanceComponent"] },
            { path: 'repositories', component: _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_2__["RepositoriesComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
            { path: '', redirectTo: 'appearance' },
        ]
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/settings/about/about.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/settings/repositories/repositories.component.ts");
/* harmony import */ var _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appearance/appearance.component */ "./src/app/settings/appearance/appearance.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");










let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_8__["SettingsPageRoutingModule"]
        ],
        declarations: [
            _settings_page__WEBPACK_IMPORTED_MODULE_9__["SettingsPage"],
            _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_3__["AppearanceComponent"],
            _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_2__["RepositoriesComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
        ]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner-nav-tabs .back-button {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n.inner-nav-tabs .header-wrapper {\n  display: -webkit-box;\n  display: flex;\n}\n.inner-nav-tabs ion-tab-button:not(.back--button) {\n  font-size: 0.95em;\n  color: var(--ion-color-crotalus);\n}\n.inner-nav-tabs ion-tab-button:not(:first-child):not(:last-child) {\n  position: relative;\n}\n.inner-nav-tabs ion-tab-button:not(:first-child):not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  background-color: var(--ion-color-crotalus);\n  top: calc(50% - 2px);\n  right: -2px;\n  border-radius: 2px;\n}\n.inner-nav-tabs ion-tab-button:nth-child(1) {\n  z-index: 4;\n}\n.inner-nav-tabs ion-tab-button:nth-child(2) {\n  z-index: 3;\n}\n.inner-nav-tabs ion-tab-button:nth-child(3) {\n  z-index: 2;\n}\n.inner-nav-tabs ion-tab-button:nth-child(4) {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKO0FES0U7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0FDSko7QURNSTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBSm1CO0VBS25CLFdBTG1CO0VBTW5CLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFlJO0VBQ0UsVUFBQTtBQ1ZOO0FEU0k7RUFDRSxVQUFBO0FDUE47QURNSTtFQUNFLFVBQUE7QUNKTjtBREdJO0VBQ0UsVUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLW5hdi10YWJzIHtcblxuICAuYmFjay1idXR0b24ge1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxuXG4gIC5oZWFkZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGlvbi10YWItYnV0dG9uOm5vdCguYmFjay0tYnV0dG9uKSB7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG4gIH1cblxuICBpb24tdGFiLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAkZGl2aWRlci1kaWFtZXRlcjogNHB4O1xuICAgICAgJGRpdmlkZXItcmFkaXVzOiAkZGl2aWRlci1kaWFtZXRlciAvIDI7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAkZGl2aWRlci1kaWFtZXRlcjtcbiAgICAgIGhlaWdodDogJGRpdmlkZXItZGlhbWV0ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3JvdGFsdXMpO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtICN7JGRpdmlkZXItcmFkaXVzfSk7XG4gICAgICByaWdodDogLSN7JGRpdmlkZXItcmFkaXVzfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICN7JGRpdmlkZXItcmFkaXVzfTtcbiAgICB9XG5cbiAgfVxuICBcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgICBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHotaW5kZXg6ICN7NSAtICRpfTtcbiAgICB9XG4gIH1cbn1cbiIsIi5pbm5lci1uYXYtdGFicyAuYmFjay1idXR0b24ge1xuICBmbGV4LWdyb3c6IDA7XG59XG4uaW5uZXItbmF2LXRhYnMgLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbm5lci1uYXYtdGFicyBpb24tdGFiLWJ1dHRvbjpub3QoLmJhY2stLWJ1dHRvbikge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG59XG4uaW5uZXItbmF2LXRhYnMgaW9uLXRhYi1idXR0b246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbm5lci1uYXYtdGFicyBpb24tdGFiLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICByaWdodDogLTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmlubmVyLW5hdi10YWJzIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIHotaW5kZXg6IDQ7XG59XG4uaW5uZXItbmF2LXRhYnMgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDIpIHtcbiAgei1pbmRleDogMztcbn1cbi5pbm5lci1uYXYtdGFicyBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMykge1xuICB6LWluZGV4OiAyO1xufVxuLmlubmVyLW5hdi10YWJzIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCg0KSB7XG4gIHotaW5kZXg6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SettingsPage = class SettingsPage {
    constructor(router, platform) {
        this.router = router;
        this.platform = platform;
    }
    navSegmentChanged(event) {
        this.tabsCurrentValue = event.detail.value;
        this.router.navigate([`/settings/${this.tabsCurrentValue}`]);
    }
    setBackButtonListener() {
        this.backButtonPrioritySubcription = this.platform.backButton.subscribeWithPriority(1, () => { this.router.navigate(['/home']); });
    }
    ionViewWillEnter() {
        const targetRoute = this.router.url.split('/').pop();
        this.tabsCurrentValue = targetRoute === 'repositories' ? 'repositories' : 'appearance';
    }
    ionViewDidEnter() {
        this.setBackButtonListener();
    }
    ionViewDidLeave() {
        this.backButtonPrioritySubcription.unsubscribe();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map