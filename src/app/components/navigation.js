"use client";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseBtn from "./close-btn";
import OpenBtn from "./open-btn";
import Menu from "./menu";
import { routes } from "../constants/route";

export default function Navigation() {
  const [onModal, setOnModal] = useState("");
  const [isOpenNav, setIsOpenNav] = useState(true);

  const closeNav = () => {
    setOnModal(onModal === null ? "block" : "none");
  };
  const openNav = () => {
    setOnModal(onModal === null ? "none" : "block");
  };

  const wrapperStyles = twMerge(
    "absolute z-50 block fixed t-0 p-[20px] box-border w-[300px] h-screen bg-[#111] text-white h-screen",
    isOpenNav ? "block" : "hidden"
  );

  return (
    <>
      <div className={wrapperStyles}>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <CloseBtn onClick={() => setIsOpenNav(false)} />
          </div>
          <div>
            <Menu routes={routes}></Menu>
          </div>
        </div>
        <Link href="/">main</Link>
        {/* flex:1 로 공간 젤 많이주고 flex 먹이고 align-items : flex-end */}
        <div className="flex gap-x-[4px] fixed bottom-[30px]">
          <button className="border-[#fff] border-2 w-[200px] h-[54px] text-[#fff] bg-[#111] text-center leading-[53px] border-solid hover:bg-[#fff] hover:text-[#2742BE] hover:border-[#2742BE] hover:font-medium pointer-events-auto">
            Contact
          </button>
          <div className="text-[#fff] w-[54px] h-[54px] border-[#fff] border-solid border-2 text-center leading-[53px] hover:bg-[#fff] hover:text-[#2742BE] hover:border-[#2742BE] hover:font-medium pointer-events-auto">
            down
          </div>
        </div>
      </div>

      <OpenBtn onClick={() => setIsOpenNav(true)}></OpenBtn>
    </>
  );
}
