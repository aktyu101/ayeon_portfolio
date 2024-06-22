import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const btnStyle = twMerge(
    "border-[#fff] border-2 w-[128px] h-[42px] text-[#fff] bg-[#ff4b00] text-center leading-[30px] rounded-full",
    " hover:text-[#352f2f] hover:font-medium box-border"
  );

  return (
    <div className="">
      <button onClick={togglePopup} className={btnStyle}>
        CONTACT
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
            className="fixed top-1/2 left-1/2 bg-white rounded-lg p-4 z-50 text-black border-[1px]"
            style={{
              maxWidth: "400px",
              width: "80vw",
              height: "300px",
            }}
          >
            {/* 팝업 내용 */}
            <h2 className="text-lg font-bold pb-[15px] mb-[15px] text-[23px] border-b-2 box-border">
              Contact
            </h2>
            <div className="flex gap-y-[10px] flex-wrap flex-col">
              <p className="flex justify-between">
                <span>H.P</span>
                <a href="tel:01052381429" className="ml-10px">
                  010-5238-1429
                </a>
              </p>
              <p className="flex justify-between">
                <span>e-mail</span>
                <span className="ml-10px">aktyu101@nate.com</span>
              </p>
              <p className="flex justify-between">
                <span>kakaotalk</span>
                <a href="https://open.kakao.com/o/s6G8x8mg" className="ml-10px">
                  open chatting
                </a>
              </p>
              <p className="flex justify-between">
                <span>github</span>
                <a href="https://github.com/aktyu101" className="ml-10px">
                  aktyu101
                </a>
              </p>
            </div>
            <div className="flex justify-end mt-[30px]">
              <button
                onClick={togglePopup}
                className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ContactPopup;
