import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-slate-800 mx-10 text-white font-semibold flex justify-between p-2">
        <div className="logo">
          <Link to="/">Tailwind</Link>
        </div>
        <div className="features">
          <div>
            <ul className="flex space-x-7">
              <li>
                <Link to="form">Forms</Link>
              </li>
              <li>
                <Link to="buttons">Buttons</Link>
              </li>
              <li>
                <Link to="table">Table</Link>
              </li>
              <li>
                <Link to="ui-component">Ui Components</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
