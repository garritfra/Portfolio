(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{2019:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[page]",function(){return n(1968)}])},3664:function(e,t,n){"use strict";var r=n(5893),i=n(3034),s=n(4890),a=n(2549),l=n(7294);let addAnchorTag=e=>{var t;let{node:n,children:r,...i}=e,s=null===(t=n.children[0].value)||void 0===t?void 0:t.replaceAll(" ","-").toLowerCase();return l.createElement(n.tagName,{id:s,children:[r],...i})};t.Z=e=>(0,r.jsx)(i.U,{remarkPlugins:[s.Z],rehypePlugins:[a.Z],components:{h1:addAnchorTag,h2:addAnchorTag,h3:addAnchorTag,h4:addAnchorTag,h5:addAnchorTag,h6:addAnchorTag},children:e.children})},8389:function(e,t,n){"use strict";n.d(t,{Z:function(){return Page}});var r=n(5893),i=n(7294);function Header(e){return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,r.jsx)("div",{className:"header__container",children:(0,r.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,r.jsxs)("ul",{className:"header__links",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/contact",className:"underlined",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/links",className:"underlined",children:"More ..."})})]})]})})}function Footer(){let e=new Date().getFullYear();return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer__content",children:[(0,r.jsx)("h3",{children:"Links of Interest"}),(0,r.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/todo",children:"Todo List"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/guestbook",children:"Guestbook"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/blogroll",children:"Blogroll"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/ctf",children:"Capture the Flag"}),(0,r.jsx)("h3",{children:"Elsewhere"}),(0,r.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,r.jsxs)("p",{children:["\uD83D\uDC7B\xa0Proud member of ",(0,r.jsx)("a",{target:"_blank",href:"https://darktheme.club/",children:"darktheme.club"})," ","\uD83D\uDC7B"]}),(0,r.jsxs)("p",{children:["\xa9 2018-",e," Garrit Franke",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/privacy",children:"Privacy"})," |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://github.com/garritfra/garrit.xyz",children:"Source Code"})]})]})}var s=n(9008),a=n.n(s);function Meta(e){let isClient=()=>!!window,setupPlausible=function(){window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(arguments)},logCtfHint=()=>{console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},pingJurassicPark=()=>{window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,i.useEffect)(()=>{isClient()&&(setupPlausible(),logCtfHint(),pingJurassicPark())},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:e.pageTitle?"".concat(e.pageTitle," | ").concat(e.siteTitle):e.siteTitle}),(0,r.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,r.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,r.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,r.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"})]})})}function Layout(e){let{siteTitle:t,siteDescription:n,pageTitle:i,children:s}=e;return(0,r.jsxs)("section",{className:"layout",children:[(0,r.jsx)(Meta,{siteTitle:t,siteDescription:n,pageTitle:i}),(0,r.jsx)(Header,{siteTitle:t}),(0,r.jsx)("div",{className:"content",children:s}),(0,r.jsx)(Footer,{})]})}var l=n(4298),o=n.n(l);function Page(e){let{title:t,date:n,siteTitle:s}=e,setupEditHook=()=>{window.addEventListener("keypress",e=>{if("."===e.key){let e=window.location.pathname,t="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(e,".md");window.location.href=t}})};return(0,i.useEffect)(()=>{setupEditHook()},[]),(0,r.jsxs)(Layout,{siteTitle:s,pageTitle:t,siteDescription:void 0,children:[(0,r.jsxs)("article",{className:"page h-entry",children:[t&&(0,r.jsxs)("div",{className:"page__info",children:[(0,r.jsx)("h1",{className:"p-name",children:t}),n&&(0,r.jsx)("time",{className:"page__info__date",children:n})]}),(0,r.jsx)("div",{className:"page__body e-content",children:e.children})]}),(0,r.jsx)(o(),{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})}},1968:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a},default:function(){return PageTemplate}});var r=n(5893),i=n(8389),s=n(3664),a=!0;function PageTemplate(e){if(!e.frontmatter)return(0,r.jsx)(r.Fragment,{});let t=e.frontmatter.siteTitle||e.siteTitle;return(0,r.jsx)(i.Z,{title:e.frontmatter.title,siteTitle:t,children:(0,r.jsx)(s.Z,{children:e.markdownBody})})}},9008:function(e,t,n){e.exports=n(9201)}},function(e){e.O(0,[939,774,888,179],function(){return e(e.s=2019)}),_N_E=e.O()}]);