"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3653],{23653:function(e,t,a){a.r(t);var r=a(85893),n=a(11163),s=a(83083),o=a(67294);let l=!1,c=e=>{let{currentTag:t,currentSearch:a,cRef:c}=e,{locale:u}=(0,s.O)(),i=(0,n.useRouter)(),f=(0,o.useRef)(null);(0,o.useImperativeHandle)(c,()=>({focus:()=>{var e;null==f||null===(e=f.current)||void 0===e||e.focus()}}));let h=()=>{let e=f.current.value;e&&""!==e?i.push({pathname:"/search/"+e}).then(e=>{}):i.push({pathname:"/"}).then(e=>{})},p=e=>{13===e.keyCode?h(f.current.value):27===e.keyCode&&d()},d=()=>{f.current.value="",k(!1)};function m(){l=!0}let[g,k]=(0,o.useState)(!1),x=e=>{l||(f.current.value=e,e?k(!0):k(!1))};return(0,r.jsxs)("section",{className:"flex w-full bg-gray-100",children:[(0,r.jsx)("input",{ref:f,type:"text",placeholder:t?"".concat(u.SEARCH.TAGS," #").concat(t):"".concat(u.SEARCH.ARTICLES),className:"outline-none w-full text-sm pl-4 transition focus:shadow-lg font-light leading-10 text-black bg-gray-100 dark:bg-gray-900 dark:text-white",onKeyUp:p,onCompositionStart:m,onCompositionUpdate:m,onCompositionEnd:function(){l=!1},onChange:e=>x(e.target.value),defaultValue:a||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:h,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200  text-gray-500 cursor-pointer fas fa-search"})}),g&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-800 float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 cursor-pointer fas fa-times",onClick:d})})]})};t.default=c}}]);