import { Link } from "react-router-dom";

import logo from "/images/logo.svg";

function Logo() {
  return (
    <Link to="/" className="focus">
      <img
        src={logo}
        width={110}
        height={55}
        loading="lazy"
        alt="Carbon Care Detailing - Kompleksowa Pielęgnacja Samochodu"
      />
    </Link>
  );
}

export default Logo;
