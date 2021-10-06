import React, {
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  CHAT_MESSAGE_EVENT,
  CONNECTION_EVENT,
} from "../../../../common/socketIoEvents";
import { SocketContext } from "../../context/socketContext";
import { useMeQuery } from "../../generated/graphql";
import ChatMessage from "./ChatMessage";
import { ChatMessageType } from "./ChatMessageType";
import { v4 as uuid } from "uuid";

interface CMCProps {
  channel: string | string[] | undefined;
}

const ChatMessagesContainer: React.FC<CMCProps> = ({ channel }) => {
  const [chatMessage, setChatMessage] = useState("");
  const [allMessages, setAllMessages] = useState<ChatMessageType[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { data } = useMeQuery();
  const socket = useContext(SocketContext);

  const sendWSMessage = () => {
    if (chatMessage) {
      socket?.emit(CHAT_MESSAGE_EVENT, {
        channel,
        user: data?.me?.username,
        message: chatMessage,
        messageColor: data?.me?.color,
      });
      setChatMessage("");
    }
  };

  const submitWithEnter = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      e.preventDefault();
      sendWSMessage();
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  useEffect(() => {
    const welcomeMessage = { message: "Welcome to the chat room!", id: uuid() };

    socket?.on(CONNECTION_EVENT, () => {
      setAllMessages([welcomeMessage]);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on(CHAT_MESSAGE_EVENT, (incomingMessage) => {
      setAllMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });
  }, [socket]);

  return (
    <div className="leading-8 flex flex-col flex-grow overflow-hidden">
      <div className="relative flex flex-col overflow-y-auto flex-grow">
        {allMessages.map((message) => {
          return <ChatMessage key={message.id} message={message} />;
        })}
        <div ref={scrollRef}></div>
      </div>
      <div className="px-4 py-4">
        <textarea
          disabled={!data?.me}
          rows={1}
          aria-label="Send a message"
          placeholder="Send a message"
          className="text-area-input-default rounded-left-nav-bar resize-none w-full h-chat-input leading-6 text-button-text py-4 px-3 font-semibold max-h-40 overflow-y-auto"
          maxLength={500}
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={submitWithEnter}
        />
        <button
          onClick={sendWSMessage}
          disabled={!data?.me || !chatMessage}
          className={`w-full button-default relative flex mt-2 ${
            !!chatMessage ? "button-default-enabled" : "button-default-disabled"
          }`}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ChatMessagesContainer;
