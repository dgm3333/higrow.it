(function(t){function e(e){for(var a,n,l=e[0],u=e[1],o=e[2],d=0,k=[];d<l.length;d++)n=l[d],r[n]&&k.push(r[n][0]),r[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(k.length)k.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,l=1;l<i.length;l++){var u=i[l];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},r={app:0},s=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var c=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1567:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view"),i("Footer")],1)},s=[],n=i("8323"),l=i.n(n),u=i("263c"),o=i.n(u),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"uk-navbar-container uk-navbar-transparent",attrs:{"uk-navbar":"","uk-sticky":""}},[t._m(0),i("div",{staticClass:"uk-navbar-right uk-visible@l"},[i("ul",{staticClass:"uk-navbar-nav"},t._l(t.menu,function(e){return i("li",{key:e.label},[i("a",{attrs:{href:e.target,"uk-scroll":""}},[t._v(t._s(e.label))])])}),0)]),t._m(1)]),i("div",{attrs:{id:"mobile-nav","uk-offcanvas":"overlay: true; flip:true; mode: push"}},[i("div",{staticClass:"uk-offcanvas-bar uk-flex uk-flex-column"},[i("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""}}),i("ul",{staticClass:"uk-nav uk-nav-primary uk-margin-auto-vertical"},t._l(t.menu,function(e){return i("li",{key:e.label},[i("a",{attrs:{href:e.target}},[t._v(t._s(e.label))])])}),0)])])])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-navbar-left"},[i("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[i("img",{attrs:{src:"/images/higrow-logo-1024.png",width:"150"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-navbar-right uk-hidden@l"},[i("a",{staticClass:"uk-navbar-toggle",attrs:{href:"#","uk-toggle":"target: #mobile-nav"}},[i("div",{staticClass:"hg-hamburger"},[i("div",{staticClass:"hg-hamburger-line"}),i("div",{staticClass:"hg-hamburger-line"})])])])}],k={name:"Header",props:{msg:String},data:function(){return{menu:[{label:"Servizi",target:"/#servizi"},{label:"Contatti",target:"/#contatti"}]}}},m=k,g=(i("b77f"),i("2877")),v=Object(g["a"])(m,c,d,!1,null,"665fbbe1",null);v.options.__file="Header.vue";var f=v.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-text-center uk-text-small uk-margin"},[i("strong",[t._v("Higrow srl")]),t._v(" ©2019"),i("br"),t._v("sede legale: via Monte Popera 4/7, 30027 San Donà di Piave - sede operativa: via Enrico Fermi 6, 30020 Noventa di Piave"),i("br"),t._v("P.iva/C.f. 04440720276 - email. "),i("a",{attrs:{href:"mailto:info@higrow.it"}},[t._v("info@higrow.it")]),t._v(" / pec. "),i("a",{attrs:{href:"mailto:higrow.srl@legalmail.it"}},[t._v("higrow.srl@legalmail.it")])])}],_={name:"Footer",props:{msg:String},data:function(){return{}}},x=_,b=Object(g["a"])(x,p,h,!1,null,"cbfa1afe",null);b.options.__file="Footer.vue";var C=b.exports;l.a.use(o.a);var w={name:"app",components:{Header:f,Footer:C}},y=w,j=(i("7c55"),Object(g["a"])(y,r,s,!1,null,null,null));j.options.__file="App.vue";var S=j.exports,E=i("8c4f"),P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-1024.png",width:"200","uk-img":""}}),i("h1",{staticClass:"uk-heading-hero"},[t._v("creatività\n        "),i("br"),t._v("senza "+t._s(t.ends[t.current])+"\n      ")]),i("a",{staticClass:"uk-button uk-button-text uk-button-large",on:{click:function(e){t.count()}}},[t._v("clicca qui")])])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),i("div",{staticClass:"uk-container uk-text-center"},[i("h2",[t._v("Blog")]),t.loading?i("div",{staticClass:"uk-section uk-flex uk-flex-middle uk-flex-center"},[i("div",{attrs:{"uk-spinner":"ratio: 3"}})]):i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},t._l(t.posts,function(e){return i("router-link",{key:e.id,attrs:{to:{name:"Post",params:{id:e.id}}}},[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",style:{"background-image":"url("+e._embedded["wp:featuredmedia"][0].source_url+")"}}),i("div",[i("h5",{domProps:{innerHTML:t._s(e.title.rendered)}})])])}),1)]),t._m(8)])},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section"},[i("img",{attrs:{src:"images/table-top-view-creativity.jpg","uk-img":""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section",attrs:{id:"servizi"}},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-penta-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[t._v("Brand identity")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Naming")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Logo")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Graphic Design")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Twin-set")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Packaging")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/lasportiva.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/globus.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/saiindustry.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/cimento.jpg)"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-epta-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[t._v("Web design")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Siti web")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("E-commerce")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Web App")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Landing Page")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("iOS&Droid App")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/stateofart.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/theedgecompany.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/aiprogetti.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/relax.jpg)"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-enna-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[t._v("Growth Hacking")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Digital marketing")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Social media strategy")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[t._v("Market acquisition")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/villaggiomarzotto.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/kibernetes.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/noventavetro.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/ristorantelieto.jpg)"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section uk-flex uk-flex-middle",attrs:{"uk-height-viewport":""}},[i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},[i("div",[i("cite",{staticClass:"uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center "},[t._v("“I nostri pregi e i nostri difetti sono inscindibili, "),i("br"),t._v("proprio come la forza e la materia, "),i("br"),t._v("quando si separano l'uomo non è più.”")]),i("p",{staticClass:"uk-h4"},[i("strong",[t._v("Nikola Tesla")])])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-section uk-flex uk-flex-middle",attrs:{id:"contatti","uk-height-viewport":""}},[i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},[i("div",[i("cite",{staticClass:"uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center "},[t._v("“Ogni lungo viaggio inizia con un passo”")]),i("p",{staticClass:"uk-h4"},[i("strong",[t._v("Laozi")])]),i("p",{staticClass:"uk-text-small"},[i("a",{attrs:{href:"mailto:commerciale@higrow.it"}},[t._v("commerciale@higrow.it")]),t._v(" | "),i("a",{attrs:{href:"tel:3339774604"}},[t._v("3339774604")])])])])])])}],O=i("fa6e"),z=new O({endpoint:"https://www.zepfiro.com/wp-json"}),H={name:"Homepage",data:function(){return{loading:!0,posts:{},ends:["regole","pregiudizi","scopo","font","palle","cervello","di te","bottoni","pazienza","click","alberi","penna","fili","altro","odio"],current:0}},mounted:function(){z.posts().perPage(4).embed().then(function(t){this.posts=t,this.loading=!1}.bind(this)).catch(function(t){})},methods:{count:function(){this.current==this.ends.length-1?this.current=0:this.current++}}},M=H,T=Object(g["a"])(M,P,$,!1,null,"52a3ccfa",null);T.options.__file="Homepage.vue";var D=T.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-margin"},[t.loading?i("div",{staticClass:"uk-section uk-flex uk-flex-middle uk-flex-center",attrs:{"uk-height-viewport":""}},[i("div",{attrs:{"uk-spinner":"ratio: 3"}})]):i("div",[null!=t.post._embedded?i("img",{attrs:{src:t.post._embedded["wp:featuredmedia"][0].source_url,"uk-img":""}}):t._e(),i("h1",{staticClass:"uk-heading-primary"},[t._v(t._s(t.post.title.rendered))]),i("div",{domProps:{innerHTML:t._s(t.post.content.rendered)}})])])},L=[],A=i("fa6e"),q=new A({endpoint:"https://www.zepfiro.com/wp-json"}),N={name:"Post",data:function(){return{loading:!0,post:{content:{rendered:""},title:{rendered:""},_embedded:null}}},mounted:function(){q.posts().id(this.$route.params.id).embed().then(function(t){this.post=t,this.loading=!1}.bind(this)).catch(function(t){})},methods:{}},B=N,G=Object(g["a"])(B,F,L,!1,null,"1220a833",null);G.options.__file="Post.vue";var J=G.exports;a["a"].use(E["a"]);var W=new E["a"]({mode:"history",routes:[{path:"/",name:"Homepage",component:D},{path:"/news/:id",name:"Post",component:J},{path:"*",redirect:"/"}]}),I=i("0284"),U=i.n(I);a["a"].use(U.a,{id:"UA-51910998-52 ",checkDuplicatedScript:!0}),new a["a"]({router:W,render:function(t){return t(S)}}).$mount("#app")},"5c48":function(t,e,i){},"7c55":function(t,e,i){"use strict";var a=i("5c48"),r=i.n(a);r.a},b77f:function(t,e,i){"use strict";var a=i("1567"),r=i.n(a);r.a}});
//# sourceMappingURL=app.89b52c47.js.map