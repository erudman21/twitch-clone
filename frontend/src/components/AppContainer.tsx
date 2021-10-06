import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { SocketContext } from "../context/socketContext";
import { useMeQuery } from "../generated/graphql";
import Navbar from "./Navbar/Navbar";
import SideNav from "./SideNavbar/SideNav";

const AppContainer = ({ appProps }: { appProps: AppProps }) => {
  const { Component, pageProps } = appProps;

  const [socket, setSocket] = useState<Socket | null>(null);
  const { data } = useMeQuery({
    onCompleted: (data) => {
      const currentUsername = data?.me?.username || "";

      setSocket(
        io("ws://localhost:4000", {
          withCredentials: true,
          query: {
            user: currentUsername,
          },
        })
      );
    },
  });

  return (
    <SocketContext.Provider value={socket}>
      <div className="overflow-hidden flex flex-col flex-nowrap absolute inset-0 h-full">
        <Navbar />
        <div className="flex flex-nowrap relative overflow-hidden h-full">
          <SideNav />
          <Component {...pageProps} />
        </div>
      </div>
    </SocketContext.Provider>
  );
};

export default AppContainer;
