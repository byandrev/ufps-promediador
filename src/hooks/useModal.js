import { useContext } from "react";
import { ModalContext } from "../context/ModalContext.jsx";

function useModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal
  };
}

export default useModal;
