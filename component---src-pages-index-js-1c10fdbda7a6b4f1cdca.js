(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),l=a(138),i=a(220),o=a(221);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMdx.edges,n=e.allMdx.group||[];return r.a.createElement(i.a,{location:this.props.location,title:t},r.a.createElement(o.a,{title:"All posts"}),r.a.createElement("div",{className:"nes-container with-title",style:{marginBottom:"60px"}},r.a.createElement("h2",{className:"title"},"Recent Recipes"),r.a.createElement("ul",null,a.slice(0,9).map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement("li",{key:t.fields.slug},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,marginBottom:"3%"}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)))))}))),r.a.createElement("div",{className:"nes-container with-title",style:{marginBottom:"60px"}},r.a.createElement("h2",{className:"title"},"Tags"),r.a.createElement("ul",null,n.slice(0,9).map(function(e){var t=e.fieldValue,a=e.totalCount,n=t;return r.a.createElement("li",{key:"/tags/"},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,marginBottom:"3%"}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/tags/"},n," (",a,")")))))}),r.a.createElement("li",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,marginBottom:"3%"}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"tags"},"All Tags (",n.length,")"))))))))},n}(r.a.Component);t.default=c;var s="1594766481"},220:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(138);a(213);t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"2%"}},r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},r.a.createElement("main",null,t)),r.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:"row-reverse",justifyContent:"space-between",height:"60px",bottom:0,width:"100%",margin:0,padding:5}},r.a.createElement("div",{style:{display:"flex",alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},r.a.createElement(l.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:"20px"},to:"/"},"HOME"),r.a.createElement("button",{style:{color:"white",backgroundColor:"transparent",border:0},onClick:function(){return window.history.back()}},"BACK")),r.a.createElement("div",{className:"nes-field",style:{alignSelf:"center",width:"50%"}},r.a.createElement("input",{className:"nes-input",type:"text",name:"search",placeholder:"Search"}))))}},221:function(e,t,a){"use strict";var n=a(222),r=a(0),l=a.n(r),i=a(223),o=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1c10fdbda7a6b4f1cdca.js.map