"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PageController from "./PageController";
import RemainingTime from "./RemainingTime";

const LottoPicker = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(new Set());
  const [excludedNumbers, setExcludedNumbers] = useState(new Set());
  const [restNumbers, setRestNumbers] = useState(new Set());

  const [includeChecked, setIncludeChecked] = useState(true);
  const [excludeChecked, setExcludeChecked] = useState(false);

  //선택안함 버튼 컬러
  const [isClearButtonActive, setIsClearButtonActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  //포함 제외 필터링한 나머지 숫자
  useEffect(() => {
    const allNumbers = new Set(Array.from({ length: 45 }, (_, i) => i + 1));
    const newRestNumbers = new Set(
      [...allNumbers].filter(
        (number) => !selectedNumbers.has(number) && !excludedNumbers.has(number)
      )
    );

    setRestNumbers(newRestNumbers);
  }, [selectedNumbers, excludedNumbers]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 상태를 불러옴
    const savedState = localStorage.getItem("lottoState");
    if (savedState) {
      const {
        selectedNumbers,
        excludedNumbers,
        includeChecked,
        excludeChecked,
        isClearButtonActive,
      } = JSON.parse(savedState);
      setSelectedNumbers(new Set(selectedNumbers));
      setExcludedNumbers(new Set(excludedNumbers));
      setIncludeChecked(includeChecked);
      setExcludeChecked(excludeChecked);
      setIsClearButtonActive(isClearButtonActive);
    }
  }, []);

  useEffect(() => {
    // 상태가 변경될 때 로컬 스토리지에 상태를 저장함
    localStorage.setItem(
      "lottoState",
      JSON.stringify({
        selectedNumbers: Array.from(selectedNumbers),
        excludedNumbers: Array.from(excludedNumbers),
        includeChecked,
        excludeChecked,
        isClearButtonActive,
      })
    );
  }, [
    selectedNumbers,
    excludedNumbers,
    includeChecked,
    excludeChecked,
    isClearButtonActive,
  ]);

  const handleClick = (number) => {
    setIsClearButtonActive(false);

    if (includeChecked) {
      // 포함 체크박스가 활성화된 경우
      setSelectedNumbers((prev) => {
        const newSet = new Set(prev);

        // 클릭한 번호가 포함 상태에 있는 경우
        if (newSet.has(number)) {
          newSet.delete(number);
        } else {
          // 클릭한 번호가 포함 상태에 없는 경우
          if (newSet.size < 5) {
            newSet.add(number);
          } else {
            alert("포함 번호는 최대 5개까지 선택 가능합니다.");
          }
        }

        return newSet;
      });
    } else if (excludeChecked) {
      // 제외 체크박스가 활성화된 경우
      setExcludedNumbers((prev) => {
        const newSet = new Set(prev);

        // 클릭한 번호가 제외 상태에 있는 경우
        if (newSet.has(number)) {
          newSet.delete(number);
        } else {
          // 클릭한 번호가 제외 상태에 없는 경우
          if (newSet.size < 38) {
            newSet.add(number);
          } else {
            alert("제외 번호는 최대 38개까지 선택 가능합니다.");
          }
        }
        console.log("neeSet", newSet);
        return newSet;
      });
    }
  };

  const handleIncludeChange = (event) => {
    setIncludeChecked(event.target.checked);
    if (event.target.checked) {
      setExcludeChecked(false); // 제외 체크박스를 비활성화
    }
  };

  const handleExcludeChange = (event) => {
    setExcludeChecked(event.target.checked);
    if (event.target.checked) {
      setIncludeChecked(false); // 포함 체크박스를 비활성화
    }
  };

  const handleClearSelection = () => {
    if (isClearButtonActive == false) {
      const confirmClear = window.confirm(
        "선택 번호가 해제됩니다. 초기화 하시겠습니까?"
      );
      if (confirmClear) {
        setSelectedNumbers(new Set());
        setExcludedNumbers(new Set());
        setIsClearButtonActive(true);
      }
    }
  };
  //다음 페이지
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  //이전 페이지
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 45; i++) {
      const isSelected = selectedNumbers.has(i);
      const isExcluded = excludedNumbers.has(i);

      numbers.push(
        <button
          key={i}
          className={`w-[44px] h-[44px] border text-lg flex items-center justify-center transition-colors duration-300 border-[#F4F4F5]
            ${
              isExcluded
                ? "bg-[#F4F4F5] text-[#D6D6D5]"
                : isSelected
                ? "bg-[#3687F7] text-white"
                : "bg-white text-black"
            }`}
          onClick={() => handleClick(i)}
          disabled={
            (excludeChecked && isSelected) || (includeChecked && isExcluded)
          }
        >
          {i}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div className="bg-white h-screen">
      <RemainingTime />
      {currentPage === 1 ? (
        <div className="flex justify-center flex-col items-center pb-[100px]">
          <h2 className="text-[#1D1C1C] text-[18px] font-medium">
            포함 번호와 제외 번호를 선택해 주세요
          </h2>
          <div className="pt-[25px] w-[302px]">
            {/* 숫자 컨테이너*/}
            <div className="w-[302px] grid grid-cols-7">
              {renderNumbers()}
              <div
                onClick={handleClearSelection}
                className={`w-[173px] h-[44px] text-[${
                  isClearButtonActive ? "#fff" : "#000"
                }] border-[#F4F4F5] border leading-[44px] text-center bg-[${
                  isClearButtonActive ? "#3687F7" : "#fff"
                }]`}
              >
                선택안함{"(자동)"}
              </div>
            </div>

            <div className="mb-[30px] mt-[12px]">
              {/* 포함버튼 */}
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  checked={includeChecked}
                  onChange={handleIncludeChange}
                  className="form-checkbox"
                />
                <span className="ml-2 text-[14px] font-medium">포함</span>
              </label>
              {/* 제외버튼 */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={excludeChecked}
                  onChange={handleExcludeChange}
                  className="form-checkbox"
                />
                <span className="ml-2 text-[14px] font-medium">제외</span>
              </label>
            </div>
            <div
              onClick={handleClearSelection}
              className="w-[105px] h-[32px] flex gap-[4px] box-border bg-[#F4F4F5] justify-center leading-[32px] m-auto rounded-md hover:bg-[#f4f4f5ad]"
            >
              <span>초기화</span>
              <Image
                src="images/smartpick/reset.svg"
                alt="초기화 아이콘"
                className="object-corver"
                width={14}
                height={14}
              />
            </div>
            <div className="my-[20px]">
              <div>
                추첨 번호:{" "}
                <span className="text-[blue]">
                  {Array.from(selectedNumbers).join(" ")}
                </span>
              </div>
              <div>
                제외 번호:{" "}
                <span className="text-[red]">
                  {Array.from(excludedNumbers).join(" ")}
                </span>
              </div>
              <div>나머지 번호 : {Array.from(restNumbers).join(" ")}</div>
            </div>
          </div>
          <div className="w-[400px] box-border border-[1px] border-[#E7E7E7] rounded-md p-[15px]">
            <p className="text-[14px] text-[#777] leading-[20px]">
              * 전체 자동을 원하실 경우 선택안함을 눌러주세요.
            </p>
            <p className="text-[14px] text-[#777] leading-[20px]">
              * 포함 번호는 5개까지, 제외 번호는 38개까지 선택 가능합니다.
            </p>
          </div>
        </div>
      ) : currentPage === 2 ? (
        <div className="flex justify-center flex-col items-center pb-[100px]">
          <h2 className="text-[#1D1C1C] text-[18px] font-medium">
            결과에서 제외할 경우의 수를 선택해 주세요.
          </h2>
          <div className="pt-[25px] w-[302px]">
            <div className="my-[20px]">
              <div>
                추첨 번호:{" "}
                <span className="text-[blue]">
                  {Array.from(selectedNumbers).join(" ")}
                </span>
              </div>
              <div>
                제외 번호:{" "}
                <span className="text-[red]">
                  {Array.from(excludedNumbers).join(" ")}
                </span>
              </div>
              <div>나머지 번호 : {Array.from(restNumbers).join(" ")}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center pb-[100px]">
          <h2 className="text-[#1D1C1C] text-[18px] font-medium">
            적용 수량을 선택해 주세요.
          </h2>
          <div className="pt-[25px] w-[302px]">
            <div className="my-[20px]">
              <div>
                추첨 번호:{" "}
                <span className="text-[blue]">
                  {Array.from(selectedNumbers).join(" ")}
                </span>
              </div>
              <div>
                제외 번호:{" "}
                <span className="text-[red]">
                  {Array.from(excludedNumbers).join(" ")}
                </span>
              </div>
              <div>나머지 번호 : {Array.from(restNumbers).join(" ")}</div>
            </div>
          </div>
          <div className="w-[400px] box-border border-[1px] border-[#E7E7E7] rounded-md p-[15px]">
            <p className="text-[14px] text-[#777] leading-[20px]">
              * 재추첨 시 결과 리스트에 추첨 번호가 추가됩니다.
            </p>
            <p className="text-[14px] text-[#777] leading-[20px]">
              * 선택 게임수보다 경우의 수가 적은 경우 최대 경우의 수 까지만
              노출됩니다.
            </p>
          </div>
        </div>
      )}
      <PageController
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default LottoPicker;
