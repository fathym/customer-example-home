(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{488:function(){if("undefined"!==typeof window){if(window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(t){}if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__){var e=new Map;window.__REACT_DEVTOOLS_GLOBAL_HOOK__={supportsFiber:!0,renderers:e,inject:function(t){e.set(e.size+1,t)},onCommitFiberRoot:function(){},onCommitFiberUnmount:function(){}}}window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion||(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion="1")}},8120:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(5287)}])},5287:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),o=n(7294),i=n.t(o,2),a=n(4298),u=n.n(a),c=n(3935),s=n.t(c,2);n(488);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m=globalThis;null==m.__PlasmicHostVersion&&(m.__PlasmicHostVersion="2");var _=[],h=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,_.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function v(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var b=0;function w(e){b++,h.set(e)}var y=(0,o.createContext)(!1);function g(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),i=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,a=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!i,u=function(){var e=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,o.useLayoutEffect)((function(){return _.push(u),function(){var e=_.indexOf(u);e>=0&&_.splice(e,1)}}),[u]),(0,o.useEffect)((function(){a&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=v();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[a,n]),(0,o.useEffect)((function(){if(!a&&!document.querySelector("#getlibs")&&i){var e=document.createElement("script");e.id="getlibs",e.src=v()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[a]),!n)return null;if(r||i){var s=document.querySelector("#plasmic-app.__wab_user-body");s||((s=document.createElement("div")).id="plasmic-app",s.classList.add("__wab_user-body"),document.body.appendChild(s));var l=new URLSearchParams(location.hash),f=!!r&&{componentName:l.get("componentName")};return(0,c.createPortal)((0,o.createElement)(R,{key:""+b},(0,o.createElement)(y.Provider,{value:f},h.get())),s,"plasmic-app")}return a&&window.parent===window?(0,o.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var E=function(e){var t=e.enableWebpackHmr,n=(0,o.useState)(null),r=n[0],i=n[1];return(0,o.useEffect)((function(){i((0,o.createElement)(g,null))}),[]),(0,o.createElement)(o.Fragment,null,!t&&(0,o.createElement)(P,null),r)},O=[];function C(e){return O.push(e),function(){var t=O.indexOf(e);t>=0&&O.splice(t,1)}}var R=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,f(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var i=r.prototype;return i.componentDidCatch=function(e){O.forEach((function(t){return t(e)}))},i.render=function(){return this.state.error?(0,o.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(o.Component);function P(){return null}var S=(0,o.createContext)(void 0);function L(e,t){if(t){for(var n,r=e,o=d(t.split("."));!(n=o()).done;){var i,a=n.value;r=null==(i=r)?void 0:i[a]}return r}}function x(){return(0,o.useContext)(S)}var A=globalThis;A.__PlasmicFetcherRegistry=[];var T=globalThis;null==T.__PlasmicComponentRegistry&&(T.__PlasmicComponentRegistry=[]);var j,D,F=globalThis;function V(e,t){return H(e,t)}null==F.__PlasmicContextRegistry&&(F.__PlasmicContextRegistry=[]);var H=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return V(e,t)})):t&&(0,o.isValidElement)(t)&&"string"!==typeof t?(0,o.cloneElement)(t):t},G=globalThis,N=null!=(j=null==G||null==(D=G.__Sub)?void 0:D.setRepeatedElementFn)?j:function(e){H=e},k={__proto__:null,PlasmicCanvasContext:y,PlasmicCanvasHost:E,usePlasmicCanvasContext:function(){return(0,o.useContext)(y)},unstable_registerFetcher:function(e,t){A.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})},registerComponent:function(e,t){T.__PlasmicComponentRegistry.push({component:e,meta:t})},registerGlobalContext:function(e,t){F.__PlasmicContextRegistry.push({component:e,meta:t})},repeatedElement:V,DataContext:S,applySelector:L,useSelector:function(e){return L(x(),e)},useSelectors:function(e){void 0===e&&(e={});var t=x();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,L(t,r))})))},useDataEnv:x,DataProvider:function(e){var t,n,r=e.name,i=e.data,a=e.children,u=null!=(t=x())?t:{};return r?o.createElement(S.Provider,{value:l({},u,(n={},n[r]=i,n))},a):o.createElement(o.Fragment,null,a)},DataCtxReader:function(e){return(0,e.children)(x())}},U=globalThis;function B(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(u(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(E,{})]})}null==U.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),U.__Sub=l({React:i,ReactDOM:s,hostModule:k,hostUtils:{setPlasmicRootNode:w,registerRenderErrorListener:C,setRepeatedElementFn:N},setPlasmicRootNode:w,registerRenderErrorListener:C,setRepeatedElementFn:N},k))},4298:function(e,t,n){e.exports=n(3573)}},function(e){e.O(0,[774,888,179],(function(){return t=8120,e(e.s=t);var t}));var t=e.O();_N_E=t}]);