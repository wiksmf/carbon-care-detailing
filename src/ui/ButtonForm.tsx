import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineCheck,
  HiOutlineCloudArrowUp,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi2";

import SpinnerMini from "./SpinnerMini";

type ButtonFormType =
  | "login"
  | "logout"
  | "add"
  | "save"
  | "edit"
  | "remove"
  | "removeSm";

interface ButtonFormProps {
  type: ButtonFormType;
  margin?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function ButtonForm({ type, margin, isLoading, onClick }: ButtonFormProps) {
  const buttonBase = `focus transition duration-200 ease-in-out w-fit flex items-center justify-center gap-2 rounded-full border-2 cursor-pointer px-3 py-1.5 text-gray-100 min-w-30 min-h-[50px] disabled:opacity-50 disabled:cursor-not-allowed ${margin ? "mx-auto" : ""}`;

  const buttonConfig: Record<
    ButtonFormType,
    {
      label?: string;
      icon: React.ReactElement;
      className: string;
      htmlType: "button" | "submit";
    }
  > = {
    login: {
      label: "Zaloguj się",
      icon: <HiOutlineUser size={22} />,
      className: `${buttonBase} min-w-50 border-amber-200 hover:bg-amber-200/40`,
      htmlType: "submit",
    },
    logout: {
      label: "Wyloguj się",
      icon: <HiOutlineArrowRightOnRectangle size={24} />,
      className: `${buttonBase} min-w-50 border-amber-200 hover:bg-amber-200/40`,
      htmlType: "submit",
    },
    add: {
      label: "Dodaj",
      icon: <HiOutlineCloudArrowUp size={24} />,
      className: `${buttonBase} border-green-400 hover:bg-green-400/40`,
      htmlType: "submit",
    },
    save: {
      label: "Zapisz",
      icon: <HiOutlineCheck size={24} />,
      className: `${buttonBase} border-green-400 hover:bg-green-400/40`,
      htmlType: "submit",
    },
    edit: {
      label: "Edytuj",
      icon: <HiOutlinePencil size={20} />,
      className: `${buttonBase} border-sky-400 hover:bg-sky-400/40`,
      htmlType: "button",
    },
    remove: {
      label: "Usuń",
      icon: <HiOutlineTrash size={20} />,
      className: `${buttonBase} border-red-400 hover:bg-red-400/40`,
      htmlType: "submit",
    },
    removeSm: {
      icon: <HiOutlineTrash size={20} />,
      className:
        "text-gray-100 flex items-center justify-center absolute -top-3 -right-3 rounded-full w-[30px] h-[30px] border-2 border-red-600 bg-red-400 cursor-pointer",
      htmlType: "button",
    },
  };

  const { label, icon, className, htmlType } = buttonConfig[type];

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={className}
      disabled={isLoading}
    >
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <>
          {label && <span>{label}</span>} {icon}
        </>
      )}
    </button>
  );
}

export default ButtonForm;
