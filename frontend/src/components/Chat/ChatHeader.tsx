import { Dispatch } from "react";

interface ChatHeaderProps {
  showUserList: boolean;
  setShowUserList: Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  showUserList,
  setShowUserList,
}) => {
  return (
    <div className="border-solid border-b-1 border-nav-divider flex w-full h-20 px-4 flex-shrink-0 justify-center items-center">
      <div className="fill-current absolute left-0 ml-4">
        <button className="icon-button-default has-tooltip">
          <svg
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            className="h-8 w-9"
          >
            <g>
              <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
            </g>
          </svg>
          <div className="tooltip -mb-28 ml-10">Collapse</div>
        </button>
      </div>
      <div className="flex items-center m-auto">
        <h2 className="justify-center uppercase font-semibold tracking-wide">
          Stream Chat
        </h2>
      </div>
      <div
        className="fill-current absolute right-0 mr-4"
        onClick={(e) => setShowUserList(!showUserList)}
      >
        <button className="icon-button-default has-tooltip">
          <svg
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            className="h-8 w-8"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z"
                clipRule="evenodd"
              ></path>
              <path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path>
            </g>
          </svg>
          <div className="tooltip whitespace-nowrap mr-20 -mb-28">
            Users in Chat
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
