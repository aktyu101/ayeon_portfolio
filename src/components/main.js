"use client";
import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";
// import Navigation from "./navigation";
import { motion } from "framer-motion";
// import { useEffect } from "react";

export default function Home() {
  const { prefix } = useContext(ConfigContext); //

  return (
    <>
      {/* 흘러가는 텍스트 효과 적용 */}
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 600,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
        pharetra odio, vel interdum enim pharetra et. Sed pharetra condimentum
        eros. Donec nisl magna, malesuada sit amet orci iaculis, maximus porta
        arcu. Morbi lorem elit, dapibus id odio nec, vestibulum blandit odio.
        Duis eget cursus mauris. Integer justo tortor, convallis sit amet lacus
        a, pretium posuere elit. Nam felis magna, molestie in lacinia at,
        lobortis sit amet neque. Duis ullamcorper erat tortor, et venenatis
        lectus gravida id. Phasellus congue, ipsum at pellentesque sollicitudin,
        augue tortor egestas enim, id luctus elit urna a mauris. Mauris non nisi
        vel neque commodo consectetur. Vivamus et mollis augue. Cras nec
        condimentum felis. Nunc lectus enim, tempus vel elementum id, ultricies
        consequat mi.
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
