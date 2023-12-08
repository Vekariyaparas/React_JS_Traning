import React from "react";
import NavBar from "./NavBar";
import UserProfile from './UserProfile'
import Context from './Context'

const Main = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Context />
    </div>
  );
};

export default Main;
