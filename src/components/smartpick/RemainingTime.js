import { useState, useEffect } from "react";

export default function RemainingTime() {
  const baseDate = new Date(2024, 8, 21); // 2024년 9월 21일 (월은 0부터 시작)
  const [latestDraw, setLatestDraw] = useState(1137);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    // 회차 정보 업데이트
    const calculateDrawNumber = () => {
      const now = new Date();
      const daysDifference = Math.floor(
        (now - baseDate) / (1000 * 60 * 60 * 24)
      );
      const weeksPassed = Math.floor(daysDifference / 7);
      setLatestDraw(latestDraw + weeksPassed + 1);
    };

    // 추첨까지 남은 시간 계산
    const calculateRemainingTime = () => {
      const now = new Date();
      const nextDraw = getNextDrawTime();

      const timeDifference = nextDraw - now;
      if (timeDifference <= 300000) {
        setRemainingTime("추첨 진행 중");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const formatTimeUnit = (unit) => unit.toString().padStart(2, "0");

      setRemainingTime(
        `${days}일 ${formatTimeUnit(hours)}:${formatTimeUnit(
          minutes
        )}:${formatTimeUnit(seconds)}`
      );
    };

    // 다음 추첨일 계산
    const getNextDrawTime = () => {
      const now = new Date();
      const nextSaturday = new Date(now);
      nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7)); // 다음 토요일
      nextSaturday.setHours(20, 35, 0, 0);
      if (now > nextSaturday) {
        nextSaturday.setDate(nextSaturday.getDate() + 7);
      }
      return nextSaturday;
    };

    // 초기 회차 업데이트
    calculateDrawNumber();
    const intervalId = setInterval(() => {
      calculateDrawNumber();
      calculateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[400px] h-[44px] bg-[#F5F9FE] leading-[44px] box-border px-[20px] mt-[60px] mb-[35px] flex justify-between rounded-md">
        <span className="text-[18px] text-[#3687F7] font-bold">
          {latestDraw}회
        </span>
        <span>
          <span className="text-[14px] text-[#777] mr-[8px]">
            추첨까지 남은 시간
          </span>
          <span className="text-[#FD1E00] text-[18px] font-bold">
            {remainingTime}
          </span>
        </span>
      </div>
    </div>
  );
}
