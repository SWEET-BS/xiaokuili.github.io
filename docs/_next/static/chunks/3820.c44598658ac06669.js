"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3820],{63820:function(e,t,n){n.r(t);var l=n(85893),o=n(67294),a=n(93096),i=n.n(a),r=n(58622),s=n(94246);let c=e=>{let{post:t}=e,n=[],a=null==t?void 0:t.toc,[c,d]=(0,o.useState)(null);(0,o.useEffect)(()=>(window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u)}),[t]);let u=(0,o.useCallback)(i()(()=>{let e=document.getElementsByClassName("notion-h"),t=null,l=c;for(let n=0;n<e.length;++n){let o=e[n];if(!o||!(o instanceof Element))continue;l||(l=o.getAttribute("data-id"));let a=o.getBoundingClientRect(),i=t?a.top-t.bottom:0,r=Math.max(150,i/4);if(a.top-r<0){l=o.getAttribute("data-id"),t=a;continue}break}d(l);let o=n.indexOf(l)||0;if(s.jU&&(null==n?void 0:n.length)>0)for(let e of null==document?void 0:document.getElementsByClassName("toc-wrapper"))null==e||e.scrollTo({top:28*o,behavior:"smooth"})},200));return!a||a.length<1?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{id:"toc-wrapper",className:"toc-wrapper overflow-y-auto max-h-96 overscroll-none scroll-hidden",children:(0,l.jsx)("nav",{className:"h-full  text-black",children:a.map(e=>{let t=(0,r.Gw)(e.id);return n.push(t),(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-300\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(c===t&&" font-bold text-gray-500 underline"),children:e.text})},t)})})})})};t.default=c}}]);