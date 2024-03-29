import { twMerge } from "tailwind-merge";
import Link from "next/link";
export default function Menu({ routes, onClick: handleClick }) {
  return (
    <ul className="flex flex-col gap-y-[20px]" onClick={handleClick}>
      {routes.map((route, index) => (
        <li key={index}>
          <MenuLink route={route} />
          {route.children && (
            <div className="flex flex-col gap-y-[5px] mt-[10px] ">
              {route.children.map((route, index) => (
                <div key={index}>
                  <MenuLink depth={2} route={route} />
                  {route.children && (
                    <div>
                      {route.children.map((route, index) => (
                        <div key={index}>
                          <MenuLink depth={3} route={route} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
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
    [3, "text-[12px] text-[#eee] hover:text-[#ffffff8a] cursor-pointer"],
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
