import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
