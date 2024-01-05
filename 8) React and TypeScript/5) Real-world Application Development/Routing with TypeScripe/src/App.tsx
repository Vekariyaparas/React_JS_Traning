import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from "./components/Layout";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addTask" element={<AddTask />} />
          <Route path="listTask" element={<ListTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
