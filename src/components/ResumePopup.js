import React, { useState, useRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  careerList,
  ricenceList,
  educationList,
} from "@/constants/informationList";
import { projectList } from "@/constants/projectList";
import { createPortal } from "react-dom";
import Image from "next/image";

const ResumePopup = () => {
  const [resumeIsOpen, setResumeIsOpen] = useState(false);
  const projectRef = useRef(null);

  const resumeTogglePopup = () => {
    setResumeIsOpen(!resumeIsOpen);
  };

  const scrollToProjectSection = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function Line({ reverse = false }) {
    const lineStyles = twMerge(
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-[#333] ",
      reverse ? "-rotate-45" : "rotate-45"
    );
    return <div className={lineStyles} />;
  }

  const MainSkillsStyle =
    "px-[15px] h-[37px] text-[16px] rounded-full mr-[8px] bg-[#f5f5f5] border-[#D1D5DB] border-[1px] box-border leading-[33px]";
  const skillsStyle =
    "px-[15px] h-[37px] leading-[33px] text-[16px] rounded-full mr-[8px] bg-[#fff] border-[#D1D5DB] border-[1px]";
  const skillImageStyle = "inline-block mr-[5px]";

  //CareerComponent
  const CareerComponent = ({ careerList }) => (
    <div className="flex flex-wrap justify-between">
      <div className="w-full text-[25px] border-b-[1px] border-[#222] pb-[18px] flex items-center gap-[20px]">
        <span>경력사항</span>
        <span className="text-[16px] text-[#fff] px-[15px] py-[5px] bg-[#352F2F] rounded-full">
          총 4년 5개월
        </span>
      </div>
      <ul className="flex flex-col w-full">
        {careerList.list && careerList.list.length > 0 ? (
          [...careerList.list].reverse().map((career, index) => (
            <li key={index} className="flex py-[18px] border-b-[1px] w-full">
              {/* 기간 */}
              <div className="flex flex-col w-[20%] gap-[15px]">
                <div>
                  <p className="text-[#888] mb-[8px]">{career.period}</p>
                  <p className="bg-[#E7ECF4] rounded-full text-center py-[3px] inline-block px-[15px] text-[15px]">
                    {career.totalDuration}
                  </p>
                </div>
                {career.period2 != null && (
                  <div>
                    <p className="text-[#888] mb-[8px]">{career.period2}</p>
                    <p className="bg-[#E7ECF4] rounded-full text-center py-[3px] inline-block px-[15px] text-[15px]">
                      {career.totalDuration2}
                    </p>
                  </div>
                )}
              </div>
              {/* 타이틀 */}
              <div className="w-[80%] flex gap-[15px] text-[16px]">
                <p>{career.title}</p>
                {career.id === 4 && (
                  <span
                    className="underline text-[#888] text-[15px]"
                    onClick={scrollToProjectSection}
                  >
                    진행 프로젝트 보러가기
                  </span>
                )}
              </div>
            </li>
          ))
        ) : (
          <li>No career information</li>
        )}
      </ul>
    </div>
  );
  CareerComponent.displayName = "CareerComponent";

  //educationComponent
  const EducationComponent = ({ educationList }) => (
    <div className="flex flex-wrap justify-between">
      <div className="w-full text-[25px] border-b-[1px] border-[#222] pb-[18px] flex items-center gap-[20px]">
        <span>학력&교육사항</span>
      </div>
      <ul className="flex flex-col w-full">
        {educationList.list && educationList.list.length > 0 ? (
          [...educationList.list].reverse().map((education, index) => (
            <li key={index} className="flex py-[18px] border-b-[1px] w-full">
              {/* 기간 */}
              <div className=" w-[20%]">
                <div>
                  <p className="text-[#888]">{education.period}</p>
                </div>
              </div>
              {/* 타이틀 */}
              <div className="w-[80%] flex gap-[15px] text-[16px] items-center">
                <p>{education.title}</p>
                {education.totalDuration != null && (
                  <p className="text-[15px] bg-[#E7ECF4] rounded-full text-center py-[3px] inline-block px-[15px]">
                    {education.totalDuration}
                  </p>
                )}
              </div>
            </li>
          ))
        ) : (
          <li>No career information</li>
        )}
      </ul>
    </div>
  );
  EducationComponent.displayName = "EducationComponent";

  //RicenceComponent
  const RicenceComponent = ({ ricenceList }) => (
    <div className="flex flex-wrap justify-between">
      <div className="w-full text-[25px] border-b-[1px] border-[#222] pb-[18px] flex items-center gap-[20px]">
        <span>자격 및 면허취득 사항</span>
      </div>
      <ul className="flex flex-col w-full">
        {ricenceList.list && ricenceList.list.length > 0 ? (
          [...ricenceList.list].reverse().map((ricence, index) => (
            <li key={index} className="flex py-[18px] border-b-[1px] w-full">
              {/* 기간 */}
              <div className=" w-[20%]">
                <div>
                  <p className="text-[#888]">{ricence.period}</p>
                </div>
              </div>
              {/* 타이틀 */}
              <div className="w-[80%] flex gap-[15px] text-[16px] items-center">
                <p>{ricence.title}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No career information</li>
        )}
      </ul>
    </div>
  );
  RicenceComponent.displayName = "RicenceComponent";

  //ProjectComponent
  const ProjectComponent = forwardRef(({ projectList }, ref) => (
    <div ref={ref} className="flex flex-wrap justify-between mb-[50px]">
      <div className="w-full text-[25px] border-b-[1px] border-[#222] pb-[18px] flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <span>진행 프로젝트</span>
          <span className="text-[16px] text-[#fff] px-[15px] py-[5px] bg-[#352F2F] rounded-full">
            {"(주)"}아이마케팅
          </span>
        </div>
        <a href="/project" className="underline text-[#888] text-[15px]">
          프로젝트 상세
        </a>
      </div>
      <ul className="flex flex-col w-full">
        {projectList.list && projectList.list.length > 0 ? (
          projectList.listSortedByDate.map((project, index) => (
            <li key={index} className="flex py-[18px] border-b-[1px] w-full">
              {/* 기간 */}
              <div className=" w-[20%]">
                <div>
                  <p className="text-[#888]">{project.period}</p>
                </div>
              </div>
              {/* 타이틀 */}
              <div className="w-[80%] flex gap-[15px] text-[16px] items-center">
                <p>
                  {project.name} · {project.role}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li>No career information</li>
        )}
      </ul>
    </div>
  ));
  ProjectComponent.displayName = "ProjectComponent";

  return (
    <div className="">
      <button onClick={resumeTogglePopup}>INFORMATION</button>
      {resumeIsOpen &&
        createPortal(
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="z-[999999] fixed size-full top-0 left-0"
          >
            {/* 딤 처리 */}
            <div
              className="absolute bg-black bg-opacity-35 size-full z-[99]"
              onClick={resumeTogglePopup}
            />
            {/* 팝업 */}

            <div className="absolute size-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[20px] z-[999] bg-white rounded-lg pt-[40px] px-[50px] text-black border-[1px] box-border overflow-scroll">
              {/* 팝업 내용 */}
              <div className="flex justify-end items-center">
                {/* <h2 className="text-lg font-bold text-[23px] box-border">
                안녕하세요 :{")"} 배움을 게을리하지 않는 기획자 민아연입니다.
              </h2> */}
                <button
                  onClick={resumeTogglePopup}
                  className="w-[30px] h-[30px] mb-[50px] relative"
                >
                  <Line />
                  <Line reverse />
                </button>
              </div>

              <div className="flex gap-y-[50px] flex-wrap flex-col">
                {/* start */}
                <ul className="">
                  <li className="flex justify-between">
                    {/* 왼쪽 */}
                    <div className="flex flex-col gap-y-[20px]">
                      <div>
                        <div className="text-[40px] font-semibold">민아연</div>
                        <div className="flex items-center text-[22px] font-normal gap-[8px] mb-[20px]">
                          기획자
                          <span className="w-[1.5px] h-[15px] block bg-black mx-[5px]"></span>
                          <span>창의적으로 사고하고 끊임없이 도전합니다.</span>
                        </div>
                      </div>
                      <ul>
                        <li className="text-[18px]">
                          <Image
                            src="images/information/phone.png"
                            alt="phone"
                            className="w-[24px] h-auto inline-block mr-[8px]"
                            width={24}
                            height={24}
                          />
                          010-5238-1429
                        </li>
                        <li className="text-[18px]">
                          <Image
                            src="images/information/mail.png"
                            alt="mail"
                            className="w-[24px] h-auto inline-block mr-[8px]"
                            width={24}
                            height={24}
                          />
                          aktyu101@gmail.com
                        </li>
                      </ul>
                    </div>
                    {/* 오른쪽 */}

                    <div className="max-w-[200px] rounded-full box-border h-[200px] w-[200px] block">
                      <Image
                        src="images/information/profile.png"
                        alt="프로필 이미지"
                        className="rounded-full w-full h-full object-cover"
                        width={180}
                        height={180}
                      />
                    </div>
                  </li>
                </ul>
                {/* 직무능력&기술스택 */}
                <div className="flex flex-col gap-[10px]">
                  {/* 1 */}
                  <div className="flex gap-[25px] items-center">
                    <span className="text-[18px]">직무능력</span>
                    <ul className="flex gap-[8px]">
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/figma.svg"
                          alt="figma"
                          className={skillImageStyle}
                          width={15}
                          height={23}
                        />
                        Figma
                      </li>
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/notion.svg"
                          alt="notion"
                          className={skillImageStyle}
                          width={21}
                          height={20}
                        />
                        Notion
                      </li>
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/excel.svg"
                          alt="excel"
                          className={skillImageStyle}
                          width={20}
                          height={26}
                        />
                        Excel
                      </li>
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/ppt.svg"
                          alt="ppt"
                          className={skillImageStyle}
                          width={21}
                          height={20}
                        />
                        Power Point
                      </li>
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/word.svg"
                          alt="word"
                          className={skillImageStyle}
                          width={22}
                          height={20}
                        />
                        Word
                      </li>
                      <li className={MainSkillsStyle}>
                        <Image
                          src="images/information/xd.svg"
                          alt="xd"
                          className={skillImageStyle}
                          width={22}
                          height={20}
                        />
                        XD
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/ps.svg"
                          alt="ps"
                          className={skillImageStyle}
                          width={22}
                          height={20}
                        />
                        Photoshop
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/ai.svg"
                          alt="ai"
                          className={skillImageStyle}
                          width={22}
                          height={20}
                        />
                        Illustrator
                      </li>
                    </ul>
                  </div>
                  {/* 2 */}
                  <div className="flex gap-[25px] items-center">
                    <span className="text-[18px]">기술스택</span>
                    <ul className="flex gap-[8px]">
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/html.svg"
                          alt="html"
                          className={skillImageStyle}
                          width={17}
                          height={25}
                        />
                        HTML
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/css.svg"
                          alt="css"
                          className={skillImageStyle}
                          width={18}
                          height={25}
                        />
                        CSS
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/js.svg"
                          alt="js"
                          className={skillImageStyle}
                          width={17}
                          height={21}
                        />
                        Javascript
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/nodejs.svg"
                          alt="nodejs"
                          className={skillImageStyle}
                          width={23}
                          height={23}
                        />
                        Node.js
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/react.svg"
                          alt="react"
                          className={skillImageStyle}
                          width={23}
                          height={21}
                        />
                        React
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/sass.svg"
                          alt="sass"
                          className={skillImageStyle}
                          width={23}
                          height={23}
                        />
                        Sass
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/next.svg"
                          alt="next"
                          className={skillImageStyle}
                          width={23}
                          height={23}
                        />
                        Next.js
                      </li>
                      <li className={skillsStyle}>
                        <Image
                          src="images/information/sql.svg"
                          alt="sql"
                          className={skillImageStyle}
                          width={18}
                          height={22}
                        />
                        SQL
                      </li>
                    </ul>
                  </div>
                </div>

                {/* info */}
                <ul className="border-[#D1D5DB] border-[1px] rounded-sm px-[25px] py-[20px] flex flex-col gap-[20px]">
                  <li className="flex">
                    <div className="text-[#888] text-[17px] w-[110px] leading-[17px]">
                      총 경력
                    </div>
                    <span className="text-[#222] text-[17px] leading-[17px]">
                      4년 5개월{" "}
                      <span className="ml-[10px] bg-[#e7ecf4] font-normal text-[15px] px-[15px] py-[3px] rounded-full">
                        기획&PM : 2년 3개월
                      </span>
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-[#888] text-[17px] w-[110px] leading-[17px]">
                      학력
                    </div>
                    <span className="text-[#222] text-[17px] leading-[17px]">
                      단국대학교·예술 미술학부 동양화과 | 대학{"(4년)"} 졸업
                      <span className="ml-[10px] bg-[#e7ecf4] font-normal text-[15px] px-[15px] py-[3px] rounded-full">
                        학점 : 4.33/4.5
                      </span>
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-[#888] text-[17px] w-[110px] leading-[17px]">
                      생년월일
                    </div>
                    <span className="text-[#222] text-[17px] leading-[17px]">
                      1998.09.03{"(만 25세)"}
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-[#888] text-[17px] w-[110px] leading-[17px]">
                      주소
                    </div>
                    <span className="text-[#222] text-[17px] leading-[17px]">
                      인천광역시 서구 석남동
                    </span>
                  </li>
                </ul>

                <div className="pt-[50px] flex flex-col gap-[100px]">
                  <CareerComponent careerList={careerList} />
                  <EducationComponent educationList={educationList} />
                  <RicenceComponent ricenceList={ricenceList} />
                  <ProjectComponent
                    projectList={projectList}
                    ref={projectRef}
                  />
                  {/* 프로젝트 더보러가기 버튼 추가*/}
                </div>
              </div>
            </div>
          </motion.div>,
          window.document.body
        )}
    </div>
  );
};

export default ResumePopup;
