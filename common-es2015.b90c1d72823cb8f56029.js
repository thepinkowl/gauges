(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const s=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const s=e/n,i=t*s-t+"ms",r=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a}));const s=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n)}return!1}},Mwlb:function(t,e,n){"use strict";e.a=(()=>{class t extends class{}{constructor(t){super(),Object.assign(this,t),this.computeProgress()}static parseTasks(e){return e.map(e=>new t(e))}static createEmpty(){return new t({title:"",id:"",repeat:7,executions:[new Date]})}computeProgress(){this.executions.sort((t,e)=>e.getTime()-t.getTime()),this.lastDone=this.executions[0];const e=t.today-this.lastDone.getTime(),n=t.DAY*Math.max(this.repeat,1);this.progress=this.rangePercentage(Math.floor((n-e)/n*100))}rangePercentage(t,e=0,n=100){return Math.min(Math.max(t,e),n)}}return t.today=Date.now(),t.HOUR=36e5,t.DAY=24*t.HOUR,t.WEEK=7*t.DAY,t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));const s=async(t,e,n,s,i)=>{if(t)return t.attachViewToDom(e,n,i,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},ptfe:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n("mrSG"),i=n("2Vo4"),r=n("Mwlb"),o=n("fXoL"),a=n("TEn/");let c=(()=>{class t{constructor(t){this.toastController=t}showToast(t,e=2e3){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:e})).present()}))}showUndoDeletedTask(t,e){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:`"${e.title}" has been removed.`,buttons:[{side:"end",text:"Undo",handler:()=>!!t.updateTask(e)}],duration:3e3})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(a.w))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const u=Date.now();new Date(u-864e5),new Date(u-864e6),new Date(u-864e6),new Date(u-3456e5);let l=(()=>{class t{constructor(t){this.notifs=t,this.tasks=new i.a([]),this.localStorageKey="tasks",this.loaded=new Promise(t=>{this.loadTasks().then(e=>{this.tasks.next(r.a.parseTasks(e)),t(!0)})})}getTasks(){return this.tasks}getTaskById(t){return Object(s.a)(this,void 0,void 0,(function*(){return yield this.loaded,this.tasks.getValue().find(e=>e.id===t)}))}deleteTask(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=this.tasks.getValue(),n=e.indexOf(t);if(n<0)throw Error("Task does not exist");const s=e.splice(n,1);if(0===s.length)throw Error("Cannot delete task");const i=s[0];this.tasks.next([...e]),yield this.persistTasksInDb(),this.notifs.showUndoDeletedTask(this,i)}))}createOrUpdateTask(t){return Object(s.a)(this,void 0,void 0,(function*(){return t.id&&this.tasks.getValue().find(e=>e.id===t.id)?yield this.updateTask(t):yield this.createTask(t)}))}createTask(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=this.tasks.getValue().reduce((t,e)=>parseInt(e.id,16)>t?parseInt(e.id,16):t,0);return t.id=(e+1).toString(16),this.tasks.next([...this.tasks.getValue(),t]),yield this.persistTasksInDb(),t}))}updateTask(t){return Object(s.a)(this,void 0,void 0,(function*(){return this.tasks.next([...this.tasks.getValue().filter(e=>e.id!==t.id),t]),yield this.persistTasksInDb(),t}))}markTaskDone(t){return Object(s.a)(this,void 0,void 0,(function*(){t.executions.push(new Date),t.computeProgress(),yield this.updateTask(t)}))}loadTasks(){return Object(s.a)(this,void 0,void 0,(function*(){return(yield this.loadTasksFromDb())||[]}))}persistTasksInDb(){return Object(s.a)(this,void 0,void 0,(function*(){localStorage.setItem(this.localStorageKey,JSON.stringify(this.tasks.getValue()))}))}loadTasksFromDb(){return Object(s.a)(this,void 0,void 0,(function*(){const t=localStorage.getItem(this.localStorageKey);if(!t)return;const e=JSON.parse(t);return e.forEach(t=>{t.executions=t.executions.map(t=>new Date(t))}),e}))}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(c))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xgmX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i}));const s={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=()=>{s.selection()},r=()=>{s.selectionStart()},o=()=>{s.selectionChanged()},a=()=>{s.selectionEnd()},c=t=>{s.impact(t)}}}]);