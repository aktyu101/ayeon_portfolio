"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SmartPickTemplate() {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 비동기 함수 정의
    const fetchLottoData = async () => {
      try {
        const response = await axios.get(
          "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903"
        ); // API URL 수정 필요
        console.log(response.data); // 응답 데이터 로그
        if (response.data && response.data.numbers) {
          setLottoNumbers(response.data.numbers);
        } else {
          setError("Invalid data format");
        }
      } catch (err) {
        console.error("API 호출 에러:", err); // 에러 로그
        setError("Error fetching lotto data");
      }
    };

    // API 호출
    fetchLottoData();
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 호출됨

  return (
    <div>
      <h1>Available Lotto Numbers</h1>
      {error && <p>{error}</p>}
      {lottoNumbers.length > 0 ? (
        <ul>
          {lottoNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
