import React, { createContext, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import cookie from "js-cookie";
import fetch from "isomorphic-fetch";

export const AuthContext = createContext({
  token: "",
  signInWithEmailAndPassword: () => {},
  signInWithToken: () => {},
  signUpWithEmailAndPassword: () => {},
  signOut: () => {},
  isValidToken: () => false
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  const signInWithToken = storedToken => {
    setToken(storedToken);
    cookie.set("token", storedToken, { expires: 1 });
    Router.push("/");
  };

  const signInWithEmailAndPassword = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/signin", {
      method: "post",
      body: JSON.stringify({ email, password })
    });
    const newToken = await response.json();
    signInWithToken(newToken);
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "post",
      body: JSON.stringify({ email, password })
    });
    const newToken = await response.json();
    signInWithToken(newToken);
  };

  const signOut = () => {
    setToken("");
    cookie.remove("token");
    window.localStorage.setItem("logout", Date.now());
    Router.push("/signin");
  };

  const isValidToken = storedToken => storedToken.length > 0;

  return (
    <AuthContext.Provider
      value={{
        token,
        signInWithEmailAndPassword,
        signInWithToken,
        signUpWithEmailAndPassword,
        signOut,
        isValidToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
