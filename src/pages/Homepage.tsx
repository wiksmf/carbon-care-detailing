import { useEffect, useState } from "react";
import {
  HiOutlineInformationCircle,
  HiOutlineSparkles,
  HiOutlineSwatch,
  HiOutlineTrophy,
} from "react-icons/hi2";

import ButtonLink from "../ui/ButtonLink";
import Spinner from "../ui/Spinner";

const HERO_IMAGE = "/images/bmw.webp";
const C2_IMAGE = "/images/c2.webp";
const C3_IMAGE = "/images/c3.webp";
const MASONRY_IMAGES = [
  "/images/c-1.jpg",
  "/images/c-2.jpg",
  "/images/c-3.jpg",
  "/images/c-4.jpg",
  "/images/c-5.jpg",
  "/images/c-6.jpg",
  "/images/c-7.jpg",
];

import type { GalleryPhoto } from "../types/api";

function Homepage() {
  const [masonry, setMasonry] = useState<GalleryPhoto[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const selectedCarImage = HERO_IMAGE;

  useEffect(() => {
    async function loadGallery() {
      const { getFirst7PhotosOfMostRecentCar } = await import(
        "../api/firestoreService"
      );
      const result = await getFirst7PhotosOfMostRecentCar();
      setMasonry(result.data);
      setSuccess(result.success);
      setError(result.error);
      setIsLoading(false);
    }

    loadGallery();
  }, []);

  return (
    <div className="mx-auto max-w-7xl pt-25 lg:pt-30">
      <div className="relative h-[70vh] w-full overflow-hidden md:h-[80vh]">
        <img
          src={selectedCarImage}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
          className="h-[60vh] w-full rounded-2xl border-4 border-gray-500/30 object-contain object-top shadow-xs shadow-gray-800/40 md:h-[80vh] md:object-cover md:object-center"
          alt="Kompleksowe usługi pielęgnacji samochodów w Olkuszu - Carbon Care Detailing"
        />

        <div className="absolute bottom-0 max-w-3xl rounded-tr-2xl border-t-4 border-r-4 border-gray-500/30 bg-gray-950 pt-5 pr-5 md:pt-10">
          <div className="relative">
            <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
              <strong className="font-medium">
                Profesjonalny Detailing Klasy Premium
              </strong>
            </h1>

            <h2 className="mb-8 text-base sm:text-lg lg:text-xl">
              Odmień swój samochód dzięki{" "}
              <span className="font-medium">najwyższej jakości usługom</span>:
              polerowanie lakieru, czyszczenie wnętrza, powłoki ceramiczne i
              folie PPF.
              <span className="mt-5 block font-medium">
                Ponad <span className="txt-gradient">10 lat doświadczenia</span>{" "}
                w osiąganiu spektakularnych efektów.
              </span>
            </h2>

            <div className="flex gap-5">
              <ButtonLink href="/oferta" type="primary">
                Oferta
              </ButtonLink>
              <ButtonLink href="/realizacje" type="secondary">
                Realizacje
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15 md:mt-25 lg:mt-30">
        <div className="mb-8 flex flex-col md:flex-row md:items-center">
          <h2 className="txt-gradient border-accent w-fit border-b-2 border-solid pb-6 text-xl sm:text-2xl md:min-w-fit md:border-b-0 md:pr-6 md:pb-0 lg:text-3xl">
            <strong className="font-medium">Miłość do Każdego Detalu</strong>
          </h2>

          <p className="border-accent pt-6 text-sm leading-relaxed sm:text-base md:border-l-2 md:border-solid md:pt-0 md:pl-6 lg:text-lg">
            Zanurz się w luksusie dzięki kompleksowym pakietom detailingu,
            dopasowanym do unikalnych potrzeb Twojego samochodu.
          </p>
        </div>

        <div className="relative mt-10 mb-10 flex flex-col gap-7 lg:mt-20">
          <div className="bg-opacity-80 relative z-2 w-fit max-w-md rounded-2xl bg-gray-900/80 px-5 py-5 text-balance shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter lg:absolute lg:top-10 lg:left-7">
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineInformationCircle size={30} stroke="#f9fafc" />
              <h3 className="text-base sm:text-lg md:text-xl">
                <strong className="font-medium">Detailing zewnętrzny</strong>
              </h3>
            </div>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Polerowanie lakieru, usuwanie zarysowań i profesjonalna
              pielęgnacja karoserii dla nieskazitelnego wyglądu auta.
            </p>
          </div>

          <div className="bg-opacity-80 relative z-2 ml-auto w-fit max-w-md rounded-2xl bg-gray-900/80 px-5 py-5 text-balance shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter lg:absolute lg:top-5 lg:right-10">
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineInformationCircle size={30} stroke="#f9fafc" />
              <h3 className="text-base sm:text-lg md:text-xl">
                <strong className="font-medium">Czyszczenie wnętrz</strong>
              </h3>
            </div>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Kompleksowe pranie tapicerki, czyszczenie plastików i odświeżanie
              wnętrza samochodu, aby wyglądało jak nowe.
            </p>
          </div>

          <div className="relative h-[280px] rounded-2xl md:h-[400px] lg:h-[700px]">
            <img
              src={C2_IMAGE}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={1200}
              height={700}
              className="mx-auto h-[280px] rounded-2xl border-4 border-gray-500/30 object-cover object-center shadow-xs shadow-gray-800/40 md:h-[400px] lg:h-[700px] lg:w-full"
              alt="Polerowanie lakieru, czyszczenie wnętrza, powłoki ceramiczne, folie PPF. Zadbaj o swój samochód z Carbon Care Detailing"
            />
          </div>

          <div className="bg-opacity-80 relative z-2 w-fit max-w-sm rounded-2xl bg-gray-900/80 px-5 py-5 text-balance shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter lg:absolute lg:bottom-7 lg:left-5">
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineInformationCircle size={30} stroke="#f9fafc" />
              <h3 className="text-base sm:text-lg md:text-xl">
                <strong className="font-medium">Folie PPF</strong>
              </h3>
            </div>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Profesjonalne zabezpieczenie lakieru folią PPF, chroniącą przed
              zarysowaniami, odpryskami i czynnikami zewnętrznymi.
            </p>
          </div>

          <div className="bg-opacity-80 relative z-2 ml-auto w-fit max-w-lg rounded-2xl bg-gray-900/80 px-5 py-5 text-balance shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter lg:absolute lg:right-3 lg:bottom-3">
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineInformationCircle size={30} stroke="#f9fafc" />
              <h3 className="text-base sm:text-lg md:text-xl">
                <strong className="font-medium">Dodatkowe usługi</strong>
              </h3>
            </div>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Oprócz detailingu i kompleksowej pielęgnacji samochodów oferuje
              również dodatkowe usługi, takie jak przygotowanie auta do
              sprzedaży, renowacja foteli skórzanych, usuwanie uporczywych
              zapachów i wiele innych.
            </p>
          </div>
        </div>

        <ButtonLink href="/oferta" type="primary" margin="mx-auto">
          Sprawdź ofertę
        </ButtonLink>
      </div>

      <div className="mt-15 md:mt-25 lg:mt-30">
        <h2 className="txt-gradient w-fit text-xl sm:text-2xl lg:text-3xl">
          <strong className="font-medium">Perfekcyjna Pielęgnacja</strong>
        </h2>

        <div className="relative grid items-center gap-5 lg:grid-cols-2">
          <div className="relative z-2 mt-10 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <HiOutlineSparkles size={28} />
                <h3 className="text-base sm:text-lg md:text-xl">
                  <strong className="font-medium">Precyzyjna Praca</strong>
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base lg:text-lg lg:text-balance">
                Gwarancja najwyższych standardów w pielęgnacji Twojego
                samochodu, zapewniająca trwały efekt i perfekcyjny wygląd.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <HiOutlineTrophy size={27} />
                <h3 className="text-base sm:text-lg md:text-xl">
                  <strong className="font-medium">
                    Produkty i Usługi Premium
                  </strong>
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base lg:text-lg lg:text-balance">
                Zabezpiecz swój samochód dzięki regularnej ochronie lakieru,
                nowoczesnym powłokom i profesjonalnym usługom.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <HiOutlineSwatch size={28} />
                <h3 className="text-base sm:text-lg md:text-xl">
                  <strong className="font-medium">
                    Spersonalizowane Pakiety
                  </strong>
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base lg:text-lg lg:text-balance">
                Indywidualnie dopasowane usługi do każdego samochodu,
                odpowiadające jego potrzebom i Twojemu stylowi życia.
              </p>
            </div>

            <ButtonLink href="/o-mnie" type="primary">
              Dowiedz się więcej
            </ButtonLink>
          </div>

          <div className="relative h-[300px] rounded-2xl border-4 border-gray-500/30 shadow-xs shadow-gray-800/40 sm:h-[380px] lg:h-full">
            <img
              src={C3_IMAGE}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={1200}
              height={800}
              className="h-full w-full rounded-xl object-cover object-center lg:object-bottom"
              alt="Polerowanie lakieru, czyszczenie wnętrza, powłoki ceramiczne, folie PPF. Zadbaj o swój samochód z Carbon Care Detailing"
            />
          </div>
        </div>
      </div>

      <div className="mt-15 md:mt-25 lg:mt-30">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="txt-gradient text-xl sm:text-2xl lg:text-3xl">
            <strong className="font-medium">
              Detailing Samochodowy,
              <span className="block">Który Odmieni Twój Pojazd</span>
            </strong>
          </h2>
          <ButtonLink href="/realizacje" type="primary">
            Obejrzyj realizacje
          </ButtonLink>
        </div>

        {isLoading ? (
          <Spinner />
        ) : success && masonry?.length > 0 ? (
          <div className="grid auto-cols-fr grid-flow-dense auto-rows-fr grid-cols-2 gap-1 md:grid-cols-5 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2">
            {masonry.map((photo, index) => (
              <div
                className={`box ${
                  index === masonry.length - 1
                    ? "box"
                    : (index + 1) % 6 === 2
                      ? "box-landscape"
                      : (index + 1) % 6 === 3
                        ? "box-portrait"
                        : (index + 1) % 6 === 5
                          ? "box-landscape"
                          : ""
                }`}
                key={photo.id}
              >
                <img
                  loading="lazy"
                  src={MASONRY_IMAGES[index] ?? photo.src}
                  alt={photo.alt || ""}
                  decoding="async"
                  fetchPriority="low"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}{" "}
          </div>
        ) : error ? (
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Nie udało się załadować galerii.
          </p>
        ) : (
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Brak zdjęć do wyświetlenia.
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
