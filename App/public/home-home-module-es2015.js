(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/file-opener/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/file-opener/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: FileOpener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileOpener", function() { return FileOpener; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var FileOpener = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.uninstall = function (packageId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.appIsInstalled = function (packageId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.pluginName = "FileOpener";
    FileOpener.plugin = "cordova-plugin-file-opener2";
    FileOpener.pluginRef = "cordova.plugins.fileOpener2";
    FileOpener.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpener.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    FileOpener = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FileOpener);
    return FileOpener;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtb3BlbmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBWS9DLHlCQUFJLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjtJQWMzQyw4QkFBUyxhQUFDLFNBQWlCO0lBYzNCLG1DQUFjLGFBQUMsU0FBaUI7SUFlaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7O0lBdkQ5QyxVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBbEN2QjtFQWtDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaWxlIE9wZW5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBmaWxlIG9uIHlvdXIgZGV2aWNlIGZpbGUgc3lzdGVtIHdpdGggaXRzIGRlZmF1bHQgYXBwbGljYXRpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlT3BlbmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLW9wZW5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZU9wZW5lcjogRmlsZU9wZW5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlT3BlbmVyLm9wZW4oJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBvcGVuaW5nIGZpbGUnLCBlKSk7XG4gKlxuICogdGhpcy5maWxlT3BlbmVyLnNob3dPcGVuV2l0aERpYWxvZygncGF0aC90by9maWxlLnBkZicsICdhcHBsaWNhdGlvbi9wZGYnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRmlsZSBpcyBvcGVuZWQnKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlT3BlbmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpbGVPcGVuZXIyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wd2xpbi9jb3Jkb3ZhLXBsdWdpbi1maWxlLW9wZW5lcjInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU9wZW5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYW4gZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgb3BlbihmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuaW5zdGFsbHMgYSBwYWNrYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxuICB9KVxuICB1bmluc3RhbGwocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhcHAgaXMgYWxyZWFkeSBpbnN0YWxsZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VJZCBQYWNrYWdlIElEXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXG4gIH0pXG4gIGFwcElzSW5zdGFsbGVkKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgd2l0aCBzeXN0ZW0gbW9kYWwgdG8gb3BlbiBmaWxlIHdpdGggYW4gYWxyZWFkeSBpbnN0YWxsZWQgYXBwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgc2hvd09wZW5XaXRoRGlhbG9nKGZpbGVQYXRoOiBzdHJpbmcsIGZpbGVNSU1FVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/audio-result-card/audio-result-card.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/audio-result-card/audio-result-card.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"audioItem\">\n  <ion-card-header (click)=\"openDetails.emit()\">\n    <span class=\"repository-name\">{{audioItem.repositoryName}}</span>\n    <ion-card-title>{{metadata.general.title.none}}</ion-card-title>\n  </ion-card-header>\n  <div class=\"audio-player\">\n    <!-- <mat-basic-audio-player [audioUrl]=\"audioSource\" [title]=\"''\" [autoPlay]=\"false\" \n    [displayTitle]=\"'false'\" [displayVolumeControls]=\"'true'\" ></mat-basic-audio-player> -->\n\n    <app-simple-audio-player class=\"audio-player\" [audioSrc]=\"audioSource\" (playEvent)=\"playEvent.emit($event)\"></app-simple-audio-player>\n\n    <!-- <audio controls>\n      <source [src]=\"audioSource\" type=\"audio/mpeg\">\n      Your browser does not support the audio element.\n    </audio> -->\n  </div>\n  <ion-card-content (click)=\"openDetails.emit()\">\n    <p class=\"description\">{{metadata.general.description.none}}</p>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/audio-player/audio-player.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/audio-player/audio-player.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player-wrapper\" *ngIf=\"audioSrc\">\n  <audio #player [src]=\"audioSrc\">\n    <!-- <audio #player src=\"https://freesound.org/data/previews/521/521275_2535988-lq.mp3\"> -->\n  </audio>\n  <div class=\"actions\">\n    <ion-button class=\"main-action\" (click)=\"play()\" size=\"large\" [disabled]=\"isLoading\">\n      <ion-spinner *ngIf=\"isLoading; else playIcon\"></ion-spinner>\n      <ng-template #playIcon>\n        <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\" slot=\"icon-only\"></ion-icon>\n      </ng-template>\n    </ion-button>\n    <ion-button class=\"secondary-action\" (click)=\"toggleVolume()\" fill=\"clear\"  [disabled]=\"isLoading\">\n      <ion-icon [name]=\"isMuted ? 'volume-mute' : 'volume-high'\"></ion-icon>\n    </ion-button>\n  </div>\n  <div class=\"slider-wrapper\" [class.loading]=\"isLoading\">\n    <ion-label color=\"light\" slot=\"start\">{{ currentTimeFormatted }}</ion-label>\n    <mat-slider min=\"0\" [max]=\"duration\" [value]=\"currentTime\" (change)=\"seek($event)\"\n      [disabled]=\"isLoading || duration === 1\" [class.smooth-marker]=\"smoothMarker\"></mat-slider>\n    <ion-label color=\"light\" slot=\"end\">{{ durationFormatted }}</ion-label>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/details-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/details-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header #detailsHeader class=\"title\" [ngClass]=\"{'image-type': itemType=== searchTypes.image,\n  'video-type': itemType=== searchTypes.video,\n  'audio-type': itemType=== searchTypes.audio,\n  'document-type': itemType=== searchTypes.document,\n  'didactic-unit-type': itemType=== searchTypes.didacticUnit }\">\n    <ion-toolbar>\n      <ion-icon class=\"icon\" [name]=\"titleIcon\" slot=\"start\"></ion-icon>\n      <div>\n        <h4>\n          <span>{{ title }}</span>\n        </h4>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"large\" (click)=\"closeModal()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \n  <div class=\"content\" *ngIf=\"itemData;else loadingIndicator\">\n    \n    \n    <ng-container [ngSwitch]=\"true\">\n      \n      <app-image-player *ngSwitchCase=\"itemType === searchTypes.image\" [imageItem]=\"itemData\"></app-image-player>\n      \n      <app-video-player *ngSwitchCase=\"itemType === searchTypes.video\" [videoItem]=\"itemData\"></app-video-player>\n      \n      <app-audio-player *ngSwitchCase=\"itemType === searchTypes.audio\" [audioSrc]=\"audioSrc\"></app-audio-player>\n      \n      <app-html-player *ngSwitchCase=\"itemType === searchTypes.document && showDocumentPlayer\" \n      [url]=\"originalFileUrl\" [format]=\"format\" (openPdf)=\"openPdf()\" ></app-html-player>\n      \n      <ng-container *ngSwitchDefault>\n        <div class=\"image-wrapper\" *ngIf=\"manifest\">\n          <img [src]=\"manifest.customicon\" alt=\"miniatura del OVA\">\n        </div>\n      </ng-container>\n      \n    </ng-container>\n\n    <div class=\"info-wrapper\">\n      <div class=\"info-item\" *ngIf=\"description\">\n        <h4>Descripción:</h4>\n        <p>\n          {{ description }}\n        </p>\n      </div>\n      <div class=\"info-item\" *ngIf=\"contributions && contributions.length\">\n        <h4>Contribuciones:</h4>\n        <div class=\"contribution-item\" *ngFor=\"let contribution of contributions\">\n          <strong>{{ contribution.entity.name }} {{ contribution.entity.lastname }}</strong>\n          <br />\n          <span class=\"rol\">{{ contribution.rol }}</span>\n          <br />\n          <span>{{ contribution.date.split('T')[0] }}</span>\n          <br />\n          <span class=\"company\">\n            {{ contribution.entity.company.length < 31 ? contribution.entity.company : contribution.entity.company.slice(0,30) }}\n          </span>\n        </div>\n      </div>\n      <div class=\"info-item\" *ngIf=\"keywords && keywords?.join(', ').length\">\n        <h4>Palabras clave:</h4>\n        <p>\n          {{ keywords?.join(', ') }}\n        </p>\n      </div>\n      <div class=\"info-item\" *ngIf=\"publishDate\">\n        <h4>Fecha de publicación:</h4>\n        <p>\n          {{ publishDate }}\n        </p>\n      </div>\n      <div class=\"info-item\" *ngIf=\"format\">\n        <h4>Formato:</h4>\n        <p>\n          {{ format }}\n        </p>\n      </div>\n      <div class=\"info-item copyright\" *ngIf=\"rights && rights.copyright\">\n        <h4>Licencia:</h4>\n        <p>\n          <img [src]=\"copyrightImageUrl\" alt=\"\">\n          <span class=\"version-wrapper\" *ngIf=\"copyrightVersion\">\n            Versión:\n            <br />\n            {{ copyrightVersion }}\n          </span>\n        </p>\n      </div>\n\n    </div>\n\n    <div class=\"actions\">\n      <ion-button (click)=\"presentActionSheet()\" expand=\"block\" color=\"light\" [class.disabled]=\"this.format === 'text/html' \">\n        <ion-icon slot=\"start\" name=\"cloud-download\"></ion-icon>\n        Descargar\n      </ion-button>\n\n      <ion-button (click)=\"share()\" expand=\"block\" color=\"light\">\n        <ion-icon slot=\"start\" name=\"share-social\"></ion-icon>\n        Compartir\n      </ion-button>\n    </div>\n  </div>\n\n  <ng-template #loadingIndicator>\n    <ion-spinner class=\"loading-indicator\" name=\"dots\"></ion-spinner>\n  </ng-template>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/html-player/html-player.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/html-player/html-player.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <ion-button size=\"large\" (click)=\"openDocument()\" [disabled]=\"!enablePlayer\">\n    <ion-icon slot=\"icon-only\" name=\"open-outline\"></ion-icon>\n  </ion-button>\n  <ion-label>Ver documento</ion-label>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/image-player/image-player.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/image-player/image-player.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-player\">\n  <app-image-loader [imageSrc]=\"imageSrc\" [altText]=\"altText\" (imageLoadFailed)=\"imageLoadError()\"></app-image-loader>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/video-player/video-player.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/video-player/video-player.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"video-player-wrapper\">\n  <img class=\"loading-video\" *ngIf=\"!videoLoaded\" src=\"/assets/img/crotalus_sketchy.svg\" alt=\"video loading\">\n  <video controls *ngIf=\"videoSrc\" [class.show-error-msg]=\"showVideoError\" [hidden]=\"!videoLoaded\" (canplaythrough)=\"videoDataReady($event)\">\n    <source [src]=\"videoSrc\" [type]=\"format\" preload=\"metadata\" webkit-playsinline=“webkit-playsinline” (error)=\"handleVideoError($event)\">\n  </video>\n  <!-- <div *ngIf=\"showVideoError\" class=\"video-error-message\" [@visibilityChangedFade]> -->\n  <div *ngIf=\"showVideoError\" class=\"video-error-message\">\n    <p class=\"main\">\n      <ion-icon name=\"sad-outline\"></ion-icon>\n      <span>Lo sentimos!!.</span>\n    </p>\n    <p class=\"message\">Este video no está disponible en este momento</p>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/document-result-card/document-result-card.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/document-result-card/document-result-card.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"itemInfo\" class=\"item-card\" (click)=\"openDetails.emit()\">\n  <div class=\"content-wrapper\">\n    <div class=\"top-info-bar\">\n      <ion-chip>\n        <ion-label>{{itemInfo.metadata.technical.format.split('/')[1]}}</ion-label>\n      </ion-chip>\n      <span class=\"repository-name\">{{itemInfo.repositoryName}}</span>\n    </div>\n    <ion-card-header>\n      <ion-card-title>{{itemInfo.metadata.general.title.none}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p class=\"description\">{{itemInfo.metadata.general.description.none}}</p>\n      <p class=\"keywords\">\n        <em\n          *ngIf=\"itemInfo.metadata.general.keywords && !!itemInfo.metadata.general.keywords.none.join(); else noKeywords\"><strong>Palabras\n            clave:\n          </strong>{{itemInfo.metadata.general.keywords.none.join(', ')}}</em>\n        <ng-template #noKeywords>\n          <em>Sin palabras clave definidas</em>\n        </ng-template>\n      </p>\n    </ion-card-content>\n  </div>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/general-result-card/general-result-card.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/general-result-card/general-result-card.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"itemInfo\" class=\"item-card\">\n  <div class=\"content-wrapper\">\n    <div class=\"top-info-bar\" (click)=\"openDetails.emit()\">\n      <ion-chip outline [ngClass]=\"{'image-type': itemInfo.type === searchTypes.image,\n      'video-type': itemInfo.type === searchTypes.video,\n      'audio-type': itemInfo.type === searchTypes.audio,\n      'document-type': itemInfo.type === searchTypes.document }\"\n      [class.didactic-unit-type]=\"didacticUnitResult\">\n        <ion-icon [name]=\"getItemTypeIcon(itemInfo.type)\"></ion-icon>\n        <ion-label>{{itemInfo.metadata.technical.format.split('/')[1]}}</ion-label>\n      </ion-chip>\n      <span class=\"repository-name\">{{itemInfo.repositoryName}}</span>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size-xs=\"12\" [attr.size-sm]=\"itemInfo.type === searchTypes.audio ? 12 : 8\"\n          [attr.size-lg]=\"itemInfo.type === searchTypes.audio ? 12 : 9\"\n          [attr.size-xlg]=\"itemInfo.type === searchTypes.audio ? 12 : 10\" class=\"card-content-column\">\n          <ion-card-header (click)=\"openDetails.emit()\">\n            <ion-card-title>{{itemInfo.metadata.general.title.none}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>\n              <app-simple-audio-player class=\"audio-player\" *ngIf=\"itemInfo.type === searchTypes.audio\"\n                [audioSrc]=\"originalFileUrl\" (playEvent)=\"playEvent.emit($event)\"></app-simple-audio-player>\n            </p>\n            <p class=\"description\" (click)=\"openDetails.emit()\">{{itemInfo.metadata.general.description.none}}</p>\n            <p class=\"keywords ion-hide-sm-down\" (click)=\"openDetails.emit()\">\n              <em *ngIf=\"itemInfo.metadata.general.keywords && !!itemInfo.metadata.general.keywords.none.join(); else noKeywords\"><strong>Palabras clave:\n                </strong>{{itemInfo.metadata.general.keywords.none.join(', ')}}</em>\n              <ng-template #noKeywords>\n                <em>Sin palabras clave definidas</em>\n              </ng-template>\n            </p>\n\n          </ion-card-content>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-sm=\"4\" size-lg=\"3\" size-xlg=\"2\" class=\"card-thumbnail-column\"\n          *ngIf=\"itemInfo.type !== searchTypes.audio\" (click)=\"openDetails.emit()\">\n          <ion-row>\n            <ion-col size-xs=\"7\" class=\"ion-hide-sm-up\">\n              <ion-card-content>\n                <p class=\"keywords\" (click)=\"openDetails.emit()\">\n                  <em *ngIf=\"itemInfo.metadata.general.keywords && !!itemInfo.metadata.general.keywords.none.join(); else noKeywords\"><strong>Palabras clave:\n                    </strong>{{itemInfo.metadata.general.keywords.none.join(', ')}}</em>\n                  <ng-template #noKeywords>\n                    <em>Sin palabras clave definidas</em>\n                  </ng-template>\n                </p>\n              </ion-card-content>\n            </ion-col>\n            <ion-col size-xs=\"5\" size-sm=\"12\">\n              <img [src]=\"itemInfo.manifest.customicon\" alt=\"miniatura del recurso\">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-loader/image-loader.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-loader/image-loader.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"loading-image\" *ngIf=\"!imageVisible\" src=\"/assets/img/crotalus_sketchy.svg\" alt=\"image loading\">\n<img\n  [hidden]=!imageVisible\n  [src]=\"imageSrc\"\n  [alt]=\"altText\"\n  (load)=\"showImage()\"\n  (error)=\"imageLoadError()\"\n>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-result-card/image-result-card.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-result-card/image-result-card.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <img class=\"loading-image\" *ngIf=\"!imageVisible\" src=\"/assets/img/crotalus_sketchy.svg\" alt=\"image loading\">\n  <img\n    [hidden]=!imageVisible\n    [src]=\"imageSrc\"\n    [alt]=\"metadata.general.title.none\"\n    (load)=\"showImage()\"\n    (error)=\"imageLoadError()\"\n  >\n  <ion-card-header>\n    <span class=\"repository-name\">{{imageItem.repositoryName}}</span>\n    <ion-card-title>{{metadata.general.title.none}}</ion-card-title>\n  </ion-card-header>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-search-results.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-search-results.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-results-wrapper\" #contentWrapper>\n  <ng-container *ngIf=\"showResults\">\n    <div class=\"results-box\">\n      <ng-container *ngFor=\"let resultsColumn of resultsInColumns\">\n        <div class=\"column\">\n          <app-image-result-card \n            *ngFor=\"let imageItem of resultsColumn\"\n            [imageItem]=\"imageItem\"\n            (click)=\"openDetails.emit(imageItem)\"\n          ></app-image-result-card>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/search-type-selector/search-type-selector.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/search-type-selector/search-type-selector.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"type-selection-wrapper\" [class.pristine]=\"pristine\" [appSearchTypeClass]=\"searchType\">\n  <ion-button class=\"all-type\" [class.active]=\"searchType === searchTypes.all\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.all)\">\n    <ion-label>Todo</ion-label>\n  </ion-button>\n  <ion-button class=\"image-type\" [class.active]=\"searchType === searchTypes.image\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.image)\">\n    <ion-icon slot=\"icon-only\" name=\"image\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"video-type\" [class.active]=\"searchType === searchTypes.video\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.video)\">\n    <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"audio-type\" [class.active]=\"searchType === searchTypes.audio\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.audio)\">\n    <ion-icon slot=\"icon-only\" name=\"volume-medium\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"document-type\" [class.active]=\"searchType === searchTypes.document\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.document)\">\n    <ion-icon slot=\"icon-only\" name=\"document\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"didactic-unit-type\" [class.active]=\"searchType === searchTypes.didacticUnit\" fill=\"clear\"\n    (click)=\"setSearchType(searchTypes.didacticUnit)\">\n    <ion-icon slot=\"icon-only\" name=\"people\"></ion-icon>\n  </ion-button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/simple-audio-player/simple-audio-player.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/simple-audio-player/simple-audio-player.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player-wrapper\" *ngIf=\"audioSrc\">\n  <audio #player [src]=\"audioSrc\">\n  <!-- <audio #player src=\"https://freesound.org/data/previews/521/521275_2535988-lq.mp3\"> -->\n  </audio>\n  <div class=\"player\">\n    <ion-button (click)=\"play()\"  fill=\"clear\" [disabled]=\"isLoading\">\n      <ion-spinner *ngIf=\"isLoading; else playIcon\"></ion-spinner>\n      <ng-template #playIcon>\n        <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\"></ion-icon>\n      </ng-template>\n    </ion-button>\n    <div class=\"slider-wrapper\" [class.loading]=\"isLoading\">\n      <ion-label color=\"light\" slot=\"start\">{{ currentTimeFormatted }}</ion-label>\n      <mat-slider min=\"0\" [max]=\"duration\" [value]=\"currentTime\" (change)=\"seek($event)\" [disabled]=\"isLoading || duration === 1\" [class.smooth-marker]=\"smoothMarker\"></mat-slider>\n      <ion-label color=\"light\" slot=\"end\">{{ durationFormatted }}</ion-label>\n    </div>\n    <ion-button (click)=\"toggleVolume()\"  fill=\"clear\" [disabled]=\"isLoading\">\n      <ion-icon [name]=\"isMuted ? 'volume-mute' : 'volume-high'\"></ion-icon>\n    </ion-button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/video-result-card/video-result-card.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/video-result-card/video-result-card.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"videoItem\" (click)=\"openDetails.emit()\">\n  <div class=\"thumbnail-wrapper\" (mouseenter) = \"togglePreview(true)\" (mouseleave) = \"togglePreview(false)\">\n    <app-image-loader \n      [imageSrc]=\"thumbnailSrc\"\n      [altText]=\"thumbnailAltText\"\n      imageBorderRadius=\"'4px 4px 0 0'\"\n      (imageLoadFailed)=\"imageLoadError()\"\n    ></app-image-loader>\n    <div class=\"preview-box\" [class.active]=\"showPreview\" #previewBox></div>\n  </div>\n  <ion-card-header>\n    <span class=\"repository-name\">{{videoItem.repositoryName}}</span>\n    <ion-card-title>{{metadata.general.title.none}}</ion-card-title>\n  </ion-card-header>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content [fullscreen]=\"true\" scrollEvents=\"true\" (ionScroll)=\"shouldAddSearchToHeader($event)\"\n  appHideHeader [header]=\"header\" [searchVisibleInHeader]=\"addSearchToHeader\">\n\n  <ion-header class=\"main-header\" [translucent]=\"true\" #header slot=\"fixed\">\n    <ion-toolbar class=\"title-toolbar\" [appSearchTypeClass]=\"searchType\" [class.small-padding]=\"addSearchToHeader\">\n      <ion-buttons slot=\"start\">\n        <ion-button [routerLink]=\"['/settings/appearance']\">\n          <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"toggleLicensesMenu()\" class=\"licenses-filter-button\" [disabled]=\"showNoRepos\">\n          <ng-container *ngIf=\"!menuIsOpened;else closeMenuTemplate\">\n            <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\n            <ion-badge class=\"active-licenses-count\" *ngIf=\"showActiveLicensesCount\" slot=\"end\">{{activeLicensesCount}}</ion-badge>\n          </ng-container>\n          <ng-template #closeMenuTemplate>\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ng-template>\n        </ion-button>\n      </ion-buttons>\n\n      <ion-title>\n        <div class=\"app-title\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"black\" width=\"52px\" height=\"52px\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\" />\n            <path\n              d=\"M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5l-2-2zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9z\" />\n            <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n          <span class=\"label\">Crotalus</span>\n        </div>\n      </ion-title>\n    </ion-toolbar>\n\n    <div class=\"search-area\" *ngIf=\"addSearchToHeader\">\n      <ion-input clearInput type=\"search\" name=\"search-value\" inputmode=\"search\" placeholder=\"Ingresa tu búsqueda\"\n        autocomplete=\"true\" [(ngModel)]=\"valueToSearch\" (keyup.enter)=\"search(true)\"></ion-input>\n      <ion-button (click)=\"search(true)\" fill=\"solid\" [appSearchTypeClass]=\"searchType\">\n        <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <app-search-type-selector *ngIf=\"addSearchToHeader\" [pristine]=\"pristine\" [searchType]=\"searchType\" (searchTypeChangeEvent)=\"setSearchType($event)\"></app-search-type-selector>\n  </ion-header>\n\n  <div id=\"container\" [class.center-content]=\"showNoRepos\">\n    <ion-menu side=\"end\" type=\"overlay\" menuId=\"licencesMenu\" contentId=\"sideMenu\" swipeGesture=\"false\"\n      (ionDidClose)=\"setMenuState(false)\" (ionDidOpen)=\"setMenuState(true)\" (ionWillOpen)=\"setMenuMarginTop()\">\n      <ion-toolbar>\n        <ion-title>Buscar por licencia:</ion-title>\n      </ion-toolbar>\n      <ion-content class=\"licenses-menu\" [appSearchTypeClass]=\"searchType\">\n        <ion-list>\n          <ion-item *ngFor=\"let license of licenses\">\n            <ion-checkbox [checked]=\"license.active\" [disabled]=\"disableLastActiveLicense && license.active\"\n              (ionChange)=\"updateActiveLicenses($event.detail.checked, license.value)\"></ion-checkbox>\n            <ion-label>\n              <img [src]=\"license.imagePath\" [alt]=\"license.value\">\n              <p>{{license.description}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"sideMenu\"></ion-router-outlet>\n\n    <div class=\"background\" [class.dimmed]=\"results && results.length\"></div>\n    <div class=\"first-search-indicator\">\n      <ion-spinner *ngIf=\"isSearching\" name=\"dots\"></ion-spinner>\n    </div>\n    <ion-spinner *ngIf=\"showSpinner; else contentTemplate\"></ion-spinner>\n\n\n    <ng-template #contentTemplate>\n\n      <ng-container *ngIf=\"showSearch\">\n        <div class=\"search-area\" [class.pristine]=\"pristine\" #searchBarWrapper>\n          <ion-input clearInput type=\"search\" name=\"search-value\" inputmode=\"search\" placeholder=\"Ingresa tu búsqueda\"\n            autocomplete=\"true\" [(ngModel)]=\"valueToSearch\" (keyup.enter)=\"search(true)\"></ion-input>\n          <ion-button (click)=\"search(true)\" fill=\"solid\" [appSearchTypeClass]=\"searchType\">\n            <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n            <span *ngIf=\"pristine\">Buscar</span>\n          </ion-button>\n        </div>\n  \n        <app-search-type-selector [pristine]=\"pristine\" [searchType]=\"searchType\" (searchTypeChangeEvent)=\"setSearchType($event)\"></app-search-type-selector>\n      </ng-container>\n\n\n      <div class=\"no-connected-repos\" *ngIf=\"showNoRepos\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>No hay repositorios conectados para realizar la búsqueda.</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>\n              Para conectar un repositorio debes ir a la configuración de repositorios de la aplicación. <br><br>\n            </p>\n            <ion-button [appSearchTypeClass]=\"searchType\" [routerLink]=\"['/settings/repositories']\">\n            Ir a repositorios\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ng-template>\n\n    <div class=\"no-results-message\" *ngIf=\"showNoResultsMessage\">\n      <ion-card>\n        <ion-card-title>\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        </ion-card-title>\n        <ion-card-header>\n          <ion-card-subtitle>No hay resultados para tu búsqueda.</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"results && results.length\" class=\"results\">\n\n      <ng-container [ngSwitch]=\"searchType\">\n\n        <app-image-search-results *ngSwitchCase=\"searchTypes.image\" [results]=\"results\"\n          (openDetails)=\"openDetails($event)\"></app-image-search-results>\n\n        <div class=\"video-results-wrapper\" *ngSwitchCase=\"searchTypes.video\">\n          <app-video-result-card *ngFor=\"let result of results\" [videoItem]=\"result\"\n            (openDetails)=\"openDetails(result)\"></app-video-result-card>\n        </div>\n\n        <div class=\"audio-results-wrapper\" *ngSwitchCase=\"searchTypes.audio\">\n          <app-audio-result-card *ngFor=\"let result of results\" [audioItem]=\"result\" (openDetails)=\"openDetails(result)\"\n            (playEvent)=\"playEvent($event)\"></app-audio-result-card>\n        </div>\n\n        <ng-container *ngSwitchCase=\"searchTypes.document\">\n          <app-document-result-card *ngFor=\"let result of results\" [itemInfo]=\"result\"\n            (openDetails)=\"openDetails(result)\"></app-document-result-card>\n        </ng-container>\n\n        <ng-container *ngSwitchDefault>\n          <app-general-result-card *ngFor=\"let result of results\" [itemInfo]=\"result\"\n            (openDetails)=\"openDetails(result)\" (playEvent)=\"playEvent($event)\" [didacticUnitResult]=\"searchType === searchTypes.didacticUnit\"></app-general-result-card>\n        </ng-container>\n\n      </ng-container>\n\n      <div class=\"no-more-results-message\" *ngIf=\"noMoreResults && !showNoResultsMessage\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>No hay más resultados.</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </div>\n\n      <ion-infinite-scroll *ngIf=\"results && results.length\" threshold=\"50px\" (ionInfinite)=\"bottomReached()\" [disabled]=\"noMoreResults\">\n        <ion-infinite-scroll-content loadingSpinner=\"dots\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/directives/hide-header.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/hide-header.directive.ts ***!
  \*****************************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let HideHeaderDirective = class HideHeaderDirective {
    constructor(renderer, domCtrl, element) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.element = element;
        this.lastY = 0;
        this.hideScrollSensitivity = 1;
        this.showScrollSensitivity = 15;
        this.safeTranslateYammount = 250;
        this.animationDuration = 400;
    }
    ngOnInit() {
        this.header = this.header.el;
        this.contentElement = this.element.nativeElement;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', `transform ${this.animationDuration}ms`);
        });
    }
    ngAfterViewChecked() {
        const searchBox = this.contentElement.querySelector('.search-area');
        if (searchBox && !this.searchBoxBottomPosition) {
            this.searchBoxBottomPosition = searchBox.offsetTop + searchBox.offsetHeight;
        }
    }
    onContentScroll($event) {
        if ($event.detail.scrollTop > (this.header.offsetHeight + this.searchBoxBottomPosition) &&
            $event.detail.scrollTop > this.lastY + this.hideScrollSensitivity) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'transform', `translateY(-${this.safeTranslateYammount}px)`);
            });
            setTimeout(() => {
                this.header.classList.add('already-hidden');
            }, this.animationDuration);
        }
        else if ($event.detail.scrollTop < this.lastY - this.showScrollSensitivity || $event.detail.scrollTop === 0) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'transform', 'translateY(0)');
            });
            setTimeout(() => {
                this.header.classList.remove('already-hidden');
            }, this.animationDuration);
        }
        this.lastY = $event.detail.scrollTop;
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HideHeaderDirective.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], HideHeaderDirective.prototype, "searchVisibleInHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HideHeaderDirective.prototype, "onContentScroll", null);
HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHideHeader]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], HideHeaderDirective);



