"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{4821:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n=s(7348),r=s(3881),o=s(6189),l=s(5346),i=s(2328);function a(e){let{onClick:t}=e;return(0,n.jsxs)("button",{className:"relative w-[30px] h-[30px]",onClick:t,children:[(0,n.jsx)(c,{}),(0,n.jsx)(c,{reverse:!0})]})}function c(e){let{reverse:t=!1}=e,s=(0,i.m6)("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-white",t?"-rotate-45":"rotate-45");return(0,n.jsx)("div",{className:s})}function d(e){let{width:t,hover:s}=e;return(0,n.jsx)("div",{className:"h-[3px] bg-[#352f2f] transition-all duration-300",style:{width:s?"30px":"".concat(t,"px"),background:s?"#ff4b00":"#352f2f"}})}function p(e){let{onClick:t}=e,[s,o]=(0,l.useState)(!1),i=()=>{setTimeout(()=>{o(!0)},50)},a=()=>{o(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.default,{href:"/",children:(0,n.jsx)("span",{style:{color:s?"#ff4b00":"#352f2f",transition:"color 0.3s ease"},className:"box-border pb-[3px] block",onMouseEnter:i,onMouseLeave:a,children:"AYEON"})}),(0,n.jsxs)("button",{className:"w-[30px] h-[49px] left-0 top-0 gap-y-[6px] items-center flex box-border py-[14px] flex-wrap",onClick:t,onMouseEnter:i,onMouseLeave:a,children:[(0,n.jsx)(d,{width:26,hover:s}),(0,n.jsx)(d,{width:22,hover:s}),(0,n.jsx)(d,{width:30,hover:s})]})]})}var f=s(5155),x=s(9448),h=s(9598);function u(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,i.m6)((0,h.W)(t))}let m=l.forwardRef((e,t)=>{let{className:s,children:r,...o}=e;return(0,n.jsxs)(x.fC,{ref:t,className:u("relative overflow-hidden",s),...o,children:[(0,n.jsx)(x.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,n.jsx)(w,{}),(0,n.jsx)(x.Ns,{})]})});m.displayName=x.fC.displayName;let w=l.forwardRef((e,t)=>{let{className:s,orientation:r="vertical",...o}=e;return(0,n.jsx)(x.gb,{ref:t,orientation:r,className:u("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...o,children:(0,n.jsx)(x.q4,{className:"relative flex-1 rounded-full bg-border"})})});function g(e){let{routes:t}=e,[s,r]=(0,l.useState)(null),o=e=>{r(t=>t===e?null:e)},a=e=>{o(e)},c=(0,i.m6)("border-b-[1px] pb-[10px] mb-[15px] box-border flex justify-between items-center"),d=(0,i.m6)("text-[22px] font-medium text-white hover:text-[#ffffff8a] cursor-pointer");return(0,n.jsxs)("ul",{className:"flex flex-col w-[100%]",children:[t.map((e,t)=>(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{className:c,children:[(0,n.jsx)(j,{route:e}),e.children&&(0,n.jsx)(f.default,{className:"cursor-pointer ".concat(s===t?"rotate-0":"rotate-180"),src:"images/toggle.png",alt:"toggleBtn",width:20,height:10,onClick:()=>a(t)})]}),e.children&&s===t&&(0,n.jsx)(m,{className:"flex flex-col max-h-[200px] overflow-y-auto",children:e.children.map((e,t)=>(0,n.jsx)("div",{children:e.children&&(0,n.jsx)("div",{className:"pb-[10px]",children:e.children.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(j,{depth:3,route:e})},t))})},t))})]},t)),(0,n.jsx)("li",{className:c,children:(0,n.jsx)("a",{className:d,onClick:e=>{e.preventDefault(),"0903"===prompt("비밀번호를 입력하세요:")?window.open("https://iced-harrier-d67.notion.site/170c4b0fd5d4428d83090945d7faf62a?pvs=4","_blank"):alert("비밀번호가 일치하지 않습니다.")},href:"#",children:"NOTION"})})]})}function j(e){let{depth:t=1,route:s}=e,o=new Map([[1,"text-[22px] font-medium text-white hover:text-[#ffffff8a] cursor-pointer"],[2,"text-[16px] font-extraLight text-white hover:text-[#ffffff8a] cursor-pointer"],[3,"text-[16px] block mb-[7px] text-[#eee] hover:text-[#ffffff4a] cursor-pointer"]]),l=(0,i.m6)(o.get(t));return(0,n.jsx)(n.Fragment,{children:s.link?(0,n.jsx)(r.default,{href:s.link,className:l,children:s.name}):(0,n.jsx)("p",{className:l,children:s.name})})}w.displayName=x.gb.displayName;var b=s(4514),y=s(2685);class v{constructor(e,t=null,s=null){this.name=e,this.link=t,this.children=s}}new v("INFORMATION","/information");let N=[new v("PROJECT","/project",[new v("Develop Project","/project",b.d.listSortedByDate.map((e,t)=>{let{id:s,name:n}=e;return new v("".concat(t+1)+". ".concat(n),"/project/".concat(s))}))]),new v("STUDY","/study",[new v("study","/sutdy/project",y.J.listSortedByDate.map((e,t)=>{let{id:s,name:n}=e;return new v("".concat(t+1)+". ".concat(n),"/study/project/".concat(s))}))])];var k=s(8325),P=()=>{let[e,t]=(0,l.useState)(!1),s=()=>{t(!e)},r=(0,i.m6)("border-[#fff] border-2 w-[128px] h-[42px] text-[#fff] bg-[#ff4b00] text-center leading-[30px] rounded-full"," hover:text-[#352f2f] hover:font-medium box-border");return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("button",{onClick:s,className:r,children:"CONTACT"}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.E.div,{initial:{opacity:0},animate:{opacity:.35},className:"fixed top-0 left-0 w-screen h-screen bg-black"}),(0,n.jsxs)(k.E.div,{initial:{scale:0,opacity:0,y:"-50%",x:"-50%"},animate:{scale:1,opacity:1,y:"-50%",x:"-50%"},className:"fixed top-1/2 left-1/2 bg-white rounded-lg p-4 z-50 text-black border-[1px]",style:{maxWidth:"400px",width:"80vw",height:"300px"},children:[(0,n.jsx)("h2",{className:"text-lg font-bold pb-[15px] mb-[15px] text-[23px] border-b-2 box-border",children:"Contact"}),(0,n.jsxs)("div",{className:"flex gap-y-[10px] flex-wrap flex-col",children:[(0,n.jsxs)("p",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"H.P"}),(0,n.jsx)("a",{href:"tel:01052381429",className:"ml-10px",children:"010-5238-1429"})]}),(0,n.jsxs)("p",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"e-mail"}),(0,n.jsx)("span",{className:"ml-10px",children:"aktyu101@nate.com"})]}),(0,n.jsxs)("p",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"kakaotalk"}),(0,n.jsx)("a",{href:"https://open.kakao.com/o/s6G8x8mg",className:"ml-10px",children:"open chatting"})]}),(0,n.jsxs)("p",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"github"}),(0,n.jsx)("a",{href:"https://github.com/aktyu101",className:"ml-10px",children:"aktyu101"})]})]}),(0,n.jsx)("div",{className:"flex justify-end mt-[30px]",children:(0,n.jsx)("button",{onClick:s,className:"mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg",children:"Close"})})]})]})]})},M=s(7324),S=s.n(M);function C(){let e=(0,o.usePathname)(),[t,s]=(0,l.useState)(!1),[c,d]=(0,l.useState)(0),[f,x]=(0,l.useState)(!0),h=(0,i.m6)("absolute z-50 block fixed t-0 p-[20px] box-border w-full h-screen bg-[#352f2f] text-white h-screen z-[999999] flex justify-center"),u=(0,i.m6)("hover:text-[#352f2f] hover:border-[#352f2f] hover:font-medium");console.log("test",N[0].name,N[0].link),(0,l.useEffect)(()=>{s(!1)},[e]),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;e>c?x(!1):x(!0),d(e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[c]);let[w,j]=(0,l.useState)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k.E.div,{initial:{y:"-100%"},animate:{y:t?0:"-100%"},transition:{ease:"easeOut",duration:1},className:h,children:[(0,n.jsxs)("div",{className:"flex flex-col absolute top-0 left-0 w-full items-center",children:[(0,n.jsx)("div",{className:"flex justify-end mb-[30px]",children:(0,n.jsx)(a,{onClick:()=>s(!1)})}),(0,n.jsx)(m,{className:"h-[600px] w-[600px]",children:(0,n.jsx)(g,{routes:N})})]}),(0,n.jsxs)("div",{className:"text-center text-[#fff] absolute bottom-[80px] left-0 w-full",children:["COPYRIGHT AYEON MIN ",S()().year()," ALL RIGHTS RESERVED."]}),(0,n.jsx)("div",{className:"flex gap-x-[4px] fixed bottom-[30px]",children:(0,n.jsx)("button",{className:"border-[#fff] border-2 w-[54px] h-[54px] text-[#fff] bg-[#352f2f] text-center leading-[53px] border-solid "+u,children:"down"})})]}),(0,n.jsx)("div",{className:"w-ful h-[80px] sticky top-0 z-50 flex items-center hover:bg-[#352f2f0a] hover:delay-150 transition-transform duration-300 ".concat(f?"transform-none":"-translate-y-full"),children:(0,n.jsxs)("div",{className:"w-full mx-[15px] md:mx-[50px] z-[51] flex justify-between items-center",children:[(0,n.jsx)("div",{className:"flex gap-3 items-center text-[25px] font-medium text-[#352F2F]",children:(0,n.jsx)(p,{onClick:()=>s(!0)})}),(0,n.jsxs)("div",{className:"flex md:gap-5 items-center flex-col md:flex-row",children:[(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)(P,{})}),N.map((e,t)=>(0,n.jsx)(r.default,{href:e.link,children:(0,n.jsxs)("div",{className:"relative hidden md:block",children:[(0,n.jsx)("span",{className:" relative",onMouseEnter:()=>j(t),onMouseLeave:()=>j(null),children:e.name}),(0,n.jsx)(k.E.div,{initial:{width:0},animate:{width:w===t?"100%":0},transition:{ease:"easeOut",duration:1},className:"absolute bottom-0 left-0 h-[1px] bg-[#352f2f] top-[50%]"})]})},t)),(0,n.jsx)("div",{className:"hidden md:block",children:(0,n.jsx)(P,{})})]})]})})]})}},4514:function(e,t,s){s.d(t,{d:function(){return o}});class n{get listSortedByDate(){return[...this.list].sort((e,t)=>new Date(e.startPeriod)==new Date(t.startPeriod)?0:new Date(e.startPeriod)>new Date(t.startPeriod)?-1:new Date(e.startPeriod)<new Date(t.startPeriod)?1:void 0)}findListById(e){return this.list.find(t=>t.id===e)}constructor(e=[]){this.list=e}}class r{get url(){return"images/portfolio/".concat(this.imageUrl)}get period(){return"".concat(this.startPeriod,"~").concat(this.endPeriod)}constructor(e,t="",s=null,n=null,r=null,o=null,l,i=null){this.id=e,this.name=t,this.imageUrl=s,this.startPeriod=n,this.endPeriod=r,this.type=o,this.description=l,this.siteUrl=i}}let o=new n([new r(6,"시세이가구","portfolio01.png","2024.03","2024.06","카페24","PM","https://seesay.co.kr/"),new r(1,"아로셀","portfolio01.png","2024.03","2024.04","카페24","기획&PM","https://www.arocell.co.kr/"),new r(1,"윤현몰","portfolio01.png","2023.04","2023.05","고도몰","필터기능 추가 개발","https://www.younhyunmall.com/"),new r(1,"국립아시아문화전당재단","portfolio01.png","2024.04","2024.06","카페24","기획&PM","https://accdlacshop.cafe24.com/"),new r(2,"브론테","portfolio01.png","2023.02","2024.06","고도몰","기획&PM","https://bronteshop.co.kr/"),new r(3,"나인위시스 2차","portfolio01.png","2024.04","2024.05","카페24","PM","https://ninewishes9.cafe24.com/"),new r(4,"가림","portfolio01.png","2024.02","2024.04","카페24","PM","https://gareem.com/"),new r(5,"라프리마몰","portfolio01.png","2024.03","2024.04","카페24","PM","https://laprima.co.kr/"),new r(6,"무슈제이","portfolio01.png","2024.01","2024.03","카페24","PM","https://m.monsieurj.co.kr/"),new r(1,"밀크바오밥","portfolio01.png","2024.01","2024.03","카페24","des","https://taenamstore.com/"),new r(2,"굽네몰","portfolio01.png","2023.05","2023.11","메이크샵","기획&PM","https://www.goobnemall.com/"),new r(3,"월드트로피","portfolio01.png","2023.04","2023.11","고도몰","기획&PM","http://www.wtrophy.com/"),new r(4,"나인위시스","portfolio01.png","2023.03","2023.05","메이크샵","PM",null),new r(5,"알집매트","portfolio01.png","2023.02","2023.05","고도몰","기획&PM","alzipmat.com"),new r(6,"한국갤러리","portfolio01.png","2023.02","2023.04","고도몰","PM","https://www.hankookgallery.com/"),new r(6,"엘리케이파크","portfolio01.png","2022.12","2023.02","고도몰","PM","https://www.ellikbeauty.kr/"),new r(6,"호호에미","portfolio01.png","2022.10","2022.12","카페24","PM","https://hohoemis.com/"),new r(6,"셀티브코리아","portfolio01.png","2022.09","2022.12","고도몰","기획&PM","https://www.cellmall.co.kr/"),new r(6,"바이브랩","portfolio01.png","2022.09","2022.11","카페24","PM","https://vivelab.kr/"),new r(6,"비비드로우","portfolio01.png","2022.09","2022.12","고도몰","기획&PM",null),new r(6,"하이생","portfolio01.png","2022.08","2022.12","카페24","기획&PM","https://www.hisaeng.co.kr/"),new r(6,"뉴틴몰","portfolio01.png","2022.08","2022.09","고도몰","PM","https://www.mynutine.com/"),new r(6,"로베르타피에리","portfolio01.png","2022.04","2022.05","고도몰","기획","https://www.robertapieri.kr/"),new r(6,"위드한옥","portfolio01.png","2022.04","2022.05","고도몰","기획","withhanok.com")])},2685:function(e,t,s){s.d(t,{J:function(){return o}});class n{get listSortedByDate(){return[...this.list].sort((e,t)=>new Date(e.startPeriod)==new Date(t.startPeriod)?0:new Date(e.startPeriod)>new Date(t.startPeriod)?-1:new Date(e.startPeriod)<new Date(t.startPeriod)?1:void 0)}findListById(e){return this.list.find(t=>t.id===e)}constructor(e=[]){this.list=e}}class r{get url(){return"images/portfolio/".concat(this.imageUrl)}get period(){return"".concat(this.startPeriod,"~").concat(this.endPeriod)}constructor(e,t="",s=null,n=null,r=null,o=null,l){this.id=e,this.name=t,this.imageUrl=s,this.startPeriod=n,this.endPeriod=r,this.type=o,this.description=l}}let o=new n([new r(1,"SQLD 1과목 요점 정리","portfolio01.png","2024.04.23","2024.04.30","SQL","PART1 ~ PART5"),new r(2,"study02","portfolio01.png","2024.01.01","2024.04.05","JAVASCRIPT","des"),new r(3,"study03","portfolio01.png","2024.04.05","2024.04.05","HTML&CSS","des"),new r(4,"study04","portfolio01.png","2024.04.02","2024.04.05","HTML&CSS","des"),new r(5,"study05","portfolio01.png","2024.04.03","2024.04.05","HTML&CSS","des"),new r(6,"study06","portfolio01.png","2023.12.04","2024.04.05","HTML&CSS","des"),new r(1,"study01","portfolio01.png","2024.04.04","2024.04.05","HTML&CSS","des"),new r(2,"study02","portfolio01.png","2024.01.01","2024.04.05","JAVASCRIPT","des"),new r(3,"study03","portfolio01.png","2024.04.05","2024.04.05","HTML&CSS","des"),new r(4,"study04","portfolio01.png","2024.04.02","2024.04.05","HTML&CSS","des"),new r(5,"study05","portfolio01.png","2024.04.03","2024.04.05","HTML&CSS","des"),new r(6,"study06","portfolio01.png","2023.12.04","2024.04.05","HTML&CSS","des")])}}]);