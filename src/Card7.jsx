import React from "react";
import stockData from "./StockData";

const Card7 = (props) => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Market Value {props.InvestedAmount}</h5>

          <p className='card-text'>
            {" "}
            % of portfolio value {props.PercentOfPortfolioValue}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card7;
