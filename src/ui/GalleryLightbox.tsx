import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../styles/lightbox-overrides.css";
import type { GalleryPhoto } from "../types/api";

function GalleryLightbox({ images }: { images: GalleryPhoto[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function handleOpen(index: number) {
    setIndex(index);
    setOpen(true);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-7">
        {images.map((img, i) => (
          <div
            key={img.id}
            role="button"
            tabIndex={0}
            aria-label={`Otwórz zdjęcie numer ${i + 1}`}
            onClick={() => handleOpen(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(i);
              }
            }}
            className="focus hover:border-accent relative h-50 min-w-70 cursor-pointer rounded-2xl border-4 border-gray-500/30 bg-gray-900/80 object-cover object-center shadow-xs shadow-gray-800/40 transition duration-200 ease-in-out"
          >
            <img
              alt=""
              src={img.src}
              loading="lazy"
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
        ))}
      </div>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </>
  );
}

export default GalleryLightbox;
