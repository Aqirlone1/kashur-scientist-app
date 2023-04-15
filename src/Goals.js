import React from 'react';
import { Link } from 'react-router-dom';
import './Goals.css';


function Goals() {
  return (
    <div className="parentG">
      <div className="cardsG">
      <div className="part1G"></div>
      <div className="part2G">
      <h1 id="cardheadG">Exam Preperation</h1>
      <p>KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken a taken important step towards educating people about different competative exams like NEET,JEE,NTSE,OLYMPIADS etc.</p>
      <Link to="/exam" id="btn">Know More</Link>
      </div>

      </div>

      <div className="cardsG">

      <div className="part1-MH">
      <h1 id="cardheadG">Mental Health</h1><br/>
      <p>KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken a significant step towards promoting mental health awareness in schools. </p>
      <Link to="mentalhealth" id ="btn">Know More</Link>

      </div>
      <div className="part2-emt"></div>

      <div ></div>
      </div>

      <div className="cardsG">
      
      <div className="part1G"></div>
      <div className="part2G">
      <h1 id="cardheadG">Skill Orientation</h1><br/>
      <p>KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken an important step towards promoting skill awareness among students. The institute has launched a program that involves visiting different schools and organizing various events to make students aware of market needs and demanding skills. </p>
      <Link to="skill" id="btn">Know More</Link>
      </div>
      </div>

    </div>
  );
}

export default Goals;
