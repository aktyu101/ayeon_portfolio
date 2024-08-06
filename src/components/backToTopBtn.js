"use client";

import React from "react";
import Image from "next/image";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="z-[999] text-[#000 fixed right-[15px] md:right-[50px] bottom-[30px] h-[75px]"
      >
        {/* <Image
          src={
            isIntersecting
              ? "images/information/top_white.svg"
              : "images/information/top_dark.svg"
          }
          alt="topBtn"
          className="w h-auto inline-block mr-[8px]"
          width={60}
          height={60}
        /> */}
        <Image
          src="images/information/top_white.svg"
          alt="topBtn"
          className="w h-auto inline-block mr-[8px]"
          width={60}
          height={60}
        />
      </button>
    </>
  );
}
