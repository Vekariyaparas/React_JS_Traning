import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem('login', 'true');
    setLoggedIn(true);
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'true') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <h1>Login Page</h1>
      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
