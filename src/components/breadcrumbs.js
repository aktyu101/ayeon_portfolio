"use client";

import { usePathname } from "next/navigation";
import { portfolio } from "@/constants/route";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/").filter((path) => path);
  const pathMap = pathnameArray.reduce((name, index) => {}, {});
  //0309 link 매칭 reduce childeren

  console.log("pathnameArray", pathnameArray);
  console.log("portfolio", portfolio);

  return <></>;
}
