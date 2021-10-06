import React, { Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import styles from "./AuthModal.module.css";
import AuthModalContent from "./AuthModalContent";
import { AuthModalState } from "./ModalStateEnum";

interface ModalProps {
  modalState: AuthModalState;
  setModalState: Dispatch<SetStateAction<AuthModalState>>;
}

const AuthModal: React.FC<ModalProps> = ({ modalState, setModalState }) => {
  return (
    <Modal
      overlayClassName={styles.modal__overlay}
      className={styles.modal__content}
      onRequestClose={() => setModalState(AuthModalState.NOT_ACTIVE)}
      shouldCloseOnOverlayClick={true}
      isOpen={modalState !== AuthModalState.NOT_ACTIVE}
    >
      <div className="p-4 pointer-events-none relative flex justify-center items-start h-full w-full">
        <div className="mt-auto mb-auto outline-none flex flex-grow-0 justify-center relative w-full">
          <div className="pointer-events-auto max-w-full relative">
            <div className="flex rounded-left-nav-bar overflow-hidden">
              <div className="w-modal-width overflow-auto">
                <div className="flex p-modal bg-nav-gray flex-col">
                  <AuthModalContent
                    modalState={modalState}
                    setModalState={setModalState}
                  />
                </div>
              </div>
            </div>
            <div className="absolute ml-2 left-full top-0">
              <button
                onClick={() => setModalState(AuthModalState.NOT_ACTIVE)}
                className="inline-flex items-center justify-center select-none h-default-button-height w-default-button-width border-solid border-1 border-transparent bg-transparent hover:bg-nav-dots-background-hover relative align-middle overflow-hidden whitespace-nowrap font-semibold rounded-left-nav-bar text-button-text"
              >
                <div className="w-8 h-8">
                  <div className="inline-flex items-center w-full h-full">
                    <div className="relative overflow-hidden w-full">
                      <div className="pb-full"></div>
                      <svg
                        className="absolute left-0 w-full min-h-full top-0 fill-current"
                        width="100%"
                        height="100%"
                        version="1.1"
                        viewBox="0 0 20 20"
                        x="0px"
                        y="0px"
                      >
                        <g>
                          <path d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
