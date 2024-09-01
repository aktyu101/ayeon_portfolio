import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default function ReactNotion() {
  const [recordMap, setRecordMap] = useState({});
  const notionPageId = "a194e4669d5049109851b1864792291e";

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // 데이터 형식 확인
        setRecordMap(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Notion page:", error);
      });
  }, []);

  try {
    return (
      <div>
        <NotionRenderer recordMap={recordMap || {}} fullPage={true} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering Notion page:", error);
    return <div>Error rendering page</div>;
  }
}
