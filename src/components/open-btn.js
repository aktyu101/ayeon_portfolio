import { useState } from "react";
import Link from "next/link";

function Line({ width, hover }) {
  return (
    <div
      className={`h-[3px] bg-[#352f2f] transition-all duration-300`}
      style={{
        width: hover ? "30px" : `${width}px`,
        background: hover ? "#ff4b00" : "#352f2f",
      }}
    ></div>
  );
}

export default function OpenBtn({ onClick: handleClick }) {
  const [openBtnHover, setOpenBtnHover] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setOpenBtnHover(true);
    }, 50);
  };

  const handleMouseLeave = () => {
    setOpenBtnHover(false);
  };

  return (
    <>
      <Link href={"/"}>
        <span
          style={{
            color: openBtnHover ? "#ff4b00" : "#352f2f",
            transition: "color 0.3s ease", // Adding transition property for smooth color change
          }}
          className="box-border pb-[3px] block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          AYEON
        </span>
      </Link>
      <button
        className="w-[30px] h-[49px] left-0 top-0 gap-y-[6px] items-center flex box-border py-[14px] flex-wrap"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Line width={26} hover={openBtnHover} />
        <Line width={22} hover={openBtnHover} />
        <Line width={30} hover={openBtnHover} />
      </button>
    </>
  );
}
