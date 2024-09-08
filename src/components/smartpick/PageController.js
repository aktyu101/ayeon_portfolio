import React from "react";

const PageController = ({ onPrevPage, onNextPage, currentPage }) => {
  const btnStyle = `w-[148px] h-[50px] border-[#3687F7] border-[1px] text-[18px] font-medium rounded-md text-center hover:text-white hover:bg-[#3687F7] duration-200 absolute bottom-[32px]`;
  const progressWidth =
    currentPage === 1 ? "33.333%" : currentPage === 2 ? "66.666%" : "100%";
  //   console.log("현재 페이지 번호", currentPage);

  return (
    <div
      style={{ width: "calc(100% - 100px)" }}
      className="fixed bottom-[44px] left-1/2 transform -translate-x-1/2"
    >
      <div className="relative flex justify-between pb-[32px]">
        {/* 왼쪽 버튼 */}
        {currentPage !== 1 && (
          <button className={`${btnStyle} left-0`} onClick={onPrevPage}>
            이전으로
          </button>
        )}

        {/* 오른쪽 버튼 */}
        {currentPage !== 3 && (
          <button className={`${btnStyle} right-0`} onClick={onNextPage}>
            다음으로
          </button>
        )}
      </div>
      <div className="w-[100%] box-border h-[3px] bg-[#F4F4F5] relative">
        <div
          className="absolute top-0 left-0 bg-[#3687F7] h-[3px]"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};

export default PageController;
