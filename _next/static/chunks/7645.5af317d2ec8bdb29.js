"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7645,1656],{97645:function(e,a,r){r.r(a);var t=r(85893),n=r(51656);a.default=function(e){var a;let{tags:r,currentTag:o}=e;return r?(0,t.jsx)("div",{id:"tags-group",className:"dark:border-gray-600 w-66 space-y-2",children:null===(a=null==r?void 0:r.slice(0,20))||void 0===a?void 0:a.map(e=>{let a=e.name===o;return(0,t.jsx)(n.default,{tag:e,selected:a},e.name)})}):(0,t.jsx)(t.Fragment,{})}},51656:function(e,a,r){r.r(a);var t=r(85893),n=r(41664),o=r.n(n);let c=e=>{let{tag:a,selected:r=!1}=e;return(0,t.jsx)(o(),{href:r?"/":"/tag/".concat(encodeURIComponent(a.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(a.color,"_background dark:bg-gray-800")),children:(0,t.jsxs)("div",{className:"font-light dark:text-gray-400",children:[r&&(0,t.jsx)("i",{className:"mr-1 fas fa-tag"})," ",a.name+(a.count?"(".concat(a.count,")"):"")," "]})},a)};a.default=c}}]);