import React from "react";
import App from "next/app";
import Router from "next/router";
import UserContext from "../components/UserContext";
import Registro from "./registro";
import Signin from "../pages/signin";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
