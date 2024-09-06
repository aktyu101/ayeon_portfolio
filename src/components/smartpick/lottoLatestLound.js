"use client";

import React, { useState, useEffect } from "react";

function LottoChecker({ drawNumber }) {
  const [lottoData, setLottoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLottoData = async () => {
      try {
        const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLottoData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLottoData();
  }, [drawNumber]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error.message}</p>;

  if (!lottoData) return <p>데이터가 없습니다</p>;

  return (
    <div>
      <h1>로또 번호</h1>
      <pre>{JSON.stringify(lottoData, null, 2)}</pre>
    </div>
  );
}

export default LottoChecker;
