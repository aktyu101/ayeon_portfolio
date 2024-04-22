"use client";

import { studyList } from "@/constants/studyList";

export default function DetailTemplate({ id, contents }) {
  const item = studyList.findListById(id);

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
