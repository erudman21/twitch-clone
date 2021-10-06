import React from "react";
import ChannelInfoHeader from "./ChannelInfoHeader";

interface CICProps {
  streamHeight: any;
  viewerCount: number;
}

const ChannelInfoContainer: React.FC<CICProps> = ({
  streamHeight,
  viewerCount,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="absolute w-stream max-h-stream"></div>
      <div
        style={{ marginTop: streamHeight }}
        className="relative w-full bg-background-body border-t-1 border-solid border-nav-divider"
      >
        <div className="w-stream">
          <div className="m-4">
            <ChannelInfoHeader />
            INFO
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfoContainer;
