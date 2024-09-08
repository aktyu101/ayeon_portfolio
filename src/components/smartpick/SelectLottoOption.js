import Select from "react-select";
import { useState } from "react";

export default function SelectLottoOption() {
  const [isSelectRound, setIsSelectRound] = useState(true);

  const handleCheckedRound = (event) => {
    if (isSelectRound === false) {
      setIsSelectRound(true);
    } else if (isSelectRound === true) {
      setIsSelectRound(false);
    }
    console.log("click", isSelectRound);
  };

  //isSelectRound === true ? -> useEffect로 값 저장

  const roundOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const selectAmountStyle = "flex gap-x-[16px] items-baseline";
  const selectBoxStyle =
    "w-[80px] h-[40px] border-solid border-[#3687F7] rounded-md";
  return (
    <>
      <ul>
        <li>
          <div onClick={handleCheckedRound}>
            <input
              type="checkbox"
              name="round"
              id="round"
              value="selectRound"
            />
            <label for="round">당첨됐던 번호(게임 회차)</label>
          </div>
          <div className={selectAmountStyle}>
            <div className="flex gap-x-[12px] items-baseline">
              <Select className={selectBoxStyle} options={roundOptions} />
              <span>회차</span>
            </div>
            <div>~</div>
            <div className={selectAmountStyle}>
              <Select className={selectBoxStyle} options={roundOptions} />
              <span>회차</span>
            </div>
          </div>
          <div>* 마지막 회차 1106회</div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
