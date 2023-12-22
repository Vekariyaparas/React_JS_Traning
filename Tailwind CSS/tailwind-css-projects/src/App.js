import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Forms from "./components/Pages/Forms";
import Buttons from "./components/Pages/Buttons";
import Table from "./components/Pages/Table";
import Uicompo from "./components/Pages/Uicompo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Forms />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="table" element={<Table />} />
            <Route path="ui-component" element={<Uicompo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
