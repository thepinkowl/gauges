function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWeekSelectorWeekSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"day\" [ngClass]=\"{'selected': week.includes(day.day), 'bi-weekly': !!biWeekly}\" (click)=\"toggle(day)\" *ngFor=\"let day of days\">\n  {{day.symbol}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskDetailTaskDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <main>\n    <div class=\"form\">\n      <div class=\"cancel-button\">\n        <ion-button (click)=\"goBack()\" fill=\"clear\">Cancel</ion-button>\n      </div>\n\n      <div class=\"form-element\">\n        <div class=\"title\">Let's give it a name!</div>\n        <ion-input [(ngModel)]=\"task.title\"></ion-input>\n      </div>\n\n      <div class=\"form-element\">\n        <div class=\"title\">When do you usually do this task?</div>\n        <app-week-selector\n          [biWeekly]=\"biWeekly\"\n          [(week)]=\"task.when\"\n        ></app-week-selector>\n        <div *ngIf=\"false\" class=\"repeater\">\n          <small>repeats every two weeks </small>\n          <ion-toggle [(ngModel)]=\"biWeekly\"></ion-toggle>\n        </div>\n      </div>\n      <div *ngIf=\"new\" class=\"form-element\">\n        <div class=\"title\">When did you last do this?</div>\n        <ion-datetime\n          displayFormat=\"DDDD MMM D, YYYY\"\n          (ionChange)=\"onChange($event)\"\n          [max]=\"now.toISOString()\"\n          [value]=\"lastExecution\"\n        >\n        </ion-datetime>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <ion-button *ngIf=\"new\" expand=\"block\" color=\"primary\" (click)=\"create()\">Create</ion-button>\n      <ion-button *ngIf=\"!new\" expand=\"block\" color=\"primary\" (click)=\"update()\">Update</ion-button>\n      <ion-button *ngIf=\"!new\" fill=\"clear\" color=\"danger\" (click)=\"delete()\">Remove this task</ion-button>\n    </div>\n  </main>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/week-selector/week-selector.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/week-selector/week-selector.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWeekSelectorWeekSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: space-between;\n}\n:host .day {\n  border-radius: 50%;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n:host .day:active, :host .day.selected {\n  background-color: var(--ion-color-light);\n}\n:host .day:active.bi-weekly, :host .day.selected.bi-weekly {\n  background: linear-gradient(90deg, var(--ion-color-light), var(--ion-color-light) 50%, transparent 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWVrLXNlbGVjdG9yL3dlZWstc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUVFLHdDQUFBO0FDQ047QURDTTtFQUNFLHVHQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5kYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6YWN0aXZlLFxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICAgJi5iaS13ZWVrbHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci1saWdodCksIHZhcigtLWlvbi1jb2xvci1saWdodCkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuZGF5IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmRheTphY3RpdmUsIDpob3N0IC5kYXkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmRheTphY3RpdmUuYmktd2Vla2x5LCA6aG9zdCAuZGF5LnNlbGVjdGVkLmJpLXdlZWtseSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/week-selector/week-selector.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/week-selector/week-selector.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WeekSelectorComponent */

  /***/
  function srcAppComponentsWeekSelectorWeekSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekSelectorComponent", function () {
      return WeekSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WeekSelectorComponent = /*#__PURE__*/function () {
      function WeekSelectorComponent() {
        _classCallCheck(this, WeekSelectorComponent);

        this.value = [];
        this.days = [{
          symbol: 'M',
          day: 1
        }, {
          symbol: 'T',
          day: 2
        }, {
          symbol: 'W',
          day: 3
        }, {
          symbol: 'T',
          day: 4
        }, {
          symbol: 'F',
          day: 5
        }, {
          symbol: 'S',
          day: 6
        }, {
          symbol: 'S',
          day: 0
        }];
        this.weekChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(WeekSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle(day) {
          if (this.week.includes(day.day)) {
            this.week = _toConsumableArray(this.week.filter(function (d) {
              return day.day !== d;
            }));
          } else {
            this.week = [].concat(_toConsumableArray(this.week), [day.day]);
          }
        }
      }, {
        key: "week",
        get: function get() {
          return this.value;
        },
        set: function set(val) {
          this.value = val;
          this.weekChange.emit(val);
        }
      }]);

      return WeekSelectorComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], WeekSelectorComponent.prototype, "weekChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekSelectorComponent.prototype, "week", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekSelectorComponent.prototype, "biWeekly", void 0);
    WeekSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-week-selector',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./week-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./week-selector.component.scss */
      "./src/app/components/week-selector/week-selector.component.scss"))["default"]]
    })], WeekSelectorComponent);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TaskDetailPageRoutingModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageRoutingModule", function () {
      return TaskDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");

    var routes = [{
      path: '',
      component: _task_detail_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailPage"]
    }];

    var TaskDetailPageRoutingModule = function TaskDetailPageRoutingModule() {
      _classCallCheck(this, TaskDetailPageRoutingModule);
    };

    TaskDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDetailPageModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageModule", function () {
      return TaskDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-detail-routing.module */
    "./src/app/pages/task-detail/task-detail-routing.module.ts");
    /* harmony import */


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");
    /* harmony import */


    var src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/week-selector/week-selector.component */
    "./src/app/components/week-selector/week-selector.component.ts");

    var TaskDetailPageModule = function TaskDetailPageModule() {
      _classCallCheck(this, TaskDetailPageModule);
    };

    TaskDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetailPageRoutingModule"]],
      declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"], src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__["WeekSelectorComponent"]]
    })], TaskDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host main {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding-bottom: calc(env(safe-area-inset-bottom) + 10px);\n}\n:host main .form {\n  flex: 1;\n}\n:host main .form .cancel-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-weight: bold;\n}\n:host main .form .form-element {\n  padding: 10px 20px;\n}\n:host main .form .form-element ion-datetime,\n:host main .form .form-element ion-input {\n  border: 1px solid var(--ion-color-light);\n}\n:host main .form .form-element ion-input {\n  padding: 0 10px !important;\n}\n:host main .form .form-element .title {\n  font-weight: bold;\n  max-width: 70%;\n  padding: 20px 0 10px;\n}\n:host main .form .form-element app-week-selector {\n  width: 100%;\n}\n:host main .form .form-element .repeater {\n  padding-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n:host main .form .form-element .repeater ion-toggle {\n  margin-left: 15px;\n}\n:host main .actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QUNBSjtBREVJO0VBQ0UsT0FBQTtBQ0FOO0FERU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQVI7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURHUTs7RUFFRSx3Q0FBQTtBQ0RWO0FESVE7RUFDRSwwQkFBQTtBQ0ZWO0FES1E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0hWO0FETVE7RUFDRSxXQUFBO0FDSlY7QURPUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNMVjtBRE9VO0VBQ0UsaUJBQUE7QUNMWjtBRFdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLWRldGFpbC90YXNrLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDEwcHgpO1xuXG4gICAgLmZvcm0ge1xuICAgICAgZmxleDogMTtcblxuICAgICAgLmNhbmNlbC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZWxlbWVudCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAgICAgICBpb24tZGF0ZXRpbWUsXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXdlZWstc2VsZWN0b3Ige1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGVhdGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgaW9uLXRvZ2dsZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDEwcHgpO1xufVxuOmhvc3QgbWFpbiAuZm9ybSB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCBtYWluIC5mb3JtIC5jYW5jZWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQgaW9uLWRhdGV0aW1lLFxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQgaW9uLWlucHV0IHtcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBtYWluIC5mb3JtIC5mb3JtLWVsZW1lbnQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogNzAlO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcbn1cbjpob3N0IG1haW4gLmZvcm0gLmZvcm0tZWxlbWVudCBhcHAtd2Vlay1zZWxlY3RvciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiAuZm9ybSAuZm9ybS1lbGVtZW50IC5yZXBlYXRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjpob3N0IG1haW4gLmZvcm0gLmZvcm0tZWxlbWVudCAucmVwZWF0ZXIgaW9uLXRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuOmhvc3QgbWFpbiAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskDetailPage */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPage", function () {
      return TaskDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/tasks.service */
    "./src/app/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_models_Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/Task */
    "./src/app/models/Task.ts");

    var TaskDetailPage = /*#__PURE__*/function () {
      function TaskDetailPage(nav, tasksService, activatedRoute) {
        _classCallCheck(this, TaskDetailPage);

        this.nav = nav;
        this.tasksService = tasksService;
        this.activatedRoute = activatedRoute;
        this.when = [5];
        this.biWeekly = false;
        this.now = new Date();
        this.task = src_app_models_Task__WEBPACK_IMPORTED_MODULE_5__["default"].createEmpty();
        this["new"] = true;
        this.lastExecution = this.now.toISOString();
      }

      _createClass(TaskDetailPage, [{
        key: "onChange",
        value: function onChange(e) {
          var newDate = new Date(e.detail.value);
          this.task.lastDone.setTime(newDate.getTime());
          this.task.computeProgress();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var task;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this["new"] = params.id === 'new';

                      if (this["new"]) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return this.tasksService.getTaskById(params.id);

                    case 4:
                      task = _context.sent;
                      this.task = task;
                      this.lastExecution = task.lastDone.toISOString();

                    case 7:
                      this.task.computeProgress();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          if (window.history.length > 2) {
            this.nav.back();
          } else {
            this.nav.navigateBack('/');
          }
        }
      }, {
        key: "create",
        value: function create() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this["new"]) {
                      _context2.next = 4;
                      break;
                    }

                    _context2.next = 3;
                    return this.tasksService.createTask(this.task);

                  case 3:
                    this.goBack();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "update",
        value: function update() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this["new"]) {
                      _context3.next = 4;
                      break;
                    }

                    _context3.next = 3;
                    return this.tasksService.updateTask(this.task);

                  case 3:
                    this.goBack();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          if (!this["new"]) {
            this.tasksService.deleteTask(this.task);
            this.goBack();
          }
        }
      }]);

      return TaskDetailPage;
    }();

    TaskDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    TaskDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-detail.page.scss */
      "./src/app/pages/task-detail/task-detail.page.scss"))["default"]]
    })], TaskDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-task-detail-task-detail-module-es5.js.map