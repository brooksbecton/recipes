(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(0),r=n.n(a),o=n(132),i=n(211),l=n(212),c=n(210);var s=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges,a=t.allMarkdownRemark.group||[];return r.a.createElement(i.a,{location:this.props.location,title:e},r.a.createElement(l.a,{title:"All posts"}),r.a.createElement("h2",null,"Recent Recipes"),r.a.createElement("ul",null,n.slice(0,9).map(function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return r.a.createElement("li",null,r.a.createElement("article",{key:e.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,marginBottom:Object(c.a)(.5)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)))))})),r.a.createElement(o.Link,{style:{boxShadow:"none"},to:"tags/"},r.a.createElement("h2",null,"Tags")),r.a.createElement("ul",null,a.slice(0,9).map(function(t){var e=t.fieldValue,n=t.totalCount,a=e,i="tags/"+a;return r.a.createElement("li",null,r.a.createElement("article",{key:i},r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,marginBottom:Object(c.a)(.5)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:i},a," (",n,")")))))})))},a}(r.a.Component);e.default=s;var u="2330217617"},210:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var a=n(214),r=n.n(a),o=n(216),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"h1,h2,h3,h4,h5":{fontFamily:"Josefin Slab",fontStyle:"italic"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,s=l.scale},211:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(210);var i=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:"0 "+Object(o.a)(1.5)}},r.a.createElement("main",null,t),r.a.createElement("footer",null))},a}(r.a.Component);e.a=i},212:function(t,e,n){"use strict";var a=n(213),r=n(0),o=n.n(r),i=n(217),l=n.n(i);function c(t){var e=t.description,n=t.lang,r=t.meta,i=t.title,c=a.data.site,s=e||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},213:function(t){t.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-882ea5891cd88f6cc5b7.js.map