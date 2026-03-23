import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";

const LazyMap = lazy(() => import("./Map"));

function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (shouldLoadMap) return;
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="mx-auto mt-20 max-w-7xl px-5 lg:mt-25"
    >
      <h2 className="txt-gradient mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Masz pytania? Umów się na darmową konsultację, gdzie omówimy zakres
          usług przy dobrej kawie!
        </strong>
      </h2>

      <div className="bg-opacity-80 relative overflow-hidden">
        <ul className="absolute right-3 bottom-2 z-10 flex flex-col gap-2 rounded-2xl bg-gray-950/80 p-5 shadow-lg backdrop-blur-lg backdrop-filter sm:top-2 sm:right-2 sm:bottom-[unset] sm:gap-5">
          <li className="flex items-center gap-3">
            <span>
              <HiOutlineMapPin size={24} />
            </span>

            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              <strong className="font-medium">Carbon Care Detailing</strong>
              <span className="block">Olkusz, ul. Jasna 80</span>
            </p>
          </li>

          <li className="flex items-center gap-3">
            <span>
              <HiOutlinePhone size={24} />
            </span>

            <a
              href={"tel:+48666699955"}
              className="focus text-sm leading-relaxed sm:text-base lg:text-lg"
            >
              <strong className="font-medium">+48 666 699 955</strong>
            </a>
          </li>

          <li className="flex items-center gap-3">
            <span>
              <HiOutlineEnvelope size={24} />
            </span>

            <a
              href={"mailto:kontakt@carboncare.pl"}
              className="focus text-sm leading-relaxed sm:text-base lg:text-lg"
            >
              <strong className="font-medium">kontakt@carboncare.pl</strong>
            </a>
          </li>

          <li className="flex items-center gap-3">
            <span>
              <FaInstagram size={24} />
            </span>

            <a
              href={"https://www.instagram.com/carboncaredetailing/"}
              rel="external nofollow"
              target="_blank"
              title="Instagram Carbon Care Detailing"
              className="focus text-sm leading-relaxed sm:text-base lg:text-lg"
            >
              <strong className="font-medium">Instagram</strong>
            </a>
          </li>

          <li className="flex items-center gap-3">
            <span>
              <BiLogoFacebook size={24} />
            </span>

            <a
              href={"https://www.facebook.com/share/1B82rC4PTh/"}
              rel="external nofollow"
              target="_blank"
              title="Facebook Carbon Care Detailing"
              className="focus text-sm leading-relaxed sm:text-base lg:text-lg"
            >
              <strong className="font-medium">Facebook</strong>
            </a>
          </li>
        </ul>

        {shouldLoadMap ? (
          <Suspense
            fallback={
              <div
                className="z-1 h-[400px] w-full animate-pulse rounded-2xl bg-gray-900/80"
                aria-hidden="true"
              />
            }
          >
            <LazyMap />
          </Suspense>
        ) : (
          <div
            className="z-1 h-[400px] w-full rounded-2xl bg-gray-900/80"
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
}

export default Contact;
