!function(){function t(t,e,o){return(e=i(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},o=Object.prototype,r=o.hasOwnProperty,n=Object.defineProperty||function(t,e,o){t[e]=o.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function p(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(S){p=function(t,e,o){return t[e]=o}}function l(t,e,o,r){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),s=new P(r||[]);return n(a,"_invoke",{value:k(t,o,s)}),a}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var d={};function h(){}function f(){}function v(){}var m={};p(m,a,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(L([])));y&&y!==o&&r.call(y,a)&&(m=y);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function o(n,i,a,s){var c=u(t[n],t,i);if("throw"!==c.type){var p=c.arg,l=p.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(l).then((function(t){p.value=t,a(p)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function k(t,e,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return D()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var s=j(a,o);if(s){if(s===d)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var c=u(t,e,o);if("normal"===c.type){if(r=o.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r="completed",o.method="throw",o.arg=c.arg)}}}function j(t,e){var o=e.method,r=t.iterator[o];if(void 0===r)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),d;var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:D}}function D(){return{value:void 0,done:!0}}return f.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:f,configurable:!0}),f.displayName=p(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,p(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),p(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new x(l(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),p(g,c,"Generator"),p(g,a,(function(){return this})),p(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),E(o),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;E(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:L(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,o,r,n,i,a){try{var s=t[i](a),c=s.value}catch(p){return void o(p)}s.done?e(c):Promise.resolve(c).then(r,n)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)}))}}function n(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function i(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{qCuA:function(o,i,a){"use strict";a.r(i),a.d(i,"ion_popover",(function(){return g}));var s=a("wEJo"),c=a("E/Mt"),p=a("spDm"),l=a("f9PN"),u=a("74mu"),d=a("qb1Q"),h=a("Kfhc");a("W6o/"),a("B4Jq");var f=function(t,e){var o="top",r="left",n=t.querySelector(".popover-content"),i=n.getBoundingClientRect(),a=i.width,s=i.height,c=t.ownerDocument.defaultView.innerWidth,p=t.ownerDocument.defaultView.innerHeight,l=e&&e.target&&e.target.getBoundingClientRect(),u=null!=l&&"top"in l?l.top:p/2-s/2,d=null!=l&&"left"in l?l.left:c/2,f=l&&l.width||0,m=l&&l.height||0,b=t.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==l&&(b.style.display="none");var x={top:u+m,left:d+f/2-g/2},k={top:u+m+(w-1),left:d+f/2-a/2},j=!1,O=!1;k.left<v+25?(j=!0,k.left=v):a+v+k.left+25>c&&(O=!0,k.left=c-a-v,r="right"),u+m+s>p&&u-s>0?(x.top=u-(w+1),k.top=u-s-(w-1),t.className=t.className+" popover-bottom",o="bottom"):u+m+s>p&&(n.style.bottom=v+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",j&&(n.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(n.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=o+" "+r;var E=Object(h.a)(),P=Object(h.a)(),L=Object(h.a)();return P.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),L.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),E.addElement(t).easing("ease").duration(100).addAnimation([P,L])},v=5,m=function(t){var e=Object(h.a)(),o=Object(h.a)(),r=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(t).easing("ease").duration(500).addAnimation([o,r])},b=function(t,e){var o=t.ownerDocument,r="rtl"===o.dir,n="top",i=r?"right":"left",a=t.querySelector(".popover-content"),s=a.getBoundingClientRect(),c=s.width,p=s.height,l=o.defaultView.innerWidth,u=o.defaultView.innerHeight,d=e&&e.target&&e.target.getBoundingClientRect(),f=null!=d&&"bottom"in d?d.bottom:u/2-p/2,v=d&&d.height||0,m={top:f,left:null!=d&&"left"in d?r?d.left-c+d.width:d.left:l/2-c/2};m.left<12?(m.left=12,i="left"):c+12+m.left>l&&(m.left=l-c-12,i="right"),f+v+p>u&&f-p>0?(m.top=f-p-v,t.className=t.className+" popover-bottom",n="bottom"):f+v+p>u&&(a.style.bottom="12px");var b=Object(h.a)(),y=Object(h.a)(),g=Object(h.a)(),w=Object(h.a)(),x=Object(h.a)();return y.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(n," ").concat(i)}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(t.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([y,g,w,x])},y=function(t){var e=Object(h.a)(),o=Object(h.a)(),r=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(t).easing("ease").duration(500).addAnimation([o,r])},g=function(){function o(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),Object(s.o)(this,t),this.didPresent=Object(s.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(s.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(s.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(s.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),e.dismiss()},this.onBackdropTap=function(){e.dismiss(void 0,l.a)},this.onLifecycle=function(t){var o=e.usersElement,r=w[t.type];if(o&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(n)}}}var i,a,h,v,g;return i=o,(a=[{key:"connectedCallback",value:function(){Object(l.f)(this.el)}},{key:"present",value:(g=r(e().mark((function t(){var o,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.presented){t.next=2;break}return t.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){t.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t.next=8,Object(p.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],r);case 8:return this.usersElement=t.sent,t.next=11,Object(d.f)(this.usersElement);case 11:return t.abrupt("return",Object(l.e)(this,"popoverEnter",f,b,this.event));case 12:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{key:"dismiss",value:(v=r(e().mark((function t(o,r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.g)(this,o,r,"popoverLeave",m,y,this.event);case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=7;break}return t.next=7,Object(p.b)(this.delegate,this.usersElement);case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return v.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(l.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(l.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,o=Object(c.b)(this),r=this.onLifecycle,n=this.htmlAttributes;return Object(s.j)(s.c,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},n,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(u.b)(this.cssClass)),(e={},t(e,o,!0),t(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:r,onIonPopoverWillPresent:r,onIonPopoverWillDismiss:r,onIonPopoverDidDismiss:r,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),Object(s.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(s.j)("div",{tabindex:"0"}),Object(s.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(s.j)("div",{class:"popover-arrow"}),Object(s.j)("div",{class:"popover-content"})),Object(s.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(s.k)(this)}}])&&n(i.prototype,a),h&&n(i,h),Object.defineProperty(i,"prototype",{writable:!1}),o}(),w={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};g.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}])}();