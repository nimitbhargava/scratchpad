(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"0ae2":function(t,e,n){"use strict";var s=n("ee4b"),a=n.n(s);a.a},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5 pt-5",attrs:{id:"app"}},[n("Navbar"),t._l(t.alerts,function(t){return n("Alert",{key:t.id,attrs:{alert:t}})}),n("router-view")],2)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alert.error?"text-left alert alert-danger":"text-left alert alert-success"},[t._v("\n  "+t._s(t.alert.message)+"\n")])},i=[],c={name:"Alert",props:{alert:{type:Object,required:!0}}},l=c,u=n("2877"),d=Object(u["a"])(l,o,i,!1,null,"5700e63d",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"pt-3 pb-3 mb-3 navbar fixed-top navbar-expand-lg navbar-light bg-light"},[n("ul",{staticClass:"navbar-nav"},[n("Timer"),n("li",{staticClass:"nav-item"},[n("StorageState")],1)],1)])])},_=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 "},[t.timeron?t._e():n("a",{staticClass:"mr-2",attrs:{href:"javascript:void(0)"},on:{click:t.start_timer}},[n("font-awesome-icon",{attrs:{icon:"play"}})],1),t.timeron?n("a",{staticClass:"mr-2",attrs:{href:"javascript:void(0)"},on:{click:t.stop_timer}},[n("font-awesome-icon",{attrs:{icon:"stop"}})],1):t._e(),n("span",{staticClass:"mr-2"},[t._v(t._s(t._f("toHumanDate")(t.timer)))]),!t.timeron&t.timer>0?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.timerentry,expression:"timerentry"}],staticClass:"p-1 border-0 mr-2",attrs:{type:"text",placeholder:"(Enter to save)"},domProps:{value:t.timerentry},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save_timer_entry(e)},input:function(e){e.target.composing||(t.timerentry=e.target.value)}}}),n("a",{staticClass:"mr-2 text-success",attrs:{href:"javascript:void(0)"},on:{click:t.save_timer_entry}},[t._v("Save")]),n("a",{staticClass:"mr-2 text-danger",attrs:{href:"javascript:void(0)"},on:{click:t.clear_timer_entry}},[t._v("Clear")])]):t._e()])},v=[],h=(n("6b54"),n("c1df")),b=n.n(h),j={name:"Timer",data:function(){return{timeron:!1,timer:0,intervalFunctionId:null,timerentry:""}},filters:{toHumanDate:function(t){var e=b.a.duration(t),n=e.hours(),s=e.minutes(),a=e.seconds();return"".concat(n<10?"0"+n:n,":").concat(s<10?"0"+s:s,":").concat(a<10?"0"+a:a)}},methods:{start_timer:function(){var t=this;this.timeron=!0;var e=b()(),n=setInterval(function(){t.timer=b()()-e,document.title=t.$options.filters.toHumanDate(t.timer)},1e3);this.intervalFunctionId=n.toString()},stop_timer:function(){this.timeron=!1,clearInterval(this.intervalFunctionId),document.title="Scratchy"},save_timer_entry:function(){this.$store.dispatch("add_timer",{id:Math.floor(1e5*Math.random()),note:this.timerentry,timer:this.$options.filters.toHumanDate(this.timer),created:b()()}),this.clear_timer_entry()},clear_timer_entry:function(){this.timer=0,this.timerentry="",this.intervalFunctionId=null}}},g=j,y=Object(u["a"])(g,p,v,!1,null,null,null),E=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(t._s(t.usedStorage)+" / 5000 Kb ")])},k=[],T=n("2f62"),x={name:"StorageState",computed:Object(T["b"])({usedStorage:function(t){return t.usedStorage}})},w=x,D=Object(u["a"])(w,O,k,!1,null,null,null),C=D.exports,S={name:"Navbar",components:{Timer:E,StorageState:C}},A=S,N=Object(u["a"])(A,m,_,!1,null,null,null),$=N.exports,z={name:"app",components:{Alert:f,Navbar:$},created:function(){var t=this;document.title="Scratchy";var e=JSON.parse(localStorage.getItem("state"));e&&this.$store.dispatch("update_state",e),setInterval(function(){localStorage.setItem("state",JSON.stringify(t.$store.state)),t.$store.dispatch("calculate_used_storage")},1e4)},computed:Object(T["b"])({alerts:function(t){return t.alerts}})},I=z,P=(n("034f"),Object(u["a"])(I,a,r,!1,null,null,null)),L=P.exports,M=n("5f5b"),R=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row ml-1 mr-1"},[n("div",{staticClass:"col"},[n("ul",{staticClass:"nav nav-tabs mb-4"},[n("li",{staticClass:"nav-item"},[n("a",{class:"t1"==t.tab?"nav-link active":"nav-link",attrs:{href:"javascript:void(0)",id:"t1"},on:{click:t.tabs}},[t._v("Things to do ("+t._s(t.all_todos_not_done_count)+")")])]),n("li",{staticClass:"nav-item"},[n("a",{class:"t2"==t.tab?"nav-link active":"nav-link",attrs:{href:"javascript:void(0)",id:"t2"},on:{click:t.tabs}},[t._v("My timers ("+t._s(t.timers.length)+")")])])]),"t1"==t.tab?n("div",t._l(t.columns,function(t){return n("Scratchpad",{key:t.id,attrs:{column:t}})}),1):n("div",[n("Timerspad")],1)])])])},U=[],G=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},[n("ul",{staticClass:"list-group scratch"},[0==t.notes_not_done.length&!t.showall?n("p",{staticClass:"text-center text-info"},[t._v("¯\\_(ツ)_/¯ Nothing here")]):t._e(),t.showall?n("div",t._l(t.column.notes,function(t){return n("NoteItem",{key:t.id,attrs:{note:t}})}),1):n("div",t._l(t.notes_not_done,function(t){return n("NoteItem",{key:t.id,attrs:{note:t}})}),1)]),n("textarea",{staticClass:"mt-4 mb-3 form-control bg-transparent",attrs:{id:"todo_text",type:"text",placeholder:"(Shift+Enter to save)",rows:"6"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?t.add_note(e,t.column):null}}}),n("p",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.add_note(!1,t.column)}}},[t._v("Add")]),t._v("   \n    "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.showallnotes}},[t._v(t._s(t.showall?"Hide done":"Show all ("+t.column.notes.length+")")+" ")])])])},F=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("li",{staticClass:"list-group-item mb-2"},[n("small",{staticClass:"spt font-italic"},[t._v(t._s(t._f("toHumanDate")(t.dnote.created)))]),n("small",{class:t.dnote.done?"pts badge badge-success":"pts badge badge-warning"},[t._v(t._s(t.dnote.done?"Done":""))]),t.note_has_active_alerts?n("span",t._l(t.dnote.alerts,function(e){return n("small",{key:e.time,staticClass:"badge badge-warning mr-2"},[t._v(t._s(e.time))])}),0):t._e(),n("small",{staticClass:"pts2"},[t._v("#"+t._s(t.dnote.id))]),n("p",{staticClass:"text-left mt-2 mr-5 pr-5"},[t._v(t._s(t.dnote.text))]),n("div",{staticClass:"text-left"},[n("span",{staticClass:"mr-2"},[n("a",{staticClass:"text-success",attrs:{href:"javascript:void(0)"},on:{click:t.toggle_done}},[t._v(t._s(t.dnote.done?"Undo":"Done"))])]),t.show_settings?n("span",{staticClass:"mr-2"},[t.note_has_active_alerts?n("a",{staticClass:"text-info",attrs:{href:"javascript:void(0)"},on:{click:t.delete_note_alerts}},[t._v("Delete Alerts")]):n("a",{staticClass:"text-info",attrs:{href:"javascript:void(0)"},on:{click:t.set_alert}},[t._v("Set Alert")])]):t._e(),t.setting_alert?n("input",{staticClass:"p-1 mr-2",attrs:{type:"text",placeholder:"hh:mm (Enter to save)"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_note_alert(e)}}}):t._e(),t.show_settings?n("span",{staticClass:"mr-2"},[n("a",{staticClass:"text-danger",attrs:{href:"javascript:void(0)"},on:{click:t.delete_note}},[t._v("Delete")])]):t._e(),n("span",[n("a",{staticClass:"text-muted",attrs:{href:"javascript:void(0)"},on:{click:t.toggle_settings}},[t._v(t._s(t.show_settings?"Cancel":"More"))])])])])])},V=[],B={name:"NoteItem",data:function(){return{show_settings:!1,setting_alert:!1,dnote:this.note}},props:{note:{type:Object,required:!0}},filters:{toHumanDate:function(t){return b()(t).calendar()}},methods:{set_alert:function(){this.setting_alert=!0},toggle_settings:function(){this.show_settings=!this.show_settings,this.setting_alert=!1},toggle_done:function(){this.$store.dispatch("toggle_done",this.dnote.id)},delete_note:function(){confirm("Delete note?")&&this.$store.dispatch("delete_note",this.dnote.id)},add_note_alert:function(t){this.$store.dispatch("add_note_alert",{noteid:this.dnote.id,time:t.target.value}),t.target.value="",this.toggle_settings()},delete_note_alerts:function(){this.$store.dispatch("delete_note_alerts",this.dnote.id),this.toggle_settings()}},computed:{note_has_active_alerts:function(){return void 0!=this.dnote.alerts&&this.dnote.alerts.filter(function(t){return!1===t.completed}).length>0}}},K=B,Q=(n("a4f7"),Object(u["a"])(K,J,V,!1,null,null,null)),W=Q.exports,X={name:"Scratchpad",props:{column:{type:Object,required:!0}},data:function(){return{showall:!1}},components:{NoteItem:W},methods:{showallnotes:function(){this.showall=!this.showall},add_note:function(t,e){var n;n=t?t.target.value:document.getElementById("todo_text").value;var s=e.id,a={id:Math.floor(1e5*Math.random()),text:n,done:!1,created:(new Date).toUTCString()};""!=n?(this.$store.dispatch("add_note",{columnid:s,note:a}),t?t.target.value="":document.getElementById("todo_text").value=""):alert("Type something.")}},computed:{notes_not_done:function(){return this.column.notes.filter(function(t){return 0==t.done})}}},Y=X,Z=(n("0ae2"),Object(u["a"])(Y,q,F,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list-group scratch"},[0==t.timers.length?n("p",{staticClass:"text-center text-info"},[t._v("¯\\_(ツ)_/¯ Nothing here")]):t._e(),t._l(t.timers,function(t){return n("TimeEntryItem",{key:t.id,attrs:{timer:t}})})],2)])},nt=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("li",{staticClass:"list-group-item mb-2"},[n("small",{staticClass:"spt font-italic"},[t._v(t._s(t._f("toHumanDate")(t.timer.created)))]),n("small",{staticClass:"pts2"},[t._v("#"+t._s(t.timer.id)+" ")]),n("p",{staticClass:"text-left mr-5"},[n("span",{staticClass:"badge-success badge mr-3"},[t._v(t._s(t.timer.timer))]),n("span",[t._v(t._s(t.timer.note))])]),n("div",{staticClass:"text-left"},[n("span",[n("a",{staticClass:"text-danger",attrs:{href:"javascript:void(0)"},on:{click:t.delete_timer}},[t._v("Delete")])])])])])},at=[],rt={name:"TimeEntryItem",props:{timer:{type:Object,required:!0}},filters:{toHumanDate:function(t){return b()(t).calendar()}},methods:{delete_timer:function(){confirm("Delete time entry?")&&this.$store.dispatch("delete_timer",this.timer.id)}}},ot=rt,it=Object(u["a"])(ot,st,at,!1,null,null,null),ct=it.exports,lt={name:"Timerspad",components:{TimeEntryItem:ct},computed:Object(T["b"])({timers:function(t){return t.timers}})},ut=lt,dt=Object(u["a"])(ut,et,nt,!1,null,null,null),ft=dt.exports;function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,s)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach(function(e){Object(G["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var pt={name:"Home",data:function(){return{tab:"t1"}},components:{Scratchpad:tt,Timerspad:ft},methods:{tabs:function(t){this.tab=t.target.id}},computed:_t({all_todos_not_done_count:function(){return this.$store.getters.all_todos_not_done_count}},Object(T["b"])({columns:function(t){return t.columns},timers:function(t){return t.timers}}))},vt=pt,ht=Object(u["a"])(vt,H,U,!1,null,null,null),bt=ht.exports;s["default"].use(R["a"]);var jt=new R["a"]({mode:"history",routes:[{path:"/",name:"home",component:bt},{path:"*",redirect:{name:"home"}}]});s["default"].use(T["a"]);var gt=new T["a"].Store({state:{timers:[],columns:[{id:1,title:"Things to do",notes:[]}],alerts:[],usedStorage:0},mutations:{UPDATE_STATE:function(t,e){t.columns=e.columns,t.timers=e.timers},ADD_NOTE:function(t,e){var n=t.columns,s=e.columnid,a=e.note,r=n.filter(function(t){return t.id===s})[0];r&&r.notes.push(a)},TOGGLE_DONE:function(t,e){var n=t.columns;n.forEach(function(t){t.notes.forEach(function(t){t.id===e&&(t.done=!t.done)})})},DELETE_NOTE:function(t,e){var n=t.columns;n.forEach(function(t){t.notes.forEach(function(n){if(n.id===e){var s=t.notes.indexOf(n);t.notes.splice(s,1)}})})},ADD_ALERT:function(t,e){var n=t.alerts;n.push(e)},REMOVE_ALERT:function(t,e){var n=t.alerts,s=n.filter(function(t){return t.id=e.id})[0];s&&n.splice(n.indexOf(s),1)},ADD_TIMER:function(t,e){var n=t.timers;n.push(e)},DELETE_TIMER:function(t,e){var n=t.timers,s=n.filter(function(t){return t.id===e})[0];s&&n.splice(n.indexOf(s),1)},ADD_NOTE_ALERT:function(t,e){var n=t.columns,s=e.noteid,a=e.alertobj;n.forEach(function(t){var e=t.notes.filter(function(t){return t.id===s})[0];e&&(e.alerts?e.alerts.push(a):(e["alerts"]=[],e.alerts.push(a)))})},DELETE_NOTE_ALERTS:function(t,e){var n=t.columns;n.forEach(function(t){var n=t.notes.filter(function(t){return t.id===e})[0];n&&n.alerts&&(n.alerts=[])})},UPDATE_STORAGE_USED:function(t,e){t.usedStorage=e}},actions:{add_note:function(t,e){var n=t.commit,s=e.columnid,a=e.note;n("ADD_NOTE",{columnid:s,note:a})},toggle_done:function(t,e){var n=t.commit;n("TOGGLE_DONE",e)},delete_note:function(t,e){var n=t.commit;n("DELETE_NOTE",e)},add_alert:function(t,e){var n=t.commit,s=e.message,a=e.error;a||(a=!1);var r={id:"".concat((new Date).getTime().toString()),message:s,error:a};n("ADD_ALERT",r),setTimeout(function(){n("REMOVE_ALERT",r)},4e3)},remove_alert:function(t,e){var n=t.commit;n("REMOVE_ALERT",e)},update_state:function(t,e){var n=t.commit;n("UPDATE_STATE",e)},add_timer:function(t,e){var n=t.commit,s=e.id,a=e.note,r=e.timer,o=e.created;n("ADD_TIMER",{id:s,note:a,timer:r,created:o})},delete_timer:function(t,e){var n=t.commit;n("DELETE_TIMER",e)},add_note_alert:function(t,e){var n=t.commit,s=e.noteid,a=e.time,r={time:a,completed:!1};n("ADD_NOTE_ALERT",{noteid:s,alertobj:r})},delete_note_alerts:function(t,e){var n=t.commit;n("DELETE_NOTE_ALERTS",e)},calculate_used_storage:function(t){var e,n,s=t.commit,a=0;for(n in localStorage)localStorage.hasOwnProperty(n)&&(e=2*(localStorage[n].length+n.length),a+=e);s("UPDATE_STORAGE_USED",(a/1024).toFixed(2))}},getters:{all_todos_not_done_count:function(t){var e=t.columns,n=0;return e.forEach(function(t){n+=t.notes.filter(function(t){return!1===t.done}).length}),n}}}),yt=gt,Et=n("2b27"),Ot=n.n(Et),kt=(n("f9e3"),n("2dd8"),n("ecee")),Tt=n("ad3d"),xt=n("c074");s["default"].component("font-awesome-icon",Tt["a"]),kt["c"].add(xt["b"],xt["a"],xt["c"]),s["default"].config.productionTip=!1,s["default"].config.devtools=!0,s["default"].use(Ot.a),s["default"].use(M["a"]),s["default"].use(n("2ead")),new s["default"]({router:jt,store:yt,render:function(t){return t(L)}}).$mount("#app")},"64a9":function(t,e,n){},"7a1f":function(t,e,n){},a4f7:function(t,e,n){"use strict";var s=n("7a1f"),a=n.n(s);a.a},ee4b:function(t,e,n){}});