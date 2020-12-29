(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue_films-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b3f":function(e,t,r){},"394e":function(e,t,r){"use strict";r("42d2")},"42d2":function(e,t,r){},"4fd0":function(e,t,r){"use strict";r("0b3f")},"55a8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("487a"),i=r.n(a),s=r("f5af"),o=r.n(s),c=(r("e829"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"App"},[r("router-view")],1)}),u=[],l=(r("5c0b"),r("2877")),p={},d=Object(l["a"])(p,c,u,!1,null,null,null),f=d.exports,v=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Movies"},[r("h1",{staticClass:"Movies__title"},[e._v("Popular Movies")]),r("Search"),r("MoviesList")],1)},_=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"MovieList"},[r("ul",{staticClass:"MovieList__list"},[r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"MovieList__loader",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"limit"}},e._l(e.popular,(function(t){return r("MovieCard",{key:t.id,attrs:{movie:t,genres:e.genresIndex}})})),1)])])},h=[],g=(r("99af"),r("13d5"),r("b0c0"),r("ade3")),y=r("5530"),C=r("2909"),w=(r("96cf"),r("1da1")),O=(r("d3b7"),"d8ac5c243091006ca12b7a98c4cbc3dd"),j="https://api.themoviedb.org/3";function x(e){return M.apply(this,arguments)}function M(){return M=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"",e.next=3,fetch("".concat(j).concat(t,"?api_key=").concat(O).concat(r));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,i=a.results,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var P=x;function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return P("/movie/popular","&page=".concat(e))}function k(){return P("/genre/movie/list")}var $=k,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"Card",attrs:{"data-aos":"slide-up","data-aos-offset":"100","data-aos-easing":"ease-out-back"}},[r("img",{staticClass:"Card__image",attrs:{src:e.getPoster,alt:"A product"}}),r("div",{staticClass:"Card__body"},[r("h4",{staticClass:"Card__title"},[e._v(" "+e._s(e.movie.title)+" ")]),r("span",[e._v(e._s(e.movie.release_date))]),r("p",{staticClass:"Card__paragraph"},[e._v(" "+e._s(e.movie.overview)+" ")]),e._v(" "+e._s(e.movie.genre_ids)+" "+e._s(e.genres)+" "),e._m(0)])])},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Card__buttons",attrs:{role:"group","aria-label":"Basic example"}},[r("button",{staticClass:"Card__button",attrs:{type:"button"}},[e._v(" Details ")]),r("button",{staticClass:"Card__button",attrs:{type:"button"}},[e._v(" Pin ")])])}],R={name:"MovieCard",props:{movie:{type:Object,required:!0},genres:{type:Object,required:!0}},computed:{getPoster:function(){return"https://image.tmdb.org/t/p/original/".concat(this.movie.poster_path)}}},q=R,I=(r("394e"),Object(l["a"])(q,E,L,!1,null,"6aaa7010",null)),T=I.exports,A={name:"MoviesList",data:function(){return{popular:[],limit:20,busy:!1,page:1,genresIndex:{}}},methods:{loadMore:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy=!0,t.next=3,S(e.page);case 3:r=t.sent,e.page+=1,e.popular=[].concat(Object(C["a"])(e.popular),Object(C["a"])(r)),e.busy=!1;case 7:case"end":return t.stop()}}),t)})))()},prepareGenres:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$();case 2:r=t.sent,console.log(r),e.genresIndex=r.reduce((function(e,t){return Object(y["a"])(Object(y["a"])({},e),{},Object(g["a"])({},t.id,t.name))}),{});case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.prepareGenres(),this.loadMore()},components:{MovieCard:T}},G=A,J=(r("8d9f"),Object(l["a"])(G,m,h,!1,null,"180200be",null)),B=J.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Search"},[r("input",{staticClass:"Search__input",attrs:{type:"text",placeholder:"Find what you want ;)"},domProps:{value:e.query}})])},F=[],N={name:"Search",props:{query:String}},z=N,H=(r("4fd0"),Object(l["a"])(z,D,F,!1,null,"c81f3b98",null)),K=H.exports,Q={name:"Movies",data:function(){return{query:""}},components:{MoviesList:B,Search:K}},U=Q,V=(r("d0b4"),Object(l["a"])(U,b,_,!1,null,"204f444c",null)),W=V.exports;n["a"].use(v["a"]);var X=[{path:"/",name:"Movies",component:W}],Y=new v["a"]({mode:"history",routes:X}),Z=Y;n["a"].config.productionTip=!1,n["a"].use(i.a),n["a"].use(o.a),new n["a"]({router:Z,created:function(){o.a.init()},render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"8d9f":function(e,t,r){"use strict";r("55a8")},9010:function(e,t,r){},"9c0c":function(e,t,r){},d0b4:function(e,t,r){"use strict";r("9010")}});
//# sourceMappingURL=app.0d4843a3.js.map