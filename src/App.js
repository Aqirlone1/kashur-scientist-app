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
                <div className="ks"> </div>{" "}
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
                  </li>{" "}
                  <li>
                        <Link to="https://api.whatsapp.com/send?phone=917051248791">
                          < i className = "fab fa-whatsapp" >💬</i>{" "}


                        </Link>{" "}
                  </li>{" "}
                      <li>
                        <Link to="tel:+1234567890">
                          <i className="fas fa-phone"> 📞</i>{" "}
                        </Link>{" "}
                  </li>{" "}
                      <li>
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

              < Route path="*" element={<h1> 404 Not Found </h1>} />{" "}
            </Routes>{" "}
          </main>{" "}
        </div>{" "}
      </Router>{" "}
    </>
  );
}

export default App;

