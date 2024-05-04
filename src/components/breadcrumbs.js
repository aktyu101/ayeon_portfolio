"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // const pathnameArray = pathname.split("/").filter((path) => path);
  // const pathMap = pathnameArray.reduce((name, index) => {}, {});
  //0309 link 매칭 reduce childeren

  const segments = pathname.split("/").filter((path) => path);
  console.log("segments", segments);
  const visibleSegments = segments.slice(0, 2);

  // console.log("pathnameArray", pathnameArray);

  return (
    <>
      <div className="size-full flex justify-end text-[#666] pt-[20px]">
        <Link href="/">home</Link>
        {/* depth가 깊어져도 계속 추가되게 변경 */}
        {visibleSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <span className="mx-[8px]">{" > "}</span>
            {/* <Link href={`/${visibleSegments.slice(0, index + 1).join("/")}`}>
              <span>{segment}</span>
            </Link> */}
            <p>
              <span>{segment}</span>
            </p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
