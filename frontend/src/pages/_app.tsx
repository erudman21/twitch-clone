import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { io, Socket } from "socket.io-client";
import AppContainer from "../components/AppContainer";
import "../styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

Modal.setAppElement("#__next");

function MyApp(appProps: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppContainer appProps={appProps} />
    </ApolloProvider>
  );
}

export default MyApp;
