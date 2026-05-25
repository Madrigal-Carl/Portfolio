import { Link, useLocation } from "react-router-dom";
import {
  MdHome,
  MdFolderOpen,
  MdFolder,
  MdPersonOutline,
  MdPerson,
  MdMailOutline,
  MdMail,
} from "react-icons/md";

export default function BottomNav() {
  const location = useLocation();
  const items = [
    {
      path: "/",
      icon: MdHome,
      activeIcon: MdHome,
      label: "Home",
    },
    {
      path: "/projects",
      icon: MdFolderOpen,
      activeIcon: MdFolder,
      label: "Projects",
    },
    {
      path: "/about",
      icon: MdPersonOutline,
      activeIcon: MdPerson,
      label: "About",
    },
    {
      path: "/contact",
      icon: MdMailOutline,
      activeIcon: MdMail,
      label: "Contact",
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1f1f1f] border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-around h-14">
        {items.map((item) => {
          const active = location.pathname === item.path;
          const Icon = active ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 py-1"
            >
              <Icon
                className={`text-[22px] transition-colors ${
                  active
                    ? "text-play-green dark:text-emerald-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              <span
                className={`text-[10px] mt-0.5 transition-colors ${
                  active
                    ? "text-play-green dark:text-emerald-400 font-medium"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
