import React, { Dispatch, MutableRefObject, useState } from "react";
import IndividualUser from "./IndividualUser";

interface ULCProps {
  setShowUserList: Dispatch<React.SetStateAction<boolean>>;
  viewerList: string[];
  viewerCount: number;
}

const UserListContainer: React.FC<ULCProps> = ({
  setShowUserList,
  viewerList,
  viewerCount,
}) => {
  const [usersFilter, setUsersFilter] = useState("");

  return (
    <div className="absolute inset-0 z-10">
      <div className="block w-full h-full flex-shrink-0 z-10 bg-users-chat-background">
        <div className="top-0">
          <div className="border-solid border-b-1 border-nav-divider flex w-full h-20 px-4 flex-shrink-0 justify-center items-center text-center bg-side-nav-bar">
            <div className="absolute left-0 ml-4 fill-current">
              <button
                className="icon-button-default"
                onClick={(e) => setShowUserList(false)}
              >
                <svg
                  version="1.1"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                  className="w-8 h-8"
                >
                  <g>
                    <path d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <h2 className="justify-center uppercase font-semibold tracking-wide">
              Users in chat
            </h2>
          </div>
          <div className="w-full h-full">
            <div className="px-8 py-4">
              <input
                className="w-full h-12 text-area-input-default rounded-left-nav-bar px-4 font-medium"
                placeholder="Filter"
                value={usersFilter}
                onChange={(e) => setUsersFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="px-8">
            <div className="text-gray-300 font-semibold">Users</div>
            {viewerList
              ?.filter((user) => user.includes(usersFilter))
              .map((user) => {
                return <IndividualUser key={user} user={user} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListContainer;
