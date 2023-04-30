import React from 'react'
import './Goals.css'
import img1 from './images/img1.jpeg'
import android from './images/android.jpeg'
import python from './images/python.jpeg'
import webd from './images/webd.jpeg'

function Skill() {
  return (
    <div class="skill">
        <h1 id="skillhead">SKILL ORIENTATION</h1>
        <p className="skillpara1">KOSHUR SCIENTIST, a leading educational institute in Kashmir, has taken an important step towards promoting skill awareness among students. The institute has launched a program that involves visiting different schools and organizing various events to make students aware of market needs and demanding skills. The program aims to help students become market-ready at a very early age so that they can get employed in their desired industries.
        The events organized under this program aim to educate students about the latest market trends and the skills that are in demand in various industries. The program also includes workshops and seminars conducted by industry professionals who provide guidance and support to students. The events are designed to help students develop the necessary skills to excel in their chosen fields.
        The skill awareness program is an excellent initiative by KOSHUR SCIENTIST, as it addresses an issue that is often overlooked in the education system. Many students graduate from schools without the necessary skills to excel in their chosen fields, and this program provides them with the necessary support and guidance they need to become industry-ready.
        The program is an excellent opportunity for students to learn about the latest market trends and the skills that are in demand in various industries. It also promotes a culture of excellence and encourages students to develop the necessary skills to excel in their chosen fields. The program aims to produce skilled industry-ready students who are equipped to tackle the challenges of the modern world.
        In conclusion, KOSHUR SCIENTIST's skill awareness program is an excellent initiative that provides much-needed support and guidance to students. The program's focus on visiting different schools and organizing various events is an effective way to spread awareness and educate students about the latest market trends and the skills that are in demand in various industries. It is an excellent opportunity for students to learn about the latest market trends and develop the necessary skills to excel in their chosen fields. The program promotes a culture of excellence and 
        aims to produce skilled industry-ready students who are equipped to tackle the challenges of the modern world.</p>
    
      <div class="pic-skill">
        <img src={img1} alt="img1" className="pic"/>
        <img src={python} alt="python" className="pic"/>
        <img src={webd} alt="webd" className="pic"/>
        <img src={android} alt="android" className="pic"/>
      </div>
      
    </div>
  )
}

export default Skill