function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gauge/gauge.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gauge/gauge.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGaugeGaugeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"fill\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mood-title/mood-title.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mood-title/mood-title.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMoodTitleMoodTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>\n  Hey <span>you</span>, you're doing well today!\n</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task/task.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task/task.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item-sliding>\n  <ion-item-options side=\"start\">\n    <ion-item-option expandable color=\"success\">\n      <ion-icon slot=\"start\" name=\"checkmark-done-outline\"></ion-icon>I've just done it\n    </ion-item-option>\n  </ion-item-options>\n\n  <ion-item>\n    <ion-grid>\n      <ion-row id=\"first-row\">\n        <div id=\"title\">{{task.title}}</div>\n        <app-week-display [when]=\"task.when\"></app-week-display>\n      </ion-row>\n      <ion-row id=\"subtext\">\n        Last done two days ago\n      </ion-row>\n      <ion-row>\n       <app-gauge [percentage]=\"70\"></app-gauge>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item-options side=\"end\" (ionSwipe)=\"edit()\">\n    <ion-item-option color=\"danger\">Delete</ion-item-option>\n    <ion-item-option (click)=\"edit()\" expandable>Edit</ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n<!-- <ion-item-sliding ref={this.doneSliderRef} onClick={this.switchSlider}>\n  <IonItemOptions side=\"start\" onIonSwipe={this.markAsDone}>\n    <IonItemOption expandable color=\"success\" onClick={this.markAsDone}>\n      <IonIcon slot=\"start\" icon={checkmarkDoneOutline}></IonIcon>I've just done it\n    </IonItemOption>\n  </IonItemOptions>\n\n  <IonItemCustom>\n    <GaugeContent task={this.props.task} />\n  </IonItemCustom>\n\n  <IonItemOptions side=\"end\" onIonSwipe={this.editGauge}>\n    <IonItemOption color=\"danger\" onClick={this.deleteGauge}>Delete</IonItemOption>\n    <IonItemOption expandable onClick={this.editGauge}>Edit</IonItemOption>\n  </IonItemOptions>\n</ion-item-sliding> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-display/week-display.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-display/week-display.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWeekDisplayWeekDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"day\" *ngFor=\"let day of days\" [ngClass]=\"{\n    'selected': when?.includes(day.id)\n  }\">\n  {{day.symbol}}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> -->\n  \n  <!-- <ion-list>\n    <app-message *ngFor=\"let message of getMessages()\" [message]=\"message\"></app-message>\n  </ion-list> -->\n\n  <app-mood-title></app-mood-title>\n  <ion-list>\n    <app-task *ngFor=\"let task of tasks\" [task]=\"task\">\n    </app-task>\n  </ion-list>\n\n  <!-- <IonContent fullscreen>\n    <MoodTitle status=\"well\" />\n    <IonList>\n      {tasks.map(t => <GaugeListItem history={history} key={t.id} task={t} />)}\n    </IonList>\n    <NewTaskButton onClick={() => history.push('/tasks/new')}>Create a new repeating task</NewTaskButton>\n  </IonContent> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/gauge/gauge.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/gauge/gauge.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGaugeGaugeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 10px;\n  width: 100%;\n  border-radius: 10px;\n  background-color: lawngreen;\n  padding: 2px;\n  margin-left: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL2dhdWdlL2dhdWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhdWdlL2dhdWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhdWdlL2dhdWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG59IiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/gauge/gauge.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/gauge/gauge.component.ts ***!
    \*****************************************************/

  /*! exports provided: GaugeComponent */

  /***/
  function srcAppComponentsGaugeGaugeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaugeComponent", function () {
      return GaugeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GaugeComponent = /*#__PURE__*/function () {
      function GaugeComponent() {
        _classCallCheck(this, GaugeComponent);
      }

      _createClass(GaugeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GaugeComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GaugeComponent.prototype, "percentage", void 0);
    GaugeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gauge',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gauge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gauge/gauge.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gauge.component.scss */
      "./src/app/components/gauge/gauge.component.scss"))["default"]]
    })], GaugeComponent);
    /***/
  },

  /***/
  "./src/app/components/mood-title/mood-title.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/mood-title/mood-title.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMoodTitleMoodTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host h1 {\n  width: 73%;\n  max-width: 350px;\n  font-family: var(--tpo-font-family);\n  font-size: var(--tpo-font-big);\n  font-weight: 700;\n  line-height: 140%;\n  margin: var(--tpo-margin);\n  margin-top: 40px;\n}\n:host h1 span {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL21vb2QtdGl0bGUvbW9vZC10aXRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb29kLXRpdGxlL21vb2QtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVRO0VBQ0ksK0JBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9vZC10aXRsZS9tb29kLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGgxIHtcbiAgICAgICAgd2lkdGg6IDczJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRwby1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdHBvLWZvbnQtYmlnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdHBvLW1hcmdpbik7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IGgxIHtcbiAgd2lkdGg6IDczJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRwby1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBvLWZvbnQtYmlnKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIG1hcmdpbjogdmFyKC0tdHBvLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG46aG9zdCBoMSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/mood-title/mood-title.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/mood-title/mood-title.component.ts ***!
    \***************************************************************/

  /*! exports provided: MoodTitleComponent */

  /***/
  function srcAppComponentsMoodTitleMoodTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoodTitleComponent", function () {
      return MoodTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MoodTitleComponent = /*#__PURE__*/function () {
      function MoodTitleComponent() {
        _classCallCheck(this, MoodTitleComponent);
      }

      _createClass(MoodTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoodTitleComponent;
    }();

    MoodTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mood-title',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mood-title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mood-title/mood-title.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mood-title.component.scss */
      "./src/app/components/mood-title/mood-title.component.scss"))["default"]]
    })], MoodTitleComponent);
    /***/
  },

  /***/
  "./src/app/components/task/task.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/task/task.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTaskTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-item {\n  --padding-start: 20px;\n}\n:host ion-grid #first-row {\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-grid #title {\n  font-size: 1.1em;\n  font-weight: 700;\n}\n:host ion-grid #subtext {\n  font-size: 1em;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtBQ0FSO0FESVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNGWjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FETVE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAgIH1cblxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgI2ZpcnN0LXJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgI3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1YnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG46aG9zdCBpb24tZ3JpZCAjZmlyc3Qtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgaW9uLWdyaWQgI3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGlvbi1ncmlkICNzdWJ0ZXh0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/task/task.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/task/task.component.ts ***!
    \***************************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppComponentsTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
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

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent(nav) {
        _classCallCheck(this, TaskComponent);

        this.nav = nav;
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "edit",
        value: function edit() {
          this.nav.navigateForward("/task/".concat(this.task.id));
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskComponent.prototype, "task", void 0);
    TaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task/task.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task.component.scss */
      "./src/app/components/task/task.component.scss"))["default"]]
    })], TaskComponent);
    /***/
  },

  /***/
  "./src/app/components/week-display/week-display.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/week-display/week-display.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWeekDisplayWeekDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: space-between;\n}\n:host div.day {\n  border-radius: 50%;\n  font-weight: 400;\n  margin-right: 1px;\n  width: 12px;\n  height: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--ion-color-medium);\n  font-size: 0.65em;\n}\n:host div.day.selected {\n  background-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL3dlZWstZGlzcGxheS93ZWVrLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2Vlay1kaXNwbGF5L3dlZWstZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ1E7RUFDSSx3Q0FBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWVrLWRpc3BsYXkvd2Vlay1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZGl2LmRheSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IGRpdi5kYXkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuNjVlbTtcbn1cbjpob3N0IGRpdi5kYXkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/week-display/week-display.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/week-display/week-display.component.ts ***!
    \*******************************************************************/

  /*! exports provided: WeekDisplayComponent */

  /***/
  function srcAppComponentsWeekDisplayWeekDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekDisplayComponent", function () {
      return WeekDisplayComponent;
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


    var src_utils_week_days_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/utils/week-days.const */
    "./src/utils/week-days.const.ts");

    var WeekDisplayComponent = /*#__PURE__*/function () {
      function WeekDisplayComponent() {
        _classCallCheck(this, WeekDisplayComponent);

        this.days = src_utils_week_days_const__WEBPACK_IMPORTED_MODULE_2__["WeekDays"];
      }

      _createClass(WeekDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WeekDisplayComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekDisplayComponent.prototype, "when", void 0);
    WeekDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-week-display',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./week-display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-display/week-display.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./week-display.component.scss */
      "./src/app/components/week-display/week-display.component.scss"))["default"]]
    })], WeekDisplayComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashBoardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPageRoutingModule", function () {
      return DashBoardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashBoardPage"]
    }];

    var DashBoardPageRoutingModule = function DashBoardPageRoutingModule() {
      _classCallCheck(this, DashBoardPageRoutingModule);
    };

    DashBoardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashBoardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashBoardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPageModule", function () {
      return DashBoardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/gauge/gauge.component */
    "./src/app/components/gauge/gauge.component.ts");
    /* harmony import */


    var src_app_components_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/task/task.component */
    "./src/app/components/task/task.component.ts");
    /* harmony import */


    var src_app_components_week_display_week_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/week-display/week-display.component */
    "./src/app/components/week-display/week-display.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");
    /* harmony import */


    var src_app_components_mood_title_mood_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/components/mood-title/mood-title.component */
    "./src/app/components/mood-title/mood-title.component.ts");

    var DashBoardPageModule = function DashBoardPageModule() {
      _classCallCheck(this, DashBoardPageModule);
    };

    DashBoardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashBoardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_9__["DashBoardPage"], src_app_components_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"], src_app_components_week_display_week_display_component__WEBPACK_IMPORTED_MODULE_7__["WeekDisplayComponent"], src_app_components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_5__["GaugeComponent"], src_app_components_mood_title_mood_title_component__WEBPACK_IMPORTED_MODULE_10__["MoodTitleComponent"]]
    })], DashBoardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashBoardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPage", function () {
      return DashBoardPage;
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


    var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/tasks.service */
    "./src/app/services/tasks.service.ts");

    var DashBoardPage = /*#__PURE__*/function () {
      function DashBoardPage(tasksService) {
        _classCallCheck(this, DashBoardPage);

        this.tasksService = tasksService;
        this.tasks = [];
      }

      _createClass(DashBoardPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.tasksService.getTasks().then(function (tasks) {
            return _this.tasks = tasks;
          });
        }
      }]);

      return DashBoardPage;
    }();

    DashBoardPage.ctorParameters = function () {
      return [{
        type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]
      }];
    };

    DashBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss"))["default"]]
    })], DashBoardPage);
    /***/
  },

  /***/
  "./src/app/services/tasks.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/tasks.service.ts ***!
    \*******************************************/

  /*! exports provided: TasksService */

  /***/
  function srcAppServicesTasksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksService", function () {
      return TasksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var defaultTasks = [{
      title: 'Laundry',
      when: [1, 3],
      executions: [new Date("2020-05-14T20:06:02.097+02:00"), new Date("2020-05-13T20:06:02.097+02:00")],
      id: 0
    }, {
      title: 'Gardening',
      when: [0, 1, 2],
      executions: [new Date("2020-05-16T20:06:02.097+02:00")],
      id: 1
    }, {
      title: 'Hoovering',
      when: [0, 1, 3],
      executions: [new Date("2020-05-17T20:06:02.097+02:00")],
      id: 2
    }];

    var TasksService = /*#__PURE__*/function () {
      function TasksService() {
        var _this2 = this;

        _classCallCheck(this, TasksService);

        this.tasks = [];
        this.localStorageKey = 'tasks';
        this.loadTasks().then(function (tasks) {
          return _this2.tasks = tasks;
        });
      }

      _createClass(TasksService, [{
        key: "getTasks",
        value: function getTasks() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.tasks);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getTaskById",
        value: function getTaskById(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", this.tasks.find(function (t) {
                      return t.id === id;
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.tasks = _toConsumableArray(this.tasks.filter(function (t) {
                      return t.id !== task.id;
                    }));
                    _context3.next = 3;
                    return this.persistTasksInDb();

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createOrUpdateTask",
        value: function createOrUpdateTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var doesTaskExist;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    doesTaskExist = !!task.id && !!this.tasks.find(function (t) {
                      return t.id === task.id;
                    });

                    if (doesTaskExist) {
                      _context4.next = 5;
                      break;
                    }

                    _context4.next = 4;
                    return this.createTask(task);

                  case 4:
                    return _context4.abrupt("return", _context4.sent);

                  case 5:
                    _context4.next = 7;
                    return this.updateTask(task);

                  case 7:
                    return _context4.abrupt("return", _context4.sent);

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "createTask",
        value: function createTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var biggestId;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    biggestId = this.tasks.reduce(function (acc, t) {
                      return t.id > acc ? t.id : acc;
                    }, 0);
                    task.id = biggestId + 1; // TODO: should we copy or just push instead?

                    this.tasks = [].concat(_toConsumableArray(this.tasks), [task]);
                    _context5.next = 5;
                    return this.persistTasksInDb();

                  case 5:
                    return _context5.abrupt("return", task);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "updateTask",
        value: function updateTask(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.tasks = [].concat(_toConsumableArray(this.tasks.filter(function (t) {
                      return t.id !== task.id;
                    })), [task]);
                    _context6.next = 3;
                    return this.persistTasksInDb();

                  case 3:
                    return _context6.abrupt("return", task);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loadTasks",
        value: function loadTasks() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadTasksFromDb();

                  case 2:
                    _context7.t0 = _context7.sent;

                    if (_context7.t0) {
                      _context7.next = 5;
                      break;
                    }

                    _context7.t0 = [].concat(defaultTasks);

                  case 5:
                    return _context7.abrupt("return", _context7.t0);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "persistTasksInDb",
        value: function persistTasksInDb() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "loadTasksFromDb",
        value: function loadTasksFromDb() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var fromDB, parsed;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    fromDB = localStorage.getItem(this.localStorageKey);

                    if (fromDB) {
                      _context9.next = 3;
                      break;
                    }

                    return _context9.abrupt("return", undefined);

                  case 3:
                    parsed = JSON.parse(fromDB);
                    parsed.forEach(function (task) {
                      task.executions = task.executions.map(function (e) {
                        return new Date(e);
                      });
                    });
                    return _context9.abrupt("return", parsed);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return TasksService;
    }();

    TasksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TasksService);
    /***/
  },

  /***/
  "./src/utils/week-days.const.ts":
  /*!**************************************!*\
    !*** ./src/utils/week-days.const.ts ***!
    \**************************************/

  /*! exports provided: WeekDays */

  /***/
  function srcUtilsWeekDaysConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekDays", function () {
      return WeekDays;
    });

    var WeekDays = [{
      id: 0,
      symbol: 'M'
    }, {
      id: 1,
      symbol: 'T'
    }, {
      id: 2,
      symbol: 'W'
    }, {
      id: 3,
      symbol: 'T'
    }, {
      id: 4,
      symbol: 'F'
    }, {
      id: 5,
      symbol: 'S'
    }, {
      id: 6,
      symbol: 'S'
    }];
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map