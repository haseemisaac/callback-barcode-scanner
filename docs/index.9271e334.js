function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e,i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},o=n.parcelRequirea202;function r(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function l(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,r(t,e,"get"))}function c(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(t,e,i){c(t,e),e.set(t,i)}function h(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,r(t,e,"set"),i),i}function u(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function m(t,e){c(t,e),e.add(t)}null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return s[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){a[t]=e},n.parcelRequirea202=o),o.register("kyEFX",(function(e,i){var n,s;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var a={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)a[e[i]]=t[e[i]]},s=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("5KgBx",(function(t,e){t.exports=import("./"+o("kyEFX").resolve("kNnD0")).then((()=>o("liRO9")))})),o("kyEFX").register(JSON.parse('{"eq2Ey":"index.9271e334.js","kNnD0":"barcode-detector.module.08f05a63.js"}')),e={},i=function(){return C},Object.defineProperty(e,"ClipboardCopy",{get:i,set:undefined,enumerable:!0,configurable:!0});const p=document.createElement("template"),b=String.raw;p.innerHTML=b`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Copy</slot></button></slot>
`;var f,v,g=new WeakMap,w=new WeakMap,y=new WeakSet,E=new WeakSet,k=new WeakMap,A=new WeakMap,T=new WeakSet;class C extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){u(this,T,M).call(this,"value"),u(this,T,M).call(this,"from"),u(this,T,M).call(this,"disabled"),l(this,g)&&l(this,g).addEventListener("slotchange",l(this,A)),l(this,w)&&l(this,w).addEventListener("click",l(this,k))}disconnectedCallback(){l(this,g).removeEventListener("slotchange",l(this,A)),l(this,w)&&l(this,w).removeEventListener("click",l(this,k))}attributeChangedCallback(t){"disabled"===t&&l(this,w)&&(l(this,w).disabled=this.disabled,l(this,w).setAttribute("aria-disabled",this.disabled),l(this,w).part&&l(this,w).part.contains("button")&&l(this,w).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}get from(){return this.getAttribute("from")}set from(t){this.setAttribute("from",t)}static defineCustomElement(t="clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,C)}constructor(){super(),m(this,y),m(this,E),m(this,T),d(this,g,{writable:!0,value:void 0}),d(this,w,{writable:!0,value:void 0}),d(this,k,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("clipboard-copy:click",{bubbles:!0,composed:!0})),u(this,y,L).call(this))}}),d(this,A,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(l(this,w)&&l(this,w).removeEventListener("click",l(this,k)),h(this,w,u(this,E,S).call(this)),l(this,w)&&(l(this,w).addEventListener("click",l(this,k)),"BUTTON"===l(this,w).nodeName||l(this,w).hasAttribute("role")||l(this,w).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0))),h(this,g,this.shadowRoot.querySelector('slot[name="button"]')),h(this,w,u(this,E,S).call(this))}}async function L(){if(this.value||this.from)try{let t="";if(this.value)t=this.value;else if(this.from){const e=("getRootNode"in Element.prototype?l(this,w).getRootNode({composed:!0}):l(this,w).ownerDocument).querySelector(this.from);if(!e)return;t=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:e instanceof HTMLAnchorElement&&e.hasAttribute("href")?e.href:e.textContent}await navigator.clipboard.writeText(t),this.dispatchEvent(new CustomEvent("clipboard-copy:success",{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.dispatchEvent(new CustomEvent("clipboard-copy:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}function S(){return l(this,g)?l(this,g).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function M(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function x(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function N(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,x(t,e,"get"))}function z(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function B(t,e,i){z(t,e),e.set(t,i)}function W(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,x(t,e,"set"),i),i}function R(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function I(t,e){z(t,e),e.add(t)}C.defineCustomElement(),f={},v=function(){return Z},Object.defineProperty(f,"WebShare",{get:v,set:undefined,enumerable:!0,configurable:!0});const q=document.createElement("template"),O=String.raw;q.innerHTML=O`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var D,H,j=new WeakMap,U=new WeakMap,_=new WeakMap,F=new WeakMap,V=new WeakMap,P=new WeakSet,$=new WeakSet;class Z extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){R(this,$,K).call(this,"shareUrl"),R(this,$,K).call(this,"shareTitle"),R(this,$,K).call(this,"shareText"),R(this,$,K).call(this,"shareFiles"),R(this,$,K).call(this,"disabled"),N(this,j)&&N(this,j).addEventListener("slotchange",N(this,V)),N(this,U)&&N(this,U).addEventListener("click",N(this,F))}disconnectedCallback(){N(this,j)&&N(this,j).removeEventListener("slotchange",N(this,V)),N(this,U)&&N(this,U).removeEventListener("click",N(this,F))}attributeChangedCallback(t){"disabled"===t&&N(this,U)&&(N(this,U).disabled=this.disabled,N(this,U).setAttribute("aria-disabled",this.disabled),N(this,U).part&&N(this,U).part.contains("button")&&N(this,U).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return N(this,_)}set shareFiles(t){W(this,_,t)}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,Z)}constructor(){super(),I(this,P),I(this,$),B(this,j,{writable:!0,value:void 0}),B(this,U,{writable:!0,value:void 0}),B(this,_,{writable:!0,value:null}),B(this,F,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),B(this,V,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(N(this,U)&&N(this,U).removeEventListener("click",N(this,F)),W(this,U,R(this,P,X).call(this)),N(this,U)&&(N(this,U).addEventListener("click",N(this,F)),"BUTTON"===N(this,U).nodeName||N(this,U).hasAttribute("role")||N(this,U).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(q.content.cloneNode(!0))),W(this,j,this.shadowRoot.querySelector('slot[name="button"]')),W(this,U,R(this,P,X).call(this))}}function X(){return N(this,j)?N(this,j).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function K(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function G(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator}function J(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function Q(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,J(t,e,"get"))}function Y(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function tt(t,e,i){Y(t,e),e.set(t,i)}function et(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,J(t,e,"set"),i),i}function it(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function nt(t,e){Y(t,e),e.add(t)}Z.defineCustomElement(),D={},H=function(){return mt},Object.defineProperty(D,"ResizeObserverElement",{get:H,set:undefined,enumerable:!0,configurable:!0});const st=document.createElement("template"),at=String.raw;st.innerHTML=at`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var ot=new WeakMap,rt=new WeakMap,lt=new WeakMap,ct=new WeakSet,dt=new WeakSet,ht=new WeakMap,ut=new WeakSet;class mt extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?it(this,dt,bt).call(this):it(this,ct,pt).call(this))}connectedCallback(){it(this,ut,ft).call(this,"disabled"),"ResizeObserver"in window&&(et(this,rt,new ResizeObserver((t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}))),this.disabled||it(this,ct,pt).call(this),Q(this,ot).addEventListener("slotchange",Q(this,ht)))}disconnectedCallback(){it(this,dt,bt).call(this),Q(this,ot).removeEventListener("slotchange",Q(this,ht))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(t="resize-observer"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,mt)}constructor(){super(),nt(this,ct),nt(this,dt),nt(this,ut),tt(this,ot,{writable:!0,value:void 0}),tt(this,rt,{writable:!0,value:void 0}),tt(this,lt,{writable:!0,value:void 0}),tt(this,ht,{writable:!0,value:()=>{this.disabled||it(this,ct,pt).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(st.content.cloneNode(!0))),et(this,ot,this.shadowRoot.querySelector("slot")),et(this,rt,null),et(this,lt,[])}}function pt(){Q(this,ot)&&Q(this,rt)&&(Q(this,lt).forEach((t=>Q(this,rt).unobserve(t))),et(this,lt,[]),Q(this,ot).assignedElements().forEach((t=>{Q(this,rt).observe(t),Q(this,lt).push(t)})))}function bt(){Q(this,rt)&&Q(this,rt).disconnect()}function ft(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function vt(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function gt(t,e){return i=t,(n=vt(t,e,"get")).get?n.get.call(i):n.value;var i,n}function wt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function yt(t,e,i){wt(t,e),e.set(t,i)}function Et(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,vt(t,e,"set"),i),i}function kt(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function At(t,e){wt(t,e),e.add(t)}mt.defineCustomElement();const Tt=document.createElement("template"),Ct=String.raw;Tt.innerHTML=Ct`
  <style>
    :host { all: initial; display: block; box-sizing: border-box; }
    :host *, :host *::before, :host *::after { box-sizing: inherit; }
    :host([hidden]), [hidden] { display: none; }
    :host video { display: block; }
    :host #output:empty { display: none; }
  </style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>
    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>
    <slot name="actions"></slot>
  </div>
  <slot></slot>
  <div part="output-container" id="output"></div>
`;var Lt,St=new WeakMap,Mt=new WeakMap,xt=new WeakMap,Nt=new WeakMap,zt=new WeakMap,Bt=new WeakMap,Wt=new WeakMap,Rt=new WeakMap,It=new WeakMap,qt=new WeakMap,Ot=new WeakSet,Dt=new WeakSet,Ht=new WeakMap,jt=new WeakMap,Ut=new WeakMap,_t=new WeakSet,Ft=new WeakSet,Vt=new WeakMap,Pt=new WeakMap,$t=new WeakSet,Zt=new WeakSet,Xt=new WeakSet;class Kt extends HTMLElement{connectedCallback(){if(kt(this,Xt,ie).call(this,"noImage"),kt(this,Xt,ie).call(this,"facingMode"),kt(this,Xt,ie).call(this,"cameraResolution"),kt(this,Xt,ie).call(this,"pan"),kt(this,Xt,ie).call(this,"tilt"),kt(this,Xt,ie).call(this,"zoom"),Et(this,St,!0),Et(this,Nt,this.shadowRoot.querySelector("canvas")),Et(this,zt,this.shadowRoot.getElementById("output")),Et(this,Bt,this.shadowRoot.querySelector("video")),Et(this,Wt,this.shadowRoot.querySelector('slot[name="capture-button"]')),Et(this,Rt,kt(this,Zt,ee).call(this)),Et(this,It,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),Et(this,qt,kt(this,$t,te).call(this)),gt(this,Bt)?.addEventListener("loadedmetadata",gt(this,Ut)),gt(this,Wt)?.addEventListener("slotchange",gt(this,Vt)),gt(this,Rt)?.addEventListener("click",gt(this,jt)),gt(this,It)?.addEventListener("slotchange",gt(this,Pt)),gt(this,qt)?.addEventListener("click",gt(this,Ht)),!Kt.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));kt(this,Dt,Jt).call(this)}disconnectedCallback(){kt(this,Ot,Gt).call(this),gt(this,qt)?.removeEventListener("click",gt(this,Ht)),gt(this,Rt)?.removeEventListener("click",gt(this,jt)),gt(this,Bt)?.removeEventListener("canplay",gt(this,Ut)),gt(this,Wt)?.removeEventListener("slotchange",gt(this,Vt)),gt(this,It)?.removeEventListener("slotchange",gt(this,Pt))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(t,e,i){if(!gt(this,St))return;const n=this.getTrackCapabilities(),s=this.getTrackSettings();if("no-image"===t&&e!==i&&kt(this,_t,Qt).call(this),"facing-mode"===t&&e!==i&&gt(this,Mt)?.facingMode){const t=["user","environment"].includes(this.facingMode);s?.facingMode&&t&&(kt(this,Ot,Gt).call(this),kt(this,Dt,Jt).call(this))}if("camera-resolution"===t&&e!==i){const[t,e]=this.cameraResolution.split("x").map((t=>Number(t))),i=t>=n?.width?.min&&t<=n?.width?.max,a=e>=n?.height?.min&&e<=n?.height?.max;s?.width&&s?.height&&i&&a&&(kt(this,Ot,Gt).call(this),kt(this,Dt,Jt).call(this))}if("pan"===t&&e!==i&&gt(this,Mt)?.pan){const t=this.pan>=n?.pan?.min&&this.pan<=n?.pan?.max;s?.pan&&t&&kt(this,Ft,Yt).call(this,"pan",this.pan)}if("tilt"===t&&e!==i&&gt(this,Mt)?.tilt){const t=this.tilt>=n?.tilt?.min&&this.tilt<=n?.tilt?.max;s?.tilt&&t&&kt(this,Ft,Yt).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==i&&gt(this,Mt)?.zoom){const t=this.zoom>=n?.zoom?.min&&this.zoom<=n?.zoom?.max;s?.zoom&&t&&kt(this,Ft,Yt).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}capture(){if(!this.loading)try{const t=gt(this,Nt).getContext("2d"),e=gt(this,Bt).videoWidth,i=gt(this,Bt).videoHeight;gt(this,Nt).width=e,gt(this,Nt).height=i,t.drawImage(gt(this,Bt),0,0,e,i);const n=gt(this,Nt).toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.noImage){const t=new Image;t.src=n,t.width=e,t.height=i,t.part="output-image",kt(this,_t,Qt).call(this),gt(this,zt)?.appendChild(t)}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:{dataURI:n,width:e,height:i}}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return Kt.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!gt(this,xt))return{};const[t]=gt(this,xt).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!gt(this,xt))return{};const[t]=gt(this,xt).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){return Boolean(navigator.mediaDevices?.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,Kt)}constructor(){super(),At(this,Ot),At(this,Dt),At(this,_t),At(this,Ft),At(this,$t),At(this,Zt),At(this,Xt),yt(this,St,{writable:!0,value:void 0}),yt(this,Mt,{writable:!0,value:void 0}),yt(this,xt,{writable:!0,value:void 0}),yt(this,Nt,{writable:!0,value:void 0}),yt(this,zt,{writable:!0,value:void 0}),yt(this,Bt,{writable:!0,value:void 0}),yt(this,Wt,{writable:!0,value:void 0}),yt(this,Rt,{writable:!0,value:void 0}),yt(this,It,{writable:!0,value:void 0}),yt(this,qt,{writable:!0,value:void 0}),yt(this,Ht,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),yt(this,jt,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),yt(this,Ut,{writable:!0,value:t=>{const e=t.target;e.play().then((()=>{this.dispatchEvent(new CustomEvent("capture-photo:video-play",{bubbles:!0,composed:!0,detail:{video:e}}))})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))})).finally((()=>{this.removeAttribute("loading")}))}}),yt(this,Vt,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(gt(this,Rt)?.removeEventListener("click",gt(this,jt)),Et(this,Rt,kt(this,Zt,ee).call(this)),gt(this,Rt)&&(gt(this,Rt).addEventListener("click",gt(this,jt)),"BUTTON"===gt(this,Rt).nodeName||gt(this,Rt).hasAttribute("role")||gt(this,Rt).setAttribute("role","button")))}}),yt(this,Pt,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(gt(this,qt)?.removeEventListener("click",gt(this,Ht)),Et(this,qt,kt(this,$t,te).call(this)),gt(this,qt)&&(gt(this,qt).addEventListener("click",gt(this,Ht)),"BUTTON"===gt(this,qt).nodeName||gt(this,qt).hasAttribute("role")||gt(this,qt).setAttribute("role","button")))}}),Et(this,St,!1),Et(this,Mt,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Tt.content.cloneNode(!0)))}}function Gt(){if(!gt(this,Bt)||!gt(this,xt))return;const[t]=gt(this,xt).getVideoTracks();t?.stop(),gt(this,Bt).srcObject=null,Et(this,xt,null)}async function Jt(){if(!Kt.isSupported())return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){const[e,i]=this.cameraResolution.split("x").map((t=>Number(t)));t.video.width=e,t.video.height=i}try{Et(this,xt,await navigator.mediaDevices.getUserMedia(t)),gt(this,Bt).srcObject=gt(this,xt),kt(this,Ft,Yt).call(this,"pan",this.pan),kt(this,Ft,Yt).call(this,"tilt",this.tilt),kt(this,Ft,Yt).call(this,"zoom",this.zoom),this.getTrackSettings()?.facingMode&&(gt(this,It).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}function Qt(){gt(this,zt)&&Array.from(gt(this,zt).childNodes).forEach((t=>t.remove()))}function Yt(t,e){if(!gt(this,xt)||!t||!e)return;const[i]=gt(this,xt).getVideoTracks(),n=this.getTrackCapabilities();var s,a,o;this.getTrackSettings()?.[t]&&i.applyConstraints({advanced:[{[t]:(s=Number(e),a=n?.[t]?.min,o=n?.[t]?.max,Number.isNaN(a)&&(a=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(s,Math.min(a,o)),Math.max(a,o)))}]})}function te(){return gt(this,It)?gt(this,It).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}function ee(){return gt(this,Wt)?gt(this,Wt).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}function ie(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function ne(t){return new Promise((function(e,i){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return i(t.error)}}))}function se(){return Lt||(Lt=function(t,e){var i=indexedDB.open(t);i.onupgradeneeded=function(){return i.result.createObjectStore(e)};var n=ne(i);return function(t,i){return n.then((function(n){return i(n.transaction(e,t).objectStore(e))}))}}("keyval-store","keyval")),Lt}function ae(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:se();return e("readonly",(function(e){return ne(e.get(t))}))}function oe(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:se();return i("readwrite",(function(i){return i.put(e,t),ne(i.transaction)}))}const re=async t=>{try{return{value:await ae(t),error:void 0}}catch(t){return{value:void 0,error:t}}},le=async(t,e)=>{try{return await oe(t,e),{error:void 0}}catch(t){return{error:t}}},ce=async()=>re("barcode-scanner/settings"),de=async t=>le("barcode-scanner/settings",t),he=async()=>re("barcode-scanner/history"),ue=async t=>le("barcode-scanner/history",t),me=document.getElementById("toastContainer"),pe=t=>{const e=t.currentTarget;e.removeEventListener("click",pe),me.removeChild(e.parentNode)},be=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");const i=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,n=document.createElement("div");n.className=`alert alert-${e} alert-dismissible text-break`,n.innerHTML=i,n.querySelector("button").addEventListener("click",pe),me.appendChild(n),setTimeout((()=>n.classList.add("show")),100)};!async function(){const t=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],e=document.querySelector("capture-photo"),i=document.getElementById("cameraResults"),n=document.getElementById("fileResults"),s=document.getElementById("scanInstructions"),a=document.getElementById("scanBtn"),r=document.getElementById("scanMethod"),l=document.getElementById("fileInput"),c=document.getElementById("dropzone"),d=document.getElementById("cameraView"),h=document.getElementById("fileView"),u=document.querySelector("resize-observer"),m=document.getElementById("scanFrame"),p=document.getElementById("globalActions"),b=document.getElementById("historyBtn"),f=document.getElementById("historyDialog"),v=document.getElementById("historyList"),g=document.getElementById("deleteHistoryBtn"),w=document.getElementById("settingsBtn"),y=document.getElementById("settingsDialog"),E=document.forms["settings-form"],k=document.getElementById("copyIconTemplate"),A=document.getElementById("copiedIconTemplate");let T,C=!0;if(document.querySelectorAll("clipboard-copy").forEach((t=>{t.querySelector("button").appendChild(k.content.cloneNode(!0))})),G()||document.querySelectorAll("web-share").forEach((t=>{t.hidden=!0,t.disabled=!0})),!("BarcodeDetector"in window))try{window.BarcodeDetector=(await o("5KgBx")).default}catch(t){return d.hidden=!0,h.hidden=!0,r.hidden=!0,p.hidden=!0,be("BarcodeDetector API is not supported by your browser.","danger")}const{value:L=[]}=await he();M(L);const S=(()=>{const t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return async(e,i,n,s,a)=>{const{value:o}=await ce();if(!o?.beep)return;const r=t.createOscillator(),l=t.createGain();r.connect(l),l.connect(t.destination),n&&(l.gain.value=n),i&&(r.frequency.value=i),s&&(r.type=s),"function"==typeof a&&(r.onended=a),r.start(t.currentTime),r.stop(t.currentTime+(e||500)/1e3)}})();function M(t){v.innerHTML="",Array.isArray(t)&&t.length?(g.style.display="block",t.forEach((t=>{const e=document.createElement("li");let i;e.setAttribute("data-value",t);try{new URL(t),i=document.createElement("a"),i.href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")}catch(t){i=document.createElement("span")}i.textContent=t,i.setAttribute("title",t);const n=document.createElement("div");n.className="history-dialog__actions";const s=document.createElement("clipboard-copy");s.innerHTML='\n          <button slot="button" type="button" title="Copy to clipboard">\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">\n              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>\n              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>\n            </svg>\n          </button>\n        ',s.setAttribute("value",t),n.appendChild(s);const a=document.createElement("button");a.type="button",a.className="history-dialog__delete-action",a.title="Remove from history",a.setAttribute("data-action","delete"),a.innerHTML='\n          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">\n            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>\n          </svg>\n        ',n.appendChild(a),e.appendChild(i),e.appendChild(n),v.appendChild(e)}))):(v.innerHTML="<li class=>There are no saved items in history.</li>",g.style.display="none")}async function x(t){const{value:e}=await ce();if(!t||!e?.addToHistory)return;const{value:i=[],error:n}=await he();if(!n&&!i.find((e=>e===t))){const e=[...i,t],{error:n}=await ue(e);n||M(e)}}async function N(t=100){const{value:e}=await ce();if("function"==typeof window.navigator.vibrate&&e?.vibrate)try{window.navigator.vibrate(t)}catch{}}function z(t){if(!t)return;const e=t.getBoundingClientRect();m.style.cssText=`width: ${e.width}px; height: ${e.height}px`}e.addEventListener("capture-photo:video-play",(t=>{m.hidden=!1,z(t.detail.video),H();const i=e.getTrackSettings(),n=e.getTrackCapabilities(),s=document.getElementById("zoomLevel");if(i?.zoom&&n?.zoom){const t=document.getElementById("zoomControls"),a=n?.zoom?.min||0,o=n?.zoom?.max||10;let r=i?.zoom||1;t.hidden=!1,s.textContent=r,t.addEventListener("click",(t=>{const i=t.target.closest('[data-action="zoom-in"]'),n=t.target.closest('[data-action="zoom-out"]');i&&r<o&&(r+=.5),n&&r>a&&(r-=.5),s.textContent=r,e.zoom=r}))}}),{once:!0}),Kt.defineCustomElement(),l.accept=t.join(",");const B=e.shadowRoot.querySelector("video"),W=await window.BarcodeDetector.getSupportedFormats(),R=new window.BarcodeDetector({formats:W}),{value:I={}}=await ce();function q(t){t.querySelectorAll(".results__item").forEach((t=>t.remove()))}async function O(t,e){if(!t)return;let i;try{new URL(t),i=document.createElement("a"),i.href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener");const{value:e}=await ce();e?.openWebPage&&i.click()}catch(t){i=document.createElement("span")}i.className="results__item",i.textContent=t,e.insertBefore(i,e.querySelector(".results__actions"));const n=e.querySelector("clipboard-copy"),s=e.querySelector("web-share"),a="-"!==t;n&&(n.disabled=!a,n.hidden=!a),s&&G()&&(s.disabled=!a,s.hidden=!a,a?s.setAttribute("share-text",t):s.removeAttribute("share-text"))}function D(t){return new Promise(((e,i)=>{R.detect(t).then((t=>{Array.isArray(t)&&t.length>0?e(t[0]):i({message:"Could not detect barcode from provided source."})})).catch((t=>{i(t)}))}))}async function H(){s.hidden=!1;try{const t=await D(B);return window.cancelAnimationFrame(T),q(i),O(t.rawValue,i),x(t.rawValue),s.hidden=!0,a.hidden=!1,m.hidden=!0,S(200,860,.03,"square"),void N()}catch(t){}C&&(T=window.requestAnimationFrame((()=>H())))}function j(t){const e=new Image,i=new FileReader;i.addEventListener("load",(t=>{const i=t.target.result;e.addEventListener("load",(async()=>{try{const t=await D(e);q(n),O(t.rawValue,n),x(t.rawValue),S(200,860,.03,"square"),N()}catch(t){q(n),O("-",n)}})),e.src=i,c.querySelectorAll("img").forEach((t=>t.remove())),c.prepend(e)})),t&&i.readAsDataURL(t)}Object.entries(I).forEach((([t,e])=>{const i=E.querySelector(`[name="${t}"]`);i&&(i.checked=e)})),function(t,e){if(!Array.isArray(t)||0===t.length)return;const i=document.createElement("p");i.className="supported-formats",i.textContent=`Supported formats: ${t.join(", ")}`,e.appendChild(i)}(W,y),document.addEventListener("capture-photo:error",(t=>{d.hidden=!0,h.hidden=!1,r.hidden=!0;const e=t.detail.error;if("NotFoundError"===e.name)return;const i="NotAllowedError"===e.name?"Permission to use webcam was denied. Reload the page to give appropriate permissions to webcam.":e.message;be(i,"danger")}),{once:!0}),a.addEventListener("click",(()=>{a.hidden=!0,m.hidden=!1,q(i),H()})),r.addEventListener("change",(t=>{const n=t.target.value;[d,h].forEach((t=>{t.hidden=t.id!==n})),"cameraView"===n&&(C=!0,d.hidden||e.loading||i.querySelector(".results__item")||H()),"fileView"===n&&(C=!1)})),l.addEventListener("change",(t=>{j(t.target.files[0])})),c.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy",t.target.classList.add("dropzone--dragover")})),c.addEventListener("dragleave",(t=>{t.target.classList.remove("dropzone--dragover")})),c.addEventListener("drop",(e=>{e.stopPropagation(),e.preventDefault(),e.target.classList.remove("dropzone--dragover");const i=e.dataTransfer.files,[n]=i;n&&t.includes(n.type)&&(l.value=l.defaultValue,j(n))})),c.addEventListener("click",(()=>{l.click()})),c.addEventListener("keyup",(t=>{" "!==t.key&&"Enter"!==t.key||l.click()})),u.addEventListener("resize-observer:resize",(()=>{z(e.shadowRoot.querySelector("video"))})),w.addEventListener("click",(()=>{y.showModal()})),b.addEventListener("click",(()=>{f.showModal()})),f.addEventListener("click",(t=>{t.target===t.currentTarget&&f.close()})),y.addEventListener("click",(t=>{t.target===t.currentTarget&&y.close()})),E.addEventListener("change",(t=>{const e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach((t=>e[t.name]=t.checked)),de(e)})),v.addEventListener("click",(t=>{const e=t.target;e.closest('[data-action="delete"]')&&window.confirm("Delete item from history?")&&async function(t){if(!t)return;const{value:e=[],error:i}=await he();if(!i){const i=e.filter((e=>e!==t)),{error:n}=await ue(i);n||M(i)}}(e.closest("li").dataset.value)})),g.addEventListener("click",(()=>{window.confirm("Are you sure you want to empty history?")&&async function(){const{error:t}=await ue([]);t||M([])}()})),document.addEventListener("clipboard-copy:success",(t=>{const e=t.target.querySelector('button[slot="button"]'),i=t.target.closest("#historyDialog"),n=A.content.cloneNode(!0),s=k.content.cloneNode(!0),a=n.querySelector("span"),o=s.querySelector("span");i?(a.hidden=!0,o.hidden=!0):(a.hidden=!1,o.hidden=!1),e&&(e.replaceChildren(),e.appendChild(n),setTimeout((()=>{e.replaceChildren(),e.appendChild(s)}),1500))}))}();
//# sourceMappingURL=index.9271e334.js.map