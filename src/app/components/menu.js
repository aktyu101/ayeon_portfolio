import { twMerge } from "tailwind-merge";
import Link from "next/link";
export default function Menu({ routes }) {
  return (
    <ul className="flex flex-col gap-y-[20px]">
      {routes.map((route, index) => (
        <li key={index}>
          <MenuLink route={route} />
          {route.children && (
            <div className="flex flex-col gap-y-[5px] mt-[10px] ">
              {route.children.map((route) => (
                <div key={index}>
                  <div>
                    <MenuLink depth={2} route={route} />
                    {route.children && (
                      <div>
                        {route.children.map((route) => (
                          <div key={index}>
                            <MenuLink depth={3} route={route} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
    [1, "text-[22px] font-medium text-white "],
    // `[&:nth-child(odd)]:bg-gray-400`
    [2, "text-[16px] font-extraLight text-white"],
    [3, "text-[12px] text-[#eee]"],
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
