import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { MdPlayArrow, MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#1f1f1f]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center h-14 md:h-[60px] px-4 sm:px-6 gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 play-green-grad rounded-lg flex items-center justify-center">
            <MdPlayArrow className="text-white text-[18px]" />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            PlayDev
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "nav-link-active text-play-green dark:text-emerald-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#3c3c3c] transition-colors flex items-center"
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <MdLightMode className="text-gray-600 dark:text-gray-400 text-[22px]" />
            ) : (
              <MdDarkMode className="text-gray-600 dark:text-gray-400 text-[22px]" />
            )}
          </button>
          <Link
            to="/about"
            className="hidden md:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#3c3c3c] transition-colors"
          >
            <div className="w-8 h-8 rounded-full play-green-grad flex items-center justify-center">
              <span className="text-white text-sm font-medium">C</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
