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
import { ScrollArea } from "@/components/ui/scroll-area";

//header main 구분 0420, props(main, sub)

export default function Navigation() {
  const pathname = usePathname();
  const [isOpenNav, setIsOpenNav] = useState(false);

  // 경로별 배경색 처리
  const wrapperStyles = twMerge(
    "absolute z-50 block fixed t-0 p-[20px] box-border w-full h-screen bg-[#352f2f] text-white h-screen z-[51] flex justify-center"
  );
  const hoverStyle = twMerge(
    "hover:text-[#352f2f] hover:border-[#352f2f] hover:font-medium"
  );

  //1depth 카테고리 링크 받아오기
  console.log("test", routes[0].name, routes[0].link);

  useEffect(() => {
    setIsOpenNav(false);
  }, [pathname]);

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpenNav ? 0 : "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={wrapperStyles}
      >
        <div className="flex flex-col absolute top-0 left-0 w-full items-center">
          <div className="flex justify-end mb-[30px]">
            <CloseBtn onClick={() => setIsOpenNav(false)} />
          </div>
          <ScrollArea className="h-[600px] w-[600px]">
            <Menu routes={routes} />
          </ScrollArea>
        </div>
        {/* flex:1 로 공간 젤 많이주고 flex 먹이고 align-items : flex-end */}
        <div className="flex gap-x-[4px] fixed bottom-[30px]">
          <button
            className={
              "border-[#fff] border-2 w-[54px] h-[54px] text-[#fff] bg-[#352f2f] text-center leading-[53px] border-solid " +
              hoverStyle
            }
          >
            down
          </button>
        </div>
      </motion.div>

      {/* header */}
      <div className="w-[100%] h-[80px] sticky top-0 z-50 flex items-center  ">
        {/* shadow-[2px_3px_15px_rgba(0,0,0,0.04)] */}
        <div className="w-[100%] mx-[50px] z-[51] flex justify-between items-center">
          <div className="flex gap-3 items-center text-[25px] font-medium text-[#352F2F]">
            <Link href={"/"}>
              <span>AYEON</span>
            </Link>
            <OpenBtn onClick={() => setIsOpenNav(true)}></OpenBtn>
          </div>
          <div className="flex gap-5 items-center">
            {routes.map((route, index) => (
              <Link key={index} href={route.link}>
                <span className="hover:text-[#352f2f] hover:line-through">
                  {route.name}
                </span>
              </Link>
            ))}
            <ContactPopup />
          </div>
        </div>
      </div>
    </>
  );
}
