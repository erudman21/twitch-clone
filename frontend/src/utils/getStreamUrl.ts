export enum StreamType {
  RTMP,
  HTTP_FLV,
  WS_FLV,
  HLS,
  DASH,
}

export const getStreamUrl = (type: StreamType, name: string) => {
  switch (type) {
    case StreamType.RTMP:
      return `rtmp://localhost/live/${name}`;
    case StreamType.HTTP_FLV:
      return `http://localhost:8000/live/${name}.flv`;
    case StreamType.WS_FLV:
      return `ws://localhost:8000/live/${name}.flv`;
    case StreamType.HLS:
      return `http://localhost:8000/live/${name}/index.m3u8`;
    case StreamType.DASH:
      return `http://localhost:8000/live/${name}/index.mpd`;
    default:
      console.log("Invalid stream type or name");
      return "";
  }
};
