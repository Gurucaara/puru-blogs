"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, HomeIcon, UserIcon } from "./Icons";
import Link from "next/link";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-x-5">
      <Link href={"https://puru-blogs.vercel.app/"}>
        <button className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-amber-50">
          <HomeIcon />
        </button>
      </Link>
      <Link href={""}>
        <button
          className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-amber-50"
          // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <UserIcon />
        </button>
      </Link>
      <button
        className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-amber-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
