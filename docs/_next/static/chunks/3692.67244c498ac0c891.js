"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3692,2622,9655,1956],{91769:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(85893),r=a(67294),s=a(23273),l=a.n(s),i=a(24955),o=a.n(i),c=a(2375),d=a(41664),u=a.n(d),f=a(83083),m=a(23493),h=a.n(m);function x(e){let{cRef:t}=e,[a,s]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1),[u,f]=(0,r.useState)(0),[m,x]=(0,r.useState)(null),[y,b]=(0,r.useState)(0),[j,g]=(0,r.useState)(0),[w,k]=(0,r.useState)(0);(0,r.useImperativeHandle)(t,()=>({openSearch:()=>{d(!0)}}));let N=o()(l().ALGOLIA_APP_ID,l().ALGOLIA_SEARCH_ONLY_APP_KEY),A=N.initIndex(l().ALGOLIA_INDEX),E=async(e,t)=>{if(x(e),f(t),s([]),k(0),b(0),g(0),e&&""!==e)try{let a=await A.search(e,{page:t,hitsPerPage:10}),{hits:n,nbHits:r,nbPages:l,processingTimeMS:i}=a;k(i),b(l),g(r),s(n);let o=document.getElementById("search-wrapper").getElementsByClassName("replace");setTimeout(()=>{(0,c.Z)({doms:o,search:e,target:{element:"span",className:"text-blue-600 border-b border-dashed"}})},150)}catch(e){console.error("Algolia search error:",e)}},S=(0,r.useRef)(h()(E,300)),_=e=>{let t=e.target.value;S.current(t,0)},C=e=>{S.current(m,e)},I=()=>{d(!1)};return l().ALGOLIA_APP_ID?(0,n.jsxs)("div",{id:"search-wrapper",className:"".concat(i?"opacity-100":"invisible opacity-0 pointer-events-none"," z-30 fixed h-screen w-screen left-0 top-0 mt-12 flex items-start justify-center"),children:[(0,n.jsxs)("div",{className:"".concat(i?"opacity-100":"invisible opacity-0 translate-y-10"," flex flex-col justify-between w-full min-h-[10rem] max-w-xl dark:bg-hexo-black-gray dark:border-gray-800 bg-white dark:bg- p-5 rounded-lg z-50 shadow border hover:border-blue-600 duration-300 transition-all "),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"text-2xl text-blue-600 font-bold",children:"搜索"}),(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"text-gray-600 fa-solid fa-xmark p-1 cursor-pointer hover:text-blue-600",onClick:I})})]}),(0,n.jsx)("input",{type:"text",placeholder:"在这里输入搜索关键词...",onChange:e=>_(e),className:"text-black dark:text-gray-200 bg-gray-50 dark:bg-gray-600 outline-blue-500 w-full px-4 my-2 py-1 mb-4 border rounded-md"}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(v,{})}),(0,n.jsx)("ul",{children:a.map(e=>(0,n.jsx)("li",{className:"replace my-2",children:(0,n.jsx)("a",{href:"".concat(l().SUB_PATH,"/").concat(e.slug),className:"font-bold hover:text-blue-600 text-black dark:text-gray-200",children:e.title})},e.objectID))}),(0,n.jsx)(p,{totalPage:y,page:u,switchPage:C}),(0,n.jsx)("div",{children:j>0&&(0,n.jsxs)("div",{children:["共搜索到 ",j," 条结果，用时 ",w," 毫秒"]})}),(0,n.jsxs)("div",{className:"text-gray-600 mt-2",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa-brands fa-algolia"})," Algolia 提供搜索服务"]})," "]})]}),(0,n.jsx)("div",{onClick:I,className:"z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism"})]}):(0,n.jsx)(n.Fragment,{})}function v(e){let{tagOptions:t}=(0,f.O)(),a=null==t?void 0:t.slice(0,10);return(0,n.jsx)("div",{id:"tags-group",className:"dark:border-gray-700 space-y-2",children:null==a?void 0:a.map((e,t)=>(0,n.jsx)(u(),{passHref:!0,href:"/tag/".concat(encodeURIComponent(e.name)),className:"cursor-pointer inline-block whitespace-nowrap",children:(0,n.jsxs)("div",{className:" flex items-center text-black dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-yellow-600 hover:scale-110 hover:text-white rounded-lg px-2 py-0.5 duration-150 transition-all",children:[(0,n.jsxs)("div",{className:"text-lg",children:[e.name," "]}),e.count?(0,n.jsx)("sup",{className:"relative ml-1",children:e.count}):(0,n.jsx)(n.Fragment,{})]})},t))})}function p(e){let{totalPage:t,page:a,switchPage:r}=e;if(t<=0)return(0,n.jsx)(n.Fragment,{});let s=[];for(let e=0;e<t;e++){let t=a===e;s.push(function(e,t,a){return(0,n.jsx)("div",{onClick:()=>a(e),className:"".concat(t?"font-bold text-white bg-blue-600 rounded":"hover:text-blue-600 hover:font-bold"," text-center cursor-pointer  w-6 h-6 "),children:e+1})}(e,t,r))}return(0,n.jsx)("div",{className:"flex space-x-1 w-full justify-center py-1",children:s.map(e=>e)})}},7749:function(e,t,a){a.r(t);var n=a(85893),r=a(83083),s=a(66766),l=a(89120),i=a(67294);let o=e=>{let{cRef:t,className:a}=e,{isDarkMode:o,updateDarkMode:c}=(0,r.O)();(0,i.useImperativeHandle)(t,()=>({handleChangeDarkMode:()=>{d()}}));let d=()=>{var e,t;let a=!o;(0,s.saveDarkModeToCookies)(a),c(a);let n=document.getElementsByTagName("html")[0];null===(e=n.classList)||void 0===e||e.remove(a?"light":"dark"),null===(t=n.classList)||void 0===t||t.add(a?"dark":"light")};return(0,n.jsx)("div",{onClick:d,className:"".concat(a||""," cursor-pointer hover: scale-100 hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all"),children:(0,n.jsxs)("div",{id:"darkModeButton",className:" cursor-pointer hover: scale-50 w-10 h-10 ",children:[" ",o?(0,n.jsx)(l.kO,{}):(0,n.jsx)(l.JF,{})]})})};t.default=o},99699:function(e,t,a){a.r(t);var n=a(85893),r=a(23273),s=a.n(r),l=a(89120),i=a(99219),o=a(41664),c=a.n(o);a(67294);let d=e=>{let{siteInfo:t}=e;return(0,n.jsx)(c(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,n.jsxs)("div",{className:"flex flex-nowrap justify-center items-center cursor-pointer font-extrabold",children:[(0,n.jsx)(i.Z,{src:null==t?void 0:t.icon,width:24,height:24,alt:s().AUTHOR,className:"mr-4 hidden md:block"}),(0,n.jsxs)("div",{id:"logo-text",className:"group rounded-2xl flex-none relative",children:[(0,n.jsx)("div",{className:"group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200",children:(null==t?void 0:t.title)||s().TITLE}),(0,n.jsx)("div",{className:"flex justify-center rounded-2xl group-hover:bg-indigo-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200",children:(0,n.jsx)(l.SK,{className:"w-6 h-6 stroke-white stroke-2 "})})]})]})})};t.default=d},62622:function(e,t,a){a.r(t),a.d(t,{MenuItemDrop:function(){return i}});var n=a(85893),r=a(41664),s=a.n(r),l=a(67294);let i=e=>{var t,a;let{link:r}=e,[i,o]=(0,l.useState)(!1),c=(null==r?void 0:null===(t=r.subMenus)||void 0===t?void 0:t.length)>0;return r&&r.show?(0,n.jsxs)("div",{onMouseOver:()=>o(!0),onMouseOut:()=>o(!1),children:[!c&&(0,n.jsxs)(s(),{target:(null==r?void 0:null===(a=r.to)||void 0===a?void 0:a.indexOf("http"))===0?"_blank":"_self",href:null==r?void 0:r.to,className:"font-sans hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest",children:[(null==r?void 0:r.icon)&&(0,n.jsx)("i",{className:null==r?void 0:r.icon})," ",null==r?void 0:r.name]}),c&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"cursor-pointer font-sans hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest",children:[(null==r?void 0:r.icon)&&(0,n.jsx)("i",{className:null==r?void 0:r.icon})," ",null==r?void 0:r.name]})}),c&&(0,n.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(i?"visible opacity-100 top-14":"invisible opacity-0 top-20"," drop-shadow-md overflow-hidden rounded-xl bg-white transition-all duration-300 z-20 absolute"),children:r.subMenus.map((e,t)=>{var a;return(0,n.jsx)("li",{className:"cursor-pointer hover:bg-blue-600 hover:text-white text-gray-900  tracking-widest transition-all duration-200 dark:border-gray-700  py-1 pr-6 pl-3",children:(0,n.jsx)(s(),{href:e.to,target:(null==r?void 0:null===(a=r.to)||void 0===a?void 0:a.indexOf("http"))===0?"_blank":"_self",children:(0,n.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==r?void 0:r.icon)&&(0,n.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t)})})]}):null}},32550:function(e,t,a){a.r(t),a.d(t,{MenuListTop:function(){return c}});var n=a(85893);a(67294);var r=a(83083),s=a(68773),l=a(23273),i=a.n(l),o=a(62622);let c=e=>{let{customNav:t,customMenu:a}=e,{locale:l}=(0,r.O)(),c=[{id:1,icon:"fa-solid fa-house",name:l.NAV.INDEX,to:"/",show:s.default.MENU_INDEX},{id:2,icon:"fas fa-search",name:l.NAV.SEARCH,to:"/search",show:s.default.MENU_SEARCH},{id:3,icon:"fas fa-archive",name:l.NAV.ARCHIVE,to:"/archive",show:s.default.MENU_ARCHIVE}];return(t&&(c=c.concat(t)),i().CUSTOM_MENU&&(c=a),c&&0!==c.length)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{id:"nav-mobile",className:"leading-8 justify-center font-light w-full flex",children:null==c?void 0:c.map(e=>e&&e.show&&(0,n.jsx)(o.MenuItemDrop,{link:e},null==e?void 0:e.id))})}):null}},33692:function(e,t,a){a.r(t);var n=a(85893),r=a(36465),s=a.n(r),l=a(67294),i=a(99699),o=a(93096),c=a.n(o),d=a(99655),u=a(21956),f=a(7749),m=a(50354),h=a(26558),x=a(32550),v=a(94246),p=a(23273),y=a.n(p);let b=e=>{let[t,a]=(0,l.useState)(!1),[r,o]=(0,l.useState)(!1),[p,b]=(0,l.useState)(!1),[j,g]=(0,l.useState)(0),w=(0,l.useRef)(),k=()=>{var e;null==w||null===(e=w.current)||void 0===e||e.toggleSlideOvers()},N=(0,l.useCallback)(c()(()=>{let e=window.scrollY;e<=0?(a(!1),b(!1),document.querySelector("#post-bg")&&(a(!0),o(!0),b(!1))):(a(!0),o(!1),b(!0))},200));return(0,l.useEffect)(()=>(N(),window.addEventListener("scroll",N),()=>{window.removeEventListener("scroll",N)}),[]),(0,l.useEffect)(()=>{let e=0,t=!1,a=()=>{t||(window.requestAnimationFrame(()=>{let a=window.scrollY;a>e?g(1):g(0),e=a,t=!1}),t=!0)};return v.jU&&window.addEventListener("scroll",a),()=>{v.jU&&window.removeEventListener("scroll",a)}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{id:"46a4f6ec6f7b253d",children:"@-webkit-keyframes fade-in-down{0%{opacity:.5;-webkit-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fade-in-down{0%{opacity:.5;-moz-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fade-in-down{0%{opacity:.5;-o-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fade-in-down{0%{opacity:.5;-webkit-transform:translatey(-30%);-moz-transform:translatey(-30%);-o-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes fade-in-up{0%{opacity:.5;-webkit-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fade-in-up{0%{opacity:.5;-moz-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fade-in-up{0%{opacity:.5;-o-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fade-in-up{0%{opacity:.5;-webkit-transform:translatey(30%);-moz-transform:translatey(30%);-o-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.fade-in-down.jsx-46a4f6ec6f7b253d{-webkit-animation:fade-in-down.3s ease-in-out;-moz-animation:fade-in-down.3s ease-in-out;-o-animation:fade-in-down.3s ease-in-out;animation:fade-in-down.3s ease-in-out}.fade-in-up.jsx-46a4f6ec6f7b253d{-webkit-animation:fade-in-up.3s ease-in-out;-moz-animation:fade-in-up.3s ease-in-out;-o-animation:fade-in-up.3s ease-in-out;animation:fade-in-up.3s ease-in-out}"}),(0,n.jsx)("nav",{id:"nav",className:"jsx-46a4f6ec6f7b253d "+"".concat(t?"fixed":"relative bg-none"," ").concat(r?"text-white ":"text-black dark:text-white","  ").concat(p?"bg-white dark:bg-[#18171d]":"bg-none"," z-20 h-16 top-0 w-full"),children:(0,n.jsxs)("div",{className:"jsx-46a4f6ec6f7b253d flex h-full mx-auto justify-between items-center max-w-[86rem] px-8",children:[(0,n.jsx)("div",{className:"jsx-46a4f6ec6f7b253d flex",children:(0,n.jsx)(i.default,{...e})}),(0,n.jsxs)("div",{id:"nav-bar-swipe",className:"jsx-46a4f6ec6f7b253d "+"hidden lg:flex flex-grow flex-col items-center justify-center h-full relative w-full ".concat(0===j?"fade-in-down":"fade-in-up"),children:[0===j&&(0,n.jsx)(x.MenuListTop,{...e}),1===j&&(0,n.jsxs)("h1",{className:"jsx-46a4f6ec6f7b253d font-bold text-center text-light-400 dark:text-gray-400",children:[y().AUTHOR||y().TITLE," ",y().BIO&&(0,n.jsx)(n.Fragment,{children:"|"})," ",y().BIO]})]}),(0,n.jsxs)("div",{className:"jsx-46a4f6ec6f7b253d flex flex-shrink-0 justify-center items-center",children:[(0,n.jsx)(d.default,{...e}),(0,n.jsx)(u.default,{...e}),!JSON.parse(y().THEME_SWITCH)&&(0,n.jsx)("div",{className:"jsx-46a4f6ec6f7b253d hidden md:block",children:(0,n.jsx)(f.default,{...e})}),(0,n.jsx)(h.default,{}),(0,n.jsx)("div",{onClick:k,className:"jsx-46a4f6ec6f7b253d flex lg:hidden w-8 justify-center items-center h-8 cursor-pointer",children:(0,n.jsx)("i",{className:"jsx-46a4f6ec6f7b253d fas fa-bars"})})]}),(0,n.jsx)(m.default,{cRef:w,...e})]})})]})};t.default=b},99655:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(85893),r=a(23273),s=a.n(r),l=a(83083),i=a(11163);function o(e){let{latestPosts:t}=e,a=(0,i.useRouter)(),{locale:r}=(0,l.O)();return(0,n.jsx)("div",{title:r.MENU.WALK_AROUND,className:"cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all",onClick:function(){let e=Math.floor(Math.random()*t.length),n=t[e];a.push("".concat(s().SUB_PATH,"/").concat(null==n?void 0:n.slug))},children:(0,n.jsx)("i",{className:"fa-solid fa-podcast"})})}},26558:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(85893),r=a(89120),s=a(67294);function l(){let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e;function a(){(function(){let e=document.documentElement.scrollHeight,a=document.documentElement.clientHeight,n=window.scrollY||window.pageYOffset;t(Math.floor(n/(e-a-20)*100))})(),e=null}function n(){e||(e=requestAnimationFrame(a))}return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n),e&&cancelAnimationFrame(e)}},[]),(0,n.jsxs)("div",{title:"阅读进度",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"".concat(e>0?"w-10 h-10 ":"w-0 h-0 opacity-0"," group cursor-pointer  hover:bg-black hover:bg-opacity-10 rounded-full flex justify-center items-center duration-200 transition-all"),children:[(0,n.jsx)(r.z$,{className:"w-5 h-5 hidden group-hover:block"}),(0,n.jsx)("div",{className:"group-hover:hidden text-xs flex justify-center items-center rounded-full w-6 h-6 bg-black text-white",children:e<100?e:(0,n.jsx)(r.z$,{className:"w-5 h-5 fill-white"})})]})}},21956:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(85893),r=a(23273),s=a.n(r),l=a(83083),i=a(11163),o=a(91769),c=a(67294);function d(e){let{locale:t}=(0,l.O)(),a=(0,i.useRouter)(),r=(0,c.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:function(){s().ALGOLIA_APP_ID?r.current.openSearch():a.push("/search")},title:t.NAV.SEARCH,alt:t.NAV.SEARCH,className:"cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all",children:(0,n.jsx)("i",{title:t.NAV.SEARCH,className:"fa-solid fa-magnifying-glass"})}),(0,n.jsx)(o.Z,{cRef:r,...e})]})}}}]);