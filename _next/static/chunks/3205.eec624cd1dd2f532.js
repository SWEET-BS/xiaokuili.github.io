(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3205],{93205:function(e,t,n){"use strict";n.r(t);var l=n(85893),i=n(67294),s=n(82477),o=n(23273),a=n.n(o),c=n(11163);n(49622);let m=null,r=e=>{let t=i.createRef(),n=(0,c.useRouter)(),o=t=>{""!==t&&m&&m.update(e)};return i.useEffect(()=>{m||(m=(0,s.S1)({...e,el:t.current,serverURL:a().COMMENT_WALINE_SERVER_URL,lang:a().lang,reaction:!0,dark:"html.dark",emoji:["//npm.elemecdn.com/@waline/emojis@1.1.0/tieba","//npm.elemecdn.com/@waline/emojis@1.1.0/weibo","//npm.elemecdn.com/@waline/emojis@1.1.0/bilibili"]})),n.events.on("routeChangeComplete",o);let l=window.location.hash;if(l){let e=document.getElementsByClassName("wl-cards")[0],t=e=>{for(let t of e){let e=t.type;if("childList"===e){let e=document.getElementById(l.substring(1));e&&"wl-item"===e.className&&(e.scrollIntoView({block:"end",behavior:"smooth"}),setTimeout(()=>{e.classList.add("animate__animated"),e.classList.add("animate__bounceInRight"),n.disconnect()},300))}}},n=new MutationObserver(t);n.observe(e,{childList:!0})}return()=>{m&&(m.destroy(),m=null),n.events.off("routeChangeComplete",o)}},[]),(0,l.jsx)("div",{ref:t})};t.default=r},49622:function(){}}]);