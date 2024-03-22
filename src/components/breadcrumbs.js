"use client";

import { usePathname } from "next/navigation";
import { portfolio } from "@/constants/route";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/").filter((path) => path);
  const pathMap = pathnameArray.reduce((name, index) => {}, {});
  //0309 link 매칭 reduce childeren

  console.log("pathnameArray", pathnameArray);
  console.log("portfolio", portfolio);

  const firstSegment = pathnameArray[0];
  const secondSegment = pathnameArray[1];
  const pathIcon = ">";

  return (
    <>
      <div>
        <Link href={"/"}>
          <span>home</span>
        </Link>
        {pathIcon}
        <Link href={"/" + firstSegment}>
          <span>{firstSegment}</span>
        </Link>
        {secondSegment && (
          <span>
            {pathIcon}
            <span>{secondSegment}</span>
          </span>
        )}
      </div>
    </>
  );
}
