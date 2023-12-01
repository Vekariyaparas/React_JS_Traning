import React, { useEffect, useReducer, useState } from "react";

const initialNote = JSON.parse(localStorage.getItem("note")) || [];

const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case EDIT_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, content: action.payload.content }
          : note
      );

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};

export default function Note() {
  const [notes, dispatch] = useReducer(noteReducer, initialNote);
  const [newNotes, setNewNotes] = useState("");
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNotes.trim() !== "") {
      dispatch({
        type: ADD_NOTE,
        payload: { id: Date.now(), content: newNotes },
      });
      setNewNotes("");
    }
  };

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  const editeNote = (id, content) => {
    dispatch({ type: EDIT_NOTE, payload: { id, content } });
  };

  const filterNote = notes.filter((note) =>
    note.content.toLowerCase().includes(searchNote.toLocaleLowerCase())
  );

  return (
    <>
      <div className="container mx-auto p-4 shadow">
        <h1 className="text-center">Note Taking App</h1>
        <div className="my-5">
          <p className="float-end ms-3 bg-info p-1 btn fw-bold">
            Total Notes: {notes.length}
          </p>
          <input
            className="float-end form-control w-25 p-1"
            type="text"
            placeholder="Search notes"
            value={searchNote}
            onChange={(e) => setSearchNote(e.target.value)}
          />
          <input
            className="form-control d-inline w-25 p-1"
            type="text"
            placeholder="Add a new note"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          />
          <button className="btn btn-secondary p-1 ms-2" onClick={addNote}>
            Add Note
          </button>
          
          <ul className="mt-4 px-4">
            {filterNote.map((note) => (
              <li key={note.id} className="mt-2 w-50">
                {note.content}
                <button
                  onClick={() =>
                    editeNote(note.id, prompt("Edit note:", note.content))
                  }
                  className="float-end btn bg-secondary text-white px-1 ms-2"
                >
                  <b className="bi bi-pencil"></b>
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="float-end  btn bg-danger text-white px-1 ms-2"
                >
                  <b className="bi bi-trash"></b>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
