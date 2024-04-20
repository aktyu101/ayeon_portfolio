"use client";

import DetailTemplate from "../DetailTemplate";

export default function Detail1() {
  return <DetailTemplate id={1} contents={<Contents />} />;
}

const Contents = () => {
  return <>dd</>;
};
