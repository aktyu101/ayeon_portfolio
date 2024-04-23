"use client";

import { studyList } from "@/constants/studyList";

export default function DetailTemplate({ id, contents }) {
  const item = studyList.findListById(id);

  return (
    <article>
      <header>
        <h1 className="text-[28px] pt-[60px]">{item.name}</h1>
        <div className="flex flex-nowrap gap-[7px] pt-[8px] pb-[15px] text-[#666] border-b-[1px] border-black items-center">
          <span className="text-[18px]">{item.period}</span>
          <span className="text-[14px]">|</span>
          <span className="text-[18px]">{item.description}</span>
        </div>
      </header>
      <section className="pt-[50px]">{contents}</section>
    </article>
  );
}
