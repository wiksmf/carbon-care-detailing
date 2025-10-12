import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhoto,
} from "react-icons/hi2";

import Logo from "./Logo";
import ButtonLogout from "./ButtonLogout";

const navLinks = [
  {
    name: "Home",
    href: "/cms",
    icon: <HiOutlineHome className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Certyfikaty",
    href: "/cms/certyfikaty",
    icon: <HiOutlineFolderOpen className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Realizacje",
    href: "/cms/realizacje",
    icon: <HiOutlinePhoto className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Blog",
    href: "/cms/blog",
    icon: <HiOutlineNewspaper className="text-primary-600 h-5 w-5" />,
  },
];

function SideNavigation() {
  const location = useLocation();

  return (
    <aside className="flex h-full flex-col items-center gap-10 border-r border-gray-500/30 pt-5">
      <Logo />

      <ul className="flex h-full w-full flex-col gap-2 self-start">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 transition-colors hover:bg-gray-500/30 ${
                  isActive && location.pathname === link.href
                    ? "bg-gray-500/60"
                    : ""
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}

        <li className="mx-auto mt-auto mb-10">
          <ButtonLogout />
        </li>
      </ul>
    </aside>
  );
}

export default SideNavigation;
