import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Paras", password: "paras123" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  useEffect(() => {
    localStorage.clear();
  })
  return (
    <div>
      <form onSubmit={handleSubmit} className="border w-1/4 text-center mx-auto mt-10 p-3">
        <h1>Login Form</h1>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          className="border outline-none p-1 rounded-lg mt-5"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          className="border outline-none p-1 rounded-lg mt-5"
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <input type="submit" value="Submit" className="border p-1 px-2 mt-5 bg-blue-600 text-white rounded-lg"/>
      </form>
    </div>
  );
};

export default Login;
