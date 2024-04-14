"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function InformationTemplate() {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const contentRef = useRef([]);
  // const contentContainerRef = useRef(null);

  //ref값으로 제어
  const addContentRef = (index) => (el) => {
    contentRef.current[index] = el;
  };

  const contents = [
    {
      name: "SKILLS",
      className: "w-[100%] h-[auto]",
      Element: (
        <>
          <h2>Lorem ipsum</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </>
      ),
    },
    {
      name: "EDUCATION&CAREER",
      className: "w-[100% h-[auto]",
      Element: (
        <>
          {" "}
          <>
            <h2>Lorem ipsum</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </>
        </>
      ),
    },
    {
      name: "LICENCE",
      className: "w-[100%] h-[auto]",
      Element: (
        <>
          {" "}
          <>
            <h2>Lorem ipsum</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </>
        </>
      ),
    },
  ];

  const handleClickTab = (index) => () => {
    const target = contentRef.current[index];
    setSelectedContentIndex(index);

    if (target) {
      window.scroll({
        top: target.offsetTop - 80,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const buttonActiveClassName = (index) =>
    twMerge(index === selectedContentIndex && "text-[#2299] font-semibold");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // 각 컨텐츠 영역의 위치 확인 후 현재 보여지는 영역 설정
      contentRef.current.forEach((ref, index) => {
        if (ref) {
          const offsetY = ref.offsetTop - 300;
          if (scrollY >= offsetY) {
            setSelectedContentIndex(index);
          }
        }
      });
    });
  });

  return (
    <div>
      <div className="sticky top-[80px] h-[150px] bg-white pt-[60px] pb-[20px]">
        <div className="text-[28px]">
          안녕하세요 :{")"} 배움을 게을리하지 않는 기획자 민아연입니다
        </div>
        <ul className="flex gap-[15px] pt-[10px] text-[16px] font-light">
          {contents.map((content, index) => (
            <button
              key={content.name}
              onClick={handleClickTab(index)}
              className={buttonActiveClassName(index)}
            >
              {content.name}
              {/* content name 사이에 '|' 추가 */}
              {index !== contents.length - 1 && (
                <span className="ml-[15px]">|</span>
              )}
            </button>
          ))}
        </ul>
      </div>

      <div className="flex">
        <div className=" top-[220px] w-[325px] h-[calc(100vh-220px)] sticky">
          프로필
        </div>
        <div className="w-[100%] ml-5 gap-y-[30px] wrap flex-wrap flex">
          {contents.map((content, index) => (
            <div
              ref={addContentRef(index)}
              key={content.name}
              className={content.className}
            >
              {content.Element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
