function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-dashboard-dashboard-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashBoardPageModule;
        });
      }
    }, {
      path: 'task/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-task-detail-task-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-task-detail-task-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/task-detail/task-detail.module */
        "./src/app/pages/task-detail/task-detail.module.ts")).then(function (m) {
          return m.TaskDetailPageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .ion-page {\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAuaW9uLXBhZ2Uge1xuICAgICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmlvbi1wYWdlIHtcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/core */
    "./node_modules/@ionic/core/dist/esm/index.mjs");
    /* harmony import */


    var src_theme_animations_nav_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/theme/animations/nav.transition */
    "./src/theme/animations/nav.transition.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot({
        navAnimation: Object(_ionic_core__WEBPACK_IMPORTED_MODULE_8__["isPlatform"])('ios') ? _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["iosTransitionAnimation"] : src_theme_animations_nav_transition__WEBPACK_IMPORTED_MODULE_9__["mdIosTransitionAnimation"],
        swipeBackEnabled: true
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/theme/animations/nav.transition.ts":
  /*!************************************************!*\
    !*** ./src/theme/animations/nav.transition.ts ***!
    \************************************************/

  /*! exports provided: shadow, mdIosTransitionAnimation */

  /***/
  function srcThemeAnimationsNavTransitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shadow", function () {
      return shadow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mdIosTransitionAnimation", function () {
      return mdIosTransitionAnimation;
    });
    /* harmony import */


    var _ionic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/core */
    "./node_modules/@ionic/core/dist/esm/index.mjs"); // export type NavDirection = 'back' | 'forward';
    // interface TransitionOptions {
    //     progressCallback?: ((ani: Animation | undefined) => void);
    //     baseEl: any;
    //     enteringEl: HTMLElement;
    //     leavingEl: HTMLElement | undefined;
    //     progressAnimation?: boolean;
    //     updateURL?: boolean;
    //     viewIsReady?: (enteringEl: HTMLElement) => Promise<any>;
    //     animated?: boolean;
    //     animationBuilder?: AnimationBuilder;
    //     duration?: number;
    //     easing?: string;
    //     showGoBack?: boolean;
    //     direction?: NavDirection;
    //     deepWait?: boolean;
    //     mode?: 'ios' | 'md';
    //     keyboardClose?: boolean;
    //     skipIfBusy?: boolean;
    // }


    var DURATION = 540;

    var getClonedElement = function getClonedElement(tagName) {
      return document.querySelector("".concat(tagName, ".ion-cloned-element"));
    };

    var shadow = function shadow(el) {
      return el.shadowRoot || el;
    };

    var getLargeTitle = function getLargeTitle(refEl) {
      var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
      var query = 'ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';

      if (tabs != null) {
        var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
        return activeTab != null ? activeTab.querySelector(query) : null;
      }

      return refEl.querySelector(query);
    };

    var getBackButton = function getBackButton(refEl, backDirection) {
      var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
      var buttonsList = [];

      if (tabs != null) {
        var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');

        if (activeTab != null) {
          buttonsList = activeTab.querySelectorAll('ion-buttons');
        }
      } else {
        buttonsList = refEl.querySelectorAll('ion-buttons');
      }

      var _iterator = _createForOfIteratorHelper(buttonsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var buttons = _step.value;
          var parentHeader = buttons.closest('ion-header');
          var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
          var backButton = buttons.querySelector('ion-back-button');
          var buttonsCollapse = buttons.classList.contains('buttons-collapse');
          var startSlot = buttons.slot === 'start' || buttons.slot === '';

          if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
            return backButton;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    };

    var createLargeTitleTransition = function createLargeTitleTransition(rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
      var enteringBackButton = getBackButton(enteringEl, backDirection);
      var leavingLargeTitle = getLargeTitle(leavingEl);
      var enteringLargeTitle = getLargeTitle(enteringEl);
      var leavingBackButton = getBackButton(leavingEl, backDirection);
      var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
      var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;

      if (shouldAnimationForward) {
        var leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
        var enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, enteringBackButtonBox);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, leavingLargeTitleBox, enteringBackButtonBox);
      } else if (shouldAnimationBackward) {
        var enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
        var leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, leavingBackButtonBox);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, enteringLargeTitleBox, leavingBackButtonBox);
      }

      return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
      };
    };

    var animateBackButton = function animateBackButton(rootAnimation, rtl, backDirection, backButtonEl, largeTitleBox, backButtonBox) {
      var BACK_BUTTON_START_OFFSET = rtl ? "calc(100% - ".concat(backButtonBox.right + 4, "px)") : "".concat(backButtonBox.left - 4, "px");
      var START_TEXT_TRANSLATE = rtl ? '7px' : '-7px';
      var END_TEXT_TRANSLATE = rtl ? '-4px' : '4px';
      var ICON_TRANSLATE = rtl ? '-4px' : '4px';
      var TEXT_ORIGIN_X = rtl ? 'right' : 'left';
      var ICON_ORIGIN_X = rtl ? 'left' : 'right';
      var FORWARD_TEXT_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate3d(".concat(START_TEXT_TRANSLATE, ", ").concat(largeTitleBox.top - 40, "px, 0) scale(2.1)")
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate3d(".concat(END_TEXT_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
      }];
      var BACKWARD_TEXT_KEYFRAMES = [{
        offset: 0,
        opacity: 1,
        transform: "translate3d(".concat(END_TEXT_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
      }, {
        offset: 0.6,
        opacity: 0
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate3d(".concat(START_TEXT_TRANSLATE, ", ").concat(largeTitleBox.top - 40, "px, 0) scale(2.1)")
      }];
      var TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
      var FORWARD_ICON_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
      }];
      var BACKWARD_ICON_KEYFRAMES = [{
        offset: 0,
        opacity: 1,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
      }, {
        offset: 0.2,
        opacity: 0,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
      }];
      var ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
      var enteringBackButtonTextAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
      var enteringBackButtonIconAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
      var clonedBackButtonEl = getClonedElement('ion-back-button');
      var backButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
      var backButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
      clonedBackButtonEl.text = backButtonEl.text;
      clonedBackButtonEl.mode = backButtonEl.mode;
      clonedBackButtonEl.icon = backButtonEl.icon;
      clonedBackButtonEl.color = backButtonEl.color;
      clonedBackButtonEl.disabled = backButtonEl.disabled;
      clonedBackButtonEl.style.setProperty('display', 'block');
      clonedBackButtonEl.style.setProperty('position', 'fixed');
      enteringBackButtonIconAnimation.addElement(backButtonIconEl);
      enteringBackButtonTextAnimation.addElement(backButtonTextEl);
      enteringBackButtonTextAnimation.beforeStyles({
        'transform-origin': "".concat(TEXT_ORIGIN_X, " center")
      }).beforeAddWrite(function () {
        backButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
      }).afterAddWrite(function () {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
      }).keyframes(TEXT_KEYFRAMES);
      enteringBackButtonIconAnimation.beforeStyles({
        'transform-origin': "".concat(ICON_ORIGIN_X, " center")
      }).keyframes(ICON_KEYFRAMES);
      rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
    };

    var animateLargeTitle = function animateLargeTitle(rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, backButtonBox) {
      var TITLE_START_OFFSET = rtl ? "calc(100% - ".concat(largeTitleBox.right, "px)") : "".concat(largeTitleBox.left, "px");
      var START_TRANSLATE = rtl ? '-18px' : '18px';
      var ORIGIN_X = rtl ? 'right' : 'left';
      var BACKWARDS_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate3d(".concat(START_TRANSLATE, ", ").concat(backButtonBox.top - 4, "px, 0) scale(0.49)")
      }, {
        offset: 0.1,
        opacity: 0
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate3d(0, ".concat(largeTitleBox.top - 2, "px, 0) scale(1)")
      }];
      var FORWARDS_KEYFRAMES = [{
        offset: 0,
        opacity: 0.99,
        transform: "translate3d(0, ".concat(largeTitleBox.top - 2, "px, 0) scale(1)")
      }, {
        offset: 0.6,
        opacity: 0
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate3d(".concat(START_TRANSLATE, ", ").concat(backButtonBox.top - 4, "px, 0) scale(0.5)")
      }];
      var KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
      var clonedTitleEl = getClonedElement('ion-title');
      var clonedLargeTitleAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
      clonedTitleEl.innerText = largeTitleEl.innerText;
      clonedTitleEl.size = largeTitleEl.size;
      clonedTitleEl.color = largeTitleEl.color;
      clonedLargeTitleAnimation.addElement(clonedTitleEl);
      clonedLargeTitleAnimation.beforeStyles(_defineProperty({
        'transform-origin': "".concat(ORIGIN_X, " center"),
        'height': '46px',
        'display': '',
        'position': 'relative'
      }, ORIGIN_X, TITLE_START_OFFSET)).beforeAddWrite(function () {
        largeTitleEl.style.setProperty('display', 'none');
      }).afterAddWrite(function () {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
      }).keyframes(KEYFRAMES);
      rootAnimation.addAnimation(clonedLargeTitleAnimation);
    };

    var mdIosTransitionAnimation = function mdIosTransitionAnimation(navEl, opts) {
      try {
        var EASING = 'cubic-bezier(0.32,0.72,0,1)';
        var OPACITY = 'opacity';
        var TRANSFORM = 'transform';
        var SCREEN_WIDTH = window.screen.width;
        var SCREEN_WIDTH_PX = "".concat(SCREEN_WIDTH, "px");
        var OFFSET = 5;
        var CENTER = '0px';
        var OFF_OPACITY = 0.8;
        var isRTL = navEl.ownerDocument.dir === 'rtl';
        var OFF_RIGHT = (isRTL ? -1 : 1) * (SCREEN_WIDTH - OFFSET) + 'px';
        var OFF_LEFT = (isRTL ? 1 : -1) * Math.floor(SCREEN_WIDTH / 3) + 'px';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var backDirection = opts.direction === 'back';
        var contentEl = enteringEl.querySelector(':scope > ion-content');
        var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        var rootAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
        var enteringContentAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
        rootAnimation.addElement(enteringEl).duration(opts.duration || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');

        if (leavingEl && navEl) {
          var navDecorAnimation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          navDecorAnimation.addElement(navEl);
          rootAnimation.addAnimation(navDecorAnimation);
        }

        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
          enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
        } else {
          enteringContentAnimation.addElement(contentEl); // REVIEW

          enteringContentAnimation.addElement(headerEls);
        }

        rootAnimation.addAnimation(enteringContentAnimation);

        if (backDirection) {
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, OFF_OPACITY, 1);
        } else {
          // entering content, forward direction
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
        }

        if (contentEl) {
          var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');

          if (enteringTransitionEffectEl) {
            var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
            var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
            var enteringTransitionEffect = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            var enteringTransitionCover = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            var enteringTransitionShadow = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
              opacity: '1',
              display: 'block'
            }).afterStyles({
              opacity: '',
              display: ''
            });
            enteringTransitionCover.addElement(enteringTransitionCoverEl) // REVIEW
            .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
            enteringTransitionShadow.addElement(enteringTransitionShadowEl) // REVIEW
            .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.70);
            enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
            enteringContentAnimation.addAnimation([enteringTransitionEffect]);
          }
        }

        var enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');

        var _createLargeTitleTran = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl),
            forward = _createLargeTitleTran.forward,
            backward = _createLargeTitleTran.backward;

        enteringToolBarEls.forEach(function (enteringToolBarEl) {
          var enteringToolBar = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          enteringToolBar.addElement(enteringToolBarEl);
          rootAnimation.addAnimation(enteringToolBar);
          var enteringTitle = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW

          var enteringToolBarButtons = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
          var parentHeader = enteringToolBarEl.closest('ion-header');
          var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
          var buttonsToAnimate;

          if (backDirection) {
            buttonsToAnimate = buttons.filter(function (button) {
              var isCollapseButton = button.classList.contains('buttons-collapse');
              return isCollapseButton && !inactiveHeader || !isCollapseButton;
            });
          } else {
            buttonsToAnimate = buttons.filter(function (button) {
              return !button.classList.contains('buttons-collapse');
            });
          }

          enteringToolBarButtons.addElement(buttonsToAnimate);
          var enteringToolBarItems = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
          var enteringToolBarBg = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW

          var enteringBackButton = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');

          if (backButtonEl) {
            enteringBackButton.addElement(backButtonEl);
          }

          enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
          enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
          enteringToolBarItems.fromTo(OPACITY, 0.01, 1);

          if (backDirection) {
            if (!inactiveHeader) {
              enteringTitle.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
            }

            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")); // back direction, entering page has a back button

            enteringBackButton.fromTo(OPACITY, 0.01, 1);
          } else {
            // entering toolbar, forward direction
            if (!enteringContentHasLargeTitle) {
              enteringTitle.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
            }

            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
            enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
            var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;

            if (!translucentHeader) {
              enteringToolBarBg.fromTo(OPACITY, 0.01, 1);
            } else {
              enteringToolBarBg.fromTo('transform', isRTL ? "translateX(-".concat(SCREEN_WIDTH_PX, ")") : "translateX(".concat(SCREEN_WIDTH_PX, ")"), 'translateX(0px)');
            } // forward direction, entering page has a back button


            if (!forward) {
              enteringBackButton.fromTo(OPACITY, 0.01, 1);
            }

            if (backButtonEl && !forward) {
              var enteringBackBtnText = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
              enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
              .fromTo("transform", isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
              enteringToolBar.addAnimation(enteringBackBtnText);
            }
          }
        }); // setup leaving view

        if (leavingEl) {
          var leavingContent = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
          var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
          var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
          var leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');

          if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
            leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
          } else {
            leavingContent.addElement(leavingContentEl); // REVIEW

            leavingContent.addElement(leavingHeaderEls);
          }

          rootAnimation.addAnimation(leavingContent);

          if (backDirection) {
            // leaving content, back direction
            leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? "translateX(-".concat(SCREEN_WIDTH_PX, ")") : "translateX(".concat(SCREEN_WIDTH_PX, ")"));
            var leavingPage = leavingEl;
            rootAnimation.afterAddWrite(function () {
              if (rootAnimation.getDirection() === 'normal') {
                leavingPage.style.setProperty('display', 'none');
              }
            });
          } else {
            // leaving content, forward direction
            leavingContent.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 1, OFF_OPACITY);
          }

          if (leavingContentEl) {
            var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');

            if (leavingTransitionEffectEl) {
              var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
              var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
              var leavingTransitionEffect = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
              var leavingTransitionCover = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
              var leavingTransitionShadow = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
              leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
                opacity: '1',
                display: 'block'
              }).afterStyles({
                opacity: '',
                display: ''
              });
              leavingTransitionCover.addElement(leavingTransitionCoverEl) // REVIEW
              .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
              leavingTransitionShadow.addElement(leavingTransitionShadowEl) // REVIEW
              .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.70, 0.03);
              leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
              leavingContent.addAnimation([leavingTransitionEffect]);
            }
          }

          leavingToolBarEls.forEach(function (leavingToolBarEl) {
            var leavingToolBar = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            leavingToolBar.addElement(leavingToolBarEl);
            var leavingTitle = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW

            var leavingToolBarButtons = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
            var parentHeader = leavingToolBarEl.closest('ion-header');
            var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            var buttonsToAnimate = Array.from(buttons).filter(function (button) {
              var isCollapseButton = button.classList.contains('buttons-collapse');
              return isCollapseButton && !inactiveHeader || !isCollapseButton;
            });
            leavingToolBarButtons.addElement(buttonsToAnimate);
            var leavingToolBarItems = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');

            if (leavingToolBarItemEls.length > 0) {
              leavingToolBarItems.addElement(leavingToolBarItemEls);
            }

            var leavingToolBarBg = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW

            var leavingBackButton = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
            var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');

            if (backButtonEl) {
              leavingBackButton.addElement(backButtonEl);
            }

            leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
            rootAnimation.addAnimation(leavingToolBar); // fade out leaving toolbar items

            leavingBackButton.fromTo(OPACITY, 0.99, 0);
            leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
            leavingToolBarItems.fromTo(OPACITY, 0.99, 0);

            if (backDirection) {
              if (!inactiveHeader) {
                // leaving toolbar, back direction
                leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? "translateX(-".concat(SCREEN_WIDTH_PX, ")") : "translateX(".concat(SCREEN_WIDTH_PX, ")")).fromTo(OPACITY, 0.99, 0);
              }

              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? "translateX(-".concat(SCREEN_WIDTH_PX, ")") : "translateX(".concat(SCREEN_WIDTH_PX, ")"));
              leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']); // leaving toolbar, back direction, and there's no entering toolbar
              // should just slide out, no fading out

              var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;

              if (!translucentHeader) {
                leavingToolBarBg.fromTo(OPACITY, 0.99, 0);
              } else {
                leavingToolBarBg.fromTo('transform', 'translateX(0px)', isRTL ? "translateX(-".concat(SCREEN_WIDTH_PX, ")") : "translateX(".concat(SCREEN_WIDTH_PX, ")"));
              }

              if (backButtonEl && !backward) {
                var leavingBackBtnText = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])();
                leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                .fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat((isRTL ? -124 : 124) + 'px', ")"));
                leavingToolBar.addAnimation(leavingBackBtnText);
              }
            } else {
              // leaving toolbar, forward direction
              if (!inactiveHeader) {
                leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
              }

              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM, OPACITY]);
              leavingBackButton.afterClearStyles([OPACITY]);
              leavingTitle.afterClearStyles([OPACITY]);
              leavingToolBarButtons.afterClearStyles([OPACITY]);
            }
          });
        }

        return rootAnimation;
      } catch (err) {
        throw err;
      }
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/gauges/gauges/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map