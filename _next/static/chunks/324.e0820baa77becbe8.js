"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{343:function(e,n,t){e.exports=function(e,n){var t=function(){return(t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function r(e,t,r){var i=n.useRef(t);n.useEffect(function(){i.current=t}),n.useEffect(function(){var n=void 0===r?window:r,t=function(e){return i.current(e)};return null==n||n.addEventListener(e,t),function(){null==n||n.removeEventListener(e,t)}},[e,r])}var i=function(){var e=n.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),r=e[0],i=e[1];return n.useEffect(function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;i(function(n){return t(t({},n),{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){var e,t,r,i,u;return!!((null===(e=n.Android())||void 0===e?void 0:e.length)||(null===(t=n.BlackBerry())||void 0===t?void 0:t.length)||(null===(r=n.iOS())||void 0===r?void 0:r.length)||n.iPad()||(null===(i=n.OperaMini())||void 0===i?void 0:i.length)||(null===(u=n.IEMobile())||void 0===u?void 0:u.length))}})})}},[]),r};function u(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if("function"!=typeof n)throw TypeError("callback must be a function");for(var i=Object(e),u=i.length>>>0,o=t[2],c=0;c<u;c++){var l=i[c];if(n.call(o,l,c,i))return l}}function o(i){var o=i.clickables,c=void 0===o?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:o,l=i.children,a=i.color,s=void 0===a?"220, 90, 90":a,f=i.innerScale,d=void 0===f?.6:f,v=i.innerSize,y=void 0===v?8:v,S=i.innerStyle,p=i.outerAlpha,h=void 0===p?.4:p,m=i.outerScale,b=void 0===m?6:m,g=i.outerSize,E=void 0===g?8:g,x=i.outerStyle,z=i.showSystemCursor,k=void 0!==z&&z,j=i.trailingSpeed,w=void 0===j?8:j,A=n.useMemo(function(){return{children:l,color:s,innerScale:d,innerSize:y,innerStyle:S,outerAlpha:h,outerScale:b,outerSize:E,outerStyle:x}},[l,s,d,y,S,h,b,E,x]),C=n.useRef(null),O=n.useRef(null),L=n.useRef(null),I=n.useRef(null),M=n.useState({x:0,y:0}),P=M[0],B=M[1],R=n.useState(!1),F=R[0],_=R[1],q=n.useState(A),T=q[0],N=q[1],X=n.useState(!1),Y=X[0],D=X[1],G=n.useState(!1),H=G[0],J=G[1],K=n.useRef(0),Q=n.useRef(0),U=n.useCallback(function(e){var n=e.clientX,t=e.clientY;B({x:n,y:t}),null!==O.current&&(O.current.style.top="".concat(t,"px"),O.current.style.left="".concat(n,"px")),K.current=n,Q.current=t},[]),V=n.useCallback(function(e){void 0!==I.current&&(P.x+=(K.current-P.x)/w,P.y+=(Q.current-P.y)/w,null!==C.current&&(C.current.style.top="".concat(P.y,"px"),C.current.style.left="".concat(P.x,"px"))),I.current=e,L.current=requestAnimationFrame(V)},[L]);n.useEffect(function(){return L.current=requestAnimationFrame(V),function(){null!==L.current&&cancelAnimationFrame(L.current)}},[V]);var W=function(e,n){return"".concat(parseInt(String(e*n)),"px")},Z=n.useCallback(function(e,n,t){e&&(e.style.height=W(n,t),e.style.width=W(n,t))},[]),$=n.useCallback(function(){return D(!0)},[]),ee=n.useCallback(function(){return D(!1)},[]),en=n.useCallback(function(){return _(!0)},[]),et=n.useCallback(function(){return _(!1)},[]);r("mousemove",U),r("mousedown",$),r("mouseup",ee),r("mouseover",en),r("mouseout",et),n.useEffect(function(){Y?(Z(O.current,T.innerSize,T.innerScale),Z(C.current,T.outerSize,T.outerScale)):(Z(O.current,T.innerSize,1),Z(C.current,T.outerSize,1))},[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Z,Y]),n.useEffect(function(){H&&(Z(O.current,T.innerSize,1.2*T.innerScale),Z(C.current,T.outerSize,1.4*T.outerScale))},[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Z,H]),n.useEffect(function(){null!=O.current&&null!=C.current&&(F?(O.current.style.opacity="1",C.current.style.opacity="1"):(O.current.style.opacity="0",C.current.style.opacity="0"))},[F]),n.useEffect(function(){var e=document.querySelectorAll(c.map(function(e){return"object"==typeof e&&(null==e?void 0:e.target)?e.target:null!=e?e:""}).join(","));return e.forEach(function(e){k||(e.style.cursor="none");var n="object"==typeof c?u(c,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=t(t({},A),n);e.addEventListener("mouseover",function(){D(!0),N(r)}),e.addEventListener("click",function(){D(!0),J(!1)}),e.addEventListener("mousedown",function(){J(!0)}),e.addEventListener("mouseup",function(){D(!0)}),e.addEventListener("mouseout",function(){D(!1),J(!1),N(A)})}),function(){e.forEach(function(e){var n="object"==typeof c?u(c,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=t(t({},A),n);e.removeEventListener("mouseover",function(){D(!0),N(r)}),e.removeEventListener("click",function(){D(!0),J(!1)}),e.removeEventListener("mousedown",function(){J(!0)}),e.removeEventListener("mouseup",function(){D(!0)}),e.removeEventListener("mouseout",function(){D(!1),J(!1),N(A)})})}},[Y,c,k,A]),n.useEffect(function(){k||(document.body.style.cursor="none")},[k]);var er={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},ei={cursorInner:t(t({width:T.children?"auto":T.innerSize,height:T.children?"auto":T.innerSize,backgroundColor:T.children?"transparent":"rgba(".concat(T.color,", 1)")},er),T.innerStyle&&T.innerStyle),cursorOuter:t(t({width:T.outerSize,height:T.outerSize,backgroundColor:"rgba(".concat(T.color,", ").concat(T.outerAlpha,")")},er),T.outerStyle&&T.outerStyle)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:C,style:ei.cursorOuter}),e.jsx("div",t({ref:O,style:ei.cursorInner},{children:e.jsx("div",t({style:{opacity:T.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:T.children}))}))]})}return function(n){var r=n.children,u=n.clickables,c=n.color,l=n.innerScale,a=n.innerSize,s=n.innerStyle,f=n.outerAlpha,d=n.outerScale,v=n.outerSize,y=n.outerStyle,S=n.showSystemCursor,p=n.trailingSpeed,h=i();return"undefined"!=typeof navigator&&h.any()?e.jsx(e.Fragment,{}):e.jsx(o,t({clickables:u,color:c,innerScale:l,innerSize:a,innerStyle:s,outerAlpha:f,outerScale:d,outerSize:v,outerStyle:y,showSystemCursor:S,trailingSpeed:p},{children:r}))}}(t(4454),t(1441))},6324:function(e,n,t){t.r(n);var r=t(4454);t(1441);var i=t(343),u=t.n(i);n.default=()=>(0,r.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:50,pointerEvents:"none"},children:(0,r.jsx)(u(),{color:"217,217,217",innerSize:20,outerSize:40,innerAlpha:.4,outerAlpha:.2,innerScale:.2,outerScale:2,clickables:["a","button"]})})}}]);