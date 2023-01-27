import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar, Notfound } from "./components";
import { StateContext } from "./context/StateContext";
import "./index.css";
import { About, Contact, Home, Shop } from "./pages";

const App = () => {
  return (
    <StateContext>
      <div className="bg-gradient-to-b from-[#5400BF] to-[#1D0043]">
        <div className="container mx-auto">
          <div className="lg:mx-24">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="Shop" element={<Shop />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </StateContext>
  );
};

export default App;
