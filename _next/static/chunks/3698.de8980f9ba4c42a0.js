"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3698],{23698:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(85893),s=r(41664),o=r.n(s),i=r(11163),l=r(67294),n=r(83083),c=r(66766),d=r(23273),u=r.n(d);function h(e){let[t,r]=(0,l.useState)({x:"0px",y:"0px"}),[s,d]=(0,l.useState)(!1),{isDarkMode:h,updateDarkMode:x,locale:f}=(0,n.O)(),w=(0,l.useRef)(null),{latestPosts:p}=e,m=(0,i.useRouter)();return(0,l.useEffect)(()=>{let e=e=>{e.preventDefault(),r({y:"".concat(e.clientY,"px"),x:"".concat(e.clientX,"px")}),d(!0)},t=e=>{w.current&&!w.current.contains(e.target)&&d(!1)};return window.addEventListener("contextmenu",e),window.addEventListener("click",t),()=>{window.removeEventListener("contextmenu",e),window.removeEventListener("click",t)}},[]),(0,a.jsx)("div",{ref:w,style:{top:t.y,left:t.x},className:"".concat(s?"":"invisible opacity-0"," select-none transition-opacity duration-200 fixed z-50"),children:(0,a.jsxs)("div",{className:"rounded-xl w-52 dark:hover:border-yellow-600 bg-white dark:bg-[#040404] dark:text-gray-200 dark:border-gray-600 p-3 border drop-shadow-lg flex-col duration-300 transition-colors",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("i",{onClick:function(){window.history.back()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-left"}),(0,a.jsx)("i",{onClick:function(){window.history.forward()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-right"}),(0,a.jsx)("i",{onClick:function(){window.location.reload()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-rotate-right"}),(0,a.jsx)("i",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),d(!1)},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-up"})]}),(0,a.jsx)("hr",{className:"my-2 border-dashed"}),(0,a.jsxs)("div",{className:"w-full px-2",children:[(0,a.jsxs)("div",{onClick:function(){let e=Math.floor(Math.random()*p.length),t=p[e];m.push("".concat(u().SUB_PATH,"/").concat(null==t?void 0:t.slug))},title:f.MENU.WALK_AROUND,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,a.jsx)("i",{className:"fa-solid fa-podcast mr-2"}),(0,a.jsx)("div",{className:"whitespace-nowrap",children:f.MENU.WALK_AROUND})]}),(0,a.jsxs)(o(),{href:"/category",title:f.MENU.CATEGORY,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,a.jsx)("i",{className:"fa-solid fa-square-minus mr-2"}),(0,a.jsx)("div",{className:"whitespace-nowrap",children:f.MENU.CATEGORY})]}),(0,a.jsxs)(o(),{href:"/tag",title:f.MENU.TAGS,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,a.jsx)("i",{className:"fa-solid fa-tag mr-2"}),(0,a.jsx)("div",{className:"whitespace-nowrap",children:f.MENU.TAGS})]})]}),(0,a.jsx)("hr",{className:"my-2 border-dashed"}),(0,a.jsxs)("div",{className:"w-full px-2",children:[(0,a.jsxs)("div",{onClick:function(){let e=window.location.href;navigator.clipboard.writeText(e).then(()=>{console.log("页面地址已复制")}).catch(e=>{console.error("复制页面地址失败:",e)}),d(!1)},title:f.MENU.COPY_URL,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,a.jsx)("i",{className:"fa-solid fa-arrow-up-right-from-square mr-2"}),(0,a.jsx)("div",{className:"whitespace-nowrap",children:f.MENU.COPY_URL})]}),(0,a.jsxs)("div",{onClick:function(){var e,t;let r=!h;(0,c.saveDarkModeToCookies)(r),x(r);let a=document.getElementsByTagName("html")[0];null===(e=a.classList)||void 0===e||e.remove(r?"light":"dark"),null===(t=a.classList)||void 0===t||t.add(r?"dark":"light")},title:h?f.MENU.LIGHT_MODE:f.MENU.DARK_MODE,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[h?(0,a.jsx)("i",{className:"fa-regular fa-sun mr-2"}):(0,a.jsx)("i",{className:"fa-regular fa-moon mr-2"}),(0,a.jsxs)("div",{className:"whitespace-nowrap",children:[" ",h?f.MENU.LIGHT_MODE:f.MENU.DARK_MODE]})]}),(0,a.jsxs)("div",{onClick:function(){let e=c.THEMES[Math.floor(Math.random()*c.THEMES.length)],t=m.query;t.theme=e,m.push({pathname:m.pathname,query:t})},title:f.MENU.THEME_SWITCH,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,a.jsx)("i",{className:"fa-solid fa-palette mr-2"}),(0,a.jsx)("div",{className:"whitespace-nowrap",children:f.MENU.THEME_SWITCH})]})]})]})})}}}]);