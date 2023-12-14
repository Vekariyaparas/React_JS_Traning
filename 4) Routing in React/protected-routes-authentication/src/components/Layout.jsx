import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-slate-400 text-white flex">
        <div className="px-10">
          <Link to="/" className="text-2xl">NabBar</Link>
        </div>
        <div className="">
          <ul className="mx-96 flex py-1">
            <li className="px-5">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5">
              <Link to="/about">About</Link>
            </li>
            <li className="px-5">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="px-5">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-5">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
