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
  const [notes, setNotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API call to fetch notes
      const response = await fetch(
        `http://localhost:4000/note?page=${pageNumber}`
      );
      const data = await response.json();

      // Update state with the new notes
      setNotes((prevNotes) => [...prevNotes, ...data]);

      // Increment page number for the next fetch
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Infinite scroll handler
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Load more data when user reaches the bottom of the page
      fetchData();
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // }

  useEffect(() => {
    fetchData();
  }, []);

  // Delete note
  const deleteNote = (id) => {
    axios.delete(`http://localhost:4000/note/${id}`).then((res) => {
      console.warn(res);
      fetchData();
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
        <h3 className="text-3xl font-semibold">Lists of Notes</h3>
        <h3 className="text-1xl font-semibold text-right mx-5">
          Number of Notes:- {notes.length}
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
            {notes.map((item) => {
              return (
                <tr key={item.idd} className="border w-80">
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
        {loading && <p className="text-3xl">Loading...</p>}
      </div>
    </>
  );
};

export default NoteApp;
