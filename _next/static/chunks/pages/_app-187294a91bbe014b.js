(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3121:function(e,t,n){"use strict";n.d(t,{ZP:function(){return PlausibleProvider},wW:function(){return usePlausible}});var r=n(7294),i=n(4298),o=n.n(i),u=n(3454);function usePlausible(){return(0,r.useCallback)(function(e,...t){var n,r;return null===(r=(n=window).plausible)||void 0===r?void 0:r.call(n,e,t[0])},[])}let getScriptPath=(e,...t)=>{var n,r;let i=null!==(n=e.basePath)&&void 0!==n?n:"";return e.subdirectory&&(i+=`/${e.subdirectory}`),`${i}/js/${[null!==(r=e.scriptName)&&void 0!==r?r:"script",...t.sort().filter(e=>null!==e)].join(".")}.js`},getRemoteScriptName=e=>e?"plausible":"script",getDomain=e=>{var t;return null!==(t=e.customDomain)&&void 0!==t?t:"https://plausible.io"},getApiEndpoint=e=>{var t,n;return`${null!==(t=e.basePath)&&void 0!==t?t:""}/${null!==(n=e.subdirectory)&&void 0!==n?n:"proxy"}/api/event${e.trailingSlash?"/":""}`};function PlausibleProvider(e){let{enabled:t=!u.env.NEXT_PUBLIC_VERCEL_ENV||"production"===u.env.NEXT_PUBLIC_VERCEL_ENV}=e,n=u.env.next_plausible_proxy?{trailingSlash:"true"===u.env.next_plausible_trailingSlash,basePath:u.env.next_plausible_basePath,customDomain:u.env.next_plausible_customDomain,scriptName:u.env.next_plausible_scriptName,subdirectory:u.env.next_plausible_subdirectory}:void 0;return r.createElement(r.Fragment,null,t&&r.createElement(o(),Object.assign({async:!0,defer:!0,"data-api":n?getApiEndpoint(n):void 0,"data-domain":e.domain,"data-exclude":e.exclude,src:(n?"":getDomain(e))+getScriptPath(Object.assign(Object.assign({},n),{scriptName:n?n.scriptName:getRemoteScriptName(e.selfHosted)}),e.trackLocalhost?"local":null,e.manualPageviews?"manual":null,e.pageviewProps?"pageview-props":null,e.trackOutboundLinks?"outbound-links":null,e.exclude?"exclusions":null,e.revenue?"revenue":null,e.trackFileDownloads?"file-downloads":null,e.taggedEvents?"tagged-events":null,e.hash?"hash":null),integrity:e.integrity,crossOrigin:e.integrity?"anonymous":void 0},"object"==typeof e.pageviewProps?Object.fromEntries(Object.entries(e.pageviewProps).map(([e,t])=>[`event-${e}`,t])):void 0,e.scriptProps)),t&&r.createElement(o(),{id:"next-plausible-init",dangerouslySetInnerHTML:{__html:"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}}),e.children)}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4496)}])},4496:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(3121);n(3975),t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(i.ZP,{domain:"garrit.xyz",customDomain:"https://analytics.slashdev.space",selfHosted:!0,trackOutboundLinks:!0,children:(0,r.jsx)(t,{...n})})}},3975:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var o=[],u=!1,a=-1;function cleanUpNextTick(){u&&r&&(u=!1,r.length?o=r.concat(o):a=-1,o.length&&drainQueue())}function drainQueue(){if(!u){var e=runTimeout(cleanUpNextTick);u=!0;for(var t=o.length;t;){for(r=o,o=[];++a<t;)r&&r[a].run();a=-1,t=o.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new Item(e,t)),1!==o.length||u||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete n[e]}return i.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},4298:function(e,t,n){e.exports=n(7616)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(8355)}),_N_E=e.O()}]);