"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectItem({ item }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`project/${item.id}`);
  };
  return (
    <li className="w-[406px]">
      <article
        className="flex flex-col gap-y-[22px] cursor-pointer"
        onClick={handleClick}
      >
        <header className="relative w-[406px] h-[200px]">
          <Image
            className="object-cover rounded-sm"
            src={item.url}
            fill
            alt={item.name}
          />
        </header>
        <section className="flex flex-col gap-y-[15px] text-center">
          <span>{item.name}</span>
          <span>{item.period}</span>
        </section>
      </article>
    </li>
  );
}
