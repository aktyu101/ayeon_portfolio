import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const hoverStyle = twMerge(
    "hover:bg-[#fff] hover:text-[#2742BE] hover:border-[#2742BE] hover:font-medium"
  );

  return (
    <div className="">
      <button
        onClick={togglePopup}
        className={
          "border-[#fff] border-2 w-[200px] h-[54px] text-[#fff] bg-[#111] text-center leading-[53px] border-solid " +
          hoverStyle
        }
      >
        Contact
      </button>
      {isOpen && (
        <>
          {/* 딤 처리 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black"
          ></motion.div>
          {/* 팝업 */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: "-50%", x: "-50%" }}
            animate={{ scale: 1, opacity: 1, y: "-50%", x: "-50%" }}
            className="fixed top-1/2 left-1/2 bg-white rounded-lg p-4 z-50 text-black border-[#2742BE] border-[1px]"
            style={{
              maxWidth: "800px",
              width: "80vw",
              height: "600px",
              maxHeight: "600px",
              overflowY: "auto",
            }}
          >
            {/* 팝업 내용 */}
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <p className="flex justify-between">
              <span>H.P</span>
              <span className="ml-10px">010-5238-1429</span>
            </p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ContactPopup;
