"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ConfigContext } from "@/app/config-provider";
// import Navigation from "./navigation";
import { motion } from "framer-motion";
// import { useEffect } from "react";
import RotatingEllipses from "./RotatingEllipses";

export default function Home() {
  const { prefix } = useContext(ConfigContext);

  return (
    <>
      {/* background 영역 */}
      {/* 흘러가는 텍스트 효과 적용*/}
      <div className="fixed z-0 flex items-center justify-center overflow-hidden h-[100%]">
        {/* <div className="w-[300px] h-[200px] bg-[#352f2f] rounded-3xl"></div> */}
        <div className="flex flex-wrap">
          {/* <RotatingEllipses /> */}
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
        <div className="h-[6000px] bg-[#f5f5f5] border-t-[1px] px-[50px]">
          <h2>EDUCATION & CAREER</h2>
          <ul>
            <li>
              <p>디자인위브 웹기획, PM (총 경력 : 2년 3개월)</p>
              <span>2022년 04월 ~ 2024년 07월</span>
            </li>
          </ul>
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
