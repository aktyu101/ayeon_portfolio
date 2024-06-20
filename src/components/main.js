"use client";
import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";
// import Navigation from "./navigation";
import { motion } from "framer-motion";
// import { useEffect } from "react";

export default function Home() {
  const { prefix } = useContext(ConfigContext); //

  // useEffect(() => {
  //   controls.start({
  //     x: 0,
  //     transition: { ease: "easeOut", duration: 2 },
  //   });
  // }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 600,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-flow-container whitespace-nowrap"
        >
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
          <PointText />
        </motion.div>
      </div>
    </>
  );

  function PointText() {
    return (
      <span className="text-[250px]">
        {"<DIV STYLE='STUDY:CONTINUE !IMPORTANT;'>MIN AYEON</DIV>"}
      </span>
    );
  }
}

// <Image
//               src={`${prefix}/vercel.svg`}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
