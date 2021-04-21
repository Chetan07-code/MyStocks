import React from "react";

const Card5 = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <i className='bi bi-list'></i>
          <h5 className='card-title'>
            EFA{" "}
            <span className='text-end'>
              iShares <h6>by BlackRock</h6>
            </span>
          </h5>

          <p className='card-text'>
            $68.9{" "}
            <span>
              MSCI EAFE Index
              <h6>Developed Market Equity</h6>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card5;
