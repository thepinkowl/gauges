!function(){function t(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new L(n||[]);return o(a,"_invoke",{value:x(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=h;var l={};function p(){}function v(){}function d(){}var y={};s(y,a,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==e&&n.call(m,a)&&(y=m);var b=d.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(h).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,u)})}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,o(b,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),s(k.prototype,u,function(){return this}),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(b),s(b,c,"Generator"),s(b,a,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=R,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)})}}function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=a(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function h(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{k5eQ:function(n,a,u){"use strict";u.r(a),u.d(a,"ion_route",function(){return v}),u.d(a,"ion_route_redirect",function(){return d}),u.d(a,"ion_router",function(){return A}),u.d(a,"ion_router_link",function(){return T});var s=u("wEJo"),f=u("W6o/"),l=u("E/Mt"),p=u("74mu"),v=function(){function t(e){c(this,t),Object(s.o)(this,e),this.ionRouteDataChanged=Object(s.g)(this,"ionRouteDataChanged",7),this.url=""}return h(t,[{key:"onUpdate",value:function(t){this.ionRouteDataChanged.emit(t)}},{key:"onComponentProps",value:function(t,e){if(t!==e){var r=t?Object.keys(t):[],n=e?Object.keys(e):[];if(r.length===n.length){var o,a=i(r);try{for(a.s();!(o=a.n()).done;){var u=o.value;if(t[u]!==e[u])return void this.onUpdate(t)}}catch(c){a.e(c)}finally{a.f()}}else this.onUpdate(t)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),t}(),d=function(){function t(e){c(this,t),Object(s.o)(this,e),this.ionRouteRedirectChanged=Object(s.g)(this,"ionRouteRedirectChanged",7)}return h(t,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),t}(),y=function(t){return"/"+t.filter(function(t){return t.length>0}).join("/")},g=function(t){var e,r=[""];if(null!=t){var n=t.indexOf("?");n>-1&&(e=t.substr(n+1),t=t.substr(0,n)),0===(r=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0})).length&&(r=[""])}return{segments:r,queryString:e}},m=function(){var t=o(r().mark(function t(e,n,o,i){var a,u,c,s,h,l=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.length>4&&void 0!==l[4]&&l[4],u=l.length>5?l[5]:void 0,t.prev=2,c=w(e),!(i>=n.length)&&c){t.next=6;break}return t.abrupt("return",a);case 6:return t.next=8,new Promise(function(t){return Object(f.c)(c,t)});case 8:return s=n[i],t.next=11,c.setRouteId(s.id,s.params,o,u);case 11:return(h=t.sent).changed&&(o="root",a=!0),t.next=15,m(h.element,n,o,i+1,a,u);case 15:if(a=t.sent,t.t0=h.markVisible,!t.t0){t.next=20;break}return t.next=20,h.markVisible();case 20:return t.abrupt("return",a);case 23:return t.prev=23,t.t1=t.catch(2),t.abrupt("return",(console.error(t.t1),!1));case 26:case"end":return t.stop()}},t,null,[[2,23]])}));return function(e,r,n,o){return t.apply(this,arguments)}}(),b=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",w=function(t){if(t){if(t.matches(b))return t;var e=t.querySelector(b);return null!=e?e:void 0}},k=function(t,e){return e.find(function(e){return function(t,e){var r=e.from;if(void 0===e.to)return!1;if(r.length>t.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==t[n])return!1}return r.length===t.length}(t,e)})},x=function(t,e){for(var r=Math.min(t.length,e.length),n=0,o=0;o<r;o++){var i=t[o],a=e[o];if(i.id.toLowerCase()!==a.id)break;if(i.params){var u=Object.keys(i.params);if(u.length===a.path.length)for(var c=u.map(function(t){return":".concat(t)}),s=0;s<c.length&&c[s].toLowerCase()===a.path[s];s++)n++}n++}return n},j=function(t,e){for(var r,n=new R(t),o=!1,a=0;a<e.length;a++){var u=e[a].path;if(""===u[0])o=!0;else{var c,s=i(u);try{for(s.s();!(c=s.n()).done;){var h=c.value,f=n.next();if(":"===h[0]){if(""===f)return null;((r=r||[])[a]||(r[a]={}))[h.slice(1)]=f}else if(f!==h)return null}}catch(l){s.e(l)}finally{s.f()}o=!1}}return o&&o!==(""===n.next())?null:r?e.map(function(t,e){return{id:t.id,path:t.path,params:O(t.params,r[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}}):e},O=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},E=function(t,e){var r,n=null,o=0,a=i(e);try{for(a.s();!(r=a.n()).done;){var u=r.value,c=j(t,u);if(null!==c){var s=L(c);s>o&&(o=s,n=c)}}}catch(h){a.e(h)}finally{a.f()}return n},L=function(t){var e,r=1,n=1,o=i(t);try{for(o.s();!(e=o.n()).done;){var a,u=i(e.value.path);try{for(u.s();!(a=u.n()).done;){var c=a.value;":"===c[0]?r+=Math.pow(1,n):""!==c&&(r+=Math.pow(2,n)),n++}}catch(s){u.e(s)}finally{u.f()}}}catch(s){o.e(s)}finally{o.f()}return r},R=function(){function t(e){c(this,t),this.path=e.slice()}return h(t,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),t}(),S=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},C=function(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=S(t,"to");return{from:g(S(t,"from")).segments,to:null==e?void 0:g(e)}})},P=function(t){return _(N(t))},N=function t(e){return Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var r=S(e,"component");return{path:g(S(e,"url")).segments,id:r.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:t(e)}})},_=function(t){var e,r=[],n=i(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;D([],r,o)}}catch(a){n.e(a)}finally{n.f()}return r},D=function t(e,r,n){if((e=e.slice()).push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length){var o,a=i(n.children);try{for(a.s();!(o=a.n()).done;){t(e,r,o.value)}}catch(u){a.e(u)}finally{a.f()}}else r.push(e)},A=function(){function t(e){c(this,t),Object(s.o)(this,e),this.ionRouteWillChange=Object(s.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(s.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}var n,a,u,l,p,v,d,b,j,L,R;return h(t,[{key:"componentWillLoad",value:(R=o(r().mark(function t(){var e,n,o;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(document.body)?Promise.resolve():new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})});case 2:return t.next=4,this.runGuards(this.getPath());case 4:if(!0===(e=t.sent)){t.next=13;break}if("object"!=typeof e){t.next=11;break}return n=e.redirect,o=g(n),this.setPath(o.segments,"root",o.queryString),t.next=11,this.writeNavStateRoot(o.segments,"root");case 11:t.next=15;break;case 13:return t.next=15,this.onRoutesChanged();case 15:case"end":return t.stop()}},t,this)})),function(){return R.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(f.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(f.o)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:(L=o(r().mark(function t(){var e,n,o;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.historyDirection(),n=this.getPath(),t.next=4,this.runGuards(n);case 4:if(!0===(o=t.sent)){t.next=9;break}if("object"==typeof o){t.next=8;break}return t.abrupt("return",!1);case 8:n=g(o.redirect).segments;case 9:return t.abrupt("return",this.writeNavStateRoot(n,e));case 10:case"end":return t.stop()}},t,this)})),function(){return L.apply(this,arguments)})},{key:"onBackButton",value:function(t){var e=this;t.detail.register(0,function(t){e.back(),t()})}},{key:"canTransition",value:(j=o(r().mark(function t(){var e;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.runGuards();case 2:return e=t.sent,t.abrupt("return",!0===e||"object"==typeof e&&e.redirect);case 4:case"end":return t.stop()}},t,this)})),function(){return j.apply(this,arguments)})},{key:"push",value:(b=o(r().mark(function t(e){var n,o,i,a,u=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"forward",o=u.length>2?u[2]:void 0,e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),i=g(e),t.next=6,this.runGuards(i.segments);case 6:if(!0===(a=t.sent)){t.next=11;break}if("object"==typeof a){t.next=10;break}return t.abrupt("return",!1);case 10:i=g(a.redirect);case 11:return t.abrupt("return",(this.setPath(i.segments,n,i.queryString),this.writeNavStateRoot(i.segments,n,o)));case 12:case"end":return t.stop()}},t,this)})),function(t){return b.apply(this,arguments)})},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(d=o(r().mark(function t(){return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(function(t){console.group("[ion-core] ROUTES[".concat(t.length,"]"));var r,n=i(t);try{var o=function(){var t=r.value,n=[];t.forEach(function(t){return n.push.apply(n,e(t.path))});var o=t.map(function(t){return t.id});console.debug("%c ".concat(y(n)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(n.s();!(r=n.n()).done;)o()}catch(a){n.e(a)}finally{n.f()}console.groupEnd()})(P(this.el)),function(t){console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e,r=i(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.to&&console.debug("FROM: ","$c ".concat(y(n.from)),"font-weight: bold"," TO: ","$c ".concat(y(n.to.segments)),"font-weight: bold")}}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(C(this.el));case 1:case"end":return t.stop()}},t,this)})),function(){return d.apply(this,arguments)})},{key:"navChanged",value:(v=o(r().mark(function t(e){var n,a,u,c,s;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.busy){t.next=2;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return t.next=4,function(){var t=o(r().mark(function t(e){var n,o,i,a;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],i=window.document.body;case 2:if(!(o=w(i))){t.next=11;break}return t.next=5,o.getRouteId();case 5:if(a=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:i=a.element,a.element=void 0,n.push(a);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:n,outlet:o});case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()();case 4:if(n=t.sent,a=n.ids,u=n.outlet,c=function(t,e){var r,n=null,o=0,a=i(e);try{for(a.s();!(r=a.n()).done;){var u=r.value,c=x(t,u);c>o&&(n=u,o=c)}}catch(s){a.e(s)}finally{a.f()}return n?n.map(function(e,r){return{id:e.id,path:e.path,params:O(e.params,t[r]&&t[r].params)}}):null}(a,P(this.el))){t.next=10;break}return t.abrupt("return",(console.warn("[ion-router] no matching URL for ",a.map(function(t){return t.id})),!1));case 10:if(!(s=function(t){var e,r=[],n=i(t);try{for(n.s();!(e=n.n()).done;){var o,a=e.value,u=i(a.path);try{for(u.s();!(o=u.n()).done;){var c=o.value;if(":"===c[0]){var s=a.params&&a.params[c.slice(1)];if(!s)return null;r.push(s)}else""!==c&&r.push(c)}}catch(h){u.e(h)}finally{u.f()}}}catch(h){n.e(h)}finally{n.f()}return r}(c))){t.next=18;break}return this.setPath(s,e),t.next=15,this.safeWriteNavState(u,c,"root",s,null,a.length);case 15:t.t0=!0,t.next=19;break;case 18:t.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return t.abrupt("return",t.t0);case 20:case"end":return t.stop()}},t,this)})),function(t){return v.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var t=this.getPath();t&&k(t,C(this.el))&&this.writeNavStateRoot(t,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var r=e.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?"forward":r<n?"back":"root"}},{key:"writeNavStateRoot",value:(p=o(r().mark(function t(e,n,o){var i,a,u,c,s,h,f,l;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return i=C(this.el),a=k(e,i),u=null,a&&(c=a.to,s=c.segments,h=c.queryString,this.setPath(s,n,h),u=a.from,e=s),f=P(this.el),l=E(e,f),t.abrupt("return",l?this.safeWriteNavState(document.body,l,n,e,u,0,o):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return t.stop()}},t,this)})),function(t,e,r){return p.apply(this,arguments)})},{key:"safeWriteNavState",value:(l=o(r().mark(function t(e,n,o,i,a){var u,c,s,h,f=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=f.length>5&&void 0!==f[5]?f[5]:0,c=f.length>6?f[6]:void 0,t.next=4,this.lock();case 4:return s=t.sent,h=!1,t.prev=6,t.next=9,this.writeNavState(e,n,o,i,a,u,c);case 9:h=t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),console.error(t.t0);case 15:return t.abrupt("return",(s(),h));case 16:case"end":return t.stop()}},t,this,[[6,12]])})),function(t,e,r,n,o){return l.apply(this,arguments)})},{key:"lock",value:(u=o(r().mark(function t(){var e,n;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)})),function(){return u.apply(this,arguments)})},{key:"runGuards",value:(a=o(r().mark(function t(){var e,n,o,i,a,u,c,s,h=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=h.length>0&&void 0!==h[0]?h[0]:this.getPath(),void 0===(n=h.length>1?h[1]:void 0)&&(n=g(this.previousPath).segments),e&&n){t.next=4;break}return t.abrupt("return",!0);case 4:if(o=P(this.el),i=E(n,o),a=i&&i[i.length-1].beforeLeave,t.t0=!a,t.t0){t.next=12;break}return t.next=11,a();case 11:t.t0=t.sent;case 12:if(!1!==(u=t.t0)&&"object"!=typeof u){t.next=15;break}return t.abrupt("return",u);case 15:return c=E(e,o),s=c&&c[c.length-1].beforeEnter,t.abrupt("return",!s||s());case 17:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})},{key:"writeNavState",value:(n=o(r().mark(function t(e,n,o,i,a){var u,c,s,h,f=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=f.length>5&&void 0!==f[5]?f[5]:0,c=f.length>6?f[6]:void 0,!this.busy){t.next=4;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 4:return this.busy=!0,(s=this.routeChangeEvent(i,a))&&this.ionRouteWillChange.emit(s),t.next=9,m(e,n,o,u,!1,c);case 9:return h=t.sent,t.abrupt("return",(this.busy=!1,s&&this.ionRouteDidChange.emit(s),h));case 11:case"end":return t.stop()}},t,this)})),function(t,e,r,o,i){return n.apply(this,arguments)})},{key:"setPath",value:function(t,r,n){var o=this;this.state++,function(t,r,n,i,a,u,c){var s=function(t,e,r){var n=y(t);return e&&(n="#"+n),void 0!==r&&(n+="?"+r),n}([].concat(e(g(o.root).segments),e(i)),n,c);"forward"===a?t.pushState(u,"",s):t.replaceState(u,"",s)}(window.history,0,this.useHash,t,r,this.state,n)}},{key:"getPath",value:function(){var t,e,r,n,o=this;return t=window.location,e=this.useHash,r=g(o.root).segments,n=e?t.hash.slice(1):t.pathname,function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return null;return e.length===t.length?[""]:e.slice(t.length)}(r,g(n).segments)}},{key:"routeChangeEvent",value:function(t,e){var r=this.previousPath,n=y(t);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:e?y(e):null,to:n}}},{key:"el",get:function(){return Object(s.k)(this)}}]),t}(),T=function(){function e(t){var r=this;c(this,e),Object(s.o)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(p.d)(r.href,t,r.routerDirection,r.routerAnimation)}}return h(e,[{key:"render",value:function(){var e,r=Object(l.b)(this),n={href:this.href,rel:this.rel,target:this.target};return Object(s.j)(s.c,{onClick:this.onClick,class:Object(p.a)(this.color,(e={},t(e,r,!0),t(e,"ion-activatable",!0),e))},Object(s.j)("a",Object.assign({},n),Object(s.j)("slot",null)))}}]),e}();T.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();