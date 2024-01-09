import React from "react";
import RegistrationForm from "./Component/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import CounterApp from "./Component/CounterApp";
import Filter from "./Component/Filter";
import Crud from "./Component/Crud";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<CounterApp />} />
            <Route path="filter" element={<Filter />} />
            <Route path="crud" element={<Crud />} />
            <Route path="login" element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
