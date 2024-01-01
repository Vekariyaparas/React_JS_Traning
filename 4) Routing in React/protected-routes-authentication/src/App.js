import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './components/Protected';
import Layout from './components/Layout';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/about' element={<Protected Component={About} />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
