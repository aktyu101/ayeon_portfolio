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

  // console.log("pathnameArray", pathnameArray);

  return (
    <>
      <div className="size-full flex justify-end text-[#666] pt-[49px]">
        <Link href="/">home</Link>
        {/* depth가 깊어져도 계속 추가되게 변경 */}
        {segments.map((segment, index) => (
          <React.Fragment key={segment}>
            {" > "}
            <Link href={`/${segments.slice(0, index + 1).join("/")}`}>
              <span>{segment}</span>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
