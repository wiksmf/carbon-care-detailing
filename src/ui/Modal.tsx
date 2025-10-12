import type { ReactNode } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

import { useOutsideClick } from "../hooks/useOutsideClick";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/40 backdrop-blur-sm">
      <div
        className="animate-in fade-in-0 zoom-in-95 relative w-full max-w-4xl rounded-2xl bg-gray-900 p-6 shadow-xl transition-transform duration-200 ease-out"
        ref={ref}
      >
        <button
          onClick={onClose}
          className="focus mb-5 ml-auto block cursor-pointer"
          aria-label="Zamknij"
        >
          <HiOutlineXMark size={30} />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
