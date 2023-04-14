/*! For license information please see preview-service-worker.js.LICENSE.txt */
"use strict";(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[549],{151:(e,t,s)=>{s.d(t,{CY:()=>i,Sl:()=>r,TC:()=>n});const i=location.host.endsWith(".github.io")?location.pathname:"/",n="Cache",r="PreviewCache"},787:(e,t,s)=>{var i=s(418),n=s(650),r=s(151);class o{constructor(){this.events=new i.b("Service Worker: Preview","",this),this.registered=!1,this.register(),this.allowList=location.host.endsWith(".github.io")?/^(http|https):\/\/([^/]+)\/([^/]+)\/preview\/[^/]+\/?/:/^(http|https):\/\/([^/]+)\/preview\/[^/]+\/?/,this.counter=0}register(){this.registered||(console.log(`Register Preview Service Worker with cache ${r.Sl} ...`),this.events.listen(self,n.t.ACTIVATE,this.activate),this.events.listen(self,n.t.INSTALL,this.install),this.events.listen(self,n.t.FETCH,this.fetch),this.registered=!0)}activate(e){console.log("Activate Preview Service Worker ...",e)}install(){console.log("Install Preview Service Worker ...")}fetch(e){if(null!=e.request&&this.allowList.test(e.request.url))if(console.log("Preview fetch request",e),"POST"===e.request.method)e.respondWith(caches.open(r.Sl).then((t=>e.request.text().then((s=>{const i=new Response(s);return t.put(e.request,i.clone()),i})))));else if("GET"===e.request.method){if(e.request.url.endsWith(r.CY+"preview/test123"))return void e.respondWith(new Response("Hello World! "+this.counter++));e.respondWith(caches.match(e.request).then((e=>e||new Response("Not found"))))}}static async saveHTMLFile(e,t){return o.saveFile(e,t,"text/html; charset=utf-8")}static async saveFile(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/plain; charset=utf-8";e.startsWith(r.CY+"preview/")||(e=e.startsWith(r.CY)?e.slice(r.CY.length)+r.CY+"preview"+e:r.CY+"preview/"+e);const i=await caches.open(r.Sl),n=e,o=new Response(t,{headers:{"Content-Type":s}});console.log("Save preview file",n,o),await i.put(n,o)}}new o},418:(e,t,s)=>{s.d(t,{b:()=>n});class i{constructor(e,t,s,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(this.target=null,this.type=t,this.listener=s,this.options=i,"string"==typeof e||e instanceof String){if(this.target=document.getElementById(n+e),!this.target)throw new Error(`Unable to find element ${n}${e}!`)}else this.target=e;if(!this.target)throw new Error(`Undefined event target: ${this.target}!`);if("function"!=typeof s)throw new Error(`Listener is not a function: ${s}!`)}}class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Events",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.name=e||"",this.prefix=t||"",this.scope=s,this.listener_=[]}listen(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const h=new i(e,t,this.scope?s.bind(this.scope):s,{capture:n,once:r,passive:o},this.prefix);return h.target?(h.target.addEventListener(h.type,h.listener,h.options),this.listener_.push(h)-1):null}listenOnce(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return this.listen(e,t,s,i,n,r)}unlisten(e){const t=this.listener_[e];if(!t)throw new Error(`Unknown listener key: ${e}!`);const{target:s,type:i,listener:n,options:r}=t;s.removeEventListener(i,n,r),delete this.listener_[e]}getLength(){return this.listener_.length-1}}},650:(e,t,s)=>{s.d(t,{t:()=>i});const i={CLICK:"click",RIGHTCLICK:"rightclick",DBLCLICK:"dblclick",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",CHANGE:"change",RESET:"reset",SELECT:"select",SUBMIT:"submit",INPUT:"input",DRAGEND:"dragend",DRAGSTART:"dragstart",ERROR:"error",INSTALL:"install",ACTIVATE:"activate",FETCH:"fetch"}}},e=>{var t;t=787,e(e.s=t)}]);