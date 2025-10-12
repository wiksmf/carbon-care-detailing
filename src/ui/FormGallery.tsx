import { useEffect, useState } from "react";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { addGallery, removeGallery } from "../api/firebaseActions";

import Modal from "./Modal";
import ButtonForm from "./ButtonForm";
import FormGalleryUpdate from "./FormGalleryUpdate";
import Spinner from "./Spinner";

import type { GalleryPhotos } from "../types/api";

export interface GalleryPhoto {
  src: string;
  createdAt: number;
}

function FormGallery() {
  const [galleries, setGalleries] = useState<GalleryPhotos[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<GalleryPhotos | null>(
    null,
  );
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: GalleryPhotos[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as GalleryPhotos),
      }));

      setGalleries(data);
      setIsLoadingData(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddGallery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const mainPhotoInput = form.elements.namedItem(
      "mainPhoto",
    ) as HTMLInputElement;
    const photosInput = form.elements.namedItem("photos") as HTMLInputElement;

    if (!mainPhotoInput.files || !photosInput.files?.length) return;

    const mainPhotoFile = mainPhotoInput.files[0];
    const galleryPhotos = Array.from(photosInput.files);
    const result = await addGallery(
      nameInput.value,
      mainPhotoFile,
      galleryPhotos,
    );
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    form.reset();
  };

  const handleRemoveGallery = async (id: string) => {
    if (!window.confirm("Czy na pewno chcesz usunąć galerię?")) return;
    setIsLoading(true);

    const result = await removeGallery(id);
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    setGalleries((prev) => prev.filter((g) => g.id !== id));
  };

  const handleEdit = (gallery: GalleryPhotos) => {
    setSelectedGallery(gallery);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedGallery(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="mb-5 text-xl">Dodaj nową galerię</h2>
      <form onSubmit={handleAddGallery} className="mb-8 space-y-4">
        <div className="flex flex-col items-start">
          <label
            htmlFor="alt-photo"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wpisz nazwę galerii:
          </label>
          <input
            type="text"
            name="name"
            id="alt-photo"
            placeholder="Nazwa galerii"
            required
            className="input"
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="main-photo"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wybierz zdjęcie główne:
          </label>
          <input
            type="file"
            name="mainPhoto"
            id="main-photo"
            required
            accept="image/*"
            className="input"
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="gallery-photo"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wybierz zdjęcia galerii:
          </label>
          <input
            type="file"
            name="photos"
            id="gallery-photo"
            required
            multiple
            accept="image/*"
            className="input"
          />
        </div>

        <ButtonForm type="add" isLoading={isLoading} />
      </form>

      {isLoadingData ? (
        <Spinner />
      ) : (
        <>
          <h2 className="mb-5 text-xl">Aktualnie dodane galerie</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-wrap gap-2">
              {galleries.map((gallery) => (
                <div
                  key={gallery.id}
                  className="bg-opacity-80 rounded-2xl border-4 border-gray-500/30 bg-gray-900/80 p-3 shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter"
                >
                  <div className="relative h-50 w-80 rounded-2xl border-4 border-gray-500/30">
                    <img
                      src={gallery.mainPhoto}
                      alt={gallery.name}
                      className="h-full w-full rounded-xl object-cover object-center"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="mb-2 text-sm text-gray-100/70">
                      Nazwa galerii:
                    </p>
                    <p>{gallery.name}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-evenly">
                    <ButtonForm
                      type="edit"
                      onClick={() => handleEdit(gallery)}
                      isLoading={isLoading}
                    />
                    <ButtonForm
                      type="remove"
                      onClick={() => handleRemoveGallery(gallery.id!)}
                      isLoading={isLoading}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedGallery && (
          <FormGalleryUpdate
            gallery={selectedGallery}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </>
  );
}

export default FormGallery;
