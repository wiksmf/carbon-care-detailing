import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

import { getCarPhotos } from "../api/firestoreService";

import GalleryLightbox from "./GalleryLightbox";

import type { GalleryPhoto } from "../types/api";

function Photos() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { galleryId: id } = useParams<{ galleryId: string }>();

  useEffect(() => {
    async function loadPhotos() {
      if (!id) return;

      const result = await getCarPhotos(id);
      setPhotos(result.data);
      setSuccess(result.success);
      setError(result.error);
    }

    loadPhotos();
  }, [id]);

  return (
    <>
      {success && photos ? (
        <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
          <div className="mb-12">
            <Link
              to="/realizacje"
              className="focus hover:text-accent cursor-pointer gap-2 text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg"
            >
              <HiOutlineArrowSmallLeft className="inline" aria-hidden="true" />{" "}
              Wróć do galerii
            </Link>
          </div>

          <GalleryLightbox images={photos} />
        </div>
      ) : error ? (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Nie udało się załadować zdjęć.
        </p>
      ) : (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Brak zdjęć do wyświetlenia.
        </p>
      )}
    </>
  );
}

export default Photos;
