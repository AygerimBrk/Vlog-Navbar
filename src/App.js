import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import AddVlog from "./components/AddVlog/AddVlog";
import CardVlog from "./components/CardVlog/CardVlog";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./components/Select/Select";

const App = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Header />
        {/* <AddVlog />
        <CardVlog />
        <Contact />
        <AboutUs />
        <Select /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-vlog" element={<AddVlog />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
