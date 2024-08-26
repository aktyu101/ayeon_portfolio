"use client";

import DetailTemplate from "../DetailTemplate";
import ReactNotion from "@/NotionPage";

export default function Detail1() {
  return <DetailTemplate id={1} contents={<Contents />} />;
}

const Contents = () => {
  return <>6</>;
};
