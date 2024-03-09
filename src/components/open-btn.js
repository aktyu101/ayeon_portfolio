export default function OpenBtn({ onClick: handleClick }) {
  return (
    <button
      className=" w-[44px] h-[49px] bg-[#2742BE] left-[35px] top-[35px] gap-y-[10px] items-center flex box-border px-[11px] py-[14px] flex-wrap fixed"
      onClick={handleClick}
    >
      <Line />
      <Line />
      <Line />
    </button>
  );
}

function Line() {
  return <div className="w-[22px] h-[1.5px] bg-white"></div>;
}
