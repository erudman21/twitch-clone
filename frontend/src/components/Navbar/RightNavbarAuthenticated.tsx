import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { User } from "../../generated/graphql";
import avatar from "../../media/avatar.png";
import AccountModal from "../AccountModal/AccountModal";

interface RNAProps {
  user: User;
}

const RightNavbarAuthenticated: React.FC<RNAProps> = ({ user }) => {
  const categories = [
    {
      name: "Notifications",
      icon: <AiOutlineInbox className="w-8 h-8" />,
    },
    { name: "Whispers", icon: <BiMessageAlt className="w-8 h-8" /> },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {categories.map((category) => {
        return (
          <div
            key={category.name}
            className="flex-grow-0 flex-shrink-0 ml-2 mr-2 self-center flex-nowrap"
          >
            <div className="relative">
              <div className="inline-block relative">
                <div className="inline-flex">
                  <button className="inline-flex items-center justify-center select-none h-12 w-12 rounded-left-nav-bar text-text-input bg-transparent relative align-middle overflow-hidden whitespace-nowrap font-semibold text-button-text hover:bg-nav-dots-background-hover">
                    <div className="inline-flex items-center h-full">
                      <div className="relative overflow-hidden">
                        {category.icon}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex-grow-0 flex-shrink-0 ml-2 mr-2 self-center flex-nowrap">
        <div className="flex">
          <div className="inline-block relative">
            <button className="inline-flex relative items-center justify-center overflow-hidden whitespace-nowrap select-none font-semibold rounded-left-nav-bar text-button-text h-12 bg-search-button text-text-input">
              <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-3 pr-4">
                <div className="mr-2 flex items-center">
                  <div className="flex items-center w-8">
                    <div className="inline-flex items-center h-full w-full">
                      <div className="relative w-full overflow-hidden">
                        <div className="pb-full">
                          <svg
                            className="absolute fill-current"
                            width="100%"
                            height="100%"
                            version="1.1"
                            viewBox="0 0 20 20"
                            x="0px"
                            y="0px"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-0 flex items-center justify-start">
                  Get Bits
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full pt-4 pb-4 mr-4 flex">
        <div className="flex-nowrap flex">
          <div className="pl-2 relative flex flew-grow items-stretch h-full">
            <div className="relative inline-block">
              <button onClick={() => setModalIsOpen(!modalIsOpen)}>
                <div className="bg-nav-gray">
                  <figure className="relative w-12 h-12 block">
                    <Image
                      src={avatar}
                      alt="User Avatar"
                      className="block h-full rounded-user-avatar border-none max-w-full align-top"
                    />
                  </figure>
                </div>
                <AccountModal
                  modalIsOpen={modalIsOpen}
                  setModalIsOpen={setModalIsOpen}
                  user={user}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNavbarAuthenticated;
