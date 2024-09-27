import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Watch from "./pages/Watch";
import About from "./pages/About";
import MainCharacter from "./MainCharacter";
import ContactUs from "./pages/ContactUs";
import EventShow from "./pages/EventShow";
import ColorFulClub from "./pages/ColorFulClub";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="/maincharacter" element={<MainCharacter />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/eventshow" element={<EventShow />} />
        <Route path="/colorfulclub" element={<ColorFulClub />} />
      </Routes>
    </Router>
  );
}

export default App;
