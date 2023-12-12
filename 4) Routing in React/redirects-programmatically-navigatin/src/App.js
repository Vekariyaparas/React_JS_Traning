import React from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Login from "./components/Login";
import PageNote from "./components/PageNote";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<PageNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
