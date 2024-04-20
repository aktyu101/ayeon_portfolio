"use client";

import DetailTemplate from "../DetailTemplate";

export default function Detail4() {
  return <DetailTemplate id={4} contents={<Contents />} />;
}

const Contents = () => {
  return <>4</>;
};
