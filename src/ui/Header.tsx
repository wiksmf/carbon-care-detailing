import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed top-0 z-30 w-full border-gray-800/50 bg-gray-950/30 backdrop-blur-md backdrop-filter before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-gray-950 before:opacity-85">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
