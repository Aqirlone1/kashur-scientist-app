import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Courses from "./Courses";
import "./index.css";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Router>
        <div>
          <header>
            <nav className="navbar">
              <div className="navbar-left">
                <h1 className="comp"> Kashur Scientist..... </h1>{" "}
              </div>{" "}
              <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
                <ul className="navbar-links">
                  <li>
                    <Link to="/"> Home </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/about"> About </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/contact"> Contact </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/courses"> Courses </Link>{" "}
                    <ul className="dropdown">
                      <li>
                        <a href="https://api.whatsapp.com/send?phone=1234567890">
                          <i className="fab fa-whatsapp"> </i>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a href="tel:+1234567890">
                          <i className="fas fa-phone"> </i>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="navbar-toggle" onClick={toggleMenu}>
                <span> </span> <span> </span> <span> </span>{" "}
              </div>{" "}
            </nav>{" "}
          </header>{" "}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/about" element={<About />} />{" "}
              <Route path="/contact" element={<Contacts />} />{" "}
              <Route path="/courses" element={<Courses />} />{" "}
            </Routes>{" "}
          </main>{" "}
        </div>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