/***/ }),

/***/ "./src/app/directives/search-type-class.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives/search-type-class.directive.ts ***!
  \***********************************************************/
/*! exports provided: SearchTypeClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTypeClassDirective", function() { return SearchTypeClassDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/search-type.enum */ "./src/app/models/search-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SearchTypeClassDirective = class SearchTypeClassDirective {
    // searchTypeClasses = {
    //   SearchTypes[SearchTypes.all]: 'all-type',
    //   SearchTypes[SearchTypes.audio]: 'audio-type',
    // };
    constructor(renderer, domCtrl, element) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.element = element;
        this.searchTypes = _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"];
    }
    ngOnChanges(changes) {
        if (changes.searchType.currentValue !== undefined) {
            this.setTypeClass();
        }
    }
    getTypeClass() {
        let targetClass;
        switch (this.searchType) {
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].all:
                targetClass = 'all-type';
                break;
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].image:
                targetClass = 'image-type';
                break;
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].video:
                targetClass = 'video-type';
                break;
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].audio:
                targetClass = 'audio-type';
                break;
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].document:
                targetClass = 'document-type';
                break;
            case _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"].didacticUnit:
                targetClass = 'didactic-unit-type';
                break;
            default:
                break;
        }
        return targetClass;
    }
    setTypeClass() {
        const classToSet = this.getTypeClass();
        if (!classToSet) {
            return;
        }
        if (this.lastClassSet) {
            this.domCtrl.write(() => {
                this.renderer.removeClass(this.element.nativeElement, this.lastClassSet);
            });
        }
        this.domCtrl.write(() => {
            this.renderer.addClass(this.element.nativeElement, classToSet);
            this.lastClassSet = classToSet;
        });
    }
};
SearchTypeClassDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('appSearchTypeClass'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SearchTypeClassDirective.prototype, "searchType", void 0);
SearchTypeClassDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[appSearchTypeClass]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], SearchTypeClassDirective);



/***/ }),

/***/ "./src/app/home/components/audio-result-card/audio-result-card.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/components/audio-result-card/audio-result-card.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: inline-block;\n  margin: 0 30px 30px;\n  max-width: 450px;\n}\n@media screen and (max-width : 575px) {\n  ion-card {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\nion-card-header {\n  padding: 18px 16px 8px;\n}\nion-card-header span.repository-name {\n  color: var(--ion-color-medium-tint);\n  font-size: 15px;\n  font-weight: 300;\n}\nion-card-header ion-card-title {\n  font-size: 18px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  margin-top: 2px;\n}\n.audio-player {\n  padding: 0 16px;\n}\np.description {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9hdWRpby1yZXN1bHQtY2FyZC9hdWRpby1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2F1ZGlvLXJlc3VsdC1jYXJkL2F1ZGlvLXJlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUxGO0lBTUksaUJBQUE7SUFDQSxrQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLHNCQUFBO0FDQUY7QURFRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDREo7QURLQTtFQUNFLGVBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9hdWRpby1yZXN1bHQtY2FyZC9hdWRpby1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJyZXNwb25zaXZlLWJyZWFrcG9pbnRzXCI7XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMzBweCAzMHB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuXG4gIEBtZWRpYSAjeyR4c21hbGx9IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMThweCAxNnB4IDhweDtcblxuICBzcGFuLnJlcG9zaXRvcnktbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IFxuICB9XG4gIFxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG59XG5cbi5hdWRpby1wbGF5ZXIge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbnAuZGVzY3JpcHRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyA6aG9zdCAuYXVkaW8tcGxheWVyIHtcbi8vICAgOjpuZy1kZWVwIG1hdC1iYXNpYy1hdWRpby1wbGF5ZXIge1xuLy8gICAgIC5tYXQtY2FyZCB7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci13cmFwcGVyIHtcbi8vICAgICAvLyAgIGxlZnQ6IDA7XG4vLyAgICAgLy8gfVxuXG4vLyAgICAgLm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLXRodW1iLFxuLy8gICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbi8vICAgICAgIC8vIGJvcmRlcjogMDtcbi8vICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgIC8vIHdpZHRoOiAxN3B4O1xuLy8gICAgICAgLy8gaGVpZ2h0OiAxN3B4O1xuLy8gICAgICAgLy8gYm90dG9tOiAtOHB4O1xuLy8gICAgICAgLy8gcmlnaHQ6IC05cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuLy8gICAgIH1cblxuLy8gICAgIC5tYXQtYnV0dG9uIHtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gICAgICAgJiAubmd4LWJhc2ljLWF1ZGlvLXBsYXllci1idXR0b24taGFuZGxlciB7XG4vLyAgICAgICAgIG1pbi13aWR0aDogNDhweDtcbi8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iLCJpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDMwcHggMzBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzVweCkge1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE4cHggMTZweCA4cHg7XG59XG5pb24tY2FyZC1oZWFkZXIgc3Bhbi5yZXBvc2l0b3J5LW5hbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxucC5kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/components/audio-result-card/audio-result-card.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/components/audio-result-card/audio-result-card.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AudioResultCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioResultCardComponent", function() { return AudioResultCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudioResultCardComponent = class AudioResultCardComponent {
    constructor() {
        this.openDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showPLayer = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('audioItem') && changes.audioItem.currentValue) {
            this.setaudioItemProperties();
        }
    }
    setaudioItemProperties() {
        this.resourceAboutUrl = this.audioItem.about;
        this.manifest = this.audioItem.manifest;
        this.metadata = this.audioItem.metadata;
        // this.alternateBaseRef = this.audioItem.id.split('/content/')[1];
        this.audioSource = this.originalFileUrl;
        // this.previewUrl = this.getVideoPreviewUrl();
    }
    get originalFileUrl() {
        if (this.manifest.hasOwnProperty('entrypoint')) {
            return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
        }
        if (this.manifest.hasOwnProperty('url') && this.manifest.url) {
            return this.manifest.url;
        }
        return `${this.resourceAboutUrl}/!/`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioResultCardComponent.prototype, "audioItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioResultCardComponent.prototype, "openDetails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioResultCardComponent.prototype, "playEvent", void 0);
AudioResultCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-result-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-result-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/audio-result-card/audio-result-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-result-card.component.scss */ "./src/app/home/components/audio-result-card/audio-result-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AudioResultCardComponent);



/***/ }),

/***/ "./src/app/home/components/base-audio-player/base-audio-player.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/components/base-audio-player/base-audio-player.ts ***!
  \************************************************************************/
/*! exports provided: BaseAudioPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAudioPlayer", function() { return BaseAudioPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class BaseAudioPlayer {
    constructor() {
        this.playEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPlaying = false;
        this.isLoading = false;
        this.smoothMarker = false;
        this.isMuted = false;
        this.currentTime = 0;
        this.duration = 0;
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (changes.hasOwnProperty('audioSrc') && changes.audioSrc.currentValue) {
    //     this.changeDetector.detectChanges();
    //     this.setAudio();
    //   }
    // }
    setAudio() {
        this._player = this.playerElementRef.nativeElement;
        // this._player.src = this.audioSrc;
        // this._player.src = 'https://freesound.org/data/previews/521/521275_2535988-lq.mp3';
        this._bindPlayerEvents();
    }
    play() {
        this._player.paused ? this._player.play() : this._player.pause();
        this.playEvent.emit(this._player);
    }
    toggleVolume() {
        this._player.muted = !this._player.muted;
    }
    seek(event) {
        this._player.currentTime = event.value;
    }
    stop() {
        if (!this._player.paused) {
            this._player.pause();
        }
        this.playEvent.emit(this._player);
        this._player.currentTime = 0;
    }
    _bindPlayerEvents() {
        this._player.addEventListener('playing', () => {
            this.isPlaying = true;
        });
        this._player.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this._player.addEventListener('timeupdate', () => {
            const roundedTime = Math.floor(this._player.currentTime);
            if (this.currentTime !== roundedTime) {
                this.currentTime = roundedTime;
            }
        });
        this._player.addEventListener('loadstart', () => {
            this.isLoading = true;
        });
        this._player.addEventListener('volumechange', () => {
            this.isMuted = !this.isMuted;
        });
        this._player.addEventListener('ended', () => {
            this.stop();
        });
        this._player.addEventListener('loadeddata', () => {
            this.isLoading = false;
            this.duration = Math.floor(this._player.duration) < 1 ? 1 : Math.floor(this._player.duration);
            setTimeout(() => {
                this.smoothMarker = true;
            }, 600);
        });
    }
    get durationFormatted() {
        if (this.duration >= 1) {
            const minutes = Math.floor(this.duration / 60);
            const seconds = this.duration - (minutes * 60);
            return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        }
        else {
            return '00:01';
        }
    }
    get currentTimeFormatted() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime - (minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BaseAudioPlayer.prototype, "audioSrc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BaseAudioPlayer.prototype, "playEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BaseAudioPlayer.prototype, "playerElementRef", void 0);


/***/ }),

/***/ "./src/app/home/components/details-modal/audio-player/audio-player.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/audio-player/audio-player.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player-wrapper {\n  margin: 55px 10px 10px;\n  padding: 0px 30px;\n}\n.player-wrapper .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n.player-wrapper .actions .main-action {\n  --border-radius: 300px;\n  margin-left: 16px;\n  margin-right: 8px;\n  width: 58px;\n  height: 58px;\n  font-size: 15px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --background: var(--audio-type-color);\n}\n.player-wrapper .actions .secondary-action {\n  --border-radius: 300px;\n  width: 38px;\n  height: 38px;\n  font-size: 16px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --color: var(--audio-type-color);\n}\n.player-wrapper .slider-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 2px;\n  -webkit-transition: opacity 200ms ease-in-out;\n  transition: opacity 200ms ease-in-out;\n}\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  min-width: 80px;\n  margin: 0 2px;\n}\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider.cdk-mouse-focused .mat-slider-thumb, .player-wrapper .slider-wrapper ::ng-deep .mat-slider.cdk-touch-focused .mat-slider-thumb,\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider .mat-slider-thumb {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n}\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider.mat-accent .mat-slider-thumb, .player-wrapper .slider-wrapper ::ng-deep .mat-slider.mat-slider-min-value .mat-slider-thumb, .player-wrapper .slider-wrapper ::ng-deep .mat-slider.mat-accent .mat-slider-track-fill {\n  background-color: var(--audio-type-color);\n  border-color: var(--audio-type-color);\n}\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider.mat-slider-disabled .mat-slider-thumb {\n  background-color: var(--ion-color-light-tint);\n  border-color: var(--ion-color-light-tint);\n}\n.player-wrapper .slider-wrapper ::ng-deep .mat-slider .mat-slider-track-background, .player-wrapper .slider-wrapper ::ng-deep .mat-slider:hover .mat-slider-track-background {\n  background-color: var(--ion-color-light-shade);\n}\n.player-wrapper .slider-wrapper.loading {\n  opacity: 0.5;\n}\n.player-wrapper .slider-wrapper ion-label {\n  margin: 0;\n  color: var(--ion-color-dark-tint) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDQU47QURHSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDRE47QURNRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0FDSko7QURPTTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDTFI7QURPUTs7RUFHRSw2QkFBQTtVQUFBLHFCQUFBO0FDTlY7QURTUTtFQUdFLHlDQUFBO0VBQ0EscUNBQUE7QUNUVjtBRFlRO0VBQ0UsNkNBQUE7RUFDQSx5Q0FBQTtBQ1ZWO0FEYVE7RUFFRSw4Q0FBQTtBQ1pWO0FENkJJO0VBQ0UsWUFBQTtBQzNCTjtBRDhCSTtFQUNFLFNBQUE7RUFDQSw0Q0FBQTtBQzVCTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyLXdyYXBwZXIge1xuXG4gIG1hcmdpbjogNTVweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBcbiAgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLm1haW4tYWN0aW9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgd2lkdGg6IDU4cHg7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gICAgfVxuICAgIFxuICAgIC5zZWNvbmRhcnktYWN0aW9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gICAgICB3aWR0aDogMzhweDtcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gICAgfVxuXG4gIH1cblxuICAuc2xpZGVyLXdyYXBwZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLm1hdC1zbGlkZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcblxuICAgICAgICAmLmNkay1tb3VzZS1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAmLmNkay10b3VjaC1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNik7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgICYubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgICYubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgICAgICY6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICYuc21vb3RoLW1hcmtlciB7XG4gICAgICAgIC8vICAgLm1hdC1zbGlkZXItdGh1bWItY29udGFpbmVyIHtcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBsaW5lYXI7XG4gICAgICAgIC8vICAgfVxuICAgIFxuICAgICAgICAvLyAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgICAgIC8vICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgbGluZWFyLCBiYWNrZ3JvdW5kLWNvbG9yIDFzIGxpbmVhcjtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgICYubG9hZGluZyB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufSIsIi5wbGF5ZXItd3JhcHBlciB7XG4gIG1hcmdpbjogNTVweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuLnBsYXllci13cmFwcGVyIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucGxheWVyLXdyYXBwZXIgLmFjdGlvbnMgLm1haW4tYWN0aW9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4ucGxheWVyLXdyYXBwZXIgLmFjdGlvbnMgLnNlY29uZGFyeS1hY3Rpb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tY29sb3I6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xufVxuLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAycHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucGxheWVyLXdyYXBwZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgMnB4O1xufVxuLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIuY2RrLW1vdXNlLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5wbGF5ZXItd3JhcHBlciAuc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLmNkay10b3VjaC1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG59XG4ucGxheWVyLXdyYXBwZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLCAucGxheWVyLXdyYXBwZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLW1pbi12YWx1ZSAubWF0LXNsaWRlci10aHVtYiwgLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4ucGxheWVyLXdyYXBwZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cbi5wbGF5ZXItd3JhcHBlciAuc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsIC5wbGF5ZXItd3JhcHBlciAuc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlci5sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnBsYXllci13cmFwcGVyIC5zbGlkZXItd3JhcHBlciBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/details-modal/audio-player/audio-player.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/audio-player/audio-player.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_audio_player_base_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../base-audio-player/base-audio-player */ "./src/app/home/components/base-audio-player/base-audio-player.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AudioPlayerComponent = class AudioPlayerComponent extends _base_audio_player_base_audio_player__WEBPACK_IMPORTED_MODULE_1__["BaseAudioPlayer"] {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('audioSrc') && changes.audioSrc.currentValue) {
            this.changeDetector.detectChanges();
            this.setAudio();
        }
    }
};
AudioPlayerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-audio-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/audio-player/audio-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-player.component.scss */ "./src/app/home/components/details-modal/audio-player/audio-player.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], AudioPlayerComponent);



