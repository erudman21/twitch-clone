import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { number } from "yup";
import {
  GET_STREAM_STATS,
  USER_JOIN_STREAM_CHANNEL,
} from "../../../common/socketIoEvents";
import Chat from "../components/Chat/Chat";
import MainStreamContainer from "../components/MainStreamContainer";
import { SocketContext } from "../context/socketContext";
import { useMeQuery } from "../generated/graphql";

interface StreamStatsResponse {
  viewerList: string[];
  viewerCount: number;
}

const UserStream = () => {
  const router = useRouter();
  const { user: channelName } = router.query;
  const { data } = useMeQuery();
  const [viewerList, setViewerList] = useState<string[]>([]);
  const [viewerCount, setViewerCount] = useState(0);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (channelName && data?.me) {
      socket?.emit(USER_JOIN_STREAM_CHANNEL, channelName);
    }
  }, [socket, channelName, data]);

  setInterval(() => {
    socket?.emit(
      GET_STREAM_STATS,
      channelName,
      ({ viewerList, viewerCount }: StreamStatsResponse) => {
        setViewerList(viewerList);
        setViewerCount(viewerCount);
      }
    );
  }, 300000);

  return (
    <>
      <MainStreamContainer
        channel={channelName}
        viewerList={viewerList}
        viewerCount={viewerCount}
      />
      <Chat
        channel={channelName}
        viewerList={viewerList}
        viewerCount={viewerCount}
      />
    </>
  );
};

export default UserStream;
