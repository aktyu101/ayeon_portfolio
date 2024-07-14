"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{7324:function(e){var t,r,n,o,i,l,a,u,s,c,d,f,h,p,m,v,w,g,b,y,S,E;e.exports=(t="millisecond",r="second",n="minute",o="hour",i="week",l="month",a="quarter",u="year",s="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(m={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},v="$isDayjsObject",w=function(e){return e instanceof S||!(!e||!e[v])},g=function e(t,r,n){var o;if(!t)return p;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(o=i),r&&(m[i]=r,o=i);var l=t.split("-");if(!o&&l.length>1)return e(l[0])}else{var a=t.name;m[a]=t,o=a}return!n&&o&&(p=o),o||!n&&p},b=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},(y={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,l),i=r-o<0,a=t.clone().add(n+(i?-1:1),l);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:l,y:u,w:i,d:"day",D:s,h:o,m:n,s:r,ms:t,Q:a})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,y.i=w,y.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},E=(S=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return b(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<b(e)},h.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var a=this,c=!!y.u(t)||t,d=y.p(e),f=function(e,t){var r=y.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return c?r:r.endOf("day")},h=function(e,t){return y.w(a.toDate()[e].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},p=this.$W,m=this.$M,v=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case i:var g=this.$locale().weekStart||0,b=(p<g?p+7:p)-g;return f(c?v-b:v+(6-b),m);case"day":case s:return h(w+"Hours",0);case o:return h(w+"Minutes",1);case n:return h(w+"Seconds",2);case r:return h(w+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,i){var a,c=y.p(e),d="set"+(this.$u?"UTC":""),f=((a={}).day=d+"Date",a[s]=d+"Date",a[l]=d+"Month",a[u]=d+"FullYear",a[o]=d+"Hours",a[n]=d+"Minutes",a[r]=d+"Seconds",a[t]=d+"Milliseconds",a)[c],h="day"===c?this.$D+(i-this.$W):i;if(c===l||c===u){var p=this.clone().set(s,1);p.$d[f](h),p.init(),this.$d=p.set(s,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,t){var a,s=this;e=Number(e);var c=y.p(t),d=function(t){var r=b(s);return y.w(r.date(r.date()+Math.round(t*e)),s)};if(c===l)return this.set(l,this.$M+e);if(c===u)return this.set(u,this.$y+e);if("day"===c)return d(1);if(c===i)return d(7);var f=((a={})[n]=6e4,a[o]=36e5,a[r]=1e3,a)[c]||1,h=this.$d.getTime()+e*f;return y.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=y.z(this),i=this.$H,l=this.$m,a=this.$M,u=r.weekdays,s=r.months,d=r.meridiem,h=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},p=function(e){return y.s(i%12||12,e,"0")},m=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return a+1;case"MM":return y.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,s,3);case"MMMM":return h(s,a);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(r.weekdaysMin,t.$W,u,2);case"ddd":return h(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return y.s(i,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(i,l,!0);case"A":return m(i,l,!1);case"m":return String(l);case"mm":return y.s(l,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,s){var c,d=this,f=y.p(t),h=b(e),p=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,v=function(){return y.m(d,h)};switch(f){case u:c=v()/12;break;case l:c=v();break;case a:c=v()/3;break;case i:c=(m-p)/6048e5;break;case"day":c=(m-p)/864e5;break;case o:c=m/36e5;break;case n:c=m/6e4;break;case r:c=m/1e3;break;default:c=m}return s?c:y.a(c)},h.daysInMonth=function(){return this.endOf(l).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=g(e,t,!0);return n&&(r.$L=n),r},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,b.prototype=E,[["$ms",t],["$s",r],["$m",n],["$H",o],["$W","day"],["$M",l],["$y",u],["$D",s]].forEach(function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,S,b),e.$i=!0),b},b.locale=g,b.isDayjs=w,b.unix=function(e){return b(1e3*e)},b.en=m[p],b.Ls=m,b.p={},b)},9448:function(e,t,r){function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Ns:function(){return K},fC:function(){return Q},gb:function(){return M},q4:function(){return k},l_:function(){return G}});var o=r(5346),i=r(7323);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.useCallback)(l(...t),t)}let u=(0,o.forwardRef)((e,t)=>{let{children:r,...i}=e,l=o.Children.toArray(r),a=l.find(d);if(a){let e=a.props.children,r=l.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(s,n({},i,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(s,n({},i,{ref:t}),r)});u.displayName="Slot";let s=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];i(...t),o(...t)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?l(t,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});s.displayName="SlotClone";let c=e=>{let{children:t}=e;return(0,o.createElement)(o.Fragment,null,t)};function d(e){return(0,o.isValidElement)(e)&&e.type===c}let f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:i,...l}=e,a=i?u:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(a,n({},l,{ref:r}))});return r.displayName="Primitive.".concat(t),{...e,[t]:r}},{}),h=(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},p=e=>{let{present:t,children:r}=e,n=function(e){var t,r;let[n,l]=(0,o.useState)(),a=(0,o.useRef)({}),u=(0,o.useRef)(e),s=(0,o.useRef)("none"),[c,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return(0,o.useEffect)(()=>{let e=m(a.current);s.current="mounted"===c?e:"none"},[c]),h(()=>{let t=a.current,r=u.current;if(r!==e){let n=s.current,o=m(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),h(()=>{if(n){let e=e=>{let t=m(a.current).includes(e.animationName);e.target===n&&t&&(0,i.flushSync)(()=>d("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=m(a.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}d("ANIMATION_END")},[n,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:(0,o.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),l(e)},[])}}(t),l="function"==typeof r?r({present:n.isPresent}):o.Children.only(r),u=a(n.ref,l.ref);return"function"==typeof r||n.isPresent?(0,o.cloneElement)(l,{ref:u}):null};function m(e){return(null==e?void 0:e.animationName)||"none"}function v(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>function(){for(var e,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...n)},[])}p.displayName="Presence";let w=(0,o.createContext)(void 0);function g(e,t){let{checkForDefaultPrevented:r=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}let b="ScrollArea",[y,S]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],n=()=>{let t=r.map(e=>(0,o.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,o.useMemo)(()=>({["__scope".concat(e)]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let i=(0,o.createContext)(n),l=r.length;function a(t){let{scope:r,children:n,...a}=t,u=(null==r?void 0:r[e][l])||i,s=(0,o.useMemo)(()=>a,Object.values(a));return(0,o.createElement)(u.Provider,{value:s},n)}return r=[...r,n],a.displayName=t+"Provider",[a,function(r,a){let u=(null==a?void 0:a[e][l])||i,s=(0,o.useContext)(u);if(s)return s;if(void 0!==n)return n;throw Error("`".concat(r,"` must be used within `").concat(t,"`"))}]},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n=t[0];if(1===t.length)return n;let i=()=>{let e=t.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(t){let r=e.reduce((e,r)=>{let{useScope:n,scopeName:o}=r,i=n(t)["__scope".concat(o)];return{...e,...i}},{});return(0,o.useMemo)(()=>({["__scope".concat(n.scopeName)]:r}),[r])}};return i.scopeName=n.scopeName,i}(n,...t)]}(b),[E,$]=y(b),T=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:l,scrollHideDelay:u=600,...s}=e,[c,d]=(0,o.useState)(null),[h,p]=(0,o.useState)(null),[m,v]=(0,o.useState)(null),[g,b]=(0,o.useState)(null),[y,S]=(0,o.useState)(null),[$,T]=(0,o.useState)(0),[C,D]=(0,o.useState)(0),[M,_]=(0,o.useState)(!1),[N,A]=(0,o.useState)(!1),O=a(t,e=>d(e)),R=function(e){let t=(0,o.useContext)(w);return e||t||"ltr"}(l);return(0,o.createElement)(E,{scope:r,type:i,dir:R,scrollHideDelay:u,scrollArea:c,viewport:h,onViewportChange:p,content:m,onContentChange:v,scrollbarX:g,onScrollbarXChange:b,scrollbarXEnabled:M,onScrollbarXEnabledChange:_,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:N,onScrollbarYEnabledChange:A,onCornerWidthChange:T,onCornerHeightChange:D},(0,o.createElement)(f.div,n({dir:R},s,{ref:O,style:{position:"relative","--radix-scroll-area-corner-width":$+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:i,...l}=e,u=$("ScrollAreaViewport",r),s=a(t,(0,o.useRef)(null),u.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(f.div,n({"data-radix-scroll-area-viewport":""},l,{ref:s,style:{overflowX:u.scrollbarXEnabled?"scroll":"hidden",overflowY:u.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:u.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),D="ScrollAreaScrollbar",M=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...i}=e,l=$(D,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:u}=l,s="horizontal"===e.orientation;return(0,o.useEffect)(()=>(s?a(!0):u(!0),()=>{s?a(!1):u(!1)}),[s,a,u]),"hover"===l.type?(0,o.createElement)(_,n({},i,{ref:t,forceMount:r})):"scroll"===l.type?(0,o.createElement)(N,n({},i,{ref:t,forceMount:r})):"auto"===l.type?(0,o.createElement)(A,n({},i,{ref:t,forceMount:r})):"always"===l.type?(0,o.createElement)(O,n({},i,{ref:t})):null}),_=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...i}=e,l=$(D,e.__scopeScrollArea),[a,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=l.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),u(!0)},n=()=>{t=window.setTimeout(()=>u(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[l.scrollArea,l.scrollHideDelay]),(0,o.createElement)(p,{present:r||a},(0,o.createElement)(A,n({"data-state":a?"visible":"hidden"},i,{ref:t})))}),N=(0,o.forwardRef)((e,t)=>{var r;let{forceMount:i,...l}=e,a=$(D,e.__scopeScrollArea),u="horizontal"===e.orientation,s=q(()=>d("SCROLL_END"),100),[c,d]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===c){let e=window.setTimeout(()=>d("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[c,a.scrollHideDelay,d]),(0,o.useEffect)(()=>{let e=a.viewport,t=u?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(d("SCROLL"),s()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[a.viewport,u,d,s]),(0,o.createElement)(p,{present:i||"hidden"!==c},(0,o.createElement)(O,n({"data-state":"hidden"===c?"hidden":"visible"},l,{ref:t,onPointerEnter:g(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:g(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),A=(0,o.forwardRef)((e,t)=>{let r=$(D,e.__scopeScrollArea),{forceMount:i,...l}=e,[a,u]=(0,o.useState)(!1),s="horizontal"===e.orientation,c=q(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;u(s?e:t)}},10);return J(r.viewport,c),J(r.content,c),(0,o.createElement)(p,{present:i||a},(0,o.createElement)(O,n({"data-state":a?"visible":"hidden"},l,{ref:t})))}),O=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...i}=e,l=$(D,e.__scopeScrollArea),a=(0,o.useRef)(null),u=(0,o.useRef)(0),[s,c]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=F(s.viewport,s.content),f={...i,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>u.current=0,onThumbPointerDown:e=>u.current=e};function h(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=V(r),i=t||o/2,l=r.scrollbar.paddingStart+i,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-i),u=r.content-r.viewport;return B([l,a],"ltr"===n?[0,u]:[-1*u,0])(e)}(e,u.current,s,t)}return"horizontal"===r?(0,o.createElement)(R,n({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&a.current){let e=j(l.viewport.scrollLeft,s,l.dir);a.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=h(e,l.dir))}})):"vertical"===r?(0,o.createElement)(L,n({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&a.current){let e=j(l.viewport.scrollTop,s);a.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=h(e))}})):null}),R=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:i,...l}=e,u=$(D,e.__scopeScrollArea),[s,c]=(0,o.useState)(),d=(0,o.useRef)(null),f=a(t,d,u.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,o.createElement)(H,n({"data-orientation":"horizontal"},l,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===u.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===u.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":V(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(u.viewport){let n=u.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&u.viewport&&s&&i({content:u.viewport.scrollWidth,viewport:u.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}}))}),L=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:i,...l}=e,u=$(D,e.__scopeScrollArea),[s,c]=(0,o.useState)(),d=(0,o.useRef)(null),f=a(t,d,u.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,o.createElement)(H,n({"data-orientation":"vertical"},l,{ref:f,sizes:r,style:{top:0,right:"ltr"===u.dir?0:void 0,left:"rtl"===u.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":V(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(u.viewport){let n=u.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&u.viewport&&s&&i({content:u.viewport.scrollHeight,viewport:u.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}}))}),[P,x]=y(D),H=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:l,onThumbChange:u,onThumbPointerUp:s,onThumbPointerDown:c,onThumbPositionChange:d,onDragScroll:h,onWheelScroll:p,onResize:m,...w}=e,b=$(D,r),[y,S]=(0,o.useState)(null),E=a(t,e=>S(e)),T=(0,o.useRef)(null),C=(0,o.useRef)(""),M=b.viewport,_=i.content-i.viewport,N=v(p),A=v(d),O=q(m,10);function R(e){T.current&&h({x:e.clientX-T.current.left,y:e.clientY-T.current.top})}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target;(null==y?void 0:y.contains(t))&&N(e,_)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[M,y,_,N]),(0,o.useEffect)(A,[i,A]),J(y,O),J(b.content,O),(0,o.createElement)(P,{scope:r,scrollbar:y,hasThumb:l,onThumbChange:v(u),onThumbPointerUp:v(s),onThumbPositionChange:A,onThumbPointerDown:v(c)},(0,o.createElement)(f.div,n({},w,{ref:E,style:{position:"absolute",...w.style},onPointerDown:g(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),T.current=y.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),R(e))}),onPointerMove:g(e.onPointerMove,R),onPointerUp:g(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=C.current,b.viewport&&(b.viewport.style.scrollBehavior=""),T.current=null})})))}),I="ScrollAreaThumb",k=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...i}=e,l=x(I,e.__scopeScrollArea);return(0,o.createElement)(p,{present:r||l.hasThumb},(0,o.createElement)(z,n({ref:t},i)))}),z=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:i,...l}=e,u=$(I,r),s=x(I,r),{onThumbPositionChange:c}=s,d=a(t,e=>s.onThumbChange(e)),h=(0,o.useRef)(),p=q(()=>{h.current&&(h.current(),h.current=void 0)},100);return(0,o.useEffect)(()=>{let e=u.viewport;if(e){let t=()=>{if(p(),!h.current){let t=Z(e,c);h.current=t,c()}};return c(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[u.viewport,p,c]),(0,o.createElement)(f.div,n({"data-state":s.hasThumb?"visible":"hidden"},l,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:g(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;s.onThumbPointerDown({x:r,y:n})}),onPointerUp:g(e.onPointerUp,s.onThumbPointerUp)}))}),U="ScrollAreaCorner",Y=(0,o.forwardRef)((e,t)=>{let r=$(U,e.__scopeScrollArea),i=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&i?(0,o.createElement)(W,n({},e,{ref:t})):null}),W=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...i}=e,l=$(U,r),[a,u]=(0,o.useState)(0),[s,c]=(0,o.useState)(0),d=!!(a&&s);return J(l.scrollbarX,()=>{var e;let t=(null===(e=l.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;l.onCornerHeightChange(t),c(t)}),J(l.scrollbarY,()=>{var e;let t=(null===(e=l.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;l.onCornerWidthChange(t),u(t)}),d?(0,o.createElement)(f.div,n({},i,{ref:t,style:{width:a,height:s,position:"absolute",right:"ltr"===l.dir?0:void 0,left:"rtl"===l.dir?0:void 0,bottom:0,...e.style}})):null});function X(e){return e?parseInt(e,10):0}function F(e,t){let r=e/t;return isNaN(r)?0:r}function V(e){let t=F(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function j(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=V(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-o,l=t.content-t.viewport,a=function(e,t){let[r,n]=t;return Math.min(n,Math.max(r,e))}(e,"ltr"===r?[0,l]:[-1*l,0]);return B([0,l],[0,i-n])(a)}function B(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let i={left:e.scrollLeft,top:e.scrollTop},l=r.left!==i.left,a=r.top!==i.top;(l||a)&&t(),r=i,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function q(e,t){let r=v(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function J(e,t){let r=v(t);h(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let Q=T,G=C,K=Y},9598:function(e,t,r){r.d(t,{W:function(){return n}});function n(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}}}]);