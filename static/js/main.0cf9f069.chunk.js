(this.webpackJsonpmoduloose=this.webpackJsonpmoduloose||[]).push([[0],{33:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(2),r=n.n(a),o=n(15),i=n.n(o),s=n(12),d=(n(32),n(33),n(48)),l=n(20),u=n(22),j=n(21);j.a.initializeApp({apiKey:"AIzaSyDmZSo7o8WB-bsge5T_Rd9VJdODhA-wD2Y",authDomain:"my-firebase-1f789.firebaseapp.com",projectId:"my-firebase-1f789",messagingSenderId:"917517905132",appId:"1:917517905132:web:2cc22f398c1a2511a209c9",measurementId:"G-7N4N4SG1FZ"});var b=j.a.firestore(),p=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t=b.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),c};var m=function(){var e=p("/moduloose/Uw7nTXVOrY0nocrZDLWH/Modules"),t=p("moduloose/Uw7nTXVOrY0nocrZDLWH/Skills"),n=Object(a.useState)(null),r=Object(s.a)(n,2),o=r[0],i=r[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),b=j[0],m=j[1],O=Object(a.useState)(""),h=Object(s.a)(O,2),f=h[0],x=h[1],v=function(e){"viewer"===e.target.id?m(e.target.value):x(e.target.value)};return Object(c.jsx)("div",{id:"app",className:"App",children:Object(c.jsxs)("div",{id:"content-container",className:"row container-fluid",children:[Object(c.jsxs)("div",{id:"selector-wrapper",className:"col-5",children:[Object(c.jsx)("h1",{children:"Moduloose"}),t&&Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Toggle,{variant:"light",children:o?o.name:"Select Collection"}),Object(c.jsx)(d.a.Menu,{children:t.map((function(e){return Object(c.jsx)(d.a.Item,{id:e.name,onClick:function(){return i(e)},children:e.name})}))})]}),e&&o&&o.types.sort((function(e,t){var n=e.typeName.toLowerCase(),c=t.typeName.toLowerCase();return n<c?-1:n>c?1:0})).map((function(t){return Object(c.jsxs)(d.a,{id:t.typeName,className:"selector-dropdown",children:[Object(c.jsx)(d.a.Toggle,{variant:"dark",children:t.typeName}),Object(c.jsx)(d.a.Menu,{children:t.moduleIDs&&t.moduleIDs.map((function(t){var n=e.find((function(e){return e.id===t}));return Object(c.jsx)(d.a.Item,{id:t,onClick:function(){return m(n.content)},children:n&&n.title})}))})]})}))]}),Object(c.jsxs)("div",{id:"workspace-wrapper",className:"col-7",children:[Object(c.jsx)("textarea",{id:"viewer",value:b,onChange:v,placeholder:"Viewer"}),Object(c.jsx)(l.CopyToClipboard,{id:"copy-viewer",className:"btn btn-dark copy-button",text:b,children:Object(c.jsx)("button",{children:"Copy Viewer"})}),Object(c.jsx)("textarea",{id:"editor",value:f,onChange:v,placeholder:"Editor"}),Object(c.jsx)(l.CopyToClipboard,{id:"copy-editor",className:"btn btn-dark copy-button",text:f,children:Object(c.jsx)("button",{children:"Copy Editor"})})]})]})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.0cf9f069.chunk.js.map