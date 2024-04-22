"use client";

import DetailTemplate from "../DetailTemplate";

export default function Detail2() {
  return <DetailTemplate id={2} contents={<Contents />} />;
}

const Contents = () => {
  return <>2</>;
};
