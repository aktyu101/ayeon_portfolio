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
            className="fixed top-1/2 left-1/2 bg-white rounded-lg p-4 z-50 text-black border-[1px] box-border overflow-scroll h-full"
            style={{
              maxWidth: "full",
              width: "90%",
              height: "100%",
              marginTop: "30px",
            }}
          >
            {/* 팝업 내용 */}
            <div className="flex justify-end border-b-2 mb-[15px] items-center pb-[15px]">
              {/* <h2 className="text-lg font-bold text-[23px] box-border">
                안녕하세요 :{")"} 배움을 게을리하지 않는 기획자 민아연입니다.
              </h2> */}
              <button
                onClick={resumeTogglePopup}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                X
              </button>
            </div>
            <div className="flex gap-y-[10px] flex-wrap flex-col">
              <ul className="">
                <li className="flex justify-between">
                  {/* 왼쪽 */}
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="text-[30px]">민아연</div>
                    <div className="flex items-center">
                      기획자
                      <span className="w-[1px] h-[10px] block bg-black mx-[5px]"></span>
                      <span>창의적으로 사고하고 끊임없이 도전합니다.</span>
                    </div>
                    <ul>
                      <li>010-5238-1429</li>
                      <li>aktyu101@gmail.com</li>
                    </ul>
                    <ul>
                      <li>나이 : 1998.09.03</li>
                      <li>MBTI : ENTP</li>
                      <li>전공 : 동양화</li>
                    </ul>
                  </div>
                  {/* 오른쪽 */}
                  <div className="w-[180px] rounded-full box-border h-[180px] bg-slate-400 block">
                    {/* <Image
                  src={`${prefix}images/portfolio/portfolio01.png`}
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={1280}
                  height={300}
                  priority
                /> */}
                  </div>
                </li>
              </ul>
              <div className="">
                <p className="">
                  12년간 미술을 전공했습니다. 창의적으로 사고하고, 아이디어를
                  시각화하여 표현하는 일에 자신 있습니다.
                </p>
                <p className="">
                  중요한 정보, 결정 사항, 일정, 회의 내용 등은 상세하게 기록하는
                  습관을 가지고 있습니다.
                </p>
                <p className="">
                  작업의 우선순위를 명확하게 설정한 후 효율적으로 작업을
                  안분하여 낭비되는 시간이 없도록 노력합니다.
                </p>
              </div>
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
