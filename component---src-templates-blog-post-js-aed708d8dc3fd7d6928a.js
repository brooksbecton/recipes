(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{216:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(141),i=n(287),c=n(129),l=function(e){var t="favorites"+e.slug,n=Object(c.a)(t,!1),a=n[0],o=n[1];return r.createElement("button",{style:{backgroundColor:"transparent",border:0},onClick:function(){o(!a)}},a?r.createElement("i",{className:"nes-icon heart"}):r.createElement("i",{className:"nes-icon heart is-empty"}))},u=n(219),s=n(222);n.d(t,"pageQuery",function(){return f});var m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.mdx,t=this.props.data.site.siteMetadata.title;return a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",alignItems:"flex-end",backgroundColor:"#22252b"}},a.a.createElement(l,{style:{marginLeft:"auto",paddingRight:"15px"},slug:this.props.pageContext.slug})),a.a.createElement(u.a,{location:this.props.location,title:t},a.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h1",null,e.frontmatter.title),a.a.createElement("h2",null,"Tags"),a.a.createElement("ul",{className:"nes-list is-circle",style:{listStyle:"none",display:"flex",flexDirection:"column",margin:0}},this.props.data.mdx.frontmatter.tags.map(function(e,t,n){return a.a.createElement("li",{key:e,style:{border:"none"}},a.a.createElement(o.Link,{to:"/tags/"},e+(t===n.length-1?"":", ")+" "))}))),a.a.createElement(i.MDXRenderer,null,e.body))))},r}(a.a.Component),f=(t.default=m,"2108717147")},219:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"PageHit",function(){return N}),n.d(r,"PostHit",function(){return z});n(45),n(16),n(11),n(12),n(7),n(21),n(18);var a=n(0),o=n.n(a),i=n(141),c=(n(38),n(44),n(365)),l=n(367),u=n(366),s=n(368),m=n(226),f=n.n(m),p=n(218),d=n(228),h=n(230),g=p.b.div.withConfig({displayName:"styles__Root",componentId:"sc-1nfqzza-0"})(["position:relative;display:grid;grid-gap:1em;"]),b=Object(p.b)(d.a).withConfig({displayName:"styles__SearchIcon",componentId:"sc-1nfqzza-1"})(["width:1em;pointer-events:none;"]),y=Object(p.a)(["background:white;color:",";cursor:text;width:5em;+ ","{color:",";margin:0.3em;}"],function(e){return e.theme.darkBlue},b,function(e){return e.theme.darkBlue}),v=Object(p.a)(["width:0;cursor:pointer;color:",";+ ","{color:white;}"," margin-left:",";padding-left:",";::placeholder{color:",";}"],function(e){return e.theme.lightBlue},b,function(e){return e.focus&&y},function(e){return e.focus?"-1.6em":"-1em"},function(e){return e.focus?"1.6em":"1em"},function(e){return e.theme.gray}),E=Object(p.a)(["background:",";width:6em;margin-left:-1.6em;padding-left:1.6em;+ ","{margin:0.3em;}"],function(e){return e.theme.veryLightGray},b),w=p.b.input.withConfig({displayName:"styles__Input",componentId:"sc-1nfqzza-2"})(["outline:none;border:none;font-size:1em;background:transparent;transition:",";border-radius:",";{highlight-next-line}",";"],function(e){return e.theme.shortTrans},function(e){return e.theme.smallBorderRadius},function(e){return e.collapse?v:E}),O=p.b.form.withConfig({displayName:"styles__Form",componentId:"sc-1nfqzza-3"})(["display:flex;flex-direction:row-reverse;align-items:center;"]),j=(p.b.div.withConfig({displayName:"styles__HitsWrapper",componentId:"sc-1nfqzza-4"})(["display:",";max-height:80vh;overflow:scroll;z-index:2;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:calc(100% + 0.5em);width:80vw;max-width:30em;box-shadow:0 0 5px 0;padding:0.7em 1em 0.4em;background:white;border-radius:",";> * + *{padding-top:1em !important;border-top:2px solid ",";}li + li{margin-top:0.7em;padding-top:0.7em;border-top:1px solid ",";}*{margin-top:0;padding:0;}ul{list-style:none;}mark{color:",";background:",";}header{display:flex;justify-content:space-between;margin-bottom:0.3em;h3{color:white;background:",";padding:0.1em 0.4em;border-radius:",";}}h3{margin:0 0 0.5em;}h4{margin-bottom:0.3em;}"],function(e){return e.show?"grid":"none"},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.darkGray},function(e){return e.theme.lightGray},function(e){return e.theme.lightBlue},function(e){return e.theme.darkBlue},function(e){return e.theme.gray},function(e){return e.theme.smallBorderRadius}),p.b.span.withConfig({displayName:"styles___StyledSpan",componentId:"sc-1nfqzza-5"})(["font-size:0.6em;text-align:end;padding:0;"])),k=function(){return o.a.createElement(j,null,"Powered by"," ",o.a.createElement("a",{href:"https://algolia.com"},o.a.createElement(h.a,{size:"1em"})," Algolia"))},x=n(363);var C=Object(x.a)(function(e){var t=e.refine,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["refine"]);return o.a.createElement(O,null,o.a.createElement(w,Object.assign({type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e.target.value)}},n)),o.a.createElement(b,null))}),S=n(370),P=n(369),R=n(233),_=n(234),N=function(e){return function(t){var n=t.hit;return o.a.createElement("div",null,o.a.createElement(i.Link,{to:n.slug,onClick:e},o.a.createElement("h4",null,o.a.createElement(S.a,{attribute:"title",hit:n,tagName:"mark"}))),o.a.createElement(P.a,{attribute:"excerpt",hit:n,tagName:"mark"}))}},z=function(e){return function(t){var n=t.hit;return o.a.createElement("div",{style:{overflow:"scroll"}},o.a.createElement(i.Link,{to:n.fields.slug,onClick:e},o.a.createElement("h4",null,o.a.createElement(S.a,{attribute:"title",hit:n,tagName:"mark"}))),o.a.createElement("div",null,o.a.createElement(R.a,{size:"1em"})," ",o.a.createElement(S.a,{attribute:"date",hit:n,tagName:"mark"})," ",o.a.createElement(_.a,{size:"1em"})," ",n.tags.map(function(e,t){return o.a.createElement(a.Fragment,{key:e},t>0&&", ",e)})),o.a.createElement(P.a,{attribute:"excerpt",hit:n,tagName:"mark"}))}},D=Object(c.a)(function(e){var t=e.searchState,n=e.searchResults,r=e.children;return n&&n.nbHits>0?r:"No results for '"+t.query+"'"}),A=Object(c.a)(function(e){var t=e.searchResults;return t&&t.nbHits>0&&t.nbHits+" result"+(t.nbHits>1?"s":"")}),B=function(e,t,n){n||(n=["mousedown","touchstart"]);var r=function(n){if(e.current)return!e.current.contains(n.target)&&t()};Object(a.useEffect)(function(){var e=n,t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var o;if(t){if(a>=e.length)break;o=e[a++]}else{if((a=e.next()).done)break;o=a.value}var i=o;document.addEventListener(i,r)}return function(){var e=n,t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var o;if(t){if(a>=e.length)break;o=e[a++]}else{if((a=e.next()).done)break;o=a.value}var i=o;document.removeEventListener(i,r)}}})};function I(e){var t=e.indices,n=e.collapse,i=(e.hitsAsGrid,Object(a.createRef)()),c=Object(a.useState)(""),m=(c[0],c[1]),p=Object(a.useState)(!1),d=p[0],h=p[1],b=f()("73DRTX4JYW","605909b1eef624060d3c04503b55aaee");return B(i,function(){return h(!1)}),o.a.createElement(l.a,{searchClient:b,indexName:t[0].name,onSearchStateChange:function(e){var t=e.query;return m(t)},root:{Root:g,props:{ref:i}}},o.a.createElement(C,Object.assign({onFocus:function(){return h(!0)}},{collapse:n,focus:d})),o.a.createElement("div",{style:{overflow:"scroll"}},t.map(function(e){var t=e.name,n=e.title,a=e.hitComp;return o.a.createElement(u.a,{key:t,indexName:t},o.a.createElement("header",null,o.a.createElement("h3",null,n),o.a.createElement(A,null)),o.a.createElement(D,null,o.a.createElement(s.a,{hitComponent:r[a](function(){return h(!1)})})))}),o.a.createElement(k,null)))}n(235);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){return o.a.createElement("button",Object.assign({},e,{style:H({color:"white",backgroundColor:"transparent",border:0,padding:0},e.style)}),e.children)};t.a=function(e){var t=e.children,n=Object(a.useState)(!1),r=n[0],c=n[1];return o.a.createElement("div",{style:{marginBottom:"2%"}},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},o.a.createElement("main",null,t)),o.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:r?"column-reverse":"row",justifyContent:"space-between",height:r?"90%":"60px",bottom:0,width:"100%",margin:0,padding:r?5:16}},r?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return c(!1)}},"CANCEL"),o.a.createElement(I,{collapse:!0,indices:[{name:"recipes",title:"Recipes",hitComp:"PostHit"}]})):o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{onClick:function(){return c(function(e){return!e})}},"SEARCH"),o.a.createElement("div",{style:{alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},o.a.createElement("nav",null,o.a.createElement(i.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:20},to:"/"},"HOME"),o.a.createElement(F,{onClick:function(){return window.history.back()}},"BACK"))))))}},222:function(e,t,n){"use strict";var r=n(223),a=n(0),o=n.n(a),i=n(246),c=n.n(i);function l(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,l=r.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}},262:function(e,t,n){var r=n(1),a=n(59),o=n(30),i=n(5),c=n(6),l=n(10),u=n(154),s=(n(4).Reflect||{}).construct,m=l(function(){function e(){}return!(s(function(){},[],e)instanceof e)}),f=!l(function(){s(function(){})});r(r.S+r.F*(m||f),"Reflect",{construct:function(e,t){o(e),i(t);var n=arguments.length<3?e:o(arguments[2]);if(f&&!m)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var l=n.prototype,p=a(c(l)?l:Object.prototype),d=Function.apply.call(e,p,t);return c(d)?d:p}})},287:function(e,t,n){var r=n(288);e.exports={MDXRenderer:r}},288:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(45),n(12),n(21),n(76),n(107),n(44),n(16),n(11),n(144),n(56),n(7),n(262),n(262),n(144),n(76),n(107),n(56),n(44),n(45),n(16),n(11),n(12),n(7),n(21);var u=n(0),s=n(98),m=s.useMDXComponents,f=s.mdx,p=n(126).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),l=m(n),s=p(t),d=u.useMemo(function(){if(!a)return null;var e=c({React:u,mdx:f},s),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(n)))},[a,t]);return u.createElement(d,c({components:l},i))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aed708d8dc3fd7d6928a.js.map