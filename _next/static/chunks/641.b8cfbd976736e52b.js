"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{6132:function(t,e,s){s.d(e,{Z:function(){return i}});var n=s(4454),r=s(7334);function i(t){let{id:e,contents:s}=t,i=r.J.findListById(e);return(0,n.jsxs)("article",{children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("h1",{className:"text-[28px] pt-[60px]",children:i.name}),(0,n.jsxs)("div",{className:"flex flex-nowrap gap-[7px] pt-[8px] pb-[15px] text-[#666] border-b-[1px] border-black items-center",children:[(0,n.jsx)("span",{className:"text-[18px]",children:i.period}),(0,n.jsx)("span",{className:"text-[14px]",children:"|"}),(0,n.jsx)("span",{className:"text-[18px]",children:i.description})]})]}),(0,n.jsx)("section",{className:"pt-[50px]",children:s})]})}},9641:function(t,e,s){s.r(e),s.d(e,{default:function(){return i}});var n=s(4454),r=s(6132);function i(){return(0,n.jsx)(r.Z,{id:2,contents:(0,n.jsx)(a,{})})}let a=()=>(0,n.jsx)(n.Fragment,{})},7334:function(t,e,s){s.d(e,{J:function(){return i}});class n{get listSortedByDate(){return[...this.list].sort((t,e)=>new Date(t.startPeriod)==new Date(e.startPeriod)?0:new Date(t.startPeriod)>new Date(e.startPeriod)?-1:new Date(t.startPeriod)<new Date(e.startPeriod)?1:void 0)}findListById(t){return this.list.find(e=>e.id===t)}constructor(t=[]){this.list=t}}class r{get url(){return"images/portfolio/".concat(this.imageUrl)}get period(){return"".concat(this.startPeriod,"~").concat(this.endPeriod)}constructor(t,e="",s=null,n=null,r=null,i=null,a){this.id=t,this.name=e,this.imageUrl=s,this.startPeriod=n,this.endPeriod=r,this.type=i,this.description=a}}let i=new n([new r(1,"SQLD 요점 정리","portfolio01.png","2024.04.23","2024.04.30","SQL","PART1 ~ PART5"),new r(2,"study02","portfolio01.png","2024.01.01","2024.04.05","JAVASCRIPT","des")])}}]);