import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { careerList, ricenceList } from "@/constants/informationList";
import { projectList } from "@/constants/projectList";

const ResumePopup = () => {
  const [resumeIsOpen, setResumeIsOpen] = useState(false);

  const resumeTogglePopup = () => {
    setResumeIsOpen(!resumeIsOpen);
  };

  function Line({ reverse = false }) {
    const lineStyles = twMerge(
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-[#333]",
      reverse ? "-rotate-45" : "rotate-45"
    );
    return <div className={lineStyles} />;
  }

  //CareerComponent
  const CareerComponent = ({ careerList }) => (
    <div className="flex flex-wrap justify-between pt-[80px]">
      <h2 className="w-full md:w-[50%] text-[25px]">EDUCATION & CAREER</h2>
      <ul className="flex flex-col md:w-[50%] max-sm:gap-y-[10px]">
        {careerList.list && careerList.list.length > 0 ? (
          [...careerList.list].reverse().map((career, index) => (
            <li
              key={index}
              className="flex max-sm:flex-col justify-between flex-wrap pb-[5px]"
            >
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
  //ProjectComponent
  const ProjectComponent = ({ projectList }) => (
    <div className="justify-between pt-[80px]">
      <h2 className="w-full md:w-[50%] text-[25px]">PROJECT</h2>
      <ul className="w-full md:w-[50%]">
        {projectList.list && projectList.list.length > 0 ? (
          projectList.listSortedByDate.map((project, index) => (
            <li key={index} className="flex justify-between flex-wrap pb-[5px]">
              <p>{project.name}</p>
              <span className="text-[#888]">
                {project.startPeriod}~{project.endPeriod}
              </span>
            </li>
          ))
        ) : (
          <li>No license information</li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="">
      <button onClick={resumeTogglePopup}>INFORMATION</button>
      {resumeIsOpen && (
        <>
          {/* 딤 처리 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black"
          ></motion.div>
          {/* 팝업 */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: "-50%", x: "-50%" }}
            animate={{ scale: 1, opacity: 1, y: "-50%", x: "-50%" }}
            className="fixed top-1/2 left-1/2 bg-white rounded-lg pt-[40px] px-[50px] z-50 text-black border-[1px] box-border overflow-scroll h-full"
            style={{
              maxWidth: "full",
              width: "calc(100% - 100px)",
              height: "100%",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
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
            <div className="flex gap-y-[10px] flex-wrap flex-col">
              <ul className="">
                <li className="flex justify-between">
                  {/* 왼쪽 */}
                  <div className="flex flex-col gap-y-[20px]">
                    <div>
                      <div className="text-[40px] font-semibold">민아연</div>
                      <div className="flex items-center text-[24px] font-normal gap-[8px]">
                        기획자
                        <span className="w-[2px] h-[15px] block bg-black mx-[5px]"></span>
                        <span>창의적으로 사고하고 끊임없이 도전합니다.</span>
                      </div>
                    </div>
                    <ul>
                      <li>010-5238-1429</li>
                      <li>aktyu101@gmail.com</li>
                    </ul>
                  </div>
                  {/* 오른쪽 */}

                  <div className="max-w-[200px] rounded-full box-border h-[200px] w-[200px] block">
                    <img
                      src={images / information / profile2.png}
                      alt="프로필 이미지"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </li>
              </ul>

              <div>
                <CareerComponent careerList={careerList} />
                <RicenceComponent ricenceList={ricenceList} />
                <ProjectComponent projectList={projectList} />
                {/* 프로젝트 더보러가기 버튼 추가*/}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ResumePopup;
