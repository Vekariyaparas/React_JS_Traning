import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="mx-10 mt-3 mb-3">
        <div className="flex justify-between">
          <div className="rounded-sm w-full border">
            <h1 className="bg-slate-100 py-2 p-2">Outline Buttons</h1>
            <div className="p-3 text-center">
              <button className="border p-2 px-5 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg text-green-400 hover:bg-green-400 hover:text-white font-semibold">
                Button
              </button>
              <button className="border border-orange-400 p-2 px-5 ms-4 rounded-lg text-black hover:bg-orange-400 hover:text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg text-red-400 hover:bg-red-400 hover:text-white font-semibold">
                Button
              </button>
            </div>
          </div>
          <div className="rounded-sm w-full border ms-3">
            <h1 className="bg-slate-100 py-2 p-2">Solid Buttons</h1>
            <div className="p-3 text-center">
              <button className="border p-2 px-5 rounded-lg bg-blue-400 hover:bg-blue-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg bg-green-400 hover:bg-green-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg bg-orange-400 hover:bg-orange-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg bg-red-400 hover:bg-red-600 text-white font-semibold">
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="rounded-sm w-full border">
            <h1 className="bg-slate-100 py-2 p-2">Buttons Styles</h1>
            <div className="p-3 text-center">
              <button className="border p-2 px-5 rounded-full bg-blue-400 hover:bg-blue-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-full bg-green-400 hover:bg-green-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-full bg-orange-400 hover:bg-orange-600 text-white font-semibold">
                Button
              </button>
              <button className="border p-2 px-5 ms-4 rounded-full bg-red-400 hover:bg-red-600 text-white font-semibold">
                Button
              </button>
            </div>
          </div>
          <div className="rounded-sm w-full border ms-3">
            <h1 className="bg-slate-100 py-2 p-2">Outline Buttons</h1>
            <div className="p-3 text-center">
              <button className="border-2 border-blue-600 p-2 px-5 rounded-lg bg-blue-400 hover:bg-blue-600 text-white font-semibold">
                Button
              </button>
              <button className="border-2 border-green-600 p-2 px-5 ms-4 rounded-lg bg-green-400 hover:bg-green-600 text-white font-semibold">
                Button
              </button>
              <button className="border-2 border-orange-600 p-2 px-5 ms-4 rounded-lg bg-orange-400 hover:bg-orange-600 text-white font-semibold">
                Button
              </button>
              <button className="border-2 border-red-600 p-2 px-5 ms-4 rounded-lg bg-red-400 hover:bg-red-600 text-white font-semibold">
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="rounded-sm w-full border">
            <h1 className="bg-slate-100 py-2 p-2">Button Groups</h1>
            <div className="p-3 text-center">
              <button className="p-2 px-3 rounded-s-lg font-bold bg-slate-100 hover:bg-slate-400">
                Prev
              </button>
              <button className="p-2 px-3 rounded-r-lg font-bold bg-slate-100 hover:bg-slate-400">
                Next
              </button>
              <button className="p-2 px-3 ms-4 rounded-s-lg font-bold bg-teal-200 hover:bg-teal-600 text-teal-900">
                Prev
              </button>
              <button className="p-2 px-3 rounded-r-lg font-bold bg-teal-200 hover:bg-teal-600  text-teal-900">
                Next
              </button>
              <button className="p-2 px-3 ms-4 rounded-s-lg font-bold bg-red-100 hover:bg-red-500 text-red-900">
                Prev
              </button>
              <button className="p-2 px-3 rounded-r-lg font-bold bg-red-100 hover:bg-red-500 text-red-900">
                Next
              </button>
            </div>
          </div>
          <div className="rounded-sm w-full border ms-3">
            <h1 className="bg-gray-50 py-2 p-2">Miscellaneous</h1>
            <div className="p-3 text-center">
              <button className="border-b-4 border-blue-800 text-white p-2 px-5 rounded-lg font-bold bg-blue-600 hover:bg-blue-300">
                3D Button
              </button>
              <button className="border-2 border-black p-2 px-5 ms-4 rounded-lg hover:bg-slate-400">
                Elevated Button
              </button>
              <button className="p-2 px-5 ms-4 rounded-lg bg-slate-100 hover:bg-slate-400">
                Download
              </button>
              <button className="border p-2 px-5 ms-4 rounded-lg bg-blue-200 hover:cursor-not-allowed">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
