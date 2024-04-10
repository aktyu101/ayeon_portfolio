"use client";
import React from "react";

export default function BackToTopButton() {
  const backToTop = () => window.scrollTo({ top: 0 });
  return (
    <>
      {" "}
      <button
        onClick={backToTop}
        className="text-[#000 fixed right-[20px] bottom-[30px] w-[50px] h-[50px] box-border rounded-full bg-[#2742BE] text-white"
      >
        TOP
      </button>
    </>
  );
}
