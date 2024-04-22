"use client";

import { projectList } from "@/constants/projectList";
import ProjectItem from "./ProjectItem";

export default function PortfolioTemplate() {
  return (
    <div>
      <div className="top-[60px] h-[170px] pt-[60px] pb-[20px]">
        <p className="text-[28px] text-center">PORTFOLIO</p>
      </div>

      <ul className=" flex flex-wrap gap-y-[50px] justify-between">
        {projectList.listSortedByDate.map((list) => (
          <ProjectItem key={list.name} item={list} />
        ))}
      </ul>
    </div>
  );
}
