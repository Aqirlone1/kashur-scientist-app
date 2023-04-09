import React from "react";
import { Link } from "react-router-dom";

//import homepage css file.
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h2> Welcome to Kashur Scientist! </h2>{" "}
        <p>
          We are a startup that specializes in providing online courses on
          various subjects.Our courses are designed to help you enhance your
          skills and knowledge, and advance your career.{" "}
        </p>{" "}
        <Link to="/courses">
          <button className="explore-button"> Explore Courses </button>{" "}
        </Link>{" "}
        </div>{" "}

    </div>
  );
}

export default HomePage;
