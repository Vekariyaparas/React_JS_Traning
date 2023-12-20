import React from "react";
import NoteApp from "./components/NoteApp";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UpdateNote from "./components/UpdateNote";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/home" element={<NoteApp />} />
            <Route path="/list/uplist/:id" element={<UpdateNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
