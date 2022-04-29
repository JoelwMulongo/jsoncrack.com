"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{1639:function(n,e,t){t.d(e,{z:function(){return h}});var r,o=t(5893),i=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function f(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return f=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var s=i.ZP.button.withConfig({componentId:"sc-5c88af8-0"})(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=i.ZP.div.withConfig({componentId:"sc-5c88af8-1"})(f()),h=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,o.jsx)(s,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,o.jsx)(d,{children:e})}))}},74:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ce}});var r=t(5893),o=t(7294),i=t(1664),c=t.n(i),u=t(2125),a=t(9583),l=t(5434),f=t(8193),s=t(471),d=t(4931);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(){var n=b(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return m=function(){return n},n}function y(){var n=b(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 25%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  opacity: ",";\n  transition: opacity 0.2s;\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return y=function(){return n},n}function g(){var n=b([""]);return g=function(){return n},n}var v=u.ZP.div.withConfig({componentId:"sc-c6feedbe-0"})(m()),x=u.ZP.div.withConfig({componentId:"sc-c6feedbe-1"})(y(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"1":"0"})),j=u.ZP.div.withConfig({componentId:"sc-c6feedbe-2"})(g()),w=function(n){var e=n.children,t=n.title,i=p(o.useState(!1),2),c=i[0],u=i[1];return(0,r.jsxs)(v,{children:[(0,r.jsx)(x,{visible:c,children:t}),(0,r.jsx)(j,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},O=t(5623),E=t(6827),S=t(1163);function P(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return P(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function A(){var n=I(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 42px;\n  background: ",";\n  padding: 8px;\n  border-right: 1px solid ",";\n"]);return A=function(){return n},n}function R(){var n=I(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n\n  svg {\n    padding: 8px 0;\n    vertical-align: middle;\n  }\n"]);return R=function(){return n},n}function T(){var n=I(["\n  color: ",";\n"]);return T=function(){return n},n}function N(){var n=I(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return N=function(){return n},n}function k(){var n=I(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return k=function(){return n},n}function z(){var n=I(["\n  color: ",";\n"]);return z=function(){return n},n}function _(){var n=I(['\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return _=function(){return n},n}var Z=u.ZP.div.withConfig({componentId:"sc-e2dbd4f0-0"})(A(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),G=u.ZP.div.withConfig({componentId:"sc-e2dbd4f0-1"})(R(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),L=u.ZP.span.withConfig({componentId:"sc-e2dbd4f0-2"})(T(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),D=u.ZP.nav.withConfig({componentId:"sc-e2dbd4f0-3"})(N(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),M=u.ZP.nav.withConfig({componentId:"sc-e2dbd4f0-4"})(k(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),U=u.ZP.div.withConfig({componentId:"sc-e2dbd4f0-5"})(z(),(function(n){return n.theme.FULL_WHITE})),B=u.ZP.label.withConfig({componentId:"sc-e2dbd4f0-6"})(_());var K=function(){var n,e=(0,E.ZR)(),t=e.states.settings,i=e.dispatch,u=(0,S.useRouter)(),h=C(o.useState(null),2),p=h[0],b=h[1];return o.useEffect((function(){if(p){var n=new FileReader;n.readAsText(p,"UTF-8"),n.onload=function(n){var e;i({type:O.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result})}}}),[p,i]),(0,r.jsxs)(Z,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)(c(),{passHref:!0,href:"/",children:(0,r.jsx)(G,{onClick:function(){return u.push("/")},children:(0,r.jsxs)(U,{children:[(0,r.jsx)(L,{children:"J"}),(0,r.jsx)(L,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(w,{title:"Home",children:(0,r.jsx)(G,{onClick:function(){return u.push("/")},children:(0,r.jsx)(f.V9Z,{})})}),(0,r.jsx)(w,{title:"Auto Format",children:(0,r.jsx)(G,{onClick:function(){i({type:O.n.TOGGLE_AUTOFORMAT}),(0,d.ZP)("Auto format has been ".concat(t.autoformat?"disabled.":"enabled."))},children:t.autoformat?(0,r.jsx)(l.kk0,{}):(0,r.jsx)(l.sGS,{})})}),(0,r.jsx)(w,{title:"Change Layout",children:(0,r.jsx)(G,{onClick:function(){return i({type:O.n.TOGGLE_LAYOUT})},children:(n=t.layout,"LEFT"===n?(0,r.jsx)(s.mtx,{}):"UP"===n?(0,r.jsx)(s.LkX,{}):"RIGHT"===n?(0,r.jsx)(s.glP,{}):(0,r.jsx)(s.uFB,{}))})}),(0,r.jsx)(w,{title:"Toggle Compact Nodes",children:(0,r.jsx)(G,{title:"Toggle Expand/Collapse",onClick:function(){i({type:O.n.TOGGLE_EXPAND}),(0,d.ZP)("".concat(t.expand?"Collapsed":"Expanded"," nodes."))},children:t.expand?(0,r.jsx)(l.bPX,{}):(0,r.jsx)(l.SPo,{})})}),(0,r.jsx)(w,{title:"Clear JSON",children:(0,r.jsx)(G,{onClick:function(){i({type:O.n.SET_JSON,payload:"[]"}),localStorage.removeItem("json"),d.ZP.success("Cleared JSON and removed from memory.")},children:(0,r.jsx)(f.YK6,{})})}),(0,r.jsx)(w,{title:"Import File",children:(0,r.jsx)(G,{children:(0,r.jsxs)(B,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&b(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===p||void 0===p?void 0:p.name),(0,r.jsx)(a.Xur,{})]})})})]}),(0,r.jsxs)(M,{children:[(0,r.jsx)(G,{children:(0,r.jsx)(c(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(f.h3E,{})})})}),(0,r.jsx)(G,{children:(0,r.jsx)(c(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(f.RrF,{})})})})]})]})},V=t(6126),J=t(3854),Y=t(155);function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function H(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function X(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(){var n=X(o.useState(0),2),e=n[0],t=n[1],r=X(o.useState({value:"",debounced:""}),2),i=r[0],c=r[1],u=(0,E.ZR)().states.settings;return o.useEffect((function(){var n=setTimeout((function(){c((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){H(n,e,t[e])}))}return n}({},n,{debounced:i.value})}))}),1500);return function(){return clearTimeout(n)}}),[i.value]),o.useEffect((function(){if(u.zoomPanPinch){var n,r=u.zoomPanPinch.instance.wrapperComponent,o=(n="span[data-key*='".concat(i.debounced,"' i]"),document.querySelectorAll("".concat(n))),c=o[e]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),r&&c&&c.parentElement){var a,l=Number(c.getAttribute("data-x")),f=Number(c.getAttribute("data-y")),s=1*(r.offsetLeft-l)+r.clientWidth/2-c.getBoundingClientRect().width/2,d=1*(r.offsetLeft-f)+r.clientHeight/2-c.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t,r;null===(r=null===(e=n.parentElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===r||r.classList.add("searched")})),n[e].classList.add("highlight")}(o,e),null===(a=u.zoomPanPinch)||void 0===a||a.setTransform(s,d,1)}else t(0);return function(){i.value||t(0)}}}),[i.debounced,u.zoomPanPinch,e,t]),[i,c,function(){return t((function(n){return n+1}))}]};function $(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Q(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return $(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function en(){var n=nn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return en=function(){return n},n}function tn(){var n=nn(["\n  display: flex;\n"]);return tn=function(){return n},n}function rn(){var n=nn(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return rn=function(){return n},n}function on(){var n=nn(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return on=function(){return n},n}var cn=u.ZP.div.withConfig({componentId:"sc-8fd1b5a4-0"})(en(),(function(n){return n.theme.BACKGROUND_TERTIARY})),un=u.ZP.form.withConfig({componentId:"sc-8fd1b5a4-1"})(tn()),an=u.ZP.input.withConfig({componentId:"sc-8fd1b5a4-2"})(rn(),(function(n){return n.theme.TEXT_NORMAL})),ln=u.ZP.button.withConfig({componentId:"sc-8fd1b5a4-3"})(on(),(function(n){return n.theme.INTERACTIVE_NORMAL})),fn=function(){var n=Q(W(),3),e=n[0],t=n[1],o=n[2];return(0,r.jsxs)(cn,{children:[(0,r.jsx)(un,{onSubmit:function(n){n.preventDefault(),o()},children:(0,r.jsx)(an,{type:"text",value:e.value,onChange:function(n){return t((function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){q(n,e,t[e])}))}return n}({},e,{value:n.target.value})}))},placeholder:"Search Node"})}),(0,r.jsx)(ln,{"aria-label":"search",onClick:function(){return t({value:"",debounced:""})},children:e.value?(0,r.jsx)(Y.Lp2,{size:18}):(0,r.jsx)(f.RB5,{size:18})})]})};function sn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function dn(){var n=sn(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return dn=function(){return n},n}function hn(){var n=sn(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return hn=function(){return n},n}var pn=u.ZP.div.withConfig({componentId:"sc-8f2d3d6a-0"})(dn(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),bn=u.ZP.button.withConfig({componentId:"sc-8f2d3d6a-1"})(hn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),mn=function(){var n=(0,E.ZR)(),e=n.states,t=n.dispatch;return(0,r.jsxs)(pn,{children:[(0,r.jsx)(bn,{"aria-label":"fullscreen",onClick:function(){return t({type:O.n.TOGGLE_DOCK})},children:(0,r.jsx)(f.vju,{})}),(0,r.jsx)(bn,{"aria-label":"switch theme",onClick:function(){return t({type:O.n.TOGGLE_THEME})},children:e.settings.lightmode?(0,r.jsx)(J.Fxr,{}):(0,r.jsx)(J.YGJ,{})}),(0,r.jsx)(fn,{}),(0,r.jsx)(bn,{"aria-label":"save",onClick:function(){localStorage.setItem("json",e.json),d.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(f.JMf,{})}),(0,r.jsx)(bn,{"aria-label":"center canvas",onClick:function(){return t({type:O.n.CENTER_VIEW})},children:(0,r.jsx)(l.XIv,{})}),(0,r.jsx)(bn,{"aria-label":"zoom out",onClick:function(){return t({type:O.n.ZOOM_OUT})},children:(0,r.jsx)(f.ywL,{})}),(0,r.jsx)(bn,{"aria-label":"zoom in",onClick:function(){return t({type:O.n.ZOOM_IN})},children:(0,r.jsx)(f.Lfi,{})})]})},yn=t(8188);function gn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function vn(){var n=gn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return vn=function(){return n},n}function xn(){var n=gn(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  min-height: 50;\n  color: ",";\n"]);return xn=function(){return n},n}function jn(){var n=gn(["\n  pointer-events: none;\n\n  &.searched {\n    border: 2px solid ",";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    background-color: rgba(255, 0, 255, 0.5);\n    filter: hue-rotate();\n  }\n"]);return jn=function(){return n},n}function wn(){var n=gn(["\n  color: ",";\n"]);return wn=function(){return n},n}function On(){var n=gn(["\n  height: fit-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return On=function(){return n},n}var En=u.ZP.div.withConfig({componentId:"sc-8fb69bb-0"})(vn()),Sn=u.ZP.pre.withConfig({componentId:"sc-8fb69bb-1"})(xn(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),Pn=u.ZP.foreignObject.withConfig({componentId:"sc-8fb69bb-2"})(jn(),(function(n){return n.theme.TEXT_POSITIVE})),Cn=u.ZP.span.withConfig({componentId:"sc-8fb69bb-3"})(wn(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.ORANGE:t?"#5c87ff":e.TEXT_POSITIVE})),In=u.ZP.span.withConfig({componentId:"sc-8fb69bb-4"})(On(),(function(n){var e=n.width;return"".concat(e-20,"px")})),An=function(n){var e=n.width,t=n.height,o=n.value,i=n.x,c=n.y;return(0,r.jsx)(Pn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(En,{children:(0,r.jsx)(Sn,{width:e,height:t,children:o.map((function(n,t){return n[1]&&(0,r.jsxs)(In,{"data-key":n[1],"data-x":i,"data-y":c,width:e,children:[(0,r.jsxs)(Cn,{objectKey:!0,children:[n[0],": "]}),n[1]]},t)}))})})})},Rn=function(n){var e=n.width,t=n.height,o=n.value,i=n.isParent,c=void 0!==i&&i,u=n.x,a=n.y;return(0,r.jsx)(Pn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(En,{children:(0,r.jsx)(Sn,{width:e,height:t,children:(0,r.jsx)(Cn,{"data-x":u,"data-y":a,"data-key":o,parent:c,children:o})})})})};function Tn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Nn={fill:"transparent",stroke:"transparent",strokeWidth:0},kn=function(n){var e=n.properties;return(0,r.jsx)(yn.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Tn(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(yn.Label,{style:Nn}),children:function(){var t,o,i=n.width,c=n.height;if(t=e.text,null!=(o=Object)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](t):t instanceof o){var u=Object.entries(e.text);return(0,r.jsx)(An,{x:n.x,y:n.y,width:i,height:c,value:u})}return(0,r.jsx)(Rn,{isParent:e.data.isParent,width:i,height:c,value:e.text,x:n.x,y:n.y})}}))},zn=o.memo(kn),_n=t(1676);function Zn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Gn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ln(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Zn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Dn=function(){var n=Ln(o.useState([]),2),e=n[0],t=n[1],i=Ln(o.useState([]),2),c=i[0],u=i[1],a=Ln(o.useState({width:2e3,height:2e3}),2),l=a[0],f=a[1],s=(0,E.ZR)().states,d=s.json,h=s.settings;o.useEffect((function(){var n=(0,_n.h)(d,h.expand),e=n.nodes,r=n.edges;t(e),u(r)}),[d,h.expand]);return(0,r.jsx)(yn.Canvas,{nodes:e,node:function(n){return(0,r.jsx)(zn,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Gn(n,e,t[e])}))}return n}({},n))},edges:c,maxWidth:l.width,maxHeight:l.height,zoomable:!1,direction:h.layout,readonly:!0,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()},onLayoutChange:function(n){n.width&&n.height&&f({width:n.width,height:n.height})}},h.layout)};function Mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Un(){var n=Mn(["\n  position: relative;\n"]);return Un=function(){return n},n}function Bn(){var n=Mn(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 36px);\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return Bn=function(){return n},n}var Kn=u.ZP.div.withConfig({componentId:"sc-b39ef16a-0"})(Un()),Vn=u.ZP.div.withConfig({componentId:"sc-b39ef16a-1"})(Bn(),(function(n){return n.theme.BACKGROUND_NODE})),Jn={step:.05},Yn=o.memo((function(){var n=(0,E.ZR)().dispatch;return(0,r.jsxs)(Kn,{children:[(0,r.jsx)(mn,{}),(0,r.jsx)(Vn,{children:(0,r.jsx)(V.d$,{maxScale:1.8,minScale:.4,initialScale:.8,wheel:Jn,onInit:function(e){return n({type:O.n.SET_ZOOM_PAN_PICNH_REF,payload:e})},children:(0,r.jsx)(V.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(Dn,{})})})})]})})),Fn=t(4981),Hn=t(8485);function Xn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function $n(){var n=Wn(["\n  z-index: 5;\n"]);return $n=function(){return n},n}function qn(){var n=Wn(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return qn=function(){return n},n}function Qn(){var n=Wn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return Qn=function(){return n},n}function ne(){var n=Wn(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return ne=function(){return n},n}var ee=u.ZP.div.withConfig({componentId:"sc-b1c8974a-0"})($n()),te=u.ZP.button.withConfig({componentId:"sc-b1c8974a-1"})(qn(),(function(n){var e=n.theme;return n.error?e.DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.DANGER})),re=u.ZP.span.withConfig({componentId:"sc-b1c8974a-2"})(Qn()),oe=u.ZP.pre.withConfig({componentId:"sc-b1c8974a-3"})(ne(),(function(n){return n.theme.DANGER}),(function(n){return n.theme.SILVER_DARK})),ie=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(ee,{children:[(0,r.jsxs)(te,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Xn(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(re,{children:[e.message?(0,r.jsx)(l.pKf,{size:20}):(0,r.jsx)(l.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(l.Faw,{size:22}):(0,r.jsx)(l.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(oe,{children:e.message})]})};function ce(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ue(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ae(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){ue(n,e,t[e])}))}return n}function le(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return ce(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(){var n,e,t=(n=["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return fe=function(){return t},t}t(252),t(6266),t(4203);var se=u.ZP.div.withConfig({componentId:"sc-96cb4f44-0"})(fe()),de={useWorker:!1,fontSize:12,tabSize:2,showPrintMargin:!1,wrap:!0},he=function(){var n=(0,E.ZR)(),e=n.states,t=e.json,i=e.settings,c=n.dispatch,u=le(o.useState("auto"),2),a=u[0],l=u[1],f=le(o.useState(JSON.stringify(JSON.parse(t),null,2)),2),s=f[0],d=f[1],h=le(o.useState({message:"",isExpanded:!0}),2),p=h[0],b=h[1],m=o.useMemo((function(){return i.lightmode?"github":"tomorrow_night"}),[i.lightmode]);return o.useEffect((function(){var n=new ResizeObserver((function(n){var e=n[0].contentRect.width;l(e?e.toString():"auto")})),e=document.querySelector(".ace_scroller");return e&&n.observe(e),function(){n.disconnect()}}),[t]),o.useEffect((function(){if(i.autoformat)return d(JSON.stringify(JSON.parse(t),null,2));d(t)}),[i.autoformat,t]),o.useEffect((function(){var n=setTimeout((function(){try{if(""===s)return b((function(n){return ae({},n,{message:""})}));var n=(0,Hn.Z)(s);i.autoformat?d(JSON.stringify(n,null,2)):d(s),c({type:O.n.SET_JSON,payload:s}),b((function(n){return ae({},n,{message:""})}))}catch(e){b((function(n){return ae({},n,{message:e.message})}))}}),1800);return function(){return clearTimeout(n)}}),[s,i.autoformat,c]),(0,r.jsxs)(se,{children:[(0,r.jsx)(ie,{error:p,setError:b}),(0,r.jsx)(Fn.ZP,{height:"100%",mode:"json",value:s,onChange:d,theme:m,width:a,setOptions:de})]})},pe=o.memo(he),be=t(1639);function me(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 700;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return me=function(){return t},t}var ye=u.ZP.div.withConfig({componentId:"sc-c29e823a-0"})(me(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),ge=function(){var n=(0,S.useRouter)();return(0,r.jsxs)(ye,{children:["This app is not compatible with your device!",(0,r.jsx)(be.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},ve=t(524);t(7786);function xe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function je(){var n=xe(["\n  display: flex;\n  height: 100vh;\n"]);return je=function(){return n},n}function we(){var n=xe(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return we=function(){return n},n}function Oe(){var n=xe(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n"]);return Oe=function(){return n},n}var Ee=u.ZP.div.withConfig({componentId:"sc-dba5e242-0"})(je()),Se=u.ZP.div.withConfig({componentId:"sc-dba5e242-1"})(we()),Pe=(0,u.ZP)(ve.o).withConfig({componentId:"sc-dba5e242-2"})(Oe(),(function(n){return n.theme.BACKGROUND_SECONDARY})),Ce=function(){var n=(0,E.ZR)().states.settings;return(0,r.jsxs)(Ee,{children:[(0,r.jsx)(K,{}),(0,r.jsx)(Se,{children:(0,r.jsxs)(Pe,{children:[(0,r.jsx)(ve.o.Pane,{preferredSize:450,minSize:300,maxSize:600,visible:!n.hideEditor,children:(0,r.jsx)(pe,{})}),(0,r.jsx)(ve.o.Pane,{children:(0,r.jsx)(Yn,{})})]})}),(0,r.jsx)(ge,{})]})}}}]);