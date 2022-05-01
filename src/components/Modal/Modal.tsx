import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

// components
import Button from "src/elements/Button/ButtonStyles";
import ClientPortal from "./ClientPortal";
import {
  ModalWrapper,
  ModalContainer,
  ModalContainerTitle,
  ModalContainerFooter,
  ModalContainerBody,
  ModalContainerTitleCloseIcon
} from "./ModalStyles";

// types
import ModalInterface from "src/types/components/Modal";


function Modal(props: ModalInterface) {
  const { visible, onCancel, onConfirm, header, footer, children } = props;

  const [isOpen, setOpen] = useState(visible);
  const [isMounted, setMounted] = useState(visible);

  useEffect(() => {
    setOpen(visible);
    setMounted(visible);
  }, [visible]);

  const onClose = () => {
    setOpen(false);
    setMounted(false);
    onCancel && onCancel();
  }

  const handleConfirm = () => {
    setOpen(false);
    setMounted(false);
    onConfirm && onConfirm();
  }

  if (!isMounted) return null;


  return (
    <ClientPortal>
      <ModalWrapper>
        <ModalContainer>
          <div
            className={`modal-container ${isOpen ? "" : "modal-container_close"}`}
            onAnimationEnd={() => !isOpen && onClose()}
          >
            <ModalContainerTitle>
              { header }
              <ModalContainerTitleCloseIcon
                onClick={() => setOpen(false)}
              >
                <AiOutlineCloseCircle/>
              </ModalContainerTitleCloseIcon>
            </ModalContainerTitle>
            <ModalContainerBody>
              { children }
            </ModalContainerBody>
            {
              footer
                ? footer
                : (
                  <ModalContainerFooter>
                    <Button
                      danger
                      size="small"
                      onClick={() => setOpen(false)}
                    >
                    Cancel
                    </Button>
                    <Button
                      success
                      size="small"
                      onClick={handleConfirm}
                    >
                    Confirm
                    </Button>
                  </ModalContainerFooter>
                )
            }
          </div>
        </ModalContainer>
      </ModalWrapper>
    </ClientPortal>
  );
}

export default Modal;
