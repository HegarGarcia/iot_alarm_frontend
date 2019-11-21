import React from "react";
import App from "next/app";
import UserContext from "../components/TokenContext";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
