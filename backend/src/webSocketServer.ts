import { Server as HttpServer } from "http";
import { RedisClient } from "redis";
import { Server } from "socket.io";
import { v4 as uuid } from "uuid";
import {
  CHAT_MESSAGE_EVENT,
  GET_STREAM_STATS,
  USER_JOIN_STREAM_CHANNEL,
} from "./../../common/socketIoEvents";

const getChannelRedisName = (channelName: string) => `${channelName}-USER_LIST`;

export const createIOServer = (
  server: HttpServer,
  corsOptions: { origin: string; credentials: boolean },
  redisClient: RedisClient,
  sessionMiddleware: any
) => {
  const io = new Server(server, { cors: corsOptions });

  io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
  });

  io.on("connection", (socket) => {
    const signedIn = !!socket.handshake.query.user;
    const username = socket.handshake.query.user as string;
    console.log(`${username} with socket id: ${socket.id} connected`);

    const userSocketChannelInfo = signedIn
      ? { socketId: socket.id, username, channel: "" }
      : null;

    socket.on("disconnect", async () => {
      if (signedIn) {
        console.log(
          `${userSocketChannelInfo?.username} disconnected from ${userSocketChannelInfo?.channel} channel with socket id: ${socket.id}`
        );

        redisClient.zrem(
          getChannelRedisName(userSocketChannelInfo!.channel),
          userSocketChannelInfo!.username
        );
      } else {
        console.log(
          `Unsigned in user with socket id: ${socket.id} disconnected`
        );
      }
    });

    socket.on(CHAT_MESSAGE_EVENT, ({ channel, ...data }) => {
      io.to(channel).emit(CHAT_MESSAGE_EVENT, {
        ...data,
        timestamp: Date.now(),
        id: uuid(),
      });
    });

    socket.on(USER_JOIN_STREAM_CHANNEL, (userChannel) => {
      const redisChannelUserListKey = getChannelRedisName(userChannel);
      console.log(`${username} has joined ${userChannel} chat`);
      if (userSocketChannelInfo) {
        userSocketChannelInfo.channel = userChannel;
      }
      socket.join(userChannel);
      redisClient.zadd(redisChannelUserListKey, 0, username);
    });

    socket.on(GET_STREAM_STATS, (channelName, callback) => {
      const redisChannelName = getChannelRedisName(channelName);

      redisClient
        .multi()
        .zrange(redisChannelName, 0, -1)
        .zcard(redisChannelName)
        .exec((err, [viewerList, viewerCount]) => {
          if (err) {
            console.log(err);
          } else {
            callback({
              viewerList,
              viewerCount,
            });
            console.log(viewerList);
          }
        });
    });
  });
};
