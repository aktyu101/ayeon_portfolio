"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ConfigContext } from "@/app/config-provider";
// import Navigation from "./navigation";
import { motion } from "framer-motion";
// import { useEffect } from "react";
import RotatingEllipses from "./RotatingEllipses";
// import { careerList, ricenceList } from "@/constants/informationList";
// import { projectList } from "@/constants/projectList";

export default function Home() {
  const { prefix } = useContext(ConfigContext);
  // //CareerComponent
  // const CareerComponent = ({ careerList }) => (
  //   <div className="flex flex-wrap justify-between pt-[80px]">
  //     <h2 className="w-full md:w-[50%] text-[25px]">EDUCATION & CAREER</h2>
  //     <ul className="flex flex-col md:w-[50%] max-sm:gap-y-[10px]">
  //       {careerList.list && careerList.list.length > 0 ? (
  //         [...careerList.list].reverse().map((career, index) => (
  //           <li
  //             key={index}
  //             className="flex max-sm:flex-col justify-between flex-wrap pb-[5px]"
  //           >
  //             <p>{career.title}</p>
  //             <span className="text-[#888]">{career.period}</span>
  //           </li>
  //         ))
  //       ) : (
  //         <li>No career information</li>
  //       )}
  //     </ul>
  //   </div>
  // );
  // //RicenceComponent
  // const RicenceComponent = ({ ricenceList }) => (
  //   <div className="flex flex-wrap justify-between pt-[80px]">
  //     <h2 className="w-full md:w-[50%] text-[25px]">LICENSES</h2>
  //     <ul className="w-full md:w-[50%]">
  //       {ricenceList.list && ricenceList.list.length > 0 ? (
  //         [...ricenceList.list].reverse().map((ricence, index) => (
  //           <li key={index} className="flex justify-between flex-wrap pb-[5px]">
  //             <p>{ricence.title}</p>
  //             <span className="text-[#888]">{ricence.period}</span>
  //           </li>
  //         ))
  //       ) : (
  //         <li>No license information</li>
  //       )}
  //     </ul>
  //   </div>
  // );
  // //ProjectComponent
  // const ProjectComponent = ({ projectList }) => (
  //   <div className="justify-between pt-[80px]">
  //     <h2 className="w-full md:w-[50%] text-[25px]">PROJECT</h2>
  //     <ul className="w-full md:w-[50%]">
  //       {projectList.list && projectList.list.length > 0 ? (
  //         projectList.listSortedByDate.map((project, index) => (
  //           <li key={index} className="flex justify-between flex-wrap pb-[5px]">
  //             <p>{project.name}</p>
  //             <span className="text-[#888]">
  //               {project.startPeriod}~{project.endPeriod}
  //             </span>
  //           </li>
  //         ))
  //       ) : (
  //         <li>No license information</li>
  //       )}
  //     </ul>
  //   </div>
  // );

  return (
    <>
      {/* background 영역 */}
      {/* 흘러가는 텍스트 효과 적용*/}
      <div className="fixed z-0 flex items-center justify-center overflow-hidden h-full">
        <div className="flex flex-wrap w-full">
          {/* test */}
          {/* <div className="flex justify-between w-screen pr-[50px]">
            <RotatingEllipses />
            <div className="block text-center leading-[60px]">
              <div className="w-[200px] h-[50px] bg-[#352f2f] rounded-3xl  mb-[10px] text-[#fff]"></div>
              <div className="w-[300px] h-[50px] bg-[#352f2f] rounded-3xl">
                dddd
              </div>
            </div>
          </div> */}
          {/* test : e */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 300,
            }}
            className="text-flow-container whitespace-nowrap flex flex-nowrap"
          >
            <PointText />
            <PointText />
            <PointText />
            <PointText />
            <PointText />
            <PointText />
          </motion.div>
        </div>
      </div>
      {/* contents 영역 */}
      <div className="relative z-10">
        <div className="w-full h-screen" />
        <div className="h-[6000px] bg-[#f5f5f5fa] border-t-[1px] px-[15px] md:px-[50px] pt-[30px] md:pt-[50px]">
          <div>
            {/* <p className="text-[40px]">INFORMATION</p> */}
            {/* 01 */}
            {/* <ul className="h-screen flex justify-center">
              <li className="text-center text-[80px] flex items-center">
                안녕하세요 :{")"}
                <br />
                배움을 게을리하지 않는
                <br />
                기획자 민아연입니다
              </li>
            </ul> */}
            {/* 02 */}
            {/* <ul className="h-screen">
              <li className="text-center text-[80px]">
                <div className="w-full box-border h-[500px] bg-slate-400 block"></div>
              </li>
              <li>
                <ul>
                  <li>직무 : 웹 기획자 & PM</li>
                  <li>나이 : 1998.09.03</li>
                  <li>MBTI : ENTP</li>
                  <li>전공 : 동양화</li>
                </ul>
              </li>
            </ul> */}
            {/* 03 */}
            {/* <div className="h-screen">
              <p className="">
                12년간 미술을 전공했습니다. 창의적으로 사고하고, 아이디어를
                시각화하여 표현하는 일에 자신 있습니다.
              </p>
              <p className="">
                중요한 정보, 결정 사항, 일정, 회의 내용 등은 상세하게 기록하는
                습관을 가지고 있습니다.
              </p>
              <p className="">
                작업의 우선순위를 명확하게 설정한 후 효율적으로 작업을 안분하여
                낭비되는 시간이 없도록 노력합니다.
              </p>
            </div> */}
          </div>
          {/* <div>
            <CareerComponent careerList={careerList} />
            <RicenceComponent ricenceList={ricenceList} />
            <ProjectComponent projectList={projectList} />
          </div> */}
        </div>
      </div>
    </>
    //반복되는 레이아웃은 컴포넌트 만들고 내용은 배열에 담아 맵으로 돌리기
  );

  function PointText() {
    return (
      <span className="text-[250px] leading-[250px]">
        {"<DIV STYLE='STUDY:CONTINUE !IMPORTANT;'>MIN AYEON</DIV>"}
      </span>
    );
  }
}
//strength, skills 추가
//프로젝트 기여도 명시,
// <Image
//               src={`${prefix}/vercel.svg`}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />

//skill
//포트폴리오 3개 브론테, 하이생, 굽네몰, 비비드로우, 셀티브코리아, 월드트로피, 위드한옥
//브론테, 하이생, 굽네몰

//이력서에도 있는 항목은 뒤로
