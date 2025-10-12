import { NavLink } from "react-router-dom";

type NavigationLinkType = "nav" | "navCta";

interface NavigationLinkProps {
  children: React.ReactNode;
  to: string;
  type?: NavigationLinkType;
  onClick?: () => void;
}

function NavigationLink({
  children,
  to,
  type = "nav",
  onClick,
}: NavigationLinkProps) {
  const buttonBase =
    "text-gray-50 focus transition duration-200 ease-in-out w-fit flex items-center gap-5 rounded-full text-sm leading-relaxed sm:text-base lg:text-lg px-3 py-2";

  const buttonStyles: Record<NavigationLinkType, string> = {
    nav: `${buttonBase} hover:bg-amber-100/40 lg:px-3 lg:py-2`,
    navCta: `${buttonBase} text-gray-50 hover:text-gray-950 border-2 border-accent main-link font-medium lg:px-3 lg:py-2 hover:bg-accent`,
  };

  if (to === "#kontakt")
    return (
      <a href="#kontakt" className={buttonStyles[type]} onClick={onClick}>
        Kontakt
      </a>
    );

  return (
    <NavLink to={to} className={buttonStyles[type]} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default NavigationLink;
