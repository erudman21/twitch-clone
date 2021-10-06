import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import logo from "../../media/logo.png";
import AuthModalLoginForm from "./ModalLoginForm";
import AuthModalSignupForm from "./ModalSignUpForm";
import { AuthModalState } from "./ModalStateEnum";
import AuthModalTabListButton from "./ModalTabListButton";

interface AuthModalContentProps {
  modalState: AuthModalState;
  setModalState: Dispatch<SetStateAction<AuthModalState>>;
}

const AuthModalContent: React.FC<AuthModalContentProps> = ({
  modalState,
  setModalState,
}) => {
  return (
    <div className="space-y-2 font-semibold">
      <div className="flex justify-center items-center space-x-4">
        <Image alt="Logo Icon" src={logo.src} width={34} height={40}></Image>
        <div className="text-2">
          {modalState === AuthModalState.LOGIN
            ? "Log in to Twitch"
            : "Join Twitch today"}
        </div>
      </div>
      <div>
        <ul className="flex border-b-1 mt-4 border-nav-divider border-solid h-12 text-search-box items-center justify-start">
          <AuthModalTabListButton
            type={AuthModalState.LOGIN}
            className="pr-8"
            modalState={modalState}
            setModalState={setModalState}
          />
          <AuthModalTabListButton
            type={AuthModalState.SIGNUP}
            setModalState={setModalState}
            modalState={modalState}
          />
        </ul>
      </div>
      <div>
        {modalState === AuthModalState.LOGIN ? (
          <AuthModalLoginForm setModalState={setModalState} />
        ) : (
          <AuthModalSignupForm setModalState={setModalState} />
        )}
      </div>
    </div>
  );
};

export default AuthModalContent;
