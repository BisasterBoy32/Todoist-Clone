(window["webpackJsonpreact-boilerplate"]=window["webpackJsonpreact-boilerplate"]||[]).push([[0],{13:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEfklEQVRogdWaa4hVVRTH//cyTWZhjQWZhZRkZhaVFBQ96AFFBKWV9iAliehDRiBSJGohQpLUB/VDCUlkNnNBgl5+iIysMHtY9IBKeihhGvjInEw05hfrzj7M9ex1jjN3zp3p/GHBPWfvtddaZ6/X2edWAAVUJN0T6CJJIyURqKI+5F3TsFbWdX/XSl/vl7RF0mpJG/pmgNEo4G3Kg+VAtf7ww493SqR8gqVmgLnQnZLWqXw4ImlKVdKsEipvOE7SNDNgUjRUHkw0A44vsQHt1YZUV0b0VFN5t5U4KGlfwetTjW4Vjx5JL0q6OMTbfEm7C5JSsTqwLcqwxeFd4OpQLBvphoIk1Npa5ELfS1qUUV9sFx6N7jYHzID2AhXfK+k5SSskHUiNdUiaJ2mOpFER5yAM2CppTDQ0MJifvyJpiaSfU5y2wzMlLZA0oSDF+9YGTgIWAnsiD+sfNgLXOH6u4P8bWxhjtUZh5wAvAf9G03z8AMwEKo7i5wMvAz0uZ3Ho8p6aPc2PckTsAxaHFjzNezIwH9gfccFfwB/R3cGh04Se5ihiLfZsYHtq+TXAuc58o/uAHx11bBdWA+OB0cFd90azmkN9B74GngZGOkqZcQuCO1znjBtdCWzIEP8+cJXDc2M0sznUY+D3wGqGzHCEZdE4YBVwxBGdFx8TbOsjjuZQd6GdKdY3gSmO4IROBOZm+POfwJIQC158LAwxVBTqBnzsLHYIWAmMTSlxL/BtNLsX5ufnOYobPRB2pWjUkifzVEZgmXs9AdwPvBWN9uKD0Nt4il8LvBdxFIda2jfXDiB3/wI86Cid1JRVQ1AHOj3h1wOfRlP70A08A3Q4vJbJHs/YzUMhRgo3YLSjSDvwMLAjzQBMcuYbTQe+i0T0Yk3gOzMUwaIMqbvQFuBJ4ARHqTNCjbAW4xZn3OjynEOxD0POT/PcHM1sDl2NadSyyx2OsCwaG/z8sCP6p1AHqg7v+BBrRaCzsZAlsDpwiSM4oRHAPIeP0O8sznBL63oXAbsjrkEasCm6DQeBZ4HTU0pMCy7n4TVgsqO40d059WMwqMdAR8gqXgf5G/AYMBV4PRrtxWbgJkfpJD7WRxzF4ah22rLEqwNY+lfgoQw/tzrwwgDeLZqFWwfsaX6Ws6D5+bKMNjzpk4r08zzUd+AUR5E2YA6wK8W8DrjAmW90O/BNjrBWoB4DX4bq2e4oNSbEx9qcOnBpi/08D0fVgc+B2xwFs8gy1ArgnxwBrUanHS0eDkcUl0l6Q1JN0oXRAUYf7BzpEUlfhDOeEdGMoUPFO52eIekTScsknZoamyppk6SVks4aRsUTVOyVb7ukcdFQL7ZJWi5ph6Tpku6KZgwvutqOIf5sSc9Hd/9H8FyoTKgMxfeBVqJqBvxdYgO6qyEdlhVfWRa6IqTNsmGP/afDdmCzpKUlNGCupJ2NbYK9+x4Yxragv7CDhlmJ3o1/tzFMlHSrpMkNLUKSau0rjH1tsWv7bfeSz7R2bTjW3268tZLrxrXSa9t1t/l8aHd21VeT9B+Lu4WPg3kpFQAAAABJRU5ErkJggg=="},14:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),s=a(1),o=a(12),d=a.n(o),i=(a(21),d.a.initializeApp({apiKey:"AIzaSyDfekojaU5-6dtCbKTRKewqo7N7G7Jwco4",authDomain:"todoist-clone-5008e.firebaseapp.com",databaseURL:"https://todoist-clone-5008e.firebaseio.com",projectId:"todoist-clone-5008e",storageBucket:"todoist-clone-5008e.appspot.com",messagingSenderId:"887074625150",appId:"1:887074625150:web:53a8b0340f99a956536a2f"})),u=a(3),m=a.n(u),p=a(2),f=a(4),j=[{key:"TODAY",name:"TODAY"},{key:"INBOX",name:"INBOX"},{key:"NEXT_7",name:"NEXT 7 DAYS"}],E=function(e){return j.find((function(t){return t.key===e}))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=Object(n.createContext)(),v=function(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){i.firestore().collection("projects").where("userid","==","1").orderBy("name").get().then((function(e){var t=e.docs.map((function(e){return b({},e.data(),{docId:e.id})}));JSON.stringify(a)!==JSON.stringify(t)&&c(t)}))}),[a]),[a,c]}(),r=Object(s.a)(a,2),l=r[0],o=r[1];return c.a.createElement(O.Provider,{value:{projects:l,setProjects:o}},t)},N=function(){return Object(n.useContext)(O)},A=Object(n.createContext)(),h=function(e){var t=e.children,a=Object(n.useState)("INBOX"),r=Object(s.a)(a,2),l=r[0],o=r[1];return c.a.createElement(A.Provider,{value:{selectedProject:l,setSelectedProject:o}},t)},w=function(){return Object(n.useContext)(A)},_=function(e){var t=e.setProject,a=e.setShowProjectOverlay,n=N().projects;return n&&c.a.createElement("div",{className:"project-overlay","data-testid":"project-overlay"},c.a.createElement("ul",{className:"project-overlay__list"},n.map((function(e){return c.a.createElement("li",{key:e.docId,"data-testid":"project-overlay-action",onClick:function(){t(e.docId),a(!1)}},c.a.createElement("span",{className:"sidebar__dot",style:{color:e.color,fontSize:"42px"}},"\u30fb"),c.a.createElement("span",{className:"sidebar__project-name"}," ",e.name," "))}))))},y=function(e){var t=e.setShowDate,a=e.setDate;return c.a.createElement("div",{className:"task-date","data-testid":"task-date-overlay"},c.a.createElement("ul",{className:"task-date__list"},c.a.createElement("li",{"data-testid":"test-date-today",onClick:function(){a(m()().format("DD-MM-YYYY")),t(!1)}},c.a.createElement("span",null,c.a.createElement(p.h,null)),c.a.createElement("span",null," Today")),c.a.createElement("li",{"data-testid":"test-date-tomorrow",onClick:function(){a(m()().add(1,"days").format("DD-MM-YYYY")),t(!1)}},c.a.createElement("span",null,c.a.createElement(p.i,null)),c.a.createElement("span",null," Tomorrow")),c.a.createElement("li",{"data-testid":"test-date-next-week",onClick:function(){a(m()().add(7,"days").format("DD-MM-YYYY")),t(!1)}},c.a.createElement("span",null,c.a.createElement(p.g,null)),c.a.createElement("span",null," This Week"))))},S=function(e){var t=e.showAddTaskMain,a=void 0===t||t,r=e.shouldShowMain,l=void 0!==r&&r,o=e.showQuickAddTask,d=e.setShowQuickAddTask,u=w().selectedProject,f=Object(n.useState)(""),j=Object(s.a)(f,2),E=j[0],k=j[1],b=Object(n.useState)(""),O=Object(s.a)(b,2),v=O[0],N=O[1],A=Object(n.useState)(""),h=Object(s.a)(A,2),S=h[0],g=h[1],D=Object(n.useState)(!1),Y=Object(s.a)(D,2),T=Y[0],B=Y[1],C=Object(n.useState)(!1),I=Object(s.a)(C,2),M=I[0],P=I[1],x=Object(n.useState)(l),X=Object(s.a)(x,2),z=X[0],U=X[1];return c.a.createElement("div",{className:o?"add-task add-task__overlay":"add-task"},a&&c.a.createElement("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return U(!z)}},c.a.createElement("span",{className:"add-task__plus"}," + "),c.a.createElement("span",{className:"add-task__text"}," Add Task ")),(o||z)&&c.a.createElement("div",{className:"add-task__main","data-testid":"add-task-main"},o&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{"data-testid":"quick-add-task"},c.a.createElement("h2",{className:"header"}," Quick Add Task "),c.a.createElement("span",{"aria-label":"Close",className:"add-task__cancel-x","data-testid":"add-task-quick-cancel",onClick:function(){d(!1),B(!1),k(""),g("")}}," X"))),c.a.createElement("input",{type:"text",className:"add-task__content","data-testid":"add-task-content",value:E,onChange:function(e){return k(e.target.value)}}),c.a.createElement("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:function(){var e=S||u,t=null;return"TODAY"===e?t=m()().format("DD-MM-YYYY"):"NEXT_7"===e&&(t=m()().add(7,"days").format("DD-MM-YYYY")),e&&E&&i.firestore().collection("tasks").add({userid:"1",archive:!1,date:t||v,projectid:e,task:E}).then((function(e){g(""),k(""),P(!1),N(""),U(!1),d(!1),B(!1)}))}},"Add Task"),!o&&c.a.createElement("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){U(!1),B(!1),g(""),k("")}},"cancel"),c.a.createElement("span",{className:"add-task__project","data-testid":"show-project-overlay",onClick:function(){return B(!T)}},c.a.createElement(p.f,null)),c.a.createElement("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){return P(!M)}},c.a.createElement(p.e,null)),T&&c.a.createElement(_,{setProject:g,setShowProjectOverlay:B}),M&&c.a.createElement(y,{setDate:N,setShowDate:P})))},g=a(13),D=a.n(g),Y=function(e){var t=e.darkMode,a=e.setDarkMode,r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],d=l[1];return c.a.createElement("div",{className:t?"darkmode":void 0},c.a.createElement("header",{"data-testid":"header"},c.a.createElement("nav",null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:D.a,alt:"App-Logo"})),c.a.createElement("div",{className:"settings"},c.a.createElement("ul",null,c.a.createElement("li",{"data-testid":"quick-add-task-action",className:"settings__add",onClick:function(){return d(!0)}},"+"),c.a.createElement("li",{"data-testid":"dark-mode-action",className:"settings__darkmode",onClick:function(){return a(!t)}},c.a.createElement(p.c,null)))))),c.a.createElement(S,{showAddTaskMain:!1,showQuickAddTask:o,setShowQuickAddTask:d}))},T=a(5),B=function(e){var t=e.project,a=w().setSelectedProject,r=N(),l=r.projects,o=r.setProjects,d=Object(n.useState)(!1),u=Object(s.a)(d,2),m=u[0],f=u[1];return c.a.createElement(n.Fragment,null,c.a.createElement("span",{className:"sidebar__dot",style:{color:t.color,fontSize:"42px"}},"\u30fb"),c.a.createElement("span",{className:"sidebar__project-name"}," ",t.name," "),c.a.createElement("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return f(!m)}},c.a.createElement(p.j,null)),m&&c.a.createElement("div",{className:"project-delete-modal"},c.a.createElement("div",{className:"project-delete-modal__inner"},c.a.createElement("p",null," Are you sure you want to delete this project?"),c.a.createElement("button",{type:"button",onClick:function(){return e=t.docId,void i.firestore().collection("projects").doc(e).delete().then((function(){o(Object(T.a)(l)),a("INBOX")}));var e}}," Yes, Delete"),c.a.createElement("span",{onClick:function(){return f(!m)}}," Cancel "))))},C=function(e){var t=e.activeValue,a=t.active,n=t.setActive,r=N().projects,l=w(),s=(l.selectedProject,l.setSelectedProject);return r&&r.map((function(e){return c.a.createElement("li",{key:e.docId,"data-doc-id":e.docId,"data-testid":"project-action-parent",className:a===e.docId?"active sidebar__project":"sidebar__project"},c.a.createElement("div",{className:"project-action",role:"button","data-testid":"project-action","aria-label":"Select ".concat(e.name," as the task project"),onClick:function(){n(e.docId),s(e.docId),document.title=e.name},onKeyDown:function(){n(e.docId),s(e.docId),document.title=e.name},tabIndex:0},c.a.createElement(B,{project:e})))}))},I=function(){var e=["#6accbc","#fad003","#ff8d85","#ff9932","#af38eb","#fa4545"],t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),d=Object(s.a)(o,2),u=d[0],m=d[1],p=N(),f=p.projects,j=p.setProjects,E=w(),k=E.selectedProject,b=E.setSelectedProject;return c.a.createElement("div",{className:"add-project","data-testid":"add-project"},r&&c.a.createElement("div",{className:"add-project__input"},c.a.createElement("input",{value:u,onChange:function(e){return m(e.target.value)},"data-testid":"project-name",type:"text",placeholder:"Name Your Project"}),c.a.createElement("button",{className:"add-project__submit",type:"button","data-testid":"add-project-submit",onClick:function(t){t.preventDefault(),i.firestore().collection("projects").add({name:u,color:e[Math.floor(Math.random()*e.length)],userid:"1"}).then((function(){j(Object(T.a)(f)),b(k),l(!1),m("")}))}},"Add Project"),c.a.createElement("span",{className:"add-project__cancel","data-testid":"hide-project-overlay",onClick:function(){l(!1),m("")}},"cancel")),c.a.createElement("span",{className:"add-project__plus"},"+"),c.a.createElement("span",{"data-testid":"add-project-action",className:"add-project__text",onClick:function(){return l(!r)}},"Add Project"))},M=function(){var e=w().setSelectedProject,t=Object(n.useState)("INBOX"),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!0),d=Object(s.a)(o,2),i=d[0],u=d[1];return c.a.createElement("div",{className:"sidebar","data-testid":"sidebar"},c.a.createElement("ul",{className:"sidebar__generic"},c.a.createElement("li",{"data-testid":"inbox",className:"INBOX"===r?"active":void 0},c.a.createElement("div",{onClick:function(){e("INBOX"),l("INBOX"),document.title="INBOX"}},c.a.createElement("span",null,c.a.createElement(p.b,null)),c.a.createElement("span",null," Inbox "))),c.a.createElement("li",Object(f.a)({"data-testid":"today",className:"TODAY"},"className","TODAY"===r?"active":void 0),c.a.createElement("div",{onClick:function(){e("TODAY"),l("TODAY"),document.title="TODAY"}},c.a.createElement("span",null,c.a.createElement(p.d,null)),c.a.createElement("span",null," Tododay "))),c.a.createElement("li",{"data-testid":"next_7",className:"NEXT_7"===r?"active":void 0},c.a.createElement("div",{onClick:function(){e("NEXT_7"),l("NEXT_7"),document.title="NEXT_7"}},c.a.createElement("span",null,c.a.createElement(p.e,null)),c.a.createElement("span",null," Next 7 days ")))),c.a.createElement("div",{className:"sidebar__middle","data-testid":"sidebar-middle-action",onClick:function(){return u(!i)}},c.a.createElement("span",null,c.a.createElement(p.a,{className:i?void 0:"hidden-projects"})),c.a.createElement("h2",null," Projects")),c.a.createElement("ul",{className:"sidebar__projects"},i&&c.a.createElement(C,{activeValue:{active:r,setActive:l}})),c.a.createElement(I,null))},P=function(e){var t=e.id;return c.a.createElement("div",{className:"checkbox-holder","data-testid":"checkbox-action",onClick:function(){i.firestore().collection("tasks").doc(t).update({archive:!0})}},c.a.createElement("span",{className:"checkbox"}))},x=function(){var e=w().selectedProject,t=N().projects,a="";t&&!E(e)&&(a=function(e,t){return e.find((function(e){return e.docId===t}))}(t,e).name),t&&E(e)&&(a=function(e){return j.find((function(t){return t.key===e}))}(e).name);var r=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),d=o[0],u=o[1];return Object(n.useEffect)((function(){var t=i.firestore().collection("tasks").where("userid","==","1");(t=e&&!E(e)?t.where("projectid","==",e):"TODAY"===e?t.where("date","==",m()().format("DD-MM-YYYY")):"NEXT_7"===e?t.where("date","<=",m()().add(7,"days").format("DD-MM-YYYY")):"INBOX"===e||0===e?t.where("date","==",""):t).onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data();return b({id:e.id},t)})),a=t.filter((function(e){return!1===e.archive})),n=t.filter((function(e){return!0===e.archive}));r(a),u(n)}))}),[e]),[c,d]}(e),l=Object(s.a)(r,1)[0];return c.a.createElement("div",{className:"tasks","data-testid":"tasks"},c.a.createElement("h2",{"data-testid":"project-name"},a),c.a.createElement("ul",{className:"tasks__list"},l.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(P,{id:e.id}),c.a.createElement("span",null,e.task))}))),c.a.createElement(S,null))},X=function(){return c.a.createElement("div",{className:"content"},c.a.createElement(M,null),c.a.createElement(x,null))};var z=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement(h,null,c.a.createElement(v,null,c.a.createElement("main",{className:"App","data-testid":"application"},c.a.createElement(Y,{darkMode:a,setDarkMode:r}),c.a.createElement(X,null))))};a(26);l.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba074798.chunk.js.map