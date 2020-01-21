(function(t){function e(e){for(var n,s,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},r=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d8ee58e0"}[t]+".js"}function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Vue-TodoList/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"00c2":function(t,e,o){"use strict";var n=o("8e84"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container",attrs:{id:"app"}},[o("header",{staticClass:"header"},[t._v("Vuex Todo-List")]),o("div",{staticClass:"input-group input-height"},[t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control input-height",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-color theme-text",attrs:{type:"button"},on:{click:t.addTodo}},[o("i",{staticClass:"fas fa-plus-square"}),t._v(" 新增 ")])])]),o("div",{staticClass:"card text-center"},[o("div",{staticClass:"card-header theme-bgc"},[o("ul",{staticClass:"nav nav-tabs card-header-tabs"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link theme-text",class:{active:"all"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="all"}}},[t._v("全部")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link theme-text",class:{active:"undone"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="undone"}}},[t._v("進行中")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link theme-text",class:{active:"done"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="done"}}},[t._v("已完成")])])])]),o("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.filteredTodos,(function(e,n){return o("li",{key:n,staticClass:"list-group-item",on:{dblclick:function(o){return t.editTodo(e)}}},[e.id!==t.cacheTodo.id?o("div",{staticClass:"d-flex"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:[function(o){var n=e.completed,i=o.target,r=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);i.checked?a<0&&t.$set(e,"completed",n.concat([s])):a>-1&&t.$set(e,"completed",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(e,"completed",r)},function(e){return t.saveList()}]}}),o("label",{staticClass:"form-check-label",class:{completed:e.completed},attrs:{for:e.id}},[t._v(t._s(e.title))])]),o("button",{staticClass:"close ml-auto",attrs:{type:"button","aria-label":"Close"},on:{click:function(o){return t.removeTodo(e)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),e.id===t.cacheTodo.id?o("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTitle,expression:"cacheTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cacheTitle},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit()},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doneEdit(e)}],input:function(e){e.target.composing||(t.cacheTitle=e.target.value)}}}):t._e()])})),0),o("div",{staticClass:"card-footer d-flex justify-content-between theme-bgc"},[o("span",[t._v(" 還有 "),o("span",[t._v(t._s(t.undoneNum))]),t._v(" 筆任務未完成 ")]),o("a",{staticClass:"clear-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAll()}}},[o("i",{staticClass:"fas fa-trash-alt"}),t._v(" 清除所有任務 ")])])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text theme-bgc",attrs:{id:"basic-addon1"}},[o("i",{staticClass:"far fa-sticky-note"}),o("span",{staticClass:"ml-1"},[t._v("待辦事項")])])])}],s=o("5886"),a=o("2c33"),c=o.n(a);const l={set(t,e){localStorage.setItem(t,JSON.stringify(e))},get(t){return JSON.parse(localStorage.getItem(t))},remove(t){localStorage.removeItem(t)}};var u=l,d=o("2f62"),p={name:"app",data(){return{}},methods:{saveList:function(){u.set("todoList",this.todoList)},clearAll(){const t=this;console.log(this),t.$swal({title:"確認刪除?",text:"刪除後檔案將無法恢復!",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"是的，請刪除!",cancelButtonText:"不，請不要刪除!"}).then(e=>{e.value?(c.a.fire("已刪除!","所有紀錄已清除。","success"),t.todoList=[]):e.dismiss===c.a.DismissReason.cancel&&c.a.fire("已取消！","你的資料依然保存 :)","error")}),u.set("todoList",this.todoList)},...Object(d["b"])(["addTodo","removeTodo","editTodo","cancelEdit","doneEdit"])},computed:{newTodo:{get(){return this.$store.state.newTodo},set(t){this.$store.commit("UPDATENEWTODO",t)}},todoList:{get(){return this.$store.state.todoList},set(t){this.$store.commit("UPDATETODOLIST",t)}},visibility:{get(){return this.$store.state.visibility},set(t){this.$store.commit("UPDATEVISIBILITY",t)}},cacheTitle:{get(){return this.$store.state.cacheTitle},set(t){this.$store.commit("UPDATECATCHETITLE",t)}},...Object(d["c"])(["cacheTodo","filteredTodos","undoneNum"])},mounted(){}},v=p,f=(o("5c0b"),o("2877")),m=Object(f["a"])(v,i,r,!1,null,null,null),h=m.exports,T=o("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._m(0),o("h3",[t._v("Installed CLI Plugins")]),o("ul"),o("h3",[t._v("Essential Links")]),t._m(1),o("h3",[t._v("Ecosystem")]),t._m(2)])},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),t._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],C={name:"HelloWorld",props:{msg:String}},E=C,k=(o("00c2"),Object(f["a"])(E,_,y,!1,null,"7a4fff34",null)),O=k.exports,w={name:"home",components:{HelloWorld:O}},D=w,x=Object(f["a"])(D,g,b,!1,null,null,null),L=x.exports;n["a"].use(T["a"]);const j=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],I=new T["a"]({mode:"history",base:"/Vue-TodoList/",routes:j});var A=I;n["a"].use(d["a"]);var P=new d["a"].Store({state:{newTodo:"",todoList:[{id:"1",title:"test 1",completed:!1},{id:"2",title:"test 2",completed:!0}],cacheTodo:{},cacheTitle:"",visibility:"all"},actions:{addTodo(t,e){t.commit("ADDTODO",e)},removeTodo(t,e){t.commit("REMOVETODO",e)},editTodo(t,e){t.commit("EDITTODO",e)},cancelEdit(t,e){t.commit("CANCELEDIT",e)},doneEdit:function(t,e){t.commit("DONEEDIT",e)}},mutations:{UPDATENEWTODO(t,e){t.newTodo=e},UPDATETODOLIST(t,e){t.todoList=e},UPDATEVISIBILITY(t,e){t.visibility=e},UPDATECATCHETITLE(t,e){t.cacheTitle=e},ADDTODO(t){const e=t.newTodo.trim(),o=Math.floor(Date.now());e&&(t.todoList.push({id:o,title:e,completed:!1}),t.newTodo="")},REMOVETODO(t,e){const o=t.todoList.findIndex((function(t,o){return e.id===t.id}));t.todoList.splice(o,1)},EDITTODO(t,e){console.log(e),t.cacheTodo=e,t.cacheTitle=e.title},CANCELEDIT(t){t.cacheTodo={}},DONEEDIT(t,e){e.title=t.cacheTitle,t.cacheTitle="",t.cacheTodo={}}},getters:{newTodo(t){return t.newTodo},todoList:t=>t.todoList,cacheTodo:t=>t.cacheTodo,cacheTitle:t=>t.cacheTitle,visibility:t=>t.visibility,filteredTodos(t){if("all"==t.visibility)return t.todoList;if("undone"==t.visibility){const e=[];return t.todoList.forEach((function(t){t.completed||e.push(t)})),e}if("done"==t.visibility){const e=[];return t.todoList.forEach((function(t){t.completed&&e.push(t)})),e}return[]},undoneNum(t){return t.todoList.filter((function(t){return!t.completed})).length}}});n["a"].use(s["a"]),n["a"].use(d["a"]),n["a"].config.productionTip=!1,new n["a"]({router:A,store:P,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),i=o.n(n);i.a},"8e84":function(t,e,o){},"9c0c":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.941b8457.js.map