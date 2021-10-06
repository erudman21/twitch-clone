import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import { MeDocument, useLogoutMutation, User } from "../../generated/graphql";
import avatar from "../../media/avatar.png";
import styles from "./AccountModal.module.css";

interface AccountModalProps {
  user: User;
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AccountModal: React.FC<AccountModalProps> = ({
  user,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [logout] = useLogoutMutation({
    refetchQueries: [{ query: MeDocument }],
  });

  return (
    <Modal
      overlayClassName={styles.modal__overlay}
      className={styles.modal__content}
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      <div className="flex flex-col absolute transform-gpu translate-x-right translate-y-20 rounded-account-modal overflow-hidden bg-nav-gray shadow-account-modal text-text-input font-medium">
        <div className="p-4 whitespace-nowrap w-auth-modal">
          <div className="flex items-center">
            <figure className="relative w-16 h-16 block">
              <Image
                src={avatar}
                alt="User Avatar"
                className="block h-full rounded-user-avatar border-none max-w-full align-top"
              />
            </figure>
            <div className="font-semibold pl-4 flex-grow-1 text-search-box">
              {user.username}
            </div>
          </div>
          <div className="h-px w-full bg-nav-divider my-6"></div>
          <div className="relative w-full">
            <button
              onClick={() => logout()}
              className="block w-full rounded-left-nav-bar hover:bg-nav-dots-background-hover"
            >
              <div className="flex items-center relative p-2">
                <div className="w-8 h-8 flex items-center flex-shrink-0">
                  <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 20 20"
                    x="0px"
                    y="0px"
                    className="fill-current"
                  >
                    <g>
                      <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                      <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ml-2 align-middle flex-grow-1">Log Out</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AccountModal;
