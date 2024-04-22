"use client";

import { studyList } from "@/constants/studyList";
import StudyItem from "./StudyItem";

export default function StudyTemplate() {
  return (
    <div>
      <div className="top-[60px] h-[170px] pt-[60px] pb-[20px]">
        <p className="text-[28px] text-center">STUDY</p>
      </div>

      <ul className=" flex flex-wrap gap-y-[50px] justify-between">
        {studyList.listSortedByDate.map((list) => (
          <StudyItem key={list.name} item={list} />
        ))}
      </ul>
    </div>
  );
}
