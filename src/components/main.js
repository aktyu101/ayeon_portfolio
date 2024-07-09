"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ConfigContext } from "@/app/config-provider";
// import Navigation from "./navigation";
import { motion } from "framer-motion";
// import { useEffect } from "react";
import RotatingEllipses from "./RotatingEllipses";
import { careerList, ricenceList } from "@/constants/informationList";

export default function Home() {
  const { prefix } = useContext(ConfigContext);
  //CareerComponent
  const CareerComponent = ({ careerList }) => (
    <div className="flex flex-wrap justify-between pt-[80px]">
      <h2 className="w-full md:w-[50%] text-[25px]">EDUCATION & CAREER</h2>
      <ul className="w-full md:w-[50%]">
        {careerList.list && careerList.list.length > 0 ? (
          [...careerList.list].reverse().map((career, index) => (
            <li key={index} className="flex justify-between flex-wrap pb-[5px]">
              <p>{career.title}</p>
              <span className="text-[#888]">{career.period}</span>
            </li>
          ))
        ) : (
          <li>No career information</li>
        )}
      </ul>
    </div>
  );
  //RicenceComponent
  const RicenceComponent = ({ ricenceList }) => (
    <div className="flex flex-wrap justify-between pt-[80px]">
      <h2 className="w-full md:w-[50%] text-[25px]">LICENSES</h2>
      <ul className="w-full md:w-[50%]">
        {ricenceList.list && ricenceList.list.length > 0 ? (
          [...ricenceList.list].reverse().map((ricence, index) => (
            <li key={index} className="flex justify-between flex-wrap pb-[5px]">
              <p>{ricence.title}</p>
              <span className="text-[#888]">{ricence.period}</span>
            </li>
          ))
        ) : (
          <li>No license information</li>
        )}
      </ul>
    </div>
  );

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
        <div className="h-[6000px] bg-[#f5f5f5fa] border-t-[1px] md:px-[50px]">
          <div>
            <CareerComponent careerList={careerList} />
            <RicenceComponent ricenceList={ricenceList} />
          </div>
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

// <Image
//               src={`${prefix}/vercel.svg`}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
