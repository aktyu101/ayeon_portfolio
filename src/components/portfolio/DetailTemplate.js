"use client";

import { projectList } from "@/constants/projectList";

export default function DetailTemplate({ id, contents }) {
  const item = projectList.findListById(id);

  return (
    <article>
      <header>
        <h1>{item.name}</h1>
        <div>
          <span>{item.period}</span>
          <span>{item.description}</span>
        </div>
      </header>
      <section>{contents}</section>
    </article>
  );
}
