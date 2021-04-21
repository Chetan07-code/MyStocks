import React from "react";

const Card1 = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <i className='bi bi-list'></i>
          <h5 className='card-title'>
            ITOT{" "}
            <span className='text-end'>
              iShares <h6>by BlackRock</h6>
            </span>
          </h5>

          <p className='card-text'>
            $283.3{" "}
            <span>
              S&P 500 Index
              <h6>US Equity</h6>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card1;
