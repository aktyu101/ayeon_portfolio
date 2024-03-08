import { twMerge } from "tailwind-merge";

export default function OpenBtn({ onClick: handleClick }) {
  return (
    <button
      className="relative w-[44px] h-[49px] bg-[#2742BE] left-[35px] top-[35px] gap-y-[10px] items-center flex box-border px-[11px] py-[14px] flex-wrap"
      onClick={handleClick}
    >
      <LineMenu />
      <LineMenu />
      <LineMenu />
    </button>
  );
}

function LineMenu() {
  return <div className="w-[22px] h-[1.5px] bg-white"></div>;
}
