import React from "react";
import "./CardList.css";
import "./CardList.css";

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card-m">
      <h2> {title} </h2> 
      <h3> {content} </h3>{" "}
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    {
      title: "2000",
      content: "STUDENTS TAUGHT",
    },

    {
      title: "10",
      content: "COURSES",
    },

    {
      title: "19",
      content: "EVENTS",
    },
  ];

  return (
    <div className="cardList">
      {" "}
      {cardsData.map((cardData) => (
        <Card key={cardData.title} {...cardData} />
      ))}{" "}
    </div>
  );
};

export default CardList;
