(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"!loadedBookings || loadedBookings.length <= 0\"\n        class=\"ion-text-center\"\n      >\n        <p>No bookings found!</p>\n      </ion-col>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"loadedBookings && loadedBookings.length > 0\"\n      >\n        <ion-list>\n          <ion-item-sliding\n            *ngFor=\"let booking of loadedBookings\"\n            #slidingBooking\n          >\n            <ion-item>\n              <ion-label>\n                <h5>{{ booking.placeTitle }}</h5>\n                <p>Guests: {{ booking.guestNumber }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option\n                color=\"danger\"\n                (click)=\"onCancelBooking(booking.id, slidingBooking)\"\n              >\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]
    }
];
var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.service */ "./src/app/bookings/booking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BookingsPage = /** @class */ (function () {
    function BookingsPage(bookingService, loadingCtrl) {
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
    }
    BookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingService.bookings.subscribe(function (bookings) {
            _this.loadedBookings = bookings;
        });
    };
    BookingsPage.prototype.onCancelBooking = function (bookingId, slidingEl) {
        var _this = this;
        slidingEl.close();
        this.loadingCtrl.create({ message: 'Cancelling...' }).then(function (loadingEl) {
            loadingEl.present();
            _this.bookingService.cancelBooking(bookingId).subscribe(function () {
                loadingEl.dismiss();
            });
        });
    };
    BookingsPage.prototype.ngOnDestroy = function () {
        if (this.bookingSub) {
            this.bookingSub.unsubscribe();
        }
    };
    BookingsPage.ctorParameters = function () { return [
        { type: _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
    ]; };
    BookingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], BookingsPage);
    return BookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module.js.map