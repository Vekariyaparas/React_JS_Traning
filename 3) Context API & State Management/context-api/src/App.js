import React from "react";
import { useAuth } from "./components/AuthContext";
import Logout from "./components/Logout";
import Login from "./components/Login";

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <h1>Authentication App</h1>
      {isLoggedIn ? <Logout /> : <Login />}
    </>
  );
};

export default App;
