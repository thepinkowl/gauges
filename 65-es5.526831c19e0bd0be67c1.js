function asyncGeneratorStep(n,e,t,r,o,c,i){try{var a=n[c](i),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var c=n.apply(e,t);function i(n){asyncGeneratorStep(c,r,o,i,a,"next",n)}function a(n){asyncGeneratorStep(c,r,o,i,a,"throw",n)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{eVst:function(n,e,t){"use strict";t.r(e),t.d(e,"startStatusTap",(function(){return c}));var r=t("wEJo"),o=t("W6o/"),c=function(){var n=window;n.addEventListener("statusTap",(function(){Object(r.h)((function(){var e=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(e){var t=e.closest("ion-content");t&&new Promise((function(n){return Object(o.c)(t,n)})).then((function(){Object(r.f)(_asyncToGenerator(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.style.setProperty("--overflow","hidden"),n.next=3,t.scrollToTop(300);case 3:t.style.removeProperty("--overflow");case 4:case"end":return n.stop()}}),n)}))))}))}}))}))}}}]);