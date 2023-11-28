import React, { useEffect, useRef } from "react";

const InputAutoFoucs = () => {
  const user = useRef(null);

  useEffect(() => {
    user.current.focus();
  }, []);

  return (
    <>
      <div className="container">
        <form action="" className="w-50 mx-auto p-5 form-control mt-5">
          <h2 className="mb-3 text-center">Login Form</h2>
          <input
            className="form-control form-control my-3"
            type="text"
            name="username"
            ref={user}
            placeholder="Username"
            aria-label=".form-control-lg example"
          />
          <input
            className="form-control my-3"
            type="email"
            placeholder="Email"
            aria-label="default input example"
          />
          <input
            className="form-control my-3"
            type="password"
            placeholder="Password"
            aria-label=".form-control-sm example"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default InputAutoFoucs;