/***/ }),

/***/ "./src/app/home/components/details-modal/details-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/components/details-modal/details-modal.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --top-content-offset: 56px;\n  --top-content-margin: 20px;\n}\n\n.title {\n  padding: 0px 4px 0px 8px;\n  position: fixed;\n}\n\n.title ion-icon.icon {\n  font-size: 26px;\n  height: 26px;\n  width: 26px;\n  line-height: 26px;\n  margin-right: 6px;\n}\n\n.title span:not(.icon) {\n  font-size: 18px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n}\n\n.title ion-buttons ion-button ion-icon {\n  font-size: 26px;\n  height: 26px;\n  width: 26px;\n  line-height: 26px;\n}\n\n.title h4,\n.title ion-icon {\n  color: var(--ion-color-crotalus);\n}\n\n.title.all-type h4,\n.title.all-type ion-icon {\n  color: var(--all-type-color);\n}\n\n.title.image-type h4,\n.title.image-type ion-icon {\n  color: var(--image-type-color);\n}\n\n.title.video-type h4,\n.title.video-type ion-icon {\n  color: var(--video-type-color);\n}\n\n.title.audio-type h4,\n.title.audio-type ion-icon {\n  color: var(--audio-type-color);\n}\n\n.title.document-type h4,\n.title.document-type ion-icon {\n  color: var(--document-type-color);\n}\n\n.title.didactic-unit-type h4,\n.title.didactic-unit-type ion-icon {\n  color: var(--didactic-unit-type-color);\n}\n\n.content {\n  padding-top: calc(var(--top-content-offset) + var(--top-content-margin));\n}\n\n.image-wrapper {\n  text-align: center;\n}\n\n.image-wrapper img {\n  margin: 20px auto 0;\n  max-width: 200px;\n}\n\n.info-wrapper {\n  -webkit-box-flex: 1;\n          flex: 1 0 250px;\n  padding: 20px 30px;\n}\n\n.info-wrapper .info-item {\n  padding-left: 8px;\n  margin-bottom: 20px;\n  max-width: 700px;\n}\n\n.info-wrapper .info-item h4 {\n  margin-left: -8px;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--details-title-color);\n  text-align: left;\n  font-family: \"Cabin Sketch\", cursive;\n}\n\n.info-wrapper .info-item.copyright p {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.info-wrapper .info-item.copyright .license-link {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  text-decoration: none;\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.info-wrapper .info-item.copyright .license-link:hover {\n  opacity: 0.6;\n}\n\n.info-wrapper .info-item.copyright .version-wrapper {\n  display: inline-block;\n  text-align: center;\n  margin: 0 5px 0 10px;\n  font-size: 0.8em;\n}\n\n.info-wrapper .contribution-item {\n  margin-bottom: 16px;\n  display: inline-block;\n  background: var(--ion-color-light-shade);\n  padding: 6px 10px;\n  border-radius: 4px;\n  text-align: right;\n  margin: 8px 16px 8px 0;\n  line-height: 18px;\n}\n\n.info-wrapper .contribution-item span.rol {\n  font-size: 0.95em;\n  font-style: oblique;\n  opacity: 0.9;\n}\n\n.info-wrapper .contribution-item span {\n  font-size: 0.75em;\n  opacity: 0.75;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  max-width: 400px;\n  margin-bottom: 30px;\n}\n\n.actions ion-button:first-child {\n  margin-right: 10px;\n}\n\n.actions ion-button.disabled {\n  opacity: 0.4;\n}\n\n.loading-indicator {\n  height: 100%;\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep .download-action-sheet .action-sheet-group:not(.action-sheet-group-cancel) button ion-icon {\n  visibility: hidden;\n  opacity: 0;\n}\n\n::ng-deep .download-action-sheet .action-sheet-icon {\n  margin: 0;\n  margin-right: 10px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2RldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2RldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fc2Fzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRElFO0VFWEEsZUZZcUI7RUVYckIsWUZXcUI7RUVWckIsV0ZVcUI7RUVUckIsaUJGU3FCO0VBQ25CLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VFdEJBLGVGdUJxQjtFRXRCckIsWUZzQnFCO0VFckJyQixXRnFCcUI7RUVwQnJCLGlCRm9CcUI7QUNFdkI7O0FEQ0U7O0VBRUUsZ0NBQUE7QUNDSjs7QURNTTs7RUFFRSw0Qkd0Q2M7QUZrQ3RCOztBREVNOztFQUVFLDhCR3RDYztBRnNDdEI7O0FERk07O0VBRUUsOEJHdENjO0FGMEN0Qjs7QUROTTs7RUFFRSw4Qkd0Q2M7QUY4Q3RCOztBRFZNOztFQUVFLGlDR3RDYztBRmtEdEI7O0FEZE07O0VBRUUsc0NHdENjO0FGc0R0Qjs7QURWQTtFQUNFLHdFQUFBO0FDYUY7O0FEVkE7RUFDRSxrQkFBQTtBQ2FGOztBRFhFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFRBO0VBQ0UsbUJBQUE7VUFBQSxlQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNZTjs7QURQTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDU1I7O0FETk07RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUVI7O0FETlE7RUFDRSxZQUFBO0FDUVY7O0FESk07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ01SOztBRERFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTjs7QURBSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0VOOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBREtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRkY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNKSjs7QURPRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2RldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwic2Fzcy12YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAtLXRvcC1jb250ZW50LW9mZnNldDogNTZweDtcbiAgLS10b3AtY29udGVudC1tYXJnaW46IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA0cHggMHB4IDhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIGlvbi1pY29uLmljb24ge1xuICAgIEBpbmNsdWRlIGljb24tc2l6ZSgyNnB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuXG4gIHNwYW46bm90KC5pY29uKSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgQGluY2x1ZGUgaWNvbi1zaXplKDI2cHgpO1xuICB9XG5cbiAgaDQsXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbiAgfVxuXG4gIEBlYWNoICRjbGFzcyxcbiAgJGNvbG9yIGluICRjb250ZW50LXR5cGUtY29sb3JzIHtcbiAgICAmLiN7JGNsYXNzfSB7XG5cbiAgICAgIGg0LFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXRvcC1jb250ZW50LW9mZnNldCkgKyB2YXIoLS10b3AtY29udGVudC1tYXJnaW4pKTtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuLmluZm8td3JhcHBlciB7XG4gIGZsZXg6IDEgMCAyNTBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuXG4gIC5pbmZvLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0tZGV0YWlscy10aXRsZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gICAgfVxuXG4gICAgJi5jb3B5cmlnaHQge1xuXG4gICAgICBwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGljZW5zZS1saW5rIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC52ZXJzaW9uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRyaWJ1dGlvbi1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDhweCAxNnB4IDhweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gICAgc3Bhbi5yb2wge1xuICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIGlvbi1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIGlvbi1idXR0b24uZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG46Om5nLWRlZXAgLmRvd25sb2FkLWFjdGlvbi1zaGVldCB7XG4gIC5hY3Rpb24tc2hlZXQtZ3JvdXA6bm90KC5hY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsKSBidXR0b24gaW9uLWljb24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmFjdGlvbi1zaGVldC1pY29uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS10b3AtY29udGVudC1vZmZzZXQ6IDU2cHg7XG4gIC0tdG9wLWNvbnRlbnQtbWFyZ2luOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAwcHggNHB4IDBweCA4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi50aXRsZSBpb24taWNvbi5pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4udGl0bGUgc3Bhbjpub3QoLmljb24pIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4udGl0bGUgaDQsXG4udGl0bGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbn1cbi50aXRsZS5hbGwtdHlwZSBoNCxcbi50aXRsZS5hbGwtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG4udGl0bGUuaW1hZ2UtdHlwZSBoNCxcbi50aXRsZS5pbWFnZS10eXBlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpO1xufVxuLnRpdGxlLnZpZGVvLXR5cGUgaDQsXG4udGl0bGUudmlkZW8tdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbn1cbi50aXRsZS5hdWRpby10eXBlIGg0LFxuLnRpdGxlLmF1ZGlvLXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4udGl0bGUuZG9jdW1lbnQtdHlwZSBoNCxcbi50aXRsZS5kb2N1bWVudC10eXBlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpO1xufVxuLnRpdGxlLmRpZGFjdGljLXVuaXQtdHlwZSBoNCxcbi50aXRsZS5kaWRhY3RpYy11bml0LXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS10b3AtY29udGVudC1vZmZzZXQpICsgdmFyKC0tdG9wLWNvbnRlbnQtbWFyZ2luKSk7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltYWdlLXdyYXBwZXIgaW1nIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmluZm8td3JhcHBlciB7XG4gIGZsZXg6IDEgMCAyNTBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuLmluZm8td3JhcHBlciAuaW5mby1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG4uaW5mby13cmFwcGVyIC5pbmZvLWl0ZW0gaDQge1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRpdGxlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG59XG4uaW5mby13cmFwcGVyIC5pbmZvLWl0ZW0uY29weXJpZ2h0IHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5mby13cmFwcGVyIC5pbmZvLWl0ZW0uY29weXJpZ2h0IC5saWNlbnNlLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5pbmZvLXdyYXBwZXIgLmluZm8taXRlbS5jb3B5cmlnaHQgLmxpY2Vuc2UtbGluazpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5pbmZvLXdyYXBwZXIgLmluZm8taXRlbS5jb3B5cmlnaHQgLnZlcnNpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgNXB4IDAgMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5pbmZvLXdyYXBwZXIgLmNvbnRyaWJ1dGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiA4cHggMTZweCA4cHggMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uaW5mby13cmFwcGVyIC5jb250cmlidXRpb24taXRlbSBzcGFuLnJvbCB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uaW5mby13cmFwcGVyIC5jb250cmlidXRpb24taXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYWN0aW9ucyBpb24tYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmFjdGlvbnMgaW9uLWJ1dHRvbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCAuZG93bmxvYWQtYWN0aW9uLXNoZWV0IC5hY3Rpb24tc2hlZXQtZ3JvdXA6bm90KC5hY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsKSBidXR0b24gaW9uLWljb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLmRvd25sb2FkLWFjdGlvbi1zaGVldCAuYWN0aW9uLXNoZWV0LWljb24ge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogMDtcbn0iLCJAbWl4aW4gaWNvbi1zaXplKCAkc2l6ZTogMjRweCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICB3aWR0aDogJHNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbn1cblxuQG1peGluIGljb24tbGFiZWwtY29sb3IoJGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpIHtcbiAgaW9uLWxhYmVsLCBcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbn0iLCIkY29udGVudC10eXBlLWNvbG9yczogKFxuICBcImFsbC10eXBlXCI6IHZhcigtLWFsbC10eXBlLWNvbG9yKSxcbiAgXCJpbWFnZS10eXBlXCI6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpLFxuICBcInZpZGVvLXR5cGVcIjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvciksXG4gIFwiYXVkaW8tdHlwZVwiOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKSxcbiAgXCJkb2N1bWVudC10eXBlXCI6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpLFxuICBcImRpZGFjdGljLXVuaXQtdHlwZVwiOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpLFxuICApO1xuXG4gICRhbmltYXRpb24tZHVyYXRpb246IDQ1MG1zOyJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/details-modal/details-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/components/details-modal/details-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModalComponent", function() { return DetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/download.service */ "./src/app/services/download.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers.ts");
/* harmony import */ var src_app_models_search_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/search-type.enum */ "./src/app/models/search-type.enum.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");











let DetailsModalComponent = class DetailsModalComponent {
    constructor(searchService, modalController, socialSharing, actionSheetController, downloadService, fileOpener, toastController, hostElement) {
        this.searchService = searchService;
        this.modalController = modalController;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this.downloadService = downloadService;
        this.fileOpener = fileOpener;
        this.toastController = toastController;
        this.hostElement = hostElement;
        this.searchTypes = src_app_models_search_type_enum__WEBPACK_IMPORTED_MODULE_6__["SearchTypes"];
        this.alternates = ['original'];
        this.showTopInfo = false;
        this.showVideoError = false;
        this.MAX_COMPANY_LABEL_LENGTH = 30;
        this.currentToast = null;
        this.onShareError = (msg) => {
            console.log("Sharing failed with message: " + msg);
        };
    }
    ngOnInit() {
        this.searchService.getResourceAbout(this.itemAboutString).subscribe((response) => {
            this.itemData = response;
            this.assignLocalVariables();
        });
    }
    ngAfterViewChecked() {
        if (!this.headerHeight) {
            this.headerHeight = this.headerElm.el.offsetHeight;
            if (this.headerHeight && this.headerHeight !== 56) {
                this.hostElement.nativeElement.style.setProperty('--top-content-offset', `${this.headerHeight}px`);
            }
        }
    }
    assignLocalVariables() {
        const metadata = this.itemData.metadata;
        this.alternateBaseRef = this.itemData.id.split('/content/')[1];
        this.manifest = this.itemData.manifest;
        this.format = metadata.technical.format;
        this.itemType = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getResourceType"])(this.itemData);
        this.title = metadata.general.title.none;
        this.titleIcon = _helpers__WEBPACK_IMPORTED_MODULE_5__["getItemTypeIcon"](this.itemType);
        this.description = metadata.general.description.none;
        this.imageSrc = `${this.itemAboutString}/!/.alternate/${this.alternateBaseRef}/${this.manifest.alternate[1]}`;
        this.keywords = metadata.general.keywords.none;
        this.contributions = metadata.lifecycle && metadata.lifecycle.contribution;
        this.publishDate = this.manifest.lastpublished.split('T')[0];
        this.rights = metadata.rights;
        this.social = this.itemData.social;
        this.entrypointName = this.manifest.hasOwnProperty('entrypoint') ? this.manifest.entrypoint.split('.')[0] : '';
        this.alternates = [...this.alternates, ...this.manifest.alternate];
        if (this.itemType === this.searchTypes.audio) {
            this.audioSrc = this.originalFileUrl;
        }
    }
    cropContributionCompanyLabel(company) {
        return company.length > this.MAX_COMPANY_LABEL_LENGTH;
    }
    closeModal() {
        this.dismissCurrentToast();
        this.modalController.dismiss();
    }
    getResourceDownloadUrl(size) {
        if (size === 'original') {
            return this.originalFileUrl;
        }
        else {
            return `${this.itemAboutString}/!/.alternate/${this.alternateBaseRef}/${size}`;
        }
    }
    getSizeLabel(size) {
        return _helpers__WEBPACK_IMPORTED_MODULE_5__["getSizeLabel"](size);
    }
    share() {
        const options = {
            message: 'Hola!!, mira este recurso:',
            url: this.itemAboutString,
        };
        this.socialSharing.shareWithOptions(options)
            // .then(result => { this.onShareSuccess(result) })
            .catch(error => { this, this.onShareError(error); });
    }
    download(resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const fileNameInUrl = resource.url.slice(resource.url.lastIndexOf('/') + 1);
            let fileName = this.manifest.title ? this.manifest.title.slice(0, this.manifest.title.lastIndexOf('.')) : this.title;
            let fileNameExt;
            if (fileNameInUrl) {
                fileNameExt = fileNameInUrl.split('.').pop();
            }
            else {
                fileNameExt = this.format.split('/')[1];
            }
            return this.downloadService.download(resource, fileName, fileNameExt, this.itemType);
        });
    }
    openPdf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const resource = {
                name: '',
                url: this.getResourceDownloadUrl('original'),
            };
            const downloadedFile = yield this.download(resource);
            if (downloadedFile === 'error') {
                this.presentToast('Error en la descarga. Inténtalo de nuevo', 2000);
                return;
            }
            this.fileOpener.open(downloadedFile.toURL(), 'application/pdf')
                .then(result => { console.log(' file opened OK'); })
                .catch(error => { console.error(error); });
        });
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.format === 'text/html') {
                this.presentToast('Este tipo de recurso no está disponible para descarga', 2000);
                return;
            }
            if (!this.downloadItems) {
                this.downloadItems = this.alternates.map(alternate => ({
                    text: this.getSizeLabel(alternate),
                    url: this.getResourceDownloadUrl(alternate),
                    icon: 'chevron-forward',
                    handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        const downloadResult = yield this.download({ alternateName: this.getSizeLabel(alternate), url: this.getResourceDownloadUrl(alternate) });
                        if (downloadResult === 'error') {
                            this.presentToast('Error en la descarga. Inténtalo de nuevo', 2000);
                        }
                    })
                }));
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Descargas por tamaño',
                cssClass: 'download-action-sheet',
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close',
                        handler: () => {
                            console.warn('Download cancelled');
                        }
                    }, ...this.downloadItems]
            });
            yield actionSheet.present();
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
    get copyrightImageUrl() {
        if (this.rights.copyright === 'cc0') {
            return 'https://licensebuttons.net/l/zero/1.0/88x31.png';
        }
        else {
            const [license, version] = this.rights.copyright.split('cc ')[1].split(' ');
            return `https://licensebuttons.net/l/${license}/${version}/88x31.png`;
        }
    }
    get copyrightVersion() {
        if (this.rights.copyright === 'cc0') {
            return false;
        }
        else {
            return this.rights.copyright.split(' ').pop();
        }
    }
    // TODO: Unify all getOriginalFile used within multiple components.
    get originalFileUrl() {
        if (this.manifest.hasOwnProperty('entrypoint')) {
            return `${this.itemAboutString}/!/${this.manifest.entrypoint}`;
        }
        if (this.manifest.hasOwnProperty('url') && this.manifest.url) {
            return this.manifest.url;
        }
        return `${this.itemAboutString}/!/`;
    }
    get showDocumentPlayer() {
        return (this.format === 'text/html' || this.format === 'application/pdf');
    }
};
DetailsModalComponent.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DetailsModalComponent.prototype, "itemAboutString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('detailsHeader', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DetailsModalComponent.prototype, "headerElm", void 0);
DetailsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/details-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-modal.component.scss */ "./src/app/home/components/details-modal/details-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], DetailsModalComponent);



/***/ }),

/***/ "./src/app/home/components/details-modal/html-player/html-player.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/html-player/html-player.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 200px;\n  height: 200px;\n  border-radius: 200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 20px auto 0;\n  background-color: rgba(var(--ion-color-light-tint-rgb), 0.7);\n}\n.wrapper ion-button {\n  --border-radius: 200px;\n  --padding-top: 18px;\n  --padding-bottom: 18px;\n  --padding-start: 14px;\n  --padding-end: 14px;\n  margin: 10px auto;\n  --background: var(--document-type-color);\n  height: 64px;\n  width: 64px;\n}\n.wrapper ion-label {\n  color: var(--document-type-color);\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2h0bWwtcGxheWVyL2h0bWwtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvZGV0YWlscy1tb2RhbC9odG1sLXBsYXllci9odG1sLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBSGE7RUFJYixhQUphO0VBS2Isb0JBTGE7RUFNYixvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUNERjtBREdFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKO0FESUU7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvZGV0YWlscy1tb2RhbC9odG1sLXBsYXllci9odG1sLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3cmFwcGVyLXNpemU6IDIwMHB4O1xuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAkd3JhcHBlci1zaXplO1xuICBoZWlnaHQ6ICR3cmFwcGVyLXNpemU7XG4gIGJvcmRlci1yYWRpdXM6ICR3cmFwcGVyLXNpemU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludC1yZ2IpLCAwLjcpO1xuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogI3skd3JhcHBlci1zaXplfTtcbiAgICAtLXBhZGRpbmctdG9wOiAxOHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gIH1cbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LXJnYiksIDAuNyk7XG59XG4ud3JhcHBlciBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMThweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogNjRweDtcbn1cbi53cmFwcGVyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/components/details-modal/html-player/html-player.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/html-player/html-player.component.ts ***!
  \************************************************************************************/
