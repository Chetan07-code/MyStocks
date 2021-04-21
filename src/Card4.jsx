import React from "react";
import stockData from "./StockData";

const Card4 = (props) => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Unrealized P/L {props.UnrealizedPandL}</h5>

          <p className='card-text'>% return {props.PercentReturn}</p>
          <button>Buy</button>
          <button>Sell</button>
        </div>
      </div>
    </>
  );
};

export default Card4;
