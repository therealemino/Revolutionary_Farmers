/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@lobstrco";
exports.ids = ["vendor-chunks/@lobstrco"];
exports.modules = {

/***/ "(ssr)/./node_modules/@lobstrco/signer-extension-api/build/index.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/@lobstrco/signer-extension-api/build/index.min.js ***!
  \************************************************************************/
/***/ (function(module) {

eval("!function(e,n){ true?module.exports=n():0}(this,(()=>(()=>{\"use strict\";var e,n,o,t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})}},i={};t.r(i),t.d(i,{default:()=>S,getPublicKey:()=>c,isBrowser:()=>T,isConnected:()=>a,signTransaction:()=>d}),function(e){e.LOAD_STATE=\"LOAD_STATE\",e.LOGIN=\"LOGIN\",e.LOGOUT=\"LOGOUT\",e.SIGN_TRANSACTION=\"SIGN_TRANSACTION\",e.REJECT_TRANSACTION=\"REJECT_TRANSACTION\",e.GRANT_ACCESS=\"GRANT_ACCESS\",e.REJECT_ACCESS=\"REJECT_ACCESS\"}(e||(e={})),function(e){e.REQUEST_ACCESS=\"REQUEST_ACCESS\",e.SIGN_TRANSACTION=\"SUBMIT_TRANSACTION\",e.REQUEST_CONNECTION_STATUS=\"REQUEST_CONNECTION_STATUS\"}(n||(n={})),function(e){e.pending=\"pending\",e.signed=\"signed\",e.rejected=\"rejected\"}(o||(o={}));const r=\"LOBSTR_CONNECTION_KEY\",s=e=>{const o=Date.now()+Math.random();return window.postMessage({source:\"LOBSTR_EXTERNAL_MSG_REQUEST\",messageId:o,...e},window.location.origin),new Promise((t=>{let i=0;e.type===n.REQUEST_CONNECTION_STATUS&&(i=setTimeout((()=>{t({isConnected:!1}),window.removeEventListener(\"message\",r)}),2e3));const r=e=>{var n,s;e.source===window&&\"LOBSTR_EXTERNAL_MSG_RESPONSE\"===(null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.source)&&(null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.messagedId)===o&&(t(e.data),window.removeEventListener(\"message\",r),clearTimeout(i))};window.addEventListener(\"message\",r,!1)}))},c=async()=>{if(!T)return\"\";const{publicKey:e,connectionKey:o}=await(async()=>{let e={publicKey:\"\",error:\"\",connectionKey:\"\"};try{e=await s({type:n.REQUEST_ACCESS})}catch(e){console.error(e)}const{publicKey:o,connectionKey:t,error:i}=e;if(i)throw i;return{publicKey:o,connectionKey:t}})();return(e=>{var n;null===(n=null===window||void 0===window?void 0:window.sessionStorage)||void 0===n||n.setItem(r,e)})(o),e},d=async e=>{if(!T)return\"\";const o=(null===(t=null===window||void 0===window?void 0:window.sessionStorage)||void 0===t?void 0:t.getItem(r))||\"\";var t;return await(async(e,o)=>{let t={signedTransaction:\"\",error:\"\"};try{t=await s({transactionXdr:e,connectionKey:o,type:n.SIGN_TRANSACTION})}catch(e){throw console.error(e),e}const{signedTransaction:i,error:r}=t;if(r)throw r;return i})(e,o)},a=async()=>!!T&&(window.lobstrSignerExtension?window.lobstrSignerExtension:await(async()=>{let e={isConnected:!1};try{e=await s({type:n.REQUEST_CONNECTION_STATUS})}catch(e){console.error(e)}return e.isConnected})()),T=\"undefined\"!=typeof window,S={getPublicKey:c,signTransaction:d,isConnected:a};return i})()));\n//# sourceMappingURL=index.min.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGxvYnN0cmNvL3NpZ25lci1leHRlbnNpb24tYXBpL2J1aWxkL2luZGV4Lm1pbi5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLEtBQWlELG9CQUFvQixDQUFtSSxDQUFDLGlCQUFpQixhQUFhLGFBQWEsVUFBVSwrREFBK0QsdUJBQXVCLEVBQUUsMERBQTBELDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEdBQUcsTUFBTSxjQUFjLHlGQUF5RixjQUFjLDBNQUEwTSxTQUFTLGVBQWUsa0lBQWtJLFNBQVMsZUFBZSw0REFBNEQsU0FBUyxHQUFHLHNDQUFzQyxpQ0FBaUMsMkJBQTJCLHNEQUFzRCwwQ0FBMEMsUUFBUSwwREFBMEQsR0FBRyxlQUFlLDBDQUEwQyxRQUFRLFlBQVksUUFBUSxpUUFBaVEsd0NBQXdDLEdBQUcsYUFBYSxlQUFlLE1BQU0sNEJBQTRCLGlCQUFpQixPQUFPLHdDQUF3QyxJQUFJLFdBQVcsc0JBQXNCLEVBQUUsU0FBUyxpQkFBaUIsTUFBTSxvQ0FBb0MsR0FBRyxhQUFhLE9BQU8sNkJBQTZCLElBQUksV0FBVyxNQUFNLG1HQUFtRyxPQUFPLGFBQWEsZUFBZSxxSEFBcUgsTUFBTSwwQkFBMEIsT0FBTywrQkFBK0IsSUFBSSxXQUFXLHlEQUF5RCxFQUFFLFNBQVMseUJBQXlCLE1BQU0sNEJBQTRCLEdBQUcsYUFBYSxTQUFTLE9BQU8sNEZBQTRGLE9BQU8sZ0JBQWdCLElBQUksV0FBVyxpQ0FBaUMsRUFBRSxTQUFTLGlCQUFpQixxQkFBcUIscUNBQXFDLGdEQUFnRCxTQUFTO0FBQ3gxRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvYy1mcmVpZ2h0ZXIvLi9ub2RlX21vZHVsZXMvQGxvYnN0cmNvL3NpZ25lci1leHRlbnNpb24tYXBpL2J1aWxkL2luZGV4Lm1pbi5qcz80NDY4Il0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMubG9ic3RyRXh0ZW5zaW9uQXBpPW4oKTplLmxvYnN0ckV4dGVuc2lvbkFwaT1uKCl9KHRoaXMsKCgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZSxuLG8sdD17ZDooZSxuKT0+e2Zvcih2YXIgbyBpbiBuKXQubyhuLG8pJiYhdC5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0Om5bb119KX0sbzooZSxuKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGk9e307dC5yKGkpLHQuZChpLHtkZWZhdWx0OigpPT5TLGdldFB1YmxpY0tleTooKT0+Yyxpc0Jyb3dzZXI6KCk9PlQsaXNDb25uZWN0ZWQ6KCk9PmEsc2lnblRyYW5zYWN0aW9uOigpPT5kfSksZnVuY3Rpb24oZSl7ZS5MT0FEX1NUQVRFPVwiTE9BRF9TVEFURVwiLGUuTE9HSU49XCJMT0dJTlwiLGUuTE9HT1VUPVwiTE9HT1VUXCIsZS5TSUdOX1RSQU5TQUNUSU9OPVwiU0lHTl9UUkFOU0FDVElPTlwiLGUuUkVKRUNUX1RSQU5TQUNUSU9OPVwiUkVKRUNUX1RSQU5TQUNUSU9OXCIsZS5HUkFOVF9BQ0NFU1M9XCJHUkFOVF9BQ0NFU1NcIixlLlJFSkVDVF9BQ0NFU1M9XCJSRUpFQ1RfQUNDRVNTXCJ9KGV8fChlPXt9KSksZnVuY3Rpb24oZSl7ZS5SRVFVRVNUX0FDQ0VTUz1cIlJFUVVFU1RfQUNDRVNTXCIsZS5TSUdOX1RSQU5TQUNUSU9OPVwiU1VCTUlUX1RSQU5TQUNUSU9OXCIsZS5SRVFVRVNUX0NPTk5FQ1RJT05fU1RBVFVTPVwiUkVRVUVTVF9DT05ORUNUSU9OX1NUQVRVU1wifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UucGVuZGluZz1cInBlbmRpbmdcIixlLnNpZ25lZD1cInNpZ25lZFwiLGUucmVqZWN0ZWQ9XCJyZWplY3RlZFwifShvfHwobz17fSkpO2NvbnN0IHI9XCJMT0JTVFJfQ09OTkVDVElPTl9LRVlcIixzPWU9Pntjb25zdCBvPURhdGUubm93KCkrTWF0aC5yYW5kb20oKTtyZXR1cm4gd2luZG93LnBvc3RNZXNzYWdlKHtzb3VyY2U6XCJMT0JTVFJfRVhURVJOQUxfTVNHX1JFUVVFU1RcIixtZXNzYWdlSWQ6bywuLi5lfSx3aW5kb3cubG9jYXRpb24ub3JpZ2luKSxuZXcgUHJvbWlzZSgodD0+e2xldCBpPTA7ZS50eXBlPT09bi5SRVFVRVNUX0NPTk5FQ1RJT05fU1RBVFVTJiYoaT1zZXRUaW1lb3V0KCgoKT0+e3Qoe2lzQ29ubmVjdGVkOiExfSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscil9KSwyZTMpKTtjb25zdCByPWU9Pnt2YXIgbixzO2Uuc291cmNlPT09d2luZG93JiZcIkxPQlNUUl9FWFRFUk5BTF9NU0dfUkVTUE9OU0VcIj09PShudWxsPT09KG49bnVsbD09ZT92b2lkIDA6ZS5kYXRhKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zb3VyY2UpJiYobnVsbD09PShzPW51bGw9PWU/dm9pZCAwOmUuZGF0YSl8fHZvaWQgMD09PXM/dm9pZCAwOnMubWVzc2FnZWRJZCk9PT1vJiYodChlLmRhdGEpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpLGNsZWFyVGltZW91dChpKSl9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIsITEpfSkpfSxjPWFzeW5jKCk9PntpZighVClyZXR1cm5cIlwiO2NvbnN0e3B1YmxpY0tleTplLGNvbm5lY3Rpb25LZXk6b309YXdhaXQoYXN5bmMoKT0+e2xldCBlPXtwdWJsaWNLZXk6XCJcIixlcnJvcjpcIlwiLGNvbm5lY3Rpb25LZXk6XCJcIn07dHJ5e2U9YXdhaXQgcyh7dHlwZTpuLlJFUVVFU1RfQUNDRVNTfSl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1jb25zdHtwdWJsaWNLZXk6byxjb25uZWN0aW9uS2V5OnQsZXJyb3I6aX09ZTtpZihpKXRocm93IGk7cmV0dXJue3B1YmxpY0tleTpvLGNvbm5lY3Rpb25LZXk6dH19KSgpO3JldHVybihlPT57dmFyIG47bnVsbD09PShuPW51bGw9PT13aW5kb3d8fHZvaWQgMD09PXdpbmRvdz92b2lkIDA6d2luZG93LnNlc3Npb25TdG9yYWdlKXx8dm9pZCAwPT09bnx8bi5zZXRJdGVtKHIsZSl9KShvKSxlfSxkPWFzeW5jIGU9PntpZighVClyZXR1cm5cIlwiO2NvbnN0IG89KG51bGw9PT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5zZXNzaW9uU3RvcmFnZSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuZ2V0SXRlbShyKSl8fFwiXCI7dmFyIHQ7cmV0dXJuIGF3YWl0KGFzeW5jKGUsbyk9PntsZXQgdD17c2lnbmVkVHJhbnNhY3Rpb246XCJcIixlcnJvcjpcIlwifTt0cnl7dD1hd2FpdCBzKHt0cmFuc2FjdGlvblhkcjplLGNvbm5lY3Rpb25LZXk6byx0eXBlOm4uU0lHTl9UUkFOU0FDVElPTn0pfWNhdGNoKGUpe3Rocm93IGNvbnNvbGUuZXJyb3IoZSksZX1jb25zdHtzaWduZWRUcmFuc2FjdGlvbjppLGVycm9yOnJ9PXQ7aWYocil0aHJvdyByO3JldHVybiBpfSkoZSxvKX0sYT1hc3luYygpPT4hIVQmJih3aW5kb3cubG9ic3RyU2lnbmVyRXh0ZW5zaW9uP3dpbmRvdy5sb2JzdHJTaWduZXJFeHRlbnNpb246YXdhaXQoYXN5bmMoKT0+e2xldCBlPXtpc0Nvbm5lY3RlZDohMX07dHJ5e2U9YXdhaXQgcyh7dHlwZTpuLlJFUVVFU1RfQ09OTkVDVElPTl9TVEFUVVN9KX1jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfXJldHVybiBlLmlzQ29ubmVjdGVkfSkoKSksVD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LFM9e2dldFB1YmxpY0tleTpjLHNpZ25UcmFuc2FjdGlvbjpkLGlzQ29ubmVjdGVkOmF9O3JldHVybiBpfSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWluLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@lobstrco/signer-extension-api/build/index.min.js\n");

/***/ })

};
;