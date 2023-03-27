import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/common/Button";

interface Props {
  path?: string;
}

const pages: { title: string; link: string }[] = [
  { title: "home", link: "/" },
  { title: "aPage", link: "/aPage" },
  { title: "bPage", link: "/bPage" },
];

const NavBar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { path } = props;

  const pageElements = pages.map((page, index) => (
    <li
      key={index}
      className={`font-bold transition duration-300 text-G-06 text-l hover:text-G-09 ${
        path && path.includes(page.title) ? "text-G-09" : ""
      }`}
    >
      <Link href={page.link}>{page.title}</Link>
    </li>
  ));

  return (
    <div className="flex justify-between w-full px-4 py-4 border-b border-G-04">
      <div className="flex items-center gap-4">
        <button
          className="relative w-10 h-10 bg-white border-none rounded-lg hover:bg-G-02 min-h-10 burger-menu sm:hidden"
          onClick={toggleMenu}
        >
          <span
            className={classNames("top-[14px]", {
              open: menuOpen,
            })}
          ></span>
          <span
            className={classNames("top-[20px]", {
              open: menuOpen,
            })}
          ></span>
          <span
            className={classNames("top-[26px]", {
              open: menuOpen,
            })}
          ></span>
        </button>
        <p className="mr-4 text-xl font-bold">LOGO</p>
        <ul className="items-center hidden gap-8 sm:flex">{pageElements}</ul>
        <ul
          className={classNames(
            "sm:hidden gap-8 flex flex-col absolute top-[73px] w-full bg-white h-full items-center justify-center -left-full transition-all duration-[1000ms]",
            {
              "!left-0": menuOpen,
            }
          )}
        >
          {pageElements}
        </ul>
      </div>
      <div>
        <Link href="/auth/login">
          <Button classes="rounded-full">로그인</Button>
        </Link>
      </div>
      <style jsx>{`
        .burger-menu > span {
          @apply w-4 h-0.5 bg-G-06 rounded absolute left-3 transition duration-[400ms];
        }
        .open:nth-of-type(1) {
          @apply translate-y-[6px] -rotate-45;
        }
        .open:nth-of-type(2) {
          @apply opacity-0;
        }
        .open:nth-of-type(3) {
          @apply -translate-y-[6px] rotate-45;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
