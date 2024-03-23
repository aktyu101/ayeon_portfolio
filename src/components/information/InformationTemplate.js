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
      className: "w-[100%] bg-[#ab9696] h-[800px]",
      Element: <>1</>,
    },
    {
      name: "EDUCATION&CAREER",
      className: "w-[100%] bg-[#f78c8c] h-[800px]",
      Element: <>2</>,
    },
    {
      name: "LICENCE",
      className: "w-[100%] bg-[#f68c8c] h-[800px]",
      Element: <>3</>,
    },
  ];

  const handleClickTab = (index) => () => {
    const target = contentRef.current[index];
    setSelectedContentIndex(index);

    window.scroll({
      top: target.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  const buttonActiveClassName = (index) =>
    twMerge(index === selectedContentIndex && "text-[#2299]");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      contentRef.current.forEach((ref, index) => {
        const offsetY = ref.offsetTop - 80;
        if (scrollY >= offsetY) {
          setSelectedContentIndex(index);
        }
      });
    });
  });

  return (
    <div>
      <div className="sticky top-0 h-[80px] bg-white pt-[30px] pb-[20px]">
        <div>안녕하세요 :{")"} 배움을 게을리하지 않는 기획자 민아연입니다</div>
        <ul className="flex gap-8 ">
          {contents.map((content, index) => (
            <button
              key={content.name}
              onClick={handleClickTab(index)}
              className={buttonActiveClassName(index)}
            >
              {content.name}
            </button>
          ))}
        </ul>
      </div>

      <div className="flex">
        <div className=" top-[80px] w-[325px] h-[calc(100vh-80px)] bg-[#eee] sticky">
          프로필
        </div>
        <div className="w-[940px] bg-[#eee] gap-y-[30px] wrap flex-wrap flex">
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
