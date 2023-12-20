import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteApp = () => {
  const navigate = useNavigate();
  // Get data from input
  const title = useRef("");
  const desc = useRef("");

  const addTask = () => {
    let insert = {
      title: title.current.value,
      desc: desc.current.value,
    };

    axios.post("http://localhost:4000/note", insert).then(() => {});
  };

  //   Get data from API
  const [data, setData] = useState([]);

  const listData = () => {
    axios.get("http://localhost:4000/note").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    listData();
  }, []);

  // Delete note
  const deleteNote = (id) => {
    axios.delete(`http://localhost:4000/note/${id}`).then((res) => {
      console.warn(res);
      listData();
    });
  };
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="text-3xl my-5 font-semibold">Note Taking App</h3>
        <form
          action=""
          className="border w-96 mx-auto p-5 rounded-lg shadow-lg"
        >
          <input
            type="text"
            ref={title}
            placeholder="Title here..."
            className="border outline-none p-1 rounded-sm w-80"
          />
          <br />
          <textarea
            rows="4"
            ref={desc}
            placeholder="Discription here..."
            className="border  outline-none p-1 rounded-sm w-80 my-4"
          ></textarea>
          <br />
          <button
            className="border p-1 px-3 bg-green-900 text-white rounded-md"
            onClick={addTask}
          >
            Add Note
          </button>
          <button className="border p-1 px-3 ms-4 bg-red-900 text-white rounded-md">
            Reset
          </button>
        </form>
      </div>
      <hr />
      <div className="text-center mt-5">
        <h3 className="text-3xl font-semibold">Lists of Notes:- {data.length}</h3>
        <h3 className="text-1xl font-semibold text-right mx-5">
          Number of Notes:-{" "}
          <button className="bg-slate-400 px-1 rounded-full"></button>
        </h3>
        <table className="mx-auto border">
          <thead>
            <tr className="border">
              <th>No.</th>
              <th>Title</th>
              <th>Discription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="border w-80">
                  <td className="w-28">{item.id}</td>
                  <td className="w-40">{item.title}</td>
                  <td className="w-96">{item.desc}</td>
                  <td className="w-28">
                    <button
                      className="mx-2"
                      onClick={() => deleteNote(item.id)}
                    >
                      &#128465;
                    </button>{" "}
                    ||
                    <button
                      className="mx-2"
                      onClick={() => navigate(`/list/uplist/${item.id}`)}
                    >
                      &#9998;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoteApp;
