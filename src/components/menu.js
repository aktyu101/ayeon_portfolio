import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function Menu({ routes }) {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const handleToggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMenuClick = (index) => {
    handleToggleSubmenu(index);
  };

  const oneDepthStyle = twMerge(
    "border-b-[1px] pb-[10px] mb-[15px] box-border flex justify-between items-center"
  );
  const oneDepthTextStyle = twMerge(
    "text-[22px] font-medium text-white hover:text-[#ffffff8a] cursor-pointer"
  );
  // 노션 접속 불가 처리
  const handleLinkClick = (event) => {
    event.preventDefault(); // 기본 동작 방지
    const password = prompt("비밀번호를 입력하세요:");
    if (password === "0903") {
      window.open(
        "https://iced-harrier-d67.notion.site/170c4b0fd5d4428d83090945d7faf62a?pvs=4",
        "_blank"
      );
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <ul className="flex flex-col">
      {routes.map((route, index) => (
        <li key={index}>
          <div className={oneDepthStyle}>
            <MenuLink route={route} />
            {/* toggle */}
            {route.children && (
              <Image
                className={`cursor-pointer ${
                  openSubmenuIndex === index ? "rotate-0" : "rotate-180"
                }`}
                src="images/toggle.png"
                alt="toggleBtn"
                width={20}
                height={10}
                onClick={() => handleMenuClick(index)}
              />
            )}
          </div>
          {route.children && openSubmenuIndex === index && (
            <ScrollArea className="flex flex-col max-h-[200px] overflow-y-auto">
              {route.children.map((route, index) => (
                <div key={index}>
                  {/* <MenuLink depth={2} route={route} /> */}
                  {route.children && (
                    //&& openSubmenuIndex === index &&
                    <div className="pb-[10px]">
                      {route.children.map((route, index) => (
                        <div key={index}>
                          <MenuLink depth={3} route={route} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ScrollArea>
          )}
        </li>
      ))}
      <li className={oneDepthStyle}>
        <a className={oneDepthTextStyle} onClick={handleLinkClick} href="#">
          NOTION
        </a>
      </li>
    </ul>
  );
}

function MenuLink({ depth = 1, route }) {
  const styleMap = new Map([
    [
      1,
      "text-[22px] font-medium text-white hover:text-[#ffffff8a] cursor-pointer",
    ],
    // `[&:nth-child(odd)]:bg-gray-400`
    [
      2,
      "text-[16px] font-extraLight text-white hover:text-[#ffffff8a] cursor-pointer",
    ],
    [
      3,
      "text-[16px] block mb-[7px] text-[#eee] hover:text-[#ffffff4a] cursor-pointer",
    ],
  ]);
  const linkStyles = twMerge(styleMap.get(depth));
  return (
    <>
      {route.link ? (
        <Link href={route.link} className={linkStyles}>
          {route.name}
        </Link>
      ) : (
        <p className={linkStyles}>{route.name}</p>
      )}
    </>
  );
}
