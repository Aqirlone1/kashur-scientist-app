import React from 'react';
import { Link } from 'react-router-dom';
import Mentalhealth from './Mentalhealth';
import Skill from './Skill';
import Exam from './Exam';
import exam from './images/exam.jpeg'
import mh from './images/mh.jpeg'
import skill from './images/skill.jpeg'
import './Goals.css';


function Goals() {
  return (
    <div className="parentG">
      <div className="cardsG">
      <div className="part-Gpics" >
      <img src={exam} alt="exam" className="Gpics"/>
      </div>
      <div className="part2G">
      <h1 id="cardheadG">Exam Preperation</h1>
      <p className="paraG">KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken a taken important step towards educating people about different competative exams like NEET,JEE,NTSE,OLYMPIADS etc.</p>
      <Link to="/Exam">
       <button id="btn">Know More</button> 
      </Link>
      </div>

      </div>

      <div className="cardsG-MH">

      <div className="part1-MH">
      <h1 id="cardheadG">Mental Health</h1><br/>
      <p className="paraG">KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken a significant step towards promoting mental health awareness in schools. </p>
      <Link to="/Mentalhealth">
      <button id="btn">Know More</button>
      
      </Link>{" "}

      </div>
      <div className="part-Gpics">  
          <img src={mh} alt="mentalhealth" className="Gpics" id="pic-mh"/>
      </div>

      <div></div>
      </div>

      <div className="cardsG">
      
      <div className="part-Gpics">
      <img src={skill} alt="skill" className="Gpics"/>
      </div>
      <div className="part2G">
      <h1 id="cardheadG">Skill Orientation</h1><br/>
      <p className="paraG">KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken an important step towards promoting skill awareness among students. The institute has launched a program that involves visiting different schools and organizing various events to make students aware of market needs and demanding skills. </p>
      <Link to="/Skill">
      <button id="btn">Know More</button> 
      </Link>
      </div>
      </div>

    </div>
  );
}

export default Goals;
