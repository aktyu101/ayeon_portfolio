(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{5649:function(e,t,s){Promise.resolve().then(s.bind(s,8457)),Promise.resolve().then(s.bind(s,6894))},8457:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var l=s(4454),a=s(1441),r=s(6433),n=e=>{let{onPrevPage:t,onNextPage:s,currentPage:a}=e,r="w-[148px] h-[50px] border-[#3687F7] border-[1px] text-[18px] font-medium rounded-md text-center hover:text-white hover:bg-[#3687F7] duration-200 absolute bottom-[32px]";return(0,l.jsxs)("div",{style:{width:"calc(100% - 100px)"},className:"fixed bottom-[44px] left-1/2 transform -translate-x-1/2",children:[(0,l.jsxs)("div",{className:"relative flex justify-between pb-[32px]",children:[1!==a&&(0,l.jsx)("button",{className:"".concat(r," left-0"),onClick:t,children:"이전으로"}),3!==a&&(0,l.jsx)("button",{className:"".concat(r," right-0"),onClick:s,children:"다음으로"})]}),(0,l.jsx)("div",{className:"w-[100%] box-border h-[3px] bg-[#F4F4F5] relative",children:(0,l.jsx)("div",{className:"absolute top-0 left-0 bg-[#3687F7] h-[3px]",style:{width:1===a?"33.333%":2===a?"66.666%":"100%"}})})]})};function c(){let[e,t]=(0,a.useState)(1136),[s,r]=(0,a.useState)("");return(0,a.useEffect)(()=>{let s=()=>{let s=new Date,l=new Date(s);return l.setDate(s.getDate()+(6-s.getDay()+7)%7),l.setHours(20,35,0,0),s>l&&l.setDate(l.getDate()+7),t(e+1),l},l=setInterval(()=>{let e=new Date,t=s()-e;if(t<=3e5){r("추첨 진행 중");return}let l=e=>e.toString().padStart(2,"0");r("".concat(Math.floor(t/864e5),"일 ").concat(l(Math.floor(t%864e5/36e5)),":").concat(l(Math.floor(t%36e5/6e4)),":").concat(l(Math.floor(t%6e4/1e3))))},1e3);return()=>clearInterval(l)},[]),(0,l.jsx)("div",{className:"w-full flex justify-center",children:(0,l.jsxs)("div",{className:"w-[400px] h-[44px] bg-[#F5F9FE] leading-[44px] box-border px-[20px] mt-[60px] mb-[35px] flex justify-between rounded-md",children:[(0,l.jsxs)("span",{className:"text-[18px] text-[#3687F7] font-bold",children:[e,"회"]}),(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:"text-[14px] text-[#777] mr-[8px]",children:"추첨까지 남은 시간"}),(0,l.jsx)("span",{className:"text-[#FD1E00] text-[18px] font-bold",children:s})]})]})})}var x=s(2273);function i(){let[e,t]=(0,a.useState)(!0),s=[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}],r="flex gap-x-[16px] items-baseline",n="w-[80px] h-[40px] border-solid border-[#3687F7] rounded-md";return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsxs)("div",{onClick:s=>{!1===e?t(!0):!0===e&&t(!1),console.log("click",e)},children:[(0,l.jsx)("input",{type:"checkbox",name:"round",id:"round",value:"selectRound"}),(0,l.jsx)("label",{for:"round",children:"당첨됐던 번호(게임 회차)"})]}),(0,l.jsxs)("div",{className:r,children:[(0,l.jsxs)("div",{className:"flex gap-x-[12px] items-baseline",children:[(0,l.jsx)(x.ZP,{className:n,options:s}),(0,l.jsx)("span",{children:"회차"})]}),(0,l.jsx)("div",{children:"~"}),(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)(x.ZP,{className:n,options:s}),(0,l.jsx)("span",{children:"회차"})]})]}),(0,l.jsx)("div",{children:"* 마지막 회차 1106회"})]}),(0,l.jsx)("li",{}),(0,l.jsx)("li",{}),(0,l.jsx)("li",{}),(0,l.jsx)("li",{})]})})}var d=()=>{let[e,t]=(0,a.useState)(new Set),[s,d]=(0,a.useState)(new Set),[o,h]=(0,a.useState)(new Set),[m,p]=(0,a.useState)(!0),[u,b]=(0,a.useState)(!1),[j,f]=(0,a.useState)(!0),[v,N]=(0,a.useState)(1);(0,a.useEffect)(()=>{let t=new Set(Array.from({length:45},(e,t)=>t+1));h(new Set([...t].filter(t=>!e.has(t)&&!s.has(t))))},[e,s]),(0,a.useEffect)(()=>{let e=localStorage.getItem("lottoState");if(e){let{selectedNumbers:s,excludedNumbers:l,includeChecked:a,excludeChecked:r,isClearButtonActive:n}=JSON.parse(e);t(new Set(s)),d(new Set(l)),p(a),b(r),f(n)}},[]),(0,a.useEffect)(()=>{localStorage.setItem("lottoState",JSON.stringify({selectedNumbers:Array.from(e),excludedNumbers:Array.from(s),includeChecked:m,excludeChecked:u,isClearButtonActive:j}))},[e,s,m,u,j]);let g=e=>{f(!1),m?t(t=>{let s=new Set(t);return s.has(e)?s.delete(e):s.size<5?s.add(e):alert("포함 번호는 최대 5개까지 선택 가능합니다."),s}):u&&d(t=>{let s=new Set(t);return s.has(e)?s.delete(e):s.size<38?s.add(e):alert("제외 번호는 최대 38개까지 선택 가능합니다."),s})},w=()=>{!1==j&&window.confirm("선택 번호가 해제됩니다. 초기화 하시겠습니까?")&&(t(new Set),d(new Set),f(!0))};return(0,l.jsxs)("div",{className:"bg-white h-screen",children:[(0,l.jsx)(c,{}),1===v?(0,l.jsxs)("div",{className:"flex justify-center flex-col items-center pb-[100px]",children:[(0,l.jsx)("h2",{className:"text-[#1D1C1C] text-[18px] font-medium",children:"포함 번호와 제외 번호를 선택해 주세요"}),(0,l.jsxs)("div",{className:"pt-[25px] w-[302px]",children:[(0,l.jsxs)("div",{className:"w-[302px] grid grid-cols-7",children:[(()=>{let t=[];for(let a=1;a<=45;a++){let r=e.has(a),n=s.has(a);t.push((0,l.jsx)("button",{className:"w-[44px] h-[44px] border text-lg flex items-center justify-center transition-colors duration-300 border-[#F4F4F5]\n            ".concat(n?"bg-[#F4F4F5] text-[#D6D6D5]":r?"bg-[#3687F7] text-white":"bg-white text-black"),onClick:()=>g(a),disabled:u&&r||m&&n,children:a},a))}return t})(),(0,l.jsxs)("div",{onClick:w,className:"w-[173px] h-[44px] text-[".concat(j?"#fff":"#000","] border-[#F4F4F5] border leading-[44px] text-center bg-[").concat(j?"#3687F7":"#fff","]"),children:["선택안함","(자동)"]})]}),(0,l.jsxs)("div",{className:"mb-[30px] mt-[12px]",children:[(0,l.jsxs)("label",{className:"inline-flex items-center mr-4",children:[(0,l.jsx)("input",{type:"checkbox",checked:m,onChange:e=>{p(e.target.checked),e.target.checked&&b(!1)},className:"form-checkbox"}),(0,l.jsx)("span",{className:"ml-2 text-[14px] font-medium",children:"포함"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center",children:[(0,l.jsx)("input",{type:"checkbox",checked:u,onChange:e=>{b(e.target.checked),e.target.checked&&p(!1)},className:"form-checkbox"}),(0,l.jsx)("span",{className:"ml-2 text-[14px] font-medium",children:"제외"})]})]}),(0,l.jsxs)("div",{onClick:w,className:"w-[105px] h-[32px] flex gap-[4px] box-border bg-[#F4F4F5] justify-center leading-[32px] m-auto rounded-md hover:bg-[#f4f4f5ad]",children:[(0,l.jsx)("span",{children:"초기화"}),(0,l.jsx)(r.default,{src:"images/smartpick/reset.svg",alt:"초기화 아이콘",className:"object-corver",width:14,height:14})]}),(0,l.jsxs)("div",{className:"my-[20px]",children:[(0,l.jsxs)("div",{children:["추첨 번호:"," ",(0,l.jsx)("span",{className:"text-[blue]",children:Array.from(e).join(" ")})]}),(0,l.jsxs)("div",{children:["제외 번호:"," ",(0,l.jsx)("span",{className:"text-[red]",children:Array.from(s).join(" ")})]}),(0,l.jsxs)("div",{children:["나머지 번호 : ",Array.from(o).join(" ")]})]})]}),(0,l.jsxs)("div",{className:"w-[400px] box-border border-[1px] border-[#E7E7E7] rounded-md p-[15px]",children:[(0,l.jsx)("p",{className:"text-[14px] text-[#777] leading-[20px]",children:"* 전체 자동을 원하실 경우 선택안함을 눌러주세요."}),(0,l.jsx)("p",{className:"text-[14px] text-[#777] leading-[20px]",children:"* 포함 번호는 5개까지, 제외 번호는 38개까지 선택 가능합니다."})]})]}):2===v?(0,l.jsxs)("div",{className:"flex justify-center flex-col items-center pb-[100px]",children:[(0,l.jsx)("h2",{className:"text-[#1D1C1C] text-[18px] font-medium",children:"결과에서 제외할 경우의 수를 선택해 주세요."}),(0,l.jsx)("div",{className:"pt-[25px] w-[302px]",children:(0,l.jsx)("div",{className:"my-[20px]",children:(0,l.jsx)(i,{})})})]}):(0,l.jsxs)("div",{className:"flex justify-center flex-col items-center pb-[100px]",children:[(0,l.jsx)("h2",{className:"text-[#1D1C1C] text-[18px] font-medium",children:"적용 수량을 선택해 주세요."}),(0,l.jsx)("div",{className:"w-[400px] h-[500px] bg-[#ddd]",children:(0,l.jsx)(x.ZP,{className:"w-[80px] h-[40px] border-solid border-[#3687F7] rounded-md",options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}]})}),(0,l.jsx)("div",{className:"pt-[25px] w-[302px]",children:(0,l.jsxs)("div",{className:"my-[20px]",children:[(0,l.jsxs)("div",{children:["추첨 번호:"," ",(0,l.jsx)("span",{className:"text-[blue]",children:Array.from(e).join(" ")})]}),(0,l.jsxs)("div",{children:["제외 번호:"," ",(0,l.jsx)("span",{className:"text-[red]",children:Array.from(s).join(" ")})]}),(0,l.jsxs)("div",{children:["나머지 번호 : ",Array.from(o).join(" ")]})]})}),(0,l.jsxs)("div",{className:"w-[400px] box-border border-[1px] border-[#E7E7E7] rounded-md p-[15px]",children:[(0,l.jsx)("p",{className:"text-[14px] text-[#777] leading-[20px]",children:"* 재추첨 시 결과 리스트에 추첨 번호가 추가됩니다."}),(0,l.jsx)("p",{className:"text-[14px] text-[#777] leading-[20px]",children:"* 선택 게임수보다 경우의 수가 적은 경우 최대 경우의 수 까지만 노출됩니다."})]})]}),(0,l.jsx)(n,{onPrevPage:()=>{N(e=>e-1)},onNextPage:()=>{N(e=>e+1)},currentPage:v})]})}},6894:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var l=s(4454);function a(){return(0,l.jsx)(l.Fragment,{})}s(1441)}},function(e){e.O(0,[433,303,427,192,744],function(){return e(e.s=5649)}),_N_E=e.O()}]);