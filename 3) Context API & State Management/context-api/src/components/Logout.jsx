import React from "react";
import { useAuth } from "./AuthContext";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <>
      <h2>Log Out</h2>
      <button onClick={logout}>Log Out</button>
    </>
  );
};

export default Logout;
