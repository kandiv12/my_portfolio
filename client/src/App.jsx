import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        {" "}
        {/* Ensures space for the page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Always visible */}
    </Router>
  );
};

export default App;
