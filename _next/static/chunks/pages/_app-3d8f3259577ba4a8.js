(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5017:function(n,t,e){"use strict";e.d(t,{ZP:function(){return f},wW:function(){return p}});var r=e(7294),i=e(9008),o=e(1752);e(3454);const u=(n,...t)=>{var e;const r=`/js/${[null!==(e=n.scriptName)&&void 0!==e?e:"script",...t.sort().filter((n=>null!==n))].join(".")}.js`;return n.subdirectory?`/${n.subdirectory}${r}`:r},c="https://plausible.io",s=(n,t)=>t||n===c?"plausible":"index",l=n=>{var t;return null!==(t=n.customDomain)&&void 0!==t?t:c},a=n=>{var t;return`/${null!==(t=n.subdirectory)&&void 0!==t?t:"proxy"}/api/event`};function f(n){var t,e;const{enabled:c=!0}=n,f=l(n),p=null===(e=null===(t=(0,o.default)())||void 0===t?void 0:t.publicRuntimeConfig)||void 0===e?void 0:e.nextPlausibleProxyOptions;return r.createElement(r.Fragment,null,r.createElement(i.default,null,c&&r.createElement("script",Object.assign({async:!0,defer:!0,"data-api":p?a(p):void 0,"data-domain":n.domain,"data-exclude":n.exclude,src:(p?"":f)+u(Object.assign(Object.assign({},p),{scriptName:p?p.scriptName:s(f,n.selfHosted)}),n.trackLocalhost?"local":null,n.manualPageviews?"manual":null,n.trackOutboundLinks?"outbound-links":null,n.exclude?"exclusions":null),integrity:n.integrity,crossOrigin:n.integrity?"anonymous":void 0},n.scriptProps)),c&&r.createElement("script",{dangerouslySetInnerHTML:{__html:"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}})),n.children)}function p(){return(0,r.useCallback)((function(n,...t){var e,r;return null===(r=(e=window).plausible)||void 0===r?void 0:r.call(e,n,t[0])}),[])}},1752:function(n,t,e){n.exports=e(8027)},3454:function(n,t,e){"use strict";var r,i;n.exports=(null===(r=e.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(i=e.g.process)||void 0===i?void 0:i.env)?e.g.process:e(7663)},1780:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(8510)}])},8510:function(n,t,e){"use strict";e.r(t);var r=e(5893),i=e(5017);e(5482);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}t.default=function(n){var t=n.Component,e=n.pageProps;return(0,r.jsxs)(i.ZP,{domain:"garrit.xyz",customDomain:"https://analytics.slashdev.space",trackOutboundLinks:!0,children:[(0,r.jsx)(t,u({},e)),";"]})}},5482:function(){},7663:function(n){!function(){var t={162:function(n){var t,e,r=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(r){try{return t.call(null,n,0)}catch(r){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(n){t=i}try{e="function"===typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&p())}function p(){if(!l){var n=u(f);l=!0;for(var t=s.length;t;){for(c=s,s=[];++a<t;)c&&c[a].run();a=-1,t=s.length}c=null,l=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(t){try{return e.call(null,n)}catch(t){return e.call(this,n)}}}(n)}}function d(n,t){this.fun=n,this.array=t}function v(){}r.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new d(n,t)),1!==s.length||l||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}},u=!0;try{t[n](o,o.exports,r),u=!1}finally{u&&delete e[n]}return o.exports}r.ab="//";var i=r(162);n.exports=i}()},9008:function(n,t,e){n.exports=e(5443)}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(1780),t(387)}));var e=n.O();_N_E=e}]);