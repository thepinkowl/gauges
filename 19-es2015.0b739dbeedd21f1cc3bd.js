(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/2RN":function(e,t,s){"use strict";s.r(t),s.d(t,"DashBoardPageModule",(function(){return N}));var i=s("ofXK"),r=s("3Pt+"),a=s("TEn/"),o=s("tyNb"),n=s("ycII"),c=s("fXoL"),h=s("ptfe");let l=(()=>{class e{constructor(e,t,s){this.renderer=e,this.domCtrl=t,this.el=s,this.used=!1}ngOnInit(){this.search=document.getElementById("dashboard-search-bar"),setTimeout(()=>{this.used||this.scrollPage(1)},700)}showSearchBar(){this.domCtrl.write(()=>{this.renderer.setStyle(this.search,"height","60px")})}hideSearchBar(){this.domCtrl.write(()=>{this.renderer.setStyle(this.search,"height","0")})}scrollPage(e){[...this.el.nativeElement.shadowRoot.childNodes].find(e=>e.className.includes("inner-scroll")).scrollTop=e}onContentScroll(e){this.used=!0,e.detail.deltaY<0?0===e.detail.scrollTop&&(-1!==e.detail.deltaY?this.scrollPage(1):this.showSearchBar()):e.detail.deltaY>1?this.hideSearchBar():0===e.detail.scrollTop?this.showSearchBar():this.hideSearchBar()}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.D),c.Kb(a.c),c.Kb(c.l))},e.\u0275dir=c.Fb({type:e,selectors:[["","appHideHeader",""]],hostBindings:function(e,t){1&e&&c.Vb("ionScroll",(function(e){return t.onContentScroll(e)}))}}),e})();var g=s("mrSG"),d=s("qfBg");let b=(()=>{class e{constructor(e,t,s){this.alertController=e,this.userService=t,this.tasksService=s,this.messages={green:["all lights green, have a break","you're doing well today!","nothing new here, have a break","all lights are green, bravo!","you are the best!"],orange:["a few things to do and you're done","some chores are due today, take it easy","you're almost done for today","swipe it right!"],red:["swipe them right!","did you forget something?","it's time to do them!","I know you can do it!","let's get some work done today!"]},this.message=""}ngOnInit(){this.user=this.userService.getUser(),this.tasksService.getTasks().subscribe(e=>{if(!e||!e.length)return void(this.message="start by creating a task!");let t;t=e.some(e=>e.progress<25)?this.messages.red:e.some(e=>e.progress<50)?this.messages.orange:this.messages.green,this.message=t[Math.floor(Math.random()*t.length)]})}setName(){return Object(g.__awaiter)(this,void 0,void 0,(function*(){this.alert&&this.alert.dismiss(),this.alert=yield this.alertController.create({header:"How should I call you?",inputs:[{name:"name",type:"text",id:"name",value:this.userService.getUserName(),placeholder:"Name"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Ok",handler:({name:e})=>{this.userService.setUserName(e)}}]}),this.alert.present()}))}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(a.a),c.Kb(d.a),c.Kb(h.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-mood-title"]],decls:6,vars:4,consts:[[3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"h1"),c.oc(1," Hey "),c.Nb(2,"span",0),c.Vb("click",(function(){return t.setName()})),c.oc(3),c.Yb(4,"async"),c.Mb(),c.oc(5),c.Mb()),2&e&&(c.Ab(3),c.pc(c.Zb(4,2,t.user).name),c.Ab(2),c.qc(", ",t.message,"\n"))},pipes:[i.b],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{width:73%;max-width:350px;font-family:var(--tpo-font-family);font-size:var(--tpo-font-big);font-weight:700;line-height:140%;margin:var(--tpo-margin);margin-top:40px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),e})();var u=s("zRHw"),p=s("uWEj");function f(e,t){if(1&e&&c.Lb(0,"app-task-list",6),2&e){const e=c.Xb();c.dc("tasks",e.tasks)}}const m=function(e){return["/category",e]};function k(e,t){if(1&e&&(c.Nb(0,"ion-item",9),c.Nb(1,"ion-grid"),c.Nb(2,"ion-row"),c.oc(3),c.Mb(),c.Nb(4,"ion-row",10),c.Lb(5,"app-gauge",11),c.Mb(),c.Mb(),c.Mb()),2&e){const e=t.$implicit,s=c.Xb(3);c.dc("routerLink",c.fc(3,m,e.cid)),c.Ab(3),c.pc(e.title),c.Ab(2),c.dc("percentage",s.getCategoryProgress(e))}}function C(e,t){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"ion-list-header"),c.Nb(2,"ion-label"),c.oc(3),c.Mb(),c.Mb(),c.nc(4,k,6,5,"ion-item",8),c.Mb()),2&e){const e=t.$implicit,s=c.Xb(2);c.Ab(3),c.pc(e.title),c.Ab(1),c.dc("ngForOf",s.getChildCategories(e))}}function y(e,t){if(1&e&&(c.Nb(0,"ion-list"),c.nc(1,C,5,2,"div",7),c.Lb(2,"app-task-list",6),c.Mb()),2&e){const e=c.Xb();c.Ab(1),c.dc("ngForOf",e.parentCategories),c.Ab(1),c.dc("tasks",e.otherTasks)}}const w=[{path:"",component:(()=>{class e{constructor(e,t){this.tasksService=e,this.categoriesService=t,this.categories=[],this.tasks=[],this.initialTasks=[],this.subs=[],this.showTasksRatherThanCategories=!0}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}ionViewWillEnter(){this.$tasks=this.tasksService.getTasks(),this.$categories=this.categoriesService.getCategories();const e=this.$tasks.subscribe(e=>{this.initialTasks=e,this.tasks=e}),t=this.$categories.subscribe(e=>{this.initialCategories=e,this.categories=e});this.subs.push(e,t)}get parentCategories(){let e=[...this.categories.filter(e=>{const t=this.getChildCategories(e).some(e=>this.tasks.some(t=>t.category===e.cid));return!e.parentcid&&t})];return this.tasks.some(e=>!e.hasCategory())&&e.push(n.b),e}get otherTasks(){return this.tasks.filter(e=>!e.hasCategory())}getChildCategories(e){return this.categories.filter(t=>{const s=this.tasks.some(e=>e.category===t.cid);return t.parentcid===e.cid&&s})}getCategoryProgress(e){const t=this.tasksService.getTasksInCategory(e).map(e=>e.progress);return Math.min(...t)}filterContent(e){this.tasks=this.initialTasks.filter(t=>t.name.toLowerCase().includes(e.target.value.toLowerCase())),this.categories=this.initialCategories.filter(t=>t.title.toLowerCase().includes(e.target.value.toLowerCase()))}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(h.a),c.Kb(n.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-dashboard"]],decls:7,vars:4,consts:[["scrollEvents","true","appHideHeader","",3,"fullscreen"],["id","dashboard-search-bar",1,"search-bar"],[3,"ngModel","ngModelChange"],[3,"ionInput"],[3,"tasks",4,"ngIf"],[4,"ngIf"],[3,"tasks"],[4,"ngFor","ngForOf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"gauge-holder"],[3,"percentage"]],template:function(e,t){1&e&&(c.Nb(0,"ion-content",0),c.Lb(1,"app-mood-title"),c.Nb(2,"div",1),c.Nb(3,"ion-checkbox",2),c.Vb("ngModelChange",(function(e){return t.showTasksRatherThanCategories=e})),c.Mb(),c.Nb(4,"ion-searchbar",3),c.Vb("ionInput",(function(e){return t.filterContent(e)})),c.Mb(),c.Mb(),c.nc(5,f,1,1,"app-task-list",4),c.nc(6,y,3,2,"ion-list",5),c.Mb()),2&e&&(c.dc("fullscreen",!0),c.Ab(3),c.dc("ngModel",t.showTasksRatherThanCategories),c.Ab(2),c.dc("ngIf",t.showTasksRatherThanCategories),c.Ab(1),c.dc("ngIf",!t.showTasksRatherThanCategories))},directives:[a.j,l,b,a.i,a.b,r.c,r.d,a.y,a.J,i.k,u.a,a.u,i.j,a.v,a.t,a.p,a.H,o.h,a.l,a.x,p.a],styles:["[_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]{transition:height .7s;overflow:hidden;height:0;padding-left:21px;display:flex;align-items:center}[_nghost-%COMP%]   .gauge-holder[_ngcontent-%COMP%]{padding:5px 0}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(w)],o.i]}),e})();var M=s("/hdp");let N=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[i.c,r.a,a.D,v,M.a]]}),e})()}}]);