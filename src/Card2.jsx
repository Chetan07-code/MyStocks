import React from "react";
import stockData from "./StockData";

const Card2 = (props) => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text'>Quantity {props.Quantity}</p>
          <p className='card-text'>Avg Cost {props.AvgCost}</p>
          <p className='card-text'>Investment Amt {props.InvestedAmount}</p>
        </div>
      </div>
    </>
  );
};

export default Card2;
