(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},X8hv:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("xtjI"),n("Dq+y"),n("Ggvi"),n("YbXK"),n("cFtU"),n("m210"),n("4DPX"),n("rzGZ"),n("LagC"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("LagC"),n("YbXK"),n("cFtU"),n("q8oJ"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var l=n("q1tI"),p=n("E/Ix"),s=p.useMDXComponents,f=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=s(n),p=m(t),y=l.useMemo((function(){if(!o)return null;var e=u({React:l,mdx:f},p),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return l.createElement(y,u({components:i},c))}},nWfQ:function(e,t,n){var r=n("P8UN"),o=n("nsRs"),a=n("nONw"),c=n("1a8y"),u=n("BjK0"),i=n("96qb"),l=n("16Xr"),p=(n("emib").Reflect||{}).construct,s=i((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),f=!i((function(){p((function(){}))}));r(r.S+r.F*(s||f),"Reflect",{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(f&&!s)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var i=n.prototype,m=o(u(i)?i:Object.prototype),y=Function.apply.call(e,m,t);return u(y)?y:m}})},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),c=n("A2+M"),u=n("NYOE"),i=function(e){var t="favorites"+e.slug,n=Object(u.a)(t,!1),o=n[0],a=n[1];return r.createElement("button",{"aria-label":"Favorite Current Recipe",style:{backgroundColor:"transparent",border:0},onClick:function(){a(!o)}},o?"s":"")},l=n("Bl7J"),p=n("vrFN"),s=n("OKEM");n.d(t,"pageQuery",(function(){return m}));var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.mdx,t=this.props.data.site.siteMetadata.title;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(i,{slug:this.props.pageContext.slug})),o.a.createElement(l.a,{location:this.props.location,title:t},o.a.createElement(p.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{className:"text-green-900"},e.frontmatter.title),o.a.createElement("div",{className:"flex flex-row w-auto"},o.a.createElement("h2",{className:"text-base text-green-900 m-0 mr-4 pt-1 "},"Tags"),o.a.createElement("ul",{className:"flex flex-row"},this.props.data.mdx.frontmatter.tags.map((function(e,t,n){return o.a.createElement("li",{className:"mb-3 mr-4",key:e,style:{border:"none"}},o.a.createElement(a.Link,{to:"/tags/"},o.a.createElement(s.a,null,e)))}))))),o.a.createElement("hr",{className:"text-green-900"}),o.a.createElement(c.MDXRenderer,null,e.body))))},r}(o.a.Component),m=(t.default=f,"2108717147")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c58084224a838feaac9a.js.map