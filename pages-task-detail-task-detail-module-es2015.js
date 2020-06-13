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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <main>\n    <div class=\"form\">\n      <div class=\"cancel-button\">\n        <ion-button (click)=\"goBack()\" fill=\"clear\">Cancel</ion-button>\n      </div>\n\n      <div class=\"form-element\">\n        <div class=\"title\">Let's give it a name!</div>\n        <ion-input></ion-input>\n      </div>\n\n      <div class=\"form-element\">\n        <div class=\"title\">When do you usually do this task?</div>\n        <app-week-selector\n          [biWeekly]=\"biWeekly\"\n          [(week)]=\"when\"\n        ></app-week-selector>\n        <div class=\"repeater\">\n          <small>repeats every two weeks </small>\n          <ion-toggle [(ngModel)]=\"biWeekly\"></ion-toggle>\n        </div>\n      </div>\n      <div class=\"form-element\">\n        <div class=\"title\">When did you last do this?</div>\n        <ion-datetime\n          displayFormat=\"DDDD MMM D, YYYY\"\n          [max]=\"now.toISOString()\"\n          [value]=\"lastExecution?.toISOString()\"\n        >\n        </ion-datetime>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <ion-button expand=\"block\" color=\"primary\">Update</ion-button>\n      <ion-button fill=\"clear\" color=\"danger\">Remove this task</ion-button>\n    </div>\n  </main>\n  <!-- <AtoZCol>\n      <div>\n        <CancelButton onClick={goBack}>Cancel</CancelButton>\n        <IonItem>\n          <IonLabel position=\"stacked\">Let's give it a name</IonLabel>\n          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When do you usually do this task?</IonLabel>\n          <WeekSelector when={when} onValueChange={data => setWhen(data)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When did you last do this?</IonLabel>\n          <IonDatetime displayFormat=\"DDDD MMM D, YYYY\"\n            value={lastExecution?.toISOString()} onIonChange={e => changeLastExecution(e.detail.value!)}>\n          </IonDatetime>\n        </IonItem>\n      </div>\n      <div className=\"actions\">\n        <IonButton size=\"large\" onClick={save} expand=\"block\">{task ? 'Update' : 'Create'}</IonButton>\n        {task && (<span className='remove' onClick={() => remove(task)}>Remove this task</span>)}\n      </div>\n    </AtoZCol>\n    <IonToast\n      isOpen={!isFormValid}\n      onDidDismiss={() => setIsFormValid(true)}\n      message=\"All fields are required.\"\n      duration={1000}\n    /> -->\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n:host main {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n:host main .form {\n  flex: 1;\n}\n:host main .form .cancel-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-weight: bold;\n}\n:host main .form .form-element {\n  padding: 10px 20px;\n}\n:host main .form .form-element ion-datetime,\n:host main .form .form-element ion-input {\n  border: 1px solid var(--ion-color-light);\n}\n:host main .form .form-element ion-input {\n  padding: 0 10px !important;\n}\n:host main .form .form-element .title {\n  font-weight: bold;\n  max-width: 70%;\n  padding: 20px 0 10px;\n}\n:host main .form .form-element app-week-selector {\n  width: 100%;\n}\n:host main .form .form-element .repeater {\n  padding-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n:host main .form .form-element .repeater ion-toggle {\n  margin-left: 15px;\n}\n:host main .actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0UsT0FBQTtBQ0NOO0FEQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFTTtFQUNFLGtCQUFBO0FDQVI7QURFUTs7RUFFRSx3Q0FBQTtBQ0FWO0FER1E7RUFDRSwwQkFBQTtBQ0RWO0FESVE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0ZWO0FES1E7RUFDRSxXQUFBO0FDSFY7QURNUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNKVjtBRE1VO0VBQ0UsaUJBQUE7QUNKWjtBRFVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgICAuZm9ybSB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1lbGVtZW50IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAgIGlvbi1kYXRldGltZSxcbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtd2Vlay1zZWxlY3RvciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwZWF0ZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG59XG46aG9zdCBtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbjpob3N0IG1haW4gLmZvcm0ge1xuICBmbGV4OiAxO1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuY2FuY2VsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IGlvbi1kYXRldGltZSxcbjpob3N0IG1haW4gLmZvcm0gLmZvcm0tZWxlbWVudCBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQgYXBwLXdlZWstc2VsZWN0b3Ige1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gLmZvcm0gLmZvcm0tZWxlbWVudCAucmVwZWF0ZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQgLnJlcGVhdGVyIGlvbi10b2dnbGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbjpob3N0IG1haW4gLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0MHB4O1xufSJdfQ== */");

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
    }
    get lastExecution() {
        return new Date('2020-06-13');
    }
    ngOnInit() { }
    goBack() {
        if (window.history.length > 2) {
            this.nav.back();
        }
        else {
            this.nav.navigateBack('/');
        }
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