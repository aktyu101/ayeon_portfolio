"use client";

import DetailTemplate from "../DetailTemplate";

export default function Detail3() {
  return <DetailTemplate id={3} contents={<Contents />} />;
}

const Contents = () => {
  return <>3</>;
};
