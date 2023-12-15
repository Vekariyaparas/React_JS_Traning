import React from "react";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="flex justify-between p-28 mx-auto">
          <div className="left ms-24 mt-24">
            <div>
              <h1 className="text-blue-600 text-6xl font-bold">facebook</h1>
              <p className="font-semibold text-2xl mt-3">
                Facebook helps you connect and share <br /> with the people in
                your life.
              </p>
            </div>
          </div>
          <div className="p-4 text-center me-24">
            <form className="border-gray-900 rounded-lg p-4 bg-white shadow-md text-center">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="border p-3 rounded-lg w-96 outline-blue-400"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded-lg w-96 mt-4 outline-blue-400"
              />
              <br />
              <button className="border p-2 rounded-lg w-96 mt-4 bg-blue-600 text-white font-semibold text-2xl">Log in</button>
              <br />
              <button className="my-4 text-blue-600 hover:underline">Forgotten password?</button>
              <hr />
              <button className="border rounded-lg w-60 p-2 mt-4 bg-lime-600 text-white font-semibold text-xl">
                Create new account
              </button>
            </form>
            <p className="mt-6"><span className="font-semibold hover:cursor-pointer">Create a Page</span> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
