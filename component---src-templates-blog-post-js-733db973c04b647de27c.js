(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{204:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var a=n(0),r=n.n(a),i=n(132),o=n(209),l=n(210);var c=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title;return r.a.createElement(o.a,{location:this.props.location,title:e},r.a.createElement(l.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexDirection:"row",margin:0}},this.props.data.markdownRemark.frontmatter.tags.map(function(t,e,n){return r.a.createElement("li",{key:t,style:{border:"none",paddingLeft:0===e?0:10}},r.a.createElement(i.Link,{to:"tags/"+t}," "+t+(e===n.length-1?"":", ")+" "))}))),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:t.html}})))},a}(r.a.Component);e.default=c;var s="181058792"},209:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(132);n(202);e.a=function(t){var e=t.children;return r.a.createElement("div",{style:{marginBottom:"2%"}},r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},r.a.createElement("main",null,e)),r.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:"row-reverse",justifyContent:"space-between",height:"60px",bottom:0,width:"100%",margin:0,padding:5}},r.a.createElement("div",{style:{display:"flex",alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},r.a.createElement(i.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:"20px"},to:"/"},"HOME"),r.a.createElement("button",{style:{color:"white",backgroundColor:"transparent",border:0},onClick:function(){return window.history.back()}},"BACK")),r.a.createElement("div",{className:"nes-field",style:{alignSelf:"center",width:"50%"}},r.a.createElement("input",{className:"nes-input",type:"text",name:"search",placeholder:"Search"}))))}},210:function(t,e,n){"use strict";var a=n(211),r=n(0),i=n.n(r),o=n(212),l=n.n(o);function c(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,c=a.data.site,s=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},211:function(t){t.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-733db973c04b647de27c.js.map