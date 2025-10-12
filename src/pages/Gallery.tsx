import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getGallery } from "../api/firestoreService";
import Spinner from "../ui/Spinner";

import type { GalleryPhotos } from "../types/api";

function Gallery() {
  const [gallery, setGallery] = useState<GalleryPhotos[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      const result = await getGallery();
      setGallery(result.data);
      setSuccess(result.success);
      setError(result.error);
      setIsLoading(false);
    }

    loadGallery();
  }, []);

  return (
    <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
        <strong className="font-medium">Galeria realizacji</strong>
      </h1>

      <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
        Sprawdź galerię i zobacz wybrane realizacje – od samochodów miejskich i
        klasy średniej, po auta premium oraz wyjątkowe oldtimery. Każdy projekt
        to indywidualne podejście i dbałość o najdrobniejszy detal – od
        czyszczenia wnętrz, przez polerowanie i zabezpieczenie lakieru, aż po
        aplikację folii PPF czy powłok ceramicznych. Niezależnie, czy chcesz
        zadbać o nowy samochód prosto z salonu, czy odświeżyć
        kilkudziesięcioletniego klasyka, jesteś we właściwym miejscu! Śledź nas
        na Instagramie i Facebooku, gdzie regularnie publikujemy najnowsze
        realizacje i inspiracje ze świata detailingu.
      </p>

      {isLoading ? (
        <Spinner />
      ) : success && gallery?.length > 0 ? (
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {gallery.map((photo) => (
            <Link
              to={`/realizacje/${photo.id}`}
              className="focus hover:border-accent block h-full w-70 rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] text-sm text-balance shadow-xs shadow-gray-800/40 transition duration-200 ease-in-out"
              key={photo.id}
              aria-label={`Zobacz szczegóły realizacji: ${photo.name}`}
            >
              <h3 className="txt-gradient my-3 text-center text-base leading-relaxed font-medium sm:text-lg lg:text-xl">
                <strong className="font-medium">{photo.name}</strong>
              </h3>

              <div className="relative h-50 w-full overflow-hidden rounded-t-2xl rounded-b-xl bg-gray-500/30 pt-1 shadow-xs shadow-gray-800/40">
                <img
                  src={photo.mainPhoto}
                  loading="lazy"
                  alt={`Zdjęcie realizacji: ${photo.name}`}
                  className="absolute h-50 w-full rounded-tl-2xl rounded-tr-2xl rounded-b-xl object-cover object-center"
                />
              </div>
            </Link>
          ))}
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
  );
}

export default Gallery;
