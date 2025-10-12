import { HiOutlineHeart } from "react-icons/hi2";

function Footer() {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-7 text-center sm:flex-row sm:text-left">
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          &copy; {new Date().getFullYear()} - Carbon Care Detailing
        </p>

        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Made with <HiOutlineHeart className="mx-0.2 inline" /> by{" "}
          <a href="mailto:weronikaflacht@gmail.com" className="font-semibold">
            W.
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