/*! exports provided: HtmlPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlPlayerComponent", function() { return HtmlPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let HtmlPlayerComponent = class HtmlPlayerComponent {
    constructor() {
        this.openPdf = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enablePlayer = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('url') && changes.url.currentValue !== undefined) {
            this.enablePlayer = true;
        }
    }
    openUrlInBrowser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Browser.open({ url: this.url });
        });
    }
    openDocument() {
        if (this.format === 'application/pdf') {
            this.openPdf.emit();
        }
        else {
            this.openUrlInBrowser();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HtmlPlayerComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HtmlPlayerComponent.prototype, "format", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HtmlPlayerComponent.prototype, "openPdf", void 0);
HtmlPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-html-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./html-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/html-player/html-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./html-player.component.scss */ "./src/app/home/components/details-modal/html-player/html-player.component.scss")).default]
    })
], HtmlPlayerComponent);



/***/ }),

/***/ "./src/app/home/components/details-modal/image-player/image-player.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/image-player/image-player.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-player {\n  margin: 25px auto 15px;\n  max-width: 90%;\n  border-radius: 4px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2ltYWdlLXBsYXllci9pbWFnZS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2ltYWdlLXBsYXllci9pbWFnZS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvZGV0YWlscy1tb2RhbC9pbWFnZS1wbGF5ZXIvaW1hZ2UtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXBsYXllciB7XG4gIG1hcmdpbjogMjVweCBhdXRvIDE1cHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59IiwiLmltYWdlLXBsYXllciB7XG4gIG1hcmdpbjogMjVweCBhdXRvIDE1cHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/home/components/details-modal/image-player/image-player.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/image-player/image-player.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImagePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePlayerComponent", function() { return ImagePlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImagePlayerComponent = class ImagePlayerComponent {
    constructor() { }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('imageItem') && changes.imageItem.currentValue) {
            this.setImageItemProperties();
        }
    }
    setImageItemProperties() {
        this.resourceAboutUrl = this.imageItem.about;
        this.manifest = this.imageItem.manifest;
        this.altText = this.imageItem.metadata.general.title.none;
        this.alternateBaseRef = this.imageItem.id.split('/content/')[1];
        const smallAlternateName = this.getSmallAlternateFileName();
        this.imageSrc = smallAlternateName ?
            `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${smallAlternateName}` : this.originalFileUrl;
        this.originalFileRequested = !smallAlternateName;
    }
    imageLoadError() {
        if (!this.originalFileRequested) {
            this.imageSrc = this.originalFileUrl;
            this.originalFileRequested = true;
        }
        else {
            // TODO: show image load error
            console.warn('There was an error loading the image');
        }
    }
    getSmallAlternateFileName() {
        const smallAlternate = this.manifest.alternate.filter(alternate => alternate.includes('small'))[0];
        return smallAlternate ? smallAlternate : '';
    }
    get originalFileUrl() {
        if (this.manifest.hasOwnProperty('entrypoint')) {
            return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
        }
        if (this.manifest.hasOwnProperty('url') && this.manifest.url) {
            return this.manifest.url;
        }
        return `${this.resourceAboutUrl}/!/`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagePlayerComponent.prototype, "imageItem", void 0);
ImagePlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/image-player/image-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-player.component.scss */ "./src/app/home/components/details-modal/image-player/image-player.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ImagePlayerComponent);



/***/ }),

/***/ "./src/app/home/components/details-modal/video-player/video-player.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/video-player/video-player.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-player-wrapper {\n  width: 100%;\n  padding: 16px 0;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  border-radius: 4px;\n}\n\nvideo,\n.video-error-message {\n  max-width: 700px;\n  width: 96%;\n  margin: 0 auto;\n  border-radius: 4px;\n}\n\nvideo.show-error-msg {\n  max-height: 250px;\n}\n\n.video-error-message {\n  position: absolute;\n  max-width: 700px;\n  color: #FFF;\n  font-size: 22px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 5px 5px;\n  background: rgba(0, 0, 0, 0.8);\n  top: 16px;\n  bottom: 16px;\n}\n\n@media screen and (max-width : 767px) {\n  .video-error-message {\n    font-size: 18px;\n  }\n}\n\n.video-error-message .main {\n  font-size: 1.37em;\n}\n\n.video-error-message .main ion-icon {\n  font-size: 49.32px;\n  height: 49.32px;\n  width: 49.32px;\n  line-height: 49.32px;\n  margin-right: 6px;\n  vertical-align: bottom;\n}\n\n.loading-video {\n  -webkit-animation: loading 1800ms linear infinite;\n          animation: loading 1800ms linear infinite;\n  width: 50%;\n  display: block;\n  margin: 0 auto;\n  border-radius: 4px;\n  max-width: 100%;\n  max-height: 350px;\n}\n\n@-webkit-keyframes loading {\n  from {\n    opacity: 0.55;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.55;\n  }\n}\n\n@keyframes loading {\n  from {\n    opacity: 0.55;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.55;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQXRDOEI7RUF1QzlCLFlBdkM4QjtBQ2tDaEM7O0FET0U7RUFoQkY7SUFrQkksZUFBQTtFQ0xGO0FBQ0Y7O0FET0U7RUFDRSxpQkFBQTtBQ0xKOztBRE9JO0VFbkRGLGtCRm9EdUI7RUVuRHZCLGVGbUR1QjtFRWxEdkIsY0ZrRHVCO0VFakR2QixvQkZpRHVCO0VBQ25CLGlCQUFBO0VBQ0Esc0JBQUE7QUNGTjs7QURPQTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0U7SUFDRSxhQUFBO0VDSkY7RURNQTtJQUNFLFlBQUE7RUNKRjtFRE1BO0lBQ0UsYUFBQTtFQ0pGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLGFBQUE7RUNKRjtFRE1BO0lBQ0UsWUFBQTtFQ0pGO0VETUE7SUFDRSxhQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicmVzcG9uc2l2ZS1icmVha3BvaW50c1wiO1xuQGltcG9ydCBcIm1peGluc1wiO1xuXG4kdmlkZW8tcGxheWVyLXZlcnRpY2FsLXBhZGRpbmc6IDE2cHg7XG5cbi52aWRlby1wbGF5ZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkdmlkZW8tcGxheWVyLXZlcnRpY2FsLXBhZGRpbmcgMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxudmlkZW8sXG4udmlkZW8tZXJyb3ItbWVzc2FnZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnZpZGVvLnNob3ctZXJyb3ItbXNnIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG5cbi52aWRlby1lcnJvci1tZXNzYWdlIHtcbiAgJGZvbnQtc2l6ZTogMjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogI3skZm9udC1zaXplICsgJ3B4J307XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XG4gIHRvcDogJHZpZGVvLXBsYXllci12ZXJ0aWNhbC1wYWRkaW5nO1xuICBib3R0b206ICR2aWRlby1wbGF5ZXItdmVydGljYWwtcGFkZGluZztcblxuICBAbWVkaWEgI3skc21hbGx9IHtcbiAgICAkZm9udC1zaXplOiAxODtcbiAgICBmb250LXNpemU6ICN7JGZvbnQtc2l6ZSArICdweCd9O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGZvbnQtc2l6ZTogMS4zN2VtO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgQGluY2x1ZGUgaWNvbi1zaXplKCN7KDIuNzQgKiAkZm9udC1zaXplKSArICdweCd9KTtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctdmlkZW8ge1xuICBhbmltYXRpb246IGxvYWRpbmcgMTgwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNTU7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuNTU7XG4gIH1cbn0iLCIudmlkZW8tcGxheWVyLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG52aWRlbyxcbi52aWRlby1lcnJvci1tZXNzYWdlIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxudmlkZW8uc2hvdy1lcnJvci1tc2cge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cblxuLnZpZGVvLWVycm9yLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRvcDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XG4gIC52aWRlby1lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi52aWRlby1lcnJvci1tZXNzYWdlIC5tYWluIHtcbiAgZm9udC1zaXplOiAxLjM3ZW07XG59XG4udmlkZW8tZXJyb3ItbWVzc2FnZSAubWFpbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDkuMzJweDtcbiAgaGVpZ2h0OiA0OS4zMnB4O1xuICB3aWR0aDogNDkuMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ5LjMycHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4ubG9hZGluZy12aWRlbyB7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAxODAwbXMgbGluZWFyIGluZmluaXRlO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgfVxufSIsIkBtaXhpbiBpY29uLXNpemUoICRzaXplOiAyNHB4KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGhlaWdodDogJHNpemU7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xufVxuXG5AbWl4aW4gaWNvbi1sYWJlbC1jb2xvcigkY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkge1xuICBpb24tbGFiZWwsIFxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/details-modal/video-player/video-player.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/details-modal/video-player/video-player.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoPlayerComponent = class VideoPlayerComponent {
    constructor() {
        this.showVideoError = false;
        this.videoLoaded = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('videoItem') && changes.videoItem.currentValue) {
            this.setVideoProperties();
        }
    }
    setVideoProperties() {
        this.resourceAboutUrl = this.videoItem.about;
        this.manifest = this.videoItem.manifest;
        this.alternateBaseRef = this.videoItem.id.split('/content/')[1];
        this.format = this.videoItem.metadata.technical.format;
        const alternateAvailable = this.getVideoAlternate();
        this.videoSrc = alternateAvailable ?
            `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${alternateAvailable}#t=0.1` : `${this.originalFileUrl}#t=0.1`;
    }
    getVideoAlternate() {
        let alternateAvailable = this.manifest.alternate.filter(alternate => alternate.includes('small'))[0];
        if (!alternateAvailable) {
            alternateAvailable = this.manifest.alternate.filter(alternate => alternate.includes('medium'))[0];
        }
        return alternateAvailable ? alternateAvailable : '';
    }
    videoDataReady() {
        this.videoLoaded = true;
    }
    handleVideoError() {
        this.videoLoaded = true;
        setTimeout(() => {
            this.showVideoError = true;
        }, 800);
    }
    get originalFileUrl() {
        if (this.manifest.hasOwnProperty('entrypoint')) {
            return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
        }
        if (this.manifest.hasOwnProperty('url') && this.manifest.url) {
            return this.manifest.url;
        }
        return `${this.resourceAboutUrl}/!/`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VideoPlayerComponent.prototype, "videoItem", void 0);
VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/details-modal/video-player/video-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-player.component.scss */ "./src/app/home/components/details-modal/video-player/video-player.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoPlayerComponent);



/***/ }),

/***/ "./src/app/home/components/document-result-card/document-result-card.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/components/document-result-card/document-result-card.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-bottom: 25px;\n  padding-top: 5px;\n}\n\n.top-info-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top-info-bar .repository-name {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  text-align: left;\n  color: var(--ion-color-medium-tint);\n  margin-left: 8px;\n}\n\n.top-info-bar ion-chip {\n  border-radius: 4px;\n  color: #fff;\n  padding: 3px 6px;\n  line-height: 1;\n  height: 18px;\n  margin-left: 8px;\n  --background: var(--document-type-color);\n}\n\nion-card-header {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-card-title {\n  font-size: 18px;\n  padding-top: 10px;\n  padding-bottom: 14px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  letter-spacing: 0.03em;\n}\n\nion-card-content {\n  font-size: 15px;\n  padding-bottom: 12px;\n}\n\np.description {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\np.keywords {\n  margin-top: 12px;\n  margin-left: 12px;\n  font-size: 13px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kb2N1bWVudC1yZXN1bHQtY2FyZC9kb2N1bWVudC1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2RvY3VtZW50LXJlc3VsdC1jYXJkL2RvY3VtZW50LXJlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGRjs7QURJRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUNISjs7QURPQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kb2N1bWVudC1yZXN1bHQtY2FyZC9kb2N1bWVudC1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJyZXNwb25zaXZlLWJyZWFrcG9pbnRzXCI7XG5AaW1wb3J0IFwic2Fzcy12YXJpYWJsZXNcIjtcblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udG9wLWluZm8tYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5yZXBvc2l0b3J5LW5hbWUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1jaGlwIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogM3B4IDZweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpO1xuICB9XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxucC5kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbnAua2V5d29yZHMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnRvcC1pbmZvLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtaW5mby1iYXIgLnJlcG9zaXRvcnktbmFtZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG5wLmRlc2NyaXB0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxucC5rZXl3b3JkcyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/components/document-result-card/document-result-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/document-result-card/document-result-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DocumentResultCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentResultCardComponent", function() { return DocumentResultCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DocumentResultCardComponent = class DocumentResultCardComponent {
    constructor() {
        this.openDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentResultCardComponent.prototype, "itemInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentResultCardComponent.prototype, "openDetails", void 0);
DocumentResultCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-result-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-result-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/document-result-card/document-result-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-result-card.component.scss */ "./src/app/home/components/document-result-card/document-result-card.component.scss")).default]
    })
], DocumentResultCardComponent);



/***/ }),

/***/ "./src/app/home/components/general-result-card/general-result-card.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/general-result-card/general-result-card.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-bottom: 25px;\n}\n\n.top-info-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top-info-bar .repository-name {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  text-align: center;\n  color: var(--ion-color-medium-tint);\n  padding-right: 80px;\n}\n\n.top-info-bar ion-chip {\n  color: var(--ion-color-crotalus);\n  border-color: var(--ion-color-crotalus);\n}\n\n.top-info-bar ion-chip ion-icon {\n  color: var(--ion-color-crotalus);\n}\n\n.top-info-bar ion-chip.all-type {\n  color: var(--all-type-color);\n  border-color: var(--all-type-color);\n}\n\n.top-info-bar ion-chip.all-type ion-icon {\n  color: var(--all-type-color);\n}\n\n.top-info-bar ion-chip.image-type {\n  color: var(--image-type-color);\n  border-color: var(--image-type-color);\n}\n\n.top-info-bar ion-chip.image-type ion-icon {\n  color: var(--image-type-color);\n}\n\n.top-info-bar ion-chip.video-type {\n  color: var(--video-type-color);\n  border-color: var(--video-type-color);\n}\n\n.top-info-bar ion-chip.video-type ion-icon {\n  color: var(--video-type-color);\n}\n\n.top-info-bar ion-chip.audio-type {\n  color: var(--audio-type-color);\n  border-color: var(--audio-type-color);\n}\n\n.top-info-bar ion-chip.audio-type ion-icon {\n  color: var(--audio-type-color);\n}\n\n.top-info-bar ion-chip.document-type {\n  color: var(--document-type-color);\n  border-color: var(--document-type-color);\n}\n\n.top-info-bar ion-chip.document-type ion-icon {\n  color: var(--document-type-color);\n}\n\n.top-info-bar ion-chip.didactic-unit-type {\n  color: var(--didactic-unit-type-color);\n  border-color: var(--didactic-unit-type-color);\n}\n\n.top-info-bar ion-chip.didactic-unit-type ion-icon {\n  color: var(--didactic-unit-type-color);\n}\n\n.card-content-column {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  max-width: 100%;\n}\n\n.card-content-column ion-card-header {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.card-content-column ion-card-title {\n  font-size: 18px;\n  padding-top: 10px;\n  padding-bottom: 14px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  letter-spacing: 0.03em;\n}\n\n.card-content-column ion-card-content {\n  font-size: 15px;\n}\n\n@media screen and (max-width : 575px) {\n  .card-content-column ion-card-content {\n    padding-bottom: 0;\n  }\n}\n\np.description {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\np.keywords {\n  margin-top: 12px;\n  margin-left: 12px;\n  font-size: 13px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.card-thumbnail-column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.card-thumbnail-column ion-card-content {\n  padding-top: 0;\n  padding-right: 8px;\n}\n\n.card-thumbnail-column img {\n  max-width: 150px;\n  min-width: 80px;\n  max-height: 150px;\n  border-radius: 4px;\n  margin: 0 auto;\n}\n\n@media screen and (max-width : 575px) {\n  .card-thumbnail-column {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n  .card-thumbnail-column ion-row {\n    height: 138px;\n    width: 100%;\n  }\n  .card-thumbnail-column p.keywords {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n  }\n  .card-thumbnail-column img {\n    max-width: 128px;\n    max-height: 128px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9nZW5lcmFsLXJlc3VsdC1jYXJkL2dlbmVyYWwtcmVzdWx0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9nZW5lcmFsLXJlc3VsdC1jYXJkL2dlbmVyYWwtcmVzdWx0LWNhcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fc2Fzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZGOztBRElFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDSEo7O0FES0k7RUFDRSxnQ0FBQTtBQ0hOOztBRFFNO0VBQ0UsNEJFOUJjO0VGK0JkLG1DRS9CYztBRHlCdEI7O0FEUVE7RUFDRSw0QkVsQ1k7QUQ0QnRCOztBRENNO0VBQ0UsOEJFOUJjO0VGK0JkLHFDRS9CYztBRGdDdEI7O0FEQ1E7RUFDRSw4QkVsQ1k7QURtQ3RCOztBRE5NO0VBQ0UsOEJFOUJjO0VGK0JkLHFDRS9CYztBRHVDdEI7O0FETlE7RUFDRSw4QkVsQ1k7QUQwQ3RCOztBRGJNO0VBQ0UsOEJFOUJjO0VGK0JkLHFDRS9CYztBRDhDdEI7O0FEYlE7RUFDRSw4QkVsQ1k7QURpRHRCOztBRHBCTTtFQUNFLGlDRTlCYztFRitCZCx3Q0UvQmM7QURxRHRCOztBRHBCUTtFQUNFLGlDRWxDWTtBRHdEdEI7O0FEM0JNO0VBQ0Usc0NFOUJjO0VGK0JkLDZDRS9CYztBRDREdEI7O0FEM0JRO0VBQ0Usc0NFbENZO0FEK0R0Qjs7QUR0QkE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxlQUFBO0FDeUJGOztBRHZCRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3lCSjs7QUR0QkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ3dCSjs7QURyQkU7RUFDRSxlQUFBO0FDdUJKOztBRHJCSTtFQUhGO0lBSUksaUJBQUE7RUN3Qko7QUFDRjs7QURwQkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ3VCRjs7QURwQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDdUJGOztBRHBCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDdUJGOztBRHBCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3NCSjs7QURuQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3FCSjs7QURsQkU7RUFuQkY7SUFvQkkseUJBQUE7WUFBQSw4QkFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7RUNxQkY7RURuQkU7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQ3FCSjtFRGxCRTtJQUNFLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtJQUNBLDRCQUFBO0VDb0JKO0VEakJFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQ21CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2dlbmVyYWwtcmVzdWx0LWNhcmQvZ2VuZXJhbC1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJyZXNwb25zaXZlLWJyZWFrcG9pbnRzXCI7XG5AaW1wb3J0IFwic2Fzcy12YXJpYWJsZXNcIjtcblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udG9wLWluZm8tYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5yZXBvc2l0b3J5LW5hbWUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1jcm90YWx1cyk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbiAgICB9XG5cblxuICAgIEBlYWNoICRjbGFzcywgJGNvbG9yIGluICRjb250ZW50LXR5cGUtY29sb3JzIHtcbiAgICAgICYuI3skY2xhc3N9IHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtY29udGVudC1jb2x1bW4ge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICBAbWVkaWEgI3skeHNtYWxsfSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxucC5kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbnAua2V5d29yZHMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uY2FyZC10aHVtYm5haWwtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAjeyR4c21hbGx9IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBpb24tcm93IHtcbiAgICAgIGhlaWdodDogMTM4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBwLmtleXdvcmRzIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTI4cHg7XG4gICAgICBtYXgtaGVpZ2h0OiAxMjhweDtcbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRvcC1pbmZvLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtaW5mby1iYXIgLnJlcG9zaXRvcnktbmFtZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cbi50b3AtaW5mby1iYXIgaW9uLWNoaXAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNyb3RhbHVzKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3JvdGFsdXMpO1xufVxuLnRvcC1pbmZvLWJhciBpb24tY2hpcCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3JvdGFsdXMpO1xufVxuLnRvcC1pbmZvLWJhciBpb24tY2hpcC5hbGwtdHlwZSB7XG4gIGNvbG9yOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWxsLXR5cGUtY29sb3IpO1xufVxuLnRvcC1pbmZvLWJhciBpb24tY2hpcC5hbGwtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmltYWdlLXR5cGUge1xuICBjb2xvcjogdmFyKC0taW1hZ2UtdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW1hZ2UtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmltYWdlLXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW1hZ2UtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLnZpZGVvLXR5cGUge1xuICBjb2xvcjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLnZpZGVvLXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmF1ZGlvLXR5cGUge1xuICBjb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmF1ZGlvLXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmRvY3VtZW50LXR5cGUge1xuICBjb2xvcjogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmRvY3VtZW50LXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmRpZGFjdGljLXVuaXQtdHlwZSB7XG4gIGNvbG9yOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvcik7XG59XG4udG9wLWluZm8tYmFyIGlvbi1jaGlwLmRpZGFjdGljLXVuaXQtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpO1xufVxuXG4uY2FyZC1jb250ZW50LWNvbHVtbiB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1jb250ZW50LWNvbHVtbiBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uY2FyZC1jb250ZW50LWNvbHVtbiBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG4uY2FyZC1jb250ZW50LWNvbHVtbiBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDU3NXB4KSB7XG4gIC5jYXJkLWNvbnRlbnQtY29sdW1uIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG5cbnAuZGVzY3JpcHRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5wLmtleXdvcmRzIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNhcmQtdGh1bWJuYWlsLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQtdGh1bWJuYWlsLWNvbHVtbiBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5jYXJkLXRodW1ibmFpbC1jb2x1bW4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzVweCkge1xuICAuY2FyZC10aHVtYm5haWwtY29sdW1uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmNhcmQtdGh1bWJuYWlsLWNvbHVtbiBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEzOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkLXRodW1ibmFpbC1jb2x1bW4gcC5rZXl3b3JkcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuICAuY2FyZC10aHVtYm5haWwtY29sdW1uIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMjhweDtcbiAgICBtYXgtaGVpZ2h0OiAxMjhweDtcbiAgfVxufSIsIiRjb250ZW50LXR5cGUtY29sb3JzOiAoXG4gIFwiYWxsLXR5cGVcIjogdmFyKC0tYWxsLXR5cGUtY29sb3IpLFxuICBcImltYWdlLXR5cGVcIjogdmFyKC0taW1hZ2UtdHlwZS1jb2xvciksXG4gIFwidmlkZW8tdHlwZVwiOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKSxcbiAgXCJhdWRpby10eXBlXCI6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpLFxuICBcImRvY3VtZW50LXR5cGVcIjogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvciksXG4gIFwiZGlkYWN0aWMtdW5pdC10eXBlXCI6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvciksXG4gICk7XG5cbiAgJGFuaW1hdGlvbi1kdXJhdGlvbjogNDUwbXM7Il19 */");

