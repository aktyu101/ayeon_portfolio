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
        className="text-[#000 fixed right-[20px] bottom-[30px] w-[75px] h-[75px] box-border rounded-full bg-[#352F2F] text-white"
      >
        TOP
      </button>
    </>
  );
}
