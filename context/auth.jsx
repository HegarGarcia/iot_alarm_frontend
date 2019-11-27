import React, { createContext, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import cookie from "js-cookie";

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

  const signInWithEmailAndPassword = () => {
    cookie.set("token", token, { expires: 1 });
    Router.push("/");
  };

  const signInWithToken = storedToken => setToken(storedToken);

  const signUpWithEmailAndPassword = (email, password) => {
    setToken(`${email}${password}`);
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