/***/ }),

/***/ "./src/app/home/components/general-result-card/general-result-card.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/general-result-card/general-result-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GeneralResultCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralResultCardComponent", function() { return GeneralResultCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/search-type.enum */ "./src/app/models/search-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers.ts");




let GeneralResultCardComponent = class GeneralResultCardComponent {
    constructor() {
        this.openDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.playEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.searchTypes = src_app_models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"];
    }
    getItemTypeLabel(itemType) {
        return _helpers__WEBPACK_IMPORTED_MODULE_3__["getItemTypeLabel"](itemType);
    }
    getItemTypeIcon(itemType) {
        return _helpers__WEBPACK_IMPORTED_MODULE_3__["getItemTypeIcon"](itemType);
    }
    get originalFileUrl() {
        if (this.itemInfo.manifest.hasOwnProperty('entrypoint')) {
            return `${this.itemInfo.about}/!/${this.itemInfo.manifest.entrypoint}`;
        }
        if (this.itemInfo.manifest.hasOwnProperty('url') && this.itemInfo.manifest.url) {
            return this.itemInfo.manifest.url;
        }
        return `${this.itemInfo.about}/!/`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GeneralResultCardComponent.prototype, "itemInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GeneralResultCardComponent.prototype, "didacticUnitResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GeneralResultCardComponent.prototype, "openDetails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GeneralResultCardComponent.prototype, "playEvent", void 0);
GeneralResultCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-general-result-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-result-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/general-result-card/general-result-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-result-card.component.scss */ "./src/app/home/components/general-result-card/general-result-card.component.scss")).default]
    })
], GeneralResultCardComponent);



/***/ }),

/***/ "./src/app/home/components/image-loader/image-loader.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/components/image-loader/image-loader.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --image-border-radius: 4px;\n}\n\n.loading-image {\n  -webkit-animation: loading 2400ms linear infinite;\n          animation: loading 2400ms linear infinite;\n}\n\nimg {\n  width: auto;\n  display: block;\n  margin: 0 auto;\n  border-radius: var(--image-border-radius);\n  max-width: 100%;\n  max-height: 280px;\n}\n\n@-webkit-keyframes loading {\n  from {\n    opacity: 0.45;\n  }\n  50% {\n    opacity: 0.15;\n  }\n  to {\n    opacity: 0.45;\n  }\n}\n\n@keyframes loading {\n  from {\n    opacity: 0.45;\n  }\n  50% {\n    opacity: 0.15;\n  }\n  to {\n    opacity: 0.45;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9pbWFnZS1sb2FkZXIvaW1hZ2UtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvaW1hZ2UtbG9hZGVyL2ltYWdlLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxhQUFBO0VDRUY7RURBQTtJQUNFLGFBQUE7RUNFRjtFREFBO0lBQ0UsYUFBQTtFQ0VGO0FBQ0Y7O0FEWEE7RUFDRTtJQUNFLGFBQUE7RUNFRjtFREFBO0lBQ0UsYUFBQTtFQ0VGO0VEQUE7SUFDRSxhQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9pbWFnZS1sb2FkZXIvaW1hZ2UtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWltYWdlLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmxvYWRpbmctaW1hZ2Uge1xuICBhbmltYXRpb246IGxvYWRpbmcgMjQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cbmltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLWJvcmRlci1yYWRpdXMpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ1O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4xNTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC40NTtcbiAgfVxufSIsIjpob3N0IHtcbiAgLS1pbWFnZS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sb2FkaW5nLWltYWdlIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDI0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLWJvcmRlci1yYWRpdXMpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ1O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4xNTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC40NTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/image-loader/image-loader.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/components/image-loader/image-loader.component.ts ***!
  \************************************************************************/
/*! exports provided: ImageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderComponent", function() { return ImageLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageLoaderComponent = class ImageLoaderComponent {
    constructor(element) {
        this.element = element;
        this.imageLoadFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageVisible = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('imageSrc') && changes.imageSrc.currentValue) {
            this.imageVisible = false;
        }
        if (changes.hasOwnProperty('imageBorderRadius') && changes.imageBorderRadius.currentValue) {
            this.element.nativeElement
                .style.setProperty('--image-border-radius', changes.imageBorderRadius.currentValue);
        }
    }
    imageLoadError() {
        this.imageLoadFailed.emit();
    }
    showImage() {
        this.imageVisible = true;
    }
};
ImageLoaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImageLoaderComponent.prototype, "imageSrc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImageLoaderComponent.prototype, "altText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImageLoaderComponent.prototype, "imageBorderRadius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageLoaderComponent.prototype, "imageLoadFailed", void 0);
ImageLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-loader/image-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-loader.component.scss */ "./src/app/home/components/image-loader/image-loader.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ImageLoaderComponent);



/***/ }),

/***/ "./src/app/home/components/image-search-results/image-result-card/image-result-card.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/home/components/image-search-results/image-result-card/image-result-card.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-bottom: 25px;\n}\n\n.loading-image {\n  -webkit-animation: loading 2400ms linear infinite;\n          animation: loading 2400ms linear infinite;\n}\n\nion-card-header {\n  padding: 10px 6px 6px;\n}\n\nion-card-header span.repository-name {\n  color: var(--ion-color-medium-tint);\n  font-size: 13px;\n  font-weight: 300;\n}\n\nion-card-header ion-card-title {\n  font-size: 15px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  margin-top: 2px;\n}\n\nimg {\n  width: 100%;\n}\n\n@-webkit-keyframes loading {\n  from {\n    opacity: 0.45;\n  }\n  50% {\n    opacity: 0.15;\n  }\n  to {\n    opacity: 0.45;\n  }\n}\n\n@keyframes loading {\n  from {\n    opacity: 0.45;\n  }\n  50% {\n    opacity: 0.15;\n  }\n  to {\n    opacity: 0.45;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9pbWFnZS1zZWFyY2gtcmVzdWx0cy9pbWFnZS1yZXN1bHQtY2FyZC9pbWFnZS1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2ltYWdlLXNlYXJjaC1yZXN1bHRzL2ltYWdlLXJlc3VsdC1jYXJkL2ltYWdlLXJlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0VER0E7SUFDRSxhQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxhQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtFREdBO0lBQ0UsYUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvaW1hZ2Utc2VhcmNoLXJlc3VsdHMvaW1hZ2UtcmVzdWx0LWNhcmQvaW1hZ2UtcmVzdWx0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5sb2FkaW5nLWltYWdlIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDI0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggNnB4IDZweDtcblxuICBzcGFuLnJlcG9zaXRvcnktbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IFxuICB9XG4gIFxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlOyAgXG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDU7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwLjQ1O1xuICB9XG59IiwiaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubG9hZGluZy1pbWFnZSB7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAyNDAwbXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDZweCA2cHg7XG59XG5pb24tY2FyZC1oZWFkZXIgc3Bhbi5yZXBvc2l0b3J5LW5hbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDU7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwLjQ1O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/components/image-search-results/image-result-card/image-result-card.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/home/components/image-search-results/image-result-card/image-result-card.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ImageResultCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageResultCardComponent", function() { return ImageResultCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageResultCardComponent = class ImageResultCardComponent {
    constructor() {
        this.imageVisible = false;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('imageItem') && changes.imageItem.currentValue) {
            this.setImageItemProperties();
        }
    }
    setImageItemProperties() {
        this.resourceAboutUrl = this.imageItem.about;
        this.manifest = this.imageItem.manifest;
        this.metadata = this.imageItem.metadata;
        this.alternateBaseRef = this.imageItem.id.split('/content/')[1];
        const smallAlternateName = this.getSmallAlternateFileName();
        this.imageSrc = smallAlternateName ?
            `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${smallAlternateName}` : this.originalFileUrl;
    }
    imageLoadError() {
        this.imageSrc = this.originalFileUrl;
    }
    showImage() {
        this.imageVisible = true;
    }
    getSmallAlternateFileName() {
        const smallAlternate = this.manifest.alternate.filter(alternate => alternate.includes('small'))[0];
        return smallAlternate ? smallAlternate : '';
    }
    get originalFileUrl() {
        if (this.manifest.hasOwnProperty('entrypoint')) {
            return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
        }
        if (this.manifest.hasOwnProperty('url') && this.manifest.url) {
            return this.manifest.url;
        }
        return `${this.resourceAboutUrl}/!/`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageResultCardComponent.prototype, "imageItem", void 0);
ImageResultCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-result-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-result-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-result-card/image-result-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-result-card.component.scss */ "./src/app/home/components/image-search-results/image-result-card/image-result-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ImageResultCardComponent);



/***/ }),

/***/ "./src/app/home/components/image-search-results/image-search-results.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/components/image-search-results/image-search-results.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --column-flex-basis: 50%;\n}\n\n.results-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.results-box .column {\n  -webkit-box-flex: 1;\n          flex: 1 1 var(--column-flex-basis);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9pbWFnZS1zZWFyY2gtcmVzdWx0cy9pbWFnZS1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2ltYWdlLXNlYXJjaC1yZXN1bHRzL2ltYWdlLXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtVQUFBLGtDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2ltYWdlLXNlYXJjaC1yZXN1bHRzL2ltYWdlLXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWNvbHVtbi1mbGV4LWJhc2lzOiA1MCU7XG59XG5cbi5yZXN1bHRzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAuY29sdW1uIHtcbiAgICBmbGV4OiAxIDEgdmFyKC0tY29sdW1uLWZsZXgtYmFzaXMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1jb2x1bW4tZmxleC1iYXNpczogNTAlO1xufVxuXG4ucmVzdWx0cy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4ucmVzdWx0cy1ib3ggLmNvbHVtbiB7XG4gIGZsZXg6IDEgMSB2YXIoLS1jb2x1bW4tZmxleC1iYXNpcyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/components/image-search-results/image-search-results.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/image-search-results/image-search-results.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImageSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSearchResultsComponent", function() { return ImageSearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageSearchResultsComponent = class ImageSearchResultsComponent {
    constructor(changeDetector, element) {
        this.changeDetector = changeDetector;
        this.element = element;
        this.openDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showResults = false;
        this.columnCountReady = false;
        this.MIN_IMAGE_WIDTH = 180;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('results') && changes.results.currentValue) {
            this.getNewResultsChunk(changes.results);
        }
    }
    ngAfterViewInit() {
        this.currentDocumentWidth = document.documentElement.getBoundingClientRect().width;
        this.availableWidth = this.contentWrapper.nativeElement.offsetWidth;
        this.findColumnCount();
    }
    findColumnCount() {
        this.columnCount = Math.floor(this.availableWidth / this.MIN_IMAGE_WIDTH);
        this.element.nativeElement.style.setProperty('--column-flex-basis', `${100 / this.columnCount}%`);
        this.columnCountReady = true;
        if (this.results && this.results.length) {
            this.clearResultsInColumns();
            this.splitResultsInColumns(this.results);
            this.showResults = true;
            this.changeDetector.detectChanges();
        }
    }
    clearResultsInColumns() {
        this.resultsInColumns = [];
    }
    getNewResultsChunk(changes) {
        let newResults;
        if (changes.firstChange) {
            newResults = changes.currentValue;
        }
        else {
            newResults = changes.currentValue.slice(changes.previousValue.length);
        }
        if (this.columnCountReady && this.resultsInColumns && newResults && newResults.length) {
            this.splitResultsInColumns(newResults);
        }
    }
    splitResultsInColumns(resultsChunk) {
        const resultsToSplit = [...resultsChunk];
        let columnIndex = 0;
        while (resultsToSplit.length > 0) {
            if (!this.resultsInColumns[columnIndex]) {
                this.resultsInColumns[columnIndex] = [];
            }
            this.resultsInColumns[columnIndex].push(resultsToSplit.shift());
            columnIndex = columnIndex === this.columnCount - 1 ? 0 : columnIndex + 1;
        }
    }
    onResize() {
        const updatedWidth = document.documentElement.getBoundingClientRect().width;
        if (this.currentDocumentWidth === updatedWidth) {
            return;
        }
        this.currentDocumentWidth = updatedWidth;
        this.availableWidth = this.contentWrapper.nativeElement.offsetWidth;
        this.findColumnCount();
    }
};
ImageSearchResultsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ImageSearchResultsComponent.prototype, "results", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageSearchResultsComponent.prototype, "openDetails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentWrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ImageSearchResultsComponent.prototype, "contentWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ImageSearchResultsComponent.prototype, "onResize", null);
ImageSearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-search-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-search-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/image-search-results/image-search-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-search-results.component.scss */ "./src/app/home/components/image-search-results/image-search-results.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ImageSearchResultsComponent);



/***/ }),

/***/ "./src/app/home/components/search-type-selector/search-type-selector.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/components/search-type-selector/search-type-selector.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".type-selection-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 25px;\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 450ms ease-in-out;\n  transition: -webkit-transform 450ms ease-in-out;\n  transition: transform 450ms ease-in-out;\n  transition: transform 450ms ease-in-out, -webkit-transform 450ms ease-in-out;\n  border-bottom: 2px solid;\n}\n.type-selection-wrapper.all-type {\n  border-bottom-color: var(--all-type-color);\n}\n.type-selection-wrapper.image-type {\n  border-bottom-color: var(--image-type-color);\n}\n.type-selection-wrapper.video-type {\n  border-bottom-color: var(--video-type-color);\n}\n.type-selection-wrapper.audio-type {\n  border-bottom-color: var(--audio-type-color);\n}\n.type-selection-wrapper.document-type {\n  border-bottom-color: var(--document-type-color);\n}\n.type-selection-wrapper.didactic-unit-type {\n  border-bottom-color: var(--didactic-unit-type-color);\n}\n.type-selection-wrapper.pristine {\n  -webkit-transform: translateY(-105px);\n          transform: translateY(-105px);\n}\n.type-selection-wrapper ion-button {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  --border-radius: 4px 4px 0 0;\n  margin-left: 0;\n  margin-right: 0;\n}\n.type-selection-wrapper ion-button.active {\n  pointer-events: none;\n}\n.type-selection-wrapper ion-button.active.all-type ion-label,\n.type-selection-wrapper ion-button.active.all-type ion-icon {\n  color: var(--all-type-color);\n}\n.type-selection-wrapper ion-button.active.image-type ion-label,\n.type-selection-wrapper ion-button.active.image-type ion-icon {\n  color: var(--image-type-color);\n}\n.type-selection-wrapper ion-button.active.video-type ion-label,\n.type-selection-wrapper ion-button.active.video-type ion-icon {\n  color: var(--video-type-color);\n}\n.type-selection-wrapper ion-button.active.audio-type ion-label,\n.type-selection-wrapper ion-button.active.audio-type ion-icon {\n  color: var(--audio-type-color);\n}\n.type-selection-wrapper ion-button.active.document-type ion-label,\n.type-selection-wrapper ion-button.active.document-type ion-icon {\n  color: var(--document-type-color);\n}\n.type-selection-wrapper ion-button.active.didactic-unit-type ion-label,\n.type-selection-wrapper ion-button.active.didactic-unit-type ion-icon {\n  color: var(--didactic-unit-type-color);\n}\n.type-selection-wrapper ion-button ion-label {\n  color: #c8c9cc;\n  text-transform: none;\n}\n.type-selection-wrapper ion-icon {\n  color: #c8c9cc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9zZWFyY2gtdHlwZS1zZWxlY3Rvci9zZWFyY2gtdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3NlYXJjaC10eXBlLXNlbGVjdG9yL3NlYXJjaC10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlb3BlcmV6L0RvY3VtZW50cy9jcm90YWx1cy9jcm90YWx1cy1tb2JpbGUtYXBwL3NyYy90aGVtZS9jdXN0b20vX3Nhc3MtdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUFBLCtDQUFBO0VBQUEsdUNBQUE7RUFBQSw0RUFBQTtFQUNBLHdCQUFBO0FDRkY7QURNSTtFQUNFLDBDRWZnQjtBRFd0QjtBREdJO0VBQ0UsNENFZmdCO0FEY3RCO0FEQUk7RUFDRSw0Q0VmZ0I7QURpQnRCO0FESEk7RUFDRSw0Q0VmZ0I7QURvQnRCO0FETkk7RUFDRSwrQ0VmZ0I7QUR1QnRCO0FEVEk7RUFDRSxvREVmZ0I7QUQwQnRCO0FEUEU7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0FDU0o7QURORTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNRSjtBRE5JO0VBQ0Usb0JBQUE7QUNRTjtBRTlCRTs7RUFFRSw0QkRWa0I7QUQwQ3RCO0FFbENFOztFQUVFLDhCRFZrQjtBRDhDdEI7QUV0Q0U7O0VBRUUsOEJEVmtCO0FEa0R0QjtBRTFDRTs7RUFFRSw4QkRWa0I7QURzRHRCO0FFOUNFOztFQUVFLGlDRFZrQjtBRDBEdEI7QUVsREU7O0VBRUUsc0NEVmtCO0FEOER0QjtBRHRCSTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ3dCTjtBRHBCRTtFQUNFLGNBQUE7QUNzQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvc2VhcmNoLXR5cGUtc2VsZWN0b3Ivc2VhcmNoLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwic2Fzcy12YXJpYWJsZXNcIjtcblxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG5cbiAgQGVhY2ggJGNsYXNzLFxuICAkY29sb3IgaW4gJGNvbnRlbnQtdHlwZS1jb2xvcnMge1xuICAgICYuI3skY2xhc3N9IHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLnByaXN0aW5lIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNXB4KTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgIEBlYWNoICRjbGFzcyxcbiAgICAgICRjb2xvciBpbiAkY29udGVudC10eXBlLWNvbG9ycyB7XG4gICAgICAgICYuI3skY2xhc3N9IHtcbiAgICAgICAgICBAaW5jbHVkZSBpY29uLWxhYmVsLWNvbG9yKCRjb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgY29sb3I6ICNjOGM5Y2M7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNjOGM5Y2M7XG4gIH1cbn0iLCIudHlwZS1zZWxlY3Rpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG4udHlwZS1zZWxlY3Rpb24td3JhcHBlci5hbGwtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFsbC10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyLmltYWdlLXR5cGUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyLnZpZGVvLXR5cGUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyLmF1ZGlvLXR5cGUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyLmRvY3VtZW50LXR5cGUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyLmRpZGFjdGljLXVuaXQtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvcik7XG59XG4udHlwZS1zZWxlY3Rpb24td3JhcHBlci5wcmlzdGluZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1cHgpO1xufVxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICAtLWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbi5hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmFsbC10eXBlIGlvbi1sYWJlbCxcbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmFsbC10eXBlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWFsbC10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmltYWdlLXR5cGUgaW9uLWxhYmVsLFxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbi5hY3RpdmUuaW1hZ2UtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLnZpZGVvLXR5cGUgaW9uLWxhYmVsLFxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbi5hY3RpdmUudmlkZW8tdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmF1ZGlvLXR5cGUgaW9uLWxhYmVsLFxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbi5hY3RpdmUuYXVkaW8tdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmRvY3VtZW50LXR5cGUgaW9uLWxhYmVsLFxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWJ1dHRvbi5hY3RpdmUuZG9jdW1lbnQtdHlwZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24uYWN0aXZlLmRpZGFjdGljLXVuaXQtdHlwZSBpb24tbGFiZWwsXG4udHlwZS1zZWxlY3Rpb24td3JhcHBlciBpb24tYnV0dG9uLmFjdGl2ZS5kaWRhY3RpYy11bml0LXR5cGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cbi50eXBlLXNlbGVjdGlvbi13cmFwcGVyIGlvbi1idXR0b24gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNjOGM5Y2M7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIgaW9uLWljb24ge1xuICBjb2xvcjogI2M4YzljYztcbn0iLCIkY29udGVudC10eXBlLWNvbG9yczogKFxuICBcImFsbC10eXBlXCI6IHZhcigtLWFsbC10eXBlLWNvbG9yKSxcbiAgXCJpbWFnZS10eXBlXCI6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpLFxuICBcInZpZGVvLXR5cGVcIjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvciksXG4gIFwiYXVkaW8tdHlwZVwiOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKSxcbiAgXCJkb2N1bWVudC10eXBlXCI6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpLFxuICBcImRpZGFjdGljLXVuaXQtdHlwZVwiOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpLFxuICApO1xuXG4gICRhbmltYXRpb24tZHVyYXRpb246IDQ1MG1zOyIsIkBtaXhpbiBpY29uLXNpemUoICRzaXplOiAyNHB4KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGhlaWdodDogJHNpemU7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xufVxuXG5AbWl4aW4gaWNvbi1sYWJlbC1jb2xvcigkY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkge1xuICBpb24tbGFiZWwsIFxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/search-type-selector/search-type-selector.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/search-type-selector/search-type-selector.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchTypeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTypeSelectorComponent", function() { return SearchTypeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/search-type.enum */ "./src/app/models/search-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchTypeSelectorComponent = class SearchTypeSelectorComponent {
    constructor() {
        this.searchTypeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.searchTypes = _models_search_type_enum__WEBPACK_IMPORTED_MODULE_1__["SearchTypes"];
    }
    setSearchType(searchType) {
        this.searchTypeChangeEvent.emit(searchType);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SearchTypeSelectorComponent.prototype, "pristine", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SearchTypeSelectorComponent.prototype, "searchType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchTypeSelectorComponent.prototype, "searchTypeChangeEvent", void 0);
SearchTypeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-type-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-type-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/search-type-selector/search-type-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-type-selector.component.scss */ "./src/app/home/components/search-type-selector/search-type-selector.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchTypeSelectorComponent);



/***/ }),

