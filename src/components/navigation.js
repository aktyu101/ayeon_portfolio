"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseBtn from "./close-btn";
import OpenBtn from "./open-btn";
import Menu from "./menu";
import { routes } from "../constants/route";
import { motion } from "framer-motion";
import ContactPopup from "./ContactPopup";
// import { ScrollArea } from "@/components/ui/scroll-area";
import dayjs from "dayjs";
import ResumePopup from "./ResumePopup";

//header main 구분 0420, props(main, sub)

export default function Navigation() {
  const pathname = usePathname();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  // 경로별 배경색 처리
  const wrapperStyles = twMerge(
    "absolute z-50 block fixed t-0 p-[20px] box-border w-full h-screen bg-[#352f2f] text-white h-screen z-[999999] flex justify-center"
  );
  const hoverStyle = twMerge(
    "hover:text-[#352f2f] hover:border-[#352f2f] hover:font-medium"
  );

  useEffect(() => {
    setIsOpenNav(false);
  }, [pathname]);

  //header 스크롤 다운 시 숨김, 업 시 노출
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpenNav ? 0 : "-100%" }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={wrapperStyles}
      >
        <div className="flex flex-col absolute top-0 left-0 w-full items-center justify-between h-screen">
          <div className="flex mt-[30px]">
            <CloseBtn onClick={() => setIsOpenNav(false)} />
          </div>
          <Menu routes={routes} />
          <div className="text-center text-[#ffffff8a] w-full mb-[30px]">
            COPYRIGHT AYEON MIN {dayjs().year()} ALL RIGHTS RESERVED.
          </div>
        </div>
      </motion.div>

      {/* header */}
      <div
        className={`w-ful h-[80px] sticky top-0 z-[20] flex items-center hover:bg-[#f5f5f5] hover:delay-150 transition-transform duration-300 bg-[#f5f5f5e6] ${
          isScrollingUp ? "transform-none" : "-translate-y-full"
        }`}
      >
        {/* shadow-[2px_3px_15px_rgba(0,0,0,0.04)] */}
        <div className="w-full mx-[15px] md:mx-[50px] z-[51] flex justify-between items-center">
          <div className="flex gap-3 items-center text-[25px] font-medium text-[#352F2F]">
            <OpenBtn onClick={() => setIsOpenNav(true)}></OpenBtn>
          </div>
          <div className="flex md:gap-5 items-center flex-col md:flex-row">
            <div className="md:hidden">
              <ContactPopup />
            </div>
            {/* 이력서 메뉴 추가 */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setHoveredIndex("resume")}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(null)}
            >
              <ResumePopup />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === "resume" ? "100%" : 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="absolute bottom-0 left-0 h-[1px] bg-[#352f2f] top-[50%]"
              />
            </div>
            {routes.map((route, index) => (
              <Link key={index} href={route.link}>
                <div className="relative hidden md:block">
                  <span
                    className=" relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {route.name}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="absolute bottom-0 left-0 h-[1px] bg-[#352f2f] top-[50%]"
                  />
                </div>
              </Link>
            ))}
            <div className="hidden md:block">
              <ContactPopup />
              {/* <ResumePopup /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
