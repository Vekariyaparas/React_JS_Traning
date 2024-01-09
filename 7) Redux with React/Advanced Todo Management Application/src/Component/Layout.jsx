import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-slate-300">
        <ul className="flex space-x-4 justify-end px-10 p-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/filter">Filter</Link>
          </li>
          <li>
            <Link to="/crud">Crud</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 
    </div>
  );
};

export default Layout;
