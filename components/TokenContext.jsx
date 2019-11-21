import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TokenContext = createContext({
  token: null,
  setUser: null
});

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default TokenContext;
