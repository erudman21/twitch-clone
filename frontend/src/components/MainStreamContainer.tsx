import React, { useEffect, useRef, useState } from "react";
import ChannelInfoContainer from "./ChannelInfo/ChannelInfoContainer";
import Stream from "./Stream/Stream";

interface MSCProps {
  channel: string | string[] | undefined;
  viewerList: string[];
  viewerCount: number;
}

const MainStreamContainer: React.FC<MSCProps> = ({ channel, viewerCount }) => {
  const streamContainerRef = useRef();
  const [streamHeight, setStreamHeight] = useState();

  useEffect(() => {
    setStreamHeight((streamContainerRef!.current! as any).clientHeight);

    window.addEventListener("resize", () => {
      setStreamHeight((streamContainerRef!.current! as any).clientHeight);
    });
  }, []);

  return (
    <div className="flex w-full h-full relative overflow-hidden flex-grow-1">
      <div className="flex h-full w-full">
        <Stream streamContainerRef={streamContainerRef} />
        <ChannelInfoContainer
          streamHeight={streamHeight}
          viewerCount={viewerCount}
        />
      </div>
    </div>
  );
};
export default MainStreamContainer;
