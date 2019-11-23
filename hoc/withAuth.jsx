import React, { useEffect, useContext } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import PropTypes from "prop-types";
import { AuthContext } from "../context/auth";

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (!token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/signin" });
      ctx.res.end();
    } else {
      Router.push("/signin");
    }
  }

  return token;
};

export const withAuth = WrappedComponent => {
  const Wrapper = ({ token, ...props }) => {
    const { signInWithToken, isValidToken } = useContext(AuthContext);

    if (token && isValidToken(token)) {
      signInWithToken(token);
    }

    const onSignOut = event => {
      if (event.key === "logout") {
        Router.push("/signin");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", onSignOut);

      return () => {
        window.removeEventListener("storage", onSignOut);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.propTypes = {
    token: PropTypes.string.isRequired
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};
