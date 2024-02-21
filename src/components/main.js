"use client";
import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";
import Navigation from "./navigation";
import styled from "styled-components";

export default function Home() {
  const { prefix } = useContext(ConfigContext); //
  return (
    <>
      <Navigation />
      <ContentAreaWrap width="100%">
        <ContentArea>content</ContentArea>
      </ContentAreaWrap>
    </>
  );
}

const ContentAreaWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  width: 1260px;
  height: 6000px;
  background-color: #eee;
  text-align: center;
  display: block;
`;
// <Image
//               src={`${prefix}/vercel.svg`}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
