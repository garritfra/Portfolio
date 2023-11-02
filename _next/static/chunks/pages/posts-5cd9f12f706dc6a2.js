(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5794:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return s(8187)}])},5563:function(e,t,s){"use strict";var i=s(5893),r=s(1664),n=s.n(r),a=s(5017);t.Z=e=>{let{posts:t}=e;(0,a.wW)();let isPublicPost=e=>!e.slug.startsWith("_"),s=t.filter(isPublicPost),reformatDate=e=>{let t=new Date(e);return t.toDateString().slice(4)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:s.length>0&&s.filter(isPublicPost).map(e=>(0,i.jsxs)("div",{className:"blog__list__post",children:[(0,i.jsx)("time",{className:"blog__list__post__date",children:reformatDate(e.frontmatter.date)}),(0,i.jsx)("br",{}),(0,i.jsx)(n(),{href:"/posts/".concat(e.slug),children:e.frontmatter.title})]},e.slug))})})}},8389:function(e,t,s){"use strict";s.d(t,{Z:function(){return Page}});var i=s(5893),r=s(7294);function Header(e){return(0,i.jsx)("header",{className:"header",children:(0,i.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,i.jsx)("div",{className:"header__container",children:(0,i.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,i.jsxs)("ul",{className:"header__links",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/cv",className:"underlined",children:"Resume"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/links",className:"underlined",children:"More ..."})})]})]})})}function Footer(){let e=new Date().getFullYear();return(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsxs)("div",{className:"footer__content",children:[(0,i.jsx)("h3",{children:"Links of Interest"}),(0,i.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/todo",children:"Todo List"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/guestbook",children:"Guestbook"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/blogroll",children:"Blogroll"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/ctf",children:"Capture the Flag"}),(0,i.jsx)("h3",{children:"Elsewhere"}),(0,i.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,i.jsxs)("p",{children:["\uD83D\uDC7B\xa0Proud member of ",(0,i.jsx)("a",{target:"_blank",href:"https://darktheme.club/",children:"darktheme.club"})," ","\uD83D\uDC7B"]}),(0,i.jsxs)("p",{children:["\xa9 2018-",e," Garrit Franke",(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/privacy",children:"Privacy"})," |"," ",(0,i.jsx)("a",{target:"_blank",href:"https://github.com/garritfra/garrit.xyz",children:"Source Code"})]})]})}var n=s(9008),a=s.n(n);function Meta(e){let isClient=()=>!!window,setupPlausible=function(){window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(arguments)},logCtfHint=()=>{console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},pingJurassicPark=()=>{window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,r.useEffect)(()=>{isClient()&&(setupPlausible(),logCtfHint(),pingJurassicPark())},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a(),{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("title",{children:e.pageTitle?"".concat(e.pageTitle," | ").concat(e.siteTitle):e.siteTitle}),(0,i.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,i.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,i.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,i.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"})]})})}function Layout(e){let{siteTitle:t,siteDescription:s,pageTitle:r,children:n}=e;return(0,i.jsxs)("section",{className:"layout",children:[(0,i.jsx)(Meta,{siteTitle:t,siteDescription:s,pageTitle:r}),(0,i.jsx)(Header,{siteTitle:t}),(0,i.jsx)("div",{className:"content",children:n}),(0,i.jsx)(Footer,{})]})}var l=s(4298),o=s.n(l);function Page(e){let{title:t,date:s,siteTitle:n}=e,setupEditHook=()=>{window.addEventListener("keypress",e=>{if("."===e.key){let e=window.location.pathname,t="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(e,".md");window.location.href=t}})};return(0,r.useEffect)(()=>{setupEditHook()},[]),(0,i.jsxs)(Layout,{siteTitle:n,pageTitle:t,siteDescription:void 0,children:[(0,i.jsxs)("article",{className:"page h-entry",children:[t&&(0,i.jsxs)("div",{className:"page__info",children:[(0,i.jsx)("h1",{className:"p-name",children:t}),s&&(0,i.jsx)("time",{className:"page__info__date",children:s})]}),(0,i.jsx)("div",{className:"page__body e-content",children:e.children})]}),(0,i.jsx)(o(),{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})}},8187:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return l}});var i=s(5893),r=s(1163),n=s(5563),a=s(8389),l=!0;t.default=e=>{var t;let{query:s}=(0,r.useRouter)(),l="string"==typeof s.tags?null==s?void 0:s.tags:null===(t=s.tags)||void 0===t?void 0:t[0],o=s.tags?e.posts.filter(e=>e.tags.map(e=>e.toLowerCase()).includes(l.toLowerCase())):e.posts;return(0,i.jsxs)(a.Z,{siteTitle:"Garrit's Notes",children:[(()=>{let e=Math.floor(Math.random()*o.length),t=o[e],s="/posts/".concat(null==t?void 0:t.slug);return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:s,onClick:()=>window.plausible("random_post_clicked"),children:"✨ Random Post ✨"})})})(),(0,i.jsx)("hr",{}),(0,i.jsx)(n.Z,{posts:o})]})}},1163:function(e,t,s){e.exports=s(9974)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=5794)}),_N_E=e.O()}]);