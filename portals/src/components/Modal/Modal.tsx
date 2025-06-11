import { useCallback, useEffect, useRef, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/ModalContext";
import "./Modal.scss";

interface ModalProps {
    children: ReactNode;
}
const EventListener = 'keydown';
export const Modal = ({ children }: ModalProps) => {

    const modalRef = useRef<HTMLDivElement>(null);
    const { state, setState } = useModalContext();

    const closeModal = useCallback(() => {
        setState(false);
    }, [setState]);


    const modalRoot = document.getElementById("modal");

    const hadleContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        }
        if (state) {
            document.addEventListener(EventListener, handleEsc);
        }

        return () => {
            document.removeEventListener(EventListener, handleEsc)
        }

    }, [state, closeModal]);

    if (!state || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" ref={modalRef} onClick={hadleContentClick}>
                {children}
                <button className="close-button" onClick={closeModal}>Cerrar</button>
            </div>
        </div>
        , modalRoot);
}

