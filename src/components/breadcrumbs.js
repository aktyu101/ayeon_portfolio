"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return <></>;
}