/***/ "./src/app/home/components/simple-audio-player/simple-audio-player.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/simple-audio-player/simple-audio-player.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 12px 0px 2px;\n}\n.player ion-button {\n  --color: var(--ion-color-dark-tint);\n}\n.player .slider-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 2px;\n  -webkit-transition: opacity 200ms ease-in-out;\n  transition: opacity 200ms ease-in-out;\n}\n.player .slider-wrapper ::ng-deep .mat-slider {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  min-width: 80px;\n  margin: 0 2px;\n}\n.player .slider-wrapper ::ng-deep .mat-slider.cdk-mouse-focused .mat-slider-thumb, .player .slider-wrapper ::ng-deep .mat-slider.cdk-touch-focused .mat-slider-thumb,\n.player .slider-wrapper ::ng-deep .mat-slider .mat-slider-thumb {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n}\n.player .slider-wrapper ::ng-deep .mat-slider.mat-accent .mat-slider-thumb, .player .slider-wrapper ::ng-deep .mat-slider.mat-slider-min-value .mat-slider-thumb, .player .slider-wrapper ::ng-deep .mat-slider.mat-accent .mat-slider-track-fill {\n  background-color: var(--audio-type-color);\n  border-color: var(--audio-type-color);\n}\n.player .slider-wrapper ::ng-deep .mat-slider.mat-slider-disabled .mat-slider-thumb, .player .slider-wrapper ::ng-deep .mat-slider.mat-slider-disabled .mat-slider-track-background {\n  background-color: var(--ion-color-light-tint);\n  border-color: var(--ion-color-light-tint);\n}\n.player .slider-wrapper ::ng-deep .mat-slider .mat-slider-track-background, .player .slider-wrapper ::ng-deep .mat-slider:hover .mat-slider-track-background {\n  background-color: var(--ion-color-light-shade);\n}\n.player .slider-wrapper.loading {\n  opacity: 0.5;\n}\n.player .slider-wrapper ion-label {\n  margin: 0;\n  color: var(--ion-color-dark-tint) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9zaW1wbGUtYXVkaW8tcGxheWVyL3NpbXBsZS1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9zaW1wbGUtYXVkaW8tcGxheWVyL3NpbXBsZS1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLG1DQUFBO0FDQ0o7QURFRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0FDQUo7QURHTTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRFI7QURHUTs7RUFHRSw2QkFBQTtVQUFBLHFCQUFBO0FDRlY7QURLUTtFQUdFLHlDQUFBO0VBQ0EscUNBQUE7QUNMVjtBRFFRO0VBRUUsNkNBQUE7RUFDQSx5Q0FBQTtBQ1BWO0FEVVE7RUFFRSw4Q0FBQTtBQ1RWO0FEMEJJO0VBQ0UsWUFBQTtBQ3hCTjtBRDJCSTtFQUNFLFNBQUE7RUFDQSw0Q0FBQTtBQ3pCTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9zaW1wbGUtYXVkaW8tcGxheWVyL3NpbXBsZS1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMHB4IDJweDtcblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgfVxuXG4gIC5zbGlkZXItd3JhcHBlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAycHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAubWF0LXNsaWRlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuXG4gICAgICAgICYuY2RrLW1vdXNlLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgICYuY2RrLXRvdWNoLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgJi5tYXQtc2xpZGVyLW1pbi12YWx1ZSAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgICAgICY6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAgIC8vICYuc21vb3RoLW1hcmtlciB7XG4gICAgICAgICAgLy8gICAubWF0LXNsaWRlci10aHVtYi1jb250YWluZXIge1xuICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgbGluZWFyO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgXG4gICAgICAgICAgLy8gICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgICAgICAgIC8vICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgICAgLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBsaW5lYXIsIGJhY2tncm91bmQtY29sb3IgMXMgbGluZWFyO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmxvYWRpbmcge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn0iLCIucGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMHB4IDJweDtcbn1cbi5wbGF5ZXIgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLnBsYXllciAuc2xpZGVyLXdyYXBwZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMnB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnBsYXllciAuc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMCAycHg7XG59XG4ucGxheWVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIuY2RrLW1vdXNlLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5jZGstdG91Y2gtZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYixcbi5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlciAubWF0LXNsaWRlci10aHVtYiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cbi5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLCAucGxheWVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItdGh1bWIsIC5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKTtcbn1cbi5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLCAucGxheWVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cbi5wbGF5ZXIgLnNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLCAucGxheWVyIC5zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4ucGxheWVyIC5zbGlkZXItd3JhcHBlci5sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnBsYXllciAuc2xpZGVyLXdyYXBwZXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/components/simple-audio-player/simple-audio-player.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/simple-audio-player/simple-audio-player.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SimpleAudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleAudioPlayerComponent", function() { return SimpleAudioPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_audio_player_base_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-audio-player/base-audio-player */ "./src/app/home/components/base-audio-player/base-audio-player.ts");



let SimpleAudioPlayerComponent = class SimpleAudioPlayerComponent extends _base_audio_player_base_audio_player__WEBPACK_IMPORTED_MODULE_2__["BaseAudioPlayer"] {
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('audioSrc') && changes.audioSrc.currentValue) {
            this.changeDetector.detectChanges();
            this.setAudio();
        }
    }
};
SimpleAudioPlayerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SimpleAudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-simple-audio-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-audio-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/simple-audio-player/simple-audio-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-audio-player.component.scss */ "./src/app/home/components/simple-audio-player/simple-audio-player.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SimpleAudioPlayerComponent);



/***/ }),

/***/ "./src/app/home/components/video-result-card/video-result-card.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/components/video-result-card/video-result-card.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --thumbnail-size: 320px;\n}\n\nion-card {\n  display: inline-block;\n  margin: 0 30px 30px;\n  width: var(--thumbnail-size);\n}\n\nion-card-header {\n  padding: 18px 6px 6px;\n}\n\nion-card-header span.repository-name {\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n  font-weight: 300;\n}\n\nion-card-header ion-card-title {\n  font-size: 18px;\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  margin-top: 2px;\n}\n\n.thumbnail-wrapper {\n  position: relative;\n  width: 100%;\n  height: var(--thumbnail-size);\n}\n\n.thumbnail-wrapper app-image-loader,\n.thumbnail-wrapper .preview-box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.thumbnail-wrapper .preview-box {\n  z-index: -1;\n  background-size: cover;\n}\n\n.thumbnail-wrapper .preview-box.active {\n  z-index: 2;\n}\n\n.thumbnail-wrapper ::ng-deep app-image-loader img {\n  width: 100%;\n  max-height: var(--thumbnail-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy92aWRlby1yZXN1bHQtY2FyZC92aWRlby1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3ZpZGVvLXJlc3VsdC1jYXJkL3ZpZGVvLXJlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURDRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNERjs7QURHRTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBRElLO0VBQ0UsVUFBQTtBQ0ZQOztBRE9JO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvdmlkZW8tcmVzdWx0LWNhcmQvdmlkZW8tcmVzdWx0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tdGh1bWJuYWlsLXNpemU6IDMyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDMwcHggMzBweDtcbiAgd2lkdGg6IHZhcigtLXRodW1ibmFpbC1zaXplKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMThweCA2cHggNnB4O1xuXG4gIHNwYW4ucmVwb3NpdG9yeS1uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgXG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbn1cblxuLnRodW1ibmFpbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXIoLS10aHVtYm5haWwtc2l6ZSk7XG5cbiAgYXBwLWltYWdlLWxvYWRlcixcbiAgLnByZXZpZXctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAucHJldmlldy1ib3gge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAgJi5hY3RpdmUge1xuICAgICAgIHotaW5kZXg6IDI7XG4gICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCBhcHAtaW1hZ2UtbG9hZGVyIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiB2YXIoLS10aHVtYm5haWwtc2l6ZSk7XG4gICAgfVxuICB9XG59IiwiOmhvc3Qge1xuICAtLXRodW1ibmFpbC1zaXplOiAzMjBweDtcbn1cblxuaW9uLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAzMHB4IDMwcHg7XG4gIHdpZHRoOiB2YXIoLS10aHVtYm5haWwtc2l6ZSk7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE4cHggNnB4IDZweDtcbn1cbmlvbi1jYXJkLWhlYWRlciBzcGFuLnJlcG9zaXRvcnktbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5pb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGh1bWJuYWlsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXRodW1ibmFpbC1zaXplKTtcbn1cbi50aHVtYm5haWwtd3JhcHBlciBhcHAtaW1hZ2UtbG9hZGVyLFxuLnRodW1ibmFpbC13cmFwcGVyIC5wcmV2aWV3LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnRodW1ibmFpbC13cmFwcGVyIC5wcmV2aWV3LWJveCB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnRodW1ibmFpbC13cmFwcGVyIC5wcmV2aWV3LWJveC5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xufVxuLnRodW1ibmFpbC13cmFwcGVyIDo6bmctZGVlcCBhcHAtaW1hZ2UtbG9hZGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS10aHVtYm5haWwtc2l6ZSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/components/video-result-card/video-result-card.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/components/video-result-card/video-result-card.component.ts ***!
  \**********************************************************************************/
/*! exports provided: VideoResultCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoResultCardComponent", function() { return VideoResultCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoResultCardComponent = class VideoResultCardComponent {
    constructor() {
        this.openDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageVisible = false;
        this.showPreview = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('videoItem') && changes.videoItem.currentValue) {
            this.setVideoItemProperties();
        }
    }
    ngAfterViewInit() {
        if (this.previewUrl) {
            this.setBackgroundImg();
        }
    }
    setVideoItemProperties() {
        this.resourceAboutUrl = this.videoItem.about;
        this.manifest = this.videoItem.manifest;
        this.metadata = this.videoItem.metadata;
        this.thumbnailAltText = `${this.videoItem.metadata.general.title.none} video thumbnail`;
        this.alternateBaseRef = this.videoItem.id.split('/content/')[1];
        this.thumbnailSrc = this.getThumbnailUrl();
        this.previewUrl = this.getVideoPreviewUrl();
    }
    imageLoadError() {
        // TODO: show message when thumbnail no loaded
        console.warn('thumnail couldn\'t be loaded');
    }
    getThumbnailUrl() {
        return this.videoItem.manifest.customicon;
    }
    getVideoPreviewUrl() {
        return this.manifest.alternate.includes('preview.gif') ? this.getAlternateUrl('preview.gif') : '';
    }
    getAlternateUrl(alternate) {
        return `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${alternate}`;
    }
    setBackgroundImg() {
        this.previewBox.nativeElement.style.backgroundImage = `url('')`;
        this.previewBox.nativeElement.style.backgroundImage = `url('${this.previewUrl}')`;
    }
    togglePreview(show) {
        if (show) {
            // next line resets animated gif preview to start from begining.
            this.setBackgroundImg();
        }
        this.showPreview = show;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VideoResultCardComponent.prototype, "videoItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VideoResultCardComponent.prototype, "openDetails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewBox', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VideoResultCardComponent.prototype, "previewBox", void 0);
VideoResultCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-result-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-result-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/video-result-card/video-result-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-result-card.component.scss */ "./src/app/home/components/video-result-card/video-result-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoResultCardComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../directives/hide-header.directive */ "./src/app/directives/hide-header.directive.ts");
/* harmony import */ var _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/details-modal/details-modal.component */ "./src/app/home/components/details-modal/details-modal.component.ts");
/* harmony import */ var _components_general_result_card_general_result_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/general-result-card/general-result-card.component */ "./src/app/home/components/general-result-card/general-result-card.component.ts");
/* harmony import */ var _components_image_search_results_image_search_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/image-search-results/image-search-results.component */ "./src/app/home/components/image-search-results/image-search-results.component.ts");
/* harmony import */ var _components_image_search_results_image_result_card_image_result_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/image-search-results/image-result-card/image-result-card.component */ "./src/app/home/components/image-search-results/image-result-card/image-result-card.component.ts");
/* harmony import */ var _components_details_modal_image_player_image_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/details-modal/image-player/image-player.component */ "./src/app/home/components/details-modal/image-player/image-player.component.ts");
/* harmony import */ var _components_image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/image-loader/image-loader.component */ "./src/app/home/components/image-loader/image-loader.component.ts");
/* harmony import */ var _components_details_modal_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/details-modal/video-player/video-player.component */ "./src/app/home/components/details-modal/video-player/video-player.component.ts");
/* harmony import */ var _components_video_result_card_video_result_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/video-result-card/video-result-card.component */ "./src/app/home/components/video-result-card/video-result-card.component.ts");
/* harmony import */ var _components_audio_result_card_audio_result_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/audio-result-card/audio-result-card.component */ "./src/app/home/components/audio-result-card/audio-result-card.component.ts");
/* harmony import */ var _components_simple_audio_player_simple_audio_player_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/simple-audio-player/simple-audio-player.component */ "./src/app/home/components/simple-audio-player/simple-audio-player.component.ts");
/* harmony import */ var _components_details_modal_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/details-modal/audio-player/audio-player.component */ "./src/app/home/components/details-modal/audio-player/audio-player.component.ts");
/* harmony import */ var _components_details_modal_html_player_html_player_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/details-modal/html-player/html-player.component */ "./src/app/home/components/details-modal/html-player/html-player.component.ts");
/* harmony import */ var _components_document_result_card_document_result_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/document-result-card/document-result-card.component */ "./src/app/home/components/document-result-card/document-result-card.component.ts");
/* harmony import */ var _components_search_type_selector_search_type_selector_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search-type-selector/search-type-selector.component */ "./src/app/home/components/search-type-selector/search-type-selector.component.ts");
/* harmony import */ var _directives_search_type_class_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../directives/search-type-class.directive */ "./src/app/directives/search-type-class.directive.ts");

























