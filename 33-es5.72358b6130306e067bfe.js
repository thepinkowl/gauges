!function(){function t(t,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(n=e.key,r=void 0,"symbol"==typeof(r=function(t,i){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var e=o.call(t,i||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(n,"string"))?r:String(r)),e)}var n,r}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{wHD8:function(i,o,e){"use strict";e.r(o),e.d(o,"ion_img",(function(){return s}));var n=e("wEJo"),r=e("E/Mt"),s=function(){function i(t){var o=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),Object(n.o)(this,t),this.ionImgWillLoad=Object(n.g)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(n.g)(this,"ionImgDidLoad",7),this.ionError=Object(n.g)(this,"ionError",7),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}var o,e,s;return o=i,s=[{key:"watchers",get:function(){return{src:["srcChanged"]}}}],(e=[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var t=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(i){i[i.length-1].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(n.j)(n.c,{class:Object(r.b)(this)},Object(n.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(n.k)(this)}}])&&t(o.prototype,e),s&&t(o,s),Object.defineProperty(o,"prototype",{writable:!1}),i}();s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}])}();