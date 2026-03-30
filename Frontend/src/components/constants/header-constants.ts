import { FiHome, FiUser, FiGrid, FiBookOpen, FiSun, FiMoon } from "react-icons/fi";

export const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    icon: FiUser,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FiGrid,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: FiBookOpen,
  },
];

export const HOME_ITEM = {
  href: "/",
  icon: FiHome,
};

export const THEME_TOGGLE_ITEM = {
  lightIcon: FiSun,
  darkIcon: FiMoon,
};

export const TIMEZONE = "Asia/Manila";
