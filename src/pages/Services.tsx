import { Link } from "react-router-dom";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import { HiArrowSmallRight } from "react-icons/hi2";

function Services() {
  return (
    <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
        <strong className="font-medium">Oferta usług samochodowych</strong>
      </h1>

      <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
        Zapoznaj się z naszym cennikiem i sprawdź, ile kosztuje profesjonalna
        pielęgnacja Twojego samochodu. Oferujemy usługi dla aut każdej klasy –
        od kompaktów, przez samochody premium, aż po wyjątkowe klasyki i
        oldtimery. Nasze ceny odzwierciedlają najwyższą jakość pracy,
        indywidualne podejście i dbałość o każdy detal. Dzięki przejrzystej
        ofercie wiesz dokładnie, czego możesz się spodziewać, a my gwarantujemy,
        że Twój samochód otrzyma kompleksową opiekę na najwyższym poziomie.
      </p>

      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Pakiety</strong>
      </h2>

      {/* DETAILING */}
      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-[33%_1fr_1fr_1fr]">
          <div className="md:contents">
            <div className="relative hidden flex-col justify-end md:block"></div>

            {/* Mycie detailingowe */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Mycie detailingowe
                </span>
              </div>
            </div>
            {/* Mycie nadkoli */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Mycie nadkoli
                </span>
              </div>
            </div>
            {/* Oczyszczanie lakieru z osadów */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-4"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Oczyszczanie lakieru z osadów
                </span>
              </div>
            </div>
            {/* Korekta lakieru (1 etap) */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-5"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Korekta lakieru (1 etap)
                </span>
              </div>
            </div>
            {/* Korekta lakieru (2 etapy) */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-7"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Korekta lakieru (2 etapy)
                </span>
              </div>
            </div>
            {/* Pełne szlifowanie lakieru */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-8"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Pełne szlifowanie lakieru
                </span>
              </div>
            </div>
            {/* Ochrona lakieru ** */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-9"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[77px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Ochrona lakieru **
                </span>
              </div>
            </div>
            {/* Detailing wnętrza */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-10"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Detailing wnętrza
                </span>
              </div>
            </div>
            {/* Czyszczenie i impregnacja skór */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-11"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie i impregnacja skór
                </span>
              </div>
            </div>
            {/* Detailing felg i opon */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-12"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Detailing felg i opon
                </span>
              </div>
            </div>
            {/* Aplikacja niewidzialnej wycieraczki */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-13"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Aplikacja niewidzialnej wycieraczki
                </span>
              </div>
            </div>
            {/* Ozonowanie wnętrza */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-14"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Ozonowanie wnętrza
                </span>
              </div>
            </div>
            {/* Impregnacja plastików zewnętrznych */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-15"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Impregnacja plastików zewnętrznych
                </span>
              </div>
            </div>
            {/* Czas realizacji */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-16"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czas realizacji
                </span>
              </div>
            </div>
          </div>
          {/* End: Packages desktop */}

          {/* Prestige table */}
          <div className="mb-5 rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="relative flex flex-col items-center justify-center">
              <div className="my-5 grow">
                <div className="txt-gradient mb-1.5 text-xl font-medium">
                  Prestige
                </div>
                <div className="">
                  <span className="text-lg font-medium">od</span>
                  <span className="txt-gradient mr-1 ml-2 text-2xl font-semibold sm:text-2xl md:text-3xl">
                    1800
                  </span>
                  <span className="txt-gradient text-lg font-medium">zł</span>
                  <span className="ml-1 text-lg font-medium">*</span>
                </div>
              </div>
            </div>

            {/* Mycie detailingowe */}
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie detailingowe
                </span>
              </div>
            </div>
            {/* Mycie nadkoli */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie nadkoli
                </span>
              </div>
            </div>
            {/* Oczyszczanie lakieru z osadów */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Oczyszczanie lakieru z osadów
                </span>
              </div>
            </div>
            {/* Korekta lakieru (1 etap) */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (1 etap)
                </span>
              </div>
            </div>
            {/* Korekta lakieru (2 etapy) */}
            <div className="flex flex-col justify-center md:order-7">
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 max-md:sr-only md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineX className="h-[22px] w-auto text-gray-400 md:h-[32px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (2 etapy)
                </span>
              </div>
            </div>
            {/* Pełne szlifowanie lakieru */}
            <div className="flex flex-col justify-center md:order-8">
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 max-md:sr-only md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineX className="h-[22px] w-auto text-gray-400 md:h-[32px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Pełne szlifowanie lakieru
                </span>
              </div>
            </div>
            {/* Ochrona lakieru ***/}
            <div className="flex flex-col justify-center md:order-9">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[77px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:hidden" />
                <span>
                  <span className="block text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                    Ochrona lakieru **
                  </span>
                  <span className="text-xs text-gray-300 md:block md:text-center lg:text-sm lg:leading-relaxed xl:text-base">
                    QD, wosk, 1, 3 lub 5 letnia powłoka Cleante/Fireball
                  </span>
                </span>
              </div>
            </div>
            {/* Detailing wnętrza */}
            <div className="flex flex-col justify-center md:order-10">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing wnętrza
                </span>
              </div>
            </div>
            {/* Czyszczenie i impregnacja skór */}
            <div className="flex flex-col justify-center md:order-11">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czyszczenie i impregnacja skór
                </span>
              </div>
            </div>
            {/* Detailing felg i opon */}
            <div className="flex flex-col justify-center md:order-12">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing felg i opon
                </span>
              </div>
            </div>
            {/* Aplikacja niewidzialnej wycieraczki */}
            <div className="flex flex-col justify-center md:order-13">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Aplikacja niewidzialnej wycieraczki
                </span>
              </div>
            </div>
            {/* Ozonowanie wnętrza */}
            <div className="flex flex-col justify-center md:order-14">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Ozonowanie wnętrza
                </span>
              </div>
            </div>
            {/* Impregnacja plastików zewnętrznych */}
            <div className="flex flex-col justify-center md:order-15">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Impregnacja plastików zewnętrznych
                </span>
              </div>
            </div>
            {/* Czas realizacji */}
            <div className="flex flex-col justify-center md:order-16">
              <div className="flex h-full items-center gap-2 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czas realizacji:
                </span>
                <span className="text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  2 - 3 dni
                </span>
              </div>
            </div>
          </div>
          {/* End: Prestige */}

          {/* Exclusive */}
          <div className="dark mb-5 rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="relative flex flex-col items-center justify-center">
              <div className="my-5 grow">
                <div className="txt-gradient mb-1.5 text-xl font-medium">
                  Exclusive
                </div>
                <div className="">
                  <span className="text-lg font-medium">od</span>
                  <span className="txt-gradient mr-1 ml-2 text-2xl font-semibold sm:text-2xl md:text-3xl">
                    2900
                  </span>
                  <span className="txt-gradient text-lg font-medium">zł</span>
                  <span className="ml-1 text-lg font-medium">*</span>
                </div>
              </div>
            </div>

            {/* Mycie detailingowe */}
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie detailingowe
                </span>
              </div>
            </div>
            {/* Mycie nadkoli */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie nadkoli
                </span>
              </div>
            </div>
            {/* Oczyszczanie lakieru z osadów */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Oczyszczanie lakieru z osadów
                </span>
              </div>
            </div>
            {/* Korekta lakieru (1 etap) */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (1 etap)
                </span>
              </div>
            </div>
            {/* Korekta lakieru (2 etapy) */}
            <div className="flex flex-col justify-center md:order-7">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (2 etapy)
                </span>
              </div>
            </div>
            {/* Pełne szlifowanie lakieru */}
            <div className="flex flex-col justify-center md:order-8">
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 max-md:sr-only md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineX className="h-[22px] w-auto text-gray-400 md:h-[32px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Pełne szlifowanie lakieru
                </span>
              </div>
            </div>
            {/* Ochrona lakieru ***/}
            <div className="flex flex-col justify-center md:order-9">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[77px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:hidden" />
                <span>
                  <span className="block text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                    Ochrona lakieru **
                  </span>
                  <span className="text-xs text-gray-300 md:block md:text-center lg:text-sm lg:leading-relaxed xl:text-base">
                    1, 3 lub 5 letnia powłoka Cleante/Fireball
                  </span>
                </span>
              </div>
            </div>
            {/* Detailing wnętrza */}
            <div className="flex flex-col justify-center md:order-10">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing wnętrza
                </span>
              </div>
            </div>
            {/* Czyszczenie i impregnacja skór */}
            <div className="flex flex-col justify-center md:order-11">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czyszczenie i impregnacja skór
                </span>
              </div>
            </div>
            {/* Detailing felg i opon */}
            <div className="flex flex-col justify-center md:order-12">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing felg i opon
                </span>
              </div>
            </div>
            {/* Aplikacja niewidzialnej wycieraczki */}
            <div className="flex flex-col justify-center md:order-13">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Aplikacja niewidzialnej wycieraczki
                </span>
              </div>
            </div>
            {/* Ozonowanie wnętrza */}
            <div className="flex flex-col justify-center md:order-14">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Ozonowanie wnętrza
                </span>
              </div>
            </div>
            {/* Impregnacja plastików zewnętrznych */}
            <div className="flex flex-col justify-center md:order-15">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Impregnacja plastików zewnętrznych
                </span>
              </div>
            </div>
            {/* Czas realizacji */}
            <div className="flex flex-col justify-center md:order-16">
              <div className="flex h-full items-center gap-2 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czas realizacji:
                </span>
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  3 - 4 dni
                </span>
              </div>
            </div>
          </div>
          {/* End: Exclusive */}

          {/* Show Car */}
          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="relative flex flex-col items-center justify-center">
              <div className="my-5 grow">
                <div className="txt-gradient mb-1.5 text-xl font-medium">
                  Show Car
                </div>
                <div className="">
                  <span className="text-lg font-medium">od</span>
                  <span className="txt-gradient mr-1 ml-2 text-2xl font-semibold sm:text-2xl md:text-3xl">
                    4900
                  </span>
                  <span className="txt-gradient text-lg font-medium">zł</span>
                  <span className="ml-1 text-lg font-medium">*</span>
                </div>
              </div>
            </div>

            {/* Mycie detailingowe */}
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie detailingowe
                </span>
              </div>
            </div>
            {/* Mycie nadkoli */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Mycie nadkoli
                </span>
              </div>
            </div>
            {/* Oczyszczanie lakieru z osadów */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Oczyszczanie lakieru z osadów
                </span>
              </div>
            </div>
            {/* Korekta lakieru (1 etap) */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 max-md:sr-only md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineX className="h-[22px] w-auto text-gray-400 md:h-[32px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (1 etap)
                </span>
              </div>
            </div>
            {/* Korekta lakieru (2 etapy) */}
            <div className="flex flex-col justify-center md:order-7">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Korekta lakieru (2 etapy)
                </span>
              </div>
            </div>
            {/* Pełne szlifowanie lakieru */}
            <div className="flex flex-col justify-center md:order-8">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Pełne szlifowanie lakieru
                </span>
              </div>
            </div>
            {/* Ochrona lakieru ***/}
            <div className="flex flex-col justify-center md:order-9">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[77px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:hidden" />
                <span>
                  <span className="block text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                    Ochrona lakieru **
                  </span>
                  <span className="text-xs text-gray-300 md:block md:text-center lg:text-sm lg:leading-relaxed xl:text-base">
                    3-5 letnia powłoka Cleante/Fireball
                  </span>
                </span>
              </div>
            </div>
            {/* Detailing wnętrza */}
            <div className="flex flex-col justify-center md:order-10">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing wnętrza
                </span>
              </div>
            </div>
            {/* Czyszczenie i impregnacja skór */}
            <div className="flex flex-col justify-center md:order-11">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czyszczenie i impregnacja skór
                </span>
              </div>
            </div>
            {/* Detailing felg i opon */}
            <div className="flex flex-col justify-center md:order-12">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Detailing felg i opon
                </span>
              </div>
            </div>
            {/* Aplikacja niewidzialnej wycieraczki */}
            <div className="flex flex-col justify-center md:order-13">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Aplikacja niewidzialnej wycieraczki
                </span>
              </div>
            </div>
            {/* Ozonowanie wnętrza */}
            <div className="flex flex-col justify-center md:order-14">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Ozonowanie wnętrza
                </span>
              </div>
            </div>
            {/* Impregnacja plastików zewnętrznych */}
            <div className="flex flex-col justify-center md:order-15">
              <div className="flex h-full items-center gap-2 border-b border-gray-500/30 px-3 py-2 md:min-h-[75px] md:justify-center md:px-5 md:py-3">
                <HiOutlineCheck className="text-accent h-[22px] w-auto md:h-[30px]" />
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Impregnacja plastików zewnętrznych
                </span>
              </div>
            </div>
            {/* Czas realizacji */}
            <div className="flex flex-col justify-center md:order-16">
              <div className="flex h-full items-center gap-2 px-3 py-2 md:min-h-[60px] md:justify-center md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base md:sr-only lg:text-lg">
                  Czas realizacji:
                </span>
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  4 - 7 dni
                </span>
              </div>
            </div>
          </div>
          {/* End: Show Car */}
        </div>
      </div>

      {/* Folie PPF */}
      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Folie PPF</strong>
      </h2>

      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-2">
          <div className="md:contents">
            {/* Full front */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Full front
                </span>
              </div>
            </div>
            {/* Full body */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Full body
                </span>
              </div>
            </div>
            {/* Reflektory */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-4"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Reflektory
                </span>
              </div>
            </div>
            {/* Lampy tył */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-5"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Lampy tył
                </span>
              </div>
            </div>
            {/* Lusterka */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-6"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Lusterka
                </span>
              </div>
            </div>
            {/* Parapet zderzaka */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-7"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Parapet zderzaka
                </span>
              </div>
            </div>
            {/* Pod klamkami */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-8"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Pod klamkami
                </span>
              </div>
            </div>
            {/* Słupki piano black */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-9"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Słupki piano black
                </span>
              </div>
            </div>
            {/* Ranty drzwi */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-10"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Ranty drzwi
                </span>
              </div>
            </div>
            {/* Zabezpieczenie progów */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-11"
              aria-hidden="true"
            >
              <div className="flex items-center px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Zabezpieczenie progów
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Full front
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 5 000 zł
                </span>
              </div>
            </div>
            {/* Full body */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Full body
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 12 000 zł
                </span>
              </div>
            </div>
            {/* Reflektory */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Reflektory
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 300 zł do 500 zł / kpl
                </span>
              </div>
            </div>
            {/* Lampy tył */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Lampy tył
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 300 zł do 700 zł / kpl
                </span>
              </div>
            </div>
            {/* Lusterka */}
            <div className="flex flex-col justify-center md:order-6">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Lusterka
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 350 zł do 450 zł / kpl
                </span>
              </div>
            </div>
            {/* Parapet zderzaka */}
            <div className="flex flex-col justify-center md:order-7">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Parapet zderzaka
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 200 zł do 350 zł
                </span>
              </div>
            </div>
            {/* Pod klamkami */}
            <div className="flex flex-col justify-center md:order-8">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Pod klamkami
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 200 zł / kpl
                </span>
              </div>
            </div>
            {/* Słupki piano black */}
            <div className="flex flex-col justify-center md:order-9">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Słupki piano black
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 300 zł do 600 zł / kpl
                </span>
              </div>
            </div>
            {/* Ranty drzwi */}
            <div className="flex flex-col justify-center md:order-10">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Ranty drzwi
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  100 zł / kpl
                </span>
              </div>
            </div>
            {/* Zabezpieczenie progów */}
            <div className="flex flex-col justify-center md:order-11">
              <div className="flex h-full flex-wrap items-center gap-1 py-2 md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Zabezpieczenie progów
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 80 – 100 zł / szt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End: Folie PPF */}

      {/* Folie PPF Kolorowy / "Mrożenie lakieru" */}
      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Folie PPF Kolorowy / &quot;Mrożenie lakieru&quot;
        </strong>
      </h2>

      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-2">
          <div className="md:contents">
            {/* Mrożenie */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Mrożenie
                </span>
              </div>
            </div>
            {/* Kolor */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Kolor
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Mrożenie
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 15 000 zł
                </span>
              </div>
            </div>
            {/* Kolor */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full flex-wrap items-center gap-1 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Kolor
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 17 000 zł
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End: Folie PPF Kolorowy / "Mrożenie lakieru" */}

      {/* Folie winylowe */}
      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Folie winylowe</strong>
      </h2>

      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-2">
          <div className="md:contents">
            {/* Kolor / Mat/ Satyna */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Kolor / Mat/ Satyna
                </span>
              </div>
            </div>
            {/* Dechroming */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Dechroming
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Kolor / Mat / Satyna
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 14 000 zł
                </span>
              </div>
            </div>
            {/* Dechroming */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full flex-wrap items-center gap-1 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  Dechroming
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 800 zł
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End: Folie winylowe */}

      {/* Powłoki Elastomerowe */}
      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Powłoki Elastomerowe</strong>
      </h2>

      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-2">
          <div className="md:contents">
            {/* Wariant standard */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong>Wariant standard</strong>
                  <br />
                  Jednowarstwowy elastomer. Okres ochrony lakieru wg. producenta
                  to <strong>5 lat</strong>, PPF/Vinyl <strong>2 lata</strong>,
                  plastiki <strong>18 miesięcy</strong>, felgi{" "}
                  <strong>2 lata</strong>.
                </span>
              </div>
            </div>
            {/* Wariant Premium */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong>Wariant Premium</strong>
                  <br />
                  Dwie warstwy elastomeru, kombinacja ta zapewnia wyjątkowo
                  efektywne domywanie się samochodu nawet na myjni bezdotykowej
                  (wykorzystując wyłącznie pre wash). Okres ochrony lakieru wg.
                  producenta <strong>5 lat</strong>, dedykowany dla klientów,
                  którym zależy przede wszystkim na łatwości pielęgnacji oraz
                  wyeliminowaniu problemu ze zbijaniem owadów w okresie letnim.
                </span>
              </div>
            </div>
            {/* Wariant Premium Plus */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-4"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong>Wariant Premium Plus</strong>
                  <br />
                  Bardzo efektywna kombinacja zapewniająca najwyższą z możliwych
                  w Titan Coatings odporność chemiczną pH 1-14, łatwość
                  pielęgnacji, głęboki połysk i wyjątkowo ograniczone
                  przywieranie osadu mineralnego lub owadów. Okres ochrony
                  lakieru wg. producenta <strong>6 lat</strong>.
                </span>
              </div>
            </div>
            {/* Wariant Ultimate */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-5"
              aria-hidden="true"
            >
              <div className="flex items-center px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  <strong>Wariant Ultimate</strong>
                  <br />
                  Najbardziej rozbudowana kombinacja, która oprócz korzyści
                  wymienionych w powyższym punkcie, posiada również zdolności do
                  samo poziomowania oraz samoleczenia. Okres ochrony lakieru wg.
                  producenta <strong>7 lat</strong>. Istnieje możliwość
                  replikacji drugiego top coatu raz do roku na przykład w
                  okresie wiosny, w celu wzmocnienia efektu łatwego usuwania
                  owadów i zanieczyszczeń.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  <strong>Wariant standard</strong>
                  <br />
                  Jednowarstwowy elastomer. Okres ochrony lakieru wg. producenta
                  to <strong>5 lat</strong>, PPF/Vinyl <strong>2 lata</strong>,
                  plastiki <strong>18 miesięcy</strong>, felgi{" "}
                  <strong>2 lata</strong>.
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  1 999 - 2 499 PLN netto
                </span>
              </div>
            </div>
            {/* Wariant Premium */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  <strong>Wariant Premium</strong>
                  <br />
                  Dwie warstwy elastomeru, kombinacja ta zapewnia wyjątkowo
                  efektywne domywanie się samochodu nawet na myjni bezdotykowej
                  (wykorzystując wyłącznie pre wash). Okres ochrony lakieru wg.
                  producenta <strong>5 lat</strong>, dedykowany dla klientów,
                  którym zależy przede wszystkim na łatwości pielęgnacji oraz
                  wyeliminowaniu problemu ze zbijaniem owadów w okresie letnim.
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  2 999 - 3 299 PLN netto
                </span>
              </div>
            </div>
            {/* Wariant Premium Plus */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  <strong>Wariant Premium Plus</strong>
                  <br />
                  Bardzo efektywna kombinacja zapewniająca najwyższą z możliwych
                  w Titan Coatings odporność chemiczną pH 1-14, łatwość
                  pielęgnacji, głęboki połysk i wyjątkowo ograniczone
                  przywieranie osadu mineralnego lub owadów. Okres ochrony
                  lakieru wg. producenta <strong>6 lat</strong>.
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  3 699 - 4 399 PLN netto
                </span>
              </div>
            </div>
            {/* Wariant Premium Plus */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="gap-1py-2 flex h-full flex-wrap items-center md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 text-sm leading-relaxed sm:text-base md:sr-only md:px-5 lg:text-lg">
                  <strong>Wariant Ultimate</strong>
                  <br />
                  Najbardziej rozbudowana kombinacja, która oprócz korzyści
                  wymienionych w powyższym punkcie, posiada również zdolności do
                  samo poziomowania oraz samoleczenia. Okres ochrony lakieru wg.
                  producenta <strong>7 lat</strong>. Istnieje możliwość
                  replikacji drugiego top coatu raz do roku na przykład w
                  okresie wiosny, w celu wzmocnienia efektu łatwego usuwania
                  owadów i zanieczyszczeń.
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  4 699 - 5 699 PLN netto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End: Powłoki Elastomerowe */}

      {/* DODATKOWE USUGI */}
      <h2 className="txt-gradient mx-auto mt-12 mb-8 w-fit text-center text-xl font-medium text-balance sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Dodatkowe usługi</strong>
      </h2>

      {/* Dodatkowe usługi */}
      <div className="mx-auto w-full px-4 md:rounded-2xl md:border-4 md:border-gray-500/30 md:bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] md:px-6 md:text-sm md:shadow-xs md:shadow-gray-800/40">
        <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-2">
          <div className="md:contents">
            {/* Valeting */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-2"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <Link
                  to="/blog/valeting-perfekcyjna-pielegnacja-twojego-auta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus hover:text-accent"
                >
                  <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                    Valeting
                    <HiArrowSmallRight className="inline" />
                  </span>
                </Link>
              </div>
            </div>
            {/* Przygotowanie auta do sprzedaży */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-3"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Przygotowanie auta do sprzedaży
                </span>
              </div>
            </div>
            {/* Czyszczenie auta po zakupie */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-4"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie auta po zakupie
                </span>
              </div>
            </div>
            {/* Grizz protector */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-5"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Grizz protector
                </span>
              </div>
            </div>
            {/* Czyszczenie szyb i nałożenie niewidzialnej wycieraczki */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-6"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie szyb i nałożenie niewidzialnej wycieraczki
                </span>
              </div>
            </div>
            {/* Czyszczenie i zabezpieczenie kół */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-7"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie i zabezpieczenie kół
                </span>
              </div>
            </div>
            {/* Czyszczenie i zabezpieczenie dachu cabrio */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-8"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie i zabezpieczenie dachu cabrio
                </span>
              </div>
            </div>
            {/* Czyszczenie komory silnika */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-9"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Czyszczenie komory silnika
                </span>
              </div>
            </div>
            {/* Polerowanie i zabezpieczenie reflektorów */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-10"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Polerowanie i zabezpieczenie reflektorów
                </span>
              </div>
            </div>
            {/* Lakierowanie kierownicy oraz gałki zmiany biegów */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-11"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Lakierowanie kierownicy oraz gałki zmiany biegów
                </span>
              </div>
            </div>
            {/* Renowacja foteli skórzanych */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-12"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Renowacja foteli skórzanych
                </span>
              </div>
            </div>
            {/* Pozbywanie się uporczywych zapachów */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-13"
              aria-hidden="true"
            >
              <div className="flex items-center border-b border-gray-500/30 px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Pozbywanie się uporczywych zapachów
                </span>
              </div>
            </div>
            {/* Ozonowanie */}
            <div
              className="flex flex-col justify-center max-md:hidden md:order-14"
              aria-hidden="true"
            >
              <div className="flex items-center px-3 py-2 md:min-h-[60px] md:px-5 md:py-3">
                <span className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  Ozonowanie
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm shadow-xs shadow-gray-800/40 md:contents">
            {/* Valeting */}
            <div className="flex flex-col justify-center md:order-2">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[50] md:justify-end md:py-3">
                <Link
                  to="/blog/valeting-perfekcyjna-pielegnacja-twojego-auta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus hover:text-accent"
                >
                  <span className="px-3 md:sr-only md:px-5">
                    Valeting
                    <HiArrowSmallRight className="inline" />
                  </span>
                </Link>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 400 zł
                </span>
              </div>
            </div>
            {/* Przygotowanie auta do sprzedaży */}
            <div className="flex flex-col justify-center md:order-3">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Przygotowanie auta do sprzedaży
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 600 zł
                </span>
              </div>
            </div>
            {/* Czyszczenie auta po zakupie */}
            <div className="flex flex-col justify-center md:order-4">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Czyszczenie auta po zakupie
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 600 zł
                </span>
              </div>
            </div>
            {/* Grizz protector */}
            <div className="flex flex-col justify-center md:order-5">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">Grizz protector</span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 250 zł do 500 zł
                </span>
              </div>
            </div>
            {/* Czyszczenie szyb i nałożenie niewidzialnej wycieraczki */}
            <div className="flex flex-col justify-center md:order-6">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Czyszczenie szyb i nałożenie niewidzialnej wycieraczki
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 150 zł
                </span>
              </div>
            </div>
            {/* Czyszczenie i zabezpieczenie kół */}
            <div className="flex flex-col justify-center md:order-7">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Czyszczenie i zabezpieczenie kół
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 320 zł
                </span>
              </div>
            </div>
            {/* Czyszczenie i zabezpieczenie dachu cabrio */}
            <div className="flex flex-col justify-center md:order-8">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Czyszczenie i zabezpieczenie dachu cabrio
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 250 zł
                </span>
              </div>
            </div>
            {/* Czyszczenie komory silnika */}
            <div className="flex flex-col justify-center md:order-9">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Czyszczenie komory silnika
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 200 zł
                </span>
              </div>
            </div>
            {/* Polerowanie i zabezpieczenie reflektorów */}
            <div className="flex flex-col justify-center md:order-10">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Polerowanie i zabezpieczenie reflektorów
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 250 zł
                </span>
              </div>
            </div>
            {/* Lakierowanie kierownicy oraz gałki zmiany biegów */}
            <div className="flex flex-col justify-center md:order-11">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Lakierowanie kierownicy oraz gałki zmiany biegów
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 250 zł
                </span>
              </div>
            </div>
            {/* Renowacja foteli skórzanych */}
            <div className="flex flex-col justify-center md:order-12">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Renowacja foteli skórzanych
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 600 zł
                </span>
              </div>
            </div>
            {/* Pozbywanie się uporczywych zapachów */}
            <div className="flex flex-col justify-center md:order-13">
              <div className="flex h-full flex-wrap items-center gap-1 border-b border-gray-500/30 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">
                  Pozbywanie się uporczywych zapachów
                </span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  od 500 zł
                </span>
              </div>
            </div>
            {/* Ozonowanie */}
            <div className="flex flex-col justify-center md:order-14">
              <div className="flex h-full flex-wrap items-center gap-1 py-2 md:min-h-[60px] md:justify-end md:py-3">
                <span className="px-3 md:sr-only md:px-5">Ozonowanie</span>
                <span className="ml-auto px-3 text-sm leading-relaxed sm:text-base md:px-5 lg:text-lg">
                  gratis do każdej usługi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End: Dodatkowe usługi */}

      <div className="mx-auto w-fit md:ml-0">
        <p className="mt-10 mb-2 text-xs leading-relaxed italic sm:text-sm lg:text-base">
          * Podane ceny <strong className="font-medium">są cenami netto</strong>
          , do których
          <strong className="font-medium">należy doliczyć 23% VAT</strong>.
        </p>

        <p className="text-xs leading-relaxed italic sm:text-sm lg:text-base">
          ** Cena indywidualna.
        </p>
      </div>
    </div>
  );
}

export default Services;
