import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <h1 className="p-8 text-lg">
        This is <span className="text-sky-700 font-bold">Home</span> page
      </h1>
    </>
  );
};

export default Home;
