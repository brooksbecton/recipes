(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var r=n(0),o=n.n(r),a=n(139),i=n(230),c=n(220),l=n(221);var u=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(l.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",margin:0}},this.props.data.mdx.frontmatter.tags.map(function(t,e,n){return o.a.createElement("li",{key:t,style:{border:"none"}},o.a.createElement(a.Link,{to:"tags/"+t}," "+t+(e===n.length-1?"":", ")+" "))}))),o.a.createElement(i.MDXRenderer,null,t.body)))},r}(o.a.Component);e.default=u;var s="2108717147"},220:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(139);n(213);e.a=function(t){var e=t.children;return o.a.createElement("div",{style:{marginBottom:"2%"}},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},o.a.createElement("main",null,e)),o.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:"row-reverse",justifyContent:"space-between",height:"60px",bottom:0,width:"100%",margin:0,padding:5}},o.a.createElement("div",{style:{display:"flex",alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},o.a.createElement(a.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:"20px"},to:"/"},"HOME"),o.a.createElement("button",{style:{color:"white",backgroundColor:"transparent",border:0},onClick:function(){return window.history.back()}},"BACK")),o.a.createElement("div",{className:"nes-field",style:{alignSelf:"center",width:"50%"}},o.a.createElement("input",{className:"nes-input",type:"text",name:"search",placeholder:"Search"}))))}},221:function(t,e,n){"use strict";var r=n(222),o=n(0),a=n.n(o),i=n(223),c=n.n(i);function l(t){var e=t.description,n=t.lang,o=t.meta,i=t.title,l=r.data.site,u=e||l.siteMetadata.description;return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},222:function(t){t.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}},226:function(t,e,n){var r=n(1),o=n(57),a=n(31),i=n(5),c=n(7),l=n(12),u=n(144),s=(n(4).Reflect||{}).construct,p=l(function(){function t(){}return!(s(function(){},[],t)instanceof t)}),f=!l(function(){s(function(){})});r(r.S+r.F*(p||f),"Reflect",{construct:function(t,e){a(t),i(e);var n=arguments.length<3?t:a(arguments[2]);if(f&&!p)return s(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(u.apply(t,r))}var l=n.prototype,m=o(c(l)?l:Object.prototype),d=Function.apply.call(t,m,e);return c(d)?d:m}})},230:function(t,e,n){var r=n(231);t.exports={MDXRenderer:r}},231:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){l(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(46),n(11),n(19),n(72),n(102),n(44),n(13),n(10),n(141),n(56),n(6),n(226),n(226),n(141),n(72),n(102),n(56),n(44),n(46),n(13),n(10),n(11),n(6),n(19);var u=n(0),s=n(98),p=s.useMDXComponents,f=s.mdx,m=n(125).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),l=p(n),s=m(e),d=u.useMemo(function(){if(!o)return null;var t=c({React:u,mdx:f},s),e=Object.keys(t),n=e.map(function(e){return t[e]});return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))},[o,e]);return u.createElement(d,c({components:l},i))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7f058dd5d69035e0456a.js.map