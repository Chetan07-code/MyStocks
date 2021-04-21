import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";

const Cards = () => {
  return (
    <>
      <div className='container'>
        <div className='row row-cols-4'>
          <div className='col'>
            <Card1 />
          </div>
          <div className='col'>
            <Card2 />
          </div>
          <div className='col'>
            <Card3 />
          </div>
          <div className='col'>
            <Card4 />
          </div>
        </div>
        <div className='row row-cols-4'>
          <div className='col'>
            <Card5 />
          </div>
          <div className='col'>
            <Card6 />
          </div>
          <div className='col'>
            <Card7 />
          </div>
          <div className='col'>
            <Card8 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

export { Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8 };
