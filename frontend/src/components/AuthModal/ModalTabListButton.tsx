import { Dispatch, SetStateAction } from "react";
import { AuthModalState } from "./ModalStateEnum";

interface AMTLBProps {
  type: AuthModalState;
  className?: string;
  setModalState: Dispatch<SetStateAction<AuthModalState>>;
  modalState: AuthModalState;
}

const AuthModalTabListButton: React.FC<AMTLBProps> = ({
  type,
  className = "",
  modalState,
  setModalState,
}) => {
  return (
    <li
      className={`h-full flex-grow-0 ${className} ${
        modalState === type ? "text-button-hover" : "text-text-input"
      }`}
    >
      <button className="h-full w-full" onClick={() => setModalState(type)}>
        <div className="h-full text-left flex flex-col">
          <div className="flex-grow capitalize">{type}</div>
          {modalState === type && (
            <div className="h-active-indicator origin bg-current flex-grow-0"></div>
          )}
        </div>
      </button>
    </li>
  );
};

export default AuthModalTabListButton;
