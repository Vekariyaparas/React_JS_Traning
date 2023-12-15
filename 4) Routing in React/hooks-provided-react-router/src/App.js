import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import PageNot from "./Components/PageNot";
import John from "./Components/John";
import Clain from "./Components/Clain";
import Amit from "./Components/Amit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/john" element={<John />} />
          <Route path="profile/clain" element={<Clain />} />
          <Route path="profile/amit" element={<Amit />} />
          <Route path="*" element={<PageNot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
