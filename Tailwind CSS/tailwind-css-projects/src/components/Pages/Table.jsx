import React from "react";

const Table = () => {
  return (
    <>
      <div className="mx-10">
        <div className="flex justify-between mt-3">
          <div className="border w-full rounded-lg bg-gray-50">
            <h1 className="bg-slate-200 p-3 border">Bordered Table</h1>
            <table className="m-2 border text-left">
              <tr className="border">
                <th className="border p-1 px-2">Title</th>
                <th className="border px-2 w-36">Author</th>
                <th className="border px-2 w-36">Views</th>
              </tr>
              <tr className="border">
                <td className="border p-1 px-2">Intro to CSS</td>
                <td className="border p-1 px-2">Adam</td>
                <td className="border p-1 px-2">858</td>
              </tr>
              <tr>
                <td className="border p-1 px-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border p-1 px-2">Adam</td>
                <td className="border p-1 px-2">112</td>
              </tr>
              <tr className="border">
                <td className="border p-1 px-2">Into to JavaScript</td>
                <td className="border p-1 px-2">Chris</td>
                <td className="border p-1 px-2">1,280</td>
              </tr>
            </table>
          </div>
          <div className="border w-full rounded-lg ms-3 bg-gray-50">
            <h1 className="bg-slate-200 p-3 border">Colored Table</h1>
            <table className="m-2 border text-left">
              <tr className="border border-white bg-black text-white">
                <th className="p-1 px-2">Title</th>
                <th className="px-2 w-36">Author</th>
                <th className="px-2 w-36">Views</th>
              </tr>
              <tr className="border border-white bg-blue-400 text-white">
                <td className="p-1 px-2">Intro to CSS</td>
                <td className="p-1 px-2">Adam</td>
                <td className="p-1 px-2">858</td>
              </tr>
              <tr className="border border-white bg-green-400 text-white">
                <td className="p-1 px-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="p-1 px-2">Adam</td>
                <td className="p-1 px-2">112</td>
              </tr>
              <tr className="border border-white bg-red-500 text-white">
                <td className="p-1 px-2">Into to JavaScript</td>
                <td className="p-1 px-2">Chris</td>
                <td className="p-1 px-2">1,280</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="border w-full rounded-lg bg-gray-50 mt-3">
          <h1 className="bg-slate-200 p-3 border">Full Table</h1>
          <table className="m-2 border text-left">
            <tr className="border">
              <th className="border p-1 w-80 px-2">Student Name</th>
              <th className="border px-2 w-60">City</th>
              <th className="border px-2 w-60">Course</th>
              <th className="border px-2 w-60">Fee</th>
              <th className="border px-2 w-60">Status</th>
            </tr>
            <tr className="border">
              <td className="border p-1 px-2">Micheal Clarke</td>
              <td className="border p-1 px-2">Sydney</td>
              <td className="border p-1 px-2">MS</td>
              <td className="border p-1 px-2">900 $</td>
              <td className="border p-1 px-2">True</td>
            </tr>
            <tr>
              <td className="border p-1 px-2">Micheal Clarke</td>
              <td className="border p-1 px-2">Sydney</td>
              <td className="border p-1 px-2">MS</td>
              <td className="border p-1 px-2">900 $</td>
              <td className="border p-1 px-2">True</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-2">Micheal Clarke</td>
              <td className="border p-1 px-2">Sydney</td>
              <td className="border p-1 px-2">MS</td>
              <td className="border p-1 px-2">900 $</td>
              <td className="border p-1 px-2">True</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-2">Micheal Clarke</td>
              <td className="border p-1 px-2">Sydney</td>
              <td className="border p-1 px-2">MS</td>
              <td className="border p-1 px-2">900 $</td>
              <td className="border p-1 px-2">True</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-2">Micheal Clarke</td>
              <td className="border p-1 px-2">Sydney</td>
              <td className="border p-1 px-2">MS</td>
              <td className="border p-1 px-2">900 $</td>
              <td className="border p-1 px-2">True</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
