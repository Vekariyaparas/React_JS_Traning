import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateNote = () => {
  // Add data in API
  const [note, setNote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/note").then((res) => {
      setNote(res.data);
    });
  }, []);

  // update data in api
  const title = useRef("");
  const desc = useRef("");
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/note/${id}`).then((res) => {
      title.current.value = res.data.title;
      desc.current.value = res.data.desc;
    });
  }, []);

  const UpdateData = () => {
    const update = {
      title: title.current.value,
      desc: desc.current.value,
    };

    axios.put(`http://localhost:4000/note/${id}`, update).then(() => {});
    Navigate("/list");
  };

  return (
    <div className="text-center mb-5">
      <h3 className="text-3xl my-5 font-semibold">Upadate Data</h3>
      <form action="" className="border w-96 mx-auto p-5 rounded-lg shadow-lg">
        <input
          type="text"
          ref={title}
          name="title"
          placeholder="Title here..."
          className="border outline-none p-1 rounded-sm w-80"
        />
        <br />
        <textarea
          rows="4"
          ref={desc}
          name="desc"
          placeholder="Discription here..."
          className="border  outline-none p-1 rounded-sm w-80 my-4"
        ></textarea>
        <br />
        <button
          className="border p-1 px-3 bg-green-900 text-white rounded-md"
          onClick={UpdateData}
        >
          Save Change
        </button>
      </form>
    </div>
  );
};

export default UpdateNote;
