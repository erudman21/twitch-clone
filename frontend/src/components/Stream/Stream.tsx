import React, { Ref, useEffect, useRef, useState } from "react";
import shaka from "shaka-player/dist/shaka-player.compiled";
import { getStreamUrl, StreamType } from "../../utils/getStreamUrl";
import PauseButton from "./PauseButton";

const initPlayer = async () => {
  const video = document.getElementById("stream-player") as HTMLMediaElement;
  const player = new shaka.Player(video);

  player.addEventListener("error", (err) => {
    console.log(err);
  });

  try {
    await player.load(getStreamUrl(StreamType.DASH, "test"));
  } catch (e) {
    console.error("Error code", e, "object", e);
  }
};

const Stream: React.FC<{ streamContainerRef: any }> = ({
  streamContainerRef,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
      initPlayer();
    } else {
      console.error("Browser not supported!");
    }
  }, []);

  return (
    <div
      ref={streamContainerRef}
      className="top-0 left-0 absolute h-auto scale-100 max-h-stream overflow-hidden w-stream bg-black"
    >
      <div className="relative w-full overflow-hidden">
        <div className="pb-56.25"></div>
        <div className="absolute left-0 w-full min-h-full top-0">
          <div className="max-h-stream overflow-hidden absolute inset-0">
            <video
              controls
              ref={videoRef}
              playsInline
              autoPlay
              id="stream-player"
              className="w-full h-full absolute"
            ></video>
            <div className="absolute flex flex-col items-stretch overflow-hidden bottom-0 w-full">
              <div className="flex mb-4 mx-4">
                <div className="flex-grow flex items-center justify-start">
                  <div className="inline-flex relative">
                    {/* <PauseButton
                      videoRef={videoRef.current}
                      isPaused={isPaused}
                      setIsPaused={setIsPaused}
                    /> */}
                  </div>
                </div>
                <div className="relative flex-grow flex items-center justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
