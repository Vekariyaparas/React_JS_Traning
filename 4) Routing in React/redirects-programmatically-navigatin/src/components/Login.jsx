import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = true;

    if (isAuthenticated) {
      alert("LoggedIn successfuly");
      navigate(`/profile/${username}`);
    } else {
    }
  };

  return (
    <div>
      <form
        action=""
        className="w-96 border text-center mx-auto mt-10 p-5 bg-slate-300 rounded-md"
      >
        <h1 className="text-3xl text-blue-500">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="border outline-none mt-3 p-1 rounded"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="border outline-none mt-3 p-1 rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button
          onClick={handleLogin}
          className="mt-3 border  px-2 p-1 text-white bg-green-600 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
