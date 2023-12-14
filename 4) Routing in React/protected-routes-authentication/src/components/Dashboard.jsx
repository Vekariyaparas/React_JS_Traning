import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return navigate("/login");
  }

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="p-2">
      <h1>
        Welcome Your Dashboard
      </h1>
        <button onClick={logout} className="border mt-3 p-1 px-2 rounded-lg bg-gray-400">LogOut</button>
    </div>
  );
};

export default Dashboard;
