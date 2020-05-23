(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-button (click)=\"goBack()\" fill=\"clear\">Cancel</ion-button>\n  <!-- <AtoZCol>\n      <div>\n        <CancelButton onClick={goBack}>Cancel</CancelButton>\n        <IonItem>\n          <IonLabel position=\"stacked\">Let's give it a name</IonLabel>\n          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When do you usually do this task?</IonLabel>\n          <WeekSelector when={when} onValueChange={data => setWhen(data)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When did you last do this?</IonLabel>\n          <IonDatetime displayFormat=\"DDDD MMM D, YYYY\"\n            value={lastExecution?.toISOString()} onIonChange={e => changeLastExecution(e.detail.value!)}>\n          </IonDatetime>\n        </IonItem>\n      </div>\n      <div className=\"actions\">\n        <IonButton size=\"large\" onClick={save} expand=\"block\">{task ? 'Update' : 'Create'}</IonButton>\n        {task && (<span className='remove' onClick={() => remove(task)}>Remove this task</span>)}\n      </div>\n    </AtoZCol>\n    <IonToast\n      isOpen={!isFormValid}\n      onDidDismiss={() => setIsFormValid(true)}\n      message=\"All fields are required.\"\n      duration={1000}\n    /> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/task-detail/task-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPageRoutingModule", function() { return TaskDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-detail.page */ "./src/app/pages/task-detail/task-detail.page.ts");




const routes = [
    {
        path: '',
        component: _task_detail_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailPage"]
    }
];
let TaskDetailPageRoutingModule = class TaskDetailPageRoutingModule {
};
TaskDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/task-detail/task-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPageModule", function() { return TaskDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-detail-routing.module */ "./src/app/pages/task-detail/task-detail-routing.module.ts");
/* harmony import */ var _task_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-detail.page */ "./src/app/pages/task-detail/task-detail.page.ts");







let TaskDetailPageModule = class TaskDetailPageModule {
};
TaskDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetailPageRoutingModule"]
        ],
        declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"]]
    })
], TaskDetailPageModule);



/***/ }),

/***/ "./src/app/pages/task-detail/task-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/task-detail/task-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: TaskDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPage", function() { return TaskDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let TaskDetailPage = class TaskDetailPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    goBack() {
        this.nav.pop();
    }
};
TaskDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
TaskDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./task-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./task-detail.page.scss */ "./src/app/pages/task-detail/task-detail.page.scss")).default]
    })
], TaskDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-task-detail-task-detail-module-es2015.js.map