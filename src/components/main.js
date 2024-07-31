"use client";
// import Image from "next/image";
import { useContext, useRef } from "react";
import { ConfigContext } from "@/app/config-provider";
import { motion } from "framer-motion";
import MainProjectSwiper from "./main/MainProjectSwiper";
import Image from "next/image";

export default function Home() {
  const { prefix } = useContext(ConfigContext);

  const contentsInfoSkillsStyle =
    "leading-[35px] max-w-[33%] text-[35px] font-normal";
  const contentInfoSkillsTitle =
    "flex items-center gap-x-[12px] before:w-[7px] before:h-[7px] before:rounded-full before:bg-[red] before:content-[''] before:inline-block before:translate-y-[4px]";
  const skilldescriptionStyle = "text-[15px] ml-[19px]";

  return (
    <>
      {/* background 영역 */}
      {/* 흘러가는 텍스트 효과 적용*/}
      <div className="bg-[#f5f5f5] fixed z-0 flex items-center justify-center overflow-hidden h-full">
        <div className="flex flex-wrap w-full">
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
        <div className="bg-[#f5f5f5] border-t-[1px] border-[#DDDEDD]">
          {/* 01 */}
          <div className="md:py-[10%] flex flex-col px-[15px] md:px-[50px]">
            <div className="flex flex-col gap-[150px]">
              {/* 01:top */}
              <ul className="flex justify-between">
                <li className="text-[60px] flex flex-col text-[#858282] tracking-tighter">
                  <div>배움을 게을리하지 않는 기획자</div>
                  <div>
                    <span className="text-[#222]">민아연</span>입니다.
                  </div>
                </li>
                <li className="w-[180px] h-auto">
                  <Image
                    src="images/information/profile.png"
                    alt="프로필 이미지"
                    className="rounded-full w-full object-cover"
                    width={180}
                    height={180}
                  />
                </li>
              </ul>
              {/* 01:bottom */}
              <div>
                <div>
                  <ul className="flex flex-wrap gap-[80px]">
                    <li className={contentsInfoSkillsStyle}>
                      <div className={contentInfoSkillsTitle}>
                        Service planning
                      </div>
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
                      <div className={contentInfoSkillsTitle}>
                        Development skills
                      </div>
                      <div className="flex flex-col gap-y-[0px] tracking-tight mt-[35px]">
                        <p className={skilldescriptionStyle}>
                          javascript & react 언어 공부
                        </p>
                        <p className={skilldescriptionStyle}>
                          웹디자인 기능사 자격증 취득
                        </p>
                        <p className={skilldescriptionStyle}>
                          반응형 웹디자인 & 웹퍼블리셔 디지털 실무 양성과정 수료
                        </p>
                      </div>
                    </li>
                    <li className={contentsInfoSkillsStyle}>
                      <div className={contentInfoSkillsTitle}>
                        Design skills
                      </div>
                      <div className="flex flex-col gap-y-[0px] tracking-tight mt-[35px]">
                        <p className={skilldescriptionStyle}>
                          GTQ 그래픽 기술자격 1급 자격증 취득
                        </p>
                        <p className={skilldescriptionStyle}>
                          피그마 툴을 활용한 와이어프레임, 프로토타입 제작
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
          {/* 02 */}
          <div className="w-full border-t-[1px] border-[#DDDEDD] md:pt-[10%] md:pb-[10%]">
            <MainProjectSwiper />
          </div>
          {/* 03 */}
          <div className={`bg-[#352f2f] h-screen ${"test"}`}></div>
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
