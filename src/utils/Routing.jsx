import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import John from "../components/John";
import Ayush from "../components/Ayush";
import UserDetail from "../components/userDetail";


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:name" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default Routing;
