import React from "react";
import Footer from "../Footer";

const Forms = () => {
  return (
    <>
      <div className="flex justify-between mx-10 mt-3">
        <div className="rounded-lg w-1/2 border bg-slate-100">
          <h1 className="bg-gray-200 p-2">Inline Form</h1>
          <form action="" className=" text-center p-3">
            <label className="text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Jane Deo"
              className="border-0 outline-none bg-white w-72 ms-5 p-2"
            />
            <br />
            <label className="text-gray-400">Password</label>
            <input
              type="text"
              placeholder="**************"
              className="border-0 outline-none bg-white w-72 ms-5 p-2 mt-5"
            />
            <br />
            <input type="checkbox" className="mt-5" />
            <label className="text-gray-400">Send me your newsletter!</label>
            <br />
            <button
              type="submit"
              className="bg-purple-400 hover:bg-purple-600 text-white p-1 px-2 rounded-lg mt-5"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="rounded-lg w-1/2 border bg-slate-100 ms-3">
          <h1 className="bg-gray-200 p-2">Undertline Form</h1>
          <form action="" className=" text-center p-3">
            <div className="flex border-teal-600 border-b-2 p-2">
              <input
                type="text"
                placeholder="Jane Deo"
                className="border-0 outline-none w-96 bg-slate-100"
              />
              <button className="bg-teal-500 p-1 px-2 rounded-md ms-10 text-white">
                Sign Up
              </button>
              <button className="ms-10">Cancel</button>
            </div>
            <div className="flex border-red-600 border-b-2 p-2">
              <input
                type="text"
                placeholder="Jane Deo"
                className="border-0 outline-none w-96 bg-slate-100"
              />
              <button className="bg-teal-500 p-1 px-2 rounded-md ms-10 text-white">
                Sign Up
              </button>
              <button className="ms-10">Cancel</button>
            </div>
            <div className="flex border-teal-600 border-b-2 p-2">
              <input
                type="text"
                placeholder="Jane Deo"
                className="border-0 outline-none w-96 bg-slate-100"
              />
              <button className="bg-teal-500 p-1 px-2 rounded-md ms-10 text-white">
                Sign Up
              </button>
              <button className="ms-10">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div className="border rounded-sm mx-10 mt-3 mb-3">
        <h1 className="bg-gray-200 p-2">Grid Form</h1>
        <div className="p-2 bg-slate-100">
          <div className="flex justify-between">
            <div className="w-full">
              <label className="text-slate-400">Frist Name</label>
              <br />
              <input
                type="text"
                placeholder="Jane"
                className="border border-red-400 p-1.5 rounded-md bg-gray-200 w-full"
              />
              <br />
              <p className="text-red-400 font-thin mt-2">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full ms-3">
              <label className="text-slate-400">Frist Name</label>
              <br />
              <input
                type="text"
                placeholder="Jane"
                className="borde p-1.5 rounded-md bg-gray-200 w-full"
              />
            </div>
          </div>
          <label className="mt-4 inline-block text-slate-400">Password</label>
          <br />
          <input
            type="text"
            placeholder="************"
            className="w-full p-2 border border-slate-300 outline-none"
          />
          <p className="mt-2 font-thin">
            Make it as long and as crazy as you'd like
          </p>
          <div className="flex justify-between">
            <div className="w-full">
              <label className="text-slate-400">CITY</label>
              <br />
              <input
                type="text"
                placeholder="Jane"
                className="border outline-none p-2 w-full"
              />
            </div>
            <div className="w-full ms-3">
              <label className="text-slate-400">State</label>
              <br />
              <input
                type="text"
                placeholder="Jane"
                className="border outline-none p-2 w-full"
              />
            </div>
            <div className="w-full ms-3">
              <label className="text-slate-400">ZIP</label>
              <br />
              <input
                type="text"
                placeholder="Jane"
                className="border outline-none p-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forms;
