import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const items = [
    { path: "/", icon: "home", label: "Home", activeIcon: "home" },
    {
      path: "/projects",
      icon: "folder_open",
      label: "Projects",
      activeIcon: "folder",
    },
    {
      path: "/about",
      icon: "person_outline",
      label: "About",
      activeIcon: "person",
    },
    {
      path: "/contact",
      icon: "mail_outline",
      label: "Contact",
      activeIcon: "mail",
    },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1f1f1f] border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-around h-14">
        {items.map((item) => {
          const active =
            location.pathname === item.path ||
            (item.path === "/" && location.pathname.startsWith("/project"));
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 py-1"
            >
              <span
                className={`material-icons-outlined text-[22px] transition-colors ${
                  active
                    ? "text-play-green dark:text-emerald-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {active ? item.activeIcon : item.icon}
              </span>
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
