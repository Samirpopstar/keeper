(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),u=n(8),o=n(2);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var f=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},p=n(4),E=n(5);var d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),l=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(p.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",onChange:u,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:u,value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c({title:"",content:""}),t.preventDefault()}},"Add")))};var s=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),p=Object(o.a)(c,2),E=p[0],s=p[1];function h(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(a.useEffect)((function(){fetch("https://official-joke-api.appspot.com/jokes/random").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("h1",null,E.setup),r.a.createElement("h1",null,E.punchline),r.a.createElement(d,{onAdd:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,onDelete:h})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0682f8b9.chunk.js.map