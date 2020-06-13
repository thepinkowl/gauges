(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"day\" [ngClass]=\"{'selected': week.includes(day.day), 'bi-weekly': !!biWeekly}\" (click)=\"toggle(day)\" *ngFor=\"let day of days\">\n  {{day.symbol}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"cancel-button\">\n    <ion-button (click)=\"goBack()\" fill=\"clear\">Cancel</ion-button>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Let's give it a name!</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">When do you usually do this task?</ion-label>\n    <app-week-selector\n      [biWeekly]=\"biWeekly\"\n      [(week)]=\"when\"\n    ></app-week-selector>\n    <div class=\"repeater\">\n      <small>repeats every two weeks </small>\n      <ion-toggle [(ngModel)]=\"biWeekly\"></ion-toggle>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">When did you last do this?</ion-label>\n    <ion-datetime\n      displayFormat=\"DDDD MMM D, YYYY\"\n      [max]=\"now.toISOString()\"\n      [value]=\"lastExecution?.toISOString()\"\n    >\n    </ion-datetime>\n  </ion-item>\n\n  <div class=\"actions\">\n    <ion-button expand=\"block\" color=\"primary\">Update</ion-button>\n    <ion-button fill=\"clear\" color=\"danger\">Remove this task</ion-button>\n  </div>\n  <!-- <AtoZCol>\n      <div>\n        <CancelButton onClick={goBack}>Cancel</CancelButton>\n        <IonItem>\n          <IonLabel position=\"stacked\">Let's give it a name</IonLabel>\n          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When do you usually do this task?</IonLabel>\n          <WeekSelector when={when} onValueChange={data => setWhen(data)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When did you last do this?</IonLabel>\n          <IonDatetime displayFormat=\"DDDD MMM D, YYYY\"\n            value={lastExecution?.toISOString()} onIonChange={e => changeLastExecution(e.detail.value!)}>\n          </IonDatetime>\n        </IonItem>\n      </div>\n      <div className=\"actions\">\n        <IonButton size=\"large\" onClick={save} expand=\"block\">{task ? 'Update' : 'Create'}</IonButton>\n        {task && (<span className='remove' onClick={() => remove(task)}>Remove this task</span>)}\n      </div>\n    </AtoZCol>\n    <IonToast\n      isOpen={!isFormValid}\n      onDidDismiss={() => setIsFormValid(true)}\n      message=\"All fields are required.\"\n      duration={1000}\n    /> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/week-selector/week-selector.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/week-selector/week-selector.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: space-between;\n}\n:host .day {\n  border-radius: 50%;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n:host .day:active, :host .day.selected {\n  background-color: var(--ion-color-light);\n}\n:host .day:active.bi-weekly, :host .day.selected.bi-weekly {\n  background: linear-gradient(90deg, var(--ion-color-light), var(--ion-color-light) 50%, transparent 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWVrLXNlbGVjdG9yL3dlZWstc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUVFLHdDQUFBO0FDQ047QURDTTtFQUNFLHVHQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5kYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6YWN0aXZlLFxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICAgJi5iaS13ZWVrbHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci1saWdodCksIHZhcigtLWlvbi1jb2xvci1saWdodCkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuZGF5IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmRheTphY3RpdmUsIDpob3N0IC5kYXkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmRheTphY3RpdmUuYmktd2Vla2x5LCA6aG9zdCAuZGF5LnNlbGVjdGVkLmJpLXdlZWtseSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/week-selector/week-selector.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/week-selector/week-selector.component.ts ***!
  \*********************************************************************/
/*! exports provided: WeekSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekSelectorComponent", function() { return WeekSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WeekSelectorComponent = class WeekSelectorComponent {
    constructor() {
        this.value = [];
        this.days = [
            { symbol: 'M', day: 1 },
            { symbol: 'T', day: 2 },
            { symbol: 'W', day: 3 },
            { symbol: 'T', day: 4 },
            { symbol: 'F', day: 5 },
            { symbol: 'S', day: 6 },
            { symbol: 'S', day: 0 },
        ];
        this.weekChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get week() {
        return this.value;
    }
    set week(val) {
        this.value = val;
        console.log(val);
        this.weekChange.emit(val);
    }
    ngOnInit() { }
    toggle(day) {
        if (this.week.includes(day.day)) {
            this.week = [...this.week.filter((d) => day.day !== d)];
        }
        else {
            this.week = [...this.week, day.day];
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WeekSelectorComponent.prototype, "weekChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeekSelectorComponent.prototype, "week", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeekSelectorComponent.prototype, "biWeekly", void 0);
WeekSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-week-selector',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./week-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./week-selector.component.scss */ "./src/app/components/week-selector/week-selector.component.scss")).default]
    })
], WeekSelectorComponent);



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
/* harmony import */ var src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/week-selector/week-selector.component */ "./src/app/components/week-selector/week-selector.component.ts");








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
        declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"], src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__["WeekSelectorComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding-top: env(safe-area-inset-top);\n}\n:host .cancel-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-weight: bold;\n}\n:host app-week-selector {\n  width: 100%;\n}\n:host .repeater {\n  padding-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n:host .repeater ion-toggle {\n  margin-left: 15px;\n}\n:host .actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBQ0ksV0FBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRFI7QURHUTtFQUNJLGlCQUFBO0FDRFo7QURLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcblxuICAgIC5jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgYXBwLXdlZWstc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucmVwZWF0ZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgaW9uLXRvZ2dsZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufSIsIjpob3N0IHtcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbn1cbjpob3N0IC5jYW5jZWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBhcHAtd2Vlay1zZWxlY3RvciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLnJlcGVhdGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLnJlcGVhdGVyIGlvbi10b2dnbGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbjpob3N0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

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
        this.when = [5];
        this.biWeekly = false;
        this.now = new Date();
        console.log(nav);
    }
    get lastExecution() {
        return new Date('2020-06-13');
    }
    ngOnInit() { }
    goBack() {
        this.nav.pop();
    }
    log(...args) {
        console.log(args);
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