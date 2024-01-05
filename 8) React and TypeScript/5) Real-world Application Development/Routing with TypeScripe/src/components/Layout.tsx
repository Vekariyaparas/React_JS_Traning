import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <nav className="bg-slate-400 text-white flex">
        <div className="px-10">
          <Link to="/" className="text-2xl">
            NabBar
          </Link>
        </div>
        <div className="">
          <ul className="mx-96 flex py-1">
            <li className="px-5">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5">
              <Link to="addTask">Add Task</Link>
            </li>
            <li className="px-5">
              <Link to="listTask">List of Task</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
