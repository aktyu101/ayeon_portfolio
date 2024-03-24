export default function OpenBtn({ onClick: handleClick }) {
  return (
    <button
      className=" w-[30px] h-[49px] left-0 top-0 gap-y-[5px] items-center flex box-border py-[14px] flex-wrap"
      onClick={handleClick}
    >
      <Line />
      <Line />
      <Line />
    </button>
  );
}

function Line() {
  return <div className="w-[50px] h-[3px] bg-[#2742BE]"></div>;
}
