(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/2RN":function(t,e,s){"use strict";s.r(e),s.d(e,"DashBoardPageModule",function(){return O});var i=s("ofXK"),o=s("3Pt+"),n=s("TEn/"),r=s("tyNb"),a=s("ycII"),c=s("fXoL"),g=s("ptfe"),h=s("qfBg");const l=function(){return["/profile"]};let b=(()=>{class t{constructor(t,e){this.userService=t,this.tasksService=e,this.messages={green:["all lights green, have a break","you're doing well today!","nothing new here, have a break","all lights are green, bravo!","you are the best!"],orange:["a few things to do and you're done","some chores are due today, take it easy","you're almost done for today","swipe it right!"],red:["swipe them right!","did you forget something?","it's time to do them!","I know you can do it!","let's get some work done today!"]},this.message=""}ngOnInit(){this.user=this.userService.getUser(),this.tasksService.getTasks().subscribe(t=>{if(!t||!t.length)return void(this.message="start by creating a task!");let e;e=t.some(t=>t.progress<25)?this.messages.red:t.some(t=>t.progress<50)?this.messages.orange:this.messages.green,this.message=e[Math.floor(Math.random()*e.length)]})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(h.a),c.Mb(g.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-mood-title"]],decls:6,vars:6,consts:[[3,"routerLink"]],template:function(t,e){1&t&&(c.Pb(0,"h1"),c.pc(1," Hey "),c.Pb(2,"span",0),c.pc(3),c.ac(4,"async"),c.Ob(),c.pc(5),c.Ob()),2&t&&(c.Cb(2),c.fc("routerLink",c.gc(5,l)),c.Cb(1),c.qc(c.bc(4,3,e.user).name),c.Cb(2),c.rc(", ",e.message,"\n"))},directives:[n.E,r.h],pipes:[i.b],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{width:73%;max-width:350px;font-family:var(--tpo-font-family);font-size:var(--tpo-font-big);font-weight:700;line-height:140%;margin:var(--tpo-margin);margin-top:40px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),t})();var u=s("zRHw"),p=s("uWEj");function d(t,e){if(1&t&&c.Nb(0,"app-task-list",6),2&t){const t=c.Zb();c.fc("tasks",t.tasks)}}const f=function(t){return["/category",t]};function m(t,e){if(1&t&&(c.Pb(0,"ion-item",9),c.Pb(1,"ion-grid"),c.Pb(2,"ion-row"),c.pc(3),c.Ob(),c.Pb(4,"ion-row",10),c.Nb(5,"app-gauge",11),c.Ob(),c.Ob(),c.Ob()),2&t){const t=e.$implicit,s=c.Zb(3);c.fc("routerLink",c.hc(3,f,t.cid)),c.Cb(3),c.qc(t.title),c.Cb(2),c.fc("percentage",s.getCategoryProgress(t))}}function C(t,e){if(1&t&&(c.Pb(0,"div"),c.Pb(1,"ion-list-header"),c.Pb(2,"ion-label"),c.pc(3),c.Ob(),c.Ob(),c.oc(4,m,6,5,"ion-item",8),c.Ob()),2&t){const t=e.$implicit,s=c.Zb(2);c.Cb(3),c.qc(t.title),c.Cb(1),c.fc("ngForOf",s.getChildCategories(t))}}function k(t,e){if(1&t&&(c.Pb(0,"ion-list"),c.oc(1,C,5,2,"div",7),c.Nb(2,"app-task-list",6),c.Ob()),2&t){const t=c.Zb();c.Cb(1),c.fc("ngForOf",t.parentCategories),c.Cb(1),c.fc("tasks",t.otherTasks)}}const y=[{path:"",component:(()=>{class t{constructor(t,e){this.tasksService=t,this.categoriesService=e,this.categories=[],this.categoryCIDs=[],this.tasks=[],this.initialTasks=[],this.subs=[],this.showTasksRatherThanCategories=!0}ngOnDestroy(){this.subs.forEach(t=>t.unsubscribe())}ionViewWillEnter(){this.$tasks=this.tasksService.getTasks(),this.$categories=this.categoriesService.getCategories();const t=this.$tasks.subscribe(t=>{this.initialTasks=t,this.tasks=t}),e=this.$categories.subscribe(t=>{this.initialCategories=t,this.categories=t});this.subs.push(t,e)}ionViewDidEnter(){this.scroll||this.ionContent.scrollToPoint(0,60)}onScrollEnd(){this.scroll||(this.scroll=!0)}get parentCategories(){const t=[...this.categories.filter(t=>{const e=this.getChildCategories(t).some(t=>this.tasks.some(e=>e.category===t.cid)||this.categoryCIDs.some(e=>t.cid===e));return!t.parentcid&&e})];return this.tasks.some(t=>!t.hasCategory())&&t.push(a.b),t}get otherTasks(){return this.tasks.filter(t=>!t.hasCategory())}getChildCategories(t){return this.categories.filter(e=>{const s=this.tasks.some(t=>t.category===e.cid)||this.categoryCIDs.some(t=>e.cid===t)&&this.initialTasks.some(t=>t.category===e.cid);return e.parentcid===t.cid&&s})}getCategoryProgress(t){const e=this.tasksService.getTasksInCategory(t).map(t=>t.progress);return Math.min(...e)}filterContent(t){this.tasks=this.initialTasks.filter(e=>e.name.toLowerCase().includes(t.target.value.toLowerCase())),this.categoryCIDs=this.initialCategories.filter(e=>e.title.toLowerCase().includes(t.target.value.toLowerCase())).map(t=>t.cid)}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(g.a),c.Mb(a.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-dashboard"]],viewQuery:function(t,e){if(1&t&&c.tc(n.g,1),2&t){let t;c.jc(t=c.Yb())&&(e.ionContent=t.first)}},decls:7,vars:2,consts:[["scrollEvents","true",3,"ionScrollEnd"],[1,"content"],["id","dashboard-search-bar",1,"search-bar"],[3,"ionInput"],[3,"tasks",4,"ngIf"],[4,"ngIf"],[3,"tasks"],[4,"ngFor","ngForOf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"gauge-holder"],[3,"percentage"]],template:function(t,e){1&t&&(c.Pb(0,"ion-content",0),c.Xb("ionScrollEnd",function(){return e.onScrollEnd()}),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"ion-searchbar",3),c.Xb("ionInput",function(t){return e.filterContent(t)}),c.Ob(),c.Ob(),c.Nb(4,"app-mood-title"),c.oc(5,d,1,1,"app-task-list",4),c.oc(6,k,3,2,"ion-list",5),c.Ob(),c.Ob()),2&t&&(c.Cb(5),c.fc("ngIf",e.showTasksRatherThanCategories),c.Cb(1),c.fc("ngIf",!e.showTasksRatherThanCategories))},directives:[n.g,n.v,n.G,b,i.k,u.a,n.r,i.j,n.s,n.q,n.m,n.E,r.h,n.i,n.u,p.a],styles:["[_nghost-%COMP%]{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{min-height:calc(100vh + 60px - env(safe-area-inset-top) - env(safe-area-inset-bottom))}[_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]{height:60px;display:flex;align-items:center}[_nghost-%COMP%]   .gauge-holder[_ngcontent-%COMP%]{padding:5px 0}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[r.i.forChild(y)],r.i]}),t})();var w=s("/hdp");let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[i.c,o.a,n.A,v,w.a]]}),t})()}}]);