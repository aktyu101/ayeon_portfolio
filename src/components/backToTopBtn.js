"use client";
import React from "react";

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
        <img
          src="images/information/top_dark.svg"
          alt="phone"
          className="w h-auto inline-block mr-[8px]"
        />
        <img
          src="images/information/top_white.svg"
          alt="phone"
          className="w h-auto inline-block mr-[8px]"
        />
      </button>
    </>
  );
}
