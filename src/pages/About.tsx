import { useEffect, useState } from "react";

import { getCertifications } from "../api/firestoreService";

import ButtonLink from "../ui/ButtonLink";
import GallerySlider from "../ui/GallerySlider";
import Spinner from "../ui/Spinner";

import a from "/images/a.webp";

import type { Certification } from "../types/api";

function About() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCertifications() {
      const result = await getCertifications();
      setCertifications(result.data);
      setSuccess(result.success);
      setError(result.error);
      setIsLoading(false);
    }

    loadCertifications();
  }, []);

  return (
    <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
        <strong className="font-medium">
          Profesjonalizm oparty na pasji - kilka słów o mnie...
        </strong>
      </h1>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="col-span-2 flex flex-col gap-5">
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Mam na imię Bartek. Przez ostatnie 18 lat pracowałem w dużych
            korporacjach, konsekwentnie pnąc się po szczeblach kariery. Ostatnie
            lata spędziłem jako menedżer zarządzający zespołem doradców
            rozproszonych po całej Polsce. Była to praca pełna wyzwań, dająca mi
            wiele satysfakcji, zwłaszcza ze względu na codzienny kontakt z
            ludźmi. Jednak w głębi serca czułem, że to nie jest to, co chciałbym
            robić przez resztę życia. Moja prawdziwa pasja zawsze kręciła się
            wokół samochodów i ich perfekcyjnej pielęgnacji.
          </p>

          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Od lat zgłębiałem tajniki auto detailingu i wrappingu, biorąc udział
            w szkoleniach, uczestnicząc w forach branżowych i aktywnie śledząc
            światowe trendy poprzez społeczności internetowe oraz YouTube. Moje
            zamiłowanie do detali, dbałość o perfekcję i chęć tworzenia
            pięknych, lśniących pojazdów skłoniły mnie do podjęcia
            najważniejszej decyzji w życiu – postanowiłem rzucić dotychczasową
            karierę i w pełni poświęcić się mojej pasji. Tak narodziło się
            Carbon Care Detailing.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Auto detailing to dla mnie coś więcej niż zawód – to sztuka i
            filozofia, której fundamentem jest precyzja i bezkompromisowa
            jakość. W Carbon Care Detailing oferuję kompleksowe usługi
            pielęgnacyjne dla Twojego samochodu, takie jak:
          </p>

          <ul className="flex list-inside list-disc flex-col gap-4">
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Dokładne czyszczenie wnętrza i nadwozia
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Renowacja i korekta lakieru, oraz reflektorów
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Zabezpieczenie lakieru powłokami ochronnymi
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Aplikacja folii PPF
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Zmiana koloru auta foliami winylowymi
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Profesjonalna pielęgnacja tapicerki i elementów plastikowych.
            </li>
          </ul>
        </div>

        <div className="relative mx-auto mt-5 h-[250px] w-[280px] md:mt-0 md:h-full md:w-full">
          <img
            src={a}
            loading="lazy"
            className="absolute h-full w-full rounded-2xl border-4 border-gray-500/30 object-cover object-right"
            alt="Detailing z miłością - Twój samochód w najlepszych rękach!"
          />
        </div>
      </div>

      <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Dlaczego warto wybrać Carbon Care Detailing?
        </strong>
      </h2>

      <ul className="flex list-inside list-disc flex-col gap-4">
        <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
          <strong className="font-medium">
            Doświadczenie i profesjonalizm
          </strong>{" "}
          - latami zdobywałem wiedzę i umiejętności, aby oferować najwyższy
          poziom usług.
        </li>
        <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
          <strong className="font-medium">Indywidualne podejście</strong> -
          każdy samochód traktuję jak dzieło sztuki, dbając o każdy, nawet
          najmniejszy detal.
        </li>
        <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
          <strong className="font-medium">Najwyższa jakość</strong> - stosuję
          sprawdzone produkty i techniki, gwarantując doskonałe efekty.
        </li>
        <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
          <strong className="font-medium">Pasja i zaangażowanie</strong> -
          kocham to, co robię, i w każdy projekt wkładam serce.
        </li>
        <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
          <strong className="font-medium">Szeroki zakres usług</strong> - od
          mycia detailingowego po zaawansowane zabezpieczenia powłokami
          ochronnymi.
        </li>
      </ul>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        Jeśli chcesz, by Twój samochód wyglądał jak nowy,{" "}
        <strong className="font-medium">
          zapraszam do Carbon Care Detailing
        </strong>
        . Gwarantuję, że Twój pojazd znajdzie się w najlepszych rękach.
        Skontaktuj się ze mną, a wspólnie dobierzemy najlepsze rozwiązanie dla
        Twojego auta!
      </p>

      <ButtonLink href="/oferta" type="primary">
        Sprawdź ofertę
      </ButtonLink>

      <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">Certyfikaty</strong>
      </h2>

      {isLoading ? (
        <Spinner />
      ) : success && certifications?.length > 0 ? (
        <GallerySlider gallery={certifications} />
      ) : error ? (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Nie udało się załadować certyfikatów.
        </p>
      ) : (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Brak certyfikatów do wyświetlenia.
        </p>
      )}
    </div>
  );
}

export default About;
