import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

const pages: { title: string; link: string }[] = [
  { title: "홈", link: "/" },
  { title: "공부기록", link: "/studyRecord" },
  { title: "구룸샵", link: "/shop" },
];

const NavBar = () => {
  return (
    <div className="flex justify-between w-full px-8 py-4 border-b">
      <div className="flex items-center gap-16">
        <p className="text-xl font-bold">LOGO</p>
        <ul className="items-center hidden gap-8 sm:flex">
          {pages.map((page, index) => (
            <li
              key={index}
              className="font-bold text-gray-400 transition duration-300 text-l hover:text-black"
            >
              <Link href={page.link}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/auth/login">
          <Button rounded="full">로그인</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
