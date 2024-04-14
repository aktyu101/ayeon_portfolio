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
      {" "}
      <button
        onClick={scrollToTop}
        className="text-[#000 fixed right-[20px] bottom-[30px] w-[50px] h-[50px] box-border rounded-full bg-[#2742BE] text-white"
      >
        TOP
      </button>
    </>
  );
}
