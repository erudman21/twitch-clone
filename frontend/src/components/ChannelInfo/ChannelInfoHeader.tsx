const ChannelInfoHeader = () => {
  return (
    <div className="flex">
      <div className="flex">channel info</div>
      <div className="flex flex-grow justify-end font-semibold">
        <button className="button-default bg-button-primary-default hover:bg-button-primary-hover p-4 flex">
          <svg
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            className="h-8 w-8 fill-current mr-2"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
          Follow
        </button>
        <button className="button-default flex bg-search-button hover:bg-nav-dots-background-hover p-4 ml-4">
          <svg
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            className="h-8 w-8 fill-current mr-2"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M11.456 8.255L10 5.125l-1.456 3.13-3.49.485 2.552 2.516-.616 3.485L10 13.064l3.01 1.677-.616-3.485 2.553-2.516-3.491-.485zM7.19 6.424l-4.2.583c-.932.13-1.318 1.209-.664 1.853l3.128 3.083-.755 4.272c-.163.92.876 1.603 1.722 1.132L10 15.354l3.579 1.993c.846.47 1.885-.212 1.722-1.132l-.755-4.272 3.128-3.083c.654-.644.268-1.723-.664-1.853l-4.2-.583-1.754-3.77c-.406-.872-1.706-.872-2.112 0L7.19 6.424z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelInfoHeader;
