(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var r=n(0),o=n.n(r),a=n(132),i=n(223),u=n.n(i),c=n(209),f=n(210);e.default=function(t){var e=t.location,n=t.data,r=n.allMarkdownRemark.group,i=n.site.siteMetadata.title;return o.a.createElement(c.a,{location:e,title:i},o.a.createElement(f.a,{title:"tags"}),o.a.createElement("div",{className:"nes-container with-title"},o.a.createElement("h1",{className:"title"},"Tags"),o.a.createElement("ul",null,r.map(function(t){return o.a.createElement("li",{key:t.fieldValue},o.a.createElement(a.Link,{to:"/tags/"+u()(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))}))))};var l="3450235017"},209:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(132);n(202);e.a=function(t){var e=t.children;return o.a.createElement("div",{style:{marginBottom:"2%"}},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"5%",marginBottom:"50px"}},o.a.createElement("main",null,e)),o.a.createElement("footer",{className:"nes-container is-dark",style:{display:"flex",position:"fixed",flexDirection:"row-reverse",justifyContent:"space-between",height:"60px",bottom:0,width:"100%",margin:0,padding:5}},o.a.createElement("div",{style:{display:"flex",alignSelf:"center",alignContent:"center",justifyContent:"space-between"}},o.a.createElement(a.Link,{style:{boxShadow:0,color:"white",textDecoration:"none",marginRight:"20px"},to:"/"},"HOME"),o.a.createElement("button",{style:{color:"white",backgroundColor:"transparent",border:0},onClick:function(){return window.history.back()}},"BACK")),o.a.createElement("div",{className:"nes-field",style:{alignSelf:"center",width:"50%"}},o.a.createElement("input",{className:"nes-input",type:"text",name:"search",placeholder:"Search"}))))}},210:function(t,e,n){"use strict";var r=n(211),o=n(0),a=n.n(o),i=n(212),u=n.n(i);function c(t){var e=t.description,n=t.lang,o=t.meta,i=t.title,c=r.data.site,f=e||c.siteMetadata.description;return a.a.createElement(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:i},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:f}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},211:function(t){t.exports={data:{site:{siteMetadata:{title:"Recipes",description:"Store house for recipes I like",author:"Brooks Becton"}}}}},214:function(t,e,n){var r=n(230).Symbol;t.exports=r},217:function(t,e,n){var r=n(229);t.exports=function(t){return null==t?"":r(t)}},223:function(t,e,n){var r=n(224)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},224:function(t,e,n){n(17),n(213);var r=n(225),o=n(226),a=n(239),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(i,"")),t,"")}}},225:function(t,e){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},226:function(t,e,n){n(17),n(213);var r=n(227),o=n(217),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(i,"")}},227:function(t,e,n){var r=n(228)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},228:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},229:function(t,e,n){n(68),n(94),n(16);var r=n(214),o=n(232),a=n(233),i=n(234),u=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}},230:function(t,e,n){var r=n(231),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},231:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(215))},232:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},233:function(t,e,n){n(69);var r=Array.isArray;t.exports=r},234:function(t,e,n){var r=n(235),o=n(238),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},235:function(t,e,n){var r=n(214),o=n(236),a=n(237),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:i:c&&c in Object(t)?o(t):a(t)}},236:function(t,e,n){n(68),n(94),n(16);var r=n(214),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(c){}var o=i.call(t);return r&&(e?t[u]=n:delete t[u]),o}},237:function(t,e,n){n(68),n(94),n(16);var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},238:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},239:function(t,e,n){n(133);var r=n(240),o=n(241),a=n(217),i=n(242);t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?i(t):r(t):t.match(e)||[]}},240:function(t,e,n){n(133);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},241:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},242:function(t,e,n){n(133),n(213);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+u+"|"+c+")",p="(?:"+s+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,l].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),g="(?:"+[i,f,l].join("|")+")"+m,v=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,g].join("|"),"g");t.exports=function(t){return t.match(v)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-050e4711baf5f5d4e087.js.map