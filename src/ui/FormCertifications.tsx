import { useEffect, useState } from "react";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { addCertification, removeCertification } from "../api/firebaseActions";

import FormCertificationUpdate from "./FormCertificationUpdate";
import ButtonForm from "./ButtonForm";
import Modal from "./Modal";
import Spinner from "./Spinner";

import type { Certification } from "../types/api";

function FormCertifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedImage, setSelectedImage] = useState<Certification | null>(
    null,
  );
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "certifications"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Certification[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Certification),
      }));

      setCertifications(data);
      setIsLoadingData(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddCertification = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    const altInput = form.elements.namedItem("alt") as HTMLInputElement;

    if (!fileInput.files?.[0]) return;
    const file = fileInput.files[0];
    const alt = altInput.value;

    const result = await addCertification(file, alt);
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    form.reset();
  };

  const handleRemoveCertification = async (id: string) => {
    if (!window.confirm("Czy na pewno chcesz usunąć certyfikat?")) return;
    setIsLoading(true);

    const result = await removeCertification(id);
    setIsLoading(false);

    if (!result.success) return alert(result.error);
  };

  const handleEdit = (img: Certification) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="mb-5 text-xl">Dodaj nowy certyfikat</h2>
      <form onSubmit={handleAddCertification} className="mb-8 space-y-4">
        <div className="flex flex-col items-start">
          <label
            htmlFor="certification-photo"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wybierz plik:
          </label>
          <input
            type="file"
            name="file"
            id="certification-photo"
            required
            accept="image/*"
            className="input file:mr-6 file:rounded-lg file:border-none file:bg-gray-200 file:px-4 file:py-1 file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="alt-text"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wpisz nazwe certyfikatu:
          </label>
          <input
            type="text"
            name="alt"
            id="alt-text"
            placeholder="Nazwa certyfikatu"
            required
            className="input"
          />
        </div>

        <ButtonForm type="add" isLoading={isLoading} />
      </form>

      {isLoadingData ? (
        <Spinner />
      ) : (
        <>
          <h2 className="mb-5 text-xl">Aktualnie dodane certyfikaty</h2>
          <div className="flex flex-wrap gap-4">
            {certifications.map((img) => (
              <div
                key={img.id}
                className="bg-opacity-80 flex w-2xs flex-col items-center justify-between rounded-2xl border-4 border-gray-500/30 bg-gray-900/80 p-3 shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter"
              >
                <div>
                  <div className="relative h-40 w-60">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="mb-2 text-sm text-gray-100/70">
                      Nazwa certyfikatu:
                    </p>
                    <p className="mt-2">{img.alt}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <ButtonForm
                    type="edit"
                    onClick={() => handleEdit(img)}
                    isLoading={isLoading}
                  />
                  <ButtonForm
                    type="remove"
                    onClick={() => handleRemoveCertification(img.id!)}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedImage && (
          <FormCertificationUpdate
            img={selectedImage}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </>
  );
}

export default FormCertifications;
