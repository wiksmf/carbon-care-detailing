import { useEffect, useState } from "react";

import { updateGallery } from "../api/firebaseActions";
import { getCarPhotos } from "../api/firestoreService";

import ButtonForm from "./ButtonForm";

import type { GalleryPhotos } from "../types/api";

interface FormGalleryUpdateProps {
  gallery: GalleryPhotos;
  onClose: () => void;
}

function FormGalleryUpdate({ gallery, onClose }: FormGalleryUpdateProps) {
  const [galleryName, setGalleryName] = useState(gallery.name);
  const [mainPhotoFile, setMainPhotoFile] = useState<File | null>(null);
  const [photos, setPhotos] = useState<{ id: string; src: string }[]>([]);
  const [newPhotos, setNewPhotos] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const result = await getCarPhotos(gallery.id!);
        setPhotos(result.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, [gallery.id]);

  const handleRemovePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleNewPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setNewPhotos(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const existingPhotoIds = photos.map((p) => p.id);
    const result = await updateGallery(
      gallery.id!,
      galleryName,
      mainPhotoFile || undefined,
      existingPhotoIds,
      newPhotos,
    );

    setIsLoading(false);

    if (!result.success) return alert(result.error);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-10">
        <div className="relative h-45 w-40 rounded-2xl border-4 border-gray-500/30">
          <img
            src={
              mainPhotoFile
                ? URL.createObjectURL(mainPhotoFile)
                : gallery.mainPhoto
            }
            alt={galleryName}
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="flex grow flex-col gap-5">
          <div>
            <label
              htmlFor="gallery-edit"
              className="mb-2 block text-sm text-gray-100/70"
            >
              Zmień nazwę galerii:
            </label>
            <input
              id="gallery-edit"
              type="text"
              value={galleryName}
              onChange={(e) => setGalleryName(e.target.value)}
              name="name"
              className="focus input focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="main-photo-edit"
              className="mb-2 block text-sm text-gray-100/70"
            >
              Zmień zdjęcie główne:
            </label>
            <input
              type="file"
              name="mainPhoto"
              id="main-photo-edit"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) setMainPhotoFile(e.target.files[0]);
              }}
              className="input file:mr-6 file:rounded-lg file:border-none file:bg-gray-200 file:px-4 file:py-1 file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="gallery-photo"
              className="text-md mb-2 block text-gray-100/70"
            >
              Dodaj nowe zdjęcia do galerii:
            </label>
            <input
              type="file"
              name="photos"
              id="gallery-photo"
              accept="image/*"
              multiple
              onChange={handleNewPhotos}
              className="input file:mr-6 file:rounded-lg file:border-none file:bg-gray-200 file:px-4 file:py-1 file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="block text-sm text-gray-100/70">Zdjęcia w galerii:</p>
        <div className="grid max-h-100 grid-cols-4 gap-4 overflow-y-auto py-2">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative w-45 rounded-2xl border-4 border-gray-500/30"
            >
              <img
                src={photo.src}
                alt=""
                className="h-30 w-full rounded-xl object-cover object-center"
              />
              <input type="hidden" name="photoIds" value={photo.id} />
              <ButtonForm
                type="removeSm"
                onClick={() => handleRemovePhoto(photo.id!)}
              />
            </div>
          ))}
        </div>
      </div>

      <ButtonForm type="save" margin="auto" isLoading={isLoading} />
    </form>
  );
}

export default FormGalleryUpdate;
