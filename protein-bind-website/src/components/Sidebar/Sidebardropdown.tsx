import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SidebarDropdown = ({ items }: any) => {
  const pathName = usePathname();
  return (
    <>
      <ul
        className={`mb-5.5 mt-4 flex flex-col gap-2.5 pl-6 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathName === items.route ? "text-white" : ""}`}
      >
        {items.map((item: any, index: number) => {
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 `}
            >
              {item.label}
            </Link>
          </li>;
        })}
      </ul>
    </>
  );
};
export default SidebarDropdown;
