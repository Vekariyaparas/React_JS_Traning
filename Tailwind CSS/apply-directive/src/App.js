import React from "react";

const App = () => {
  return (
    <div>
      <form className="form">
        <h1 className="text-blue-400 text-lg">Login Form</h1>
        <input type="text" placeholder="Frist Name"  className="inp"/><br />
        <input type="text" placeholder="Last Name" className="inp"/><br />
        <input type="text" placeholder="Username" className="inp"/><br />
        <input type="text" placeholder="Password" className="inp"/><br />
        <input type="text" placeholder="Phone" className="inp"/><br />
        <button className="btn" type="submit">Login</button>
        <button className="btn ms-3" type="reset">Reset</button>
      </form>
    </div>
  );
};

export default App;
