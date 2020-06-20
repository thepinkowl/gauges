(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{S4AJ:function(t,n,e){"use strict";e.r(n),e.d(n,"TaskDetailPageModule",(function(){return y}));var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),a=e("mrSG"),l=e("Mwlb"),r=e("fXoL"),g=e("ptfe");const b=function(t,n){return{selected:t,"bi-weekly":n}};function d(t,n){if(1&t){const t=r.Nb();r.Mb(0,"div",1),r.Ub("click",(function(){r.gc(t);const e=n.$implicit;return r.Wb().toggle(e)})),r.mc(1),r.Lb()}if(2&t){const t=n.$implicit,e=r.Wb();r.bc("ngClass",r.ec(2,b,e.week.includes(t.day),!!e.biWeekly)),r.zb(1),r.oc(" ",t.symbol,"\n")}}let f=(()=>{class t{constructor(){this.value=[],this.days=[{symbol:"M",day:1},{symbol:"T",day:2},{symbol:"W",day:3},{symbol:"T",day:4},{symbol:"F",day:5},{symbol:"S",day:6},{symbol:"S",day:0}],this.weekChange=new r.n}get week(){return this.value}set week(t){this.value=t,this.weekChange.emit(t)}ngOnInit(){}toggle(t){this.week=this.week.includes(t.day)?[...this.week.filter(n=>t.day!==n)]:[...this.week,t.day]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-week-selector"]],inputs:{week:"week",biWeekly:"biWeekly"},outputs:{weekChange:"weekChange"},decls:1,vars:1,consts:[["class","day",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"day",3,"ngClass","click"]],template:function(t,n){1&t&&r.lc(0,d,2,5,"div",0),2&t&&r.bc("ngForOf",n.days)},directives:[o.j,o.i],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .day[_ngcontent-%COMP%]{border-radius:50%;font-weight:700;width:30px;height:30px;display:flex;justify-content:center;align-items:center;cursor:pointer}[_nghost-%COMP%]   .day.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .day[_ngcontent-%COMP%]:active{background-color:var(--ion-color-light)}[_nghost-%COMP%]   .day.selected.bi-weekly[_ngcontent-%COMP%], [_nghost-%COMP%]   .day[_ngcontent-%COMP%]:active.bi-weekly{background:linear-gradient(90deg,var(--ion-color-light),var(--ion-color-light) 50%,transparent 0)}"]}),t})();function h(t,n){if(1&t){const t=r.Nb();r.Mb(0,"div",13),r.Mb(1,"small"),r.mc(2,"repeats every two weeks "),r.Lb(),r.Mb(3,"ion-toggle",6),r.Ub("ngModelChange",(function(n){return r.gc(t),r.Wb().biWeekly=n})),r.Lb(),r.Lb()}if(2&t){const t=r.Wb();r.zb(3),r.bc("ngModel",t.biWeekly)}}function u(t,n){if(1&t){const t=r.Nb();r.Mb(0,"div",4),r.Mb(1,"div",5),r.mc(2,"When did you last do this?"),r.Lb(),r.Mb(3,"ion-datetime",14),r.Ub("ionChange",(function(n){return r.gc(t),r.Wb().onChange(n)})),r.Lb(),r.Lb()}if(2&t){const t=r.Wb();r.zb(3),r.bc("max",t.now.toISOString())("value",t.lastExecution)}}function m(t,n){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",15),r.Ub("click",(function(){return r.gc(t),r.Wb().create()})),r.mc(1,"Create"),r.Lb()}}function M(t,n){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",15),r.Ub("click",(function(){return r.gc(t),r.Wb().update()})),r.mc(1,"Update"),r.Lb()}}function k(t,n){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",16),r.Ub("click",(function(){return r.gc(t),r.Wb().delete()})),r.mc(1,"Remove this task"),r.Lb()}}const C=[{path:"",component:(()=>{class t{constructor(t,n,e){this.nav=t,this.tasksService=n,this.activatedRoute=e,this.when=[5],this.biWeekly=!1,this.now=new Date,this.task=l.a.createEmpty(),this.new=!0,this.lastExecution=this.now.toISOString()}onChange(t){const n=new Date(t.detail.value);this.task.lastDone.setTime(n.getTime()),this.task.computeProgress()}ngOnInit(){this.activatedRoute.params.subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(this.new="new"===t.id,!this.new){const n=yield this.tasksService.getTaskById(t.id);this.task=n,this.lastExecution=n.lastDone.toISOString()}this.task.computeProgress()})))}goBack(){this.task.computeProgress(),window.history.length>2?this.nav.back():this.nav.navigateBack("/")}create(){return Object(a.a)(this,void 0,void 0,(function*(){this.new&&(yield this.tasksService.createTask(this.task),this.goBack())}))}update(){return Object(a.a)(this,void 0,void 0,(function*(){this.new||(yield this.tasksService.updateTask(this.task),this.goBack())}))}delete(){this.new||(this.tasksService.deleteTask(this.task),this.goBack())}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(c.t),r.Jb(g.a),r.Jb(s.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-task-detail"]],decls:20,vars:9,consts:[[3,"fullscreen"],[1,"form"],[1,"cancel-button"],["fill","clear",3,"click"],[1,"form-element"],[1,"title"],[3,"ngModel","ngModelChange"],[3,"biWeekly","week","weekChange"],["class","repeater",4,"ngIf"],["class","form-element",4,"ngIf"],[1,"actions"],["expand","block","color","primary",3,"click",4,"ngIf"],["fill","clear","color","danger",3,"click",4,"ngIf"],[1,"repeater"],["displayFormat","DDDD MMM D, YYYY",3,"max","value","ionChange"],["expand","block","color","primary",3,"click"],["fill","clear","color","danger",3,"click"]],template:function(t,n){1&t&&(r.Mb(0,"ion-content",0),r.Mb(1,"main"),r.Mb(2,"div",1),r.Mb(3,"div",2),r.Mb(4,"ion-button",3),r.Ub("click",(function(){return n.goBack()})),r.mc(5,"Cancel"),r.Lb(),r.Lb(),r.Mb(6,"div",4),r.Mb(7,"div",5),r.mc(8,"Let's give it a name!"),r.Lb(),r.Mb(9,"ion-input",6),r.Ub("ngModelChange",(function(t){return n.task.title=t})),r.Lb(),r.Lb(),r.Mb(10,"div",4),r.Mb(11,"div",5),r.mc(12,"When do you usually do this task?"),r.Lb(),r.Mb(13,"app-week-selector",7),r.Ub("weekChange",(function(t){return n.task.when=t})),r.Lb(),r.lc(14,h,4,1,"div",8),r.Lb(),r.lc(15,u,4,2,"div",9),r.Lb(),r.Mb(16,"div",10),r.lc(17,m,2,0,"ion-button",11),r.lc(18,M,2,0,"ion-button",11),r.lc(19,k,2,0,"ion-button",12),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.bc("fullscreen",!0),r.zb(9),r.bc("ngModel",n.task.title),r.zb(4),r.bc("biWeekly",n.biWeekly)("week",n.task.when),r.zb(1),r.bc("ngIf",!1),r.zb(1),r.bc("ngIf",n.new),r.zb(2),r.bc("ngIf",n.new),r.zb(1),r.bc("ngIf",!n.new),r.zb(1),r.bc("ngIf",!n.new))},directives:[c.e,c.d,c.i,c.x,i.c,i.d,f,o.k,c.q,c.b,c.f,c.w],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%;padding-bottom:calc(env(safe-area-inset-bottom) + 10px)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;font-weight:700}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{padding:10px 20px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{padding:0 10px!important}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;max-width:70%;padding:20px 0 10px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   app-week-selector[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .repeater[_ngcontent-%COMP%]{padding-top:20px;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .repeater[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{margin-left:15px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:0 40px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(C)],s.i]}),t})(),y=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[o.c,i.a,c.r,p]]}),t})()}}]);