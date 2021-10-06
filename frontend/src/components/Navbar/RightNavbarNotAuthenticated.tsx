import { MouseEventHandler, useState } from "react";
import AuthModalContainer from "../AuthModal/AuthModalContainer";
import { AuthModalState } from "../AuthModal/ModalStateEnum";

interface StyledButtonProps {
  color: string;
  onClick?: MouseEventHandler;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  color,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`inline-flex outline-none relative items-center justify-center align-middle overflow-hidden whitespace-nowrap select-none font-semibold rounded-left-nav-bar text-button-text h-12 text-text-input ${color}`}
    >
      <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-4 pr-4">
        <div className="flex-grow-0 flex items-center justify-start">
          {children}
        </div>
      </div>
    </button>
  );
};

const RightNavbarNotAuthenticated = () => {
  const [modalState, setModalState] = useState(AuthModalState.NOT_ACTIVE);

  return (
    <div className="h-full flex pt-4 pb-4 mr-4">
      <div className="flex flex-nowrap">
        <div className="flex flex-nowrap">
          <div className="pl-2 pr-2">
            <StyledButton
              onClick={() => setModalState(AuthModalState.LOGIN)}
              color="bg-search-button"
            >
              Log In
            </StyledButton>
          </div>
          <div className="pl-2 pr-2">
            <StyledButton
              color="bg-button-primary-default"
              onClick={() => setModalState(AuthModalState.SIGNUP)}
            >
              Sign Up
            </StyledButton>
          </div>
        </div>
        <div className="pl-2 relative flex flex-grow items-stretch h-full">
          <div className="inline-block relative">
            <button className="inline-flex items-center justify-center select-none h-12 w-12 rounded-left-nav-bar bg-transparent text-text-input relative align-middle overflow-hidden whitespace-nowrap font-semibold text-button-text">
              <div className="w-8 h-8">
                <div className="inline-flex items-center w-full h-full">
                  <div className="relative w-full overflow-hidden">
                    <div className="pb-full"></div>
                    <svg
                      width="100%"
                      height="100%"
                      version="1.1"
                      viewBox="0 0 20 20"
                      x="0px"
                      y="0px"
                      className="absolute left-0 w-full min-h-full top-0 fill-current"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <AuthModalContainer
        modalState={modalState}
        setModalState={setModalState}
      />
    </div>
  );
};

export default RightNavbarNotAuthenticated;
