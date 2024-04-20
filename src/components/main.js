"use client";
import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";
import Navigation from "./navigation";

export default function Home() {
  const { prefix } = useContext(ConfigContext); //
  return (
    <>
      <div className="bg-slate-400 h-screen">
        <div className="">main</div>
      </div>
    </>
  );
}

// <Image
//               src={`${prefix}/vercel.svg`}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
