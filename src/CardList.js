import React from "react";
import "./CardList.css";
import "./CardList.css";

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {
    lat: '35.5',
    lon: '-78.5'
  },
  headers: {
    'X-RapidAPI-Key': 'bf2e6b66fbmsh3f7b786138085aep19759djsn7d78cd33dc85',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

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