let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                },
            ]),
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"],
            _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_9__["HideHeaderDirective"],
            _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_10__["DetailsModalComponent"],
            _components_general_result_card_general_result_card_component__WEBPACK_IMPORTED_MODULE_11__["GeneralResultCardComponent"],
            _components_image_search_results_image_search_results_component__WEBPACK_IMPORTED_MODULE_12__["ImageSearchResultsComponent"],
            _components_image_search_results_image_result_card_image_result_card_component__WEBPACK_IMPORTED_MODULE_13__["ImageResultCardComponent"],
            _components_image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_15__["ImageLoaderComponent"],
            _components_details_modal_image_player_image_player_component__WEBPACK_IMPORTED_MODULE_14__["ImagePlayerComponent"],
            _components_details_modal_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_16__["VideoPlayerComponent"],
            _components_video_result_card_video_result_card_component__WEBPACK_IMPORTED_MODULE_17__["VideoResultCardComponent"],
            _components_audio_result_card_audio_result_card_component__WEBPACK_IMPORTED_MODULE_18__["AudioResultCardComponent"],
            _components_simple_audio_player_simple_audio_player_component__WEBPACK_IMPORTED_MODULE_19__["SimpleAudioPlayerComponent"],
            _components_details_modal_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_20__["AudioPlayerComponent"],
            _components_details_modal_html_player_html_player_component__WEBPACK_IMPORTED_MODULE_21__["HtmlPlayerComponent"],
            _components_document_result_card_document_result_card_component__WEBPACK_IMPORTED_MODULE_22__["DocumentResultCardComponent"],
            _components_search_type_selector_search_type_selector_component__WEBPACK_IMPORTED_MODULE_23__["SearchTypeSelectorComponent"],
            _directives_search_type_class_directive__WEBPACK_IMPORTED_MODULE_24__["SearchTypeClassDirective"]
        ],
        providers: [_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]],
        entryComponents: [
            _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_10__["DetailsModalComponent"]
        ],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --licenses-menu-margin-top: 0px;\n}\n\nion-content {\n  --background: var(--custom-background);\n}\n\nion-header.main-header {\n  background-color: var(--header-background);\n  z-index: 1001;\n}\n\nion-header.main-header .search-area {\n  padding-bottom: 0px;\n  margin: 0;\n  color: var(--color);\n}\n\nion-header.main-header .search-area ion-input {\n  box-shadow: none;\n  background-color: var(--header-search-input-background);\n}\n\nion-header.main-header .search-area ion-button {\n  --box-shadow: none;\n}\n\nion-header.main-header .search-area ion-button.all-type {\n  --background: var(--all-type-color);\n}\n\nion-header.main-header .search-area ion-button.image-type {\n  --background: var(--image-type-color);\n}\n\nion-header.main-header .search-area ion-button.video-type {\n  --background: var(--video-type-color);\n}\n\nion-header.main-header .search-area ion-button.audio-type {\n  --background: var(--audio-type-color);\n}\n\nion-header.main-header .search-area ion-button.document-type {\n  --background: var(--document-type-color);\n}\n\nion-header.main-header .search-area ion-button.didactic-unit-type {\n  --background: var(--didactic-unit-type-color);\n}\n\nion-header.main-header .title-toolbar {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  --background: var(--header-background);\n}\n\nion-header.main-header .title-toolbar.small-padding {\n  padding: 2px 0;\n}\n\nion-header.main-header .title-toolbar .app-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 24px;\n  margin-top: 4px;\n}\n\nion-header.main-header .title-toolbar .app-title svg {\n  width: 34px;\n  height: 34px;\n  margin-right: 1px;\n  -webkit-transform: rotateZ(-13deg);\n          transform: rotateZ(-13deg);\n}\n\nion-header.main-header .title-toolbar .app-title .label {\n  font-family: \"Cabin Sketch\", cursive;\n  font-weight: bold;\n  -webkit-transform: rotateZ(-3deg);\n          transform: rotateZ(-3deg);\n}\n\nion-header.main-header .title-toolbar.all-type .app-title {\n  color: var(--all-type-color);\n}\n\nion-header.main-header .title-toolbar.all-type svg {\n  fill: var(--all-type-color);\n}\n\nion-header.main-header .title-toolbar.all-type ion-button,\nion-header.main-header .title-toolbar.all-type ion-badge {\n  --color: var(--all-type-color);\n}\n\nion-header.main-header .title-toolbar.image-type .app-title {\n  color: var(--image-type-color);\n}\n\nion-header.main-header .title-toolbar.image-type svg {\n  fill: var(--image-type-color);\n}\n\nion-header.main-header .title-toolbar.image-type ion-button,\nion-header.main-header .title-toolbar.image-type ion-badge {\n  --color: var(--image-type-color);\n}\n\nion-header.main-header .title-toolbar.video-type .app-title {\n  color: var(--video-type-color);\n}\n\nion-header.main-header .title-toolbar.video-type svg {\n  fill: var(--video-type-color);\n}\n\nion-header.main-header .title-toolbar.video-type ion-button,\nion-header.main-header .title-toolbar.video-type ion-badge {\n  --color: var(--video-type-color);\n}\n\nion-header.main-header .title-toolbar.audio-type .app-title {\n  color: var(--audio-type-color);\n}\n\nion-header.main-header .title-toolbar.audio-type svg {\n  fill: var(--audio-type-color);\n}\n\nion-header.main-header .title-toolbar.audio-type ion-button,\nion-header.main-header .title-toolbar.audio-type ion-badge {\n  --color: var(--audio-type-color);\n}\n\nion-header.main-header .title-toolbar.document-type .app-title {\n  color: var(--document-type-color);\n}\n\nion-header.main-header .title-toolbar.document-type svg {\n  fill: var(--document-type-color);\n}\n\nion-header.main-header .title-toolbar.document-type ion-button,\nion-header.main-header .title-toolbar.document-type ion-badge {\n  --color: var(--document-type-color);\n}\n\nion-header.main-header .title-toolbar.didactic-unit-type .app-title {\n  color: var(--didactic-unit-type-color);\n}\n\nion-header.main-header .title-toolbar.didactic-unit-type svg {\n  fill: var(--didactic-unit-type-color);\n}\n\nion-header.main-header .title-toolbar.didactic-unit-type ion-button,\nion-header.main-header .title-toolbar.didactic-unit-type ion-badge {\n  --color: var(--didactic-unit-type-color);\n}\n\nion-header.main-header .title-toolbar ion-button.licenses-filter-button {\n  position: relative;\n}\n\nion-header.main-header .title-toolbar ion-button.licenses-filter-button ion-badge {\n  position: absolute;\n  bottom: 0;\n  left: -5px;\n  font-size: 12px;\n  padding: 6px;\n  font-weight: bold;\n  width: 12px;\n  height: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: transparent;\n}\n\nion-header.main-header ::ng-deep app-search-type-selector .type-selection-wrapper {\n  border-bottom-width: 3px;\n  margin: 0;\n}\n\n#container {\n  background-color: var(--custom-background);\n  padding: 15px 0 20px;\n  min-height: 100%;\n  position: relative;\n}\n\n#container.center-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#container .background {\n  position: fixed;\n  top: var(--padding-top);\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.28;\n  background-image: url(\"/assets/img/crotalus_sketchy.svg\");\n  background-size: 125% auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-transition: opacity 450ms ease-in-out;\n  transition: opacity 450ms ease-in-out;\n}\n\n#container .background.dimmed {\n  opacity: 0.09;\n}\n\n::ng-deep .dark #container .background {\n  opacity: 0.13 !important;\n}\n\n::ng-deep .dark #container .background.dimmed {\n  opacity: 0.04 !important;\n}\n\n.no-connected-repos {\n  text-align: center;\n  opacity: 0.8;\n  position: absolute;\n  width: 100%;\n}\n\n.no-connected-repos ion-card {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.no-connected-repos ion-card-title {\n  font-family: \"Cabin Sketch\", cursive;\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.no-connected-repos ion-button.all-type {\n  --background: var(--all-type-color);\n}\n\n.no-connected-repos ion-button.image-type {\n  --background: var(--image-type-color);\n}\n\n.no-connected-repos ion-button.video-type {\n  --background: var(--video-type-color);\n}\n\n.no-connected-repos ion-button.audio-type {\n  --background: var(--audio-type-color);\n}\n\n.no-connected-repos ion-button.document-type {\n  --background: var(--document-type-color);\n}\n\n.no-connected-repos ion-button.didactic-unit-type {\n  --background: var(--didactic-unit-type-color);\n}\n\n.no-connected-repos ion-icon {\n  font-size: 20px;\n  vertical-align: middle;\n}\n\n.no-results-message {\n  text-align: center;\n  opacity: 0.7;\n  position: absolute;\n  -webkit-transform: translateY(20vh);\n          transform: translateY(20vh);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.no-results-message ion-card {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: none;\n  background: none;\n}\n\n.no-results-message ion-card-subtitle {\n  font-family: \"Cabin Sketch\", cursive;\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.no-results-message ion-card-title ion-icon {\n  text-align: center;\n  font-size: 50px;\n  vertical-align: bottom;\n  color: var(--ion-color-step-450);\n  opacity: 0.8;\n}\n\n.no-more-results-message ion-card {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  box-shadow: none;\n  background: none;\n  opacity: 0.6;\n}\n\n.no-more-results-message ion-card-subtitle {\n  text-align: center;\n  font-family: \"Cabin Sketch\", cursive;\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.search-area {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px;\n  padding: 0 20px;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: -webkit-transform 450ms ease-in-out;\n  transition: -webkit-transform 450ms ease-in-out;\n  transition: transform 450ms ease-in-out;\n  transition: transform 450ms ease-in-out, -webkit-transform 450ms ease-in-out;\n  z-index: 1;\n}\n\n.search-area.pristine {\n  -webkit-transform: translateY(38vh);\n          transform: translateY(38vh);\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.search-area.pristine ion-input {\n  flex-basis: 100%;\n  border-radius: 4px;\n  opacity: 0.71;\n}\n\n.search-area.pristine ion-button {\n  margin-top: 12px;\n  --border-radius: 4px;\n  opacity: 0.9;\n}\n\n.search-area ion-input {\n  font-size: 18px;\n  line-height: 22px;\n  padding: 3px 3px 3px 10px !important;\n  height: 40px;\n  background-color: var(--search-input-background);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px 0 0 4px;\n  flex-basis: calc(100% - 32px);\n  -webkit-transition: all 450ms ease-in-out;\n  transition: all 450ms ease-in-out;\n}\n\n.search-area ion-button {\n  -webkit-transition: all 450ms ease-in-out;\n  transition: all 450ms ease-in-out;\n  margin: 0;\n  font-size: 11px;\n  height: 40px;\n  --border-radius: 0 4px 4px 0;\n  --padding-start: 6px;\n  --padding-end: 6px;\n  min-width: 32px;\n}\n\n.search-area ion-button.all-type {\n  --background: var(--all-type-color);\n}\n\n.search-area ion-button.image-type {\n  --background: var(--image-type-color);\n}\n\n.search-area ion-button.video-type {\n  --background: var(--video-type-color);\n}\n\n.search-area ion-button.audio-type {\n  --background: var(--audio-type-color);\n}\n\n.search-area ion-button.document-type {\n  --background: var(--document-type-color);\n}\n\n.search-area ion-button.didactic-unit-type {\n  --background: var(--didactic-unit-type-color);\n}\n\n.first-search-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 0;\n}\n\n.video-results-wrapper,\n.audio-results-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-menu {\n  margin-top: var(--licenses-menu-margin-top);\n  position: fixed;\n}\n\n.licenses-menu.all-type ion-checkbox {\n  --background-checked: var(--all-type-color);\n  --border-color-checked: var(--all-type-color);\n  --border-color: var(--all-type-color);\n}\n\n.licenses-menu.image-type ion-checkbox {\n  --background-checked: var(--image-type-color);\n  --border-color-checked: var(--image-type-color);\n  --border-color: var(--image-type-color);\n}\n\n.licenses-menu.video-type ion-checkbox {\n  --background-checked: var(--video-type-color);\n  --border-color-checked: var(--video-type-color);\n  --border-color: var(--video-type-color);\n}\n\n.licenses-menu.audio-type ion-checkbox {\n  --background-checked: var(--audio-type-color);\n  --border-color-checked: var(--audio-type-color);\n  --border-color: var(--audio-type-color);\n}\n\n.licenses-menu.document-type ion-checkbox {\n  --background-checked: var(--document-type-color);\n  --border-color-checked: var(--document-type-color);\n  --border-color: var(--document-type-color);\n}\n\n.licenses-menu.didactic-unit-type ion-checkbox {\n  --background-checked: var(--didactic-unit-type-color);\n  --border-color-checked: var(--didactic-unit-type-color);\n  --border-color: var(--didactic-unit-type-color);\n}\n\n.licenses-menu ion-checkbox {\n  --size: 22px;\n  margin-left: 4px;\n  margin-right: 16px;\n}\n\n.licenses-menu ion-label {\n  margin: 16px 0 8px;\n}\n\n.licenses-menu ion-label img {\n  width: 88px;\n  height: 31px;\n  border-radius: 2px;\n  margin-left: 6px;\n}\n\n.licenses-menu ion-label p {\n  font-size: 0.85em;\n  margin: 5px 0 0;\n  white-space: normal;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9wZXJlei9Eb2N1bWVudHMvY3JvdGFsdXMvY3JvdGFsdXMtbW9iaWxlLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCIvVXNlcnMvbGVvcGVyZXovRG9jdW1lbnRzL2Nyb3RhbHVzL2Nyb3RhbHVzLW1vYmlsZS1hcHAvc3JjL3RoZW1lL2N1c3RvbS9fc2Fzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLCtCQUFBO0FDTEY7O0FEU0E7RUFDRSxzQ0FBQTtBQ05GOztBRFNBO0VBQ0UsMENBQUE7RUFDQSxhQUFBO0FDTkY7O0FEUUU7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFJO0VBQ0UsZ0JBQUE7RUFDQSx1REFBQTtBQ05OOztBRFNJO0VBQ0Usa0JBQUE7QUNQTjs7QURXUTtFQUNFLG1DQUFBO0FDVFY7O0FEUVE7RUFDRSxxQ0FBQTtBQ05WOztBREtRO0VBQ0UscUNBQUE7QUNIVjs7QURFUTtFQUNFLHFDQUFBO0FDQVY7O0FERFE7RUFDRSx3Q0FBQTtBQ0dWOztBREpRO0VBQ0UsNkNBQUE7QUNNVjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0VKOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBRENJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNDUjs7QURFTTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDQVI7O0FEUVE7RUFDRSw0QkU1RVk7QURzRXRCOztBRFNRO0VBQ0UsMkJFaEZZO0FEeUV0Qjs7QURVUTs7RUFFRSw4QkFBQTtBQ1JWOztBREZRO0VBQ0UsOEJFNUVZO0FEZ0Z0Qjs7QUREUTtFQUNFLDZCRWhGWTtBRG1GdEI7O0FEQVE7O0VBRUUsZ0NBQUE7QUNFVjs7QURaUTtFQUNFLDhCRTVFWTtBRDBGdEI7O0FEWFE7RUFDRSw2QkVoRlk7QUQ2RnRCOztBRFZROztFQUVFLGdDQUFBO0FDWVY7O0FEdEJRO0VBQ0UsOEJFNUVZO0FEb0d0Qjs7QURyQlE7RUFDRSw2QkVoRlk7QUR1R3RCOztBRHBCUTs7RUFFRSxnQ0FBQTtBQ3NCVjs7QURoQ1E7RUFDRSxpQ0U1RVk7QUQ4R3RCOztBRC9CUTtFQUNFLGdDRWhGWTtBRGlIdEI7O0FEOUJROztFQUVFLG1DQUFBO0FDZ0NWOztBRDFDUTtFQUNFLHNDRTVFWTtBRHdIdEI7O0FEekNRO0VBQ0UscUNFaEZZO0FEMkh0Qjs7QUR4Q1E7O0VBRUUsd0NBQUE7QUMwQ1Y7O0FEcENNO0VBQ0Usa0JBQUE7QUNzQ1I7O0FEcENRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7QUNzQ1Y7O0FEL0JJO0VBQ0Usd0JBQUE7RUFDQSxTQUFBO0FDaUNOOztBRHhCQTtFQUNFLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDMkJGOztBRHpCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDMkJKOztBRHhCRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0VBQUEscUNBQUE7QUMwQko7O0FEeEJJO0VBQ0UsYUFBQTtBQzBCTjs7QURuQkk7RUFDRSx3QkFBQTtBQ3NCTjs7QURwQk07RUFDRSx3QkFBQTtBQ3NCUjs7QURoQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNtQkY7O0FEakJFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGhCRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDa0JKOztBRFpNO0VBQ0UsbUNBQUE7QUNjUjs7QURmTTtFQUNFLHFDQUFBO0FDaUJSOztBRGxCTTtFQUNFLHFDQUFBO0FDb0JSOztBRHJCTTtFQUNFLHFDQUFBO0FDdUJSOztBRHhCTTtFQUNFLHdDQUFBO0FDMEJSOztBRDNCTTtFQUNFLDZDQUFBO0FDNkJSOztBRHhCRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQzBCSjs7QUR0QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUN5QkY7O0FEdkJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDeUJKOztBRHRCRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDd0JKOztBRHJCRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDdUJKOztBRGpCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ29CSjs7QURqQkU7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbUJKOztBRGZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLHVEQUFBO0VBQUEsK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLDRFQUFBO0VBQ0EsVUFBQTtBQ2tCRjs7QURoQkU7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNrQko7O0FEaEJJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNrQk47O0FEZkk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ2lCTjs7QURiRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFyUnlCO0VBc1J6QixnREFBQTtFQUNBLCtHQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNjSjs7QURYRTtFQUNFLHlDQUFBO0VBQUEsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBbFN5QjtFQW1TekIsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFRNO0VBQ0UsbUNBQUE7QUNXUjs7QURaTTtFQUNFLHFDQUFBO0FDY1I7O0FEZk07RUFDRSxxQ0FBQTtBQ2lCUjs7QURsQk07RUFDRSxxQ0FBQTtBQ29CUjs7QURyQk07RUFDRSx3Q0FBQTtBQ3VCUjs7QUR4Qk07RUFDRSw2Q0FBQTtBQzBCUjs7QURsQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7QUNxQkY7O0FEbEJBOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNxQkY7O0FEbEJBO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0FDcUJGOztBRGJNO0VBQ0UsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0FDZ0JSOztBRG5CTTtFQUNFLDZDQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtBQ3FCUjs7QUR4Qk07RUFDRSw2Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7QUMwQlI7O0FEN0JNO0VBQ0UsNkNBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0FDK0JSOztBRGxDTTtFQUNFLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ29DUjs7QUR2Q007RUFDRSxxREFBQTtFQUNBLHVEQUFBO0VBQ0EsK0NBQUE7QUN5Q1I7O0FEcENFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNzQ0o7O0FEbkNFO0VBQ0Usa0JBQUE7QUNxQ0o7O0FEbkNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDcUNOOztBRGxDSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNvQ04iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcInNhc3MtdmFyaWFibGVzXCI7XG5cbiRzZWFyY2gtYmFyLWVsZW1lbnRzLWhlaWdodDogNDBweDtcblxuXG46aG9zdCB7XG4gIC0tbGljZW5zZXMtbWVudS1tYXJnaW4tdG9wOiAwcHg7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLWhlYWRlci5tYWluLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgei1pbmRleDogMTAwMTtcblxuICAuc2VhcmNoLWFyZWEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zZWFyY2gtaW5wdXQtYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgIEBlYWNoICRjbGFzcyxcbiAgICAgICRjb2xvciBpbiAkY29udGVudC10eXBlLWNvbG9ycyB7XG4gICAgICAgICYuI3skY2xhc3N9IHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICN7JGNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aXRsZS10b29sYmFyIHtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XG5cbiAgICAmLnNtYWxsLXBhZGRpbmcge1xuICAgICAgcGFkZGluZzogMnB4IDA7XG4gICAgfVxuXG4gICAgLmFwcC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICBzdmcge1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xM2RlZyk7XG4gICAgICB9XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0zZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkY2xhc3MsXG4gICAgJGNvbG9yIGluICRjb250ZW50LXR5cGUtY29sb3JzIHtcbiAgICAgICYuI3skY2xhc3N9IHtcblxuICAgICAgICAuYXBwLXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBmaWxsOiAkY29sb3JcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b24sXG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgLS1jb2xvcjogI3skY29sb3J9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAmLmxpY2Vuc2VzLWZpbHRlci1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIGFwcC1zZWFyY2gtdHlwZS1zZWxlY3RvciB7XG4gICAgLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG5cbiNjb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IDE1cHggMCAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5jZW50ZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IHZhcigtLXBhZGRpbmctdG9wKTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBvcGFjaXR5OiAwLjI4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvY3JvdGFsdXNfc2tldGNoeS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyNSUgYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRhbmltYXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQ7XG5cbiAgICAmLmRpbW1lZCB7XG4gICAgICBvcGFjaXR5OiAwLjA5O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAuZGFyayB7XG4gICAgI2NvbnRhaW5lciAuYmFja2dyb3VuZCB7XG4gICAgICBvcGFjaXR5OiAwLjEzICFpbXBvcnRhbnQ7XG5cbiAgICAgICYuZGltbWVkIHtcbiAgICAgICAgb3BhY2l0eTogMC4wNCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubm8tY29ubmVjdGVkLXJlcG9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW9uLWNhcmQge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGVhY2ggJGNsYXNzLFxuICAgICRjb2xvciBpbiAkY29udGVudC10eXBlLWNvbG9ycyB7XG4gICAgICAmLiN7JGNsYXNzfSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI3skY29sb3J9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuXG4ubm8tcmVzdWx0cy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwdmgpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSBpb24taWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuXG4ubm8tbW9yZS1yZXN1bHRzLW1lc3NhZ2Uge1xuXG4gIGlvbi1jYXJkIHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5zZWFyY2gtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJGFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTtcblxuICAmLnByaXN0aW5lIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzh2aCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBvcGFjaXR5OiAwLjcxO1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6ICRzZWFyY2gtYmFyLWVsZW1lbnRzLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtaW5wdXQtYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJhci1lbGVtZW50cy1oZWlnaHQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzMnB4O1xuXG4gICAgQGVhY2ggJGNsYXNzLFxuICAgICRjb2xvciBpbiAkY29udGVudC10eXBlLWNvbG9ycyB7XG4gICAgICAmLiN7JGNsYXNzfSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI3skY29sb3J9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLmZpcnN0LXNlYXJjaC1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG5cbi52aWRlby1yZXN1bHRzLXdyYXBwZXIsXG4uYXVkaW8tcmVzdWx0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1tZW51IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGljZW5zZXMtbWVudS1tYXJnaW4tdG9wKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubGljZW5zZXMtbWVudSB7XG4gIEBlYWNoICRjbGFzcyxcbiAgJGNvbG9yIGluICRjb250ZW50LXR5cGUtY29sb3JzIHtcbiAgICAmLiN7JGNsYXNzfSB7XG5cbiAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjeyRjb2xvcn07XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICN7JGNvbG9yfTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICN7JGNvbG9yfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tY2hlY2tib3gge1xuICAgIC0tc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB9XG4gIH1cblxufSIsIjpob3N0IHtcbiAgLS1saWNlbnNlcy1tZW51LW1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLWhlYWRlci5tYWluLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgei1pbmRleDogMTAwMTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnNlYXJjaC1hcmVhIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAuc2VhcmNoLWFyZWEgaW9uLWlucHV0IHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLXNlYXJjaC1pbnB1dC1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnNlYXJjaC1hcmVhIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLmFsbC10eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLmltYWdlLXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAuc2VhcmNoLWFyZWEgaW9uLWJ1dHRvbi52aWRlby10eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnNlYXJjaC1hcmVhIGlvbi1idXR0b24uYXVkaW8tdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLmRvY3VtZW50LXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAuc2VhcmNoLWFyZWEgaW9uLWJ1dHRvbi5kaWRhY3RpYy11bml0LXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLnNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAycHggMDtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIgLmFwcC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIgLmFwcC10aXRsZSBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC0xM2RlZyk7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyIC5hcHAtdGl0bGUgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTNkZWcpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5hbGwtdHlwZSAuYXBwLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWFsbC10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuYWxsLXR5cGUgc3ZnIHtcbiAgZmlsbDogdmFyKC0tYWxsLXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5hbGwtdHlwZSBpb24tYnV0dG9uLFxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5hbGwtdHlwZSBpb24tYmFkZ2Uge1xuICAtLWNvbG9yOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLmltYWdlLXR5cGUgLmFwcC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuaW1hZ2UtdHlwZSBzdmcge1xuICBmaWxsOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuaW1hZ2UtdHlwZSBpb24tYnV0dG9uLFxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5pbWFnZS10eXBlIGlvbi1iYWRnZSB7XG4gIC0tY29sb3I6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci52aWRlby10eXBlIC5hcHAtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLnZpZGVvLXR5cGUgc3ZnIHtcbiAgZmlsbDogdmFyKC0tdmlkZW8tdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLnZpZGVvLXR5cGUgaW9uLWJ1dHRvbixcbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIudmlkZW8tdHlwZSBpb24tYmFkZ2Uge1xuICAtLWNvbG9yOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuYXVkaW8tdHlwZSAuYXBwLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5hdWRpby10eXBlIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5hdWRpby10eXBlIGlvbi1idXR0b24sXG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLmF1ZGlvLXR5cGUgaW9uLWJhZGdlIHtcbiAgLS1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLmRvY3VtZW50LXR5cGUgLmFwcC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuZG9jdW1lbnQtdHlwZSBzdmcge1xuICBmaWxsOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuZG9jdW1lbnQtdHlwZSBpb24tYnV0dG9uLFxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5kb2N1bWVudC10eXBlIGlvbi1iYWRnZSB7XG4gIC0tY29sb3I6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5kaWRhY3RpYy11bml0LXR5cGUgLmFwcC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhci5kaWRhY3RpYy11bml0LXR5cGUgc3ZnIHtcbiAgZmlsbDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXIubWFpbi1oZWFkZXIgLnRpdGxlLXRvb2xiYXIuZGlkYWN0aWMtdW5pdC10eXBlIGlvbi1idXR0b24sXG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyLmRpZGFjdGljLXVuaXQtdHlwZSBpb24tYmFkZ2Uge1xuICAtLWNvbG9yOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpO1xufVxuaW9uLWhlYWRlci5tYWluLWhlYWRlciAudGl0bGUtdG9vbGJhciBpb24tYnV0dG9uLmxpY2Vuc2VzLWZpbHRlci1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIC50aXRsZS10b29sYmFyIGlvbi1idXR0b24ubGljZW5zZXMtZmlsdGVyLWJ1dHRvbiBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyLm1haW4taGVhZGVyIDo6bmctZGVlcCBhcHAtc2VhcmNoLXR5cGUtc2VsZWN0b3IgLnR5cGUtc2VsZWN0aW9uLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1c3RvbS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogMTVweCAwIDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNjb250YWluZXIuY2VudGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250YWluZXIgLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogdmFyKC0tcGFkZGluZy10b3ApO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwLjI4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jcm90YWx1c19za2V0Y2h5LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjUlIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0NTBtcyBlYXNlLWluLW91dDtcbn1cbiNjb250YWluZXIgLmJhY2tncm91bmQuZGltbWVkIHtcbiAgb3BhY2l0eTogMC4wOTtcbn1cblxuOjpuZy1kZWVwIC5kYXJrICNjb250YWluZXIgLmJhY2tncm91bmQge1xuICBvcGFjaXR5OiAwLjEzICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmRhcmsgI2NvbnRhaW5lciAuYmFja2dyb3VuZC5kaW1tZWQge1xuICBvcGFjaXR5OiAwLjA0ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1jb25uZWN0ZWQtcmVwb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uby1jb25uZWN0ZWQtcmVwb3MgaW9uLWNhcmQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5uby1jb25uZWN0ZWQtcmVwb3MgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uby1jb25uZWN0ZWQtcmVwb3MgaW9uLWJ1dHRvbi5hbGwtdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWxsLXR5cGUtY29sb3IpO1xufVxuLm5vLWNvbm5lY3RlZC1yZXBvcyBpb24tYnV0dG9uLmltYWdlLXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpO1xufVxuLm5vLWNvbm5lY3RlZC1yZXBvcyBpb24tYnV0dG9uLnZpZGVvLXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXZpZGVvLXR5cGUtY29sb3IpO1xufVxuLm5vLWNvbm5lY3RlZC1yZXBvcyBpb24tYnV0dG9uLmF1ZGlvLXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xufVxuLm5vLWNvbm5lY3RlZC1yZXBvcyBpb24tYnV0dG9uLmRvY3VtZW50LXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpO1xufVxuLm5vLWNvbm5lY3RlZC1yZXBvcyBpb24tYnV0dG9uLmRpZGFjdGljLXVuaXQtdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cbi5uby1jb25uZWN0ZWQtcmVwb3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uby1yZXN1bHRzLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjB2aCk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uby1yZXN1bHRzLW1lc3NhZ2UgaW9uLWNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLm5vLXJlc3VsdHMtbWVzc2FnZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vLXJlc3VsdHMtbWVzc2FnZSBpb24tY2FyZC10aXRsZSBpb24taWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubm8tbW9yZS1yZXN1bHRzLW1lc3NhZ2UgaW9uLWNhcmQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubm8tbW9yZS1yZXN1bHRzLW1lc3NhZ2UgaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluIFNrZXRjaFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VhcmNoLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxO1xufVxuLnNlYXJjaC1hcmVhLnByaXN0aW5lIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM4dmgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNlYXJjaC1hcmVhLnByaXN0aW5lIGlvbi1pbnB1dCB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMC43MTtcbn1cbi5zZWFyY2gtYXJlYS5wcmlzdGluZSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5zZWFyY2gtYXJlYSBpb24taW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWlucHV0LWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MG1zIGVhc2UtaW4tb3V0O1xufVxuLnNlYXJjaC1hcmVhIGlvbi1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cbi5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLmFsbC10eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG4uc2VhcmNoLWFyZWEgaW9uLWJ1dHRvbi5pbWFnZS10eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbi5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLnZpZGVvLXR5cGUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXZpZGVvLXR5cGUtY29sb3IpO1xufVxuLnNlYXJjaC1hcmVhIGlvbi1idXR0b24uYXVkaW8tdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4uc2VhcmNoLWFyZWEgaW9uLWJ1dHRvbi5kb2N1bWVudC10eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbi5zZWFyY2gtYXJlYSBpb24tYnV0dG9uLmRpZGFjdGljLXVuaXQtdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbn1cblxuLmZpcnN0LXNlYXJjaC1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG5cbi52aWRlby1yZXN1bHRzLXdyYXBwZXIsXG4uYXVkaW8tcmVzdWx0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1tZW51IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGljZW5zZXMtbWVudS1tYXJnaW4tdG9wKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubGljZW5zZXMtbWVudS5hbGwtdHlwZSBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tYWxsLXR5cGUtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1hbGwtdHlwZS1jb2xvcik7XG59XG4ubGljZW5zZXMtbWVudS5pbWFnZS10eXBlIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW1hZ2UtdHlwZS1jb2xvcik7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pbWFnZS10eXBlLWNvbG9yKTtcbn1cbi5saWNlbnNlcy1tZW51LnZpZGVvLXR5cGUgaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXZpZGVvLXR5cGUtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS12aWRlby10eXBlLWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXZpZGVvLXR5cGUtY29sb3IpO1xufVxuLmxpY2Vuc2VzLW1lbnUuYXVkaW8tdHlwZSBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWF1ZGlvLXR5cGUtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYXVkaW8tdHlwZS1jb2xvcik7XG59XG4ubGljZW5zZXMtbWVudS5kb2N1bWVudC10eXBlIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tZG9jdW1lbnQtdHlwZS1jb2xvcik7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1kb2N1bWVudC10eXBlLWNvbG9yKTtcbn1cbi5saWNlbnNlcy1tZW51LmRpZGFjdGljLXVuaXQtdHlwZSBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tZGlkYWN0aWMtdW5pdC10eXBlLWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWRpZGFjdGljLXVuaXQtdHlwZS1jb2xvcik7XG59XG4ubGljZW5zZXMtbWVudSBpb24tY2hlY2tib3gge1xuICAtLXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5saWNlbnNlcy1tZW51IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTZweCAwIDhweDtcbn1cbi5saWNlbnNlcy1tZW51IGlvbi1sYWJlbCBpbWcge1xuICB3aWR0aDogODhweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4ubGljZW5zZXMtbWVudSBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBtYXJnaW46IDVweCAwIDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn0iLCIkY29udGVudC10eXBlLWNvbG9yczogKFxuICBcImFsbC10eXBlXCI6IHZhcigtLWFsbC10eXBlLWNvbG9yKSxcbiAgXCJpbWFnZS10eXBlXCI6IHZhcigtLWltYWdlLXR5cGUtY29sb3IpLFxuICBcInZpZGVvLXR5cGVcIjogdmFyKC0tdmlkZW8tdHlwZS1jb2xvciksXG4gIFwiYXVkaW8tdHlwZVwiOiB2YXIoLS1hdWRpby10eXBlLWNvbG9yKSxcbiAgXCJkb2N1bWVudC10eXBlXCI6IHZhcigtLWRvY3VtZW50LXR5cGUtY29sb3IpLFxuICBcImRpZGFjdGljLXVuaXQtdHlwZVwiOiB2YXIoLS1kaWRhY3RpYy11bml0LXR5cGUtY29sb3IpLFxuICApO1xuXG4gICRhbmltYXRpb24tZHVyYXRpb246IDQ1MG1zOyJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_search_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/search-type.enum */ "./src/app/models/search-type.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details-modal/details-modal.component */ "./src/app/home/components/details-modal/details-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/storageKeys.enum */ "./src/app/models/storageKeys.enum.ts");












const { Keyboard, App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let HomePage = class HomePage {
    constructor(searchService, changeDetector, toastController, menuController, modalController, storage) {
        this.searchService = searchService;
        this.changeDetector = changeDetector;
        this.toastController = toastController;
        this.menuController = menuController;
        this.modalController = modalController;
        this.storage = storage;
        this.searchDone = false;
        this.isSearching = false;
        this.noMoreResults = false;
        this.pristine = true;
        this.addSearchToHeader = false;
        this.paramsFromViewReady = false;
        this.currentToast = null;
        this.showSpinner = true;
        this.searchTypes = _models_search_type_enum__WEBPACK_IMPORTED_MODULE_2__["SearchTypes"];
        this.componentInitializing = true;
        this.audioCurrentlyPlaying = null;
        this.searchRequest$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.detailsPageActive = false;
        // searchResponse$: any;
        this.showNoResultsMessage = false;
        this.backButtonCounter = 0;
        this.resultsSize = this.searchService.options.resultsResponseSize;
        this.minLetters = this.searchService.options.minLetters;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.searchService.reposConnectedNumber$.subscribe((val) => {
                this.showSpinner = false;
                if (val) {
                    this.initSearch();
                    this.pristine = true;
                    this.showNoRepos = false;
                    this.showSearch = true;
                    this.changeDetector.detectChanges();
                    setTimeout(() => {
                        this.getViewManipulationParams();
                    }, 100);
                }
                else {
                    this.initSearch();
                    this.showSearch = false;
                    this.showNoRepos = true;
                }
            });
            this.searchService.getLicenses().subscribe((licenses) => {
                this.licenses = licenses;
                this.activeLicensesCount = this.licenses.filter(license => license.active).length;
                this.disableLastActiveLicense = this.activeLicensesCount === 1;
            });
            this.searchType = yield this.getDefaultSearchType();
            this.setupSearchStream();
        });
    }
    getDefaultSearchType() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const val = yield this.storage.get(_models_storageKeys_enum__WEBPACK_IMPORTED_MODULE_10__["StorageKeys"].defaultSearchType);
            return val ? val : _models_search_type_enum__WEBPACK_IMPORTED_MODULE_2__["SearchTypes"].all;
        });
    }
    ngAfterViewChecked() {
        if (!this.headerHeight) {
            this.headerHeight = this.headerBox.el.offsetHeight;
            this.content.el.style.setProperty('--padding-top', `${this.headerHeight}px`);
            this.content.el.style.setProperty('--licenses-menu-margin-top', `${this.headerHeight}px`);
        }
    }
    toggleLicensesMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.menuIsOpened) {
                this.menuController.close('licencesMenu');
            }
            else {
                this.menuController.open('licencesMenu');
            }
        });
    }
    setMenuState(open) {
        this.menuIsOpened = open;
    }
    setMenuMarginTop() {
        const headerHeight = this.headerBox.el.offsetHeight;
        this.content.el.style.setProperty('--licenses-menu-margin-top', `${headerHeight}px`);
    }
    getViewManipulationParams() {
        if (this.showSearch) {
            this.searchBoxBottomPosition = this.searchBox.nativeElement.offsetTop + this.searchBox.nativeElement.offsetHeight;
        }
    }
    initSearch() {
        this.results = [];
        this.showNoResultsMessage = false;
        this.noMoreResults = false;
    }
    setupSearchStream() {
        this.searchResponse$ = this.searchRequest$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((firstCall) => this.searchService.search(this.valueToSearch, firstCall, this.searchType)));
        this.searchResponse$.subscribe((results) => {
            this.searchDone = true;
            this.isSearching = false;
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
            // debugger;
            const lastResults = results.flat().filter((resource) => resource.type);
            if (lastResults.length > 0 && results.flat().length < this.resultsSize) {
                this.results.push(...lastResults);
                this.showNoMoreResults();
            }
            else if (lastResults.length === 0) {
                this.showNoMoreResults();
            }
            else {
                this.results = [...this.results, ...lastResults];
                // if (this.searchType === SearchTypes.image) {
                // } else {
                //   this.results.push(...lastResults);
                // }
            }
        });
    }
    search(firstCall) {
        if (!this.valueToSearch || this.valueToSearch.length < this.minLetters) {
            this.showMinimumLettersRequired();
            return;
        }
        if (this.lastValueSearched !== this.valueToSearch) {
            this.lastValueSearched = this.valueToSearch;
        }
        if (firstCall) {
            this.initSearch();
            this.pristine = false;
            Keyboard.hide();
        }
        this.isSearching = true;
        this.searchRequest$.next(firstCall);
    }
    showNoMoreResults() {
        if (this.noMoreResults) {
            return;
        }
        this.showNoResultsMessage = !this.results.length;
        this.noMoreResults = true;
        if (this.infiniteScroll) {
            this.infiniteScroll.disabled = true;
        }
        this.presentToast(`Ooops!! No encontramos${this.results.length ? ' más' : ''} resultados`, 3000);
    }
    showMinimumLettersRequired() {
        this.presentToast(`Debes ingresar mínimo ${this.minLetters} letras para realizar una búsqueda`, 3000);
    }
    bottomReached() {
        if (this.valueToSearch !== this.lastValueSearched) {
            this.valueToSearch = this.lastValueSearched;
        }
        this.search(false);
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
    shouldAddSearchToHeader(event) {
        if (!this.addSearchToHeader &&
            event.detail.scrollTop > (this.searchBoxBottomPosition + this.headerHeight + 20) &&
            this.headerBox.el.classList.contains('already-hidden')) {
            this.addSearchToHeader = true;
        }
        else if (this.addSearchToHeader && event.detail.scrollTop < 20) {
            this.addSearchToHeader = false;
        }
    }
    openDetails(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.detailsPageActive) {
                return;
            }
            this.detailsPageActive = true;
            this.shouldClearAudioPlaying();
            const modal = yield this.modalController.create({
                component: _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_4__["DetailsModalComponent"],
                componentProps: {
                    itemAboutString: item.about,
                }
            });
            this.dismissCurrentToast();
            modal.present();
            this.backButtonEventlistener.remove();
            modal.onDidDismiss().then(() => {
                this.setBackButtonListener();
                this.detailsPageActive = false;
            });
        });
    }
    setBackButtonListener() {
        this.backButtonCounter = 0;
        this.backButtonEventlistener = App.addListener('backButton', (data) => {
            this.backButtonCounter++;
            if (this.backButtonCounter >= 2) {
                App.exitApp();
            }
            const message = 'Presiona el botón atrás de nuevo para salir de la aplicación.';
            this.presentToast(message, 3000);
            setTimeout(() => {
                this.backButtonCounter = 0;
            }, 3000);
        });
    }
    playEvent(event) {
        const audioPlayer = event;
        if (this.audioCurrentlyPlaying && !audioPlayer.paused) {
            this.audioCurrentlyPlaying.pause();
            this.audioCurrentlyPlaying.currentTime = 0;
            this.audioCurrentlyPlaying = audioPlayer;
        }
        else if (!this.audioCurrentlyPlaying && !audioPlayer.paused) {
            this.audioCurrentlyPlaying = audioPlayer;
        }
    }
    shouldClearAudioPlaying() {
        if (this.audioCurrentlyPlaying) {
            this.clearAudioCurrentlyPlaying();
        }
    }
    clearAudioCurrentlyPlaying() {
        this.audioCurrentlyPlaying.pause();
        this.audioCurrentlyPlaying.currentTime = 0;
        this.audioCurrentlyPlaying = null;
    }
    setSearchType(type) {
        this.searchType = type;
        if (!this.pristine) {
            if (!this.valueToSearch || this.valueToSearch.length < this.minLetters) {
                this.valueToSearch = this.lastValueSearched;
            }
            this.search(true);
        }
    }
    updateActiveLicenses(active, license) {
        this.searchService.updateActiveLicenses(license, active);
    }
    get showActiveLicensesCount() {
        return this.activeLicensesCount && this.activeLicensesCount < this.licenses.length;
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.componentInitializing) {
                this.componentInitializing = false;
                return;
            }
            if (this.searchService.getDefaultSearchChangedInSettings()) {
                const defaultSearchType = yield this.getDefaultSearchType();
                if (this.searchType && this.searchType !== defaultSearchType) {
                    this.initSearch();
                    this.pristine = true;
                    this.searchType = defaultSearchType;
                }
                this.searchService.setDefaultSearchChangedInSettings(false);
            }
        });
    }
    ionViewWillLeave() {
        this.dismissCurrentToast();
    }
    ionViewDidEnter() {
        this.setBackButtonListener();
    }
    ionViewDidLeave() {
        if (this.menuIsOpened) {
            this.toggleLicensesMenu();
        }
        this.backButtonEventlistener.remove();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
], HomePage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('searchBarWrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], HomePage.prototype, "searchBox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomePage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('header', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomePage.prototype, "headerBox", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/download.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/download.service.ts ***!
  \**********************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../helpers */ "./src/app/helpers.ts");







