(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});a(14);var r=a(0),i=a.n(r),n=a(204),o=(a(215),a(207)),s=a(208),l=a(205);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props.data.markdownRemark,a=this.props.data.site.siteMetadata.title,r=this.props.pageContext;r.previous,r.next;return i.a.createElement(o.a,{location:this.props.location,title:a},i.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:Object.assign({},Object(l.b)(.8),(e={marginBottom:Object(l.a)(1.5)},e.marginBottom=0,e))},t.frontmatter.title),i.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexDirection:"row",margin:0}},this.props.data.markdownRemark.frontmatter.tags.map(function(e,t,a){return i.a.createElement("li",{key:e,style:{border:"none",paddingLeft:0===t?0:10}},i.a.createElement(n.a,{to:"tags/"+e}," "+e+(t===a.length-1?"":", ")+" "))}))),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}})))},r}(i.a.Component);t.default=d;var c="181058792"},203:function(e,t,a){var r;e.exports=(r=a(206))&&r.default||r},204:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(203),a(9).default.enqueue,i.a.createContext({})},205:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(211),i=a.n(r),n=a(213),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"h1,h2,h3,h4,h5":{fontFamily:"Josefin Slab",fontStyle:"italic"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},206:function(e,t,a){"use strict";a.r(t);a(14);var r=a(0),i=a.n(r),n=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=(a(204),a(205));var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(24),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(i.a.Component);t.a=o},208:function(e,t,a){"use strict";var r=a(209),i=a(0),n=a.n(i),o=a(214),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}},210:function(e,t,a){"use strict";a(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},215:function(e,t,a){"use strict";a(210);var r=a(217),i=a(0),n=a.n(i),o=a(218),s=a.n(o),l=a(205);t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}))}},216:function(e,t,a){var r=a(1),i=a(7),n=a(33),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},217:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEAQIF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAABl05M+HfUA64tPID/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAERIgIv/aAAgBAQABBQKlSrWr6xnYlRs8h0//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BK//EABcRAAMBAAAAAAAAAAAAAAAAAAAQERL/2gAIAQIBAT8Bhl//xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIREjEgITJRYf/aAAgBAQAGPwKDXQrZPc5VPCreDOj/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMVEQQWH/2gAIAQEAAT8hduhoxQb47MAFfq5kS5YOT2jG3kAKYJrS+P/aAAwDAQACAAMAAAAQ38d//8QAFhEBAQEAAAAAAAAAAAAAAAAAESAx/9oACAEDAQE/EFyP/8QAGREAAQUAAAAAAAAAAAAAAAAAABARITFx/9oACAECAQE/EI2ZGT//xAAcEAEAAwEBAAMAAAAAAAAAAAABABEhMVFBcZH/2gAIAQEAAT8QtJFZx+f2US7XWPlclCKBqWsvjAkHIzXceo/abg1yl5FjG1YNCryZ4T//2Q==",width:50,height:50,src:"/recipes/static/568f68e3ad4ef3378499ace8bc4dfda8/9b664/profile-pic.jpg",srcSet:"/recipes/static/568f68e3ad4ef3378499ace8bc4dfda8/9b664/profile-pic.jpg 1x,\n/recipes/static/568f68e3ad4ef3378499ace8bc4dfda8/06a10/profile-pic.jpg 1.5x,\n/recipes/static/568f68e3ad4ef3378499ace8bc4dfda8/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Brooks Becton",social:{twitter:"yaboibrooks"}}}}}},218:function(e,t,a){"use strict";a(23),a(24),a(13),a(94),a(132),a(210);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(69)),o=r(a(71)),s=r(a(135)),l=r(a(136)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(B,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},B=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:x?1:0,transition:O?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&C,s,f),k={title:t,alt:this.state.isVisible?"":a,style:M,className:A};if(p){var N=p,T=N[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&C)}),T.base64&&d.default.createElement(R,{src:T.base64,spreadProps:k,imageVariants:N,generateSources:v}),T.tracedSVG&&d.default.createElement(R,{src:T.tracedSVG,spreadProps:k,imageVariants:N,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(N),d.default.createElement(B,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:N}))}}))}if(g){var V=g,P=V[0],Y=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete Y.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&C)}),P.base64&&d.default.createElement(R,{src:P.base64,spreadProps:k,imageVariants:V,generateSources:v}),P.tracedSVG&&d.default.createElement(R,{src:P.tracedSVG,spreadProps:k,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(B,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:V}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:O,sizes:L,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=x;t.default=Q}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-55646bb01e0a318c227d.js.map