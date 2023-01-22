(()=>{"use strict";var e,n,r,t,o,a,i,c,s,p,u,d,l,f,h={28:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),c=r(667),s=r.n(c),p=new URL(r(485),r.b),u=i()(o()),d=s()(p);u.push([e.id,"*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dark-lightGray: #282828;\n    --dark-darkGray: #1f1f1f;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: url("+d+");\n}\n\n#content {\n    width: 85vw;\n    height: 85vh;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    /* border: 3px solid red; */\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    grid-template-rows: min-content;\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);;\n}\n\n#headerBar {\n    grid-column: 1 / span 2;\n    height: 40px;\n    border-bottom: 2px solid blueviolet;\n}\n\n#headerBar,\n#sideBar {\n    background-color: var(--dark-lightGray);\n}\n\n#mainBody {\n    background-color: var(--dark-darkGray);\n}",""]);const l=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],p=t.base?s[0]+t.base:s[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),p=0;p<a.length;p++){var u=r(a[p]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},485:(e,n,r)=>{e.exports=r.p+"images/forest.jpg"}},v={};function g(e){var n=v[e];if(void 0!==n)return n.exports;var r=v[e]={id:e,exports:{}};return h[e](r,r.exports,g),r.exports}g.m=h,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var r in n)g.o(n,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),n=g.n(e),r=g(795),t=g.n(r),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),p=g.n(s),u=g(589),d=g.n(u),l=g(28),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=p(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals})();