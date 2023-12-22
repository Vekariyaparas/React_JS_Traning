import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="flex justify-between py-5 mx-10">
        <div className="p-5 font-bold text-white bg-red-500 border-s-8 border-red-700 hover:bg-red-700 w-72 rounded-md shadow-lg">
          <h1>$244</h1>
          <p>Total Sales</p>
        </div>
        <div className="p-5 font-bold text-white bg-blue-500 border-s-8 border-blue-700 hover:bg-blue-700 w-72 rounded-md shadow-lg">
          <h1>$199.4</h1>
          <p>Total Cost</p>
        </div>
        <div className="p-5 font-bold text-white bg-orange-500 border-s-8 border-orange-700 hover:bg-orange-700 w-72 rounded-md shadow-lg">
          <h1>900</h1>
          <p>Total Users</p>
        </div>
        <div className="p-5 font-bold text-white bg-green-500 border-s-8 border-green-700 hover:bg-green-700 w-72 rounded-md shadow-lg">
          <h1>500</h1>
          <p>Total Products</p>
        </div>
      </div>
      <div className="border rounded-md mx-10 shadow-lg">
        <h2 className="font-extrabold text-2xl p-3">Trending Categories</h2>
        <table className="text-center">
          <thead className="">
            <tr className="bg-slate-400 text-white">
              <th className="p-3">#</th>
              <th className="p-3">Item</th>
              <th className="p-3">Last</th>
              <th className="p-3">Current</th>
              <th className="p-3">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="w-52 p-4">1</td>
              <td className="w-96">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-2xl text-white p-1 px-2">
                  Twitter
                </button>
              </td>
              <td className="w-52">4500</td>
              <td className="w-52">4600</td>
              <td className="w-96">
                <span className="text-green-600">
                  <span className="font-extrabold">&#8593;</span>5%
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="w-52 p-4">2</td>
              <td className="w-96">
                <button className="bg-teal-400 hover:bg-teal-600 rounded-2xl text-white p-1 px-2">
                  Facebook
                </button>
              </td>
              <td className="w-52">10000</td>
              <td className="w-52">3000</td>
              <td className="w-96">
                <span className="text-red-600">
                  <span className="font-extrabold">&#8595;</span>65%
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="w-52 p-4">3</td>
              <td className="w-96">
                <button className="bg-green-400 hover:bg-green-600 rounded-2xl text-white p-1 px-2">
                  Amazon
                </button>
              </td>
              <td className="w-52">10000</td>
              <td className="w-52">3000</td>
              <td className="w-96">
                <span className="text-red-600">
                  <span className="font-extrabold">&#8595;</span>65%
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="w-52 p-4">4</td>
              <td className="w-96">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-2xl text-white p-1 px-2">
                  Microsoft
                </button>
              </td>
              <td className="w-52">10000</td>
              <td className="w-52">3000</td>
              <td className="w-96">
                <span className="text-green-600">
                  <span className="font-extrabold">&#8593;</span>65%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border mx-10 shadow mt-4">
        <h1 className="font-bold text-2xl p-3">Progress Among Projects</h1>
        <div className="bg-gray-200">
          <div className="w-64 bg-blue-500 text-center text-white">64%</div>
        </div>
        <div className="bg-gray-200 mt-3">
          <div className="w-72 bg-teal-500 text-center text-white">72%</div>
        </div>
        <div className="bg-gray-200 mt-3">
          <div className="w-80 bg-orange-500 text-center text-white">80%</div>
        </div>
        <div className="bg-gray-200 mt-3">
          <div className="w-96 bg-red-500 text-center text-white">96%</div>
        </div>
      </div>
      <div className="mt-4 mx-10 mb-4">
        <div className="flex justify-between">
          <div className="w-80 rounded-lg border shadow  relative text-center">
            <img
              src="https://i.imgur.com/w1Bdydo.jpg"
              alt="rendom"
              className="rounded-t-lg"
            />
            <img
              src="https://i.imgur.com/8Km9tLL.jpg"
              alt="ren"
              className="rounded-full border-2 absolute top-40 left-28"
            />
            <p className="mt-10">Olivia Dunham</p>
            <p className="font-serif">
              Hello, i'm from another the other side!
            </p>
            <p className="mt-3 text-gray-400">34 Posts | 42 Friends</p>
          </div>
          <div className="w-80 rounded-lg border shadow  relative text-center">
            <img
              src="https://i.imgur.com/w1Bdydo.jpg"
              alt="rendom"
              className="rounded-t-lg"
            />
            <img
              src="https://i.imgur.com/8Km9tLL.jpg"
              alt="ren"
              className="rounded-full border-2 absolute top-40 left-28"
            />
            <p className="mt-10">Olivia Dunham</p>
            <p className="font-serif">
              Hello, i'm from another the other side!
            </p>
            <p className="mt-3 text-gray-400">34 Posts | 42 Friends</p>
          </div>
          <div className="w-80 rounded-lg border shadow  relative text-center">
            <img
              src="https://i.imgur.com/w1Bdydo.jpg"
              alt="rendom"
              className="rounded-t-lg"
            />
            <img
              src="https://i.imgur.com/8Km9tLL.jpg"
              alt="ren"
              className="rounded-full border-2 absolute top-40 left-28"
            />
            <p className="mt-10">Olivia Dunham</p>
            <p className="font-serif">
              Hello, i'm from another the other side!
            </p>
            <p className="mt-3 text-gray-400">34 Posts | 42 Friends</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
