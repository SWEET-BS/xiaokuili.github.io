"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2237,1104],{36457:function(e,s,t){async function a(e,s,t){let a=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,first_name:s,last_name:t})}),r=await a.json();return r}t.d(s,{x:function(){return a}}),t(23273)},82237:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var a=t(85893),r=t(36457),l=t(41664),i=t.n(l),n=t(67294),c=t(24330),o=t(21104);function m(){let e=(0,n.useRef)(),[s,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let s=e.current,a=e=>{e.preventDefault();let s=document.querySelector("#newsletter").value;(0,r.x)(s).then(e=>{console.log("Subscription succeeded:",e),t(!0)}).catch(e=>{console.error("Subscription failed:",e)})};return null==s||s.addEventListener("submit",a),()=>{null==s||s.removeEventListener("submit",a)}},[r.x]),(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[(0,a.jsxs)("div",{className:"sm:col-span-12 lg:col-span-3",children:[(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)(o.default,{})}),(0,a.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,a.jsx)(i(),{href:"/terms-of-use",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"服务条款"})," \xb7 ",(0,a.jsx)(i(),{href:"/privacy-policy",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"隐私政策"})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"产品"}),(0,a.jsxs)("ul",{className:"text-sm",children:[(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"NotionNext"})}),(0,a.jsx)("li",{className:"mb-2"}),(0,a.jsx)("li",{className:"mb-2"}),(0,a.jsx)("li",{className:"mb-2"}),(0,a.jsx)("li",{className:"mb-2"})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"资源"}),(0,a.jsxs)("ul",{className:"text-sm",children:[(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"https://docs.tangly1024.com",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"技术文档"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"https://docs.tangly1024.com",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"教程指南"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"https://blog.tangly1024.com",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"博客"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"https://blog.tangly1024.com",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"支持中心"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"合作方"})})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"企业"}),(0,a.jsxs)("ul",{className:"text-sm",children:[(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"主页"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"关于我们"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"公司价值观"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"价格"})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"隐私政策"})})]})]}),JSON.parse(c.default.NEWSLETTER)&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3",children:[(0,a.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Subscribe"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Get the latest news and articles to your inbox every month."}),(0,a.jsx)("form",{ref:e,children:(0,a.jsx)("div",{className:"flex flex-wrap mb-4",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{className:"block text-sm sr-only",htmlFor:"newsletter",children:"Email"}),(0,a.jsxs)("div",{className:"relative flex items-center max-w-xs",children:[(0,a.jsx)("input",{disabled:s,id:"newsletter",type:"email",className:"form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm",placeholder:"Your email",required:!0}),(0,a.jsxs)("button",{disabled:s,type:"submit",className:"absolute inset-0 left-auto","aria-label":"Subscribe",children:[(0,a.jsx)("span",{className:"absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300","aria-hidden":"true"}),(0,a.jsx)("svg",{className:"w-3 h-3 fill-current text-blue-600 mx-3 shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})]}),s&&(0,a.jsx)("p",{className:"mt-2 text-green-600 text-sm",children:"Thanks for subscribing!"})]})})})]})})]}),(0,a.jsxs)("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[(0,a.jsx)("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:(0,a.jsx)("li",{className:"ml-4",children:(0,a.jsx)("a",{href:"https://github.com/tangly1024/NotionNext",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:(0,a.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})})}),(0,a.jsx)("div",{className:"text-sm text-gray-600 mr-4",children:"\xa9 NotionNext. All rights reserved."})]})]})})}},21104:function(e,s,t){t.r(s),t.d(s,{default:function(){return i}});var a=t(85893),r=t(41664),l=t.n(r);function i(){return(0,a.jsx)(l(),{href:"/",className:"block","aria-label":"Cruip",children:(0,a.jsxs)("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"footer-logo",children:[(0,a.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),(0,a.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),(0,a.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})}),(0,a.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"url(#footer-logo)",fillRule:"nonzero"}),(0,a.jsx)("text",{x:"42%",y:"50%",textAnchor:"middle",dominantBaseline:"central",fontSize:"24",fontFamily:"'Century Gothic'",fontWeight:"700",fontStyle:"italic",fill:"white",children:"N"})]})})}}}]);