(this["webpackJsonptreller-react"]=this["webpackJsonptreller-react"]||[]).push([[0],{133:function(e,t){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(22),s=a.n(c),l=a(10),i=a(17),o=a(8),u=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"))},d=function(){return r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/",className:"main-navbar-nav-link",exact:!0,activeClassName:"active"},"Home "),"| ",r.a.createElement(i.b,{to:"/boards",className:"main-navbar-nav-link",exact:!0,activeClassName:"active"},"Boards "))},m=a(16),f=a(6),b=a.n(f),p=a(7),v=a(5),E=a(71),O=a.n(E).a.create({withCredentials:!0}),k=function(e,t){return h(e,"GET",t)},j=function(e,t){return h(e,"PUT",t)};function h(e){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(b.a.mark((function e(t){var a,n,r,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"get",n=c.length>2&&void 0!==c[2]?c[2]:null,e.prev=2,e.next=5,O({url:"".concat("/api/").concat(t),method:a,data:n});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:if(e.prev=9,e.t0=e.catch(2),401!==e.t0.response.status){e.next=14;break}throw console.log("ERROR: cannot find boards"),e.t0;case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var y={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t},applyDrag:function(e,t){var a=t.removedIndex,n=t.addedIndex,r=t.payload;if(null===a&&null===n)return console.log("apply drag null"),e;var c=Object(m.a)(e),s=r;null!==a&&(s=c.splice(a,1)[0]);null!==n&&c.splice(n,0,s);return c},reorder:function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(v.a)(r,1)[0];return n.splice(a,0,c),n},move:function(e,t,a,n){var r=Array.from(e),c=Array.from(t),s=r.splice(a.index,1),l=Object(v.a)(s,1)[0];c.splice(n.index,0,l);var i={};return i[a.droppableId]=r,i[n.droppableId]=c,i}};var N={query:function(){return k("board")},getById:function(e){return S.apply(this,arguments)},update:function(e){return j("board/".concat(e._id),e)},getEmptyList:function(){return{id:y.makeId(),title:"",theme:"white",tasks:[]}},getEmptyTask:function(){return{id:y.makeId(),title:"",description:"",creatorId:"",membersId:[],comments:[],dueDate:"",labels:[],isDone:!1,attachment:"",checklists:[]}},getEmptyCheckList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Checklist";return{id:y.makeId(),title:e,listItems:[]}},getEmptyListItem:function(){return{id:y.makeId(),title:"",isDone:!1}},newActivity:function(e,t,a){return{id:y.makeId(),cardTxt:e,boardTxt:t,taskId:a,date:Date.now()}}};function S(){return(S=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("board/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x,w=a(72),C=a.n(w),I={setup:function(){x=C()("/")},terminate:function(){x=null},on:function(e,t){x.on(e,t)},off:function(e,t){x&&x.off(e,t)},emit:function(e,t){x&&x.emit(e,t)}};function D(e){return function(){var t=Object(p.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(JSON.stringify(e)),a({type:"SET_BOARD",currBoard:n}),t.next=4,N.update(n);case 4:r=t.sent,I.emit("update board",r),console.log("afte boarrd saved",r),a({type:"SET_BOARD",currBoard:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function L(e){return function(){var t=Object(p.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"SET_TASK",id:e});case 2:return t.abrupt("return",n().board.currTask);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function A(e){return function(t){t({type:"UPDATE_TASK",currTask:e})}}var T=a(20),B=a(9),J=a(4),M=a(23),R=(a(136),function(e){var t=e.labels;return r.a.createElement("div",{className:"labels-list"},t.map((function(e){return r.a.createElement("span",{className:"label",key:e.id,style:{backgroundColor:e.color}},e.title)})))}),Y=a(33),U=a.n(Y),_=function(e){var t=e.task,a=e.index,n=Object(o.h)().url,c={lastDay:"[Yesterday ] ",sameDay:"[Today ] ",nextDay:"[Tomorrow ] ",lastWeek:"DD/MM/YYYY",nextWeek:"DD/MM/YYYY",sameElse:"DD/MM/YYYY"};return r.a.createElement(T.b,{draggableId:t.id,index:a},(function(e){return r.a.createElement("div",Object.assign({className:"task-preview"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("div",{className:"task-preview-content"},r.a.createElement(i.b,{to:"".concat(n,"/").concat(t.id),className:"task-link",activeClassName:"active",draggable:"false"},t.labels&&r.a.createElement(R,{labels:t.labels}),r.a.createElement("div",{className:"task-preview-title"},t.title),t.dueDate&&r.a.createElement(U.a,{calendar:c,date:t.dueDate}))))}))};var W=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],c=a[1];function s(t){t.key===e&&c(!0)}var l=function(t){t.key===e&&c(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",l),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",l)}}),[]),r},F=function(e){var t=e.type,a=e.text,c=e.name,s=e.onInputBlur,l=e.isWide,i=e.isFocused,o=e.blurInput,u=e.onChange,d=e.onSubmit,m=e.onEscape,f=Object(n.useState)(!1),b=Object(v.a)(f,2),p=b[0],E=b[1],O=Object(n.useState)(""),k=Object(v.a)(O,2),j=k[0],h=k[1],g=Object(n.useRef)(null),y=W("Enter"),N=W("Escape");Object(n.useEffect)((function(){p&&g.current.focus()}),[p]),Object(n.useEffect)((function(){i&&E(!0)}),[i,p]),Object(n.useEffect)((function(){void 0!==o&&o&&E(!1)}),[o]),Object(n.useEffect)((function(){p&&h(a)}),[p]),Object(n.useEffect)((function(){p&&!l&&(y&&(s?s():d(),E(!1)),N&&(u({target:{name:c,value:j}}),E(!1),m&&m()))}),[y,N]);var S=r.a.createElement(t,{className:"module-text",onClick:function(){E(!0)}},a),x=function(){s&&(E(!1),s())};return r.a.createElement("div",{className:"text-editor-wrapper"},p?l?r.a.createElement("textarea",{ref:g,className:"focusClass",autoFocus:!0,rows:"5",name:c,defaultValue:a,onChange:function(e){u(e)},onBlur:x}):r.a.createElement("input",{type:"text",ref:g,autoFocus:!0,className:"focusClass",name:c,defaultValue:a,onChange:function(e){var t=e.target.value;/^\s+$/.test(t)||""===t||u(e)},onBlur:x}):S)},P=a(15),H=function(e){var t=e.onCloseMenu,a=e.onRemoveList,n=e.onAddTask;return r.a.createElement("div",{className:"pop-up list-menu"},r.a.createElement("div",{className:"pop-up-header"},r.a.createElement("span",{className:"pop-up-title"},"Labels"),r.a.createElement("button",{className:"pop-up-close-btn clear-btn",onClick:function(){return t()}},r.a.createElement(P.b,null))),r.a.createElement("div",{onClick:n},"Add card"),r.a.createElement("div",null,"Change list color"),r.a.createElement("div",null,"Sort list by"),r.a.createElement("div",{onClick:a},"Delete list"))};var K=function(e,t){Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},q=function(e){var t=e.provided,a=e.innerRef,c=e.taskList,s=e.taskListIdx,l=e.onListUpdated,i=e.onRemoveList,o=Object(n.useState)(Object(J.a)({},c)),u=Object(v.a)(o,2),d=u[0],m=u[1],f=Object(n.useState)(null),b=Object(v.a)(f,2),p=b[0],E=b[1],O=Object(n.useState)(!1),k=Object(v.a)(O,2),j=k[0],h=k[1],g=Object(n.useState)(!1),y=Object(v.a)(g,2),S=y[0],x=y[1],w=Object(n.useRef)(null);Object(n.useEffect)((function(){m(Object(J.a)({},c))}),[c]);var C=function(){x(!1);var e=N.getEmptyTask();E(e),h(!0)},I=function(e){E(Object(J.a)(Object(J.a)({},p),{},Object(B.a)({},e.target.name,e.target.value)))},D=function(e){l(e||d),h(!1),E(null)},L=function(){if(p&&p.title){var e=JSON.parse(JSON.stringify(d));e.tasks.push(p),D(e)}h(!1),E(null)};K(w,(function(){j&&(console.log("outside"),L())}));var A=function(){E(null),h(!1)};return d&&r.a.createElement("div",Object.assign({className:"list-wrapper",ref:a},t.draggableProps),r.a.createElement("div",{className:"list"},r.a.createElement("div",Object.assign({className:"list-header"},t.dragHandleProps),d.title&&r.a.createElement(F,{name:"title",type:"h3",text:d.title,onChange:function(e){m(Object(J.a)(Object(J.a)({},d),{},Object(B.a)({},e.target.name,e.target.value)))},onInputBlur:D}),r.a.createElement("button",{className:"list-menu-btn clear-btn",onClick:function(){return x(!S)}},r.a.createElement(M.a,null)),S&&!j&&r.a.createElement(H,{onRemoveList:function(){i(c.id)},onAddTask:C,onCloseMenu:function(){return x(!1)}})),r.a.createElement(T.c,{type:"task",droppableId:"".concat(s)},(function(e){return r.a.createElement("div",{className:"list-content u-fancy-scrollbar",ref:e.innerRef},r.a.createElement("div",{className:"list-content-scrollable"},c.tasks.map((function(e,t){return r.a.createElement(_,{key:e.id,task:e,index:t})})),e.placeholder,j&&p&&r.a.createElement("div",{className:"add-task-wrapper ",ref:w},r.a.createElement(F,{name:"title",type:"p",text:p.title,onChange:I,isFocused:j,onSubmit:L}),r.a.createElement("div",{className:"add-task-controls"},r.a.createElement("button",{onClick:L,className:"submit-btn"},"Add task"),r.a.createElement("button",{onClick:A,className:"clear-btn icon-lg"},r.a.createElement(P.b,null))))))})),r.a.createElement("div",{className:"list-footer"},!j&&!p&&r.a.createElement("a",{className:"clear-btn list-footer-btn",onClick:C},r.a.createElement("span",{className:"icon-lg add-icon"},r.a.createElement(P.a,null))," ",r.a.createElement("span",null,"Add new task")))))},V=a(73),X=function(e){var t=e.task,a=e.labels,c=e.onCloseModal,s=e.onTaskUpdated,l=e.labelsUpdated,i=Object(n.useState)(null),o=Object(v.a)(i,2),u=o[0],d=o[1],f=Object(n.useState)(!1),b=Object(v.a)(f,2),p=b[0],E=b[1],O=function(e){d(Object(J.a)(Object(J.a)({},u),{},Object(B.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(m.a)(a),t=e.findIndex((function(e){return e.id===u.id}));e.splice(t,1,u),l(Object(m.a)(e),u),E(!1)};Object(n.useEffect)((function(){if(!p&&u){console.log("yesbabe");var e=JSON.parse(JSON.stringify(t)),a=e.labels.findIndex((function(e){return e.id===u.id}));-1!==a&&(console.log("yes"),e.labels.splice(a,1,u),s(e))}}),[p]);return r.a.createElement("div",{className:"pop-up labels"},r.a.createElement("div",{className:"pop-up-header"},r.a.createElement("span",{className:"pop-up-title"},"Labels"),r.a.createElement("button",{className:"pop-up-close-btn clear-btn",onClick:c},r.a.createElement(P.b,null))),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{className:"label-container",key:e.id},r.a.createElement("span",{className:"card-label",style:{backgroundColor:e.color},onClick:function(){return function(e){var a=JSON.parse(JSON.stringify(t));if(a.labels.find((function(t){return t.id===e.id}))){var n=a.labels.findIndex((function(t){return t.id===e.id}));a.labels.splice(n,1)}else a.labels.push(e);s(a)}(e)}},r.a.createElement("span",{className:"label-title"},e.title),function(e){if(u)return e.id===u.id}(e)&&p&&r.a.createElement(F,{type:"p",name:"title",isFocused:p,text:e.title,onChange:O,onInputBlur:k}),r.a.createElement("span",{className:"label-selected"})),r.a.createElement("a",{href:"#",onClick:function(){return function(e){d(Object(J.a)({},e)),E(!0)}(e)}},r.a.createElement(V.a,null)))}))))},z=a(42),G=a.n(z),$=a(76),Q=(a(138),function(e){var t=e.task,a=e.onTaskUpdated,c=e.onCloseModal,s=e.onAddActivity,l=Object(n.useState)(new Date),i=Object(v.a)(l,2),u=i[0],d=i[1],m=Object(n.useState)(!1),f=Object(v.a)(m,2),E=f[0],O=f[1],k=Object(o.h)().url;Object(n.useEffect)((function(){if(t.dueDate){var e=new Date(t.dueDate);d(e)}}),[]),Object(n.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=5;break}return a=G()(new Date(t.dueDate)).format("MMM Do YY"),n=N.newActivity("set this card to be due at ".concat(a),'set <a href="'.concat(k,'">').concat(t.title,"</a> to be due at ").concat(a),t.id),e.next=5,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]);var j=function(){var e=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=JSON.parse(JSON.stringify(t))).dueDate=u,e.next=4,a(n);case 4:O(!0),c();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"pop-up"},r.a.createElement("div",{className:"pop-up-header"},r.a.createElement("span",{className:"pop-up-title"},"Date"),r.a.createElement("button",{onClick:c,className:"pop-up-close-btn clear-btn icon-lg"},r.a.createElement(P.b,null))),r.a.createElement($.a,{onChange:function(e){d(e)},value:u}),r.a.createElement("button",{onClick:j,className:"submit-btn add-date-btn"},"Save"))}),Z=function(e){var t=e.task,a=e.onTaskUpdated,c=e.onCloseModal,s=Object(n.useState)({}),l=Object(v.a)(s,2),i=l[0],o=l[1];Object(n.useEffect)((function(){console.log("ONCE");var e=N.getEmptyCheckList();o(Object(J.a)({},e))}),[]);var u=function(){var e=JSON.parse(JSON.stringify(t)),n=Object(J.a)({},i);e.checklists.push(n),a(e),c()};return r.a.createElement("div",{className:"pop-up"},r.a.createElement("div",{className:"pop-up-header"},r.a.createElement("span",{className:"pop-up-title"},"Add checklist"),r.a.createElement("button",{className:"pop-up-close-btn clear-btn"})),r.a.createElement(F,{isFocused:!0,onChange:function(e){o(Object(J.a)(Object(J.a)({},i),{},Object(B.a)({},e.target.name,e.target.value)))},onSubmit:u,type:"p",name:"title"}),r.a.createElement("button",{onClick:u,className:"submit-btn add-date-btn"},"Save"))},ee=function(e){var t=e.onCloseModal,a=(e.onTaskUpdated,Object(n.useState)(["#61bd4f","#f2d600","#ff9f1a","#c377e0","#eb5a46","#055a8c","#344563","#00c2e0","#ff78cb"])),c=Object(v.a)(a,2),s=c[0];c[1];return r.a.createElement("div",{className:"pop-up"},r.a.createElement("div",{className:"pop-up-header"},r.a.createElement("span",{className:"pop-up-title"},"Cover"),r.a.createElement("button",{className:"pop-up-close-btn clear-btn",onClick:t},r.a.createElement(P.b,null))),r.a.createElement("span",{className:"pop-up-title"},"Colors"),r.a.createElement("div",{className:"cover-colors"},s.map((function(e,t){return r.a.createElement("span",{className:"cover-color",key:t,style:{backgroundColor:e}})}))))},te=function(e){var t=e.task,a=e.labels,c=e.onUpdateTask,s=e.onLabelsUpdated,l=e.onAddActivity,i=Object(n.useRef)(null),o=Object(n.useState)(!1),u=Object(v.a)(o,2),d=(u[0],u[1]),m=Object(n.useState)(""),f=Object(v.a)(m,2),b=f[0],p=f[1],E=Object(n.useState)({isLabelActive:!1,isMemberActive:!1,isChecklistActive:!1,isDueDateActive:!1,isCoverActive:!1}),O=Object(v.a)(E,2),k=O[0],j=O[1];K(i,(function(){g()}));var h=function(e){j((function(t){return Object(J.a)(Object(J.a)({},t),{},Object(B.a)({},e,!t[e]))})),p(e),d((function(e){return!e}))},g=function(){j((function(e){return Object(J.a)(Object(J.a)({},e),{},Object(B.a)({},b,!e[b]))})),d(!1),p("")};return r.a.createElement("div",{className:"modal-sidebar",ref:i},r.a.createElement("button",{className:"modal-btn",onClick:function(){return h("isLabelActive")}},"Labels"),k.isLabelActive&&r.a.createElement(X,{task:t,labels:a,onCloseModal:g,onTaskUpdated:c,labelsUpdated:s}),r.a.createElement("button",{className:"modal-btn"},"Members"),r.a.createElement("button",{className:"modal-btn",onClick:function(){return h("isChecklistActive")}},"Checklist"),k.isChecklistActive&&r.a.createElement(Z,{task:t,onTaskUpdated:c,onCloseModal:g}),r.a.createElement("button",{className:"modal-btn",onClick:function(){return h("isDueDateActive")}},"Due date"),k.isDueDateActive&&r.a.createElement(Q,{task:t,onTaskUpdated:c,onAddActivity:l,onCloseModal:g}),r.a.createElement("button",{className:"modal-btn",onClick:function(){return h("isCoverActive")}},"Cover"),k.isCoverActive&&r.a.createElement(ee,{onCloseModal:g,onTaskUpdated:c}),"            ")},ae=function(e){var t=e.item,a=e.onSubmit,c=e.onRemoveItem,s=Object(n.useState)(Object(J.a)({},t)),l=Object(v.a)(s,2),i=l[0],o=l[1],u=Object(n.useState)(!1),d=Object(v.a)(u,2),m=d[0],f=d[1],b=Object(n.useRef)(null),p=Object(n.useRef)(!0);K(b,(function(){m&&(f(!1),console.log("yes"))})),Object(n.useEffect)((function(){p.current?p.current=!1:k()}),[i.isDone]);var E=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;o(Object(J.a)(Object(J.a)({},i),{},Object(B.a)({},n,a)))},O=function(){f(!1)},k=function(){i.title?(f(!1),a(Object(J.a)({},i))):f(!0)};return r.a.createElement("div",{ref:b,className:"checklist-item"},r.a.createElement("div",{className:"checklist-item-edit space-between "+(i.isDone?"done":"")},r.a.createElement("div",{className:"flex align-center"},i&&r.a.createElement("input",{type:"checkbox",name:"isDone",checked:i.isDone,onChange:E}),r.a.createElement("div",{onClick:function(){return f(!0)}},r.a.createElement(F,{text:t.title,onChange:E,onSubmit:k,onEscape:O,blurInput:!m,isFocused:m,type:"p",name:"title"}))),r.a.createElement("button",{className:"remove-item-btn clear-btn",onClick:function(){c(i.id)}},r.a.createElement(M.b,null))),m&&r.a.createElement("div",{className:"flex"},r.a.createElement("button",null,"Save"),r.a.createElement("button",null,"sds"),r.a.createElement("div",{className:"spacer",onClick:O})))},ne=a(74),re=(a(139),function(e){var t=e.task,a=e.checklist,c=e.onUpdateTask,s=Object(n.useState)(null),l=Object(v.a)(s,2),i=l[0],o=l[1],u=Object(n.useState)(null),d=Object(v.a)(u,2),m=d[0],f=d[1],b=Object(n.useState)(!1),p=Object(v.a)(b,2),E=p[0],O=p[1],k=Object(n.useRef)(null);Object(n.useEffect)((function(){a.listItems.length||j()}),[a]),Object(n.useEffect)((function(){var e=a.listItems.reduce((function(e,t){return t.isDone&&e++,e}),0),t=Math.round(100*e/a.listItems.length);f(t)}),[a]);var j=function(){var e=N.getEmptyListItem();o(Object(J.a)({},e)),O(!0)},h=function(){O(!1),o(null)};K(k,(function(){E&&(O(!1),o(null))}));var g=function(e){var t=Object(J.a)({},a),n=t.listItems.findIndex((function(t){return t.id===e}));-1!==n&&t.listItems.splice(n,1),S(t)},y=function(e){var t=Object(J.a)({},a);if(e){var n=t.listItems.findIndex((function(t){return t.id===e.id}));-1!==n&&(t.listItems.splice(n,1,e),S(t))}else t.listItems.push(i),S(t),j()},S=function(e){var a=JSON.parse(JSON.stringify(t)),n=a.checklists.findIndex((function(t){return t.id===e.id}));a.checklists.splice(n,1,e),c(a),O(!1),o(null)};return r.a.createElement("div",null,r.a.createElement("h3",null,a.title),a.listItems.length>0&&r.a.createElement(ne.Progress,{percent:m}),a&&a.listItems.map((function(e){return r.a.createElement(ae,{key:e.id,onSubmit:y,onRemoveItem:g,item:e})})),i&&E&&r.a.createElement("div",{ref:k},r.a.createElement(F,{onChange:function(e){o(Object(J.a)(Object(J.a)({},i),{},Object(B.a)({},e.target.name,e.target.value)))},onSubmit:y,onEscape:h,isFocused:E,type:"p",name:"title"}),r.a.createElement("div",{className:"flex"},r.a.createElement("button",null,"Save"),r.a.createElement("button",{onClick:h},"Close"),r.a.createElement("div",{className:"spacer",onClick:h}))),!E&&r.a.createElement("button",{className:"modal-btn",onClick:j},"Add an item"))}),ce=function(e){var t=e.taskId,a=void 0===t?null:t,n=Object(l.d)((function(e){return a?e.board.currBoard.activities.filter((function(e){return e.taskId===a})):e.board.currBoard.activities}));return r.a.createElement("div",null,r.a.createElement("h1",null,"activity"),n.length>0&&n.map((function(e){return r.a.createElement("div",{key:e.id},a?r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.cardTxt}}):r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.boardTxt}}))})))},se=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.board.currTask})),a=Object(l.d)((function(e){return e.board.currBoard})),c=Object(n.useState)(!0),s=Object(v.a)(c,2),i=s[0],u=(s[1],Object(n.useState)(null)),d=Object(v.a)(u,2),m=d[0],f=d[1],E=Object(o.g)().taskId,O=Object(o.f)(),k=Object(n.useRef)(null);Object(n.useEffect)((function(){(function(){var t=Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(L(E));case 2:t.sent||O.push("/board/".concat(a._id));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){t&&f(Object(J.a)({},t))}),[t]);K(k,(function(){O.push("/board/".concat(a._id))}));var j=function(e){f(Object(J.a)(Object(J.a)({},m),{},Object(B.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,g(Object(J.a)({},t));case 3:e.next=6;break;case 5:g(Object(J.a)({},m));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(A(n)),(r=JSON.parse(JSON.stringify(a))).taskLists.forEach((function(e){var t=e.tasks.findIndex((function(e){return e.id===n.id}));-1!==t&&e.tasks.splice(t,1,n)})),t.next=5,e(D(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=JSON.parse(JSON.stringify(a))).activities.unshift(n),t.next=4,e(D(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"cover "+(i?"active":"")},m&&t&&r.a.createElement("div",{className:"task-modal "+(i?"active":""),onClick:function(e){return e.stopPropagation()},ref:k},r.a.createElement("div",{className:"left-side"},r.a.createElement("div",{className:"modal-module"},r.a.createElement("div",{className:"task-header"},r.a.createElement(F,{type:"h3",name:"title",text:m.title,onChange:j,onInputBlur:h}))),r.a.createElement("div",{className:"modal-module"},r.a.createElement("div",{className:"task-labels-date"},r.a.createElement("div",{className:"task-labels-list"},r.a.createElement("h3",null,"Labels"),m.labels&&r.a.createElement(R,{labels:m.labels})),m.dueDate&&r.a.createElement("div",{className:"task-due-date"},r.a.createElement("h3",null,"Due date"),r.a.createElement(U.a,{calendar:{lastDay:"[Yesterday ] ",sameDay:"[Today ] ",nextDay:"[Tomorrow ] ",lastWeek:"DD/MM/YYYY",nextWeek:"DD/MM/YYYY",sameElse:"DD/MM/YYYY"},date:m.dueDate})))),r.a.createElement("div",{className:"modal-module"},r.a.createElement("div",{className:"task-description"},r.a.createElement("i",{className:"far fa-file-alt"}),r.a.createElement("h3",null,"Description")),r.a.createElement(F,{type:"p",name:"description",text:m.description,onChange:j,onInputBlur:h,isWide:!0})),r.a.createElement("div",{className:"modal-module"},m.checklists&&m.checklists.map((function(e){return r.a.createElement(re,{checklist:e,key:e.id,task:m,onUpdateTask:h})}))),r.a.createElement("div",{className:"modal-module"},r.a.createElement("h3",null,"Activity"),r.a.createElement(ce,{taskId:m.id}))),r.a.createElement("div",{className:"right-side"},r.a.createElement("h3",null,"Add to card"),a&&r.a.createElement(te,{task:m,labels:a.labels,onUpdateTask:h,onLabelsUpdated:function(t,n){var r=JSON.parse(JSON.stringify(a));r.labels=t,r.taskLists.forEach((function(e){e.tasks.forEach((function(e){var t=e.labels.find((function(e){return e.id===n.id}));t&&(t.title=n.title)}))})),e(D(r))},onAddActivity:y}))))},le=function(e){var t=e.board,a=e.onBoardUpdated,c=Object(n.useState)(null),s=Object(v.a)(c,2),l=s[0],i=s[1],o=Object(n.useRef)(null),u=function(){var e=JSON.parse(JSON.stringify(t));e.taskLists.push(l),a(e),i(null)};return K(o,(function(){i(null)})),r.a.createElement("div",{className:"list-wrapper "},l?r.a.createElement("div",{className:"list add-list",ref:o},r.a.createElement(F,{isFocused:!0,onChange:function(e){i(Object(J.a)(Object(J.a)({},l),{},Object(B.a)({},e.target.name,e.target.value)))},onSubmit:u,name:"title",type:"p"}),r.a.createElement("div",{className:"add-list-controls"},r.a.createElement("button",{className:"submit-btn",onClick:u},"Add List"),r.a.createElement("button",{onClick:function(){return i(null)},className:"clear-btn icon-lg"},r.a.createElement(P.b,null)))):r.a.createElement("button",{className:"modal-btn",onClick:function(){var e=N.getEmptyList();i(e)}},"Add another list "))};var ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(l.c)(),r=Object(n.useState)(!1),c=Object(v.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(!1),u=Object(v.a)(o,2),d=u[0],f=u[1],E=Object(n.useCallback)((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];function c(){return s.apply(this,arguments)}function s(){return(s=Object(p.a)(b.a.mark((function t(){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.prev=1,t.next=4,a(e.apply(void 0,n));case 4:return r=t.sent,f(!1),i(!1),t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(1),i(!1),f(!0),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}c()}),[e].concat(Object(m.a)(t)));return[E,s,d]},oe=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.board.currBoard})),a=ie((function(){return e=k,function(){var t=Object(p.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.getById(e);case 3:n=t.sent,a({type:"SET_BOARD",currBoard:n}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.warn("cannot save board",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();var e})),c=Object(v.a)(a,3),s=c[0],i=c[1],u=c[2],d=Object(n.useRef)(!0),f=Object(n.useState)(null),E=Object(v.a)(f,2),O=(E[0],E[1]),k=Object(o.g)().boardId,j=Object(o.h)().path,h=Object(o.f)();Object(n.useEffect)((function(){s()}),[]),Object(n.useEffect)((function(){d.current&&t&&(console.log("board.",t._id),I.setup(),I.emit("board topic",t._id),I.on("update board",x),d.current=!1)}),[t]),Object(n.useEffect)((function(){return function(){I.off("update board",x),I.terminate()}}),[]),Object(n.useEffect)((function(){u&&h.push("/boards")}),[u]);var g=function(){var a=Object(p.a)(b.a.mark((function a(n){var r,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=JSON.parse(JSON.stringify(t)),c=r.taskLists.findIndex((function(e){return e.id===n.id})),r.taskLists.splice(c,1,n),a.next=5,e(D(r));case 5:console.log("adterupdatelist");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),S=function(){var t=Object(p.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(D(a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){e(function(e){return function(t){t({type:"SET_BOARD",currBoard:e})}}(t))},w=function(e){var a=JSON.parse(JSON.stringify(t)),n=a.taskLists.findIndex((function(t){return t.id===e}));a.taskLists.splice(n,1),S(a)},C=function(e){var t="[".concat("data-rbd-draggable-id","='").concat(e,"']");return document.querySelector(t)};return i?r.a.createElement("div",null,"Loading..."):r.a.createElement("section",{className:"board-details"},t&&r.a.createElement(T.a,{onDragStart:function(e){if("lists"===e.type){var t=C(e.draggableId);if(t){var a=t.children[0],n=a.clientHeight,r=a.clientWidth,c=e.source.index,s=Object(m.a)(t.parentNode.children).slice(0,c).reduce((function(e,t){var a=t.currentStyle||window.getComputedStyle(t),n=parseFloat(a.marginLeft);parseFloat(a.marginRight);return e+t.clientWidth+n+n}),0);O({clientHeight:n,clientWidth:r,clientX:s})}}},onDragUpdate:function(e){if("lists"===e.type&&e.destination){var t=C(e.draggableId);if(t){var a=t.children[0],n=a.clientHeight,r=a.clientWidth,c=e.destination.index,s=e.source.index,l=Object(m.a)(t.parentNode.children),i=l[s];l.splice(s,1);var o=[].concat(Object(m.a)(l.slice(0,c)),[i],Object(m.a)(l.slice(c+1))).slice(0,c).reduce((function(e,t){var a=t.currentStyle||window.getComputedStyle(t),n=parseFloat(a.marginLeft);return e+t.clientWidth+n+n}),0);O({clientHeight:n,clientWidth:r,clientX:o})}}},onDragEnd:function(e){if(e.source.index!==e.destination.index||e.source.droppableId!==e.destination.droppableId){O(null);var a=e.source,n=e.destination;if(n){var r=Object(m.a)(t.taskLists),c=JSON.parse(JSON.stringify(t));if(a.droppableId===n.droppableId&&"board"===a.droppableId){var s=y.reorder(r,a.index,n.index);c.taskLists=s}else{var l=+a.droppableId,i=+n.droppableId;if(l===i){var o=y.reorder(r[l].tasks,a.index,n.index);c.taskLists[l].tasks=o}else{var u=y.move(r[l].tasks,r[i].tasks,a,n);c.taskLists[l].tasks=u[l],c.taskLists[i].tasks=u[i]}}S(c)}}}},r.a.createElement(T.c,{droppableId:"board",type:"lists",direction:"horizontal"},(function(e,a){return r.a.createElement("div",Object.assign({className:"list-container",ref:e.innerRef},e.droppableProps),t.taskLists&&t.taskLists.map((function(e,t){return r.a.createElement(T.b,{key:e.id,draggableId:e.id,index:t,type:"lists"},(function(a,n){return r.a.createElement(q,{taskListIdx:t,taskList:e,onRemoveList:w,onListUpdated:g,innerRef:a.innerRef,provided:a})}))})),e.placeholder,r.a.createElement(le,{board:t,onBoardUpdated:S}))}))),t&&r.a.createElement(o.a,{exact:!0,path:"".concat(j,"/:taskId"),component:se}))},ue=function(){var e=Object(l.d)((function(e){return e.board.boards})),t=Object(l.c)();return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.query();case 2:(a=e.sent)&&t({type:"SET_BOARDS",boards:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:console.log("adsasd");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Boards new"),e&&e.length&&e.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(i.b,{to:"board/".concat(e._id)},e._id))})))};var de=function(){return r.a.createElement("main",null,r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/board/:boardId",component:oe}),r.a.createElement(o.a,{path:"/boards",component:ue}),r.a.createElement(o.a,{path:"/",component:u}))))};a(140),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(18),fe=a(75),be={boards:null,currBoard:null,currTask:null,onRemove:!1,onAdd:!1},pe=Object(me.e)(Object(me.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOARDS":return Object(J.a)(Object(J.a)({},e),{},{boards:JSON.parse(JSON.stringify(t.boards))});case"SET_BOARD":return Object(J.a)(Object(J.a)({},e),{},{currBoard:JSON.parse(JSON.stringify(t.currBoard))});case"SET_TASK":var a;return e.currBoard.taskLists.forEach((function(e){e.tasks.find((function(e){e.id===t.id&&(a=e)}))})),Object(J.a)(Object(J.a)({},e),{},{currTask:a?Object(J.a)({},a):null});case"UPDATE_TASK":return Object(J.a)(Object(J.a)({},e),{},{currTask:Object(J.a)({},t.currTask)});default:return e}}}),Object(me.a)(fe.a));s.a.render(r.a.createElement(l.a,{store:pe},r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(141)}},[[77,1,2]]]);
//# sourceMappingURL=main.bdba25cb.chunk.js.map