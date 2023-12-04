import React from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={login}>Log in</button>
    </>
  );
};

export default Login;
