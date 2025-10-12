import { useState } from "react";
import { updateCertification } from "../api/firebaseActions";

import ButtonForm from "./ButtonForm";

import type { Certification } from "../types/api";

interface FormCertificationUpdateProps {
  img: Certification;
  onClose: () => void;
  onUpdate?: React.Dispatch<React.SetStateAction<Certification[]>>;
}

function FormCertificationUpdate({
  img,
  onClose,
}: FormCertificationUpdateProps) {
  const [altText, setAltText] = useState(img.alt);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await updateCertification(img.id!, altText);
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative mx-auto h-100 w-auto">
        <img
          src={img.src}
          alt={img.alt}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <label
          htmlFor="alt-edit"
          className="mb-2 block text-sm text-gray-100/70"
        >
          Zmień nazwę certyfikatu:
        </label>
        <input
          id="alt-edit"
          name="alt"
          type="text"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          className="focus input focus:outline-none"
        />
      </div>

      <ButtonForm type="save" margin="auto" isLoading={isLoading} />
    </form>
  );
}

export default FormCertificationUpdate;