let DownloadService = class DownloadService {
    constructor(transfer, file, platform, androidPermissions, loadingController) {
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.loadingController = loadingController;
        this.SUBSTRING_NAME_LENGHT = 30;
        this.fileTransfer = this.transfer.create();
    }
    validateAndroidPermissions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                if (result.hasPermission) {
                    return true;
                }
            }
            catch (error) {
                console.warn(error);
            }
            const permissionGranted = yield this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
            return permissionGranted.hasPermission;
        });
    }
    download(resource, title, fileExt, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                const hasPermission = yield this.validateAndroidPermissions();
                if (!hasPermission) {
                    return this.returnDownloadError('error in write permission validation');
                }
            }
            this.showDownloadingAlert();
            const url = resource.url;
            const fileNameString = title.toLowerCase().substr(0, this.SUBSTRING_NAME_LENGHT);
            const alternateName = resource.alternateName && resource.alternateName !== 'Original' ? resource.alternateName : '';
            const fileName = `${fileNameString}${alternateName ? '-' + alternateName : ''}.${fileExt}`;
            let deviceDirectoryPath = this.selectDeviceStoragePath();
            const mainFolderIsValid = yield this.validateFolder(deviceDirectoryPath, 'Crotalus');
            if (!mainFolderIsValid) {
                return this.returnDownloadError('error in Crotalus main folder validation');
            }
            deviceDirectoryPath = `${deviceDirectoryPath}Crotalus/`;
            const targetType = resource.alternateName === 'Vista previa' || resource.alternateName === 'Miniatura' ? 'image' : type;
            const fileTypeFolder = `Crotalus ${_helpers__WEBPACK_IMPORTED_MODULE_6__["getItemTypeLabel"](targetType, true)}`;
            const fileTypeFolderIsValid = yield this.validateFolder(deviceDirectoryPath, fileTypeFolder);
            if (!fileTypeFolderIsValid) {
                return this.returnDownloadError('error in filetype folder validation');
            }
            deviceDirectoryPath = `${deviceDirectoryPath}${fileTypeFolder}/`;
            try {
                const result = yield this.fileTransfer.download(url, deviceDirectoryPath + fileName);
                this.downloadingAlert.dismiss();
                return result;
            }
            catch (error) {
                this.returnDownloadError('error downloading file: ', error);
            }
        });
    }
    validateFolder(directoryPath, folder) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let folderExists = true;
            try {
                yield this.file.checkDir(directoryPath, folder);
            }
            catch (error) {
                try {
                    yield this.file.createDir(directoryPath, folder, false);
                }
                catch (error) {
                    folderExists = false;
                }
            }
            return folderExists;
        });
    }
    selectDeviceStoragePath() {
        return this.platform.is('ios') ? this.file.dataDirectory : this.file.externalRootDirectory;
    }
    showDownloadingAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.downloadingAlert = yield this.loadingController.create({
                message: 'Descargando...',
                duration: 0
            });
            yield this.downloadingAlert.present();
        });
    }
    returnDownloadError(message, error) {
        if (error) {
            console.warn(message, error);
        }
        else {
            console.warn(message);
        }
        if (this.downloadingAlert) {
            this.downloadingAlert.dismiss();
        }
        return 'error';
    }
};
DownloadService.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], DownloadService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map