import React from "react";
import App from "next/app";
import { AuthProvider } from "../context/auth";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}
