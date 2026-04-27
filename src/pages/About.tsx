import { useEffect, useState } from "react";

import { getCertifications } from "../api/firestoreService";

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
          Profesjonalny auto detailing klasy premium – Carbon Care Detailing
          Olkusz
        </strong>
      </h1>

      <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Kilka słów o mnie i Carbon Care Detailing
        </strong>
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="col-span-2 flex flex-col gap-5">
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Mam na imię Bartek. Przez blisko 18 lat pracowałem w dużych
            organizacjach, zarządzając zespołami doradców w całej Polsce. Była
            to wymagająca praca, pełna odpowiedzialności i codziennego kontaktu
            z ludźmi. Dała mi ogromne doświadczenie, ale z czasem zrozumiałem,
            że nie daje mi tego, co dla mnie najważniejsze – poczucia sensu i
            realnego wpływu na efekt końcowy.
          </p>

          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Samochody zawsze były moją pasją. Nie jako środek transportu, ale
            jako dopracowana całość, w której liczy się każdy detal. Od lat
            rozwijałem się w kierunku auto detailingu, korekty lakieru, folii
            PPF i wrappingu. Uczyłem się, testowałem, szkoliłem i obserwowałem
            najlepszych w branży – zarówno w Polsce, jak i za granicą.
          </p>

          <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
            <strong className="font-medium">
              Jak pracuję – filozofia detailingu premium
            </strong>
          </h2>

          <div className="col-span-2 flex flex-col gap-5">
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Nie działam taśmowo i nie przyjmuję więcej aut, niż jestem w
              stanie obsłużyć na najwyższym poziomie. Każdy samochód, który
              trafia do mojego studia, przechodzi dokładną inspekcję. Zanim
              cokolwiek zaproponuję, rozmawiamy o tym, jak auto jest użytkowane
              i czego naprawdę oczekujesz.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="txt-gradient my-3 text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
            Zakres usług w Carbon Care Detailing
          </h3>

          <ul className="flex list-inside list-disc flex-col gap-4">
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Korekta i renowacja lakieru
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Zabezpieczenie lakieru powłokami ochronnymi i elastomerowymi
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Aplikacja folii ochronnej PPF
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Zmiana koloru auta foliami winylowymi
            </li>
            <li className="text-sm leading-relaxed sm:text-base lg:text-lg">
              Detailing wnętrza i tapicerki
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

      <h3 className="txt-gradient my-3 text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
        Akredytacja i stosowane technologie
      </h3>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        Od stycznia jestem akredytowanym aplikatorem powłok elastomerowych Titan
        Coating, co pozwala mi oferować zaawansowane i trwałe zabezpieczenie
        lakieru – szczególnie dla samochodów klasy premium oraz aut nowych.
      </p>

      <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Dlaczego klienci premium wybierają Carbon Care Detailing?
        </strong>
      </h2>

      <h3 className="txt-gradient my-3 text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
        Indywidualne podejście i pełna transparentność
      </h3>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        Klienci wybierają moje studio, ponieważ wiedzą, że nie pracuję na
        skróty, używam wyłącznie sprawdzonych produktów i technik, a każdy
        samochód traktuję indywidualnie. Doradzam rozwiązania dopasowane do
        realnych potrzeb, a nie do sztywnego cennika.
      </p>

      <h3 className="txt-gradient my-3 text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
        Detailing jako rzemiosło, nie produkcja
      </h3>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        Dla mnie detailing to rzemiosło. Liczy się precyzja, cierpliwość i
        powtarzalność efektu. Samochód ma wyglądać doskonale nie tylko w dniu
        odbioru, ale również po miesiącach codziennego użytkowania.
      </p>

      <h2 className="txt-gradient mt-12 mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">
        <strong className="font-medium">
          Jeśli szukasz spokoju, jakości i zaufania
        </strong>
      </h2>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        Jeżeli zależy Ci na oddaniu samochodu w ręce osoby, która rozumie
        wartość detali, zapraszam do kontaktu. Bez pośpiechu, bez presji, bez
        marketingowych obietnic. Najpierw rozmowa, potem decyzja.
      </p>

      <h3 className="txt-gradient my-3 text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
        Kontakt
      </h3>

      <p className="my-5 text-sm leading-relaxed sm:text-base lg:text-lg">
        <strong>Carbon Care Detailing</strong>
        <br />
        Olkusz, ul. Jasna 80
        <br />
        <a href="tel:+48666699955">+48 666 699 955</a>
      </p>
    </div>
  );
}

export default About;
