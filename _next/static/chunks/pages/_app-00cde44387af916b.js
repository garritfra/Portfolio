(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5017:function(e,n,t){"use strict";t.d(n,{ZP:function(){return d},wW:function(){return s}});var r=t(7294),i=t(4298),o=t.n(i),u=t(3454);function s(){return(0,r.useCallback)(function(e,...n){var t,r;return null===(r=(t=window).plausible)||void 0===r?void 0:r.call(t,e,n[0])},[])}let l=(e,...n)=>{var t,r;let i=null!==(t=e.basePath)&&void 0!==t?t:"";return e.subdirectory&&(i+=`/${e.subdirectory}`),`${i}/js/${[null!==(r=e.scriptName)&&void 0!==r?r:"script",...n.sort().filter(e=>null!==e)].join(".")}.js`},a=e=>e?"plausible":"script",c=e=>{var n;return null!==(n=e.customDomain)&&void 0!==n?n:"https://plausible.io"},p=e=>{var n,t;return`${null!==(n=e.basePath)&&void 0!==n?n:""}/${null!==(t=e.subdirectory)&&void 0!==t?t:"proxy"}/api/event${e.trailingSlash?"/":""}`};function d(e){let{enabled:n=!u.env.NEXT_PUBLIC_VERCEL_ENV||"production"===u.env.NEXT_PUBLIC_VERCEL_ENV}=e,t=u.env.next_plausible_proxy?{trailingSlash:"true"===u.env.next_plausible_trailingSlash,basePath:u.env.next_plausible_basePath,customDomain:u.env.next_plausible_customDomain,scriptName:u.env.next_plausible_scriptName,subdirectory:u.env.next_plausible_subdirectory}:void 0;return r.createElement(r.Fragment,null,n&&r.createElement(o(),Object.assign({async:!0,defer:!0,"data-api":t?p(t):void 0,"data-domain":e.domain,"data-exclude":e.exclude,src:(t?"":c(e))+l(Object.assign(Object.assign({},t),{scriptName:t?t.scriptName:a(e.selfHosted)}),e.trackLocalhost?"local":null,e.manualPageviews?"manual":null,e.pageviewProps?"pageview-props":null,e.trackOutboundLinks?"outbound-links":null,e.exclude?"exclusions":null,e.revenue?"revenue":null,e.trackFileDownloads?"file-downloads":null,e.taggedEvents?"tagged-events":null,e.hash?"hash":null),integrity:e.integrity,crossOrigin:e.integrity?"anonymous":void 0},"object"==typeof e.pageviewProps?Object.fromEntries(Object.entries(e.pageviewProps).map(([e,n])=>[`event-${e}`,n])):void 0,e.scriptProps)),n&&r.createElement(o(),{id:"next-plausible-init",dangerouslySetInnerHTML:{__html:"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}}),e.children)}},3454:function(e,n,t){"use strict";var r,i;e.exports=(null==(r=t.g.process)?void 0:r.env)&&"object"==typeof(null==(i=t.g.process)?void 0:i.env)?t.g.process:t(7663)},6840:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(4178)}])},4178:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(5017);t(2458),n.default=function(e){let{Component:n,pageProps:t}=e;return(0,r.jsx)(i.ZP,{domain:"garrit.xyz",customDomain:"https://analytics.slashdev.space",selfHosted:!0,trackOutboundLinks:!0,children:(0,r.jsx)(n,{...t})})}},2458:function(){},7663:function(e){!function(){var n={229:function(e){var n,t,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"==typeof clearTimeout?clearTimeout:u}catch(e){t=u}}();var l=[],a=!1,c=-1;function p(){a&&r&&(a=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!a){var e=s(p);a=!0;for(var n=l.length;n;){for(r=l,l=[];++c<n;)r&&r[c].run();c=-1,n=l.length}r=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===u||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function v(){}i.nextTick=function(e){var n=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new f(e,n)),1!==l.length||a||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}},u=!0;try{n[e](o,o.exports,r),u=!1}finally{u&&delete t[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},4298:function(e,n,t){e.exports=t(5442)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],function(){return n(6840),n(6885)}),_N_E=e.O()}]);