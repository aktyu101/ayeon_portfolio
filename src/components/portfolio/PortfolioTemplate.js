"use client";

import { projectList } from "@/constants/projectList";
import ProjectItem from "./ProjectItem";

export default function PortfolioTemplate() {
  return (
    <ul className="grid grid-cols-3 gap-y-[50px]">
      {projectList.listSortedByDate.map((list) => (
        <ProjectItem key={list.name} item={list} />
      ))}
    </ul>
  );
}
