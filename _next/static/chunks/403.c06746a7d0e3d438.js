"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{6981:function(e,n,t){e.exports=function(e,n){var t=function(){return(t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u]);return e}).apply(this,arguments)};function r(e,t,r){var u=n.useRef(t);n.useEffect(function(){u.current=t}),n.useEffect(function(){var n=void 0===r?window:r,t=function(e){return u.current(e)};return null==n||n.addEventListener(e,t),function(){null==n||n.removeEventListener(e,t)}},[e,r])}var u=function(){var e=n.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),r=e[0],u=e[1];return n.useEffect(function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;u(function(n){return t(t({},n),{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){var e,t,r,u,i;return!!((null===(e=n.Android())||void 0===e?void 0:e.length)||(null===(t=n.BlackBerry())||void 0===t?void 0:t.length)||(null===(r=n.iOS())||void 0===r?void 0:r.length)||n.iPad()||(null===(u=n.OperaMini())||void 0===u?void 0:u.length)||(null===(i=n.IEMobile())||void 0===i?void 0:i.length))}})})}},[]),r};function i(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if("function"!=typeof n)throw TypeError("callback must be a function");for(var u=Object(e),i=u.length>>>0,o=t[2],c=0;c<i;c++){var l=u[c];if(n.call(o,l,c,u))return l}}function o(u){var o=u.clickables,c=void 0===o?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:o,l=u.children,a=u.color,s=void 0===a?"220, 90, 90":a,f=u.innerScale,d=void 0===f?.6:f,v=u.innerSize,S=void 0===v?8:v,y=u.innerStyle,p=u.outerAlpha,h=void 0===p?.4:p,m=u.outerScale,b=void 0===m?6:m,g=u.outerSize,E=void 0===g?8:g,x=u.outerStyle,z=u.showSystemCursor,k=void 0!==z&&z,j=u.trailingSpeed,w=void 0===j?8:j,A=n.useMemo(function(){return{children:l,color:s,innerScale:d,innerSize:S,innerStyle:y,outerAlpha:h,outerScale:b,outerSize:E,outerStyle:x}},[l,s,d,S,y,h,b,E,x]),C=n.useRef(null),O=n.useRef(null),L=n.useRef(null),M=n.useRef(null),I=n.useState({x:0,y:0}),P=I[0],B=I[1],R=n.useState(!1),F=R[0],_=R[1],q=n.useState(A),N=q[0],T=q[1],X=n.useState(!1),Y=X[0],D=X[1],G=n.useState(!1),H=G[0],J=G[1],K=n.useRef(0),Q=n.useRef(0),U=n.useCallback(function(e){var n=e.clientX,t=e.clientY;B({x:n,y:t}),null!==O.current&&(O.current.style.top="".concat(t,"px"),O.current.style.left="".concat(n,"px")),K.current=n,Q.current=t},[]),V=n.useCallback(function(e){void 0!==M.current&&(P.x+=(K.current-P.x)/w,P.y+=(Q.current-P.y)/w,null!==C.current&&(C.current.style.top="".concat(P.y,"px"),C.current.style.left="".concat(P.x,"px"))),M.current=e,L.current=requestAnimationFrame(V)},[L]);n.useEffect(function(){return L.current=requestAnimationFrame(V),function(){null!==L.current&&cancelAnimationFrame(L.current)}},[V]);var W=function(e,n){return"".concat(parseInt(String(e*n)),"px")},Z=n.useCallback(function(e,n,t){e&&(e.style.height=W(n,t),e.style.width=W(n,t))},[]),$=n.useCallback(function(){return D(!0)},[]),ee=n.useCallback(function(){return D(!1)},[]),en=n.useCallback(function(){return _(!0)},[]),et=n.useCallback(function(){return _(!1)},[]);r("mousemove",U),r("mousedown",$),r("mouseup",ee),r("mouseover",en),r("mouseout",et),n.useEffect(function(){Y?(Z(O.current,N.innerSize,N.innerScale),Z(C.current,N.outerSize,N.outerScale)):(Z(O.current,N.innerSize,1),Z(C.current,N.outerSize,1))},[N.innerSize,N.innerScale,N.outerSize,N.outerScale,Z,Y]),n.useEffect(function(){H&&(Z(O.current,N.innerSize,1.2*N.innerScale),Z(C.current,N.outerSize,1.4*N.outerScale))},[N.innerSize,N.innerScale,N.outerSize,N.outerScale,Z,H]),n.useEffect(function(){null!=O.current&&null!=C.current&&(F?(O.current.style.opacity="1",C.current.style.opacity="1"):(O.current.style.opacity="0",C.current.style.opacity="0"))},[F]),n.useEffect(function(){var e=document.querySelectorAll(c.map(function(e){return"object"==typeof e&&(null==e?void 0:e.target)?e.target:null!=e?e:""}).join(","));return e.forEach(function(e){k||(e.style.cursor="none");var n="object"==typeof c?i(c,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=t(t({},A),n);e.addEventListener("mouseover",function(){D(!0),T(r)}),e.addEventListener("click",function(){D(!0),J(!1)}),e.addEventListener("mousedown",function(){J(!0)}),e.addEventListener("mouseup",function(){D(!0)}),e.addEventListener("mouseout",function(){D(!1),J(!1),T(A)})}),function(){e.forEach(function(e){var n="object"==typeof c?i(c,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=t(t({},A),n);e.removeEventListener("mouseover",function(){D(!0),T(r)}),e.removeEventListener("click",function(){D(!0),J(!1)}),e.removeEventListener("mousedown",function(){J(!0)}),e.removeEventListener("mouseup",function(){D(!0)}),e.removeEventListener("mouseout",function(){D(!1),J(!1),T(A)})})}},[Y,c,k,A]),n.useEffect(function(){k||(document.body.style.cursor="none")},[k]);var er={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},eu={cursorInner:t(t({width:N.children?"auto":N.innerSize,height:N.children?"auto":N.innerSize,backgroundColor:N.children?"transparent":"rgba(".concat(N.color,", 1)")},er),N.innerStyle&&N.innerStyle),cursorOuter:t(t({width:N.outerSize,height:N.outerSize,backgroundColor:"rgba(".concat(N.color,", ").concat(N.outerAlpha,")")},er),N.outerStyle&&N.outerStyle)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:C,style:eu.cursorOuter}),e.jsx("div",t({ref:O,style:eu.cursorInner},{children:e.jsx("div",t({style:{opacity:N.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:N.children}))}))]})}return function(n){var r=n.children,i=n.clickables,c=n.color,l=n.innerScale,a=n.innerSize,s=n.innerStyle,f=n.outerAlpha,d=n.outerScale,v=n.outerSize,S=n.outerStyle,y=n.showSystemCursor,p=n.trailingSpeed,h=u();return"undefined"!=typeof navigator&&h.any()?e.jsx(e.Fragment,{}):e.jsx(o,t({clickables:i,color:c,innerScale:l,innerSize:a,innerStyle:s,outerAlpha:f,outerScale:d,outerSize:v,outerStyle:S,showSystemCursor:y,trailingSpeed:p},{children:r}))}}(t(7348),t(5346))},8403:function(e,n,t){t.r(n);var r=t(7348);t(5346);var u=t(6981),i=t.n(u);n.default=()=>(0,r.jsx)("div",{className:"relative z-[99999999999]",children:(0,r.jsx)(i(),{color:"217,217,217",innerSize:20,outerSize:40,innerAlpha:.4,outerAlpha:.2,innerScale:.2,outerScale:2,clickables:["a","button"]})})}}]);