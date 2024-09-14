/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let token = "";
  try {
    token = JSON.parse(localStorage.getItem("token"));
  } catch (error) {
    token = "";
  }

  const [authenticationData, setAuthenticationData] = React.useState(
    token || ""
  );

  const saveAuthenticationData = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthenticationData(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticationData("");
  };

  return (
    <AuthContext.Provider
      value={{ authenticationData, saveAuthenticationData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
