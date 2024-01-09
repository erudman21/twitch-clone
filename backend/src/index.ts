import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import "dotenv";
import express from "express";
import session from "express-session";
import { createServer } from "http";
import redis from "redis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE_NAME, __prod__ } from "./constants";
import { FollowResolver } from "./resolvers/follow";
import { UserResolver } from "./resolvers/user";
import { nmsConfig } from "./stream/nmsConfig";
import { createIOServer } from "./webSocketServer";
// @ts-ignore
import NodeMediaServer from "node-media-server";

const port = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const main = async () => {
  const conn = await createConnection();
  const app = express();
  const httpServer = createServer(app);
  const redisClient = redis.createClient();
  const RedisStore = connectRedis(session);
  conn.runMigrations();

  const sessionMiddleware = session({
    name: COOKIE_NAME,
    secret: "asdksjdfbnsdjkfbsdfkljsdbfsd",
    store: new RedisStore({ client: redisClient, disableTouch: true }),
    cookie: {
      // 1 week
      maxAge: 604800000,
      sameSite: "lax",
      httpOnly: true,
      secure: __prod__,
    },
    resave: false,
    saveUninitialized: false,
  });

  app.use(cors(corsOptions));
  app.use(sessionMiddleware);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, FollowResolver],
    }),
    context: async ({ req, res }) => {
      return {
        req,
        res,
        redisClient,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  const nms = new NodeMediaServer(nmsConfig);
  nms.run();

  createIOServer(httpServer, corsOptions, redisClient, sessionMiddleware);

  httpServer.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
};

main().catch((err) => console.log(err));
