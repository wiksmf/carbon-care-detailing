import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { useOutsideClick } from "../hooks/useOutsideClick";

import NavigationLink from "./NavigationLink";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/oferta", label: "Oferta" },
  { href: "/promocje", label: "Promocje" },
  { href: "#kontakt", label: "Kontakt" },
];

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setShowMenu(false));

  return (
    <nav className="lg:grow">
      <button
        title="Otwórz menu"
        className="focus cursor-pointer p-3 lg:hidden"
        onClick={() => setShowMenu(true)}
        aria-label="Otwórz menu"
      >
        <HiOutlineBars3 color="#FFFFFF" size={36} />
      </button>

      <div
        className={`absolute top-0 right-0 h-screen bg-gray-950/90 backdrop-blur-md lg:static lg:h-fit lg:w-full lg:translate-0 lg:bg-transparent lg:bg-none lg:backdrop-blur-none lg:transition-none ${
          showMenu
            ? "w-full -translate-x-0 delay-0"
            : "w-0 translate-x-full delay-300"
        }`}
      >
        <div ref={ref}>
          <div
            className={`absolute top-0 right-0 h-screen w-0 bg-[linear-gradient(165deg,#b18f4a_10%,#dfbe6a_25%,#947136_45%,#947136_55%,#dfbe6a_75%,#b18f4a_90%)] transition-all duration-300 ease-in-out lg:static lg:hidden lg:h-fit lg:w-full lg:translate-0 lg:bg-none lg:transition-none lg:delay-0 ${
              showMenu
                ? "w-66 translate-x-0 delay-150"
                : "w-0 translate-x-full delay-200"
            }`}
          ></div>
          <div
            className={`fixed top-0 right-0 h-screen w-0 bg-[linear-gradient(82deg,#030712_10%,#0c121e_60%,#030712_90%,#0c121e_100%)] py-4 pl-3 transition-all duration-300 ease-in-out lg:static lg:hidden lg:h-fit lg:w-full lg:translate-0 lg:bg-transparent lg:bg-none lg:pl-0 lg:transition-none lg:delay-0 ${
              showMenu
                ? "flex w-63 translate-x-0 delay-250"
                : "w-0 translate-x-full delay-0"
            }`}
          ></div>
          <div
            className={`fixed top-0 right-0 h-screen w-fit py-4 pl-9 transition-all duration-300 ease-in-out lg:static lg:flex lg:h-fit lg:w-full lg:translate-0 lg:bg-transparent lg:bg-none lg:pl-0 lg:transition-none lg:delay-0 ${
              showMenu
                ? "flex w-63 translate-x-0 delay-250"
                : "w-0 translate-x-full delay-0"
            }`}
          >
            <div
              className={`px-2 lg:flex lg:w-full lg:px-0 ${
                showMenu ? "flex w-61 flex-col gap-4" : "hidden"
              }`}
            >
              <button
                title="Zamknij menu"
                className="focus cursor-pointer self-end lg:hidden"
                onClick={() => setShowMenu(false)}
                aria-label="Zamknij menu"
              >
                <HiOutlineXMark color="#FFFFFF" size={40} />
              </button>

              <ul className="flex flex-col gap-5 lg:grow lg:flex-row lg:justify-end lg:gap-3">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`w-fit ${
                      link.href === "#kontakt" ? "mt-3 lg:mt-0" : ""
                    }`}
                  >
                    <NavigationLink
                      to={link.href}
                      type={link.href === "#kontakt" ? "navCta" : "nav"}
                      onClick={() => setShowMenu(false)}
                    >
                      <span>{link.label}</span>
                    </NavigationLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
