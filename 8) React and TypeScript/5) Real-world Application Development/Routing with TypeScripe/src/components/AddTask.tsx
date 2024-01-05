import axios from 'axios';
import React, { useState } from 'react';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTask = () => {
    const noteData = {
      title,
      desc,
    };

    axios.post("http://localhost:4000/note", noteData)
      .then(() => {
        console.log("Note added successfully!");
      })
      .catch(error => {
        console.error("Error adding note:", error);
      });
    setTitle("");
    setDesc("");
  };

  const resetForm = () => {
    setTitle("");
    setDesc("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title here..."
            className="border outline-none p-1 rounded-sm w-80"
          />
          <br />
          <textarea
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description here..."
            className="border  outline-none p-1 rounded-sm w-80 my-4"
          ></textarea>
          <br />
          <button
            type="button"
            className="border p-1 px-3 bg-green-900 text-white rounded-md"
            onClick={addTask}
          >
            Add Note
          </button>
          <button
            type="button"
            className="border p-1 px-3 ms-4 bg-red-900 text-white rounded-md"
            onClick={resetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
