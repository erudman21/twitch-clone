import { ChatMessageType } from "./ChatMessageType";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className="px-4 py-2">
      {message.user ? (
        <div className="flex flex-wrap">
          <div className={`font-extrabold text-user-${message.messageColor}`}>
            {message.user}
          </div>
          <span className="pr-2">:</span>
          <div>{message.message}</div>
        </div>
      ) : (
        <div className="text-search-button-disabled">{message.message}</div>
      )}
    </div>
  );
};

export default ChatMessage;
