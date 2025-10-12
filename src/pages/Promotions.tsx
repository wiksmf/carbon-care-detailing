import { Link } from "react-router-dom";
import {
  HiArrowSmallRight,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import p1 from "/images/p1.webp";
import p2 from "/images/p2.webp";
import p3 from "/images/p3.webp";
import p4 from "/images/p4.webp";
import p5 from "/images/p5.webp";

function Promotions() {
  return (
    <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
        <strong className="font-medium">
          Akcje promocyjne w Carbon Care Detailing – nagradzamy lojalność i
          polecenia!
        </strong>
      </h1>

      <section aria-labelledby="intro" className="mb-8">
        <h2 id="intro" className="sr-only">
          Wprowadzenie do promocji
        </h2>
        <p className="mb-2 text-sm leading-relaxed sm:text-base lg:text-lg">
          Chcemy podziękować naszym klientom za zaufanie i wsparcie! Dlatego
          wprowadzamy{" "}
          <strong className="font-medium">
            specjalne promocje i programy lojalnościowe
          </strong>
          , dzięki którym możesz zaoszczędzić na kolejnych usługach lub otrzymać
          dodatkowe korzyści.
        </p>

        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Zajrzyj również na naszego{" "}
          <Link
            to="https://www.instagram.com/carboncaredetailing/"
            className="focus text-accent font-medium"
          >
            Instagrama{" "}
            <HiArrowSmallRight className="inline" aria-hidden="true" />
          </Link>{" "}
          i{" "}
          <Link
            to="https://www.facebook.com/share/1B82rC4PTh/"
            className="focus text-accent font-medium"
          >
            Facebooka{" "}
            <HiArrowSmallRight className="inline" aria-hidden="true" />
          </Link>
          , gdzie znajdziesz najnowsze informacje o promocjach i dodatkowych
          niespodziankach dla naszych klientów.
        </p>
      </section>

      <section
        className="flex flex-col gap-5 md:gap-8"
        aria-labelledby="promotions"
      >
        <h2 id="promotions" className="sr-only">
          Lista promocji
        </h2>

        <article
          className="group relative overflow-hidden rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40"
          aria-labelledby="loyalty-program"
        >
          <div className="md relative z-20 rounded-tl-xl rounded-bl-xl bg-[linear-gradient(82deg,#030712_10%,#0c121e_25%,#030712_53%,transparent)] p-5">
            <div className="lg:w-[60%]">
              <h3
                id="loyalty-program"
                className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
              >
                <strong className="font-medium">
                  1. Program lojalnościowy – &quot;Carbon Club&quot;
                </strong>
              </h3>

              <p className="mb-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                Dla stałych klientów stworzyliśmy program lojalnościowy, w
                którym za każdą wykonaną usługę zbierasz punkty!
              </p>

              <ul className="flex list-inside list-disc flex-col gap-4">
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Za każdą wydaną 1 zł otrzymujesz 1 punkt
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Za 2000 punktów – rabat 200 zł na dowolną usługę
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Za 5000 punktów – darmowa aplikacja wosku premium
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Za 10 000 punktów – voucher na korektę lakieru o wartości
                    1000 zł
                  </strong>
                </li>
              </ul>

              <h4 className="txt-gradient my-4 text-base leading-normal font-medium sm:text-lg md:text-xl">
                <strong className="font-medium">
                  Jak sprawdzić swój stan punktów?
                </strong>
              </h4>

              <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                Po każdej wizycie dostajesz informację o aktualnym saldzie –
                wystarczy zapytać podczas kolejnej wizyty!
              </p>
            </div>
          </div>

          <div className="linear absolute top-0 right-0 bottom-0 hidden w-[50%] grayscale transition duration-200 group-hover:grayscale-0 lg:block">
            <img
              src={p1}
              loading="lazy"
              className="h-full w-full object-cover object-bottom"
              alt="Program lojalnościowy Carbon Club"
            />
          </div>
        </article>

        <article
          className="group relative overflow-hidden rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40"
          aria-labelledby="referral-program"
        >
          <div className="md relative top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl bg-[linear-gradient(82deg,#030712_10%,#0c121e_25%,#030712_53%,transparent)] p-5">
            <div className="lg:w-[60%]">
              <h3
                id="referral-program"
                className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
              >
                <strong className="font-medium">
                  2. Polecaj i zyskuj – &quot;Polecasz, nie płacisz&quot;
                </strong>
              </h3>

              <p className="mb-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                Masz znajomego, który potrzebuje detailingu? Poleć nas i odbierz
                bonus!
              </p>

              <ul className="flex list-inside list-disc flex-col gap-4">
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Polecisz 1 osobę – 10% rabatu na Twoją kolejną usługę
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Polecisz 3 osoby – darmowe detailingowe mycie premium
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Polecisz 5 osób – darmowa aplikacja wosku twardego
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Polecisz 10 osób – voucher o wartości 1000 zł do
                    wykorzystania na dowolną usługę!
                  </strong>
                </li>
              </ul>

              <h4 className="txt-gradient my-4 text-base leading-normal font-medium sm:text-lg md:text-xl">
                <strong className="font-medium">Jak to działa?</strong>
              </h4>

              <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                Twój znajomy musi podać Twoje imię i nazwisko przy rezerwacji, a
                my dodamy Ci rabat lub nagrodę.
              </p>
            </div>
          </div>

          <div className="linear absolute top-0 right-0 bottom-0 hidden w-[50%] grayscale transition duration-200 group-hover:grayscale-0 lg:block">
            <img
              src={p2}
              loading="lazy"
              className="h-full w-full object-cover object-bottom"
              alt="Polecaj i zyskuj – Polecasz, nie płacisz"
            />
          </div>
        </article>

        <article
          className="group relative overflow-hidden rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40"
          aria-labelledby="birthday-gift"
        >
          <div className="relative top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl bg-[linear-gradient(82deg,#030712_10%,#0c121e_25%,#030712_53%,transparent)] p-5">
            <div className="lg:w-[60%]">
              <h3
                id="birthday-gift"
                className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
              >
                <strong className="font-medium">
                  3. Urodzinowy prezent dla Twojego auta
                </strong>
              </h3>

              <p className="mb-2 text-sm leading-relaxed sm:text-base lg:text-lg">
                Masz urodziny? Świętujemy razem z Tobą! W dniu Twoich urodzin
                lub w tygodniu ich trwania otrzymujesz:
              </p>

              <ul className="flex list-inside list-disc flex-col gap-2">
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    50% rabatu na detailingowe mycie auta - 30% rabatu na
                    woskowanie
                  </strong>
                </li>
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Darmowy zapach samochodowy klasy premium
                  </strong>
                </li>
              </ul>

              <h4 className="txt-gradient my-4 text-base leading-normal font-medium sm:text-lg md:text-xl">
                <strong className="font-medium">Jak skorzystać?</strong>
              </h4>

              <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                Wystarczy, że pokażesz nam dowód osobisty lub wpiszesz się do
                naszej bazy klientów, a my zajmiemy się resztą!
              </p>
            </div>
          </div>

          <div className="linear absolute top-0 right-0 bottom-0 hidden w-[50%] grayscale transition duration-200 group-hover:grayscale-0 lg:block">
            <img
              src={p3}
              loading="lazy"
              className="h-full w-full object-cover object-center"
              alt="Urodzinowy prezent dla Twojego auta"
            />
          </div>
        </article>

        <article
          className="group relative overflow-hidden rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40"
          aria-labelledby="detailing-subscription"
        >
          <div className="relative top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl bg-[linear-gradient(82deg,#030712_10%,#0c121e_25%,#030712_53%,transparent)] p-5">
            <div className="lg:w-[60%]">
              <h3
                id="detailing-subscription"
                className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
              >
                <strong className="font-medium">
                  4. &quot;Detailingowy abonament&quot; – zadbaj o auto przez
                  cały rok
                </strong>
              </h3>

              <p className="mb-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                Twoje auto zasługuje na regularną pielęgnację! Wprowadziliśmy
                abonament detailingowy, który pozwala Ci zaoszczędzić i mieć
                zawsze zadbane auto.
              </p>

              <ul className="flex flex-col gap-4">
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Pakiet Basic (99 zł/mies.)
                  </strong>

                  <ul className="flex list-inside list-disc flex-col gap-2">
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      1 x detailingowe mycie w miesiącu
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      10% rabatu na wszystkie usługi
                    </li>
                  </ul>
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Pakiet Premium (199 zł/mies.)
                  </strong>

                  <ul className="flex list-inside list-disc flex-col gap-2">
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      2 x detailingowe mycie w miesiącu
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      15% rabatu na wszystkie usługi
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      Co pół roku aplikacja wosku premium
                    </li>
                  </ul>
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Pakiet VIP (399 zł/mies.)
                  </strong>

                  <ul className="flex list-inside list-disc flex-col gap-2">
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      4 x detailingowe mycie w miesiącu
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      20% rabatu na wszystkie usługi
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      2x w roku aplikacja powłoki hydrofobowej
                    </li>
                    <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                      Raz w roku jednoetapowa korekta lakieru
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="txt-gradient my-4 text-base leading-normal font-medium sm:text-lg md:text-xl">
                <strong className="font-medium">
                  Jak dołączyć do abonamentu?
                </strong>
              </h4>

              <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                Wystarczy podpisać umowę na 6 lub 12 miesięcy – więcej
                szczegółów w studiu!
              </p>
            </div>
          </div>

          <div className="linear absolute top-0 right-0 bottom-0 hidden w-[50%] grayscale transition duration-200 group-hover:grayscale-0 lg:block">
            <img
              src={p4}
              loading="lazy"
              className="h-full w-full object-cover object-center"
              alt="Detailingowy abonament – zadbaj o auto przez cały rok"
            />
          </div>
        </article>

        <article
          className="group relative overflow-hidden rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40"
          aria-labelledby="seasonal-promotions"
        >
          <div className="relative top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl bg-[linear-gradient(82deg,#030712_10%,#0c121e_25%,#030712_53%,transparent)] p-5">
            <div className="lg:w-[60%]">
              <h3
                id="seasonal-promotions"
                className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
              >
                <strong className="font-medium">
                  5. Sezonowe promocje – śledź nas na Facebooku i Instagramie!
                </strong>
              </h3>

              <p className="mb-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                Co sezon organizujemy specjalne promocje, więc warto nas
                obserwować!
              </p>

              <ul className="flex list-inside list-disc flex-col gap-4">
                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Wiosenne odświeżenie lakieru
                  </strong>{" "}
                  – rabaty na korektę lakieru i woskowanie
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium"> Letnia ochrona</strong> –
                  promocja na powłoki ceramiczne i folię PPF
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Jesienne zabezpieczenie
                  </strong>{" "}
                  – specjalne pakiety na detailingowe mycie i woski na zimę
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium"> Zimowa ochrona</strong> –
                  zniżki na zabezpieczenie podwozia i wnętrza przed solą drogową
                </li>

                <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong className="font-medium">
                    Obserwuj nas na{" "}
                    <Link
                      to="https://www.facebook.com/share/1B82rC4PTh/"
                      className="focus text-accent font-medium"
                    >
                      Facebooku{" "}
                      <HiArrowSmallRight
                        className="inline"
                        aria-hidden="true"
                      />
                    </Link>{" "}
                    i{" "}
                    <Link
                      to="https://www.instagram.com/carboncaredetailing/"
                      className="focus text-accent font-medium"
                    >
                      Instagramie{" "}
                      <HiArrowSmallRight
                        className="inline"
                        aria-hidden="true"
                      />
                    </Link>
                    , żeby nie przegapić promocji!
                  </strong>
                </li>
              </ul>

              <h4 className="txt-gradient my-4 text-base leading-normal font-medium sm:text-lg md:text-xl">
                <strong className="font-medium">
                  Jak dołączyć do abonamentu?
                </strong>
              </h4>

              <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                Wystarczy podpisać umowę na 6 lub 12 miesięcy – więcej
                szczegółów w studiu!
              </p>
            </div>
          </div>

          <div className="linear absolute top-0 right-0 bottom-0 hidden w-[50%] grayscale transition duration-200 group-hover:grayscale-0 lg:block">
            <img
              src={p5}
              loading="lazy"
              className="h-full w-full object-cover object-center"
              alt="Sezonowe promocje – śledź nas na Facebooku i Instagramie"
            />
          </div>
        </article>

        <article className="group relative mx-auto w-fit overflow-hidden rounded-2xl border-4 border-gray-500/30 p-5 text-center shadow-xs shadow-gray-800/40">
          <h3
            id="contact-info"
            className="txt-gradient mb-6 text-lg sm:text-xl md:text-2xl"
          >
            <strong className="font-medium">
              Chcesz skorzystać z promocji?
            </strong>
          </h3>

          <ul className="flex flex-col items-center">
            <li className="mb-4 flex flex-col items-center gap-2 text-sm leading-relaxed sm:flex-row sm:text-base md:text-lg">
              <span className="flex items-center gap-2">
                <HiOutlineMapPin size={24} aria-hidden="true" /> Odwiedź
                nas:{" "}
              </span>
              <strong className="font-medium text-balance">
                Carbon Care Detailing – Olkusz, ul. Jasna 80
              </strong>
            </li>

            <li className="mb-4 flex flex-col items-center gap-2 text-sm leading-relaxed sm:flex-row sm:text-base md:text-lg">
              <span className="flex items-center gap-2">
                <HiOutlinePhone size={24} aria-hidden="true" /> Zadzwoń:{" "}
              </span>
              <strong className="font-medium">
                <a href="tel:+48666699955" className="focus">
                  +48 666 699 955
                </a>
              </strong>
            </li>

            <li className="mb-4 flex flex-col items-center gap-2 text-sm leading-relaxed sm:flex-row sm:text-base md:text-lg">
              <span className="flex items-center gap-2">
                <HiOutlineEnvelope aria-hidden="true" size={24} /> Napisz:{" "}
              </span>
              <strong className="font-medium">
                <a href="mailto:kontakt@carboncare.pl" className="focus">
                  kontakt@carboncare.pl
                </a>
              </strong>
            </li>

            <li className="mb-4 flex items-center gap-2 text-sm leading-relaxed sm:text-base lg:text-lg">
              <strong className="font-medium">
                Zadbaj o swoje auto i ciesz się najlepszym detailingiem w
                mieście!
              </strong>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Promotions;
