(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return s});var r=n(0),a=n.n(r),i=n(141),o=n(219),l=n(222);var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMdx.edges,r=e.allMdx.group||[];return a.a.createElement(o.a,{location:this.props.location,title:t},a.a.createElement(l.a,{title:"All posts"}),a.a.createElement("div",{className:"nes-container with-title",style:{marginBottom:"60px"}},a.a.createElement("h2",{className:"title"},"Recent Recipes"),a.a.createElement("ul",{className:"nes-list is-circle"},n.slice(0,9).map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return a.a.createElement("li",{key:t.fields.slug},a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h3",{style:{margin:0,marginBottom:"3%"}},a.a.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)))))}))),a.a.createElement("div",{className:"nes-container with-title",style:{marginBottom:"60px"}},a.a.createElement("h2",{className:"title"},"Tags"),a.a.createElement("ul",{className:"nes-list is-circle"},r.slice(0,9).map(function(e){var t=e.fieldValue,n=e.totalCount,r=t;return a.a.createElement("li",{key:"/tags/"+r},a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("p",{style:{margin:0,marginBottom:"3%"}},a.a.createElement(i.Link,{style:{boxShadow:"none"},to:"/tags//"+r},r," (",n,")")))))}),a.a.createElement("li",null,a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("p",{style:{margin:0,marginBottom:"3%"}},a.a.createElement(i.Link,{style:{boxShadow:"none"},to:"/tags"},"All Tags (",r.length,")"))))))))},r}(a.a.Component);t.default=c;var s="975326430"},219:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"PageHit",function(){return R}),n.d(r,"PostHit",function(){return P});n(45),n(16),n(11),n(12),n(7),n(21),n(18);var a=n(0),i=n.n(a),o=n(141),l=(n(38),n(44),n(365)),c=n(367),s=n(366),u=n(368),m=n(226),d=n.n(m),f=n(218),p=n(228),h=n(230),g=f.b.div.withConfig({displayName:"styles__Root",componentId:"sc-1nfqzza-0"})(["position:relative;display:grid;grid-gap:1em;"]),b=Object(f.b)(p.a).withConfig({displayName:"styles__SearchIcon",componentId:"sc-1nfqzza-1"})(["width:1em;pointer-events:none;"]),y=Object(f.a)(["background:white;color:",";cursor:text;width:5em;+ ","{color:",";margin:0.3em;}"],function(e){return e.theme.darkBlue},b,function(e){return e.theme.darkBlue}),E=Object(f.a)(["width:0;cursor:pointer;color:",";+ ","{color:white;}"," margin-left:",";padding-left:",";::placeholder{color:",";}"],function(e){return e.theme.lightBlue},b,function(e){return e.focus&&y},function(e){return e.focus?"-1.6em":"-1em"},function(e){return e.focus?"1.6em":"1em"},function(e){return e.theme.gray}),v=Object(f.a)(["background:",";width:6em;margin-left:-1.6em;padding-left:1.6em;+ ","{margin:0.3em;}"],function(e){return e.theme.veryLightGray},b),w=f.b.input.withConfig({displayName:"styles__Input",componentId:"sc-1nfqzza-2"})(["outline:none;border:none;font-size:1em;background:transparent;transition:",";border-radius:",";{highlight-next-line}",";"],function(e){return e.theme.shortTrans},function(e){return e.theme.smallBorderRadius},function(e){return e.collapse?E:v}),k=f.b.form.withConfig({displayName:"styles__Form",componentId:"sc-1nfqzza-3"})(["display:flex;flex-direction:row-reverse;align-items:center;"]),x=f.b.div.withConfig({displayName:"styles__HitsWrapper",componentId:"sc-1nfqzza-4"})(["display:",";max-height:80vh;overflow:scroll;z-index:2;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:calc(100% + 0.5em);width:80vw;max-width:30em;box-shadow:0 0 5px 0;padding:0.7em 1em 0.4em;background:white;border-radius:",";> * + *{padding-top:1em !important;border-top:2px solid ",";}li + li{margin-top:0.7em;padding-top:0.7em;border-top:1px solid ",";}*{margin-top:0;padding:0;}ul{list-style:none;}mark{color:",";background:",";}header{display:flex;justify-content:space-between;margin-bottom:0.3em;h3{color:white;background:",";padding:0.1em 0.4em;border-radius:",";}}h3{margin:0 0 0.5em;}h4{margin-bottom:0.3em;}"],function(e){return e.show?"grid":"none"},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.darkGray},function(e){return e.theme.lightGray},function(e){return e.theme.lightBlue},function(e){return e.theme.darkBlue},function(e){return e.theme.gray},function(e){return e.theme.smallBorderRadius}),O=f.b.span.withConfig({displayName:"styles___StyledSpan",componentId:"sc-1nfqzza-5"})(["font-size:0.6em;text-align:end;padding:0;"]),j=function(){return i.a.createElement(O,null,"Powered by"," ",i.a.createElement("a",{href:"https://algolia.com"},i.a.createElement(h.a,{size:"1em"})," Algolia"))},C=n(363);var N=Object(C.a)(function(e){var t=e.refine,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["refine"]);return i.a.createElement(k,null,i.a.createElement(w,Object.assign({type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e.target.value)}},n)),i.a.createElement(b,null))}),S=n(370),z=n(369),B=n(233),_=n(234),R=function(e){return function(t){var n=t.hit;return i.a.createElement("div",null,i.a.createElement(o.Link,{to:n.slug,onClick:e},i.a.createElement("h4",null,i.a.createElement(S.a,{attribute:"title",hit:n,tagName:"mark"}))),i.a.createElement(z.a,{attribute:"excerpt",hit:n,tagName:"mark"}))}},P=function(e){return function(t){var n=t.hit;return i.a.createElement("div",{style:{overflow:"scroll"}},i.a.createElement(o.Link,{to:n.fields.slug,onClick:e},i.a.createElement("h4",null,i.a.createElement(S.a,{attribute:"title",hit:n,tagName:"mark"}))),i.a.createElement("div",null,i.a.createElement(B.a,{size:"1em"})," ",i.a.createElement(S.a,{attribute:"date",hit:n,tagName:"mark"})," ",i.a.createElement(_.a,{size:"1em"})," ",n.tags.map(function(e,t){return i.a.createElement(a.Fragment,{key:e},t>0&&", ",e)})),i.a.createElement(z.a,{attribute:"excerpt",hit:n,tagName:"mark"}))}},A=Object(l.a)(function(e){var t=e.searchState,n=e.searchResults,r=e.children;return n&&n.nbHits>0?r:"No results for '"+t.query+"'"}),L=Object(l.a)(function(e){var t=e.searchResults;return t&&t.nbHits>0&&t.nbHits+" result"+(t.nbHits>1?"s":"")}),H=function(e,t,n){n||(n=["mousedown","touchstart"]);var r=function(n){if(e.current)return!e.current.contains(n.target)&&t()};Object(a.useEffect)(function(){var e=n,t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var i;if(t){if(a>=e.length)break;i=e[a++]}else{if((a=e.next()).done)break;i=a.value}var o=i;document.addEventListener(o,r)}return function(){var e=n,t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var i;if(t){if(a>=e.length)break;i=e[a++]}else{if((a=e.next()).done)break;i=a.value}var o=i;document.removeEventListener(o,r)}}})};function I(e){var t=e.indices,n=e.collapse,o=e.hitsAsGrid,l=Object(a.createRef)(),m=Object(a.useState)(""),f=m[0],p=m[1],h=Object(a.useState)(!1),b=h[0],y=h[1],E=d()("73DRTX4JYW","605909b1eef624060d3c04503b55aaee");return H(l,function(){return y(!1)}),i.a.createElement(c.a,{searchClient:E,indexName:t[0].name,onSearchStateChange:function(e){var t=e.query;return p(t)},root:{Root:g,props:{ref:l}}},i.a.createElement(N,Object.assign({onFocus:function(){return y(!0)}},{collapse:n,focus:b})),i.a.createElement(x,{style:{overflow:"scroll"},show:f.length>0&&b,asGrid:o},t.map(function(e){var t=e.name,n=e.title,a=e.hitComp;return i.a.createElement(s.a,{key:t,indexName:t},i.a.createElement("header",null,i.a.createElement("h3",null,n),i.a.createElement(L,null)),i.a.createElement(A,null,i.a.createElement(u.a,{hitComponent:r[a](function(){return y(!1)})})))}),i.a.createElement(j,null)))}n(235);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){D(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){return i.a.createElement("button",Object.assign({},e,{style:M({color:"white",backgroundColor:"transparent",border:0,padding:0},e.style)}),e.children)};t.a=function(e){var t=e.children,n=Object(a.useState)(!1),r=n[0],l=n[1];return i.a.createElement("div",{style:{marginBottom:"2%"}},i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},i.a.createElement("main",null,t)),i.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:r?"column-reverse":"row",justifyContent:"space-between",height:r?"90%":"60px",bottom:0,width:"100%",margin:0,padding:r?5:16}},r?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(){return l(!1)}},"CANCEL"),i.a.createElement(I,{collapse:!0,indices:[{name:"recipes",title:"Recipes",hitComp:"PostHit"}]})):i.a.createElement(i.a.Fragment,null,i.a.createElement(F,{onClick:function(){return l(function(e){return!e})}},"SEARCH"),i.a.createElement("div",{style:{alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},i.a.createElement("nav",null,i.a.createElement(o.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:20},to:"/"},"HOME"),i.a.createElement(F,{onClick:function(){return window.history.back()}},"BACK"))))))}},222:function(e,t,n){"use strict";var r=n(223),a=n(0),i=n.n(a),o=n(246),l=n.n(o);function c(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,c=r.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-146c38c07d3ff92accce.js.map