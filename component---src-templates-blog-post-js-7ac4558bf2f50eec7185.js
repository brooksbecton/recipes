(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},OKEM:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var r=n("q1tI");var o=function(t){var e=t.children,n=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children"]);return r.createElement("span",Object.assign({},n,{className:" cursor-pointer inline-block hover:bg-green-200 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800"}),e)}},X8hv:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("xtjI"),n("Dq+y"),n("Ggvi"),n("YbXK"),n("cFtU"),n("m210"),n("4DPX"),n("rzGZ"),n("LagC"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("LagC"),n("YbXK"),n("cFtU"),n("q8oJ"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var l=n("q1tI"),p=n("E/Ix"),s=p.useMDXComponents,f=p.mdx,y=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,a=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=s(n),p=y(e),m=l.useMemo((function(){if(!o)return null;var t=i({React:l,mdx:f},p),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,e]);return l.createElement(m,i({components:u},a))}},nWfQ:function(t,e,n){var r=n("P8UN"),o=n("nsRs"),c=n("nONw"),a=n("1a8y"),i=n("BjK0"),u=n("96qb"),l=n("16Xr"),p=(n("emib").Reflect||{}).construct,s=u((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),f=!u((function(){p((function(){}))}));r(r.S+r.F*(s||f),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(f&&!s)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var u=n.prototype,y=o(i(u)?u:Object.prototype),m=Function.apply.call(t,y,e);return i(m)?m:y}})},yZlL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),c=n("Wbzz"),a=n("A2+M"),i=n("NYOE"),u=function(t){var e="favorites"+t.slug,n=Object(i.a)(e,!1),o=n[0],c=n[1];return r.createElement("button",{"aria-label":"Favorite Current Recipe",style:{backgroundColor:"transparent",border:0},onClick:function(){c(!o)}},o?"s":"")},l=n("Bl7J"),p=n("vrFN"),s=n("OKEM");n.d(e,"pageQuery",(function(){return y}));var f=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title;return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",alignItems:"flex-end",backgroundColor:"#22252b"}},o.a.createElement(u,{style:{marginLeft:"auto",paddingRight:"15px"},slug:this.props.pageContext.slug})),o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(p.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("h2",null,"Tags"),o.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",margin:0}},this.props.data.mdx.frontmatter.tags.map((function(t,e,n){return o.a.createElement("li",{key:t,style:{border:"none"}},o.a.createElement(c.Link,{to:"/tags/"},o.a.createElement(s.a,null,""+t)))})))),o.a.createElement(a.MDXRenderer,null,t.body))))},r}(o.a.Component),y=(e.default=f,"2108717147")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7ac4558bf2f50eec7185.js.map