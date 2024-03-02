"use client";
import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";
import styled from "styled-components";

export default function Home() {
  const { prefix } = useContext(ConfigContext); //
  return (
    <>
      <ContentAreaWrap>
        <ContentArea>content</ContentArea>
      </ContentAreaWrap>
    </>
  );
}
const ContentAreaWrap = styled.div`
  width: 1260px;
  display: flex;
  justify-content: center;
  background-color: #666;
  height: 6000px;
  text-align: center;
  margin: 0 auto;
`;

const ContentArea = styled.div`
  width: 1260px;
  height: 6000px;
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
