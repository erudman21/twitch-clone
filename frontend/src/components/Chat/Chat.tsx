import React, { useContext, useEffect, useState } from "react";
import { GET_STREAM_STATS } from "../../../../common/socketIoEvents";
import { SocketContext } from "../../context/socketContext";
import ChatHeader from "./ChatHeader";
import ChatMessagesContainer from "./ChatMessagesContainer";
import UserListContainer from "./UserListContainer";

interface ChatProps {
  channel: string | string[] | undefined;
  viewerList: string[];
  viewerCount: number;
}

const Chat: React.FC<ChatProps> = ({ channel, viewerList, viewerCount }) => {
  const [showUserList, setShowUserList] = useState(false);

  return (
    <div className="w-content">
      <div className="h-full relative block flex-shrink-0">
        <div className="relative flex-grow-0 flex-shrink-0 h-full block">
          <div className="bg-nav-gray w-chat absolute h-full flex flex-col z-1 transform transition duration-500 delay-0 ease-in-out translate-x-chat translate-y-0">
            <div className="flex flex-col flex-nowrap flex-grow-0 flex-shrink-0 h-full border-l-1 border-solid border-nav-divider z-10">
              <div className="min-w-chat h-full">
                <div className="flex flex-col h-full">
                  <div className="min-h-0 w-full h-full flex flex-col flex-nowrap flex-grow relative">
                    <ChatHeader
                      showUserList={showUserList}
                      setShowUserList={setShowUserList}
                    />
                    <div className="bg-nav-gray h-full min-h-0 flex-shrink flex-grow flex flex-col w-full">
                      <div className="flex flex-col flex-nowrap relative flex-grow h-full text-text-input">
                        <ChatMessagesContainer channel={channel} />
                        {showUserList && (
                          <UserListContainer
                            setShowUserList={setShowUserList}
                            viewerList={viewerList}
                            viewerCount={viewerCount}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
