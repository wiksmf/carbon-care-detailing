import { Link } from "react-router-dom";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

type ButtonLinkType = "primary" | "secondary";

interface ButtonLinkProps {
  type?: ButtonLinkType;
  margin?: string;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function ButtonLink({
  children,
  href,
  type = "primary",
  margin,
  onClick,
}: ButtonLinkProps) {
  const buttonBase =
    "text-gray-50 focus transition duration-200 ease-in-out w-fit flex items-center gap-5 rounded-full text-sm leading-relaxed sm:text-base lg:text-lg px-3 py-2";

  const buttonStyles: Record<ButtonLinkType, string> = {
    primary: `${buttonBase} border-2 font-medium border-accent hover:bg-accent hover:text-gray-950 lg:px-7 lg:py-2 ${
      margin ? "mx-auto" : ""
    }`,
    secondary: `${buttonBase} border-2 border-gray-500 font-medium hover:bg-gray-500 lg:px-6 lg:py-2.5`,
  };

  return (
    <Link to={href} className={buttonStyles[type]} onClick={onClick}>
      {children}
      <HiOutlineArrowSmallRight />
    </Link>
  );
}

export default ButtonLink;
