import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import { useKeenSlider } from "keen-slider/react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

import type { Certification } from "../types/api";

import "keen-slider/keen-slider.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../styles/lightbox-overrides.css";

function GallerySlider({ gallery }: { gallery: Certification[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 500px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 768px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  function handleOpen(index: number) {
    setIndex(index);
    setOpen(true);
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider overflow-hidden rounded-2xl">
        {gallery.map((img, i) => (
          <div
            key={img.id}
            className="keen-slider__slide relative flex h-[210px] w-[230px] items-center justify-center px-2 md:h-[250px] md:w-[300px] lg:h-[300px]"
          >
            <img
              tabIndex={0}
              aria-label={`Otwórz zdjęcie numer ${i + 1}`}
              onClick={() => handleOpen(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(i);
                }
              }}
              src={img.src}
              alt={img.alt}
              className="focus hover:border-accent cursor-pointer rounded-2xl border-4 border-gray-500/30 object-cover object-center"
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Poprzednie zdjęcie"
        onClick={() => slider?.current?.prev()}
        className="focus hover:border-accent absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/60 p-2 shadow transition-colors duration-200 ease-in-out hover:bg-gray-900 md:left-2"
      >
        <HiOutlineChevronLeft size={30} />
      </button>
      <button
        aria-label="Następne zdjęcie"
        onClick={() => slider?.current?.next()}
        className="focus hover:border-accent absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/60 p-2 shadow transition-colors duration-200 ease-in-out hover:bg-gray-900 md:right-2"
      >
        <HiOutlineChevronRight size={30} />
      </button>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery}
      />
    </div>
  );
}

export default GallerySlider;
