"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{30340:function(e,n,t){t.r(n),t.d(n,{Analytics:function(){return d},default:function(){return l},track:function(){return a}});var r=t(67294),o=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function i(){return"undefined"!=typeof window}function u(){return window.vam||"production"}function c(){return"development"===u()}function a(e,n){var t,r;if(!i()){console.warn("[Vercel Web Analytics] Server-side execution of `track()` is currently not supported.");return}if(!n){null==(t=window.va)||t.call(window,"event",{name:e});return}try{let t=function(e,n){let t=e,r=[];for(let[o,i]of Object.entries(e))"object"==typeof i&&null!==i&&(n.strip?t=function(e,{[e]:n,...t}){return t}(o,t):r.push(o));if(r.length>0&&!n.strip)throw Error(`The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return t}(n,{strip:"production"===u()});null==(r=window.va)||r.call(window,"event",{name:e,data:t})}catch(e){e instanceof Error&&c()&&console.error(e)}}function d({beforeSend:e,debug:n=!0,mode:t="auto"}){return(0,r.useEffect)(()=>{!function(e={debug:!0}){var n;if(!i())return;(function(e="auto"){if("auto"===e){window.vam="production";return}window.vam=e})(e.mode),o(),e.beforeSend&&(null==(n=window.va)||n.call(window,"beforeSend",e.beforeSend));let t=c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${t}"]`))return;let r=document.createElement("script");r.src=t,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.0.1"),c()&&!1===e.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:e,debug:n,mode:t})},[e,n,t]),null}var l={Analytics:d,track:a}}}]);