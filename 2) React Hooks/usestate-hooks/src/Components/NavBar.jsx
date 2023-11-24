import React from "react";

const NavBar = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light p-0"
        style={props.style}
      >
        <div className="container-fluid" style={props.style}>
          <a className="navbar-brand" href="#" style={props.style}>
            Navbar
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={props.style}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={props.style}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={props.style}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" style={props.style}>
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
