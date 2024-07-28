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

  const contentsInfoSkillsStyle =
    "leading-[35px] max-w-[33%] text-[35px] font-normal before:w-[7px] before:h-[7px] before:rounded-full before:bg-[red] before:content-[''] before:inline-block before:mr-[12px] before:mb-[8px]";
  const skilldescriptionStyle = "text-[15px] ml-[19px]";
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
        <div className="bg-[#f5f5f5] border-t-[1px] px-[15px] md:px-[50px] ">
          {/* 01 */}
          <div className=" md:pt-[100px] h-screen flex flex-col">
            <div className="flex flex-col gap-[200px]">
              {/* 01:top */}
              <ul className="flex justify-between">
                <li className="text-[60px] flex flex-col text-[#858282] tracking-tighter">
                  <div>배움을 게을리하지 않는 기획자</div>
                  <div>
                    <span className="text-[#222]">민아연</span>입니다.
                  </div>
                </li>
                <li className="w-[180px] h-auto">
                  <img
                    src="images/information/profile.png"
                    alt="프로필 이미지"
                    className="rounded-full w-full object-cover"
                  />
                </li>
              </ul>
              {/* 01:bottom */}
              <div>
                <div>
                  <ul className="flex flex-wrap gap-[80px]">
                    <li className={contentsInfoSkillsStyle}>
                      Service planning
                      <div className="flex flex-col gap-y-[0px] tracking-tight mt-[35px]">
                        <p className={skilldescriptionStyle}>
                          데이터베이스 관련 지식 확립을 위한 SQLD 자격증 취득
                        </p>
                        <p className={skilldescriptionStyle}>
                          피그마 툴을 활용한 와이어프레임, 프로토타입 제작
                        </p>
                        <p className={skilldescriptionStyle}>
                          프로젝트 관리용 노션 템플릿 제작
                        </p>
                      </div>
                    </li>
                    <li className={contentsInfoSkillsStyle}>
                      Design skill
                      <div className="flex flex-col gap-y-[0px] tracking-tight mt-[35px]">
                        <p className={skilldescriptionStyle}>
                          데이터베이스 관련 지식 확립을 위한 SQLD 자격증 취득
                        </p>
                        <p className={skilldescriptionStyle}>
                          피그마 툴을 활용한 와이어프레임, 프로토타입 제작
                        </p>
                        <p className={skilldescriptionStyle}>
                          프로젝트 관리용 노션 템플릿 제작
                        </p>
                      </div>
                    </li>
                    <li className={contentsInfoSkillsStyle}>
                      Development skill
                      <div className="flex flex-col gap-y-[0px] tracking-tight mt-[35px]">
                        <p className={skilldescriptionStyle}>
                          데이터베이스 관련 지식 확립을 위한 SQLD 자격증 취득
                        </p>
                        <p className={skilldescriptionStyle}>
                          피그마 툴을 활용한 와이어프레임, 프로토타입 제작
                        </p>
                        <p className={skilldescriptionStyle}>
                          프로젝트 관리용 노션 템플릿 제작
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* 01:bottom:end */}
              </div>
            </div>
            {/* e */}
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
