import React from "react";
import HomePage from "./HomePage";
import CardList from "./CardList";
import CoursesCard from "./CoursesCard/CoursesCard";
import Slant from "./Aima/slant";
import Slider from "./Aima/Slider";
import "./featured.css";
import Footer from "./Aima/footer";



const Home = () => {
  return (
    <div>
      <HomePage />
      <CoursesCard />
      <CardList />
      <Slant />
      <div className="featured-in">FEATURED IN</div>
      <Slider />
      <div className="blank-space"> </div>
      <Footer />
    </div>
  );
};

export default Home;
