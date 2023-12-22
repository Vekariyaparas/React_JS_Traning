import React from "react";

const Uicompo = () => {
  return (
    <>
      <div className="flex justify-between mx-10 mt-3">
        <div className="w-full">
          <h1 className="bg-gray-100 py-2 p-2 rounded-t-lg">Miscellaneous</h1>
          <div className="p-3 text-center  border rounded-b-lg">
            <div className="flex justify-between bg-red-300 p-2 rounded-lg text-red-700">
              <p>
                <span className="font-bold">Oops!</span> This is an Error alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
            <div className="flex justify-between bg-green-300 p-2 rounded-lg mt-3 text-green-700">
              <p>
                <span className="font-bold">Oops!</span> This is an Error alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
            <div className="flex justify-between bg-orange-300 p-2 rounded-lg mt-3 text-orange-700">
              <p>
                <span className="font-bold">Oops!</span> This is an Error alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
            <div className="flex justify-between p-2 mt-3 text-blue-500 border">
              <p>
                <span className="font-bold">&#8520;</span> This is an Error
                alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
            <div className="flex justify-between bg-blue-500 p-2 border mt-3 text-white">
              <p>
                <span className="font-bold">&#8520;</span> This is an Error
                alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
            <div className="flex justify-between bg-green-500 p-2 border mt-3 text-white">
              <p>
                <span className="font-bold">&#8520;</span> This is an Error
                alert.
              </p>
              <p className="bi bi-x"></p>
            </div>
          </div>
        </div>
        <div className="w-full ms-3">
          <h1 className="bg-gray-50 py-2 p-2 rounded-t-lg border border-b-0">
            Miscellaneous
          </h1>
          <div className="p-3  border rounded-b-lg">
            <div className="bg-orange-300 p-2 border-s-4 border-orange-500">
              <p className="text-orange-800 font-bold">Be Warned</p>
              <p className="text-orange-900">
                Something not ideal might be happening.
              </p>
            </div>
            <div className="bg-red-300 mt-2 rounded-lg">
              <p className="text-white bg-red-500 font-bold p-2 rounded-t-lg">
                Danger
              </p>
              <p className="text-orange-900 p-2">
                Something not ideal might be happening.
              </p>
            </div>
            <div className="bg-teal-300 p-2 border-t-4 border-teal-500 mt-2 rounded-b-lg">
              <p className="text-teal-800 font-bold">Be Warned</p>
              <p className="text-teal-900">
                Something not ideal might be happening.
              </p>
            </div>
            <div className="bg-blue-300 p-2 border-t-2 border-b-2 border-blue-500 mt-3">
              <p className="text-blue-800 font-bold">Be Warned</p>
              <p className="text-blue-900">
                Something not ideal might be happening.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-96 mt-3 text-center mx-auto">
        <h1 className="p-2 bg-slate-100">Cards</h1>
        <div className="shadow w-80 px-6 p-2 m-3">
          <div className="card-title">
            <p className="font-bold">Card Title</p>
          </div>
          <div className="card-body mt-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="card-footer mt-3 pb-5">
            <span className="bg-slate-100 rounded-full p-1">#photography</span>
            <span className="bg-slate-100 rounded-full p-1 ms-2">#travel</span>
            <span className="bg-slate-100 rounded-full p-1 ms-2">#winter</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uicompo;
