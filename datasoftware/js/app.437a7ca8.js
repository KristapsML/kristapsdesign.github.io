(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({dashboard:"dashboard",list:"list",map:"map",settings:"settings"}[e]||e)+"."+{dashboard:"6c42d61a",list:"da0e49d3",map:"6ce4bb40",settings:"1c704bf1"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={dashboard:1,list:1,map:1,settings:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({dashboard:"dashboard",list:"list",map:"map",settings:"settings"}[e]||e)+"."+{dashboard:"ff268dd8",list:"affbfb24",map:"51f4b5ec",settings:"5dcdeacf"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/app/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a25":function(e,t,n){},"3bb5":function(e,t,n){"use strict";var a=n("e52d"),r=n.n(a);r.a},5093:function(e,t,n){"use strict";var a=n("0a25"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"app"},i=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HeaderLanding"),a("div",{staticClass:"color-split"},[a("section",{staticClass:"section flex-centered"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-centered"},[a("form",[a("img",{staticClass:"img-size",attrs:{src:n("dd2c"),width:"160",height:"60"}}),a("h1",{staticClass:"title"},[e._v("Sign in to your account")]),e._m(0),e._m(1),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[a("button",{staticClass:"button is-link"},[e._v("Log in")])])],1)])])])])])])],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Username")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Your Username"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Password")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"password",placeholder:"Your Password"}})])])}],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{attrs:{to:{name:"home"}}},[a("a",{staticClass:"navbar-item",attrs:{href:"#"}},[a("img",{attrs:{src:n("fa21"),width:"160",height:"60"}})])]),e._m(0)],1)])])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],b={name:"HeaderLanding"},g=b,v=(n("5093"),Object(c["a"])(g,h,m,!1,null,null,null)),y=v.exports,w={name:"home",components:{HeaderLanding:y}},C=w,_=(n("3bb5"),Object(c["a"])(C,p,f,!1,null,"6068e242",null)),x=_.exports,E=n("1321"),O=n.n(E);a["a"].use(d["a"]),a["a"].use(O.a),a["a"].component("apexchart",O.a);var j=[{path:"/",name:"home",component:x},{path:"/dashboard",name:"dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"7277"))}},{path:"/list",name:"list",component:function(){return n.e("list").then(n.bind(null,"1a33"))}},{path:"/map",name:"map",component:function(){return n.e("map").then(n.bind(null,"4bb4"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}}],k=new d["a"]({routes:j}),P=k,S=n("9483");Object(S["a"])("".concat("/app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("92c6");var A=n("9871"),L=n.n(A),N=n("e11e");n("6cc5"),n("580a");a["a"].use(L.a),delete N["Icon"].Default.prototype._getIconUrl,N["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["a"].config.productionTip=!1,new a["a"]({router:P,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},dd2c:function(e,t,n){e.exports=n.p+"img/logotype.ef13ee89.png"},e52d:function(e,t,n){},fa21:function(e,t,n){e.exports=n.p+"img/naestved.702d3b19.png"}});
//# sourceMappingURL=app.437a7ca8.js.map