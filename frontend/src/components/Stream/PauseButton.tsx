import { Dispatch, MouseEvent, SetStateAction } from "react";

interface PBProps {
  videoRef: HTMLVideoElement | null;
  isPaused: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
}

const PauseButton: React.FC<PBProps> = ({
  videoRef,
  isPaused,
  setIsPaused,
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isPaused) {
      videoRef?.pause();
    } else {
      videoRef?.play();
    }
    setIsPaused(!isPaused);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center select-none h-default-button-height w-default-button-width border-solid border-1 bg-transparent border-transparent text-light-gray relative align-middle whitespace-nowrap font-semibold rounded-left-nav-bar text-button-text hover:bg-nav-dots-background-hover"
    >
      <div className="w-8 h-8">
        <div className="inline-flex items-center h-full w-full">
          <div className="relative w-full overflow-hidden">
            <div className="pb-full"></div>
            {isPaused ? (
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
                  <path d="M5 17.066V2.934a.5.5 0 01.777-.416L17 10 5.777 17.482A.5.5 0 015 17.066z"></path>
                </g>
              </svg>
            ) : (
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
                  <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"></path>
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default PauseButton;
