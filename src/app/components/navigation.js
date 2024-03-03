"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseBtn from "./close-btn";
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
    "block fixed t-0 p-[20px] box-border w-[300px] h-screen bg-[#111] text-white",
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
        {/* <ul>
          <NavOneDepth>
            <Link href="/information">INFORMATION</Link>
            <NavTwoDepthul>
              <NavDepth02>SKILLS</NavDepth02>
              <NavDepth02>EDUCATION & CAREER</NavDepth02>
              <NavDepth02>CAREER</NavDepth02>
            </NavTwoDepthul>
          </NavOneDepth>
          <NavOneDepth>
            <Link href="/portfolio">PORTFOLIO</Link>
            <NavTwoDepthul>
              <NavDepth02>
                DEVELOP PROJECT
                <NavDepth03>
                  <NavThreeDepthli>01</NavThreeDepthli>
                  <NavThreeDepthli>02</NavThreeDepthli>
                  <NavThreeDepthli>03</NavThreeDepthli>
                  <NavThreeDepthli>04</NavThreeDepthli>
                </NavDepth03>
              </NavDepth02>
              <NavDepth02>PROJECT MANAGER</NavDepth02>
            </NavTwoDepthul>
          </NavOneDepth>
        </ul> */}
      </div>
      {/* <OpenNav onClick={openNav}>d</OpenNav> */}
    </>
  );
}

const NavOneDepth = styled.li`
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 50px;
`;
const NavTwoDepthul = styled.ul`
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 8px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
const NavDepth02 = styled.li`
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 8px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
const NavDepth03 = styled.ul`
  margin-top: 5px;
`;
const NavThreeDepthli = styled.li`
  color: #eee;
  font-size: 12px;
  margin-bottom: 5px;
  text-indent: 5px;
`;
const OpenNav = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  right: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(props) => props.onModal};
`;
