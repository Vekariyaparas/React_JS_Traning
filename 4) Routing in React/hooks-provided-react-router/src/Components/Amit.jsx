import React from "react";
import { useNavigate } from "react-router-dom";

const Amit = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl p-5">
        This is <span className="text-slate-500">Amit</span> details page.
      </h1>
      <p>Name: Amit</p>
      <p>Email: amit1234@gmail.com</p>
      <p>Age: 22</p>
      <p>Bio: React JS Developer</p>
      <button onClick={() => navigate(-1)} className="mt-5 border p-1 bg-slate-100">Go Back</button>
    </div>
  );
};

export default Amit;
